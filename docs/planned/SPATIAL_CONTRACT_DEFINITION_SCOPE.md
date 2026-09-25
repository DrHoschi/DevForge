# Historical status notice

**Preservation status: HISTORICAL DEFINITION / SUBSEQUENTLY IMPLEMENTED AND SUPERSEDED AS CURRENT STATUS**

This file is preserved from the former `main` branch as the original Spatial Contract definition/scope record. Its original status line below describes the state on 2026-09-19 and is not the current product status. Spatial Core was subsequently implemented and frozen at product authority `6fa9b5fcb8be3a884f0e5b3e9a74aca8e955490a`; Asset Contract / Persistence was subsequently implemented and frozen at product authority `d7101a582d3b8fa9ef9d7bc0cf3feeefb5f7cc31`. Current authority is defined by the later freeze/evidence documentation; this document remains historical contract evidence only.

---

# DevForge – Spatial Contract Definition / Scope

**Status: DEFINED / SCOPE RECONCILED / NOT IMPLEMENTED**  
**Date: 2026-09-19**

## Purpose

This document records the reconciled minimum Spatial Contract scope selected as the next DevForge definition target.

It is a definition/documentation authority only. It does not authorize implementation, create an implementation branch, define a final JSON schema, change UI behavior, or migrate an existing atlas format.

## Existing contract boundary

The existing Sprite Lab / Atlas Builder contract `asset-lab-atlas-v1` remains unchanged.

Existing frame data such as atlas rectangle `x/y/w/h`, frame `anchorX/anchorY`, and frame `scale` remain frame/render data. They must not be silently reinterpreted as world-space footprint, world origin, world dimensions, or spatial calibration.

A visible sprite rectangle is not the authoritative ground footprint.

## Minimum Spatial Core

The reconciled minimum Spatial Core consists of:

1. **Ground Footprint**
   - Describes the logical ground area occupied by the asset.
   - Visual sprite overhangs such as roofs, wall tops, decoration, shadows, or perspective projection must not enlarge the authoritative footprint merely because they extend into the image.
   - The final storage geometry/schema is intentionally not selected by this definition gate.

2. **Spatial Origin**
   - Defines the authoritative world/spatial reference point of the asset.
   - It is conceptually distinct from the existing per-frame render anchor.
   - A future implementation may establish a deterministic relation between both, but neither is automatically the authority of the other.

3. **Orientation**
   - Defines the semantic front/orientation of the asset.
   - Orientation belongs to spatial semantics rather than to the atlas rectangle.
   - The final representation and direction vocabulary are intentionally deferred.

4. **World Dimensions**
   - Spatial metadata must be able to express the logical/world width and depth required to calibrate the asset independently of its visible sprite bounds.
   - Units and exact schema remain a later contract/schema decision.

5. **Scale / PPU Calibration**
   - Spatial calibration must support a concept such as `assetPPU` connecting known world dimensions to sprite/projection dimensions.
   - `assetPPU` is not a replacement for the existing frame `scale` field.
   - Exact formula, units, derivation rules, validation tolerances, and UI are not selected here.

6. **Direction / Frame Projection**
   - Stable world geometry and its projection into a rendered sprite/frame must be separable.
   - World width/depth and the semantic footprint describe the same logical asset and should not become contradictory world geometry merely because another rendered direction is used.
   - The pixel-space projection/alignment of that geometry may vary by direction or frame.
   - Therefore the future contract must be able to distinguish authoritative world spatial definition from direction/frame-specific projection data.

## Authority levels

The intended authority split is:

- **Frame/render authority:** atlas rectangle, render anchor, frame scale and other existing frame data.
- **Spatial asset authority:** footprint, spatial origin, orientation and world dimensions.
- **Calibration/projection authority:** mapping between the spatial definition and a concrete rendered direction/frame.

This definition does not yet decide the concrete persistence hierarchy, object names, IDs, JSON nesting, inheritance rules, or override syntax.

## Explicitly outside this minimum scope

The following remain separate future capabilities and are not authorized or specified by this definition:

- generic Marker primitives such as POINT / LINE / CIRCLE / POLYGON
- semantic markers such as ENTRY_MAIN, RESOURCE_IN, RESOURCE_OUT, ROAD_CONNECT or EFFECT origins
- Sockets / Attachments
- occupancy or interaction areas distinct from the footprint
- optional height reference beyond what a later use case proves necessary
- Save / Load, autosave, project persistence or persistent asset libraries
- Layer / Z-order
- Rig / Skeleton, joints, bones, body-layer bindings or animation clips
- GLB / 3D optimization, decimation, LOD or collision generation
- gameplay rules or project-specific behavior

These later domains may consume or reference the Spatial Core, but they must not be folded into it implicitly.

## Marker / Socket boundary

The Spatial Core provides the future coordinate/reference foundation on which markers and sockets may later be defined.

Markers and sockets are not part of the minimum Spatial Core. Their semantics, IDs, primitives, validation, persistence and UI require separate reconciliation and authorization.

## Save / Load boundary

The Spatial Contract must be designed as domain data that can later be persisted. Canvas state, DOM state or transient UI geometry must not become the authoritative spatial source of truth.

This definition does not introduce Save / Load or choose a persistence format. A later persistence/Asset Contract block may store and restore Spatial Contract data without redefining its spatial meaning.

## Relationship to future asset architecture

This definition narrows the previously recorded Future Asset Architecture candidate metadata into a reconciled Spatial Core while preserving its guardrails:

- spatial calibration/metadata may precede rig/animation and 3D optimization
- spatial metadata and rig semantics remain separate domains
- existing tools remain usable
- existing atlas formats are not prematurely migrated

## Non-goals of this gate

This gate does **not**:

- implement Spatial Contract behavior
- create or authorize an implementation branch
- select files for code changes
- select the final JSON/schema representation
- change `asset-lab-atlas-v1`
- change Sprite Lab runtime behavior
- change Undo / Redo behavior
- document or freeze any SL-02.2 device result
- implement Marker / Sockets
- implement Save / Load / persistence
- implement Rig / Skeleton or Z-order
- implement 3D optimization

## Gate result

**Spatial Contract – Definition / Scope Reconciliation: PASS**  
**Spatial Contract – Definition Documentation Gate: RECORDED**

The next Spatial Contract step, if separately authorized, must begin with an Implementation Scope Reconciliation against the actual selected product baseline. No implementation is authorized by this document.
