# DevForge – Master Roadmap & Entwicklungsgrenzen

Stand: 2026-09-10

## 1. Vision
DevForge soll eine projektübergreifende Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets werden. Der Prompt Builder ist nur ein Einstiegspunkt. Langfristig verbindet DevForge wiederverwendbare Asset-Definitionen, Referenzen, Generierungsverträge, Vorschau/Review, Freigaben, technische Prüfung, Atlas-/Metadaten-Erzeugung und kontrollierte Übergabe in Ziel-Repositories.

Neue Funktionen werden bevorzugt aus echten Produktionsproblemen abgeleitet statt als theoretische All-in-one-Lösung vorgebaut.

## 2. Zielarchitektur
Die fachlichen Workflow-Rollen für den Tool Hub sind:
1. `REFERENCE / CREATE`
2. `GENERATION / HANDOFF`
3. `REVIEW`
4. `TECHNICAL ASSET`
5. `RUNTIME / REPOSITORY HANDOFF`

### A – Project & Preset Layer
Mehrere Zielprojekte, projektspezifische Style-/Camera-/Direction-/Scale-/Output-/Naming-Contracts, definierte Repository-/Staging-Ziele und wiederverwendbare Presets.

### B – Asset Library
Asset-Katalog mit getrennten Asset-Arten. Keine große persistente Asset-Datenbank vorziehen, bevor reale Workflows den minimal notwendigen Datensatz bewiesen haben.

### C – Generation Package Layer
Single Asset / Single Frame, Animation Frame, Direction Batch, Full Animation Batch, TXT/JSON/PDF, direkte Referenzbilder und klare Prioritäts-/Konfliktregeln.

### D – Preview & Review Layer
Animierte 3D-Referenzvorschau, Einzelbildprüfung, Source-/Result-Vergleich, Overlay, manuelles Alignment, Difference View, Silhouette Difference, Silhouette Geometry Guides, Direction-Vergleich sowie Animation Timeline/FPS/Loop/Frame-Stepping.

### E – Technical Asset Layer
Sprite Lab, Asset Inspector, Atlas-Funktionen, Pivot/Anchor/Scale, Alpha-/Abmessungsprüfung, Atlas-Zellen/Metadaten, deterministische Benennung und später Runtime-Handoff.

### F – Repository Handoff
Projektbezogene Staging-Pfade, Manifest-Dateien, nur freigegebene Source Assets weitergeben und Atlas-/Runtime-Artefakte erst nach Review-Gate erzeugen.

## 3. Aktuelle Module / Authority
- Source / Result Compare View – `FROZEN / PRODUCTIVE`, Rolle `REVIEW`, autoritativ DF-04F.
- Prompt Builder – `AVAILABLE`, Rolle `GENERATION / HANDOFF`.
- Animated 3D Reference Viewer – `FROZEN / PRODUCTIVE`, Rolle `REFERENCE / CREATE`.
- Deterministic Pose Renderer – `PROTOTYPE / HISTORICAL`, Rolle `REFERENCE / CREATE`.
- Sprite Lab – `AVAILABLE`, Rolle `TECHNICAL ASSET`.
- Atlas Builder – `CONSOLIDATED / REDIRECT`, Rolle `TECHNICAL ASSET`.
- Animation Tester – `AVAILABLE`, Rolle `REVIEW`.
- Asset Inspector – `AVAILABLE`, Rolle `TECHNICAL ASSET`.
- Parameter Playground – `PREPARED / NOT IMPLEMENTED`.
- Controlled Asset Handoff – DF-05 `FROZEN / PRODUCTIVE`; DF-06 `FROZEN / PRODUCTIVE` erweitert denselben Handoff-Kontext um explizite Target Project Profiles.

DF-HUB-01 bleibt `PASS / 0 BLOCKER / FROZEN`.

## 4. Character Animation Contract – erreichter Stand
DF-02F.1–F.5 sind als belegte Capabilities vorhanden. DF-02F.6 und R.3/R.4 sind implementiert; externe deterministische Bildgenerierung bleibt der begrenzende Faktor. R.1 und R.2 bleiben FAIL-Historie.

## 5. DF-04 – Asset Review Foundation
DF-04A bis DF-04F sind `PASS / FROZEN`. Ein möglicher `Silhouette Geometry Readout` bleibt `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`.

## 6. DF-05 – Controlled Asset Handoff Foundation
Frozen Product Commit:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

Status:
`PASS / 0 BLOCKER / FROZEN`

Scope:
`Handoff Eligibility + Minimal Manifest Contract + Explicit Target Contract`

DF-05 bleibt geschlossen. Keine Folgefunktion darf seine Eligibility-, Approval- oder Manifest-Semantik nebenbei ändern.

## 7. Capability Reconciliation nach DF-05
Gegen den Frozen DF-05-Stand wurde als nächste kleine Lücke die wiederverwendbare, ausdrücklich ausgewählte Zielprojekt-Autorität identifiziert.

Ausgewählt und abgeschlossen:
`DF-06 – Target Project Handoff Profile Foundation`

## 8. DF-06 – Target Project Handoff Profile Foundation
Verbindlicher Contract:
`docs/DF-06_TARGET_PROJECT_HANDOFF_PROFILE_FOUNDATION_CONTRACT.md`

Branch:
`df-06-target-project-handoff-profile-foundation`

Development Baseline:
`825d77e4b4f320c13482b024e3b523946b1b18f7`

Frozen Product Commit:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

Status:
`PASS / 0 BLOCKER / FROZEN`

Scope:
`Project Profile Contract + Explicit Profile Selection Contract + Deterministic Profile Application Contract`

Fachlicher Übergang:
`EXPLICIT TARGET PROJECT PROFILE → deterministische Handoff-Vorgaben → DF-05 Minimalmanifest`

### Frozen Produktscope
DF-06 TESTBUILD 1 verändert produktiv ausschließlich:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`
- Root `index.html` für Build-Kennung/Cache-Busting.

`main.js` blieb unverändert; keine neue Hub-Tür und keine zusätzliche Infrastrukturdatei.

### Erstes reales Profil
Genau ein Profil ist im Frozen Product Stand enthalten:
- `profileVersion: 1`
- `profileId: siedler-mini`
- `profileName: Siedler Mini`
- `targetProject: DrHoschi/siedler-mini`
- `stagingPath: assets/characters/`
- `format: png`
- `outputFilename: carrier.png`

Die Auswahl bleibt explizit; es gibt kein automatisch aktives Profil.

### Completion / Regression / Device Gate
`PASS / 0 BLOCKER`

Reale Apple-/Safari-Evidenz vom 2026-09-10 bestätigt die sichtbare TESTBUILD-1-Kennung, explizite Profilauswahl, korrekte Übernahme der vier Zielwerte in die bestehenden DF-05-Felder und den weiterhin verwendbaren DF-05-Handoff-Workflow.

### Freeze Gate
`DF-06 Freeze Gate = PASS / 0 BLOCKER / FROZEN`

Der Produktdiff von `825d77e4b4f320c13482b024e3b523946b1b18f7` bis `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec` wurde erneut geprüft. Merge-Base ist exakt die autorisierte Entwicklungsbaseline. Produktive Änderungen liegen ausschließlich innerhalb des freigegebenen Scopes.

Der getestete Commit `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec` ist der verbindliche DF-06 Frozen Product Commit. Nachfolgende Freeze-Dokumentation verändert keine Produktdatei.

### Non-Goals
Keine GitHub-API-Übertragung, kein Commit/Push/PR in Ziel-Repositories, keine Dateikopie, keine Runtime-Integration, keine automatische Projekterkennung, keine automatische Approval-Entscheidung/-Persistenz, keine große Project-/Asset-Datenbank, kein Batch-Handoff, Dependency Graph, Atlas-Build/Sprite-Packing oder Konvertierung.

## 9. DF-03 – Animation Atlas Contract
Fachlich vorbereitet und nachgelagert. Vorhandene Atlas-Tool-Funktion ist keine automatische Produktionsfreigabe.

## 10. Asset Library / Referenzverwaltung – später
Geplant sind Asset-ID/Name/Typ/Projektzuordnung, Authoritative References, Model-/Rig-/Animation-Source, Style-/Identity-/Material-Contracts, Kamera-/Richtungsregeln, Varianten, Tasks, technische Output-Profile, Staging-/Runtime-Pfade und Versions-/Freigabestatus. Keine große persistente Asset-Datenbank vorziehen.

## 11. Building / Resource / Icon Workflows
Gemeinsames Prinzip:
`Authoritative Reference → veränderliche Parameter → feste Projektcontracts → Generation Package → Preview/Review → APPROVED Source Asset → technischer Handoff`

## 12. Repository-Verknüpfungen
### DevForge
- Repository: `DrHoschi/DevForge`
- Default: `main`
- Autoritativer Frozen Product Stand vor DF-06: `c677f07773866dfe8f5c98dcb311ab1750538d9c`
- DF-06 Branch: `df-06-target-project-handoff-profile-foundation`
- DF-06 Frozen Product Commit: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

### Siedler Mini
- Repository: `DrHoschi/siedler-mini`
- Default: `main`
- DF-06 verändert dessen Dateien nicht.

## 13. Git-/Dokumentations-Arbeitsweise
Kleine klar benannte DF-Blöcke; aktuellen Branch/Status prüfen; funktionierende Contracts nicht nebenbei umbauen; sichtbare Build-Kennung bei produktiven UI-/Code-Blöcken; Cache-Busting bei JS-Änderungen; PASS/FAIL dokumentieren; GitHub ist Source of Truth; neue Entwicklungsblöcke starten nur von klar festgelegter Baseline.

## 14. Nächster zulässiger Schritt
Ausschließlich eine neue Capability Reconciliation gegen den eingefrorenen DF-06-Produktstand `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`.

Noch keine neue Implementierung im selben Schritt.