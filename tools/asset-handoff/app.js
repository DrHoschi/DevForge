const form = document.querySelector('#handoffForm');
const eligibilityStatus = document.querySelector('#eligibilityStatus');
const errorsList = document.querySelector('#errors');
const evaluateButton = document.querySelector('#evaluateButton');
const manifestButton = document.querySelector('#manifestButton');
const downloadButton = document.querySelector('#downloadButton');
const manifestPreview = document.querySelector('#manifestPreview');
const profileSelect = document.querySelector('#profileSelect');
const profileStatus = document.querySelector('#profileStatus');
const profilePreview = document.querySelector('#profilePreview');

let currentManifest = null;

export const TARGET_PROJECT_PROFILES = Object.freeze({
  'siedler-mini': Object.freeze({
    profileVersion: '1',
    profileId: 'siedler-mini',
    profileName: 'Siedler Mini',
    targetProject: 'DrHoschi/siedler-mini',
    stagingPath: 'assets/characters/',
    format: 'png',
    outputFilename: 'carrier.png'
  })
});

export function getTargetProjectProfile(profileId) {
  const profile = TARGET_PROJECT_PROFILES[String(profileId || '').trim()];
  return profile || null;
}

export function applyTargetProjectProfile(input, profile) {
  if (!profile) return { ...input };
  return {
    ...input,
    targetProject: profile.targetProject,
    targetPath: profile.stagingPath,
    format: profile.format,
    outputFilename: profile.outputFilename
  };
}

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

function writeProfileValues(profile) {
  const current = readInput();
  const applied = applyTargetProjectProfile(current, profile);
  form.elements.targetProject.value = applied.targetProject;
  form.elements.targetPath.value = applied.targetPath;
  form.elements.format.value = applied.format;
  form.elements.outputFilename.value = applied.outputFilename;
}

function clearProfileValues() {
  form.elements.targetProject.value = '';
  form.elements.targetPath.value = '';
  form.elements.format.value = '';
  form.elements.outputFilename.value = '';
}

function renderProfile(profile) {
  if (!profile) {
    profileStatus.textContent = 'Keine Profil-Autorität aktiv. Zielwerte werden nicht automatisch gesetzt.';
    profilePreview.textContent = 'Noch kein Profil ausgewählt.';
    return;
  }

  profileStatus.textContent = `Profil aktiv: ${profile.profileName} (${profile.profileId})`;
  profilePreview.textContent = JSON.stringify(profile, null, 2);
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

profileSelect.addEventListener('change', () => {
  const profile = getTargetProjectProfile(profileSelect.value);
  if (profile) writeProfileValues(profile);
  else clearProfileValues();
  renderProfile(profile);
  currentManifest = null;
  downloadButton.disabled = true;
  renderEvaluation();
});

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

renderProfile(null);
renderEvaluation();
