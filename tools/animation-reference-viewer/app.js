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
const fields = {
  file: document.querySelector('#fFile'),
  mesh: document.querySelector('#fMesh'),
  skeleton: document.querySelector('#fSkeleton'),
  anim: document.querySelector('#fAnim'),
  duration: document.querySelector('#fDuration'),
  inPlace: document.querySelector('#fInPlace'),
  root: document.querySelector('#fRoot')
};

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0c0e12);
const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 1000);
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
const clock = new THREE.Clock();

function setFact(el, text, kind = '') { el.textContent = text; el.className = kind; }
function setError(message = '') { errorBox.textContent = message; errorBox.classList.toggle('show', Boolean(message)); }

function resize() {
  const w = viewer.clientWidth;
  const h = Math.max(520, Math.round(w * 0.76));
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(viewer);
resize();

function resetTimeline() {
  timeline.disabled = true;
  timeline.value = '0';
  timelineTime.textContent = '0.000 / 0.000 s';
  timelinePercent.textContent = '0.0 %';
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
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        mats.forEach(mat => mat.dispose?.());
      }
    });
  }
  if (skeletonHelper) origin.remove(skeletonHelper);
  currentModel = null;
  skeletonHelper = null;
  mixer = null;
  action = null;
  clip = null;
  rootProbe = null;
  resetTimeline();
}

function analyze(model) {
  let meshCount = 0, skinnedCount = 0, boneCount = 0;
  model.traverse(obj => {
    if (obj.isMesh) meshCount += 1;
    if (obj.isSkinnedMesh) skinnedCount += 1;
    if (obj.isBone) boneCount += 1;
  });
  return { meshCount, skinnedCount, boneCount };
}

function fitCamera(model) {
  const box = new THREE.Box3().setFromObject(model);
  if (box.isEmpty()) { camera.position.set(3, 2.5, 4); camera.lookAt(0, 1, 0); return; }
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const height = Math.max(size.y, 1);
  const distance = height * 2.15;
  camera.position.set(center.x + distance * 0.72, center.y + height * 0.35, center.z + distance);
  camera.lookAt(center.x, center.y + height * 0.05, center.z);
  camera.near = Math.max(distance / 1000, 0.01);
  camera.far = distance * 20;
  camera.updateProjectionMatrix();
}

function locateRoot(model) {
  for (const name of ['mixamorig:Hips', 'Hips', 'mixamorig:Root', 'Root']) {
    const found = model.getObjectByName(name);
    if (found) return found;
  }
  return model;
}

function testInPlace(model, animationClip) {
  if (!animationClip) return { supported: false, drift: null };
  const probe = locateRoot(model);
  const testMixer = new THREE.AnimationMixer(model);
  const testAction = testMixer.clipAction(animationClip);
  testAction.play();
  testMixer.setTime(0);
  model.updateMatrixWorld(true);
  const a = probe.getWorldPosition(new THREE.Vector3());
  testMixer.setTime(Math.max(0, animationClip.duration - 0.0001));
  model.updateMatrixWorld(true);
  const b = probe.getWorldPosition(new THREE.Vector3());
  testMixer.stopAllAction();
  testMixer.uncacheRoot(model);
  return { supported: true, drift: Math.hypot(b.x - a.x, b.z - a.z) };
}

function setPlaying(nextPlaying) {
  if (!action) return;
  playing = nextPlaying;
  action.paused = !playing;
  playButton.textContent = playing ? 'Pause' : 'Weiter';
  runtimeStatus.textContent = playing ? 'Animation läuft' : 'Animation pausiert';
  clock.getDelta();
}

function seekNormalized(normalized) {
  if (!mixer || !clip || !action) return;
  const n = Math.max(0, Math.min(normalized, 1));
  const target = n >= 1 ? Math.max(0, clip.duration - 0.000001) : clip.duration * n;

  // Three.js does not evaluate a paused AnimationAction when AnimationMixer.setTime()
  // is used. Evaluate the requested action time while active, then freeze that pose.
  playing = false;
  action.paused = false;
  action.time = target;
  mixer.update(0);
  action.paused = true;
  playButton.textContent = 'Weiter';

  currentModel?.updateMatrixWorld(true);
  updateTimelineUI(target);
  runtimeStatus.textContent = `Position gewählt · ${(n * 100).toFixed(1)} %`;
  clock.getDelta();
}

async function loadFBX(file) {
  setError('');
  runtimeStatus.textContent = 'FBX wird gelesen …';
  playButton.disabled = true;
  disposeCurrent();
  setFact(fields.file, file.name);
  setFact(fields.mesh, 'prüfe …');
  setFact(fields.skeleton, 'prüfe …');
  setFact(fields.anim, 'prüfe …');
  setFact(fields.duration, '–');
  setFact(fields.inPlace, 'prüfe …');
  setFact(fields.root, '–');

  try {
    const buffer = await file.arrayBuffer();
    const loader = new FBXLoader();
    const model = loader.parse(buffer, '');
    model.name = file.name;
    const stats = analyze(model);
    setFact(fields.mesh, stats.meshCount > 0 ? `${stats.meshCount} Mesh${stats.meshCount === 1 ? '' : 'es'} (${stats.skinnedCount} skinned)` : 'KEIN sichtbares Mesh', stats.meshCount > 0 ? 'ok' : 'bad');
    setFact(fields.skeleton, stats.boneCount > 0 ? `${stats.boneCount} Bones` : 'keine Bones erkannt', stats.boneCount > 0 ? 'ok' : 'bad');

    clip = model.animations?.[0] || null;
    setFact(fields.anim, clip ? `${model.animations.length} Clip${model.animations.length === 1 ? '' : 's'} · ${clip.name || 'unnamed'}` : 'kein Clip erkannt', clip ? 'ok' : 'bad');
    setFact(fields.duration, clip ? `${clip.duration.toFixed(3)} s` : '–');

    model.traverse(obj => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach(mat => { mat.side = THREE.FrontSide; mat.needsUpdate = true; });
        }
      }
    });

    currentModel = model;
    origin.add(model);
    if (stats.boneCount > 0 && stats.meshCount === 0) {
      skeletonHelper = new THREE.SkeletonHelper(model);
      origin.add(skeletonHelper);
    }

    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model);
    if (!box.isEmpty()) model.position.y -= box.min.y;
    model.updateMatrixWorld(true);
    fitCamera(model);

    if (clip) {
      const inPlace = testInPlace(model, clip);
      const tolerance = 0.01;
      if (inPlace.supported) {
        const label = inPlace.drift <= tolerance ? `PASS · horizontale Drift ${inPlace.drift.toFixed(4)}` : `WARN · horizontale Drift ${inPlace.drift.toFixed(4)}`;
        setFact(fields.inPlace, label, inPlace.drift <= tolerance ? 'ok' : 'warn');
      }
      mixer = new THREE.AnimationMixer(model);
      action = mixer.clipAction(clip);
      action.play();
      action.setLoop(THREE.LoopRepeat, Infinity);
      playing = true;
      playButton.textContent = 'Pause';
      playButton.disabled = false;
      timeline.disabled = false;
      action.time = 0;
      mixer.update(0);
      updateTimelineUI(0);
    } else {
      setFact(fields.inPlace, 'nicht prüfbar', 'warn');
      resetTimeline();
    }

    rootProbe = locateRoot(model);
    model.updateMatrixWorld(true);
    rootReference.copy(rootProbe.getWorldPosition(new THREE.Vector3()));
    setFact(fields.root, `${rootReference.x.toFixed(3)} / ${rootReference.z.toFixed(3)}`);
    empty.classList.add('hidden');
    runtimeStatus.textContent = stats.meshCount > 0 && clip ? 'Runtime-Intake geladen · Animation läuft' : 'Asset geladen · Intake-Hinweise rechts prüfen';
  } catch (err) {
    console.error(err);
    setError(`FBX konnte nicht geladen werden: ${err?.message || err}`);
    runtimeStatus.textContent = 'Laden fehlgeschlagen';
    empty.classList.remove('hidden');
  }
}

loadButton.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => { const file = fileInput.files?.[0]; if (file) loadFBX(file); });
playButton.addEventListener('click', () => { if (action) setPlaying(!playing); });
timeline.addEventListener('input', () => seekNormalized(Number(timeline.value) / 1000));
timeline.addEventListener('change', () => seekNormalized(Number(timeline.value) / 1000));

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  if (mixer && playing) {
    mixer.update(dt);
    updateTimelineUI(action?.time || 0);
  }
  if (currentModel && rootProbe) {
    currentModel.updateMatrixWorld(true);
    const p = rootProbe.getWorldPosition(new THREE.Vector3());
    setFact(fields.root, `${p.x.toFixed(3)} / ${p.z.toFixed(3)}`);
  }
  renderer.render(scene, camera);
}
animate();
