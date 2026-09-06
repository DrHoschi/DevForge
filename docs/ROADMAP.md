# DevForge – Master Roadmap & Entwicklungsgrenzen

Stand: 2026-09-06

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
Asset-Katalog mit getrennten Asset-Arten:
- Characters
- 3D Character / Rig / Animation Sources
- Buildings
- Resources / Rohstoffe
- Goods / Waren
- Tools / Werkzeuge
- Icons
- Environment Assets
- weitere projektabhängige Asset-Typen

Später kann jeder Datensatz Authoritative References, Identitäts-/Designregeln, Varianten, technische Metadaten und zulässige Produktionsaufgaben besitzen.

### C – Generation Package Layer
- Single Asset / Single Frame
- Animation Frame
- Direction Batch
- Full Animation Batch
- später vollständige Character-/Asset-Packages
- TXT / JSON / PDF als nachvollziehbare Übergabeformate
- direkte Referenzbilder im Package
- klare Prioritäts-/Konfliktregeln zwischen Referenzen und veränderlichen Eigenschaften

### D – Preview & Review Layer
- animierte 3D-Referenzvorschau
- Einzelbildprüfung
- Source-/Result-Vergleich
- Direction-Vergleich
- Animation Timeline
- FPS / Loop
- Frame-Stepping
- später Overlay / Onion-Skin / Difference View
- gemeinsamer Root/Pivot/Anchor
- Approve / Reject
- Review-Notizen
- spätere technische Vergleichshilfen für Scale, Anchor, Alpha, Frame Delta, Kamera-/Silhouettendrift

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
- Animation Tester – Standalone Frames/Manifest, FPS, Loop, Step, Onion-Skin, Bottom-Center-Anchor
- Pose Renderer – historischer DF-02E-Prototyp, nicht mehr geplante Produktionsquelle
- Sprite Lab – vorhanden
- Atlas Builder – vorhanden; Produktionsintegration noch nicht freigegeben
- Asset Inspector – vorhanden
- Parameter Playground – vorbereitet

## 4. Character Animation Contract – Entwicklung

### DF-01 – Prompt Builder Foundation
Projektübergreifende Basis mit Projekt-Presets, Asset-Typen, Kamera/Richtung, editierbaren Contracts sowie TXT/JSON/PDF.

### DF-02 – Character Animation Generation Package
Character-Auswahl, Animation/Pose-Definitionen, Richtungen und Einzeljob-Export.

### DF-02B – Authoritative Character Reference
Visuelle Character-Referenz ist autoritativ für Identität und permanentes Design.

### DF-02C – Sequence Reference Contract
Previous Approved Frame als Sequenzreferenz.

### DF-02D – Key Pose / Motion Delta Contract
Versuch, WALK-Pose und Bewegungsprogression rein über Generierungscontracts zuverlässig zu kontrollieren.

### DF-02E – Deterministic Mannequin Pose Prototype
Technischer Prototyp mit kontrolliertem Skeleton und fester Gameplay-Kamera. Technisch reproduzierbar, aber nicht als langfristige Produktionsquelle ausgewählt. DF-02E.1–E.4 bleiben dokumentiert.

### DF-02F – 3D Animation Reference Viewer / Generation Bridge
Echte geriggte 3D-Animationsclips liefern die Bewegungsgeometrie. DevForge kontrolliert Preview, Zeitposition, Facing, Camera und Reference-Ausgabe.

Erreichter Stand:
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

## 5. Aktuelles Gate
Aktueller Branch:
`df-02f6r4-explicit-pose-geometry-control`

Aktuelles Gate:
**DF-02F.6R.4 – Documentation / Status Reconciliation**

Dieses Gate ändert ausschließlich:
- `docs/PROJECT_STATUS.md`
- `docs/ROADMAP.md`
- `README.md`

Keine Produktionslogik und keine UI-/JavaScript-Änderungen.

## 6. Aktuelle Erkenntnisgrenze des Generation-Handoffs
Die reproduzierbare Auswahl der 3D-Pose innerhalb von DevForge ist nicht mehr der Hauptengpass. Das Problem liegt beim externen Transfer dieser Pose in ein neu generiertes Character-Bild.

Getestete Eskalationsstufen:
- verschärfter Prompt-/Pose-Fidelity-Vertrag;
- pose-dominanter PDF-Handoff;
- direkte Pose-Control-Bildübergabe;
- explizite Gelenk-/Skeleton-Geometrie als zusätzliche Control-Schicht.

Trotzdem kann die externe Bildgenerierung die Pose auf generische Action-Geometrie normalisieren oder Kamera-/Gliedmaßen-Geometrie abweichend interpretieren.

Folgerung:
- DF-02F wird nicht weiter unspezifisch mit Prompttext aufgebläht.
- die externe Generation bleibt ein offener Pipeline-Punkt.
- unabhängige DevForge-Module für Review, Vergleich und Asset-Prüfung dürfen weiterentwickelt werden.

## 7. Nächster unabhängiger Entwicklungsblock
Nach PASS der R.4-Reconciliation wird ein separater Branch von der reconciliierten Baseline erstellt.

### DF-04 – Asset Review Foundation
Ziel: erzeugte Assets systematisch gegen ihre autoritativen Quellen/Controls prüfen können.

#### DF-04A – Source / Result Compare View
Scope:
- genau zwei Bildquellen laden;
- Source / Control links;
- Result rechts;
- beide stabil und reproduzierbar gleichzeitig anzeigen;
- klare Rollenkennzeichnung der beiden Seiten.

Nicht Teil von DF-04A:
- Overlay;
- Onion-Skin;
- Difference View;
- automatisches Pose-Scoring;
- KI-Bewertung;
- Asset-Persistenz oder Asset-Datenbank;
- Atlas-Umbau oder Atlas-Produktion.

Overlay / Onion-Skin / Difference View wird frühestens als eigener nachfolgender Review-Block betrachtet, z. B. `DF-04B`.

## 8. 2D- und 3D-Wiederverwendung
Dieselben 3D-Animationsquellen sollen später für unterschiedliche Ziele dienen können:
- 2D-Sprite-/Bildreferenzen;
- acht Gameplay-Richtungen;
- Prompt-/Generation-Referenzen;
- 3D-Animation-Review;
- spätere 3D-Projekte und Runtime-Handoffs, sofern Rig/Retargeting kompatibel ist.

DevForge soll keine künstlich getrennte 2D-Posebibliothek aufbauen, wenn dieselbe Bewegungsquelle direkt aus echter 3D-Animation reproduzierbar gewonnen werden kann.

## 9. Animationen / Character Packages – spätere Ausbaustufe
Vorgesehene Animationstypen können u. a. sein:
- IDLE
- WALK
- WALK + CARRY
- RUN
- PICK UP / PUT DOWN
- LOAD / UNLOAD
- CHOP WOOD
- MINE
- BUILD / HAMMER / SAW
- FARM / FISH / DIG
- PUSH / PULL
- weitere beruf-/projektbezogene Aktionen

Nicht jede Animation wird sofort integriert. Neue Clips werden erst aufgenommen, wenn der dazugehörige Produktions- und Review-Pfad sinnvoll nutzbar ist.

## 10. Attachment-/Resource-Prinzip
Character-Basisanimation und transportierte/benutzte Gegenstände bleiben möglichst getrennt. Ressourcen, Waren und Werkzeuge sollen eigene Assets sein und nur über definierte Attachments/Kompositionen verbunden werden.

## 11. DF-03 – Animation Atlas Contract
Fachlich vorbereitet:
- Direction-Reihenfolge N, NE, E, SE, S, SW, W, NW
- chronologische Frame-Reihenfolge
- gemeinsame Zell-/Benennungs-/Metadatenregeln
- Bottom-Center-Anchor
- Source-Frames bleiben bis zur Freigabe einzeln erhalten
- Atlas erst nach Source-Review
- Character und Attachments bleiben strukturell getrennt

DF-03 bleibt nachgelagert. Der Review-Layer wird zuerst belastbarer gemacht.

## 12. Asset Library / Referenzverwaltung – später
Geplant sind:
- Asset-ID / Name / Typ / Projektzuordnung
- eine oder mehrere Authoritative References
- Model-/Rig-/Animation-Source
- Style-/Identity-/Material-Contracts
- Kamera-/Richtungsregeln
- Varianten und Zustände
- Animation-/Task-Katalog
- technische Output-Profile
- Staging-/Runtime-Pfade
- Versions-/Freigabestatus

Keine große persistente Asset-Datenbank vorziehen, bevor der notwendige minimale Datensatz aus realen Workflows bewiesen ist.

## 13. Building / Resource / Icon Workflows
Gemeinsames Prinzip:
Authoritative Reference → veränderliche Parameter → feste Projektcontracts → Generation Package → Preview/Review → APPROVED Source Asset → technischer Handoff.

Die Character-Logik wird nicht blind auf andere Asset-Typen kopiert.

## 14. Review-Automation – spätere Funktionen
Soweit technisch sinnvoll:
- Alpha-Erkennung
- Canvas-/Abmessungsvergleich
- Root-/Bounding-Box-/Scale-Drift
- Onion-Skin / Difference Preview
- Frame-zu-Frame-Motionindikatoren
- Direction-/Silhouettenvergleich
- Manifest-Vollständigkeit
- Dateinamen-/Metadatenvalidierung

Automatische Prüfungen unterstützen das Review; sie ersetzen nicht automatisch die fachliche visuelle Freigabe.

## 15. Repository-Verknüpfungen
### DevForge
- Repository: `DrHoschi/DevForge`
- Default: `main`
- aktueller Reconciliation-Branch: `df-02f6r4-explicit-pose-geometry-control`

### Siedler Mini
- Repository: `DrHoschi/siedler-mini`
- Default: `main`
- bestehende konkrete Asset-Staging-Pfade werden nur dort als verbindlich behandelt, wo sie im aktuellen Projektstatus bestätigt sind.

## 16. Nicht vorziehen
Derzeit nicht parallel vorziehen:
- vollständige Animation Library;
- komplexe Attachment-Engine;
- automatische Generierungs-API;
- finaler automatischer Atlas-Packing-Workflow;
- große persistente Asset-Datenbank;
- automatisches Pose-Scoring oder KI-Review vor einem funktionierenden manuellen Compare-Workflow.

## 17. Git-/Dokumentations-Arbeitsweise
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