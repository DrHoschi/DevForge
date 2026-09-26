# Sprite Lab – Marker / Sockets History / Undo-Redo – Implementation Scope

**Status: IMPLEMENTATION SCOPE RECONCILED / DOCUMENTED / NOT IMPLEMENTED**  
**Date: 2026-09-26**

## Purpose

This document records the reconciled implementation scope for adding Marker / Socket mutations to the existing Sprite Lab Undo / Redo history.

Reconciliation baseline:

`main = 4c6ce6d07c6e64e711af4dbf98d06a1f6d05b119`

The existing frame-history engine remains the single chronological Undo / Redo authority. This scope does not authorize a second Marker / Socket history stack.

## Existing authorities

The existing runtime domain authorities remain:

- `S.frames[]` for frames
- `S.markers[]` for Marker / Socket records
- stable Marker / Socket `id`
- mutable `name`
- `kind` exactly `MARKER` or `SOCKET`
- authoritative asset-spatial `position.x/y`

The existing history infrastructure remains:

- `S.undoStack`
- `S.redoStack`
- `snapshotState()`
- `commitHistory()`
- `undo()`
- `redo()`
- `restoreSnapshot()`
- `clearHistory()`

No second data authority or second Undo / Redo engine is authorized.

## Maximum product-file scope

The maximum product-file scope for the first Marker / Sockets History implementation is exactly:

- `tools/sprite-lab/index.html`

No product change is authorized in:

- root `index.html`
- `main.js`
- another DevForge tool
- a new history service/module
- a new persistence/schema file
- repository-wide shared UI infrastructure
- legacy atlas files or contracts

If implementation discovers a requirement to change another product file, implementation must stop and a new reconciliation is required.

A later completion/evidence document may be added only in its own separately authorized gate.

## Core history contract

Frames and Marker / Socket mutations must share one chronological Undo / Redo sequence.

Example:

`Frame move → Marker move → Frame resize`

Three Undo operations must reverse those three domain changes in reverse chronological order.

Separate frame and Marker / Socket history stacks are not authorized.

## History snapshot extension

The existing history snapshot may be extended to contain the history-relevant Marker / Socket domain state.

The snapshot must preserve for every Marker / Socket:

- stable `id`
- `name`
- `kind`
- `position.x`
- `position.y`

The snapshot may also preserve the Marker / Socket selection required to restore coherent UI state.

History snapshots are temporary Undo / Redo copies only. They do not become a second runtime or persistence authority.

The live domain authority remains `S.markers[]`.

## History equality boundary

The current frame-only equality test is insufficient once Marker / Socket state participates in history.

Implementation may replace or generalize the frame-only comparison so that a history commit is created only when history-relevant domain state actually changed.

The generalized comparison must not introduce unrelated UI/view/session state into history.

In particular, it must not treat the following as domain mutations:

- workspace zoom
- workspace scroll
- hover state
- pointer position
- temporary drag state
- interaction-mode selection by itself

## Authorized Marker / Socket history actions

The first implementation must support Undo / Redo for these Marker / Socket mutations:

1. create Marker
2. create Socket
3. delete Marker / Socket
4. change `name`
5. change `kind` between `MARKER` and `SOCKET`
6. change numeric `position.x`
7. change numeric `position.y`
8. workspace drag changing `position.x/y`

No additional Marker / Socket semantics are authorized by this scope.

## Create boundary

Creating a Marker or Socket must produce one history action.

Undo must remove the exact newly created record.

Redo must restore the same record with the same stable ID and domain values.

Redo must not generate a replacement ID.

## Delete boundary

Deleting a Marker / Socket must produce one history action.

Undo must restore the deleted record including its original stable ID, name, kind and position.

Redo must remove that same record again.

Deletion history must not depend on mutable name as identity.

## Property-edit boundary

Changes to Marker / Socket:

- name
- kind
- X
- Y

must become Undo / Redo-capable domain changes.

A user-level property edit must not create duplicate history entries for the same single committed change.

Implementation may use a Marker-specific property-edit transaction or a generalized existing property-edit mechanism, provided the existing frame property-edit behavior remains intact.

## Workspace-drag boundary

A Marker / Socket workspace drag must produce exactly one history action per completed drag gesture.

Required pattern:

1. capture the history snapshot at drag start
2. continue updating the live authoritative `markers[index].position.x/y` during pointer movement
3. commit one history entry when the drag completes

Pointer-move events must not each create their own history entry.

The existing asset-spatial coordinate authority and zoom conversion remain unchanged.

## Selection restoration

History restoration may restore Marker / Socket selection as UI-coherence state.

Selection restoration must use valid collection position/state and must not redefine stable record identity.

If the previously selected Marker / Socket no longer exists in the restored snapshot, selection must resolve safely to a valid record or no selection.

Frame selection restoration must remain compatible with the existing behavior.

## Stable identity boundary

Undo / Redo must preserve Marker / Socket stable IDs.

History restoration must copy the recorded domain state back into `S.markers[]`; it must not recreate restored records through the normal create-new-ID path.

Mutable Marker / Socket names must never become identity keys.

## Frame-history compatibility

Existing frame Undo / Redo remains required behavior.

This implementation must preserve Undo / Redo for existing frame operations, including the current frame move/resize/draw/property history behavior.

Adding Marker / Socket state to history must not cause unchanged Marker / Socket state to block or duplicate frame history commits.

Likewise, frame state must not be lost when undoing or redoing a Marker / Socket action.

## Redo invalidation

The existing rule remains:

After Undo, a new committed domain mutation clears the Redo stack.

This rule must apply consistently whether the new mutation is a frame action or a Marker / Socket action.

No parallel redo branch is authorized.

## Session / reset boundary

Existing source/asset session boundaries remain authoritative.

The existing `clearHistory()` behavior must continue to prevent Undo / Redo from crossing into a previous source or asset session.

Loading or creating a new source/asset session must not make previous Marker / Socket history reachable.

This scope does not authorize cross-file or cross-session history.

## Persistence boundary

The frozen DevForge Asset persistence contract remains unchanged.

History snapshots are not persisted.

This scope must not add:

- undoStack to the DevForge Asset
- redoStack to the DevForge Asset
- history metadata to Marker / Socket records
- autosave
- localStorage / IndexedDB history
- backend/cloud history

Save continues to serialize only the authoritative current domain state.

Save → Reload → Load starts from the loaded asset state with a clean session history according to the existing session boundary.

## Workspace interaction boundary

The frozen Marker / Sockets Workspace Projection / Interaction contract remains unchanged.

History support must not redefine:

- Marker / Socket workspace rendering
- hit testing
- explicit `Marker / Socket bearbeiten` mode
- zoom projection
- pointer-to-asset coordinate conversion
- safe navigation outside Marker / Socket edit mode

History captures the domain mutation; it does not become a new interaction authority.

## Legacy atlas boundary

The legacy contract remains exactly:

`asset-lab-atlas-v1`

Marker / Socket history must not change:

- legacy atlas JSON
- legacy PNG + JSON ZIP
- legacy frame schema
- legacy metadata
- legacy export behavior

No history data may enter legacy export.

## Responsive / device boundary

The same history semantics must apply to pointer and coarse-pointer devices.

On iPhone/iPad, one completed Marker / Socket drag gesture must remain one Undo step.

This scope does not authorize a responsive redesign or new Undo / Redo UI controls.

The existing Undo / Redo controls remain the interaction surface.

## Status / feedback boundary

Existing Undo / Redo status feedback may identify the Marker / Socket action being undone/redone.

Minimal labels such as Marker/Socket created, deleted, changed or moved are authorized.

No history panel, timeline, action inspector or visual redesign is authorized.

## Explicit non-goals

Not authorized in this block:

- separate Marker / Socket Undo / Redo stack
- history persistence
- cross-session Undo / Redo
- cross-file Undo / Redo
- history timeline UI
- history branching
- history grouping beyond one user-level action
- automatic snapping
- attachment semantics
- Socket compatibility
- ports
- cable schemas
- connection graphs
- routing
- connection lines
- per-frame Marker positions
- per-direction Marker positions
- extended Marker geometry
- semantic Marker vocabulary
- Layer / Z-order
- Rig / Skeleton
- animation binding
- GLB / LOD / collision
- gameplay semantics
- electrical/mechanical project semantics
- changes to `asset-lab-atlas-v1`
- unrelated Sprite Lab refactoring

## Required implementation verification

A later implementation verification must prove at minimum:

1. exact product-file scope
2. existing frame Undo / Redo still works
3. Marker create → Undo → Redo preserves stable ID
4. Socket create → Undo → Redo preserves stable ID
5. delete → Undo restores exact record and ID
6. name change → Undo / Redo
7. kind change → Undo / Redo
8. numeric X change → Undo / Redo
9. numeric Y change → Undo / Redo
10. one workspace drag → exactly one Undo entry
11. drag Undo restores pre-drag x/y
12. drag Redo restores post-drag x/y
13. mixed chronology: frame action + Marker action + frame action
14. new mutation after Undo clears Redo
15. zoom does not enter history
16. navigation/scroll does not enter history
17. Save → Reload → Load preserves current domain state but not prior session history
18. source/asset reset clears Marker / Socket history with existing session boundary
19. legacy atlas export remains unchanged
20. iPhone/coarse-pointer drag remains one history action

## Gate result

**IMPLEMENTATION SCOPE RECONCILED / DOCUMENTED / NOT IMPLEMENTED**

The maximum first implementation product scope is exactly:

`tools/sprite-lab/index.html`

No feature branch or product implementation is authorized by this document.
