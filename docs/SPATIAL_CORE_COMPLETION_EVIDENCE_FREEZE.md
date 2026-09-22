# Spatial Core – Completion / Evidence / Freeze Gate

**Status:** PASS / FROZEN  
**Date:** 2026-09-22

## Frozen product authority

- Repository: `DrHoschi/DevForge`
- Development branch: `feature/spatial-contract-core`
- Frozen product commit: `6fa9b5fcb8be3a884f0e5b3e9a74aca8e955490a`
- Product file changed by the implementation: `tools/sprite-lab/index.html`
- Visible build: `SPRITE LAB · SPATIAL CORE · TESTBUILD 1`
- Implementation baseline: `fcbc85f54eedabc3c3491ac676441b7e5b42d23e`

## Frozen scope

Spatial Core provides a session-local spatial domain separate from existing frame/render authority:

- World Width / World Depth
- Spatial Origin X / Y
- Orientation
- `assetPPU`
- per-frame four-point Footprint Projection
- visible footprint overlay on the Sprite Lab workspace

Existing frame data remains authoritative for atlas/render data:

- frame rectangle `x/y/w/h`
- `anchorX/anchorY`
- frame `scale`

The Spatial state does not reinterpret those existing values as world geometry.

## Contract / regression evidence

The existing `asset-lab-atlas-v1` export remains unchanged. Spatial data is not written into Atlas JSON or PNG+JSON ZIP export.

Spatial state is session-local and is reset at the defined new image / JSON import / newly built sheet session boundaries.

Explicitly outside this frozen scope:

- Marker / Sockets
- Occupancy / interaction areas
- Save / Load / persistence
- Rig / Skeleton
- Layer / Z-order
- GLB / 3D optimization
- gameplay-specific semantics

## Verification evidence

Implementation Verification / Scope / Regression was performed against exactly:

`6fa9b5fcb8be3a884f0e5b3e9a74aca8e955490a`

Results:

- Static / scope verification: PASS
- Spatial-state separation from frame Anchor / Scale: PASS
- `asset-lab-atlas-v1` export regression: PASS
- Scope blocker count: 0
- iPhone real-device test: PASS
- iPad real-device test: PASS

### iPhone evidence

On the real iPhone test, the correct build label was visible, the existing 79-frame atlas loaded, Spatial Core controls were reachable, spatial values were changed, the Footprint Projection for `floor_s` was initialized, and the green footprint overlay was visible on the workspace while the existing frame/anchor representation remained visible separately.

### iPad evidence

The same Spatial Core behavior was confirmed by the user on the real iPad: PASS.

## Freeze decision

**Spatial Core · TESTBUILD 1 – Completion / Evidence / Freeze Gate: PASS / FROZEN**

The frozen product authority is the implementation commit `6fa9b5fcb8be3a884f0e5b3e9a74aca8e955490a`. This documentation commit records the evidence and does not redefine the frozen product authority.

Any later Spatial capability expansion or correction requires a separately reconciled and authorized follow-up block.
