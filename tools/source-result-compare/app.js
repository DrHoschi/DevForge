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
const baseMode = document.querySelector('#baseMode');
const overlayMode = document.querySelector('#overlayMode');
const overlayStage = document.querySelector('#overlayStage');
const blendRange = document.querySelector('#blendRange');
const blendValue = document.querySelector('#blendValue');
const alignX = document.querySelector('#alignX');
const alignY = document.querySelector('#alignY');
const alignScale = document.querySelector('#alignScale');
const alignXValue = document.querySelector('#alignXValue');
const alignYValue = document.querySelector('#alignYValue');
const alignScaleValue = document.querySelector('#alignScaleValue');
const resetAlignment = document.querySelector('#resetAlignment');

function updateOverlayReadyState() {
  const ready = Boolean(slots.source.url && slots.result.url);
  overlayStage.classList.toggle('ready', ready);
  slots.source.overlay.hidden = !ready;
  slots.result.overlay.hidden = !ready;
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
  };
  slot.image.onerror = () => {
    slot.stage.classList.remove('has-image');
    slot.meta.textContent = 'Bild konnte nicht geladen werden.';
  };
  slot.image.src = url;
  slot.overlay.src = url;
  updateOverlayReadyState();
}

function setMode(mode) {
  const overlay = mode === 'overlay';
  baseView.hidden = overlay;
  overlayView.hidden = !overlay;
  baseMode.setAttribute('aria-pressed', String(!overlay));
  overlayMode.setAttribute('aria-pressed', String(overlay));
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
}

function resetAlignmentValues() {
  alignX.value = '0';
  alignY.value = '0';
  alignScale.value = '100';
  updateAlignment();
}

for (const slot of Object.values(slots)) {
  slot.input.addEventListener('change', () => loadSlot(slot, slot.input.files?.[0]));
}

baseMode.addEventListener('click', () => setMode('base'));
overlayMode.addEventListener('click', () => setMode('overlay'));
blendRange.addEventListener('input', updateBlend);
alignX.addEventListener('input', updateAlignment);
alignY.addEventListener('input', updateAlignment);
alignScale.addEventListener('input', updateAlignment);
resetAlignment.addEventListener('click', resetAlignmentValues);

updateBlend();
resetAlignmentValues();
updateOverlayReadyState();

window.addEventListener('beforeunload', () => {
  for (const slot of Object.values(slots)) {
    if (slot.url) URL.revokeObjectURL(slot.url);
  }
});
