# DevForge – ChatGPT Project Context

Stand: 2026-09-05

Diese Datei ist die kompakte Arbeitsgrundlage für neue ChatGPT-Chats im Projekt DevForge. Sie soll verhindern, dass Branches, Repositories, Teststände oder bereits getroffene Entwicklungsentscheidungen erneut hergeleitet werden müssen.

## 1. Projektziel
DevForge ist eine projektübergreifende webbasierte Entwickler-Toolbox für die Vorbereitung, Prüfung und Übergabe von Assets und Entwicklungsdaten. Es ist ausdrücklich nicht nur für Siedler Mini gedacht. Später sollen unter anderem Characters, Buildings, Resources, Icons und weitere Asset-Arten über projektbezogene Presets/Contracts vorbereitet und exportiert werden können.

Aktueller Schwerpunkt: reproduzierbare Character-Animationen aus KI-generierten Einzelbildern mit stabiler Identität, Kamera, Renderstil und sauberer Bewegungsprogression.

## 2. GitHub-Repositories

### DevForge
Repository: `DrHoschi/DevForge`
GitHub Pages: `https://drhoschi.github.io/DevForge/`
Default Branch: `main`
Aktueller Arbeitsbranch: `df-02d2-identity-render-lock-reinforcement`
Aktueller Prompt-Builder-Build: `DF-02D.2`

Wichtig: Die README/Main-Dokumentation war zwischenzeitlich veraltet; `docs/PROJECT_STATUS.md`, `docs/ROADMAP.md` und diese Datei sind ab jetzt die aktuelle fachliche Grundlage des DF-02D.2-Stands.

### Siedler Mini
Repository: `DrHoschi/siedler-mini`
Default Branch: `main`
Asset-Staging-Branch: `asset-carrier-animation-staging`
Offener PR: `#5 – Carrier WALK SE – Source Frame Staging`
Staging-Pfad: `assets/characters/source/carrier/walk/se/`
Manifest: `assets/characters/source/carrier/walk/se/manifest.json`
Dateinamen: `carrier_walk_se_f01.png` … `carrier_walk_se_f08.png`
Anchor: `bottom-center`
WALK: 8 FPS / Loop

## 3. Aktuelle DevForge-Module
- Prompt Builder
- Animation Tester mit Standalone Frame Review, FPS, Loop, Frame-Stepping, Onion-Skin, Bottom-Center-Anchor und Manifest-Import
- Sprite Lab
- Atlas Builder
- Asset Inspector
- Parameter Playground

## 4. Bisherige Entwicklungsblöcke

DF-01 – Prompt Builder Foundation
Projektübergreifender Prompt Builder mit Presets, Asset-Typen, Kamera/Richtung, TXT/JSON/PDF.

DF-02 – Character Animation Generation Package
Character-Auswahl, IDLE/WALK/WALK+CARRY, Frame-/Pose-Definition, Direction × Frame Matrix, Einzeljob-Ausgabe, transparenter PNG-Contract.

DF-02B – Authoritative Character Reference
Character-Referenzbild wird direkt ins Generation Package/PDF eingebettet und ist autoritativ für Identität.

DF-02B.1 – Mobile Reference Import Fix
iPhone/Safari: robuster Bildimport, Vorschau, Status, PDF erst nach echter Dekodierung; Cache-Busting.

DF-02C – Sequence Reference Contract
Ab FR2 wird der unmittelbar vorherige freigegebene Frame als Previous Approved Frame Reference eingebettet. Zusätzlich Animation Tester für rohe Einzelbilder vor Atlas.

DF-02D – Key Pose / Motion Delta Contract
WALK mit harten Key Poses und Mandatory Motion Deltas. FR1/FR3/FR5/FR7 sind Key Poses.

DF-02D.1 – Previous Frame Pose Override Fix
Target Pose/Motion Delta gewinnt für animierte Körperteile. Previous Frame darf die Pose nicht einfrieren und dient nur nicht-posenbezogener Kontinuität.

DF-02D.2 – Identity & Render Lock Reinforcement
Aktueller Stand. Pose-Freiheit aus D.1 bleibt bestehen; zusätzlich harte Locks für Identität, Anatomie/Proportionen, permanentes Design, Kleidung, Rucksack, Materialien, Renderstil, Licht, Kamera, Scale und Root. Final PASS = POSE PASS + CONTINUITY PASS.

## 5. Aktueller realer Teststand – Carrier WALK / SE
Authoritative Character Reference: verbindliches Carrier-Referenzbild (`IMG_4546.jpeg` in bisherigen PDFs).

FR1 – L Contact: PASS / APPROVED.
FR2 – L Down: PASS / APPROVED nach DF-02D.1.
FR3 – Passing L: D.1 erreichte die gewünschte Pose/Motion grundsätzlich, aber die Character-/Render-Continuity driftete zu stark. FR3 ist deshalb NICHT freigegeben und darf nicht als Previous Frame für FR4 verwendet werden.

DF-02D.2 wurde genau erstellt, um FR3 erneut gegen dasselbe freigegebene FR2 zu testen.

## 6. Exakt nächster Schritt im neuen Chat
Nicht FR4 beginnen.

1. Sicherstellen, dass in DevForge der Branch `df-02d2-identity-render-lock-reinforcement` aktiv ist und sichtbar `DF-02D.2` angezeigt wird.
2. Prompt Builder: Carrier → WALK → SE → FR3 / Passing L [KEY POSE].
3. Authoritative Character Reference = verbindliches Carrier-Referenzbild.
4. Previous Approved Frame Reference = das freigegebene DF-02D.1-FR2.
5. PDF exportieren und prüfen, dass DF-02D.2-Contracts enthalten sind.
6. FR3 generieren.
7. Ergebnis gegen zwei Gates prüfen:
   - POSE PASS: rechter Fuß/rechtes Knie passieren klar das gepflanzte linke Bein; Gegenarmschwung; keine nahezu identische FR2-Pose.
   - CONTINUITY PASS: gleicher Carrier, gleiche Anatomie/Proportionen, Gesicht, Mütze, Kleidung, Rucksack, Materialien, Renderstil, Licht, 45° Kamera, Scale, Root und transparentes Alpha.
8. Nur bei Doppel-PASS FR3 als Previous Approved Frame für FR4 freigeben.

## 7. Verbindliche Referenzhierarchie
Für WALK gilt:

1. Target Pose + Mandatory Motion Delta: höchste Priorität ausschließlich für animierte Körper-/Gelenkpositionen.
2. Authoritative Character Reference: höchste Priorität für Identität, Anatomie/Proportionen und permanentes Design.
3. Previous Approved Frame: nicht-posenbezogene Sequenzkontinuität wie Kamera, Scale, Root, Licht, Renderbehandlung, Kleidung/Rucksackdarstellung.

Pose Override bedeutet niemals Design-/Identity-/Render-Freiheit.

## 8. Produktionsregeln
- Nie mit einem FAIL-Frame weiterketten.
- Immer nur den unmittelbar vorherigen APPROVED Frame als Previous Approved Frame verwenden.
- Keine weiteren Richtungen, bevor WALK/SE als vollständiger 8-Frame-Loop PASS ist.
- Einzel-PNGs bleiben Source Frames und werden erst nach Review atlasisiert.
- Ressourcen/Waren/Werkzeuge bleiben getrennte Assets; nicht dauerhaft in Character-Basisframes einbacken.
- Animation Tester ist Review-Gate vor Atlas/Runtime.
- Bei JavaScript-Änderungen sichtbare Build-Kennung + Cache-Busting beibehalten, besonders wegen iPhone/Safari.

## 9. Später geplante DevForge-Funktionen
Nach erfolgreichem WALK/SE:
- FR4–FR8 fertigstellen
- vollständigen Loop im Animation Tester prüfen
- übrige 7 Richtungen
- Direction Batch / Full Animation Batch
- Approve/Reject-Status im Animation Tester
- Speicherung/Commit freigegebener Frames in Projekt-Staging-Pfade
- Atlas-Assembly nach DF-03
- allgemeine Asset Library für Characters/Buildings/Resources/Icons
- weitere Projekt-Presets
- sinnvolle automatische Acceptance-Prüfungen

Nicht vorziehen, solange WALK/SE nicht belastbar ist.

## 10. Git-/Branch-Hinweis
In DevForge existieren mehrere ältere offene PRs/Feature-Branches (DF-01, DF-02, DF-02B.1, DF-02C, DF-03). Sie bilden Zwischenstände ab und sind nicht automatisch die aktuelle Baseline. Für die laufende Character-Animation gilt die fortgeschriebene Branch-Kette bis `df-02d2-identity-render-lock-reinforcement`. Ein späteres eigenes Cleanup-/Freeze-Gate soll die historischen PRs/Branches konsolidieren.

## 11. Arbeitsstil für ChatGPT
- Kleine Schritte, ein Problem pro Block.
- Vor Änderungen aktuellen Branch/Dateistand aus GitHub prüfen.
- Keine bereits funktionierende Contract-Seite unnötig verändern.
- Nach jedem Bild PASS/FAIL fachlich begründen.
- Erst nach PASS weiterketten.
- Keine stillen Annahmen über Repo/Branch/Frame-Status treffen; diese Datei und GitHub sind maßgeblich.
