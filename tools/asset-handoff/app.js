const form = document.querySelector('#handoffForm');
const eligibilityStatus = document.querySelector('#eligibilityStatus');
const errorsList = document.querySelector('#errors');
const evaluateButton = document.querySelector('#evaluateButton');
const manifestButton = document.querySelector('#manifestButton');
const downloadButton = document.querySelector('#downloadButton');
const manifestPreview = document.querySelector('#manifestPreview');

let currentManifest = null;

function readInput() {
  const data = new FormData(form);
  return {
    manifestVersion: String(data.get('manifestVersion') || '').trim(),
    assetId: String(data.get('assetId') || '').trim(),
    assetName: String(data.get('assetName') || '').trim(),
    assetType: String(data.get('assetType') || '').trim(),
    targetProject: String(data.get('targetProject') || '').trim(),
    sourceRef: String(data.get('sourceRef') || '').trim(),
    approvalStatus: String(data.get('approvalStatus') || '').trim(),
    sourceVersion: String(data.get('sourceVersion') || '').trim(),
    targetPath: String(data.get('targetPath') || '').trim(),
    outputFilename: String(data.get('outputFilename') || '').trim(),
    format: String(data.get('format') || '').trim()
  };
}

export function validateHandoffInput(input) {
  const required = [
    'manifestVersion',
    'assetId',
    'assetName',
    'assetType',
    'targetProject',
    'sourceRef',
    'approvalStatus',
    'sourceVersion',
    'targetPath',
    'outputFilename',
    'format'
  ];

  const errors = [];
  for (const field of required) {
    if (!String(input[field] || '').trim()) errors.push(`${field} fehlt.`);
  }

  if (input.approvalStatus && !['APPROVED', 'NOT APPROVED'].includes(input.approvalStatus)) {
    errors.push('approvalStatus ist ungültig.');
  }

  return { valid: errors.length === 0, errors };
}

export function isHandoffEligible(input) {
  const validation = validateHandoffInput(input);
  return {
    eligible: validation.valid && input.approvalStatus === 'APPROVED',
    validation
  };
}

export function buildHandoffManifest(input) {
  const eligibility = isHandoffEligible(input);
  if (!eligibility.eligible) {
    throw new Error('Handoff ist nicht eligible.');
  }

  return {
    manifestVersion: input.manifestVersion,
    assetId: input.assetId,
    assetName: input.assetName,
    assetType: input.assetType,
    targetProject: input.targetProject,
    source: {
      reference: input.sourceRef,
      version: input.sourceVersion
    },
    approvalStatus: input.approvalStatus,
    target: {
      stagingPath: input.targetPath,
      outputFilename: input.outputFilename,
      format: input.format
    }
  };
}

function renderEvaluation() {
  const input = readInput();
  const { eligible, validation } = isHandoffEligible(input);

  errorsList.replaceChildren();
  const errors = [...validation.errors];
  if (validation.valid && input.approvalStatus !== 'APPROVED') {
    errors.push('approvalStatus muss APPROVED sein.');
  }

  for (const error of errors) {
    const item = document.createElement('li');
    item.textContent = error;
    errorsList.appendChild(item);
  }

  eligibilityStatus.textContent = eligible ? 'ELIGIBLE' : 'NOT ELIGIBLE';
  manifestButton.disabled = !eligible;
  if (!eligible) {
    currentManifest = null;
    downloadButton.disabled = true;
    manifestPreview.textContent = 'Noch kein manifest-fähiger Handoff.';
  }

  return eligible;
}

function renderManifest() {
  const input = readInput();
  currentManifest = buildHandoffManifest(input);
  manifestPreview.textContent = JSON.stringify(currentManifest, null, 2);
  downloadButton.disabled = false;
}

function exportManifest() {
  if (!currentManifest) return;
  const blob = new Blob([`${JSON.stringify(currentManifest, null, 2)}\n`], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${currentManifest.assetId}-handoff.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

form.addEventListener('input', () => {
  currentManifest = null;
  downloadButton.disabled = true;
  renderEvaluation();
});

evaluateButton.addEventListener('click', renderEvaluation);
manifestButton.addEventListener('click', () => {
  if (!renderEvaluation()) return;
  renderManifest();
});
downloadButton.addEventListener('click', exportManifest);

renderEvaluation();
