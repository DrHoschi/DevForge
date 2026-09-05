# DF-02E.1 – Deterministic Mannequin Skeleton Contract

Status: IMPLEMENTED / CONTRACT ONLY

## Scope
DF-02E.1 definiert ausschließlich das technische Skelett-/Joint-Modell und den reproduzierbaren Pose-Datenvertrag für die neutrale DevForge-Parametrisierungsfigur. Noch kein Renderer, kein Pose-Editor, keine Walk-Posebibliothek und keine Character-Generierung.

## Coordinate System
- Right-handed local skeleton space.
- +Y = up.
- +Z = forward along the character facing axis.
- +X = character anatomical right.
- Anatomical LEFT/RIGHT is always defined from the mannequin's own perspective and never from screen position.
- `root` and `pelvis` remain centered on the logical bottom-center/root anchor; translation through the canvas is not used to simulate walking.

## Joint Hierarchy

```text
root
└─ pelvis
   ├─ spineLower
   │  └─ spineUpper
   │     ├─ neck
   │     │  └─ head
   │     ├─ clavicleL
   │     │  └─ shoulderL
   │     │     └─ elbowL
   │     │        └─ wristL
   │     │           └─ handL
   │     └─ clavicleR
   │        └─ shoulderR
   │           └─ elbowR
   │              └─ wristR
   │                 └─ handR
   ├─ hipL
   │  └─ kneeL
   │     └─ ankleL
   │        └─ footL
   │           └─ toeL
   └─ hipR
      └─ kneeR
         └─ ankleR
            └─ footR
               └─ toeR
```

No additional joints are allowed in DF-02E.1. Fingers, facial rig, twist bones, IK helper bones, weapon sockets and cloth/equipment attachment bones are out of scope.

## Stable Joint IDs
The following IDs are contractually stable and must not be renamed in later DF-02E substeps without an explicit migration:

`root`, `pelvis`, `spineLower`, `spineUpper`, `neck`, `head`, `clavicleL`, `shoulderL`, `elbowL`, `wristL`, `handL`, `clavicleR`, `shoulderR`, `elbowR`, `wristR`, `handR`, `hipL`, `kneeL`, `ankleL`, `footL`, `toeL`, `hipR`, `kneeR`, `ankleR`, `footR`, `toeR`.

## Pose Transform Contract
Each joint pose is represented deterministically by local transforms relative to its parent:

```json
{
  "position": [0.0, 0.0, 0.0],
  "rotationDeg": [0.0, 0.0, 0.0]
}
```

Rules:
- `position` is local XYZ translation in normalized mannequin units.
- `rotationDeg` is local Euler rotation `[x, y, z]` in degrees using one fixed application order defined by the renderer in DF-02E.2; the order may not vary per pose.
- Scale is not animated per joint in V1. Segment lengths are defined by the skeleton definition and remain constant across all poses.
- A pose must provide all contractually required transforms; missing transforms are invalid rather than silently inferred.

## Root / Pelvis Contract
`root` controls the logical global pose anchor and facing, but not canvas walking translation.

Required root fields:

```json
{
  "position": [0.0, 0.0, 0.0],
  "facingDeg": 0.0
}
```

`pelvis` may vary vertically and rotationally to express body compression, rise and gait mechanics. Horizontal root translation is fixed to zero for the current in-place animation reference system.

## Anatomical Role Metadata
Every walk pose may additionally declare semantic leg roles independently from transforms:

```json
{
  "legs": {
    "left": "CONTACT|SUPPORT|SWING|TRAILING",
    "right": "CONTACT|SUPPORT|SWING|TRAILING"
  }
}
```

This metadata does not replace geometry. It is an invariant/checking aid used to validate that the intended anatomical side matches the joint transforms.

## Camera-Independent Skeleton Rule
DF-02E.1 contains no camera values. The skeleton/pose state is defined in mannequin space. Camera projection is introduced only in DF-02E.2. This separation is mandatory so the same exact pose can later be rendered deterministically from multiple directions.

## Counterphase Mapping Contract
The LEFT↔RIGHT counterpart operation used later by DF-02E.4 is defined on joint identities, not screen pixels.

Pairs:
- `clavicleL` ↔ `clavicleR`
- `shoulderL` ↔ `shoulderR`
- `elbowL` ↔ `elbowR`
- `wristL` ↔ `wristR`
- `handL` ↔ `handR`
- `hipL` ↔ `hipR`
- `kneeL` ↔ `kneeR`
- `ankleL` ↔ `ankleR`
- `footL` ↔ `footR`
- `toeL` ↔ `toeR`

Central joints remain central and unchanged in identity: `root`, `pelvis`, `spineLower`, `spineUpper`, `neck`, `head`.

Important: counterphase mapping swaps anatomical functional roles while preserving the same facing axis and camera. It is NOT an image mirror operation.

## Skeleton Dimensions / Segment-Length Contract
DF-02E.1 locks stable normalized proportions for the technical mannequin. Exact renderer mesh shape is deferred, but logical segment lengths are frozen:

```json
{
  "pelvisToSpineLower": 0.18,
  "spineLowerToSpineUpper": 0.26,
  "spineUpperToNeck": 0.16,
  "neckToHead": 0.16,
  "shoulderWidth": 0.38,
  "upperArm": 0.28,
  "lowerArm": 0.27,
  "hand": 0.12,
  "hipWidth": 0.24,
  "upperLeg": 0.43,
  "lowerLeg": 0.42,
  "foot": 0.24
}
```

Values are normalized technical proportions, not final Character anatomy. They serve only the pose dummy and must remain identical across every deterministic pose reference.

## Pose Package Schema
Minimal valid pose package:

```json
{
  "schema": "devforge.pose.v1",
  "skeleton": "devforge.mannequin.v1",
  "poseId": "walk_se_fr01_contact_l",
  "animation": "WALK",
  "direction": "SE",
  "frame": 1,
  "name": "Contact L",
  "root": {
    "position": [0.0, 0.0, 0.0],
    "facingDeg": 0.0
  },
  "roles": {
    "leftLeg": "CONTACT",
    "rightLeg": "TRAILING"
  },
  "joints": {
    "pelvis": {"position": [0.0, 0.0, 0.0], "rotationDeg": [0.0, 0.0, 0.0]}
  }
}
```

In a real valid package, `joints` must include every stable joint except `root`, whose transform is stored separately.

## Validation Invariants
A DF-02E.1 pose is invalid if any of the following occurs:
- unknown joint ID;
- required joint missing;
- LEFT/RIGHT joint renamed or resolved from screen side;
- animated segment length/scale differs from skeleton contract;
- root translates horizontally to fake walking;
- semantic support/contact role contradicts the intended anatomical side;
- counterphase derivation changes facing or central joint identity;
- camera values are embedded in skeleton transforms.

## Non-Goals
DF-02E.1 explicitly does NOT provide:
- 2D/3D rendering;
- UI controls;
- IK solver;
- walk-cycle angles;
- FR1–FR8 concrete pose values;
- automatic counterphase generation;
- direction mirroring;
- exports to PNG/PDF;
- Prompt Builder integration.

These belong to DF-02E.2 and later.

## Acceptance Gate
DF-02E.1 PASS requires:
1. stable joint hierarchy and IDs defined;
2. fixed anatomical LEFT/RIGHT semantics;
3. normalized stable proportions defined;
4. deterministic local transform schema defined;
5. root/pelvis responsibilities separated;
6. explicit counterphase joint-pair map defined;
7. no renderer/editor/animation implementation introduced.

If all seven hold, DF-02E.1 may be frozen and DF-02E.2 may begin.
