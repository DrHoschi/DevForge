# DevForge – Project Status

Stand: 2026-09-06

## Zweck
DevForge ist eine projektübergreifende webbasierte Entwickler-Toolbox. Aktueller Schwerpunkt ist die reproduzierbare Vorbereitung, Auswahl und spätere Übergabe von Character-Animationsreferenzen.

## Repositories
### DevForge
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-02f2-animated-3d-preview-runtime-intake`
- Aktueller Prompt-Builder-Stand: `DF-02D.3R`
- Historischer Pose-Renderer-Prototyp: `DF-02E.1–E.4`
- Aktueller Entwicklungsblock: `DF-02F.2`

# ARCHITEKTURENTSCHEIDUNG: ECHTE 3D-ANIMATION ALS POSEQUELLE

Die in DF-02E entwickelte deterministische Mannequin-/Joint-Pose-Lösung bleibt als dokumentierter Prototyp im Repository erhalten, wird aber nicht zur langfristigen Produktionsquelle ausgebaut.

Ab DF-02F verwendet DevForge echte geriggte 3D-Animationsquellen. Die Animation selbst liefert die Bewegungsgeometrie. Kamera, Facing, Referenzzeitpunkt und spätere Ausgabe werden von DevForge kontrolliert.

Spätere Referenzframes werden nicht mehr als manuell erfundene Skelettgeometrie gepflegt, sondern als Bookmarks innerhalb einer echten Animation ausgewählt.

# DF-02E – Prototypischer Stand

- DF-02E.1: **PASS / PROTOTYPE COMPLETE**
- DF-02E.2: **PASS / PROTOTYPE COMPLETE**
- DF-02E.3 / E.3R: **PASS / PROTOTYPE COMPLETE**
- DF-02E.4: **PASS / PROTOTYPE COMPLETE / SUPERSEDED FOR PRODUCTION BY DF-02F**

Nicht fortsetzen:
- DF-02E.5 auf Basis künstlicher Mannequin-Posen;
- weitere manuell definierte WALK-Posen;
- weitere Richtungen auf Basis des alten Pose-Renderers.

# DF-02F – 3D Animation Reference Viewer Foundation

Geplante Staffelung:
1. DF-02F.1 – Animated 3D Reference Asset Contract
2. DF-02F.2 – Animated 3D Preview / Runtime Asset Intake
3. DF-02F.3 – Animation Timeline / Scrubbing
4. DF-02F.4 – Camera & Facing Presets
5. DF-02F.5 – Pose Bookmark / Reference Capture
6. DF-02F.6 – Prompt Builder / Reference Export Bridge

# DF-02F.1 – PASS / READY TO FREEZE

Vertrag:
`docs/DF-02F1_ANIMATED_3D_REFERENCE_ASSET_CONTRACT.md`

Erste Testquelle:
`X Bot@Standard Walk 2.fbx`

Bestätigter F.1-Vertrag:
- echtes 3D-Modell/Rig/Animation als zukünftige Posequelle;
- Model, Rig und Animation getrennte Verantwortungen;
- Reference Preview verlangt In-Place-Verhalten;
- Animation, Facing und Camera bleiben getrennt;
- FR1–FR8 werden später als Zeit-/Frame-Bookmarks behandelt;
- DF-02E bleibt dokumentierter Prototyp.

# DF-02F.2 – Animated 3D Preview / Runtime Asset Intake – IMPLEMENTED / DEVICE TEST REQUIRED

Dokument:
`docs/DF-02F2_ANIMATED_3D_PREVIEW_RUNTIME_INTAKE.md`

Neues Werkzeug:
`tools/animation-reference-viewer/`

Umgesetzt:
- Three.js-basierte 3D-Runtime-Vorschau;
- binärer FBX-Intake über Browser File Picker;
- `FBXLoader`;
- automatische Erkennung von Mesh, Skinned Mesh, Skeleton/Bones und Animation Clips;
- automatische Wiedergabe des ersten Clips;
- Play/Pause für den Intake-Test;
- feste technische Vorschaukamera;
- Mesh-/Skeleton-/Clip-/Dauer-Diagnose;
- horizontale In-Place-Diagnose über Root/Hips zwischen Clip-Anfang und Clip-Ende;
- aktuelle Root-X/Z-Anzeige;
- SkeletonHelper nur als Diagnose-Fallback bei Motion-only-Dateien;
- DevForge-Startseite enthält einen eigenen Animated-3D-Reference-Viewer-Eintrag.

Wichtig:
Die bereitgestellte binäre FBX liegt in diesem Schritt noch nicht als Repository-Asset vor. Für den F.2-Gerätetest wird exakt die Originaldatei `X Bot@Standard Walk 2.fbx` lokal über den File Picker geladen. Eine dauerhafte Asset-Ablage oder Konvertierungsarchitektur wird erst nach erfolgreichem Runtime-Intake festgelegt.

## DF-02F.2 Acceptance Gate – offen
Auf iPhone/iPad/Safari prüfen:
1. Viewer öffnet;
2. `X Bot@Standard Walk 2.fbx` lässt sich auswählen;
3. sichtbares Character-Mesh erscheint oder Motion-only wird eindeutig diagnostiziert;
4. Bones/Skeleton werden erkannt;
5. Animation Clip wird erkannt und läuft;
6. Figur wandert global nicht nach vorne;
7. Play/Pause funktioniert;
8. Reload + erneutes Laden funktioniert reproduzierbar.

# NÄCHSTER ZULÄSSIGER SCHRITT

Jetzt ausschließlich **DF-02F.2 Gerätetest** auf Branch:
`df-02f2-animated-3d-preview-runtime-intake`

Noch NICHT zulässig:
- Timeline/Scrubbing;
- FR1–FR8 Bookmarks;
- Camera-/Direction-Presets;
- freie Pose-Manipulation;
- Prompt-Builder-Bridge;
- weitere Animationen parallel integrieren.

Bei PASS folgt **DF-02F.3 – Animation Timeline / Scrubbing**.