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

# ENTSCHEIDUNG: DETERMINISTIC POSE REFERENCE FOUNDATION

Der generative Mannequin-Ansatz ist für die endgültige technische Posebibliothek beendet. Die endgültige Pose Reference wird künftig aus kontrollierten Joint-/Skeleton-Daten erzeugt.

## DF-02E – Staffelung
1. DF-02E.1 – Deterministic Mannequin Skeleton Contract
2. DF-02E.2 – Fixed 45° Gameplay Pose Renderer
3. DF-02E.3 – WALK SE Pose Set FR1–FR4
4. DF-02E.4 – Deterministic Counterphase Derivation FR5–FR8
5. DF-02E.5 – Pose Reference Export / Prompt Builder Bridge
6. DF-02E.6 – Carrier FR3 Validation Gate

# DF-02E.1 – IMPLEMENTED / CONTRACT ONLY

## Umgesetzt
- neuer Branch `df-02e1-deterministic-mannequin-skeleton-contract`;
- verbindlicher technischer Contract: `docs/DF-02E1_DETERMINISTIC_MANNEQUIN_SKELETON_CONTRACT.md`;
- maschinenlesbare Skelettdefinition: `tools/prompt-builder/mannequin-skeleton.v1.json`;
- stabile Joint-Hierarchie und stabile Joint-IDs;
- anatomisches LEFT/RIGHT eindeutig aus Figurensicht definiert;
- Root/Pelvis-Verantwortung getrennt;
- lokale Pose-Transforms als Position + Rotation definiert;
- feste technische Mannequin-Proportionen definiert;
- semantische Beinrollen CONTACT / SUPPORT / SWING / TRAILING definiert;
- explizite anatomische Counterphase-Paare L↔R definiert;
- Kamera bewusst NICHT Teil des Skeleton Contracts; sie folgt erst in DF-02E.2.

## Verbindliche Skeleton-Grenze
DF-02E.1 enthält absichtlich noch KEINEN Renderer, keinen Pose-Editor, keinen IK-Solver, keine konkreten WALK-Winkel, keine automatische Counterphase-Ableitung und keine PNG-/PDF-Ausgabe.

Die stabilen Joint-IDs sind:
`root`, `pelvis`, `spineLower`, `spineUpper`, `neck`, `head`, `clavicleL`, `shoulderL`, `elbowL`, `wristL`, `handL`, `clavicleR`, `shoulderR`, `elbowR`, `wristR`, `handR`, `hipL`, `kneeL`, `ankleL`, `footL`, `toeL`, `hipR`, `kneeR`, `ankleR`, `footR`, `toeR`.

Counterphase-Paare sind ausschließlich anatomische Joint-Paare. Der spätere FR1→FR5- bzw. FR2→FR6-Wechsel ist ausdrücklich KEINE Bildspiegelung und darf Facing oder Kamera nicht ändern.

## Acceptance Gate DF-02E.1
PASS-Kriterien:
1. stabile Joint-Hierarchie/IDs: PASS
2. feste anatomische LEFT/RIGHT-Semantik: PASS
3. stabile technische Proportionen: PASS
4. deterministisches lokales Transform-Schema: PASS
5. Root/Pelvis-Aufgaben getrennt: PASS
6. Counterphase Joint-Pair Map vorhanden: PASS
7. kein Renderer/Editor/Animationsumfang vorgezogen: PASS

**DF-02E.1: PASS / READY TO FREEZE**

# NÄCHSTER ZULÄSSIGER SCHRITT

## DF-02E.2 – Fixed 45° Gameplay Pose Renderer
Auf dem eingefrorenen Skeleton Contract einen minimalen deterministischen Renderer bauen, der die neutrale technische Mannequin-Figur aus Joint-Daten unter exakt einer festen 45°-Top-Down-Gameplay-Kamera darstellt.

E.2 darf zunächst ausschließlich:
- `mannequin-skeleton.v1.json` laden;
- eine definierte Neutral-/Testpose aus Joint-Transforms darstellen;
- dieselben Joint-Daten immer identisch projizieren;
- feste Kamera, gleiche Scale und gleichen Root verwenden;
- anatomische LEFT/RIGHT-Seiten visuell unterscheidbar/debugbar halten.

E.2 darf noch NICHT:
- WALK FR1–FR8 definieren;
- Pose-Editor/Slider bereitstellen;
- Counterphase automatisch erzeugen;
- mehrere Richtungen/Kameras anbieten;
- Prompt Builder Pose-Export integrieren.

Erst wenn der feste Renderer reproduzierbar PASS ist, folgt DF-02E.3 mit den tatsächlichen WALK-SE-Posedaten FR1–FR4.

## Scope-Grenze bis DF-02E.6
Keine RUN-, PICK-UP-/PUT-DOWN-/SIT-Posebibliothek, keine vollständigen acht Himmelsrichtungen, kein allgemeiner Animationseditor und keine weiteren generativen Mannequin-WALK-Versuche.
