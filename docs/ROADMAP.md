# DevForge – Master Roadmap & Entwicklungsgrenzen

Stand: 2026-09-10

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
- manuelles Result-Alignment
- Difference View
- Silhouette Difference
- Silhouette Geometry Guides
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
- Source / Result Compare View – `DF-04F PASS / FROZEN` inklusive Basisvergleich, Overlay / Onion-Skin, manuellem Result-Alignment, RGBA-Difference, Silhouette Difference und Silhouette Geometry Guides
- Animation Tester – Standalone Frames/Manifest, FPS, Loop, Step, Onion-Skin, Bottom-Center-Anchor
- Pose Renderer – historischer DF-02E-Prototyp
- Sprite Lab – vorhanden
- Atlas Builder – vorhanden; Produktionsintegration noch nicht freigegeben
- Asset Inspector – vorhanden
- Parameter Playground – vorbereitet

## 4. Character Animation Contract – erreichter Stand
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
Zwei getrennte lokale Bildslots, feste Source-/Result-Rollen, unabhängiges Ersetzen, proportionale vollständige Darstellung und responsive Basisvergleichsansicht.

### DF-04B – Overlay / Onion-Skin Compare Foundation – PASS / FROZEN
Gemeinsame Vergleichsfläche, Source als Basis-Layer, Result als Overlay-Layer und manueller 0–100-%-Blend-Regler.

### DF-04C – Manual Alignment Foundation – PASS / FROZEN
Manuelle Ausrichtung ausschließlich des Result-Layers über X, Y und uniforme Scale mit sichtbaren Werten und `Reset Alignment`.

### DF-04D – Difference View Foundation – PASS / FROZEN
Deterministische pixelweise absolute RGBA-Difference auf derselben Review-Rasterfläche und unter Verwendung des DF-04C-Alignments. Kein Score.

### DF-04E – Silhouette Difference Foundation – PASS / FROZEN
Deterministische Silhouette Difference aus gerendertem Alpha mit fester interner Grenze `16 / 255`; Überlappung, Source-only und Result-only werden unterschieden.

### DF-04F – Silhouette Geometry Guide Foundation – PASS / FROZEN
Verbindlicher Contract:
`docs/DF-04F_SILHOUETTE_GEOMETRY_GUIDE_FOUNDATION_CONTRACT.md`

Eingefroren sind:
- achsenparallele Source-Bounding-Box auf der gemeinsamen Silhouetten-Review-Rasterfläche;
- achsenparallele Result-Bounding-Box unter aktuellem DF-04C-X/Y/Scale;
- geometrischer Mittelpunkt beider Bounding Boxes;
- visuell eindeutig unterscheidbare Source-/Result-Boxen und Center-Marker;
- genau ein gemeinsamer temporärer `Geometry Guides`-Ein-/Aus-Schalter;
- Ermittlung auf Basis derselben eingefrorenen DF-04E-Alpha-Maske;
- Result-Guides aktualisieren sich bei X/Y/Scale und `Reset Alignment`;
- Source-Guides bleiben bei Result-Alignment unverändert;
- keine Änderung an Bildern, Alignment oder bestehenden Review-Modi;
- responsive/touch-taugliche iPhone/Safari-Darstellung.

Realer iPhone-/Safari-Gerätetest: `PASS / 0 BLOCKER`.
Completion-/Freeze-Gate: `PASS / 0 BLOCKER / FROZEN`.

Weiterhin nicht Teil des eingefrorenen DF-04F-Umfangs:
- Auto-Alignment / Best-Fit / automatische Center-Ausrichtung;
- automatische Bewegung oder automatische Scale-Anpassung;
- neuer Scale-Algorithmus;
- Rotation, Warp, Perspective oder zusätzliche Alignment-Werkzeuge;
- benutzerveränderbarer Alpha-Threshold oder Tolerance-Regler;
- numerische Center-/Größen-/Flächen-/Overlap-Metriken;
- Difference-, Silhouette- oder Pose-Scoring;
- automatische PASS/FAIL-Entscheidung;
- KI-Auswertung;
- Persistenz / Asset Library;
- Atlas-Funktionen.

## 6. Aktueller Stand / Gate
Aktueller Entwicklungs-/Freeze-Branch:
`df-04f-silhouette-geometry-guide-foundation`

Reconciliierte DF-04F-Implementierungsbaseline:
`1f9badba271bb3a6a055f8ef234164dd9acd39e8`

Aktueller eingefrorener Review-Stand:
**DF-04F – PASS / 0 BLOCKER / FROZEN**

Das Completion-/Freeze-Gate regressierte Contract, vollständigen Branch-Diff, DF-04A/B/C/D/E-Grenzen und reale Geräte-Evidenz gemeinsam. Kein Blocker wurde festgestellt.

Kein Folgeblock ist automatisch freigegeben. Der nächste fachliche Schritt muss aus der realen DF-04F-Erfahrung abgeleitet und separat vertraglich definiert werden.

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
- Silhouettenvergleich
- Silhouette Geometry Guides
- Frame-zu-Frame-Motionindikatoren
- Direction-Vergleich
- Manifest-Vollständigkeit
- Dateinamen-/Metadatenvalidierung

Automatische Prüfungen unterstützen das Review; sie ersetzen nicht automatisch die fachliche visuelle Freigabe.

## 13. Repository-Verknüpfungen
### DevForge
- Repository: `DrHoschi/DevForge`
- Default: `main`
- aktueller Entwicklungs-/Freeze-Stand: `df-04f-silhouette-geometry-guide-foundation`

### Siedler Mini
- Repository: `DrHoschi/siedler-mini`
- Default: `main`
- konkrete aktuelle Handoff-Pfade und Freigabegrenzen werden verbindlich in der Repository-Dokumentation gepflegt.

## 14. Nicht vorziehen
Derzeit nicht parallel vorziehen:
- vollständige Animation Library;
- komplexe Attachment-Engine;
- automatische Generierungs-API;
- finaler automatischer Atlas-Packing-Workflow;
- große persistente Asset-Datenbank;
- automatisches Pose-Scoring oder KI-Review;
- Threshold/Tolerance oder Difference-/Silhouette-Scoring ohne separaten Folgecontract;
- automatische Registrierung / Best-Fit / Auto-Alignment ohne separaten Folgecontract.

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
