const slots = {
  source: {
    input: document.querySelector('#sourceInput'),
    stage: document.querySelector('#sourceStage'),
    image: document.querySelector('#sourceImage'),
    overlay: document.querySelector('#overlaySource'),
    meta: document.querySelector('#sourceMeta'),
    url: null
  },
  result: {
    input: document.querySelector('#resultInput'),
    stage: document.querySelector('#resultStage'),
    image: document.querySelector('#resultImage'),
    overlay: document.querySelector('#overlayResult'),
    meta: document.querySelector('#resultMeta'),
    url: null
  }
};

const baseView = document.querySelector('#baseView');
const overlayView = document.querySelector('#overlayView');
const differenceView = document.querySelector('#differenceView');
const baseMode = document.querySelector('#baseMode');
const overlayMode = document.querySelector('#overlayMode');
const differenceMode = document.querySelector('#differenceMode');
const overlayStage = document.querySelector('#overlayStage');
const differenceStage = document.querySelector('#differenceStage');
const differenceCanvas = document.querySelector('#differenceCanvas');
const blendRange = document.querySelector('#blendRange');
const blendValue = document.querySelector('#blendValue');
const alignX = document.querySelector('#alignX');
const alignY = document.querySelector('#alignY');
const alignScale = document.querySelector('#alignScale');
const alignXValue = document.querySelector('#alignXValue');
const alignYValue = document.querySelector('#alignYValue');
const alignScaleValue = document.querySelector('#alignScaleValue');
const resetAlignment = document.querySelector('#resetAlignment');

let currentMode = 'base';
let differenceFrame = 0;

function imagesReady() {
  return Boolean(
    slots.source.url &&
    slots.result.url &&
    slots.source.image.complete &&
    slots.result.image.complete &&
    slots.source.image.naturalWidth &&
    slots.result.image.naturalWidth
  );
}

function updateReadyState() {
  const ready = imagesReady();
  overlayStage.classList.toggle('ready', ready);
  differenceStage.classList.toggle('ready', ready);
  slots.source.overlay.hidden = !ready;
  slots.result.overlay.hidden = !ready;
  if (ready) scheduleDifferenceRender();
}

function loadSlot(slot, file) {
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    slot.meta.textContent = 'Nicht unterstützte Datei – bitte ein Bild wählen.';
    return;
  }

  if (slot.url) URL.revokeObjectURL(slot.url);
  const url = URL.createObjectURL(file);
  slot.url = url;

  slot.image.onload = () => {
    slot.stage.classList.add('has-image');
    slot.meta.textContent = `${file.name} · ${slot.image.naturalWidth} × ${slot.image.naturalHeight}px`;
    updateReadyState();
  };
  slot.image.onerror = () => {
    slot.stage.classList.remove('has-image');
    slot.meta.textContent = 'Bild konnte nicht geladen werden.';
    updateReadyState();
  };
  slot.image.src = url;
  slot.overlay.src = url;
  updateReadyState();
}

function setMode(mode) {
  currentMode = mode;
  baseView.hidden = mode !== 'base';
  overlayView.hidden = mode !== 'overlay';
  differenceView.hidden = mode !== 'difference';
  baseMode.setAttribute('aria-pressed', String(mode === 'base'));
  overlayMode.setAttribute('aria-pressed', String(mode === 'overlay'));
  differenceMode.setAttribute('aria-pressed', String(mode === 'difference'));
  if (mode === 'difference') scheduleDifferenceRender();
}

function updateBlend() {
  const value = Number(blendRange.value);
  slots.result.overlay.style.opacity = String(value / 100);
  blendValue.value = `${value}%`;
  blendValue.textContent = `${value}%`;
}

function updateAlignment() {
  const x = Number(alignX.value);
  const y = Number(alignY.value);
  const scalePercent = Number(alignScale.value);
  const scale = scalePercent / 100;

  slots.result.overlay.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  alignXValue.value = `${x} px`;
  alignXValue.textContent = `${x} px`;
  alignYValue.value = `${y} px`;
  alignYValue.textContent = `${y} px`;
  alignScaleValue.value = `${scalePercent}%`;
  alignScaleValue.textContent = `${scalePercent}%`;
  scheduleDifferenceRender();
}

function resetAlignmentValues() {
  alignX.value = '0';
  alignY.value = '0';
  alignScale.value = '100';
  updateAlignment();
}

function containRect(image, width, height) {
  const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight);
  const drawWidth = image.naturalWidth * scale;
  const drawHeight = image.naturalHeight * scale;
  return {
    x: (width - drawWidth) / 2,
    y: (height - drawHeight) / 2,
    width: drawWidth,
    height: drawHeight
  };
}

function renderImageToCanvas(image, width, height, alignment = null) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  context.clearRect(0, 0, width, height);

  const rect = containRect(image, width, height);
  if (!alignment) {
    context.drawImage(image, rect.x, rect.y, rect.width, rect.height);
    return context.getImageData(0, 0, width, height);
  }

  const cssWidth = differenceStage.clientWidth || width;
  const cssHeight = differenceStage.clientHeight || height;
  const pxPerCssX = width / cssWidth;
  const pxPerCssY = height / cssHeight;
  const x = alignment.x * pxPerCssX;
  const y = alignment.y * pxPerCssY;

  context.save();
  context.translate(width / 2 + x, height / 2 + y);
  context.scale(alignment.scale, alignment.scale);
  context.drawImage(image, rect.x - width / 2, rect.y - height / 2, rect.width, rect.height);
  context.restore();
  return context.getImageData(0, 0, width, height);
}

function renderDifference() {
  differenceFrame = 0;
  if (!imagesReady()) {
    differenceStage.classList.remove('ready');
    return;
  }

  const cssWidth = Math.max(1, Math.round(differenceStage.clientWidth));
  const cssHeight = Math.max(1, Math.round(differenceStage.clientHeight));
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.round(cssWidth * pixelRatio));
  const height = Math.max(1, Math.round(cssHeight * pixelRatio));

  if (differenceCanvas.width !== width || differenceCanvas.height !== height) {
    differenceCanvas.width = width;
    differenceCanvas.height = height;
  }

  const sourceData = renderImageToCanvas(slots.source.image, width, height);
  const resultData = renderImageToCanvas(slots.result.image, width, height, {
    x: Number(alignX.value),
    y: Number(alignY.value),
    scale: Number(alignScale.value) / 100
  });

  const output = new ImageData(width, height);
  const source = sourceData.data;
  const result = resultData.data;
  const target = output.data;

  for (let i = 0; i < target.length; i += 4) {
    const dr = Math.abs(source[i] - result[i]);
    const dg = Math.abs(source[i + 1] - result[i + 1]);
    const db = Math.abs(source[i + 2] - result[i + 2]);
    const da = Math.abs(source[i + 3] - result[i + 3]);
    const intensity = Math.round((dr + dg + db + da) / 4);
    target[i] = intensity;
    target[i + 1] = intensity;
    target[i + 2] = intensity;
    target[i + 3] = 255;
  }

  const context = differenceCanvas.getContext('2d');
  context.putImageData(output, 0, 0);
  differenceStage.classList.add('ready');
}

function scheduleDifferenceRender() {
  if (differenceFrame) cancelAnimationFrame(differenceFrame);
  differenceFrame = requestAnimationFrame(renderDifference);
}

for (const slot of Object.values(slots)) {
  slot.input.addEventListener('change', () => loadSlot(slot, slot.input.files?.[0]));
}

baseMode.addEventListener('click', () => setMode('base'));
overlayMode.addEventListener('click', () => setMode('overlay'));
differenceMode.addEventListener('click', () => setMode('difference'));
blendRange.addEventListener('input', updateBlend);
alignX.addEventListener('input', updateAlignment);
alignY.addEventListener('input', updateAlignment);
alignScale.addEventListener('input', updateAlignment);
resetAlignment.addEventListener('click', resetAlignmentValues);
window.addEventListener('resize', scheduleDifferenceRender);

updateBlend();
resetAlignmentValues();
updateReadyState();
setMode(currentMode);

window.addEventListener('beforeunload', () => {
  if (differenceFrame) cancelAnimationFrame(differenceFrame);
  for (const slot of Object.values(slots)) {
    if (slot.url) URL.revokeObjectURL(slot.url);
  }
});
