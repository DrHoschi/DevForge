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

Die Rollen beschreiben Capability-Verantwortung und legen noch kein konkretes Hub-Layout fest.

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
Der verbindliche Authority-Contract ist:
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

DF-HUB-01 Contract / Documentation Reconciliation: `PASS / 0 BLOCKER`.
DF-HUB-01 ist noch `NOT IMPLEMENTED`.

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

Autoritativer eingefrorener Produktstand:
`17cec9ca4b399d1099be5bf4bb398a74ea27aff2`

DF-04F umfasst zusätzlich zu A–E die rein visuellen Source-/Result-Bounding-Boxen und geometrischen Center-Guides auf derselben Silhouettengeometrie sowie genau einen gemeinsamen temporären Guide-Schalter. Keine automatische Korrektur, kein Best-Fit und kein Score.

Ein möglicher `Silhouette Geometry Readout` wird als `LATER / ONLY IF REAL REVIEW NEED IS PROVEN` vorgemerkt. Es ist kein DF-04G freigegeben.

## 6. DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation
Status:
`DEFINED / DOCUMENTATION RECONCILED / NOT IMPLEMENTED`

Zweck:
- reale Tool-Türen gegen Repository-/Contract-Autorität reconciliieren;
- eindeutige Statusklassen verwenden;
- Workflow-Rollen festlegen;
- historische, vorbereitete und konsolidierte Tools von real aktiven Capabilities unterscheiden;
- keine höhere Reife auf dem Hub suggerieren als tatsächlich belegt.

Authority-Klassen:
- `FROZEN / PRODUCTIVE`
- `AVAILABLE`
- `PROTOTYPE / HISTORICAL`
- `PREPARED / NOT IMPLEMENTED`
- `CONSOLIDATED / REDIRECT`

Noch nicht Teil von DF-HUB-01:
- konkrete Hub-Kartenreihenfolge;
- Farben/Icons/CSS/Layout;
- Änderung an `index.html` oder `main.js`;
- Tool-Codeänderungen;
- neue Tools/Capabilities;
- Redirect-Umbau;
- Produktionsfreigabe von Atlas-/Repository-Handoff.

## 7. 2D- und 3D-Wiederverwendung
Dieselben 3D-Animationsquellen sollen später für 2D-Sprite-/Bildreferenzen, acht Gameplay-Richtungen, Generation-Referenzen, 3D-Animation-Review und spätere 3D-Projekte dienen können, sofern Rig/Retargeting kompatibel ist.

## 8. Attachment-/Resource-Prinzip
Character-Basisanimation und transportierte/benutzte Gegenstände bleiben möglichst getrennt. Ressourcen, Waren und Werkzeuge sollen eigene Assets sein und nur über definierte Attachments/Kompositionen verbunden werden.

## 9. DF-03 – Animation Atlas Contract
Fachlich vorbereitet: Direction-Reihenfolge N, NE, E, SE, S, SW, W, NW; chronologische Frames; gemeinsame Zell-/Benennungs-/Metadatenregeln; Bottom-Center-Anchor; Source-Frames bis Freigabe einzeln; Atlas erst nach Source-Review; Character und Attachments getrennt.

DF-03 bleibt nachgelagert. Vorhandene Atlas-Tool-Funktion ist keine automatische Produktionsfreigabe.

## 10. Asset Library / Referenzverwaltung – später
Geplant sind Asset-ID/Name/Typ/Projektzuordnung, Authoritative References, Model-/Rig-/Animation-Source, Style-/Identity-/Material-Contracts, Kamera-/Richtungsregeln, Varianten, Tasks, technische Output-Profile, Staging-/Runtime-Pfade und Versions-/Freigabestatus.

## 11. Building / Resource / Icon Workflows
Gemeinsames Prinzip:
Authoritative Reference → veränderliche Parameter → feste Projektcontracts → Generation Package → Preview/Review → APPROVED Source Asset → technischer Handoff.

## 12. Review-Automation – später
Soweit technisch sinnvoll: Alpha-Erkennung, Canvas-/Abmessungsvergleich, Root-/Bounding-Box-/Scale-Drift, Difference Preview, Silhouettenvergleich, Geometry Guides, Frame-zu-Frame-Motionindikatoren, Direction-Vergleich, Manifest-Vollständigkeit und Dateinamen-/Metadatenvalidierung. Automatische Prüfungen ersetzen nicht automatisch die fachliche visuelle Freigabe.

## 13. Repository-Verknüpfungen
### DevForge
- Repository: `DrHoschi/DevForge`
- Default: `main`
- autoritativer eingefrorener Produktstand: `17cec9ca4b399d1099be5bf4bb398a74ea27aff2`

### Siedler Mini
- Repository: `DrHoschi/siedler-mini`
- Default: `main`
- konkrete aktuelle Handoff-Pfade und Freigabegrenzen werden verbindlich in der Repository-Dokumentation gepflegt.

## 14. Nicht vorziehen
Derzeit nicht parallel vorziehen: vollständige Animation Library, komplexe Attachment-Engine, automatische Generierungs-API, finaler automatischer Atlas-Packing-Workflow, große persistente Asset-Datenbank, automatisches Pose-Scoring/KI-Review, Threshold/Tolerance oder Difference-/Silhouette-Scoring, Auto-Alignment/Best-Fit sowie DF-04 Geometry Readout ohne realen Bedarf.

## 15. Git-/Dokumentations-Arbeitsweise
Kleine klar benannte DF-Blöcke; ein beobachtetes Problem pro Block; aktuellen Branch/Status prüfen; funktionierende Contracts nicht nebenbei umbauen; sichtbare Build-Kennung bei produktiven UI-/Code-Blöcken; Cache-Busting bei JS-Änderungen; PASS/FAIL dokumentieren; Repository-Dokumentation nachziehen; GitHub ist Source of Truth; neue Entwicklungsblöcke starten nur von klar festgelegter Baseline.

## 16. Nächster zulässiger Schritt
Noch kein DF-HUB-01-Entwicklungsbranch und keine Implementierung automatisch freigegeben.

Ausschließlich fachlich entscheiden, ob der reconciliierte DF-HUB-01-Contract in einem separaten kleinen Hub-Implementierungsblock umgesetzt werden soll. Falls freigegeben, zuerst separaten Entwicklungsbranch vom reconciliierten Dokumentationsstand anlegen; keine Implementierung im selben Schritt.
