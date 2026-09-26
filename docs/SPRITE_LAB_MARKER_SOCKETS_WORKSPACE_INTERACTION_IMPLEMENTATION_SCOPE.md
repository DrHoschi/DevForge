# Sprite Lab – Marker / Sockets Workspace Projection / Interaction – Implementation Scope

**Status: IMPLEMENTATION SCOPE RECONCILED / DOCUMENTED / NOT IMPLEMENTED**  
**Date: 2026-09-26**

## Purpose

This document records the reconciled implementation scope for the first Sprite Lab workspace projection and direct interaction of the already frozen Marker / Sockets domain.

Reconciliation baseline:

`main = a3b492f95bd4451726bd98362a52842903619bb3`

This scope extends product interaction only. It does not redefine the frozen Marker / Sockets data contract, Spatial Core authority, Asset persistence contract, frame editing contract or legacy atlas contract.

## Existing authority

The existing asset-level collection remains authoritative:

`S.markers[]`

Each Marker / Socket already owns:

- stable `id`
- mutable `name`
- `kind` exactly `MARKER` or `SOCKET`
- authoritative asset-spatial `position.x`
- authoritative asset-spatial `position.y`

Workspace rendering must not introduce a second persisted or runtime domain position.

The workspace is a projection and interaction surface for the existing `position.x/y` authority.

## Maximum product-file scope

The maximum product-file scope for the first workspace projection / interaction TESTBUILD is exactly:

- `tools/sprite-lab/index.html`

No product change is authorized in:

- root `index.html`
- `main.js`
- another DevForge tool
- a new schema, service, renderer or persistence file
- legacy atlas code outside the existing Sprite Lab file
- repository-wide shared UI infrastructure

If implementation discovers a requirement to change another product file, implementation must stop and a new reconciliation is required.

A later completion/evidence document may be added separately during its own authorized gate.

## Minimal capability

The first workspace interaction implementation is limited to:

`visible → select → explicit edit mode → drag → same position.x/y authority`

### Visible

Existing Marker / Socket records may be projected onto the Sprite Lab workspace and rendered as point affordances.

The visual treatment may distinguish `MARKER` from `SOCKET` and may distinguish selected from unselected state.

Visibility is derived UI state. No persisted visibility field is introduced.

### Select

A rendered Marker / Socket point may be selected from the workspace.

Workspace selection must update the existing Marker / Socket selection authority used by the properties UI.

The implementation must not create an independent canvas-only selection identity.

Stable Marker / Socket `id` remains record identity; mutable `name` must not become a selection key.

### Explicit edit mode

Direct Marker / Socket manipulation requires an explicit Marker / Socket workspace interaction mode.

The existing modes retain their current meanings:

- `select` — safe selection/navigation behavior
- `edit` — frame editing
- `draw` — frame drawing
- `anchor` — frame anchor editing

Marker / Socket dragging must not be silently mixed into any of these existing interaction meanings.

The new mode may be added to the existing interaction-mode control, but its purpose must be explicit and isolated.

Outside Marker / Socket edit mode, workspace pointer/touch activity must not move Marker / Socket domain positions.

### Drag

In Marker / Socket edit mode, the selected/targeted point may be dragged on the workspace.

Dragging must update the existing Marker / Socket record's authoritative:

- `position.x`
- `position.y`

The numeric Marker / Socket property inputs and workspace drag are two interfaces to the same domain values.

No canvas-only position cache may become authoritative.

## Coordinate / projection boundary

Marker / Socket `position.x/y` remains asset-spatial authority.

Workspace/canvas coordinates are transient projected coordinates only.

The implementation may introduce conversion helpers needed to:

- project asset-spatial Marker / Socket positions to the visible workspace
- convert pointer/touch positions back into the existing asset-spatial coordinate system

Such helpers must not persist canvas pixels, DOM offsets, scroll positions or zoom-scaled coordinates as Marker / Socket domain data.

This block does not authorize a second coordinate system or a second Marker / Socket position authority.

## Zoom boundary

Existing workspace zoom remains view/session state.

Changing zoom must:

- change only visual projection scale
- leave Marker / Socket `position.x/y` unchanged
- keep rendered Marker / Socket points aligned with their projected asset positions

Dragging at any supported zoom must write the corresponding asset-spatial position, not zoomed screen coordinates.

No zoom value is added to Marker / Socket persistence.

## Navigation / scroll boundary

Workspace scrolling and touch navigation remain view behavior.

Navigation must not modify Marker / Socket `position.x/y`.

The implementation must preserve the existing safe-navigation intent of the normal workspace mode.

On coarse-pointer devices, especially iPhone/iPad, normal pan/scroll gestures outside explicit Marker / Socket edit mode must not accidentally drag a Marker / Socket.

Marker / Socket edit mode may intentionally consume the pointer/touch gesture required to drag the point.

## Frame interaction boundary

Existing frame interaction remains independent.

This block must not reinterpret or change:

- frame rectangles
- frame drag/resize
- frame drawing
- frame anchor placement
- frame selection authority
- multi-selection
- frame batch operations

A Marker / Socket workspace point is not a frame anchor and must not be stored in frame data.

Marker / Socket interaction must not implicitly move or resize a frame.

## Properties UI synchronization

The existing Marker / Sockets properties UI remains valid.

Workspace selection must synchronize with the existing Marker / Socket list/form selection.

Workspace drag must cause the existing X/Y property fields to reflect the updated domain position.

Numeric X/Y editing must continue to update the same domain values and the workspace projection must reflect those values.

No duplicate data authority is authorized.

## History boundary

The frozen frame Undo / Redo contract remains unchanged.

Marker / Socket workspace selection and dragging are not added to the existing frame-history snapshots in this block.

This implementation must not:

- add Marker / Socket records to `snapshotState()`
- redefine `sameFrames()`
- restore Marker / Socket state through frame Undo / Redo
- mix Marker / Socket drag operations into frame history

Marker / Socket Undo / Redo requires a separate future reconciliation.

## Persistence boundary

The frozen DevForge Asset Marker / Socket persistence contract remains unchanged.

Workspace interaction may change existing `position.x/y` values, which are then persisted through the already frozen DevForge Asset Save path.

This block must not introduce:

- a new Marker / Socket persistence field
- canvas projection persistence
- per-frame Marker projection persistence
- autosave
- localStorage/IndexedDB
- backend/cloud persistence

Existing Save → Reload → Load behavior remains a required regression boundary.

## Reset / session boundary

Existing Marker / Socket reset and Asset Load behavior remain authoritative.

Workspace-derived state such as hover/drag transient data must not survive a new source/asset session as domain state.

No new persistent workspace session authority is introduced.

## Legacy atlas boundary

The legacy contract remains exactly:

`asset-lab-atlas-v1`

Workspace projection / interaction must not add Marker / Socket data to:

- legacy atlas JSON
- legacy PNG + JSON ZIP
- legacy frame records
- legacy atlas metadata

Legacy atlas regression remains mandatory evidence for a later completion/freeze gate.

## Responsive / device boundary

The capability must remain usable with the existing Sprite Lab responsive structure.

The first implementation must support the same domain behavior for pointer and coarse-pointer input without introducing separate data semantics.

iPhone/iPad interaction must respect the explicit edit-mode boundary so that normal workspace navigation does not become accidental Marker / Socket manipulation.

This scope does not authorize a general responsive UI redesign.

## Visual boundary

A minimal point affordance is authorized only as required to make Marker / Socket projection, selection and dragging understandable.

The implementation may visually distinguish:

- Marker versus Socket
- selected versus unselected

This scope does not authorize:

- elaborate icon systems
- labels that change data authority
- connection lines
- routing visualization
- socket compatibility visualization
- semantic engineering/gameplay overlays
- unrelated Sprite Lab visual redesign

## Explicit non-goals

Not authorized in this block:

- automatic snapping
- automatic attachment
- Socket compatibility rules
- port classes
- cable schemas
- connection graphs
- routing
- connection lines
- per-frame Marker overrides
- per-direction Marker positions
- persisted Marker projection records
- Marker / Socket Undo / Redo
- LINE / CIRCLE / POLYGON Marker geometry
- semantic Marker vocabularies
- Layer / Z-order
- Rig / Skeleton
- joints/bones/animation binding
- GLB/LOD/collision
- project-specific gameplay semantics
- project-specific electrical/mechanical semantics
- changes to `asset-lab-atlas-v1`
- unrelated Sprite Lab refactoring

## Required later implementation verification

A later implementation verification must at minimum establish:

1. exact implementation diff remains inside `tools/sprite-lab/index.html`;
2. existing Marker / Socket records render at positions derived from their authoritative `position.x/y`;
3. workspace selection and properties selection refer to the same Marker / Socket record;
4. Marker / Socket drag is possible only in the explicit Marker / Socket edit mode;
5. normal navigation does not accidentally move Marker / Socket positions;
6. dragging updates the same `position.x/y` values shown by the properties UI;
7. numeric X/Y edits update workspace projection without creating a second authority;
8. zoom changes do not mutate Marker / Socket domain coordinates;
9. drag behavior remains coordinate-correct at non-100% zoom;
10. frame edit/draw/anchor behavior remains independent;
11. existing frame Undo / Redo behavior remains unchanged;
12. DevForge Asset Save → Reload → Load preserves positions changed by workspace drag;
13. existing DevForge Assets without Marker / Socket data remain compatible;
14. new-session/reset boundaries do not leak Marker / Socket state;
15. legacy `asset-lab-atlas-v1` export remains free of Marker / Socket data;
16. iPhone/coarse-pointer navigation and explicit Marker / Socket manipulation remain distinguishable.

## Gate result

**Marker / Sockets Workspace Projection / Interaction – Implementation Scope: RECONCILED / DOCUMENTED / NOT IMPLEMENTED**

Maximum first product-file scope:

`tools/sprite-lab/index.html`

The implementation must preserve one Marker / Socket position authority:

`markers[].position.x/y`

The workspace may project and directly edit that authority, but must not create a second one.

No implementation branch or product implementation is authorized by this document.
