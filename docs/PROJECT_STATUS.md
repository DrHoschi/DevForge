# DevForge – Project Status

Stand: 2026-09-05

## Zweck
DevForge ist eine projektübergreifende webbasierte Entwickler-Toolbox. Das Werkzeug soll nicht nur für `siedler-mini`, sondern auch für weitere Spiele- und Softwareprojekte wiederverwendbar sein. Aktueller Schwerpunkt ist die reproduzierbare Vorbereitung, Generierung, Prüfung und spätere Atlas-Verarbeitung von 2D/3D-gerenderten Character-Animationsframes.

## Repositories

### DevForge
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- GitHub Pages: `https://drhoschi.github.io/DevForge/`
- Aktueller Entwicklungsbranch: `df-02d2-identity-render-lock-reinforcement`
- Aktueller sichtbarer Prompt-Builder-Build: `DF-02D.2`

### Siedler Mini – aktueller Asset-Verbraucher / Testprojekt
- Repository: `DrHoschi/siedler-mini`
- Default Branch: `main`
- Asset-Staging-Branch: `asset-carrier-animation-staging`
- Offener PR: `#5 – Carrier WALK SE – Source Frame Staging`
- Staging-Pfad: `assets/characters/source/carrier/walk/se/`
- Manifest: `assets/characters/source/carrier/walk/se/manifest.json`
- Verbindliche Dateinamen: `carrier_walk_se_f01.png` bis `carrier_walk_se_f08.png`
- Anchor: `bottom-center`
- WALK-Test: 8 FPS, Loop

## DevForge Module
- Prompt Builder: aktiv in Entwicklung
- Animation Tester: Einzelbild-/Manifest-Review vor Atlas, Loop/FPS/Onion-Skin/Bottom-Center-Anchor
- Sprite Lab: vorhanden
- Atlas Builder: vorhanden; finale automatische Produktionsintegration noch nicht freigegeben
- Asset Inspector: vorhanden
- Parameter Playground: vorbereitet

## Entwicklungshistorie

### DF-01 – Prompt Builder Foundation
Projektübergreifende Basis mit Projekt-Presets, Asset-Typen, Kamera/Richtung, editierbaren Contracts sowie TXT/JSON/PDF-Ausgabe.

### DF-02 – Character Animation Generation Package
Character-Auswahl, Animation-Presets, Frame-/Pose-Definitionen, 8 Richtungen, Direction × Frame Matrix und Einzeljob-Export.

### DF-02B – Authoritative Character Reference
Echte visuelle Character-Referenz wird in Generation Package und PDF eingebettet. Die Bildreferenz ist autoritativ für Identität und permanentes Design.

### DF-02B.1 – Mobile Reference Import Fix
Robuster iPhone/Safari-Import mit Vorschau, Status und PDF-Freigabe erst nach tatsächlich dekodierter Referenz. Cache-Busting eingeführt.

### DF-02C – Animation Sequence Reference Contract
Ab Frame 02 wird der unmittelbar vorherige freigegebene Frame als `Previous Approved Frame Reference` eingebettet. Zusätzlich wurde der Animation Tester um Standalone-Frame-Review, Onion-Skin, gemeinsamen Bottom-Center-Anchor und Manifest-Import erweitert.

### DF-02D – Key Pose / Motion Delta Contract
WALK wurde in harte Key-Posen und Mandatory Motion Deltas aufgeteilt. FR1/FR3/FR5/FR7 sind Key Poses. Ziel: sichtbare Gangprogression statt acht fast identischer Posen.

### DF-02D.1 – Previous Frame Pose Override Fix
Die neue Zielpose hat absolute Priorität für animierte Körperteile. Der Previous Frame darf die Bein-/Arm-Pose nicht einfrieren und dient nur noch der nicht-posenbezogenen Kontinuität.

### DF-02D.2 – Identity & Render Lock Reinforcement
Aktueller Stand. Die funktionierende Pose-Hierarchie aus D.1 bleibt erhalten; zusätzlich sind Identität, Anatomie/Proportionen, permanentes Design, Rucksack, Materialien, Renderstil, Licht, Kamera, Scale und Root hart gelockt. Final PASS verlangt gleichzeitig `POSE PASS` und `CONTINUITY PASS`.

## Aktueller Carrier WALK / SE Teststand
- FR1 – L Contact: `PASS / APPROVED`
- FR2 – L Down: `PASS / APPROVED` nach DF-02D.1
- FR3 – Passing L: Pose/Motion in D.1 grundsätzlich erreicht, aber Identity/Render-Continuity war noch nicht stabil genug. Deshalb FR3 noch nicht als Previous Frame für FR4 freigegeben.
- DF-02D.2 wurde genau für diesen FR3-Retest erstellt.

## Nächster zulässiger Test
1. Auf Branch `df-02d2-identity-render-lock-reinforcement` arbeiten.
2. Sicherstellen, dass Prompt Builder sichtbar `DF-02D.2` zeigt.
3. Carrier → WALK → SE → FR3 / Passing L auswählen.
4. Authoritative Character Reference: verbindliches Carrier-Referenzbild.
5. Previous Approved Frame Reference: das freigegebene FR2 aus DF-02D.1.
6. FR3 neu generieren.
7. Nur wenn sowohl Pose/Motion als auch Identity/Render/Kamera/Scale/Root PASS sind, FR3 als Previous Frame für FR4 freigeben.

## Verbindliche Produktionsprinzipien
- Keine weiteren Richtungen produzieren, solange WALK/SE nicht als vollständiger 8-Frame-Loop PASS ist.
- Ein FAIL-Frame darf niemals als Previous Approved Frame für den nächsten Frame verwendet werden.
- Character Reference = Identität / Anatomie / permanentes Design.
- Previous Approved Frame = nicht-posenbezogene Sequenzkontinuität.
- Target Pose / Motion Delta = autoritativ für animierte Gelenk-/Körperpose.
- Ressourcen, Waren und Werkzeuge bleiben separate Assets und werden nicht in die Character-Basisanimation eingebrannt.
- Einzel-PNGs bleiben als Source Frames erhalten; der Atlas wird erst aus freigegebenen Frames aufgebaut.
- Sichtprüfung im DevForge Animation Tester ist ein Review-Gate vor Atlas/Runtime-Integration.

## Noch nicht freigegeben / spätere Arbeit
- WALK/SE FR3–FR8 finalisieren
- vollständigen 8-Frame-Loop im Animation Tester prüfen
- anschließend weitere 7 Richtungen
- IDLE-Vertrag bei Bedarf nachschärfen
- WALK + CARRY / Attachments später separat
- automatisierter Direction Batch / Full Animation Batch
- automatische Speicherung/Übernahme freigegebener Einzelbilder ins Projekt-Repository
- Atlas-Assembly auf Basis des DF-03-Vertrags
- projektübergreifende Asset-Datenbank für Characters, Buildings, Resources, Icons usw.
- automatische technische/visuelle Acceptance-Prüfungen soweit sinnvoll

## Branch-/PR-Hinweis
Ältere DF-01/DF-02/DF-02B.1/DF-02C/DF-03 Zwischenstände existieren teilweise als offene PRs. Der aktuelle Arbeitsstand für die Character-Animation ist jedoch die fortgeschriebene Branch-Kette bis `df-02d2-identity-render-lock-reinforcement`. Vor einem späteren Merge-/Cleanup-Gate müssen diese PRs und Branches konsolidiert werden; bis dahin keine historischen Zwischenstände als aktuelle Baseline behandeln.
