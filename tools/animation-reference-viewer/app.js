import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

const viewer = document.querySelector('#viewer');
const empty = document.querySelector('#empty');
const fileInput = document.querySelector('#fileInput');
const loadButton = document.querySelector('#loadButton');
const playButton = document.querySelector('#playButton');
const runtimeStatus = document.querySelector('#runtimeStatus');
const errorBox = document.querySelector('#error');
const timeline = document.querySelector('#timeline');
const timelineTime = document.querySelector('#timelineTime');
const timelinePercent = document.querySelector('#timelinePercent');
const facingReadout = document.querySelector('#facingReadout');
const cameraReadout = document.querySelector('#cameraReadout');
const facingButtons = [...document.querySelectorAll('[data-facing]')];
const cameraButtons = [...document.querySelectorAll('[data-camera]')];
const fields = {
  file: document.querySelector('#fFile'), mesh: document.querySelector('#fMesh'), skeleton: document.querySelector('#fSkeleton'), anim: document.querySelector('#fAnim'), duration: document.querySelector('#fDuration'), inPlace: document.querySelector('#fInPlace'), root: document.querySelector('#fRoot')
};

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0c0e12);
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
viewer.prepend(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xffffff, 0x303744, 2.1));
const key = new THREE.DirectionalLight(0xffffff, 2.8);
key.position.set(4, 7, 5);
key.castShadow = true;
scene.add(key);
const floor = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshStandardMaterial({ color: 0x171b22, roughness: 1 }));
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);
const grid = new THREE.GridHelper(10, 20, 0x3b424f, 0x252a33);
grid.position.y = 0.002;
scene.add(grid);

const origin = new THREE.Group();
scene.add(origin);
let currentModel = null;
let skeletonHelper = null;
let mixer = null;
let action = null;
let playing = true;
let clip = null;
let rootProbe = null;
let rootReference = new THREE.Vector3();
let modelCenter = new THREE.Vector3(0, 1, 0);
let modelHeight = 2;
let currentFacing = 'N';
let currentCamera = 'ISO';
const clock = new THREE.Clock();

const facingAngles = { N:0, NE:-45, E:-90, SE:-135, S:180, SW:135, W:90, NW:45 };
const cameraPresets = {
  ISO: { id:'GAMEPLAY_ISO_45', dir:new THREE.Vector3(1, 1, 1).normalize() },
  FRONT: { id:'TECH_FRONT', dir:new THREE.Vector3(0, 0, 1) },
  BACK: { id:'TECH_BACK', dir:new THREE.Vector3(0, 0, -1) },
  LEFT: { id:'TECH_LEFT', dir:new THREE.Vector3(-1, 0, 0) },
  RIGHT: { id:'TECH_RIGHT', dir:new THREE.Vector3(1, 0, 0) },
  TOP: { id:'TECH_TOP', dir:new THREE.Vector3(0, 1, 0) }
};

function setFact(el, text, kind = '') { el.textContent = text; el.className = kind; }
function setError(message = '') { errorBox.textContent = message; errorBox.classList.toggle('show', Boolean(message)); }

function applyCameraPreset() {
  const preset = cameraPresets[currentCamera];
  const distance = Math.max(modelHeight * 3, 4);
  const dir = preset.dir.clone();
  camera.position.copy(modelCenter).addScaledVector(dir, distance);
  if (currentCamera === 'TOP') camera.up.set(0, 0, -1); else camera.up.set(0, 1, 0);
  camera.lookAt(modelCenter);
  camera.near = 0.01;
  camera.far = distance * 10;
  updateOrthoFrustum();
  cameraReadout.textContent = preset.id;
  cameraButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.camera === currentCamera));
}

function updateOrthoFrustum() {
  const w = Math.max(1, viewer.clientWidth);
  const h = Math.max(1, renderer.domElement.clientHeight || Math.round(w * 0.76));
  const aspect = w / h;
  const halfHeight = Math.max(modelHeight * 0.72, 1.2);
  camera.top = halfHeight;
  camera.bottom = -halfHeight;
  camera.left = -halfHeight * aspect;
  camera.right = halfHeight * aspect;
  camera.updateProjectionMatrix();
}

function resize() {
  const w = viewer.clientWidth;
  const h = Math.max(520, Math.round(w * 0.76));
  renderer.setSize(w, h, false);
  updateOrthoFrustum();
}
new ResizeObserver(resize).observe(viewer);
resize();

function resetTimeline() {
  timeline.disabled = true; timeline.value = '0'; timelineTime.textContent = '0.000 / 0.000 s'; timelinePercent.textContent = '0.0 %';
}
function updateTimelineUI(time = 0) {
  if (!clip || clip.duration <= 0) { resetTimeline(); return; }
  const duration = clip.duration;
  const localTime = Math.max(0, Math.min(time, duration));
  const normalized = duration > 0 ? localTime / duration : 0;
  timeline.value = String(Math.round(normalized * 1000));
  timelineTime.textContent = `${localTime.toFixed(3)} / ${duration.toFixed(3)} s`;
  timelinePercent.textContent = `${(normalized * 100).toFixed(1)} %`;
}

function disposeCurrent() {
  if (currentModel) {
    origin.remove(currentModel);
    currentModel.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose?.();
      if (obj.material) (Array.isArray(obj.material) ? obj.material : [obj.material]).forEach(mat => mat.dispose?.());
    });
  }
  if (skeletonHelper) origin.remove(skeletonHelper);
  currentModel = null; skeletonHelper = null; mixer = null; action = null; clip = null; rootProbe = null; resetTimeline();
}

function analyze(model) {
  let meshCount = 0, skinnedCount = 0, boneCount = 0;
  model.traverse(obj => { if (obj.isMesh) meshCount++; if (obj.isSkinnedMesh) skinnedCount++; if (obj.isBone) boneCount++; });
  return { meshCount, skinnedCount, boneCount };
}
function locateRoot(model) {
  for (const name of ['mixamorig:Hips', 'Hips', 'mixamorig:Root', 'Root']) { const found = model.getObjectByName(name); if (found) return found; }
  return model;
}
function testInPlace(model, animationClip) {
  if (!animationClip) return { supported:false, drift:null };
  const probe = locateRoot(model); const testMixer = new THREE.AnimationMixer(model); const testAction = testMixer.clipAction(animationClip); testAction.play();
  testMixer.setTime(0); model.updateMatrixWorld(true); const a = probe.getWorldPosition(new THREE.Vector3());
  testMixer.setTime(Math.max(0, animationClip.duration - 0.0001)); model.updateMatrixWorld(true); const b = probe.getWorldPosition(new THREE.Vector3());
  testMixer.stopAllAction(); testMixer.uncacheRoot(model);
  return { supported:true, drift:Math.hypot(b.x-a.x, b.z-a.z) };
}
function setPlaying(nextPlaying) {
  if (!action) return;
  playing = nextPlaying; action.paused = !playing; playButton.textContent = playing ? 'Pause' : 'Weiter'; runtimeStatus.textContent = playing ? 'Animation läuft' : 'Animation pausiert'; clock.getDelta();
}
function seekNormalized(normalized) {
  if (!mixer || !clip || !action) return;
  const n = Math.max(0, Math.min(normalized, 1)); const target = n >= 1 ? Math.max(0, clip.duration - 0.000001) : clip.duration * n;
  playing = false; action.paused = false; action.time = target; mixer.update(0); action.paused = true; playButton.textContent = 'Weiter';
  currentModel?.updateMatrixWorld(true); updateTimelineUI(target); runtimeStatus.textContent = `Position gewählt · ${(n*100).toFixed(1)} %`; clock.getDelta();
}

function setFacing(id) {
  if (!(id in facingAngles)) return;
  currentFacing = id;
  origin.rotation.y = THREE.MathUtils.degToRad(facingAngles[id]);
  origin.updateMatrixWorld(true);
  facingReadout.textContent = id;
  facingButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.facing === id));
}
function setCameraPreset(id) {
  if (!(id in cameraPresets)) return;
  currentCamera = id;
  applyCameraPreset();
}

async function loadFBX(file) {
  setError(''); runtimeStatus.textContent = 'FBX wird gelesen …'; playButton.disabled = true; disposeCurrent();
  setFact(fields.file, file.name); setFact(fields.mesh, 'prüfe …'); setFact(fields.skeleton, 'prüfe …'); setFact(fields.anim, 'prüfe …'); setFact(fields.duration, '–'); setFact(fields.inPlace, 'prüfe …'); setFact(fields.root, '–');
  try {
    const buffer = await file.arrayBuffer(); const loader = new FBXLoader(); const model = loader.parse(buffer, ''); model.name = file.name;
    const stats = analyze(model);
    setFact(fields.mesh, stats.meshCount > 0 ? `${stats.meshCount} Mesh${stats.meshCount === 1 ? '' : 'es'} (${stats.skinnedCount} skinned)` : 'KEIN sichtbares Mesh', stats.meshCount > 0 ? 'ok' : 'bad');
    setFact(fields.skeleton, stats.boneCount > 0 ? `${stats.boneCount} Bones` : 'keine Bones erkannt', stats.boneCount > 0 ? 'ok' : 'bad');
    clip = model.animations?.[0] || null;
    setFact(fields.anim, clip ? `${model.animations.length} Clip${model.animations.length === 1 ? '' : 's'} · ${clip.name || 'unnamed'}` : 'kein Clip erkannt', clip ? 'ok' : 'bad');
    setFact(fields.duration, clip ? `${clip.duration.toFixed(3)} s` : '–');
    model.traverse(obj => { if (obj.isMesh) { obj.castShadow = true; obj.receiveShadow = true; if (obj.material) (Array.isArray(obj.material) ? obj.material : [obj.material]).forEach(mat => { mat.side = THREE.FrontSide; mat.needsUpdate = true; }); } });

    currentModel = model; origin.add(model);
    if (stats.boneCount > 0 && stats.meshCount === 0) { skeletonHelper = new THREE.SkeletonHelper(model); origin.add(skeletonHelper); }
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model);
    if (!box.isEmpty()) model.position.y -= box.min.y;
    model.updateMatrixWorld(true);
    const fittedBox = new THREE.Box3().setFromObject(model);
    const size = fittedBox.getSize(new THREE.Vector3()); const center = fittedBox.getCenter(new THREE.Vector3());
    modelHeight = Math.max(size.y, 1); modelCenter.set(center.x, Math.max(modelHeight * 0.5, center.y), center.z);
    setFacing(currentFacing); applyCameraPreset();

    if (clip) {
      const inPlace = testInPlace(model, clip); const tolerance = 0.01;
      if (inPlace.supported) { const label = inPlace.drift <= tolerance ? `PASS · horizontale Drift ${inPlace.drift.toFixed(4)}` : `WARN · horizontale Drift ${inPlace.drift.toFixed(4)}`; setFact(fields.inPlace, label, inPlace.drift <= tolerance ? 'ok' : 'warn'); }
      mixer = new THREE.AnimationMixer(model); action = mixer.clipAction(clip); action.play(); action.setLoop(THREE.LoopRepeat, Infinity); playing = true; playButton.textContent = 'Pause'; playButton.disabled = false; timeline.disabled = false; action.time = 0; mixer.update(0); updateTimelineUI(0);
    } else { setFact(fields.inPlace, 'nicht prüfbar', 'warn'); resetTimeline(); }

    rootProbe = locateRoot(model); model.updateMatrixWorld(true); rootReference.copy(rootProbe.getWorldPosition(new THREE.Vector3())); setFact(fields.root, `${rootReference.x.toFixed(3)} / ${rootReference.z.toFixed(3)}`);
    empty.classList.add('hidden'); runtimeStatus.textContent = stats.meshCount > 0 && clip ? 'Runtime-Intake geladen · Animation läuft' : 'Asset geladen · Intake-Hinweise rechts prüfen';
  } catch (err) {
    console.error(err); setError(`FBX konnte nicht geladen werden: ${err?.message || err}`); runtimeStatus.textContent = 'Laden fehlgeschlagen'; empty.classList.remove('hidden');
  }
}

loadButton.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => { const file = fileInput.files?.[0]; if (file) loadFBX(file); });
playButton.addEventListener('click', () => { if (action) setPlaying(!playing); });
timeline.addEventListener('input', () => seekNormalized(Number(timeline.value) / 1000));
timeline.addEventListener('change', () => seekNormalized(Number(timeline.value) / 1000));
facingButtons.forEach(btn => btn.addEventListener('click', () => setFacing(btn.dataset.facing)));
cameraButtons.forEach(btn => btn.addEventListener('click', () => setCameraPreset(btn.dataset.camera)));

setFacing('N');
setCameraPreset('ISO');

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  if (mixer && playing) { mixer.update(dt); updateTimelineUI(action?.time || 0); }
  if (currentModel && rootProbe) { currentModel.updateMatrixWorld(true); const p = rootProbe.getWorldPosition(new THREE.Vector3()); setFact(fields.root, `${p.x.toFixed(3)} / ${p.z.toFixed(3)}`); }
  renderer.render(scene, camera);
}
animate();
