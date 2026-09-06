const slots = {
  source: {
    input: document.querySelector('#sourceInput'),
    stage: document.querySelector('#sourceStage'),
    image: document.querySelector('#sourceImage'),
    meta: document.querySelector('#sourceMeta'),
    url: null
  },
  result: {
    input: document.querySelector('#resultInput'),
    stage: document.querySelector('#resultStage'),
    image: document.querySelector('#resultImage'),
    meta: document.querySelector('#resultMeta'),
    url: null
  }
};

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
}

for (const slot of Object.values(slots)) {
  slot.input.addEventListener('change', () => loadSlot(slot, slot.input.files?.[0]));
}

window.addEventListener('beforeunload', () => {
  for (const slot of Object.values(slots)) {
    if (slot.url) URL.revokeObjectURL(slot.url);
  }
});
