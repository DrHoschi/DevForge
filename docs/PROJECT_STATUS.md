# DevForge – Project Status

Stand: 2026-09-06

## Zweck
DevForge ist eine projektübergreifende webbasierte Entwickler-Toolbox. Aktueller Schwerpunkt ist die reproduzierbare Vorbereitung, Auswahl und spätere Übergabe von Character-Animationsreferenzen aus echten geriggten 3D-Animationsquellen.

## Repositories
### DevForge
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-02f4-camera-facing-presets`
- Aktueller Prompt-Builder-Stand: `DF-02D.3R`
- Historischer Pose-Renderer-Prototyp: `DF-02E.1–E.4`
- Aktueller Entwicklungsblock: `DF-02F.4`

# ARCHITEKTURENTSCHEIDUNG: ECHTE 3D-ANIMATION ALS POSEQUELLE
Ab DF-02F verwendet DevForge echte geriggte 3D-Animationsquellen. Die Animation liefert die Bewegungsgeometrie; Kamera, Facing, Referenzzeitpunkt und spätere Ausgabe werden von DevForge kontrolliert. DF-02E.1–E.4 bleiben als dokumentierter Prototyp erhalten, sind aber nicht mehr die geplante Produktionsquelle.

# DF-02F – 3D Animation Reference Viewer Foundation
1. DF-02F.1 – Animated 3D Reference Asset Contract
2. DF-02F.2 – Animated 3D Preview / Runtime Asset Intake
3. DF-02F.3 – Animation Timeline / Scrubbing
4. DF-02F.4 – Camera & Facing Presets
5. DF-02F.5 – Pose Bookmark / Reference Capture
6. DF-02F.6 – Prompt Builder / Reference Export Bridge

# DF-02F.1 – PASS / READY TO FREEZE
Bestätigt:
- echtes 3D-Modell/Rig/Animation als zukünftige Posequelle;
- Reference Preview verlangt In-Place-Verhalten;
- Animation, Facing und Camera bleiben getrennt;
- spätere FR1–FR8 werden als Zeit-/Frame-Bookmarks behandelt.

# DF-02F.2 – PASS / READY TO FREEZE
Gerätetest iPhone/Safari erfolgreich:
- sichtbares Character-Mesh;
- 2 Meshes, beide skinned;
- 129 Bones;
- 2 Animation Clips;
- Clip-Wiedergabe im Browser;
- getestete Clip-Dauer 1.033 s;
- In-Place PASS mit horizontaler Drift 0.0000;
- Root X/Z 0.000 / 0.000;
- Play/Pause funktioniert.

# DF-02F.3 / DF-02F.3R – PASS / READY TO FREEZE
Gerätetest iPhone/Safari nach F.3R erfolgreich:
- Pause/Weiter funktioniert;
- Timeline lässt sich per Touch frei vor/zurück bewegen;
- Figur folgt der gewählten Clip-Position unmittelbar;
- Zeit-/Prozentanzeige folgt dem Slider;
- Weiter startet von der gewählten Stelle;
- In-Place-Verhalten bleibt unverändert.

**DF-02F.3R: PASS / READY TO FREEZE**

# DF-02F.4 – Camera & Facing Presets – IMPLEMENTED / DEVICE TEST REQUIRED
Branch:
`df-02f4-camera-facing-presets`

Umgesetzt:
- Viewer verwendet für Produktions-/Referenzansichten jetzt eine orthografische Kamera;
- festes `GAMEPLAY_ISO_45`-Preset;
- acht reproduzierbare Facing-Presets: `N`, `NE`, `E`, `SE`, `S`, `SW`, `W`, `NW`;
- Facing dreht ausschließlich die Figur/World-Origin um die Y-Achse; Animation und Timeline bleiben unverändert;
- technische Kameraansichten getrennt von Facing: `FRONT`, `BACK`, `LEFT`, `RIGHT`, `TOP`;
- aktives Facing und aktives Kamera-Preset werden sichtbar angezeigt;
- Timeline/Scrubbing aus F.3R bleibt erhalten;
- keine Pose-Bookmarks und keine Prompt-Builder-Bridge vorgezogen.

## Verbindlicher F.4-Vertrag
- Gameplay-Richtung und Kamera sind getrennte Zustände;
- die acht Gameplay-Richtungen entstehen aus derselben Animation durch feste Yaw-Schritte von 45°;
- `N = 0°`, `NE = -45°`, `E = -90°`, `SE = -135°`, `S = 180°`, `SW = 135°`, `W = 90°`, `NW = 45°` relativ zur importierten Basisorientierung;
- die Gameplay-Kamera bleibt beim Wechsel der Facing-Richtung unverändert;
- technische Front-/Seiten-/Top-Ansichten verändern das Facing nicht;
- keine freie Orbit-Kamera ist Bestandteil von F.4.

## DF-02F.4 Acceptance Gate
Auf iPhone/iPad/Safari prüfen:
1. FBX lädt und Timeline funktioniert weiterhin;
2. `N → NE → E → SE → S → SW → W → NW` dreht die Figur jeweils reproduzierbar um 45°;
3. beim Facing-Wechsel bleibt die Gameplay-Kamera unverändert;
4. gewählte Timeline-Pose bleibt beim Richtungswechsel erhalten;
5. `Gameplay Iso` zeigt eine feste orthografische isometrische Ansicht;
6. Front/Hinten/Links/Rechts/Oben wechseln nur die Kameraansicht;
7. Rückkehr zu `Gameplay Iso` reproduziert dieselbe Ansicht;
8. In-Place/Root bleibt stabil.

# NÄCHSTER ZULÄSSIGER SCHRITT
Jetzt ausschließlich **DF-02F.4 Gerätetest** auf Branch:
`df-02f4-camera-facing-presets`

Noch NICHT zulässig:
- FR1–FR8 Bookmark-System;
- Referenzbild-Capture/Export;
- freie Bone-/Pose-Manipulation;
- Prompt-Builder-Bridge;
- weitere Animationen parallel integrieren.

Bei PASS folgt **DF-02F.5 – Pose Bookmark / Reference Capture**.
