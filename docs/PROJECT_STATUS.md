# DevForge – Project Status

Stand: 2026-09-05

## Zweck
DevForge ist eine projektübergreifende webbasierte Entwickler-Toolbox. Aktueller Schwerpunkt ist die reproduzierbare Vorbereitung, Generierung und Prüfung von Character-Animationsframes.

## Repositories
### DevForge
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-02e4-walk-se-counterphase-fr5-fr8`
- Aktueller Prompt-Builder-Stand: `DF-02D.3R`
- Aktueller Pose-Renderer-Teststand: `DF-02E.4`

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

Umgesetzt und auf iPhone/Safari geprüft:
- feste orthografische Projektion;
- Kamera yaw 45° / elevation 45°;
- 720×720 logical canvas;
- deterministische Joint-Projektion;
- stabiler Root-/Scale-Bezug nach Reload;
- keine generative Pose-Schätzung.

**DF-02E.2: PASS / READY TO FREEZE**

# DF-02E.3 / DF-02E.3R – WALK SE FR1–FR4 – PASS / READY TO FREEZE

Die erste E.3-Geometrie wurde nach dem Tablet-Test in E.3R ausschließlich auf Pose-/Joint-Ebene verfeinert. Renderer, Kamera, Skeleton, Root-Policy und Projektion blieben unverändert.

Bestätigter Stand:
- FR1 – Contact L;
- FR2 – Down L;
- FR3 – Passing L;
- FR4 – Up / Right Swing;
- natürliche kompaktere Schrittlänge;
- FR2 sichtbar, aber moderat niedriger;
- FR3 klar als Passing lesbar;
- FR4 klarer rechter Vorwärtsschwung ohne Überstride;
- chronologische Folge FR1 → FR2 → FR3 → FR4 auf Tablet/Safari plausibel;
- Kamera/Facing/Scale/Root stabil.

**DF-02E.3R: PASS / READY TO FREEZE**

# DF-02E.4 – Deterministic Counterphase Derivation FR5–FR8 – TEST-READY

## Ziel
Die zweite Hälfte des WALK-Zyklus darf nicht manuell neu gezeichnet oder generativ interpretiert werden. Sie wird deterministisch aus der freigegebenen FR1–FR4-Quellgeometrie abgeleitet.

## Verbindliche Ableitung
- FR5 = FR1 → Contact R
- FR6 = FR2 → Down R
- FR7 = FR3 → Passing R
- FR8 = FR4 → Up / Left Swing

## Algorithmischer Vertrag
Für jedes Quellframe FR1–FR4:
1. zentrale Joints (`root`, pelvis/spine/head) bleiben geometrisch unverändert;
2. jedes anatomische L/R-Joint-Paar wird gegeneinander getauscht;
3. beim Tausch wird die lokale X-Komponente gespiegelt (`x := -x`), damit die aus der Gegenseite übernommene Pose wieder auf der korrekten anatomischen Körperseite liegt;
4. Y und Z bleiben erhalten – insbesondere bleibt die Vorwärtsachse +Z / SE unverändert;
5. Beinrollen werden L↔R getauscht;
6. Pelvishöhe, Root, Kamera, Scale und Timing bleiben identisch zum Quellframe;
7. FR5–FR8 besitzen keine manuell gepflegten separaten Joint-Datensätze.

Damit gilt:
- FR5 ist geometrisch die echte Gegenphase von FR1, nicht eine neue Interpretation;
- FR6 ist die echte Gegenphase von FR2;
- FR7 ist die echte Gegenphase von FR3;
- FR8 ist die echte Gegenphase von FR4.

## Umsetzung
- neuer Entwicklungsbranch `df-02e4-walk-se-counterphase-fr5-fr8`;
- `deriveCounterphase(source)` in `tools/pose-renderer/app.js`;
- feste Counterphase-Paarliste für Arme und Beine;
- Ableitungsmetadaten `derivedFrom` + `COUNTERPHASE_LR_SWAP_AND_X_MIRROR_V1`;
- Renderer zeigt jetzt FR1–FR8;
- FR5–FR8 werden im UI als abgeleitete Frames kenntlich gemacht;
- Projection Snapshot zeigt Quelle und Derivationsmethode;
- keinerlei manueller FR5–FR8-Pose-Datensatz hinzugefügt.

## E.4 Acceptance Gate – offen
Auf Tablet/Safari prüfen:
1. FR5 ist klare rechte Contact-Gegenphase zu FR1;
2. FR6 entspricht FR2 mit rechter Support-/Down-Seite;
3. FR7 ist Passing R und keine Wiederholung von FR3;
4. FR8 zeigt linken Vorwärtsschwung und führt plausibel zurück zu FR1;
5. FR1↔FR5, FR2↔FR6, FR3↔FR7, FR4↔FR8 besitzen jeweils gleiche Pelvishöhe/Schrittdynamik bei vertauschter Anatomieseite;
6. Facing bleibt in allen acht Frames +Z / SE; keine Kamera-/Richtungs-Spiegelung;
7. Root bleibt `[0,0,0]`;
8. Reload erzeugt dieselben abgeleiteten Projektionen erneut.

**DF-02E.4 bleibt bis zum Geräte-PASS TEST-READY, nicht FROZEN.**

# NÄCHSTER ZULÄSSIGER SCHRITT

Jetzt ausschließlich **DF-02E.4 Gerätetest** auf `df-02e4-walk-se-counterphase-fr5-fr8`.

Noch NICHT zulässig:
- FR5–FR8 manuell nachkorrigieren;
- Pose-Editor/Slider hinzufügen;
- weitere Richtungen/Kameras einführen;
- Prompt-Builder-Bridge integrieren;
- Carrier erneut generieren.

Erst nach E.4 PASS folgt **DF-02E.5 – Pose Reference Export / Prompt Builder Bridge**.

## Scope-Grenze bis DF-02E.6
Keine RUN-, PICK-UP-/PUT-DOWN-/SIT-Posebibliothek, keine vollständigen acht Himmelsrichtungen, kein allgemeiner Animationseditor und keine weiteren generativen Mannequin-WALK-Versuche.
