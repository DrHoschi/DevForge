# DevForge – Planned Asset Architecture

Status: **PLANNED / IDEA BACKLOG / NOT AUTHORIZED FOR IMPLEMENTATION**

This document records future architecture ideas discussed on 2026-09-15. It must not block or alter current Sprite Lab / Asset Builder work. Existing tools remain usable; implementation requires a later separate reconciliation and authorization block.

## 1. Data-driven Asset / Atlas Contract

Long-term goal: Atlas/asset metadata should describe reusable spatial and behavioral attachment information so game projects can consume it through generic engine links instead of hard-coded per-asset logic.

### Core spatial metadata
- Ground footprint as an editable 4-point polygon (real ground contact area, excluding roof/visual overhang).
- Origin / world anchor.
- Front / orientation marker.
- Optional height reference.
- Optional occupancy / interaction area separate from visual footprint.
- Calibration data such as world width/depth, scale/PPU and perspective deviation.
- Potential safe perspective/scale normalization from the footprint, while avoiding uncontrolled visual deformation.

### Generic spatial elements
Common primitives should be reusable: `POINT`, `LINE`, `CIRCLE`, `POLYGON`.

Assets may define arbitrary typed/identified markers and sockets, e.g. `ENTRY_MAIN`, `SMOKE_01`, `RESOURCE_IN`, `RESOURCE_OUT`, `ROAD_CONNECT`, `HAND_R`, `BACK`, or custom IDs. DevForge stores geometry/metadata; the consuming game decides semantics.

## 2. Future Rig / Animation Metadata

Planned, not currently required:
- modular sprite parts/layers (head, torso, upper/lower arms, hands, pelvis, upper/lower legs, shoes, equipment),
- joints / pivots as points,
- bones/axes as lines,
- parent-child bindings,
- attachment sockets,
- pose/frame data and optional per-frame overrides,
- reusable animation clips,
- direction-aware layer / z-order so front/back limbs and equipment render correctly for each view/pose.

Principle: **Atlas describes; engine interprets.**

## 3. Workspace Direction

DevForge remains one application. If complexity justifies it later, capabilities may be separated into coherent workspaces/labs while sharing one asset contract:
- Asset Builder – identity/import/basic asset data,
- Sprite Lab – frames, atlas, visual positioning/scale,
- Spatial Lab – footprint/origin/orientation/markers/sockets,
- Rig / Animation Lab – joints/bones/layers/poses/clips,
- Atlas / Contract validation/export.

Do not perform a premature UI rewrite. Responsive behavior must be planned separately for iPhone and iPad when this architecture is reconciled.

## 4. Future 3D Asset Inspection / Game Asset Optimization

Candidate DevForge capability:
- GLB import and inspection,
- mesh/submesh, triangle/vertex, material, texture, UV, rig, animation, dimensions/bounds and pivot/origin reporting,
- game-readiness checks,
- mesh simplification / decimation with silhouette preservation,
- LOD generation candidates,
- optional collision-mesh preparation,
- Original ↔ Optimized visual review using existing compare/overlay/difference/silhouette concepts,
- later handoff to CyberMotion and/or sprite-generation pipeline.

A real Meshy pig GLB from the Schweinchen/DDS project is a suitable future test asset once this capability is separately authorized.

## Guardrail

No current Sprite Lab, Asset Builder, Atlas Builder or other working capability is to be blocked, removed or restructured merely because of this future architecture. First finish authorized/open work; later perform a dedicated architecture/capability reconciliation against the then-current code before any implementation.