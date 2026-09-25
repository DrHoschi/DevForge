# DevForge – Future Asset Architecture

**Status: PLANNED / IDEA RECORDED / NOT AUTHORIZED FOR IMPLEMENTATION**

This document records future capability ideas only. It must not interrupt, replace, or expand currently authorized DevForge/Sprite-Lab work. Existing tools must remain usable while these ideas are evaluated and introduced incrementally through separate reconciliation/authorization blocks.

## 1. Data-driven Asset Contract

Long-term goal: atlas/asset metadata should describe reusable asset behavior and geometry so consuming applications can link to generic contracts instead of hard-coding every concrete asset.

Candidate standard spatial metadata:
- Ground footprint as four-point polygon/quadrilateral, excluding visual overhangs
- Origin/world anchor
- Front/orientation
- Optional height reference
- Optional occupancy/interaction area distinct from footprint
- Perspective/scale calibration metadata such as world width/depth and assetPPU

## 2. Generic Spatial Elements / Markers

Provide extensible metadata primitives:
- POINT
- LINE
- CIRCLE
- POLYGON

Each element may carry an ID, semantic type, coordinates, optional direction, tags and metadata. Example uses include ENTRY_MAIN, SMOKE_01, RESOURCE_IN, RESOURCE_OUT, ROAD_CONNECT, EFFECT origins and project-specific CUSTOM markers.

The atlas stores the metadata; consuming game/application logic decides whether and how to use it.

## 3. Sockets and Attachments

Optional typed sockets can describe connection/attachment locations such as hands, back, equipment, doors, roads, modular construction edges or resource interfaces.

## 4. Future 2D/2.5D Rig and Animation Contract

Candidate character-rig metadata:
- separated sprite/body layers
- joints/pivots as points
- bones/segments as lines
- layer-to-rig bindings
- sockets/attachments
- pose/frame data and per-frame overrides
- animation clips

Layer/Z-order is mandatory to evaluate: body parts must render correctly in front of/behind torso and other parts. Z-order may depend on direction and, where necessary, pose/frame.

This may support modular characters assembled from head, torso, upper/lower arms, hands, pelvis, upper/lower legs, shoes, equipment, etc., with animation represented largely as rig/pose data rather than only complete baked frames.

## 5. Workspace Architecture – Candidate Only

If UI complexity justifies it, DevForge may later evolve into coordinated workspaces rather than one overloaded surface:
- Asset Builder
- Sprite Lab
- Spatial Lab
- Rig / Animation Lab
- Atlas / Contract validation/export

These remain one DevForge application sharing one asset contract. Spatial metadata and rig semantics should remain separate domains even when they reuse common geometric primitives.

Responsive behavior must be considered from the start: phone may use one focused workspace at a time; tablet/desktop may support preview + inspector layouts.

## 6. 3D Asset Inspection / Game Asset Optimization

Planned future capability for imported GLB/3D assets:
- inspect meshes/subgroups, vertices/triangles, dimensions/bounds, origin/pivot
- inspect materials, textures, UV data, rig/skeleton and animations where present
- game-readiness checks
- mesh simplification/decimation while preserving important silhouette/detail regions
- generation/evaluation of LOD variants and optional collision meshes
- original vs optimized comparison using review concepts such as overlay/difference/silhouette

This is inspection/preparation/optimization scope for DevForge. Full 3D modeling and material authoring remains primarily a CyberMotion concern.

A future pipeline may use an authoritative 3D asset to produce consistently calibrated 2.5D sprites while carrying forward origin/footprint/spatial metadata.

## Guardrails

- No implementation is authorized by this document.
- Do not block current Sprite Lab / Asset Builder use.
- Do not prematurely migrate existing atlas formats.
- Introduce capabilities only through separate scoped reconciliation and implementation blocks.
- Prefer incremental practical value: spatial calibration/metadata may precede rig/animation and 3D optimization.