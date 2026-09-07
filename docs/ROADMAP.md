# DevForge – Master Roadmap & Entwicklungsgrenzen

Stand: 2026-09-07

## 1. Vision
DevForge soll eine projektübergreifende Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets werden. Der Prompt Builder ist nur ein Einstiegspunkt. Langfristig verbindet DevForge wiederverwendbare Asset-Definitionen, Referenzen, Generierungsverträge, Vorschau/Review, Freigaben, technische Prüfung, Atlas-/Metadaten-Erzeugung und kontrollierte Übergabe in Ziel-Repositories.

Neue Funktionen werden bevorzugt aus echten Produktionsproblemen abgeleitet statt als theoretische All-in-one-Lösung vorgebaut.

## 2. Zielarchitektur
### A – Project & Preset Layer
- mehrere Zielprojekte
- projektspezifische Style-, Camera-, Direction-, Scale-, Output- und Naming-Contracts
- definierte Repository-/Staging-Ziele
- wiederverwendbare Presets statt Copy/Paste-Prompts

### B – Asset Library
Asset-Katalog mit getrennten Asset-Arten wie Characters, 3D Character/Rig/Animation Sources, Buildings, Resources, Goods, Tools, Icons und Environment Assets. Eine große persistente Asset-Datenbank wird nicht vorgezogen, bevor reale Workflows den minimal notwendigen Datensatz bewiesen haben.

### C – Generation Package Layer
- Single Asset / Single Frame
- Animation Frame
- Direction Batch
- Full Animation Batch
- TXT / JSON / PDF als nachvollziehbare Übergabeformate
- direkte Referenzbilder im Package
- klare Prioritäts-/Konfliktregeln zwischen Referenzen und veränderlichen Eigenschaften

### D – Preview & Review Layer
- animierte 3D-Referenzvorschau
- Einzelbildprüfung
- Source-/Result-Vergleich
- Overlay / Onion-Skin
- später Difference / Alignment
- Direction-Vergleich
- Animation Timeline / FPS / Loop / Frame-Stepping
- später Root/Pivot/Anchor, Approve/Reject und Review-Notizen
- spätere technische Vergleichshilfen für Scale, Anchor, Alpha, Frame Delta und Kamera-/Silhouettendrift

### E – Technical Asset Layer
- Sprite Lab
- Asset Inspector
- Atlas Builder
- Pivot/Anchor/Scale
- Alpha-/Abmessungsprüfung
- Atlas-Zellen und Metadaten
- deterministische Benennung
- Runtime-Handoff

### F – Repository Handoff
- projektbezogene Staging-Pfade
- Manifest-Dateien
- nur APPROVED Source Assets weitergeben
- später kontrolliertes Speichern/Committen freigegebener Assets
- Atlas/Runtime-Artefakte erst nach Review-Gate erzeugen

## 3. Aktuelle Module
- Prompt Builder – vorhanden; Character Identity + Pose/Geometry Control + Generation-Handoff
- Animated 3D Reference Viewer – PASS für Intake, Timeline/Scrubbing, Facing/Camera und Pose Bookmarks
- Source / Result Compare View – `DF-04A PASS / FROZEN`
- Animation Tester – Standalone Frames/Manifest, FPS, Loop, Step, Onion-Skin, Bottom-Center-Anchor
- Pose Renderer – historischer DF-02E-Prototyp
- Sprite Lab – vorhanden
- Atlas Builder – vorhanden; Produktionsintegration noch nicht freigegeben
- Asset Inspector – vorhanden
- Parameter Playground – vorbereitet

## 4. Character Animation Contract – erreichter Stand
### DF-01 – Prompt Builder Foundation
Projektübergreifende Basis mit Projekt-Presets, Asset-Typen, Kamera/Richtung und editierbaren Contracts.

### DF-02 – Character Animation Generation Package
Character-Auswahl, Animation/Pose-Definitionen, Richtungen und Einzeljob-Export.

### DF-02F – 3D Animation Reference Viewer / Generation Bridge
1. `DF-02F.1 – Animated 3D Reference Asset Contract` – PASS
2. `DF-02F.2 – Animated 3D Preview / Runtime Asset Intake` – PASS
3. `DF-02F.3 / F.3R – Animation Timeline / Scrubbing` – PASS
4. `DF-02F.4 / F.4R – Camera & Facing Presets / Semantic Alignment` – PASS
5. `DF-02F.5 – Pose Bookmark / Reference Capture` – PASS
6. `DF-02F.6 – Prompt Builder / Reference Export Bridge` – implemented
7. `DF-02F.6R.1 – Pose Fidelity Contract Reinforcement` – FAIL
8. `DF-02F.6R.2 – Pose-dominant PDF Transfer Contract` – FAIL
9. `DF-02F.6R.3 – Direct Visual Pose Handoff` – implemented; generation still insufficiently deterministic
10. `DF-02F.6R.4 – Explicit Pose Geometry Control` – IMPLEMENTED; external generation limit remains

Die reproduzierbare Pose-Auswahl in DevForge ist nicht mehr der Hauptengpass. Der offene Punkt liegt beim externen Transfer der Pose in generierte Character-Bilder. DF-02F wird deshalb nicht weiter unspezifisch mit Prompttext aufgebläht.

## 5. DF-04 – Asset Review Foundation
Ziel: erzeugte Assets systematisch gegen ihre autoritativen Quellen/Controls prüfen können.

### DF-04A – Source / Result Compare View – PASS / FROZEN
DF-04A ist nach realem iPhone-/Safari-Gerätetest und Completion-/Freeze-Gate eingefroren.

Eingefrorener Kern:
- zwei getrennte lokale Bildslots;
- Source / Control links bzw. auf schmalen Geräten oben;
- Result rechts bzw. unten;
- beide gleichzeitig sichtbar;
- unabhängiges Ersetzen der Slots;
- proportionale vollständige Darstellung ohne Cropping/Stretching;
- responsive Vergleichsansicht.

Contract:
`docs/DF-04A_SOURCE_RESULT_COMPARE_VIEW_CONTRACT.md`

DF-04A wird in Folgeblöcken nicht semantisch umgebaut.

### DF-04B – Overlay / Onion-Skin Compare Foundation – CONTRACT DEFINED
Verbindlicher Contract:
`docs/DF-04B_OVERLAY_ONION_SKIN_COMPARE_CONTRACT.md`

Ziel:
Auf denselben in DF-04A geladenen Source-/Result-Bildern eine zusätzliche manuelle Overlay-/Onion-Skin-Ansicht bereitstellen.

Geplanter enger Scope:
- DF-04A-Basisansicht bleibt unverändert erhalten;
- zusätzlicher Overlay-Modus;
- Source und Result in derselben Vergleichsfläche;
- identische deterministische Fit-/Center-Regel;
- Source als Basis, Result als Overlay;
- manueller Blend-/Opacity-Regler;
- Rückkehr zur Basisansicht ohne Verlust der geladenen Bilder;
- responsive iPhone/iPad/Safari-Bedienbarkeit.

Nicht Teil von DF-04B:
- Difference View / Pixel-Difference / Heatmap;
- automatische oder manuelle Alignment-Transformationen;
- automatische Registrierung;
- synchrones Pan/Zoom;
- Pose-/Skeleton-Scoring;
- KI-Auswertung oder automatische PASS/FAIL-Entscheidung;
- Persistenz / Asset Library;
- Approve/Reject oder Review-Notizen;
- Atlas-Funktionen.

### DF-04C – Difference / Alignment Foundation – frühestens nach DF-04B-Test
DF-04C ist nur eine vorgesehene mögliche Folgegrenze und noch nicht freigegeben. Erst die reale DF-04B-Erfahrung entscheidet, ob und welche Difference-/Alignment-Funktionen benötigt werden.

## 6. Aktuelles Gate
Aktueller Branch:
`df-04a-source-result-compare-view`

Eingefrorener Stand:
`DF-04A – PASS / FROZEN`

Aktuelles Gate:
**DF-04B Contract / Roadmap Reconciliation**

Erlaubt in diesem Gate:
- DF-04B-Vertrag dokumentieren;
- ROADMAP auf den tatsächlichen DF-04A-Freeze und die B/C-Grenze aktualisieren;
- Statusdokumentation bei Bedarf ausschließlich zur Reconciliation nachziehen.

Nicht erlaubt:
- DF-04B-Branch anlegen;
- DF-04B implementieren;
- Produktionslogik/UI/JavaScript verändern;
- DF-04A-Funktionalität verändern.

Erst nach PASS dieses Dokumentationsgates darf ein separater DF-04B-Entwicklungsbranch exakt von der festgelegten reconciliierten DF-04A-Baseline erstellt werden.

## 7. 2D- und 3D-Wiederverwendung
Dieselben 3D-Animationsquellen sollen später für 2D-Sprite-/Bildreferenzen, acht Gameplay-Richtungen, Generation-Referenzen, 3D-Animation-Review und spätere 3D-Projekte dienen können, sofern Rig/Retargeting kompatibel ist.

## 8. Attachment-/Resource-Prinzip
Character-Basisanimation und transportierte/benutzte Gegenstände bleiben möglichst getrennt. Ressourcen, Waren und Werkzeuge sollen eigene Assets sein und nur über definierte Attachments/Kompositionen verbunden werden.

## 9. DF-03 – Animation Atlas Contract
Fachlich vorbereitet:
- Direction-Reihenfolge N, NE, E, SE, S, SW, W, NW
- chronologische Frame-Reihenfolge
- gemeinsame Zell-/Benennungs-/Metadatenregeln
- Bottom-Center-Anchor
- Source-Frames bleiben bis zur Freigabe einzeln erhalten
- Atlas erst nach Source-Review
- Character und Attachments bleiben strukturell getrennt

DF-03 bleibt nachgelagert. Der Review-Layer wird zuerst belastbarer gemacht.

## 10. Asset Library / Referenzverwaltung – später
Geplant sind Asset-ID/Name/Typ/Projektzuordnung, Authoritative References, Model-/Rig-/Animation-Source, Style-/Identity-/Material-Contracts, Kamera-/Richtungsregeln, Varianten, Tasks, technische Output-Profile, Staging-/Runtime-Pfade und Versions-/Freigabestatus.

Keine große persistente Asset-Datenbank vorziehen, bevor der notwendige minimale Datensatz aus realen Workflows bewiesen ist.

## 11. Building / Resource / Icon Workflows
Gemeinsames Prinzip:
Authoritative Reference → veränderliche Parameter → feste Projektcontracts → Generation Package → Preview/Review → APPROVED Source Asset → technischer Handoff.

Die Character-Logik wird nicht blind auf andere Asset-Typen kopiert.

## 12. Review-Automation – später
Soweit technisch sinnvoll:
- Alpha-Erkennung
- Canvas-/Abmessungsvergleich
- Root-/Bounding-Box-/Scale-Drift
- Difference Preview
- Frame-zu-Frame-Motionindikatoren
- Direction-/Silhouettenvergleich
- Manifest-Vollständigkeit
- Dateinamen-/Metadatenvalidierung

Automatische Prüfungen unterstützen das Review; sie ersetzen nicht automatisch die fachliche visuelle Freigabe.

## 13. Repository-Verknüpfungen
### DevForge
- Repository: `DrHoschi/DevForge`
- Default: `main`
- aktueller Dokumentations-/Freeze-Stand: `df-04a-source-result-compare-view`

### Siedler Mini
- Repository: `DrHoschi/siedler-mini`
- Default: `main`
- konkrete Asset-Staging-Pfade werden nur dort als verbindlich behandelt, wo sie im aktuellen Projektstatus bestätigt sind.

## 14. Nicht vorziehen
Derzeit nicht parallel vorziehen:
- vollständige Animation Library;
- komplexe Attachment-Engine;
- automatische Generierungs-API;
- finaler automatischer Atlas-Packing-Workflow;
- große persistente Asset-Datenbank;
- automatisches Pose-Scoring oder KI-Review;
- Difference-/Alignment-Funktionen vor realem DF-04B-Test.

## 15. Git-/Dokumentations-Arbeitsweise
- kleine, klar benannte DF-Blöcke
- ein beobachtetes Problem pro Fix-/Contract-Block
- vor Änderung aktuellen Branch/Status prüfen
- keine funktionierenden Contracts nebenbei umbauen
- sichtbare Build-Kennung bei produktiven UI-/Code-Blöcken
- Cache-Busting bei JS-Änderungen, besonders iPhone/Safari
- PASS/FAIL vor Fortsetzung dokumentieren
- Repository-Dokumentation mit jedem relevanten Gate nachziehen
- Projektstatus enthält den Ist-Stand; Roadmap enthält Zielbild und Reihenfolge
- ChatGPT-Projektdatei enthält dauerhafte Arbeitsregeln; GitHub ist Source of Truth für den Projektstand
- neuer Entwicklungsblock erst von einer klar festgelegten Baseline starten.
