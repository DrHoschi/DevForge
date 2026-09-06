# DevForge – Project Status

Stand: 2026-09-06

## Zweck
DevForge ist eine projektübergreifende webbasierte Entwickler-Toolbox. Aktueller Schwerpunkt ist die reproduzierbare Vorbereitung, Auswahl und spätere Übergabe von Character-Animationsreferenzen.

## Repositories
### DevForge
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-02f3-animation-timeline-scrubbing`
- Aktueller Prompt-Builder-Stand: `DF-02D.3R`
- Historischer Pose-Renderer-Prototyp: `DF-02E.1–E.4`
- Aktueller Entwicklungsblock: `DF-02F.3`

# ARCHITEKTURENTSCHEIDUNG: ECHTE 3D-ANIMATION ALS POSEQUELLE

Ab DF-02F verwendet DevForge echte geriggte 3D-Animationsquellen. Die Animation liefert die Bewegungsgeometrie; Kamera, Facing, Referenzzeitpunkt und spätere Ausgabe werden von DevForge kontrolliert.

DF-02E.1–E.4 bleiben als dokumentierter Prototyp erhalten, sind aber nicht mehr die geplante Produktionsquelle.

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

Bestätigt:
- echtes 3D-Modell/Rig/Animation als zukünftige Posequelle;
- Reference Preview verlangt In-Place-Verhalten;
- Animation, Facing und Camera bleiben getrennt;
- spätere FR1–FR8 werden als Zeit-/Frame-Bookmarks behandelt.

# DF-02F.2 – PASS / READY TO FREEZE

Gerätetest auf iPhone/Safari mit Standard-Walk-FBX mit Skin und In-Place erfolgreich.

Bestätigt:
- sichtbares Character-Mesh wird geladen;
- 2 Meshes, beide skinned;
- Skeleton/Rig wird erkannt;
- 129 Bones erkannt;
- 2 Animation Clips erkannt;
- erster Clip läuft im Browser;
- getestete Clip-Dauer 1.033 s;
- In-Place PASS mit horizontaler Drift 0.0000;
- Root X/Z bleibt 0.000 / 0.000;
- Play/Pause funktioniert;
- FBX mit Skin ist für die sichtbare Mannequin-Vorschau geeignet.

**DF-02F.2: PASS / READY TO FREEZE**

# DF-02F.3 – Animation Timeline / Scrubbing – IMPLEMENTED / DEVICE TEST REQUIRED

Branch:
`df-02f3-animation-timeline-scrubbing`

Umgesetzt:
- bestehender F.2-FBX-Intake unverändert weiterverwendet;
- Timeline-Slider über den vollständigen aktiven Clip;
- aktuelle Zeit und Clip-Gesamtdauer in Sekunden;
- normalisierte Position in Prozent;
- laufende Animation aktualisiert die Timeline live;
- Ziehen der Timeline pausiert automatisch;
- gewählte Timeline-Position wird direkt auf den AnimationMixer angewendet;
- Play/Pause bzw. Weiter funktioniert nach dem Scrubben;
- keine Kamera-/Direction-Logik vorgezogen;
- keine FR1–FR8-Bookmarks vorgezogen.

## DF-02F.3 Acceptance Gate
Auf iPhone/iPad/Safari prüfen:
1. Standard-Walk-FBX mit Skin/In-Place lädt wie unter F.2;
2. Timeline läuft synchron zur Animation mit;
3. Pause hält Figur und Timeline stabil an;
4. Slider lässt sich per Touch frei vor/zurück bewegen;
5. während des Scrubbens springt die Figur unmittelbar auf die gewählte Pose;
6. Zeit- und Prozentanzeige entsprechen der Sliderposition;
7. nach Scrubben startet `Weiter` von der gewählten Stelle aus;
8. In-Place/Root-Verhalten bleibt unverändert.

# NÄCHSTER ZULÄSSIGER SCHRITT

Jetzt ausschließlich **DF-02F.3 Gerätetest** auf Branch:
`df-02f3-animation-timeline-scrubbing`

Noch NICHT zulässig:
- Camera-/Facing-Presets;
- N/NE/E/SE/S/SW/W/NW;
- FR1–FR8 Bookmark-System;
- freie Bone-/Pose-Manipulation;
- Prompt-Builder-Bridge;
- weitere Animationen parallel integrieren.

Bei PASS folgt **DF-02F.4 – Camera & Facing Presets**.