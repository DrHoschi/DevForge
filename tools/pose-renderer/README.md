# DF-02E.2 – Fixed 45° Gameplay Pose Renderer

Scope: deterministic visualization of one neutral/test pose from fixed mannequin joint coordinates under one fixed orthographic 45° top-down gameplay camera.

No WALK frames, no pose editor, no animation, no direction switching.

## Determinism contract

- Input joint coordinates are explicit numeric data.
- Camera is fixed: orthographic, yaw 45°, elevation 45°.
- Canvas is fixed at 720×720 logical pixels.
- Same pose data + same renderer version => same projected joint coordinates and same SVG markup.
- Root remains fixed at the logical center/bottom anchor.
- LEFT/RIGHT labels remain anatomical, never screen-relative.

## Test pose

The only pose in DF-02E.2 is `neutral-test-v1`: upright, feet apart, arms slightly away from torso, facing forward in mannequin local +Z.

The renderer is intentionally technical. It proves deterministic geometry/projection before WALK pose data is introduced in DF-02E.3.
