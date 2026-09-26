# Sprite Lab – Marker / Sockets Minimal Contract

**Status: DEFINED / DOCUMENTED / NOT IMPLEMENTED**  
**Date: 2026-09-26**

## Purpose

This document records the reconciled minimum Marker / Sockets domain contract for Sprite Lab.

It is a definition/documentation authority only. It does not authorize implementation, create an implementation branch, select UI behavior, or modify the frozen Spatial Core, Asset Contract / Persistence implementation, or legacy atlas contract.

Definition baseline:

`main = 6d3261dcccde22e064bf169635ef96b63177a8f0`

## Existing authority foundation

The frozen Spatial Core provides the authoritative spatial asset domain:

- ground footprint
- spatial origin
- orientation
- world dimensions
- `assetPPU`
- frame/direction projection separation

The frozen Asset Contract / Persistence provides:

- `devforge-asset-v1`
- stable `assetId`
- stable internal frame IDs
- stable-ID-based Spatial projection binding
- explicit DevForge Asset Save / Load
- preservation of the legacy `asset-lab-atlas-v1` contract

Markers and sockets consume this foundation. They do not redefine it.

## Minimum domain model

The first Marker / Sockets capability is intentionally restricted to spatial points.

A minimum record consists conceptually of:

- `id` — stable internal identity
- `name` — human-readable label
- `kind` — `MARKER` or `SOCKET`
- `position` — point position in the authoritative asset spatial coordinate space

This document defines the semantic minimum only. It does not yet freeze concrete JSON property names, nesting, numeric representation, editor controls, or rendering style.

## Marker

A `MARKER` is a named spatial POINT belonging to the asset.

It identifies a stable spatial reference location without introducing connection behavior by itself.

A Marker is not:

- a frame render anchor
- an atlas rectangle coordinate
- a gameplay trigger
- a generic polygon/area primitive
- a rig joint

## Socket

A `SOCKET` is a spatial POINT with explicit connection/attachment intent.

For this minimum contract, a Socket uses the same spatial point foundation as a Marker. It does not create a second coordinate system.

The distinction is semantic:

- `MARKER` = spatial reference point
- `SOCKET` = spatial connection/attachment point

No automatic compatibility, snapping, routing, connection graph, port type, cable type, direction constraint, or project-specific attachment rule is defined in this block.

## Stable identity

Every Marker / Socket record must have its own stable internal `id`.

The stable ID is the authoritative identity of the record. The human-readable `name` is mutable and must not become the persistence or reference key.

Renaming a Marker or Socket must therefore not implicitly create a new domain object.

The exact stable-ID generation mechanism may reuse the existing Sprite Lab stable-ID approach if implementation reconciliation confirms that doing so preserves the frozen authority boundaries.

## Spatial authority

Marker / Socket position belongs to the authoritative **asset spatial domain**.

It must not be silently derived from or stored as:

- frame `x/y/w/h`
- frame `anchorX/anchorY`
- frame `scale`
- visible sprite bounds
- transient canvas coordinates
- DOM/UI state

A rendered frame or projection may later visualize or project a Marker / Socket, but the rendered frame is not the world/spatial authority of that point.

The exact coordinate representation and any projection rule are deferred to implementation/schema reconciliation.

## Persistence boundary

Marker / Socket domain data belongs only to the DevForge Asset persistence path.

A later authorized implementation must preserve Marker / Socket records across:

`DevForge Asset Save → Reload → DevForge Asset Load`

without converting mutable names into identity keys.

This contract does not authorize autosave, localStorage/IndexedDB, backend/cloud persistence, a persistent asset library, or repository transfer.

## Legacy atlas boundary

The existing legacy export contract remains unchanged:

`asset-lab-atlas-v1`

Marker / Socket data must not be added to the legacy atlas JSON or its PNG + JSON ZIP export as part of this capability.

Existing legacy atlas export behavior remains a required regression boundary for any later implementation.

## Relationship to frame projections

Existing Spatial frame projections remain separate from Marker / Socket authority.

A Marker / Socket belongs to the asset spatial definition. A future projection/visualization layer may map it into a concrete rendered direction/frame.

This first contract does not define per-frame Marker overrides, per-direction Marker positions, hidden/visible projection flags, or projection editing.

## Explicit non-goals

The following are outside this minimum contract and require separate future reconciliation:

- LINE / CIRCLE / POLYGON marker primitives
- semantic marker vocabularies such as `ENTRY_MAIN`, `RESOURCE_IN`, `RESOURCE_OUT`, `ROAD_CONNECT` or effect origins
- occupancy or interaction areas
- port classes or electrical/mechanical connector schemas
- cable types or routing semantics
- Socket compatibility rules
- automatic snapping
- automatic attachment
- connection graphs
- parent/child transform hierarchies
- Layer / Z-order
- Rig / Skeleton, joints, bones or animation bindings
- gameplay behavior
- project-specific rules
- GLB / 3D optimization, LOD or collision
- changes to `asset-lab-atlas-v1`
- unrelated Sprite Lab UI refactoring

## Authority guardrails

This contract must not:

- redefine Spatial Core semantics
- reinterpret frame/render anchors as spatial points
- create a second spatial data authority
- change existing stable frame identity
- change existing Spatial projection identity
- change Undo / Redo semantics implicitly
- change the legacy atlas contract
- introduce project-specific gameplay or engineering semantics into the generic asset domain

## Gate result

**Marker / Sockets – Contract Documentation: DEFINED / DOCUMENTED / NOT IMPLEMENTED**

This document authorizes no product change.

The next Marker / Sockets step, if separately authorized, must be an **Implementation Scope / Schema Reconciliation** against the then-current exact `main` and the actual Sprite Lab product code.

No implementation branch or product implementation is authorized by this document.
