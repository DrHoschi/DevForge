# Animation Tester ↔ DevForge Asset – V1 Intake Implementation Scope

## Status

**IMPLEMENTATION SCOPE RECONCILED / DOCUMENTED / NOT IMPLEMENTED**

Authoritative baseline:

`main = 69148832bcc1b728c24dbe6ae3e17d3d9408a28b`

This document freezes only the implementation scope for the first read-only DevForge Asset intake into the existing standalone Animation Tester. It does not authorize implementation.

## Objective

Establish the smallest direct handoff:

`Sprite Lab → devforge-asset-v1 → Animation Tester → frame review/playback`

The Animation Tester consumes an asset produced by Sprite Lab without becoming a second authority for asset data.

## Maximum product-file scope

A later implementation is limited to exactly:

- `tools/animation-tester/index.html`

No implementation change is authorized in:

- `tools/sprite-lab/index.html`
- the `devforge-asset-v1` contract/schema
- shared DevForge infrastructure
- other tools
- persistence/storage services
- Layer/Z-Order, Rig/Skeleton or animation-contract files

Documentation required by later gates is outside this product-file maximum.

## Authority boundary

### Sprite Lab / DevForge Asset remains authoritative for

- `meta.assetId`
- embedded 2D atlas/image
- stable frame IDs
- frame names
- atlas frame rectangles
- frame anchors
- frame scale
- Spatial data
- Marker/Socket data

The Animation Tester MUST NOT mutate or write these values back to the DevForge Asset.

### Animation Tester V1 may

- load and validate a local `devforge-asset-v1` JSON file
- decode its embedded sprite sheet
- create an internal read-only review representation
- crop/display frames from the shared atlas
- use stable frame IDs internally
- use asset-defined anchors and scale for review
- use the existing standalone playback/review controls

No DevForge Asset save/update path is part of V1.

## Intake validation

The V1 intake MUST reject unsupported input rather than silently reinterpret it.

Required format identity:

- `meta.format === "devforge-asset-v1"`
- `meta.version === 1`

Required V1 review input:

- `render2d` exists
- `render2d.frames` is an array
- an embedded `render2d.image.dataUrl` exists and is decodable for the shared sprite sheet
- each consumed frame has a non-empty stable `id`
- frame IDs are unique
- each consumed frame provides a usable rectangle `x/y/w/h`
- anchor and scale values are read from the asset representation and must not be replaced by generated identities or persisted tester defaults

Malformed/unsupported input must produce a visible intake error and must not be treated as the existing repository manifest format.

Spatial data and `markers[]` may be present. V1 does not assign active animation semantics to them.

## Stable frame identity and ordering

For DevForge Asset intake:

- `render2d.frames[].id` is the stable identity.
- The tester MUST preserve that ID in its internal review state.
- ID MUST NOT be replaced by frame name, filename or array index.
- The order stored in `render2d.frames[]` MUST be preserved.
- The existing alphabetical/numeric name sort used for standalone image-file review MUST NOT reorder DevForge Asset frames.

This boundary is intended to permit later animation clips to reference stable frame IDs without redefining asset identity.

## Atlas cropping

DevForge Asset frames share one embedded sprite sheet.

The V1 renderer MUST therefore use each frame's source rectangle:

- `frame.x`
- `frame.y`
- `frame.w`
- `frame.h`

against the shared atlas image.

The implementation SHOULD use the canvas source-rectangle form of `drawImage()` or an equivalent in-memory crop. Exporting temporary per-frame PNG files is not part of V1.

The review canvas and frame thumbnails must represent the same frame rectangles. Cropping must not modify the source asset.

## Anchor and scale behavior

Existing standalone image/manifest review currently uses a common Bottom-Center review anchor. That behavior remains a regression contract for those legacy intake modes.

For DevForge Asset frames:

- use the frame's stored `anchorX`
- use the frame's stored `anchorY`
- use the frame's stored `scale`
- align frames against one common preview reference point using those asset-defined values
- the Anchor overlay must represent the effective asset anchor, not an unconditional Bottom-Center assumption

The purpose is to make frame-to-frame anchor/root discontinuities visible using the configuration produced by Sprite Lab.

Tester UI zoom remains a review-only multiplier and MUST NOT overwrite asset `scale`.

## Existing standalone regression contract

The new intake MUST NOT break the current Animation Tester paths or controls.

### Individual image intake

Must retain:

- multiple PNG/JPG loading
- existing alphabetical/numeric filename sorting
- existing Bottom-Center review behavior

### Repository manifest intake

Must retain:

- URL manifest loading
- manifest frame loading
- manifest FPS application
- manifest loop application
- existing Bottom-Center review behavior

### Shared review behavior

Must retain:

- frame dropdown
- previous/next navigation
- thumbnails
- FPS control
- Start/Stop playback
- Loop
- Onion Skin
- Zoom
- Anchor overlay
- BBox
- responsive standalone layout

## Explicit V1 non-goals

This scope does NOT include:

- changing Sprite Lab
- changing `devforge-asset-v1`
- saving/modifying DevForge Assets from Animation Tester
- animation persistence/export
- animation clips or clip contracts
- timeline authoring
- Layer/Z-Order definition or overrides
- Rig/Skeleton definition or animation
- Marker/Socket editing
- Marker/Socket animation semantics
- Spatial editing
- automatic routing/handoff between browser tools
- replacing the existing individual-image or repository-manifest modes

## Required later verification

A later implementation verification must establish at minimum:

1. Exact implementation baseline is this documented main or an explicitly reconciled descendant.
2. Product-code diff is confined to `tools/animation-tester/index.html`.
3. A valid Sprite-Lab-produced `devforge-asset-v1` loads.
4. Unsupported format/version is rejected visibly.
5. Missing/unusable embedded atlas is rejected for V1.
6. Duplicate/invalid frame IDs are rejected.
7. Stable frame IDs survive intake unchanged.
8. DevForge Asset frame array order survives intake unchanged.
9. Atlas source rectangles render the intended frames.
10. Thumbnails correspond to the same cropped frames.
11. Asset `anchorX/anchorY` affect alignment correctly.
12. Asset `scale` affects DevForge Asset review correctly.
13. Tester Zoom remains independent from asset scale.
14. Prev/Next and dropdown work for DevForge Asset frames.
15. Playback/FPS/Loop work for DevForge Asset frames.
16. Onion Skin works with atlas-backed frames.
17. Anchor and BBox overlays remain functional.
18. Existing individual-image intake still works with its existing sorting and Bottom-Center behavior.
19. Existing repository-manifest intake still works, including FPS/Loop and Bottom-Center behavior.
20. No asset write-back, animation persistence, Layer/Z-Order, Rig/Skeleton or Marker/Socket editing is introduced.
21. Manual narrow-device regression is performed for the resulting TESTBUILD when implementation reaches the evidence gate.

## Gate result

**V1 INTAKE IMPLEMENTATION SCOPE DOCUMENTED / ONE PRODUCT FILE MAXIMUM / READ-ONLY ASSET AUTHORITY / NO CONTRACT CHANGE / NOT IMPLEMENTED**

The next implementation-related action requires a separate authorization gate.
