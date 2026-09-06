# DevForge – Project Status

Stand: 2026-09-06

## Zweck
DevForge ist eine projektübergreifende webbasierte Entwickler-Toolbox. Aktueller Schwerpunkt ist die reproduzierbare Vorbereitung, Auswahl und spätere Übergabe von Character-Animationsreferenzen.

## Repositories
### DevForge
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-02f1-animated-3d-reference-asset-contract`
- Aktueller Prompt-Builder-Stand: `DF-02D.3R`
- Historischer Pose-Renderer-Prototyp: `DF-02E.1–E.4`
- Aktueller Entwicklungsblock: `DF-02F.1`

# ARCHITEKTURENTSCHEIDUNG: ECHTE 3D-ANIMATION ALS POSEQUELLE

Die in DF-02E entwickelte deterministische Mannequin-/Joint-Pose-Lösung bleibt als dokumentierter Prototyp im Repository erhalten, wird aber nicht zur langfristigen Produktionsquelle ausgebaut.

Ab DF-02F soll DevForge echte geriggte 3D-Animationsquellen verwenden. Die Animation selbst liefert die Bewegungsgeometrie. Kamera, Facing, Referenzzeitpunkt und spätere Ausgabe werden von DevForge kontrolliert.

Damit werden spätere Referenzframes nicht mehr als manuell erfundene Skelettgeometrie gepflegt, sondern als Bookmarks innerhalb einer echten Animation ausgewählt.

# DF-02E – Prototypischer Stand

## DF-02E.1 – Deterministic Mannequin Skeleton Contract
**PASS / PROTOTYPE COMPLETE**

## DF-02E.2 – Fixed 45° Gameplay Pose Renderer
**PASS / PROTOTYPE COMPLETE**

## DF-02E.3 / E.3R – WALK SE FR1–FR4
**PASS / PROTOTYPE COMPLETE**

## DF-02E.4 – Deterministic Counterphase Derivation FR5–FR8
Der Gerätevergleich FR1–FR8 hat die deterministische Gegenphasen-Ableitung technisch bestätigt. Der Block wird nicht weiter zur Produktionsposebibliothek ausgebaut, weil die Architektur anschließend bewusst auf echte 3D-Animationen umgestellt wurde.

**DF-02E.4: PASS / PROTOTYPE COMPLETE / SUPERSEDED FOR PRODUCTION BY DF-02F**

Nicht fortsetzen:
- DF-02E.5 Pose Reference Export / Prompt Builder Bridge auf Basis der künstlichen Mannequin-Posen;
- weitere manuell definierte WALK-Posen;
- weitere Richtungen auf Basis des alten Pose-Renderers.

# DF-02F – 3D Animation Reference Viewer Foundation

Ziel: echte 3D-Animationen als autoritative Bewegungsquelle nutzen und daraus reproduzierbar 2D-/3D-Referenzen auswählen.

Geplante Staffelung:
1. DF-02F.1 – Animated 3D Reference Asset Contract
2. DF-02F.2 – Animated 3D Preview / Runtime Asset Intake
3. DF-02F.3 – Animation Timeline / Scrubbing
4. DF-02F.4 – Camera & Facing Presets
5. DF-02F.5 – Pose Bookmark / Reference Capture
6. DF-02F.6 – Prompt Builder / Reference Export Bridge

Die Staffelung bleibt klein. Keine spätere Funktion wird vorgezogen, solange der darunterliegende Block nicht bewiesen ist.

# DF-02F.1 – Animated 3D Reference Asset Contract – PASS / READY TO FREEZE

Vertrag:
`docs/DF-02F1_ANIMATED_3D_REFERENCE_ASSET_CONTRACT.md`

Erste bereitgestellte Testquelle:
`X Bot@Standard Walk 2.fbx`

Am bereitgestellten File technisch bestätigt:
- binäres FBX;
- FBX-Version 7700;
- 392192 Byte;
- Mixamo-Skeleton `mixamorig:*` vorhanden;
- Hips/Spine/Head/Arme/Hände/Beine/Füße vorhanden;
- AnimationStack / AnimationLayer vorhanden.

Vom Nutzer als In-Place-Export bereitgestellt.

## Verbindliche F.1-Grenzen
- echtes 3D-Modell/Rig/Animation ist die zukünftige Posequelle;
- Model, Rig und Animation sind getrennte Verantwortungen;
- globale horizontale Root-Fortbewegung ist in Reference Preview nicht zulässig;
- natürliche lokale Hips-/Körperbewegung bleibt erhalten;
- Animation, Facing und Camera bleiben getrennt;
- FR1–FR8 werden später als Zeit-/Frame-Bookmarks betrachtet;
- DF-02E bleibt als Prototyp erhalten;
- noch kein Viewer, keine Timeline, keine Direction-Presets und kein Prompt-Builder-Umbau.

**DF-02F.1: PASS / READY TO FREEZE**

# NÄCHSTER ZULÄSSIGER SCHRITT

Ausschließlich:
**DF-02F.2 – Animated 3D Preview / Runtime Asset Intake**

DF-02F.2 soll erstmals klären und beweisen:
- ob die aktuelle FBX ein sichtbares Mesh enthält oder nur Rig/Animation;
- welches browserfähige Runtime-Verfahren verwendet wird;
- wie Model + Rig + Clip geladen und abgespielt werden;
- dass die Figur in-place an stabiler Weltposition bleibt.

Noch NICHT zulässig:
- Timeline-Scrubber;
- FR1–FR8 Bookmark-System;
- acht Gameplay-Richtungen;
- freie Pose-Manipulation;
- Prompt-Builder-Bridge;
- RUN/PICK-UP/WORK usw. parallel integrieren.