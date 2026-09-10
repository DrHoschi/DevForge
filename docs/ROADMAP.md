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
- Controlled Asset Handoff – `FROZEN / PRODUCTIVE`, Rolle `RUNTIME / REPOSITORY HANDOFF`, autoritativ DF-05.

DF-HUB-01 bleibt `PASS / 0 BLOCKER / FROZEN`. DF-05 erweitert den Hub außerhalb des eingefrorenen HUB-01-Blocks.

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

Fachlicher Übergang:
`APPROVED SOURCE ASSET → Handoff Manifest → explizites Ziel/Staging → später separat autorisierte Übergabe`

DF-05 bleibt geschlossen. Keine Folgefunktion darf seine Eligibility-, Approval- oder Manifest-Semantik nebenbei ändern.

## 7. Capability Reconciliation nach DF-05
Gegen `c677f07773866dfe8f5c98dcb311ab1750538d9c` ist die nächste kleine Lücke die wiederverwendbare, ausdrücklich ausgewählte Zielprojekt-Autorität für DF-05.

Ausgewählt:
`DF-06 – Target Project Handoff Profile Foundation`

Nicht vorgezogen werden große Project-/Asset-Datenbank, Parameter Playground, automatische Projekterkennung, Repository-Transfer, Atlas-Produktion, Konvertierung oder neuer Review-/Approval-Workflow.

## 8. DF-06 – Target Project Handoff Profile Foundation
Verbindlicher Contract:
`docs/DF-06_TARGET_PROJECT_HANDOFF_PROFILE_FOUNDATION_CONTRACT.md`

Definition-Baseline:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

Status:
`DEFINED / NOT IMPLEMENTED`

Scope:
`Project Profile Contract + Explicit Profile Selection Contract + Deterministic Profile Application Contract`

Fachlicher Übergang:
`EXPLICIT TARGET PROJECT PROFILE → deterministische Handoff-Vorgaben → DF-05 Minimalmanifest`

### Profile Authority
Minimale stabile Identität:
- `profileVersion`
- `profileId`
- `profileName`
- `targetProject`

Zusätzlich enthält ein Profil explizite Staging-/Output-/Format-Vorgaben, soweit sie im realen Workflow benötigt werden. Ein Profil entscheidet niemals Approval.

### Explicit Selection
Ohne ausdrückliche Auswahl gibt es keine Profil-Autorität. Kein stilles Default-Projekt, keine Auswahl aus Session, URL, Toolzustand, Dateiname, Asset-Typ oder Repository-Historie.

### Deterministic Application
Gleiches autoritatives Profil plus gleicher deklarierter Asset-/Handoff-Eingang muss dieselben Vorgaben ergeben. Keine Zufalls-/Timestamp-Namen, versteckten Sessionwerte oder nicht deklarierten Defaults.

### Beziehung zu DF-05
DF-06 darf ausschließlich deklarierte Ziel-/Output-Vorgaben an die vorhandenen DF-05-Eingabegrenzen liefern. DF-05 bleibt unverändert `PASS / 0 BLOCKER / FROZEN`.

### Non-Goals
Keine GitHub-API-Übertragung, kein Commit/Push/PR, keine Dateikopie, keine Runtime-Integration, keine automatische Projekterkennung, keine automatische Approval-Entscheidung/-Persistenz, keine große Project-/Asset-Datenbank, kein Batch-Handoff, kein Dependency Graph, kein Atlas-Build/Sprite-Packing und keine Bild-/3D-Konvertierung.

Ein erstes konkretes `DrHoschi/siedler-mini`-Profil ist noch nicht implementiert und muss in einem späteren Implementation Scope ausdrücklich autorisiert werden.

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
- Autoritativer Frozen Product Stand: `c677f07773866dfe8f5c98dcb311ab1750538d9c`
- DF-06 Documentation Branch: `df-06-target-project-handoff-profile-foundation`

### Siedler Mini
- Repository: `DrHoschi/siedler-mini`
- Default: `main`
- DF-06-Definition verändert dieses Repository nicht.

## 13. Dokumentationszustand
Der README-Drift nach DF-05 wurde im DF-06-Definitionsschritt korrigiert. README beschreibt nun den Frozen DF-05-Stand und DF-06 als `DEFINED / NOT IMPLEMENTED`.

Der versehentlich vorzeitig angelegte Branch `df-06-target-project-handoff-profile-foundation` wird bis zur separaten Entwicklungsfreigabe ausschließlich als Dokumentationsbranch behandelt.

## 14. Nicht vorziehen
Keine vollständige Animation Library, komplexe Attachment-Engine, automatische Generierungs-API, finaler automatischer Atlas-Packing-Workflow, große persistente Asset-Datenbank, automatisches Pose-Scoring/KI-Review, Auto-Alignment/Best-Fit oder DF-04 Geometry Readout ohne realen Bedarf parallel vorziehen.

## 15. Git-/Dokumentations-Arbeitsweise
Kleine klar benannte DF-Blöcke; aktuellen Branch/Status prüfen; funktionierende Contracts nicht nebenbei umbauen; sichtbare Build-Kennung bei produktiven UI-/Code-Blöcken; Cache-Busting bei JS-Änderungen; PASS/FAIL dokumentieren; GitHub ist Source of Truth; neue Entwicklungsblöcke starten nur von klar festgelegter Baseline.

## 16. Nächster zulässiger Schritt
Ausschließlich `DF-06 Contract / Documentation Reconciliation Gate`: Contract, PROJECT_STATUS, ROADMAP und README gegen `c677f07773866dfe8f5c98dcb311ab1750538d9c` auf fachliche Konsistenz, vollständige Scope-/Non-Goal-Grenzen und reinen Dokumentationsumfang prüfen.

Noch keine Implementierung. Erst nach `PASS / 0 BLOCKER` darf separat entschieden werden, ob der bereits existierende Branch als Entwicklungsbranch weiterverwendet oder ein neuer Entwicklungsbranch vom reconcilierten Dokumentationsstand angelegt wird.