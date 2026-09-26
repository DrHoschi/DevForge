# Sprite Lab – Marker / Sockets Implementation Scope

**Status: IMPLEMENTATION SCOPE RECONCILED / DOCUMENTED / NOT IMPLEMENTED**  
**Date: 2026-09-26**

## Purpose

This document records the reconciled implementation/schema scope for the first Sprite Lab Marker / Sockets capability.

It refines, but does not replace or redefine:

`docs/SPRITE_LAB_MARKER_SOCKETS_MINIMAL_CONTRACT.md`

This is documentation authority only. It does not authorize an implementation branch or product changes.

Reconciliation baseline:

`main = 891afca8a1f194b92b79f46b23cb984f994b357e`

## Maximum product-file scope

The maximum product-file scope for TESTBUILD 1 is exactly:

- `tools/sprite-lab/index.html`

No change is required or authorized in:

- root `index.html`
- `main.js`
- another DevForge tool
- a new service, registry, schema or persistence file
- the legacy atlas contract

Any need discovered during implementation to modify additional product files requires a new reconciliation before proceeding.

## Runtime-state scope

Marker / Socket domain data receives one independent asset-level runtime collection, conceptually:

`S.markers = []`

The collection is not part of:

- `S.frames`
- `S.spatial.projections`
- frame selection state
- DOM/canvas state

Each record has its own stable identity.

The existing `createStableId(...)` mechanism may be reused for Marker / Socket IDs.

## Reconciled persisted schema

The minimum persisted representation is an asset-level collection alongside the existing `meta`, `render2d` and `spatial` domains:

```json
{
  "markers": [
    {
      "id": "marker-<stable-id>",
      "name": "Marker 1",
      "kind": "MARKER",
      "position": {
        "x": 0,
        "y": 0
      }
    }
  ]
}
```

Allowed `kind` values for TESTBUILD 1 are exactly:

- `MARKER`
- `SOCKET`

The collection name `markers` is the common persistence container for both kinds. A second socket collection is not introduced.

The human-readable `name` is mutable and is never an identity/reference key.

## Position authority

`position.x` and `position.y` are finite numeric values in the authoritative asset spatial coordinate space.

They must not be persisted as or derived authoritatively from:

- frame `x/y/w/h`
- frame `anchorX/anchorY`
- frame `scale`
- visible sprite bounds
- canvas pixel coordinates
- DOM/UI geometry

TESTBUILD 1 does not define per-frame or per-direction Marker projection data.

## Save boundary

`serializeAsset()` may add the Marker / Socket collection to `devforge-asset-v1`.

The implementation must serialize domain values, not transient UI state.

Required persistence behavior:

`Marker / Socket state → DevForge Asset Save → page reload → DevForge Asset Load → same stable IDs, names, kinds and positions`

## Load / validation boundary

`validateAsset()` and the DevForge Asset load path may be extended only as required to validate and restore the Marker / Socket domain.

For every supplied Marker / Socket record:

- `id` must be present
- Marker / Socket IDs must be unique within the collection
- `name` must remain a human-readable mutable value
- `kind` must be exactly `MARKER` or `SOCKET`
- `position.x` must be a finite number
- `position.y` must be a finite number

No connection compatibility, routing, semantic port class or project-specific validation is added.

## Backward compatibility

Existing valid `devforge-asset-v1` files created before Marker / Sockets do not contain a `markers` field.

For TESTBUILD 1:

- absent `markers` is valid
- absent `markers` loads as an empty Marker / Socket collection
- no migration tool is required
- no format-version bump is required solely for this additive optional domain
- existing frame IDs and Spatial projection bindings remain unchanged

This scope does not authorize arbitrary tolerance of malformed Marker / Socket records when the field is present.

## Reset / session boundaries

Marker / Socket state belongs to the current asset/source session.

Existing operations that establish a new source/asset session and reset Spatial/Asset state must also reset the Marker / Socket collection as appropriate.

The implementation must prevent Marker / Socket records from a previous asset/source from surviving accidentally after a new image, atlas, built sheet or other existing new-session boundary.

Loading a DevForge Asset replaces the current Marker / Socket collection with the collection from that Asset, or an empty collection when the field is absent.

## Undo / Redo boundary

The existing Undo / Redo implementation is frame-history authority. Its current snapshots contain frame/selection state and must not be silently redefined by this block.

TESTBUILD 1 therefore does **not** authorize Marker / Socket Undo / Redo.

Marker / Socket editing must not corrupt or implicitly merge into the existing frame-history contract.

Existing DevForge Asset Load behavior continues to clear Undo / Redo history and establish a fresh session.

A later dedicated reconciliation may extend history semantics to additional asset domains.

## Legacy atlas boundary

`exportObject()` remains the authority for the legacy:

`asset-lab-atlas-v1`

TESTBUILD 1 must not add Marker / Socket data to:

- legacy atlas JSON
- legacy PNG + JSON ZIP
- legacy frame records
- legacy atlas metadata

Legacy export regression remains mandatory evidence for any later implementation/freeze gate.

## UI boundary

A minimal UI will be required for useful Marker / Socket product behavior, but this scope does not yet prescribe its exact responsive layout or interaction design.

Any later implementation UI must remain inside:

`tools/sprite-lab/index.html`

and may only support the minimum domain operations required by this contract, such as:

- create a Marker / Socket
- select it
- edit its human-readable name
- choose `MARKER` or `SOCKET`
- edit its spatial point position
- delete it

This does not authorize generic geometry editing, automatic snap/attachment, routing, connection graphs, project-specific semantics or unrelated Sprite Lab UI redesign.

## Existing authority preserved

The implementation must preserve without reinterpretation:

- frozen Spatial Core authority
- frozen Asset Contract / Persistence authority
- stable frame IDs
- Spatial projection binding by stable frame ID
- existing frame/render anchor semantics
- existing frame Undo / Redo semantics
- `asset-lab-atlas-v1`
- current non-goal boundaries of the Marker / Sockets Minimal Contract

## Explicit TESTBUILD-1 non-goals

Not authorized:

- LINE / CIRCLE / POLYGON markers
- semantic marker vocabulary
- port/cable schemas
- Socket compatibility classes
- automatic snapping or attachment
- connection graphs
- routing
- per-frame Marker overrides
- per-direction Marker positions
- Marker projection persistence
- Marker / Socket Undo / Redo
- Layer / Z-order
- Rig / Skeleton
- GLB/LOD/collision
- autosave
- localStorage/IndexedDB
- backend/cloud persistence
- persistent asset library
- repository transfer
- legacy atlas schema changes
- unrelated refactoring

## Required later verification

A later implementation verification must at minimum establish:

1. exact implementation-head diff remains within the authorized product-file scope;
2. existing `devforge-asset-v1` without `markers` still loads;
3. Marker and Socket records retain stable IDs through rename and Save → Reload → Load;
4. position values survive the persistence roundtrip;
5. new-session/reset boundaries do not leak Marker / Socket state;
6. existing frame Undo / Redo behavior remains intact;
7. legacy `asset-lab-atlas-v1` export contains no Marker / Socket fields;
8. existing Spatial Core and stable frame projection bindings remain intact.

## Gate result

**Marker / Sockets – Implementation Scope / Schema: RECONCILED / DOCUMENTED / NOT IMPLEMENTED**

The maximum TESTBUILD-1 product scope is exactly:

`tools/sprite-lab/index.html`

The next step, if separately authorized, may establish a dedicated implementation branch from the exact then-current `main` for this documented scope.

No implementation is authorized by this document.
