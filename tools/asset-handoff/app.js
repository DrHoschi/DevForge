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
const approvalDecision = document.querySelector('#approvalDecision');
const createApprovalButton = document.querySelector('#createApprovalButton');
const applyApprovalButton = document.querySelector('#applyApprovalButton');
const approvalRecordStatus = document.querySelector('#approvalRecordStatus');
const approvalErrors = document.querySelector('#approvalErrors');
const approvalPreview = document.querySelector('#approvalPreview');
const payloadFile = document.querySelector('#payloadFile');
const bindPayloadButton = document.querySelector('#bindPayloadButton');
const payloadBindingStatus = document.querySelector('#payloadBindingStatus');
const payloadErrors = document.querySelector('#payloadErrors');
const payloadPreview = document.querySelector('#payloadPreview');
const createFingerprintButton = document.querySelector('#createFingerprintButton');
const fingerprintStatus = document.querySelector('#fingerprintStatus');
const fingerprintErrors = document.querySelector('#fingerprintErrors');
const fingerprintPreview = document.querySelector('#fingerprintPreview');

let currentManifest = null;
let currentApprovalRecord = null;
let selectedPayload = null;
let currentPayloadBinding = null;
let currentFingerprintRecord = null;

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

export function validateApprovalRecordInput(input) {
  const required = ['assetId', 'sourceReference', 'sourceVersion', 'decision'];
  const errors = [];

  for (const field of required) {
    if (!String(input[field] || '').trim()) errors.push(`${field} fehlt.`);
  }

  if (input.decision && !['APPROVED', 'NOT APPROVED'].includes(input.decision)) {
    errors.push('decision ist ungültig.');
  }

  return { valid: errors.length === 0, errors };
}

export function buildApprovalRecord(input) {
  const validation = validateApprovalRecordInput(input);
  if (!validation.valid) {
    throw new Error('Approval Record ist ungültig.');
  }

  return {
    approvalRecordVersion: '1',
    assetId: String(input.assetId).trim(),
    sourceReference: String(input.sourceReference).trim(),
    sourceVersion: String(input.sourceVersion).trim(),
    decision: String(input.decision).trim()
  };
}

export function matchesApprovalIdentity(record, input) {
  if (!record) return false;
  return (
    record.assetId === String(input.assetId || '').trim() &&
    record.sourceReference === String(input.sourceReference || '').trim() &&
    record.sourceVersion === String(input.sourceVersion || '').trim()
  );
}

export function applyApprovalRecordToHandoff(input, record) {
  if (!matchesApprovalIdentity(record, {
    assetId: input.assetId,
    sourceReference: input.sourceRef,
    sourceVersion: input.sourceVersion
  })) {
    throw new Error('IDENTITY MISMATCH');
  }

  return {
    ...input,
    approvalStatus: record.decision
  };
}

function readApprovalInput() {
  const input = readInput();
  return {
    assetId: input.assetId,
    sourceReference: input.sourceRef,
    sourceVersion: input.sourceVersion,
    decision: String(approvalDecision.value || '').trim()
  };
}

function clearApprovalErrors() {
  approvalErrors.replaceChildren();
}

function renderApprovalErrors(errors) {
  clearApprovalErrors();
  for (const error of errors) {
    const item = document.createElement('li');
    item.textContent = error;
    approvalErrors.appendChild(item);
  }
}

function renderApprovalRecordState() {
  clearApprovalErrors();

  if (!currentApprovalRecord) {
    approvalRecordStatus.textContent = 'NO RECORD';
    approvalPreview.textContent = 'Noch kein Approval Record erzeugt.';
    applyApprovalButton.disabled = true;
    return;
  }

  const current = readInput();
  const matches = matchesApprovalIdentity(currentApprovalRecord, {
    assetId: current.assetId,
    sourceReference: current.sourceRef,
    sourceVersion: current.sourceVersion
  });

  approvalPreview.textContent = JSON.stringify(currentApprovalRecord, null, 2);
  approvalRecordStatus.textContent = matches ? 'VALID' : 'IDENTITY MISMATCH';
  applyApprovalButton.disabled = !matches;

  if (!matches) {
    renderApprovalErrors(['IDENTITY MISMATCH: Asset ID, Source Reference oder Source Version stimmt nicht mehr mit dem Approval Record überein.']);
  }
}

function createApprovalRecord() {
  const input = readApprovalInput();
  const validation = validateApprovalRecordInput(input);
  if (!validation.valid) {
    currentApprovalRecord = null;
    renderApprovalErrors(validation.errors);
    approvalRecordStatus.textContent = 'INVALID';
    approvalPreview.textContent = 'Kein gültiger Approval Record erzeugt.';
    applyApprovalButton.disabled = true;
    renderPayloadBindingState();
    return;
  }

  currentApprovalRecord = buildApprovalRecord(input);
  renderApprovalRecordState();
  renderPayloadBindingState();
}

function applyCurrentApprovalRecord() {
  if (!currentApprovalRecord) return;

  const input = readInput();
  try {
    const applied = applyApprovalRecordToHandoff(input, currentApprovalRecord);
    form.elements.approvalStatus.value = applied.approvalStatus;
    renderApprovalRecordState();
    renderPayloadBindingState();
    renderEvaluation();
  } catch (error) {
    approvalRecordStatus.textContent = 'IDENTITY MISMATCH';
    applyApprovalButton.disabled = true;
    renderApprovalErrors([error instanceof Error ? error.message : 'IDENTITY MISMATCH']);
    renderPayloadBindingState();
  }
}

export function validatePayloadBindingInput(input, payload) {
  const required = ['assetId', 'sourceReference', 'sourceVersion'];
  const errors = [];

  if (!payload) errors.push('payload fehlt.');
  for (const field of required) {
    if (!String(input[field] || '').trim()) errors.push(`${field} fehlt.`);
  }

  return { valid: errors.length === 0, errors };
}

export function buildPayloadBinding(input, payload) {
  const validation = validatePayloadBindingInput(input, payload);
  if (!validation.valid) {
    throw new Error('Payload Binding ist ungültig.');
  }

  return {
    payload,
    assetId: String(input.assetId).trim(),
    sourceReference: String(input.sourceReference).trim(),
    sourceVersion: String(input.sourceVersion).trim()
  };
}

export function matchesPayloadBindingIdentity(binding, input) {
  if (!binding) return false;
  return (
    binding.assetId === String(input.assetId || '').trim() &&
    binding.sourceReference === String(input.sourceReference || '').trim() &&
    binding.sourceVersion === String(input.sourceVersion || '').trim()
  );
}

export function isPayloadApprovalCompatible(binding, approvalRecord) {
  if (!binding || !approvalRecord || approvalRecord.decision !== 'APPROVED') return false;
  return (
    approvalRecord.assetId === binding.assetId &&
    approvalRecord.sourceReference === binding.sourceReference &&
    approvalRecord.sourceVersion === binding.sourceVersion
  );
}

function readPayloadIdentity() {
  const input = readInput();
  return {
    assetId: input.assetId,
    sourceReference: input.sourceRef,
    sourceVersion: input.sourceVersion
  };
}

function clearPayloadErrors() {
  payloadErrors.replaceChildren();
}

function renderPayloadErrors(errors) {
  clearPayloadErrors();
  for (const error of errors) {
    const item = document.createElement('li');
    item.textContent = error;
    payloadErrors.appendChild(item);
  }
}

function payloadInfo(payload) {
  if (!payload) return null;
  return {
    name: payload.name || '',
    size: Number.isFinite(payload.size) ? payload.size : null,
    type: payload.type || ''
  };
}

function renderPayloadBindingState() {
  clearPayloadErrors();

  if (!selectedPayload) {
    payloadBindingStatus.textContent = 'NO PAYLOAD';
    bindPayloadButton.disabled = true;
    payloadPreview.textContent = 'Noch kein lokaler Source-Payload ausgewählt.';
    renderFingerprintState();
    return;
  }

  bindPayloadButton.disabled = false;

  if (!currentPayloadBinding) {
    payloadBindingStatus.textContent = 'SELECTED / NOT BOUND';
    payloadPreview.textContent = JSON.stringify({
      payloadInfo: payloadInfo(selectedPayload),
      note: 'Dateimetadaten sind rein informativ und keine fachliche Identität.'
    }, null, 2);
    renderFingerprintState();
    return;
  }

  const currentIdentity = readPayloadIdentity();
  const samePayloadObject = currentPayloadBinding.payload === selectedPayload;
  const identityMatches = matchesPayloadBindingIdentity(currentPayloadBinding, currentIdentity);
  const preview = {
    boundIdentity: {
      assetId: currentPayloadBinding.assetId,
      sourceReference: currentPayloadBinding.sourceReference,
      sourceVersion: currentPayloadBinding.sourceVersion
    },
    payloadInfo: payloadInfo(currentPayloadBinding.payload),
    note: 'Payload bleibt lokaler Browser-Laufzeitzustand.'
  };
  payloadPreview.textContent = JSON.stringify(preview, null, 2);

  if (!samePayloadObject) {
    payloadBindingStatus.textContent = 'PAYLOAD CHANGED';
    renderPayloadErrors(['PAYLOAD CHANGED: Der ausgewählte Payload stimmt nicht mehr mit der bestehenden Bindung überein. Neu binden.']);
    renderFingerprintState();
    return;
  }

  if (!identityMatches) {
    payloadBindingStatus.textContent = 'IDENTITY MISMATCH';
    renderPayloadErrors(['IDENTITY MISMATCH: Asset ID, Source Reference oder Source Version stimmt nicht mehr mit der Payload-Bindung überein. Neu binden.']);
    renderFingerprintState();
    return;
  }

  if (!isPayloadApprovalCompatible(currentPayloadBinding, currentApprovalRecord)) {
    payloadBindingStatus.textContent = 'BOUND / APPROVAL MISMATCH';
    renderPayloadErrors(['APPROVAL MISMATCH: Für die gebundene Identität ist kein identischer aktuell gültiger APPROVED DF-07 Approval Record aktiv.']);
    renderFingerprintState();
    return;
  }

  payloadBindingStatus.textContent = 'BOUND / APPROVAL-COMPATIBLE';
  bindPayloadButton.disabled = true;
  renderFingerprintState();
}

function bindCurrentPayload() {
  const identity = readPayloadIdentity();
  const validation = validatePayloadBindingInput(identity, selectedPayload);
  if (!validation.valid) {
    currentPayloadBinding = null;
    currentFingerprintRecord = null;
    payloadBindingStatus.textContent = 'INVALID';
    renderPayloadErrors(validation.errors);
    renderFingerprintState();
    return;
  }

  currentPayloadBinding = buildPayloadBinding(identity, selectedPayload);
  currentFingerprintRecord = null;
  renderPayloadBindingState();
}

function clearFingerprintErrors() {
  fingerprintErrors.replaceChildren();
}

function renderFingerprintErrors(errors) {
  clearFingerprintErrors();
  for (const error of errors) {
    const item = document.createElement('li');
    item.textContent = error;
    fingerprintErrors.appendChild(item);
  }
}

export function matchesFingerprintIdentity(record, input) {
  if (!record) return false;
  return (
    record.assetId === String(input.assetId || '').trim() &&
    record.sourceReference === String(input.sourceReference || '').trim() &&
    record.sourceVersion === String(input.sourceVersion || '').trim()
  );
}

export function buildFingerprintRecord(binding, digest) {
  if (!binding) throw new Error('DF-08 Payload Binding fehlt.');
  const normalizedDigest = String(digest || '').trim().toLowerCase();
  if (!/^[0-9a-f]{64}$/.test(normalizedDigest)) {
    throw new Error('SHA-256 Digest ist ungültig.');
  }

  return {
    fingerprintRecordVersion: '1',
    assetId: binding.assetId,
    sourceReference: binding.sourceReference,
    sourceVersion: binding.sourceVersion,
    algorithm: 'SHA-256',
    digest: normalizedDigest
  };
}

export async function calculateSha256Digest(payload) {
  if (!payload) throw new Error('Payload fehlt.');
  if (!globalThis.crypto || !globalThis.crypto.subtle) {
    throw new Error('SHA-256 Browser-Krypto ist nicht verfügbar.');
  }

  const bytes = await payload.arrayBuffer();
  const digestBuffer = await globalThis.crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digestBuffer), byte => byte.toString(16).padStart(2, '0')).join('');
}

function currentBindingIsValid() {
  if (!selectedPayload || !currentPayloadBinding) return false;
  if (currentPayloadBinding.payload !== selectedPayload) return false;
  return matchesPayloadBindingIdentity(currentPayloadBinding, readPayloadIdentity());
}

function renderFingerprintState() {
  clearFingerprintErrors();

  if (!selectedPayload) {
    fingerprintStatus.textContent = 'NO PAYLOAD';
    createFingerprintButton.disabled = true;
    fingerprintPreview.textContent = currentFingerprintRecord
      ? JSON.stringify(currentFingerprintRecord, null, 2)
      : 'Noch kein Fingerprint Record erzeugt.';
    return;
  }

  if (!currentPayloadBinding) {
    fingerprintStatus.textContent = 'NO VALID BINDING';
    createFingerprintButton.disabled = true;
    fingerprintPreview.textContent = currentFingerprintRecord
      ? JSON.stringify(currentFingerprintRecord, null, 2)
      : 'Noch kein Fingerprint Record erzeugt.';
    if (currentFingerprintRecord) {
      renderFingerprintErrors(['BINDING INVALIDATED: Der vorhandene Fingerprint ist ohne aktuelle DF-08-Bindung nicht gültig.']);
    }
    return;
  }

  if (currentPayloadBinding.payload !== selectedPayload) {
    fingerprintStatus.textContent = 'PAYLOAD CHANGED';
    createFingerprintButton.disabled = true;
    fingerprintPreview.textContent = currentFingerprintRecord
      ? JSON.stringify(currentFingerprintRecord, null, 2)
      : 'Noch kein Fingerprint Record erzeugt.';
    renderFingerprintErrors(['PAYLOAD CHANGED: Für den aktuell ausgewählten Payload ist eine neue DF-08-Bindung und danach ein neuer Fingerprint erforderlich.']);
    return;
  }

  const identity = readPayloadIdentity();
  if (!matchesPayloadBindingIdentity(currentPayloadBinding, identity)) {
    fingerprintStatus.textContent = 'IDENTITY MISMATCH';
    createFingerprintButton.disabled = true;
    fingerprintPreview.textContent = currentFingerprintRecord
      ? JSON.stringify(currentFingerprintRecord, null, 2)
      : 'Noch kein Fingerprint Record erzeugt.';
    renderFingerprintErrors(['IDENTITY MISMATCH: Die aktuelle Identität stimmt nicht mehr mit der DF-08-Payload-Bindung überein.']);
    return;
  }

  createFingerprintButton.disabled = false;

  if (!currentFingerprintRecord) {
    fingerprintStatus.textContent = 'READY';
    fingerprintPreview.textContent = 'Gültige DF-08-Bindung vorhanden. Noch kein Fingerprint Record erzeugt.';
    return;
  }

  if (!matchesFingerprintIdentity(currentFingerprintRecord, identity)) {
    fingerprintStatus.textContent = 'IDENTITY MISMATCH';
    fingerprintPreview.textContent = JSON.stringify(currentFingerprintRecord, null, 2);
    renderFingerprintErrors(['IDENTITY MISMATCH: Der vorhandene Fingerprint Record gehört zu einer anderen deklarierten Identität. Neu binden und neuen Fingerprint erzeugen.']);
    return;
  }

  fingerprintStatus.textContent = 'VALID';
  fingerprintPreview.textContent = JSON.stringify(currentFingerprintRecord, null, 2);
  createFingerprintButton.disabled = true;
}

async function createCurrentFingerprint() {
  if (!currentBindingIsValid()) {
    renderFingerprintState();
    return;
  }

  const bindingAtStart = currentPayloadBinding;
  const payloadAtStart = selectedPayload;
  createFingerprintButton.disabled = true;
  fingerprintStatus.textContent = 'COMPUTING';
  clearFingerprintErrors();
  fingerprintPreview.textContent = 'SHA-256 wird aus den Payload-Bytes berechnet …';

  try {
    const digest = await calculateSha256Digest(payloadAtStart);

    if (
      currentPayloadBinding !== bindingAtStart ||
      selectedPayload !== payloadAtStart ||
      !currentBindingIsValid()
    ) {
      currentFingerprintRecord = null;
      renderFingerprintState();
      return;
    }

    currentFingerprintRecord = buildFingerprintRecord(bindingAtStart, digest);
    renderFingerprintState();
  } catch (error) {
    currentFingerprintRecord = null;
    fingerprintStatus.textContent = 'ERROR';
    createFingerprintButton.disabled = !currentBindingIsValid();
    fingerprintPreview.textContent = 'Kein Fingerprint Record erzeugt.';
    renderFingerprintErrors([error instanceof Error ? error.message : 'Fingerprint-Berechnung fehlgeschlagen.']);
  }
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
  renderApprovalRecordState();
  renderPayloadBindingState();
  renderEvaluation();
});

approvalDecision.addEventListener('change', () => {
  clearApprovalErrors();
});

payloadFile.addEventListener('change', () => {
  selectedPayload = payloadFile.files && payloadFile.files.length > 0 ? payloadFile.files[0] : null;
  currentPayloadBinding = null;
  currentFingerprintRecord = null;
  renderPayloadBindingState();
});

createApprovalButton.addEventListener('click', createApprovalRecord);
applyApprovalButton.addEventListener('click', applyCurrentApprovalRecord);
bindPayloadButton.addEventListener('click', bindCurrentPayload);
createFingerprintButton.addEventListener('click', createCurrentFingerprint);
evaluateButton.addEventListener('click', renderEvaluation);
manifestButton.addEventListener('click', () => {
  if (!renderEvaluation()) return;
  renderManifest();
});
downloadButton.addEventListener('click', exportManifest);

renderProfile(null);
renderApprovalRecordState();
renderPayloadBindingState();
renderFingerprintState();
renderEvaluation();
