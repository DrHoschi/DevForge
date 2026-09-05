# DevForge – Project Status

Stand: 2026-09-05

## Zweck
DevForge ist eine projektübergreifende webbasierte Entwickler-Toolbox. Aktueller Schwerpunkt ist die reproduzierbare Vorbereitung, Generierung und Prüfung von Character-Animationsframes.

## Repositories
### DevForge
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-02e1-deterministic-mannequin-skeleton-contract`
- Aktueller Prompt-Builder-Stand: `DF-02D.3R`
- Neuer Testpfad: `tools/pose-renderer/`

# ENTSCHEIDUNG: DETERMINISTIC POSE REFERENCE FOUNDATION

Der generative Mannequin-Ansatz ist für die endgültige technische Posebibliothek beendet. Die endgültige Pose Reference wird künftig aus kontrollierten Joint-/Skeleton-Daten erzeugt.

## DF-02E – Staffelung
1. DF-02E.1 – Deterministic Mannequin Skeleton Contract
2. DF-02E.2 – Fixed 45° Gameplay Pose Renderer
3. DF-02E.3 – WALK SE Pose Set FR1–FR4
4. DF-02E.4 – Deterministic Counterphase Derivation FR5–FR8
5. DF-02E.5 – Pose Reference Export / Prompt Builder Bridge
6. DF-02E.6 – Carrier FR3 Validation Gate

# DF-02E.1 – PASS / READY TO FREEZE

Umgesetzt:
- `docs/DF-02E1_DETERMINISTIC_MANNEQUIN_SKELETON_CONTRACT.md`
- `tools/prompt-builder/mannequin-skeleton.v1.json`
- stabile Joint-Hierarchie und Joint-IDs
- anatomisches LEFT/RIGHT aus Figurensicht
- Root/Pelvis-Verantwortung
- Counterphase-Paare
- keine Kamera-/Renderer-Logik vorgezogen

# DF-02E.2 – IMPLEMENTED / TEST-READY

## Umgesetzt
- neuer technischer Renderer unter `tools/pose-renderer/`;
- `neutral-test-v1.json` als einzige explizite Testpose;
- feste orthografische Projektion;
- feste Kamera: yaw 45°, elevation 45°;
- fester 720×720 logical canvas;
- deterministische Projektion expliziter 3D-Joint-Koordinaten;
- technische SVG-Mannequin-Darstellung ohne generative Bild-KI;
- fester Root-/Canvas-Bezug;
- Projection Snapshot im UI für Regression;
- dokumentierter E.2-Vertrag und Acceptance Checklist.

## Harte E.2-Grenze
Noch NICHT enthalten:
- WALK FR1–FR8;
- Pose-Editor oder Slider;
- Animation/Playback;
- Counterphase-Ableitung;
- mehrere Richtungen/Kameras;
- Prompt-Builder-Bridge;
- finaler Character-Render.

## E.2 Acceptance Gate
Code-/Scope-Kriterien:
1. eine Neutral-/Testpose בלבד: PASS
2. feste orthografische 45°-Kamera: PASS
3. feste Canvas-/Scale-Basis: PASS
4. explizite numerische Joint-Daten: PASS
5. kein generatives Pose-Raten: PASS
6. Projection Snapshot vorhanden: PASS
7. keine WALK-/Editor-/Animation-Funktion vorgezogen: PASS

**DF-02E.2: IMPLEMENTED / TEST-READY**

Der finale E.2-PASS benötigt jetzt ausschließlich noch die visuelle Geräte-/Browserprüfung der Testseite: gleiche Pose nach Reload, plausible 45°-Ansicht, stabiler Root/Scale und keine sichtbare LEFT/RIGHT-Verwechslung.

# NÄCHSTER ZULÄSSIGER SCHRITT

Zuerst DF-02E.2 auf der veröffentlichten Testseite visuell prüfen. Bei PASS wird E.2 eingefroren. Erst danach folgt **DF-02E.3 – WALK SE Pose Set FR1–FR4** mit expliziten deterministischen Posedaten.

## Scope-Grenze bis DF-02E.6
Keine RUN-, PICK-UP-/PUT-DOWN-/SIT-Posebibliothek, keine vollständigen acht Himmelsrichtungen, kein allgemeiner Animationseditor und keine weiteren generativen Mannequin-WALK-Versuche.
