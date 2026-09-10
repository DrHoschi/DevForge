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

Die Rollen beschreiben Capability-Verantwortung und legen kein starres Hub-Layout fest.

### A – Project & Preset Layer
Mehrere Zielprojekte, projektspezifische Style-/Camera-/Direction-/Scale-/Output-/Naming-Contracts, definierte Repository-/Staging-Ziele und wiederverwendbare Presets.

### B – Asset Library
Asset-Katalog mit getrennten Asset-Arten wie Characters, 3D Character/Rig/Animation Sources, Buildings, Resources, Goods, Tools, Icons und Environment Assets. Keine große persistente Asset-Datenbank vorziehen, bevor reale Workflows den minimal notwendigen Datensatz bewiesen haben.

### C – Generation Package Layer
Single Asset / Single Frame, Animation Frame, Direction Batch, Full Animation Batch, TXT/JSON/PDF, direkte Referenzbilder und klare Prioritäts-/Konfliktregeln.

### D – Preview & Review Layer
Animierte 3D-Referenzvorschau, Einzelbildprüfung, Source-/Result-Vergleich, Overlay, manuelles Alignment, Difference View, Silhouette Difference, Silhouette Geometry Guides, Direction-Vergleich sowie Animation Timeline/FPS/Loop/Frame-Stepping. Später bei realem Bedarf Root/Pivot/Anchor, Approve/Reject, Review-Notizen und technische Vergleichshilfen.

### E – Technical Asset Layer
Sprite Lab, Asset Inspector, Atlas-Funktionen, Pivot/Anchor/Scale, Alpha-/Abmessungsprüfung, Atlas-Zellen/Metadaten, deterministische Benennung und später Runtime-Handoff.

### F – Repository Handoff
Projektbezogene Staging-Pfade, Manifest-Dateien, nur freigegebene Source Assets weitergeben und Atlas-/Runtime-Artefakte erst nach Review-Gate erzeugen.

## 3. Aktuelle Module / DF-HUB-01 Authority
Verbindlicher Authority-Contract:
`docs/DF-HUB-01_TOOL_HUB_AUTHORITY_WORKFLOW_RECONCILIATION_CONTRACT.md`

- Source / Result Compare View – `FROZEN / PRODUCTIVE`, Rolle `REVIEW`, autoritativ DF-04F.
- Prompt Builder – `AVAILABLE`, Rolle `GENERATION / HANDOFF`.
- Animated 3D Reference Viewer – `FROZEN / PRODUCTIVE` für belegte DF-02F.1–F.5-Capabilities, Rolle `REFERENCE / CREATE`.
- Deterministic Pose Renderer – `PROTOTYPE / HISTORICAL`, Rolle `REFERENCE / CREATE`.
- Sprite Lab – `AVAILABLE`, Rolle `TECHNICAL ASSET`.
- Atlas Builder – `CONSOLIDATED / REDIRECT`, Rolle `TECHNICAL ASSET`; keine eigenständige Capability-Autorität.
- Animation Tester – `AVAILABLE`, Rolle `REVIEW`.
- Asset Inspector – `AVAILABLE`, Rolle `TECHNICAL ASSET`.
- Parameter Playground – `PREPARED / NOT IMPLEMENTED`, noch keine aktive Produktionsrolle.

DF-HUB-01: `PASS / 0 BLOCKER / FROZEN`.

## 4. Character Animation Contract – erreichter Stand
- DF-02F.1 Animated 3D Reference Asset Contract – PASS
- DF-02F.2 Animated 3D Preview / Runtime Asset Intake – PASS
- DF-02F.3 / F.3R Animation Timeline / Scrubbing – PASS
- DF-02F.4 / F.4R Camera & Facing Presets / Semantic Alignment – PASS
- DF-02F.5 Pose Bookmark / Reference Capture – PASS
- DF-02F.6 Prompt Builder / Reference Export Bridge – implemented
- DF-02F.6R.1 Pose Fidelity Contract Reinforcement – FAIL
- DF-02F.6R.2 Pose-dominant PDF Transfer Contract – FAIL
- DF-02F.6R.3 Direct Visual Pose Handoff – implemented; external generation still insufficiently deterministic
- DF-02F.6R.4 Explicit Pose Geometry Control – IMPLEMENTED; external generation limit remains

Die reproduzierbare Pose-Auswahl in DevForge ist nicht mehr der Hauptengpass. Der offene Punkt liegt beim externen Transfer der Pose in generierte Character-Bilder.

## 5. DF-04 – Asset Review Foundation
DF-04A bis DF-04F sind `PASS / FROZEN`.

Ein möglicher `Silhouette Geometry Readout` bleibt als `LATER / ONLY IF REAL REVIEW NEED IS PROVEN` vorgemerkt. Es ist kein DF-04G freigegeben.

## 6. DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation
Eingefrorener Stand:
`415d44bf78be86a80c6437f6817a30a056d8ba15`

Status:
`PASS / 0 BLOCKER / FROZEN`

Keine neue Capability wird durch DF-05 innerhalb des Hub-Blocks eingeführt oder DF-HUB-01 wieder geöffnet.

## 7. Capability Reconciliation / ausgewählter nächster Block
Gegen den eingefrorenen Stand `415d44bf78be86a80c6437f6817a30a056d8ba15` wurde die offene Grenze zwischen `TECHNICAL ASSET` und `RUNTIME / REPOSITORY HANDOFF` als nächster kleiner Capability-Block ausgewählt.

Nicht vorgezogen werden Parameter Playground, Geometry Readout, weitere DF-04-Analyse, automatisches Atlas-Packing oder eine große persistente Asset Library.

Ausgewählt:
`DF-05 – Controlled Asset Handoff Foundation`

## 8. DF-05 – Controlled Asset Handoff Foundation
Verbindlicher Contract:
`docs/DF-05_CONTROLLED_ASSET_HANDOFF_FOUNDATION_CONTRACT.md`

Definition-Baseline:
`415d44bf78be86a80c6437f6817a30a056d8ba15`

Status:
`DEFINED / NOT IMPLEMENTED`

Scope:
`Handoff Eligibility + Minimal Manifest Contract + Explicit Target Contract`

Fachlicher Übergang:
`APPROVED SOURCE ASSET → Handoff Manifest → explizites Ziel/Staging → später separat autorisierte Übergabe`

### Minimale Authority
DF-05 verlangt eine stabile Asset-Identität, eindeutige Source-Referenz, expliziten Approval-Status, explizites Zielprojekt, expliziten Ziel-/Staging-Pfad, Output-Dateiname, minimale Formatinformation und eine Manifest-Version.

`NOT APPROVED` darf nicht produktiv übergeben werden. `APPROVED` darf als Handoff-Kandidat manifestiert werden. Technische Verfügbarkeit oder ein erfolgreicher Check ersetzen keine fachliche Freigabe.

Das Manifest beschreibt nur, was später kontrolliert übergeben werden soll. Es führt selbst keine Datei-, GitHub- oder Runtime-Aktion aus.

DF-05 behandelt zunächst ausschließlich `APPROVED SOURCE ASSET`. Automatisch erzeugte Atlanten und sonstige Derived/Runtime Assets bleiben nachgelagert.

### Non-Goals
Keine GitHub-API-Übertragung, kein automatisches Commit/Push/PR, keine Ziel-Repository-Änderung, keine automatische Dateiübertragung, kein Atlas-Build/Sprite-Packing, keine Konvertierung, keine große Asset-Datenbank, kein Batch-Handoff, kein Dependency Graph, keine automatische Approval-Entscheidung, keine neue Review-UI, kein Cloud Storage und keine Runtime-Integration.

## 9. 2D- und 3D-Wiederverwendung
Dieselben 3D-Animationsquellen sollen später für 2D-Sprite-/Bildreferenzen, acht Gameplay-Richtungen, Generation-Referenzen, 3D-Animation-Review und spätere 3D-Projekte dienen können, sofern Rig/Retargeting kompatibel ist.

## 10. Attachment-/Resource-Prinzip
Character-Basisanimation und transportierte/benutzte Gegenstände bleiben möglichst getrennt. Ressourcen, Waren und Werkzeuge sollen eigene Assets sein und nur über definierte Attachments/Kompositionen verbunden werden.

## 11. DF-03 – Animation Atlas Contract
Fachlich vorbereitet: Direction-Reihenfolge N, NE, E, SE, S, SW, W, NW; chronologische Frames; gemeinsame Zell-/Benennungs-/Metadatenregeln; Bottom-Center-Anchor; Source-Frames bis Freigabe einzeln; Atlas erst nach Source-Review; Character und Attachments getrennt.

DF-03 bleibt nachgelagert. Vorhandene Atlas-Tool-Funktion ist keine automatische Produktionsfreigabe.

## 12. Asset Library / Referenzverwaltung – später
Geplant sind Asset-ID/Name/Typ/Projektzuordnung, Authoritative References, Model-/Rig-/Animation-Source, Style-/Identity-/Material-Contracts, Kamera-/Richtungsregeln, Varianten, Tasks, technische Output-Profile, Staging-/Runtime-Pfade und Versions-/Freigabestatus.

Keine große persistente Asset-Datenbank vorziehen, bevor reale Workflows den minimal notwendigen Datensatz bewiesen haben.

## 13. Building / Resource / Icon Workflows
Gemeinsames Prinzip:
`Authoritative Reference → veränderliche Parameter → feste Projektcontracts → Generation Package → Preview/Review → APPROVED Source Asset → technischer Handoff`

## 14. Review-Automation – später
Soweit technisch sinnvoll: Alpha-Erkennung, Canvas-/Abmessungsvergleich, Root-/Bounding-Box-/Scale-Drift, Difference Preview, Silhouettenvergleich, Geometry Guides, Frame-zu-Frame-Motionindikatoren, Direction-Vergleich, Manifest-Vollständigkeit und Dateinamen-/Metadatenvalidierung. Automatische Prüfungen ersetzen nicht automatisch die fachliche visuelle Freigabe.

## 15. Repository-Verknüpfungen
### DevForge
- Repository: `DrHoschi/DevForge`
- Default: `main`
- eingefrorene DF-05-Definition-Baseline: `415d44bf78be86a80c6437f6817a30a056d8ba15`

### Siedler Mini
- Repository: `DrHoschi/siedler-mini`
- Default: `main`
- DF-05 verändert dieses Repository nicht.

## 16. Nicht vorziehen
Derzeit nicht parallel vorziehen: vollständige Animation Library, komplexe Attachment-Engine, automatische Generierungs-API, finaler automatischer Atlas-Packing-Workflow, große persistente Asset-Datenbank, automatisches Pose-Scoring/KI-Review, Threshold/Tolerance oder Difference-/Silhouette-Scoring, Auto-Alignment/Best-Fit sowie DF-04 Geometry Readout ohne realen Bedarf.

## 17. Git-/Dokumentations-Arbeitsweise
Kleine klar benannte DF-Blöcke; ein beobachtetes Problem pro Block; aktuellen Branch/Status prüfen; funktionierende Contracts nicht nebenbei umbauen; sichtbare Build-Kennung bei produktiven UI-/Code-Blöcken; Cache-Busting bei JS-Änderungen; PASS/FAIL dokumentieren; Repository-Dokumentation nachziehen; GitHub ist Source of Truth; neue Entwicklungsblöcke starten nur von klar festgelegter Baseline.

## 18. Nächster zulässiger Schritt
Ausschließlich `DF-05 – Contract / Documentation Reconciliation Gate`: Contract, PROJECT_STATUS und ROADMAP gegen `415d44bf78be86a80c6437f6817a30a056d8ba15` auf Konsistenz und reinen Dokumentationsumfang prüfen.

Noch kein Entwicklungsbranch und keine Implementierung. Erst nach `PASS / 0 BLOCKER` darf darüber separat entschieden werden.