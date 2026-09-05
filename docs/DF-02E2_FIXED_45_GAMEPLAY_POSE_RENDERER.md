# DF-02E.2 – Fixed 45° Gameplay Pose Renderer

Status: IMPLEMENTED / TEST-READY

## Scope

DF-02E.2 introduces one deterministic technical renderer for the DevForge mannequin foundation.

Included:
- one explicit neutral test pose (`neutral-test-v1`),
- fixed orthographic camera,
- fixed yaw 45°,
- fixed elevation 45°,
- fixed 720×720 logical render canvas,
- deterministic projection of explicit 3D joint coordinates,
- technical mannequin visualization as SVG,
- projection snapshot for regression checks.

Not included:
- WALK frame data,
- pose editing,
- animation playback,
- direction switching,
- counterphase derivation,
- Character rendering.

## Determinism rule

The renderer does not ask an image model to interpret a pose. Joint coordinates are numeric input. Projection is computed by fixed rotations and fixed orthographic scale. The SVG is produced from those computed values.

For a given renderer version, pose input, camera and canvas, projected coordinates must remain identical.

## Camera contract

- projection: orthographic
- yaw: 45°
- elevation: 45°
- canvas: 720×720
- horizontal translation of root: none
- local mannequin facing: +Z

## Test pose

`neutral-test-v1` is intentionally not a WALK pose. It exists only to prove the geometry pipeline before DF-02E.3 introduces FR1–FR4.

## Acceptance gate

DF-02E.2 passes when the page loads without external rendering dependencies, the same neutral pose is reproduced on reload, LEFT/RIGHT joint structure remains stable, and the projection snapshot is unchanged for unchanged source data.
