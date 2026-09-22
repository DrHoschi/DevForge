# DevForge – Asset Contract / Persistence Implementation Scope

**Status: IMPLEMENTATION SCOPE RECONCILED / DOCUMENTED / NOT IMPLEMENTED**  
**Date: 2026-09-22**

## Authority and baseline

This document records the authorized Implementation Scope Reconciliation for Asset Contract / Persistence.

The implementation must be reconciled against the frozen Spatial Core product authority:

- Repository: `DrHoschi/DevForge`
- Frozen product commit: `6fa9b5fcb8be3a884f0e5b3e9a74aca8e955490a`
- Frozen build: `SPRITE LAB · SPATIAL CORE · TESTBUILD 1`
- Product file: `tools/sprite-lab/index.html`

The definition authority is `docs/planned/ASSET_CONTRACT_PERSISTENCE_DEFINITION_SCOPE.md`.

This documentation gate does not authorize implementation or creation of an implementation branch.

## Minimum implementation boundary

The reconciled first implementation is limited to the existing Sprite Lab product file:

`tools/sprite-lab/index.html`

No additional product/runtime file is required by this scope.

The implementation adds a persistence path alongside the existing atlas compatibility path. It must not turn `asset-lab-atlas-v1` into the common DevForge Asset Contract.

## Parallel contracts

### Existing Atlas path

The existing `exportObject()` remains authoritative for `asset-lab-atlas-v1`.

Existing Atlas JSON export and PNG + JSON ZIP export must remain structurally compatible and must not gain Asset Contract, Spatial, stable-ID, UI-state, or history fields.

Existing Atlas JSON import remains a compatibility/import path.

### New Asset path

A separately identifiable Asset Save / Load path must serialize and restore the complete persistable DevForge asset domain state required by this scope.

Conceptually, the Asset Contract contains:

```text
DevForge Asset
+-- contract/version + stable asset identity
+-- render2d
|   +-- existing atlas/render domain
+-- spatial
    +-- world width/depth
    +-- origin
    +-- orientation
    +-- assetPPU
    +-- frame/direction projection bindings
```

Concrete final JSON property names, file extension, and cosmetic UI wording may be selected during implementation only insofar as necessary to implement this already-reconciled structure. They must not broaden the domain scope.

## Stable frame identity

The frozen Spatial Core currently keys `S.spatial.projections` by the human-readable frame name. Persistence requires a durable frame/direction binding independent of that editable label.

Therefore the implementation may add one stable internal identity to each frame.

Required behavior:

- new frames receive a stable identity
- loaded DevForge Assets preserve their existing stable identities
- a human-readable frame rename does not break or remap its Spatial projection
- legacy `asset-lab-atlas-v1` imports receive deterministic internal identities for the imported session
- stable internal identities are not added to the legacy `asset-lab-atlas-v1` export

The implementation must migrate the in-memory Spatial projection lookup from mutable frame name to the stable internal identity without changing the spatial meaning of the frozen Footprint Projection.

## Save path

The Asset Save path must serialize authoritative domain state only.

Persisted state in this scope includes:

- Asset Contract/version information
- stable asset identity
- render/frame domain required to reconstruct the asset
- stable frame identities
- Spatial world width/depth
- Spatial Origin
- Orientation
- `assetPPU`
- frame/direction Footprint Projection bindings

No repository, cloud, server, project database, or browser-local persistence is introduced.

The first persistence mechanism is explicit file Save.

## Load path

Asset Load must have a separate input/path from the existing PNG and legacy Atlas JSON inputs.

Load must:

1. parse and validate the Asset Contract discriminator/version required by this first implementation;
2. establish a new asset/editor session;
3. restore the render/frame domain;
4. restore stable frame identities;
5. restore the Spatial asset-wide domain;
6. restore Footprint Projection bindings to the correct stable frames;
7. clear Undo/Redo history;
8. reconstruct transient editor presentation from the restored domain state.

Unsupported or malformed Asset Contract input must fail explicitly rather than being silently interpreted as `asset-lab-atlas-v1`.

## Non-persisted editor state

The following are explicitly not Asset Contract authority and must not be serialized as part of this implementation:

- selected tab/panel
- zoom
- pan
- selected/current frame
- open inspector/properties state
- active drag/manipulation state
- Undo stack
- Redo stack
- property-edit transaction state

Asset Load begins a new history session.

## Session boundaries

Loading a DevForge Asset establishes a new session.

Existing new-source boundaries must continue preventing state leakage. Loading/importing another PNG, legacy Atlas JSON, newly built Sprite Sheet, or DevForge Asset must not accidentally retain Spatial data belonging to the previous asset.

The new persistence path may intentionally restore Spatial data only when it is present in a valid DevForge Asset Contract.

## Required regression and completion tests

A later implementation verification gate must prove at minimum:

1. Save a DevForge Asset, start a fresh page/session, Load it, and verify all persisted frame and Spatial domain values are restored.
2. Verify world width/depth, origin, orientation and `assetPPU` survive Save/Load.
3. Verify Footprint Projection survives Save/Load and remains attached to the correct frame.
4. Rename a frame, Save, Load, and verify the Footprint Projection remains attached to that frame through stable identity.
5. Verify Undo/Redo history is not persisted and Asset Load starts a fresh history session.
6. Verify transient UI state is not persisted as Asset authority.
7. Verify legacy `asset-lab-atlas-v1` JSON import still works.
8. Verify legacy Atlas JSON export remains structurally unchanged.
9. Verify PNG + JSON ZIP export remains structurally unchanged.
10. Verify loading/importing a different source does not leak Spatial state from the previous asset.
11. Verify malformed/unsupported DevForge Asset input is rejected explicitly.
12. Perform real-device regression on iPhone and iPad after static/scope verification passes.

## Explicit exclusions

This implementation scope does not authorize:

- autosave
- `localStorage` or IndexedDB persistence
- backend/server/cloud persistence
- repository/project storage
- Marker / Sockets
- occupancy / interaction areas
- Layer / Z-order
- Rig / Skeleton
- GLB / 3D optimization
- LOD / collision
- gameplay-specific semantics
- migration of `asset-lab-atlas-v1`
- unrelated Sprite Lab refactoring

## Gate result

**Asset Contract / Persistence – Implementation Scope Reconciliation: PASS**  
**Asset Contract / Persistence – Implementation Scope Documentation Gate: RECORDED**

The scope is now documented but remains **NOT IMPLEMENTED**.

The next step, if separately authorized, must be an Implementation Authorization against exactly this documented scope. No implementation branch or product-code change is authorized by this document.
