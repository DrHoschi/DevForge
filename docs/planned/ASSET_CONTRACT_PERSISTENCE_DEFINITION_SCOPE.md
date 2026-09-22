# DevForge – Asset Contract / Persistence Definition Scope

**Status: DEFINED / SCOPE RECONCILED / NOT IMPLEMENTED**  
**Date: 2026-09-22**

## Purpose

This document records the reconciled Asset Contract / Persistence definition selected after the frozen Spatial Core TESTBUILD 1.

It is a definition/documentation authority only. It does not authorize implementation, create an implementation branch, select a final JSON schema, add Save/Load UI, or add Marker/Sockets.

## Existing authorities preserved

The existing `asset-lab-atlas-v1` remains the specialized 2D render/atlas contract.

Its existing frame/render fields remain render authority, including:

- atlas frame rectangle `x/y/w/h`
- `anchorX/anchorY`
- frame `scale`

The frozen Spatial Core remains a separate spatial domain and must not reinterpret those existing render fields.

The future common DevForge Asset Contract must therefore sit above specialized domain contracts rather than silently expanding `asset-lab-atlas-v1` into a universal asset format.

## Intended asset-domain authority

The reconciled logical hierarchy is:

```text
DevForge Asset
|
+-- identity
|   +-- stable asset identity
|   +-- asset-contract/schema version
|
+-- render2d
|   +-- reference/binding to asset-lab-atlas-v1
|       +-- frames / x,y,w,h / anchorX,Y / scale
|
+-- spatial
|   +-- world dimensions
|   +-- spatial origin
|   +-- orientation
|   +-- assetPPU
|   +-- projections
|       +-- frame-/direction-specific footprint projection
|
+-- future separate domains
    +-- markers / sockets
    +-- layers / z-order
    +-- rig / skeleton
    +-- 3d / lod / collision
```

This hierarchy is conceptual. Concrete JSON field names, nesting, filenames and file extensions are intentionally not selected by this gate.

## Asset-wide versus frame/direction-specific data

The future persistence contract must preserve the authority split established by Spatial Core.

### Asset-wide spatial authority

The following describe the logical asset and are asset-wide unless a later separately reconciled contract explicitly introduces another semantic level:

- world width / depth
- Spatial Origin
- Orientation
- `assetPPU`

### Frame/direction projection authority

The concrete projection/alignment of spatial geometry into a rendered frame may vary by frame or direction.

Footprint projection therefore belongs to frame-/direction-specific projection data and must not create contradictory asset-wide world geometry.

### Render authority

Existing atlas/render fields remain owned by the 2D render contract and are not redefined as spatial fields.

## Stable identity requirement

The current Spatial Core session implementation can address a projection by the current frame name. That is sufficient for the frozen session-local TESTBUILD but is not strong enough as a persistent identity contract.

A persistent Asset Contract must provide a stable frame/direction identity or equivalent durable binding so that renaming a human-readable frame label does not silently orphan or remap persisted projection data.

This gate does not choose the concrete ID syntax or migration mechanism.

## Persistence authority

Persistence must serialize authoritative domain state, not transient editor/UI state.

Persistable domain data includes the asset identity/version information and the domain data belonging to the Asset Contract, including the Spatial domain once implementation is authorized.

Transient presentation state must not become asset authority merely because the editor currently displays it. Examples include:

- selected tab/panel
- zoom
- pan
- current selection/current frame
- open inspector/properties state
- temporary drag/gesture state

Load must reconstruct editor presentation from persisted domain state rather than treating saved DOM/canvas/UI state as a second source of truth.

## Save / Load session boundary

The frozen Spatial Core currently remains session-local and resets at its defined new-source/session boundaries.

A later persistence implementation may change that lifecycle by explicitly saving and restoring Spatial domain data through the Asset Contract. It must not change the already-defined meaning of Spatial fields while doing so.

Importing or loading another asset must establish an unambiguous asset/session boundary and must not accidentally carry Spatial or other domain state from the previous asset.

## Versioning and migration boundary

`asset-lab-atlas-v1` retains its own format/version authority.

The overlying DevForge Asset Contract requires its own explicit contract/schema version. A change in the Asset Contract must not silently redefine existing atlas fields or previously persisted domain fields.

Future incompatible schema changes require an explicit migration, compatibility path, or explicit rejection. Silent semantic reinterpretation is not acceptable.

This gate does not select:

- the first concrete Asset Contract version identifier
- migration file/API structure
- backward-compatibility duration
- concrete validation/error UX

## Cross-tool contract goal

The Asset Contract is intended to become the common asset-domain boundary consumed by DevForge tools rather than allowing each tool to invent an incompatible representation.

Expected future consumers may include:

- Sprite Lab
- Asset Builder / Asset Lab
- CyberMotion
- Baustellenplaner / planning tools

Each consumer may own tool-specific presentation/runtime state, but shared asset semantics must resolve through the common Asset Contract or its referenced specialized domain contracts.

## Explicitly deferred domains

The following remain separate future capabilities and are not defined or implemented by this gate:

- Marker / Sockets
- occupancy / interaction areas
- Layer / Z-order
- Rig / Skeleton
- GLB / 3D optimization
- LOD / collision
- gameplay-specific behavior

They may later become separate domains beneath the common asset authority after their own reconciliation.

## Non-goals of this gate

This gate does **not**:

- implement Save / Load
- implement autosave
- create an implementation branch
- select implementation files
- select a final JSON schema or concrete field names
- select a file extension or storage directory
- change `asset-lab-atlas-v1`
- change the frozen Spatial Core implementation
- add Save / Load UI
- add Marker / Sockets
- add Layer / Z-order
- add Rig / Skeleton
- add 3D optimization
- define repository/project storage behavior

## Gate result

**Asset Contract / Persistence – Reconciliation / Definition Gate: PASS**  
**Asset Contract / Persistence – Definition Documentation Gate: RECORDED**

Status after this documentation gate:

**DEFINED / SCOPE RECONCILED / NOT IMPLEMENTED**

Any implementation work requires a separately authorized follow-up gate. The next implementation-oriented step must begin with a scope reconciliation against the actual selected product baseline and this documented contract.
