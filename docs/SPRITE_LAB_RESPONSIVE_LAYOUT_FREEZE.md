# Sprite Lab Responsive Layout – Completion / Freeze Gate

Status: `PASS / 0 BLOCKER / FROZEN`

Freeze date: `2026-09-14`

## Authority

Development branch:
`feature/sprite-lab-responsive-layout`

Authorized implementation baseline:
`6b311078d6b57de28bfdd430eebb256186ad8077`

Frozen Product Commit:
`fc25cc51147dcd7493dc84c42887a434519a422c`

Visible tested build:
`SPRITE LAB · TESTBUILD 5.4.1`

## Scope

Frozen is the responsive Sprite Lab / Atlas Builder layout and its directly required navigation corrections only.

Included:
- responsive iPhone layout with `Dateien | Arbeitsfläche | Frames | Export`;
- iPhone Frame sub-navigation `Auswahl | Eigenschaften`;
- direct mobile access to selected-frame properties without long scrolling;
- iPad/tablet left-rail tabs `Dateien | Frames | Export`;
- stable central workspace and frame-property presentation;
- existing zoom controls kept on the workspace;
- existing atlas/frame state preserved across view changes;
- cache/version visibility through TESTBUILD 5.4.1.

Explicitly not added by this block:
- Undo / Redo;
- Frame copy / duplicate;
- direct frame move/resize editing on the canvas;
- animation preview/playback semantics;
- atlas-format changes;
- export-semantics changes;
- DF-09 implementation.

## Completion / Regression / Device Gate

`PASS / 0 BLOCKER`

Real-device evidence accepted in the project conversation:
- iPhone responsive navigation and workspace: PASS;
- iPhone selected-frame inspector access: PASS;
- repeated `Auswahl ↔ Eigenschaften` switching with controls remaining visible: PASS;
- iPad/tablet rail tabs: PASS;
- atlas + JSON import: PASS;
- frame selection / inspector: PASS;
- multi-selection / batch operation: PASS;
- zoom / fit / 100 % workspace controls: PASS;
- JSON export: PASS;
- PNG export: PASS;
- PNG + JSON ZIP export: PASS;
- state preservation while changing areas: PASS.

No commit-status checks or PR workflow runs were registered for the exact Frozen Product Commit. CI evidence is therefore recorded as `N/A / no checks registered`, not as a green CI claim.

## Diff / Baseline Gate

Comparison from authorized baseline `6b311078d6b57de28bfdd430eebb256186ad8077` to Frozen Product Commit `fc25cc51147dcd7493dc84c42887a434519a422c`:
- branch is ahead and not behind the authorized baseline;
- merge base is exactly the authorized baseline;
- product changes are limited to `tools/sprite-lab/index.html`, `main.js`, and root `index.html`;
- no unrelated DevForge tool capability was added.

## Freeze Rule

The responsive layout state represented by Frozen Product Commit `fc25cc51147dcd7493dc84c42887a434519a422c` is now `FROZEN`.

Any later Undo/Redo, frame duplication, direct canvas manipulation, animation preview, or other Mockup/Capability expansion requires a separately reconciled and authorized follow-up block. The frozen responsive-layout block must not be reopened implicitly.
