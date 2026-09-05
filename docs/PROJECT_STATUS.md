# DevForge – Project Status

Stand: 2026-09-05

## Zweck
DevForge ist eine projektübergreifende webbasierte Entwickler-Toolbox. Aktueller Schwerpunkt ist die reproduzierbare Vorbereitung, Generierung und Prüfung von Character-Animationsframes.

## Repositories
### DevForge
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-02e3-walk-se-fr1-fr4`
- Aktueller Prompt-Builder-Stand: `DF-02D.3R`
- Aktueller Pose-Renderer-Teststand: `DF-02E.3R`

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

# DF-02E.2 – PASS / READY TO FREEZE

## Umgesetzt
- technischer Renderer unter `tools/pose-renderer/`;
- feste orthografische Projektion;
- feste Kamera: yaw 45°, elevation 45°;
- fester 720×720 logical canvas;
- deterministische Projektion expliziter 3D-Joint-Koordinaten;
- technische SVG-Mannequin-Darstellung ohne generative Bild-KI;
- fester Root-/Canvas-Bezug;
- Projection Snapshot im UI für Regression.

## Geräte-/Browserprüfung auf iPhone/Safari
- Testseite DF-02E.2 erreichbar: PASS
- Neutralpose sichtbar und vollständig im Canvas: PASS
- 45°-Gameplay-Ansicht plausibel: PASS
- Root/Scale nach Seiten-Reload stabil: PASS
- gleiche Figur nach Reload reproduziert: PASS

**DF-02E.2: PASS / READY TO FREEZE**

# DF-02E.3 – WALK SE Pose Set FR1–FR4 – TEST-READY

## Umgesetzt
- Entwicklungsbranch `df-02e3-walk-se-fr1-fr4`;
- Datenvertrag `tools/pose-renderer/walk-se-fr1-fr4.v1.json`;
- vier explizite, deterministische Posen: FR1 Contact L, FR2 Down L, FR3 Passing L, FR4 Up / Right Swing;
- gleiche eingefrorene E.2-Kamera für alle vier Posen;
- Root bleibt `[0,0,0]` und darf horizontal nicht wandern;
- explizite Beinrollen je Frame;
- explizite Pelvishöhe je Frame;
- UI-Umschaltung FR1–FR4 ohne Animation/Interpolation;
- Projection Snapshot wird pro ausgewählter Pose aktualisiert;
- Vertrag dokumentiert in `docs/DF-02E3_WALK_SE_POSE_SET_FR1_FR4.md`.

## Beabsichtigte Phase
- FR1: LEFT Contact, RIGHT Trailing
- FR2: LEFT Support/Down, RIGHT Trailing und beginnend vorwärts
- FR3: LEFT Support, RIGHT Passing/Swing unter dem Becken
- FR4: LEFT Support, RIGHT klarer Vorwärtsschwung / Up

# DF-02E.3R – WALK Pose Geometry Refinement – TEST-READY

Der erste Tablet-Test bestätigte die deterministische Phasentrennung, zeigte aber noch zu große Schrittlängen und zu starke vertikale/seitliche Ausschläge. Deshalb wurde E.3 nicht eingefroren.

## Erlaubte Änderung in E.3R
Ausschließlich Pose-/Joint-Geometrie in `tools/pose-renderer/walk-se-fr1-fr4.v1.json` wurde verfeinert. Renderer-Code, Kamera, Skeleton, Root-Policy, UI, Projektion und E.2-Vertrag bleiben unangetastet.

## Geometrische Korrekturen
- FR1: Contact-Schrittlänge reduziert; Arme etwas weniger extrem ausgelenkt.
- FR2: Pelvis-Absenkung von 0.96 auf 0.98 reduziert; Support-/Trailing-Beine kompakter; weniger extremes Einsacken.
- FR3: Passing-Geometrie enger unter dem Becken; Stand- und Swing-Fuß näher zusammen; weiterhin klar von Contact getrennt.
- FR4: Pelvishöhe von 1.06 auf 1.04 reduziert; rechter Vorwärtsschwung und Armgegenbewegung weniger weit ausladend.

## E.3R Acceptance Gate – offen
Auf Tablet/Safari erneut FR1–FR4 nacheinander prüfen:
1. alle vier Posen bleiben klar unterscheidbar und chronologisch lesbar;
2. FR1 wirkt wie natürlicher WALK Contact, nicht wie RUN/Überstride;
3. FR2 ist sichtbar niedriger als FR1, aber nicht übermäßig zusammengesackt;
4. FR3 ist eine kompakte echte Passing-Phase;
5. FR4 zeigt rechten Vorwärtsschwung, ohne übergroße Spreizung;
6. Kamera/Facing/Scale/Root bleiben unverändert;
7. FR5–FR8 und Counterphase bleiben weiterhin nicht implementiert.

**DF-02E.3R bleibt bis zum erneuten Geräte-PASS TEST-READY, nicht FROZEN.**

# NÄCHSTER ZULÄSSIGER SCHRITT

Jetzt ausschließlich **DF-02E.3R Gerätetest** auf `df-02e3-walk-se-fr1-fr4`.

Noch NICHT zulässig:
- FR5–FR8 definieren;
- Counterphase-Ableitung implementieren;
- Pose-Editor/Slider hinzufügen;
- weitere Richtungen/Kameras einführen;
- Prompt-Builder-Bridge integrieren.

Erst nach E.3R PASS folgt **DF-02E.4 – Deterministic Counterphase Derivation FR5–FR8**.

## Scope-Grenze bis DF-02E.6
Keine RUN-, PICK-UP-/PUT-DOWN-/SIT-Posebibliothek, keine vollständigen acht Himmelsrichtungen, kein allgemeiner Animationseditor und keine weiteren generativen Mannequin-WALK-Versuche.
