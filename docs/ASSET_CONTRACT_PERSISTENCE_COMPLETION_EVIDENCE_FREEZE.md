# Sprite Lab – Asset Contract / Persistence Completion / Evidence / Freeze

**Status: PASS WITH DEVICE LIMITATION / FROZEN**  
**Date: 2026-09-25**

## Frozen product authority

- Repository: `DrHoschi/DevForge`
- Feature branch: `feature/asset-contract-persistence`
- Frozen product commit: `d7101a582d3b8fa9ef9d7bc0cf3feeefb5f7cc31`
- Build: `SPRITE LAB · ASSET PERSISTENCE · TESTBUILD 1`
- Product file changed by implementation: `tools/sprite-lab/index.html`

This document records completion evidence. It does not redefine the frozen product authority: the product authority remains exactly `d7101a582d3b8fa9ef9d7bc0cf3feeefb5f7cc31`.

## Scope authority

Implementation was limited to the separately reconciled and documented Asset Contract / Persistence scope:

- separate DevForge Asset Save / Load path
- stable internal frame identity
- stable-ID-based Spatial projection binding
- persistence of render/frame domain and Spatial Core domain
- explicit file persistence
- clean history/session boundary on Asset Load
- preservation of legacy `asset-lab-atlas-v1` behavior

No Marker/Sockets, autosave, localStorage/IndexedDB, backend/cloud persistence, Layer/Z-order, Rig/Skeleton, GLB/LOD/collision, or unrelated refactoring was authorized or included.

## Static / scope evidence

Static verification against the frozen product commit confirmed:

- build identity is `SPRITE LAB · ASSET PERSISTENCE · TESTBUILD 1`
- Spatial projection lookup uses stable internal frame identity rather than mutable frame name
- DevForge Asset serialization and load/validation paths are present
- Asset Load clears Undo/Redo history
- existing `exportObject()` for `asset-lab-atlas-v1` is unchanged from the frozen Spatial Core baseline
- legacy Atlas export contains no Spatial, Asset ID, or internal frame-ID fields
- existing new-source/import boundaries reset Spatial/Asset session state as required

**Static / Scope / Legacy Export Regression: PASS**  
**Static blockers: 0**

## iPhone functional evidence

Real-device verification on iPhone confirmed:

- correct TESTBUILD 1 deployed
- existing construction atlas loads
- DevForge Asset Save is available
- explicit Spatial values and a Footprint Projection were established
- DevForge Asset was saved
- after page reload, the saved DevForge Asset loaded successfully
- embedded sprite sheet restored
- all 79 frames restored
- World Width / Depth restored
- Spatial Origin restored
- Orientation restored
- `assetPPU` restored
- Footprint Projection restored
- Undo and Redo were disabled after Asset Load, confirming a fresh history session
- a frame was renamed and the asset was saved/reloaded again
- the Footprint Projection remained bound to the renamed frame, confirming stable identity rather than mutable-name binding

**iPhone Save → Reload → Load: PASS**  
**iPhone Spatial Restore: PASS**  
**iPhone History Reset: PASS**  
**iPhone Rename → Stable-ID Binding: PASS**

## Legacy Atlas export regression evidence

A real exported ZIP was inspected from the iPhone test.

It contained:

- `constructionAtlas.png`
- `constructionAtlas.json`

The JSON contained 79 frames and retained:

`meta.format = "asset-lab-atlas-v1"`

The exported legacy JSON contained:

- no `spatial`
- no `assetId`
- no internal frame `id`

The renamed human-readable frame label was exported normally through the legacy contract.

**Legacy Atlas JSON Regression: PASS**  
**PNG + JSON ZIP Regression: PASS**

## Device limitation

The full persistence roundtrip was not separately repeated on iPad.

This is recorded as an explicit **DEVICE LIMITATION**, not as an iPad PASS. The persistence implementation is shared JavaScript rather than a separate iPad data path, while known device differences in this product are primarily responsive/layout related.

The verified result is therefore:

- iPhone functional regression: PASS
- iPad full persistence regression: NOT SEPARATELY EXECUTED
- no iPad PASS is claimed

This limitation was explicitly accepted for the current product priority and does not block this freeze.

## Known non-blocking UI issue

After a DevForge Asset is successfully selected and loaded, the native file input displays **“Keine Datei ausgewählt”**.

Cause in the frozen implementation: after processing the file, the input value is intentionally reset so that the same file can be selected again. Safari therefore clears the native filename display even though the Asset has loaded successfully.

Classification:

**KNOWN UI ISSUE / NON-BLOCKING**

This issue does not indicate lost Asset state and did not affect the verified Save/Load roundtrip.

A future UI improvement may expose an independent loaded-asset status/filename without changing the native input behavior.

## Completion decision

Required implementation behavior was verified within the documented scope, with:

- static/scope verification: PASS
- iPhone functional regression: PASS
- stable-ID rename binding: PASS
- history/session reset: PASS
- legacy Atlas JSON regression: PASS
- PNG + JSON ZIP regression: PASS
- blockers: 0
- iPad full functional repeat: explicitly not executed / accepted device limitation
- native file-input filename display: known non-blocking UI issue

## Gate result

**Asset Contract / Persistence – Completion / Evidence / Freeze Gate: PASS WITH DEVICE LIMITATION / FROZEN**

Frozen product authority:

`d7101a582d3b8fa9ef9d7bc0cf3feeefb5f7cc31`

Any subsequent product change requires a separate authorized follow-up block.
