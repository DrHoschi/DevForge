# DF-03 – Animation Atlas Contract V0.1

Status: DRAFT / TEST BASIS

## 1. Scope

DF-03 defines only the deterministic atlas layout contract for character animations produced through DevForge.

Characters contain only their own body/clothing/base equipment animation. Transported resources, tools and other attachable gameplay objects remain separate assets/layers and are explicitly outside this character-atlas contract.

No automatic atlas builder, packing optimizer or runtime integration is introduced here.

## 2. Source vs. Runtime Asset

Generation/reference source images may be created at 1024×1024 px per frame for quality and clean masking.

The initial runtime atlas contract uses a fixed 256×256 px cell per sprite frame.

Each sprite must be scaled and positioned into that cell without changing the common character reference anchor between animation frames.

## 3. Direction Order

Rows are always ordered exactly as follows:

1. N
2. NE
3. E
4. SE
5. S
6. SW
7. W
8. NW

This order is invariant across every character animation atlas.

## 4. Frame Order

Columns are always chronological animation order starting at F01.

Examples:

- IDLE: F01, F02, F03, F04
- WALK: F01, F02, F03, F04, F05, F06, F07, F08

Frames must never be reordered to improve packing.

## 5. Matrix Layout

Atlas layout is a regular grid:

- Row = direction
- Column = animation frame
- Origin = top-left
- X increases by frame
- Y increases by direction

Example WALK atlas: 8 columns × 8 rows = 64 cells = 2048×2048 px at 256 px cell size.

Example IDLE atlas: 4 columns × 8 rows = 32 cells = 1024×2048 px at 256 px cell size.

## 6. Cell / Padding Contract

Runtime cell size: 256×256 px.

Transparent safety padding: minimum 16 px from the visible character silhouette to the cell boundary wherever the animation silhouette allows it.

The actual visible sprite may be smaller than the cell. It must not be stretched independently per frame to fill the cell.

All cells remain transparent outside the rendered character pixels.

No labels, captions, frame numbers or sheet metadata may be inside an atlas cell. Such labels are allowed only in generation/reference sheets before crop/assembly.

## 7. Anchor Contract

Every frame uses the same logical character anchor.

Initial anchor convention: bottom-center ground/contact reference of the character cell.

The animation may move limbs and body mass naturally around this anchor, but frame-by-frame arbitrary recentering is forbidden.

Root-motion behavior is represented by gameplay movement, not by sliding the sprite through its atlas cell.

## 8. Naming Contract

Individual prepared frames:

`<character>_<animation>_<direction>_f<NN>.png`

Examples:

- `carrier_idle_s_f01.png`
- `carrier_idle_s_f04.png`
- `carrier_walk_ne_f03.png`
- `carrier_walk_nw_f08.png`

Final atlas image:

`<character>_<animation>.png`

Examples:

- `carrier_idle.png`
- `carrier_walk.png`

Metadata:

`<character>_<animation>.json`

## 9. Metadata Contract

JSON metadata must contain at minimum:

- schemaVersion
- character
- animation
- image
- cell.width / cell.height
- padding
- anchor
- directions in exact row order
- frame count
- FPS reference
- atlas width / height
- explicit cell records with direction, frame, row, column, x, y, width and height

No consumer should need to infer direction order from filenames alone.

## 10. Carrier Baseline

For the first validation:

- Character: Carrier
- Base equipment: existing backpack only
- Carried goods: none
- Separate resource/tool overlays: future contract, not DF-03
- IDLE: 4 frames × 8 directions
- WALK: 8 frames × 8 directions
- Camera: fixed 45° top-down gameplay view inherited from DF-02
- Background: transparent

## 11. Acceptance Gate

DF-03 can be marked PASS when:

1. an IDLE atlas can be assembled deterministically from 32 prepared frames,
2. a WALK atlas can be assembled deterministically from 64 prepared frames,
3. every source filename resolves to exactly one atlas cell,
4. direction and frame ordering are unambiguous,
5. the anchor remains stable during playback,
6. no resource/tool variant has been baked into the character atlas contract.
