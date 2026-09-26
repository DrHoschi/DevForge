# Sprite Lab – Marker / Sockets Completion / Evidence / Freeze

**Status: PASS / 0 BLOCKER / FROZEN**  
**Date: 2026-09-26**

## Authority

Implementation authorization baseline:

`622de146c568e8ff73f31e5fc5c643319ffe5c81`

Functional implementation / freeze authority:

`b9442a28e2ac953ea0e254acf4b323bbfcdc5bbb`

Branch:

`feature/sprite-lab-marker-sockets`

Implementation scope authority:

`docs/SPRITE_LAB_MARKER_SOCKETS_IMPLEMENTATION_SCOPE.md`

Domain contract authority:

`docs/SPRITE_LAB_MARKER_SOCKETS_MINIMAL_CONTRACT.md`

## Authorized product scope

The maximum TESTBUILD-1 product scope was exactly:

- `tools/sprite-lab/index.html`

The verified implementation diff from the authorization baseline to the functional freeze authority is:

- 1 commit ahead
- 0 commits behind
- merge base exactly `622de146c568e8ff73f31e5fc5c643319ffe5c81`
- exactly one changed product file: `tools/sprite-lab/index.html`

No additional product file entered the implementation scope.

## Implemented capability

TESTBUILD 1 adds the minimum Marker / Sockets asset domain:

- asset-level `markers[]` collection
- stable internal ID per point
- mutable human-readable name
- `kind` restricted to `MARKER` or `SOCKET`
- finite numeric asset-spatial `position.x` / `position.y`
- minimal create/select/edit/delete UI
- DevForge Asset Save / Load persistence
- validation on DevForge Asset Load
- backward-compatible loading of existing `devforge-asset-v1` without `markers`
- reset of Marker / Socket state at established new-source/new-asset session boundaries

The visible build label is:

`SPRITE LAB · MARKER / SOCKETS · TESTBUILD 1`

## Static implementation verification

Read-only verification against exactly:

`b9442a28e2ac953ea0e254acf4b323bbfcdc5bbb`

resulted in:

**PASS / 0 BLOCKER**

Verified boundaries:

### Schema / authority

`markers[]` is an independent asset-level domain alongside the existing Render and Spatial domains.

Marker / Socket position is not stored as frame rectangle, frame anchor, frame scale, DOM geometry or canvas pixel authority.

### Stable identity

New points use the existing stable-ID mechanism.

The mutable display name is not used as identity.

### Backward compatibility

Existing valid `devforge-asset-v1` files without a `markers` property remain valid and load with an empty Marker / Socket collection.

No format-version bump or migration tool was introduced.

### Validation

When `markers` is present, load validation checks:

- collection shape
- present and unique IDs
- `kind` exactly `MARKER` or `SOCKET`
- string name
- finite numeric X/Y position

### Reset / session boundaries

Marker / Socket state is reset at the established new-source/new-asset boundaries used by:

- image/source replacement
- legacy atlas JSON import
- newly built Sprite Sheet

DevForge Asset Load replaces the current Marker / Socket collection with the loaded collection, or an empty collection when absent.

### History boundary

The existing frame Undo / Redo snapshots remain frame/selection authority.

Marker / Socket state was deliberately not added to `snapshotState()`, `sameFrames()` or frame-history restoration.

DevForge Asset Load continues to clear history.

Marker / Socket Undo / Redo remains outside TESTBUILD 1.

### Legacy atlas boundary

`exportObject()` remains `asset-lab-atlas-v1` authority and contains no Marker / Socket domain.

No Marker / Socket data was added to legacy JSON or legacy PNG + JSON ZIP generation.

## Manual iPhone functional evidence

Manual functional testing was executed on iPhone against the TESTBUILD-1 implementation.

The controlled repeat test explicitly created:

- one point through `Marker +`, verified as `MARKER`
- one point through `Socket +`, verified as `SOCKET`

The tester explicitly checked the selected kind before persistence.

Sequence:

`Create / Edit → DevForge Asset Save → page reload → DevForge Asset Load → inspect restored points`

Result:

**PASS**

Verified after reload/load:

- both records remained present
- Marker remained `MARKER`
- Socket remained `SOCKET`
- edited spatial X/Y values remained present
- records were editable again through the Marker / Sockets UI

An earlier ambiguous observation showed a Socket-named record with `MARKER` selected. Because the tester had not verified the kind before that save, it was not treated as a product defect. The controlled repeat test explicitly verified the pre-save kinds and passed after reload/load.

## Workspace-visualization boundary

TESTBUILD 1 does not render Marker / Socket points on the Sprite Lab canvas/workspace.

This is intentional and is not a defect in this freeze.

The reconciled scope stores and edits Marker / Socket points as asset-spatial domain data. Canvas projection/visualization, direct manipulation and Pencil interaction require a separate future capability reconciliation.

## Legacy atlas manual evidence

A legacy PNG + JSON ZIP was exported after the Marker / Socket persistence test and supplied as manual evidence:

`constructionAtlas(1).zip`

The supplied ZIP contained:

- `constructionAtlas.png`
- `constructionAtlas.json`

The JSON retained:

`meta.format = "asset-lab-atlas-v1"`

Manual inspection found no Marker / Socket domain leakage into the legacy export:

- no `markers` collection
- no Marker / Socket stable IDs
- no `MARKER` / `SOCKET` kind data
- no new Marker / Socket spatial-point records

Result:

**Legacy Atlas Regression: PASS**

## Preserved authority / non-goals

This freeze does not redefine or extend:

- Spatial Core semantics
- frame/render anchors
- stable frame identity
- Spatial projection binding
- frame Undo / Redo semantics
- `asset-lab-atlas-v1`
- Layer / Z-order
- Rig / Skeleton
- GLB / LOD / collision
- autosave or browser persistence
- backend/cloud persistence
- persistent asset libraries
- repository transfer
- connection graphs
- automatic snapping or attachment
- routing
- port/cable schemas
- project-specific Marker semantics
- canvas Marker projection/visualization

## Evidence summary

- Exact implementation scope: **PASS**
- Static schema/authority verification: **PASS**
- Backward compatibility boundary: **PASS**
- Reset/session boundary: **PASS**
- Frame-history boundary: **PASS**
- Controlled iPhone Marker/Socket Save → Reload → Load: **PASS**
- Marker/Socket kind persistence: **PASS**
- Spatial X/Y persistence: **PASS**
- Legacy Atlas JSON/ZIP regression: **PASS**
- Blocking defect: **NONE FOUND**

## Freeze decision

**Sprite Lab – Marker / Sockets TESTBUILD 1: PASS / 0 BLOCKER / FROZEN**

Functional freeze authority remains exactly:

`b9442a28e2ac953ea0e254acf4b323bbfcdc5bbb`

This completion/evidence document records the freeze but does not change the functional implementation authority.

No integration to `main` is authorized by this gate.

The next permissible separate step is Marker / Sockets → main Integration Reconciliation: read-only determine whether the complete feature-branch freeze head, including this completion/evidence documentation, remains linear and free of foreign changes relative to the then-current `main`.
