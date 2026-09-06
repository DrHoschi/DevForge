# DevForge – Master Roadmap & Entwicklungsgrenzen

Stand: 2026-09-06

## 1. Vision
DevForge soll eine projektübergreifende Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets werden. Der Prompt Builder ist nur der erste Einstiegspunkt. Langfristig soll DevForge wiederverwendbare Asset-Definitionen, Referenzen, Generierungsverträge, Vorschau/Review, Freigaben, technische Prüfung, Atlas-/Metadaten-Erzeugung und kontrollierte Übergabe in Ziel-Repositories verbinden.

Der aktuelle Character-Animationsworkflow ist der erste reale Referenzprozess. Neue Funktionen werden bevorzugt aus echten Produktionsproblemen abgeleitet statt als theoretische All-in-one-Lösung vorgebaut.

## 2. Zielarchitektur
DevForge soll schrittweise folgende Ebenen abdecken:

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
- später weitere projektabhängige Asset-Typen

Jeder Datensatz kann Authoritative References, Identitäts-/Designregeln, Varianten, technische Metadaten und zulässige Produktionsaufgaben besitzen.

### C – Generation Package Layer
- Single Asset / Single Frame
- Animation Frame
- Direction Batch
- Full Animation Batch
- später vollständige Character-/Asset-Packages
- TXT / JSON / PDF als nachvollziehbare Übergabeformate
- Referenzbilder direkt im Package
- klare Prioritäts-/Konfliktregeln zwischen Referenzen und veränderlichen Eigenschaften

### D – Preview & Review Layer
- animierte 3D-Referenzvorschau
- Einzelbildprüfung
- Direction-Vergleich
- Animation Timeline
- FPS / Loop
- Frame-Stepping
- Onion-Skin
- gemeinsamer Root/Pivot/Anchor
- Approve / Reject
- Review-Notizen
- später technische und visuelle Vergleichshilfen für Scale, Anchor, Alpha, Frame Delta, Kamera-/Silhouettendrift

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
- Prompt Builder – vorhanden / weiterer Ausbau nach bewiesenem Reference-Workflow
- Animation Tester – Standalone Frames/Manifest, FPS, Loop, Step, Onion-Skin, Bottom-Center-Anchor
- Pose Renderer – DF-02E-Prototyp, nicht mehr geplante Produktionsquelle
- Sprite Lab – vorhanden
- Atlas Builder – vorhanden; Produktionsintegration noch nicht freigegeben
- Asset Inspector – vorhanden
- Parameter Playground – vorbereitet

## 4. Character Animation Contract – Entwicklung

### DF-01 – Prompt Builder Foundation
Projektübergreifende Basis mit Projekt-Presets, Asset-Typen, Kamera/Richtung, editierbaren Contracts sowie TXT/JSON/PDF.

### DF-02 – Character Animation Generation Package
Character-Auswahl, IDLE/WALK/WALK+CARRY, Frame-/Pose-Definitionen, 8 Richtungen, Direction × Frame Matrix und Einzeljob-Export.

### DF-02B – Authoritative Character Reference
Visuelle Character-Referenz wird direkt eingebettet und ist autoritativ für Identität und permanentes Design.

### DF-02C – Sequence Reference Contract
Previous Approved Frame als Sequenzreferenz.

### DF-02D – Key Pose / Motion Delta Contract
Versuch, WALK-Pose und Bewegungsprogression rein über Generierungscontracts zuverlässig zu kontrollieren.

### DF-02E – Deterministic Mannequin Pose Prototype
Technischer Prototyp mit kontrolliertem Skeleton, fester 45°-Kamera, FR1–FR4 und deterministisch abgeleiteter Gegenphase FR5–FR8.

Ergebnis: technisch reproduzierbar, aber nicht als langfristige Produktionsquelle ausgewählt. DF-02E.1–E.4 bleiben dokumentiert und erhalten.

### DF-02F – 3D Animation Reference Viewer Foundation
Neue Produktionsrichtung: echte geriggte 3D-Animationsclips liefern die Bewegungsgeometrie. DevForge kontrolliert Preview, Zeitposition, Facing, Camera und spätere Reference-Ausgabe.

Staffelung:
1. DF-02F.1 – Animated 3D Reference Asset Contract
2. DF-02F.2 – Animated 3D Preview / Runtime Asset Intake
3. DF-02F.3 – Animation Timeline / Scrubbing
4. DF-02F.4 – Camera & Facing Presets
5. DF-02F.5 – Pose Bookmark / Reference Capture
6. DF-02F.6 – Prompt Builder / Reference Export Bridge

## 5. Aktuelles Gate
Aktueller Entwicklungsblock:
**DF-02F.1 – Animated 3D Reference Asset Contract**

Erste Testquelle:
`X Bot@Standard Walk 2.fbx`

Grundprinzip:
- echte Animation statt manuell erfundener Pose-Geometrie;
- In-Place für stabile Reference Preview;
- Model, Rig und Clip technisch unterscheidbar;
- Animation, Facing und Camera getrennte Verantwortungen;
- spätere FR1–FR8 sind Bookmarks innerhalb des Clips.

Nach DF-02F.1 PASS folgt ausschließlich DF-02F.2.

## 6. 2D- und 3D-Wiederverwendung
Der 3D-Reference-Workflow wird bewusst so angelegt, dass dieselben Animationsquellen später für unterschiedliche Ziele dienen können:
- 2D-Sprite-/Bildreferenzen;
- acht Gameplay-Richtungen;
- Prompt-/Generation-Referenzen;
- 3D-Animation-Review;
- spätere 3D-Projekte und Runtime-Handoffs, sofern Rig/Retargeting kompatibel ist.

DevForge soll keine künstlich getrennte 2D-Posebibliothek aufbauen, wenn dieselbe Bewegungsquelle direkt aus einer echten 3D-Animation reproduzierbar gewonnen werden kann.

## 7. Animationen / Character Packages – spätere Ausbaustufe
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

Nicht jede Animation wird sofort integriert. Erst muss der Standard-Walk den kompletten DF-02F-Reference-Workflow beweisen. Danach werden weitere Clips einzeln aufgenommen und geprüft.

## 8. Attachment-/Resource-Prinzip
Character-Basisanimation und transportierte/benutzte Gegenstände bleiben möglichst getrennt. Ressourcen, Waren und Werkzeuge sollen eigene Assets sein und nur über definierte Attachments/Kompositionen verbunden werden. Dadurch können gleiche Character-Animationen mit unterschiedlichen Waren/Werkzeugen wiederverwendet werden.

## 9. DF-03 – Animation Atlas Contract
Fachlich vorbereitet:
- Direction-Reihenfolge N, NE, E, SE, S, SW, W, NW
- chronologische Frame-Reihenfolge
- gemeinsame Zell-/Benennungs-/Metadatenregeln
- Bottom-Center-Anchor
- Source-Frames bleiben bis zur Freigabe einzeln erhalten
- Atlas erst nach Source-Review
- Character und Attachments bleiben strukturell getrennt

DF-03 bleibt nachgelagert, bis der neue DF-02F-Reference-Workflow belastbar ist.

## 10. Asset Library / Referenzverwaltung
Später soll DevForge Authoritative References und 3D-Animationsquellen nicht jedes Mal nur als temporären Upload behandeln, sondern als wiederverwendbare Asset-Datensätze verwalten können. Geplant sind:
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

## 11. Building / Resource / Icon Workflows
Die Character-Logik wird nicht blind kopiert, sondern das gemeinsame Prinzip wiederverwendet:
Authoritative Reference → veränderliche Parameter → feste Projektcontracts → Generation Package → Preview/Review → APPROVED Source Asset → technischer Handoff.

Buildings können z. B. Ansichten, Bauzustände, Materialvarianten und Größen-/Kamera-Locks erhalten. Resources können Zustände/Varianten besitzen. Icons benötigen eigene Style-, Canvas-, Padding-, Stroke-/Silhouetten- und Größencontracts.

## 12. Review-Automation – mögliche spätere Funktionen
Soweit technisch sinnvoll:
- echte Alpha-Erkennung
- Canvas-/Abmessungsvergleich
- Root-/Bounding-Box-/Scale-Drift
- Onion-Skin / Difference Preview
- Frame-zu-Frame-Motionindikatoren
- Direction-/Silhouettenvergleich
- Manifest-Vollständigkeit
- Dateinamen-/Metadatenvalidierung

Automatische Prüfungen unterstützen das Review; sie ersetzen nicht automatisch die fachliche visuelle Freigabe.

## 13. Repository-Verknüpfungen
### DevForge
`DrHoschi/DevForge`
Default: `main`
Aktueller Entwicklungsbranch: `df-02f1-animated-3d-reference-asset-contract`

### Siedler Mini
`DrHoschi/siedler-mini`
Default: `main`
Asset-Staging: `asset-carrier-animation-staging`
Carrier WALK/SE Source: `assets/characters/source/carrier/walk/se/`
Manifest: `assets/characters/source/carrier/walk/se/manifest.json`
Naming: `carrier_walk_se_f01.png` … `carrier_walk_se_f08.png`

Weitere Zielprojekte werden erst verbindlich eingetragen, wenn konkrete DevForge-Handoff-Pfade festgelegt sind.

## 14. Nicht vorziehen
Bis der Standard-Walk den DF-02F-Workflow beweist, nicht parallel beginnen mit:
- vielen weiteren Mixamo-/externen Animationen;
- vollständiger Animation Library;
- acht Richtungen vor dem Camera-/Facing-Block;
- Bookmark-System vor Timeline/Scrubbing;
- Prompt-Builder-Bridge vor Reference Capture;
- komplexer Attachment-Engine;
- automatischer Generierungs-API;
- finalem automatischem Atlas-Packing;
- großer persistenter Asset-Datenbank.

## 15. Git-/Dokumentations-Arbeitsweise
- kleine, klar benannte DF-Blöcke
- ein beobachtetes Problem pro Fix-/Contract-Block
- vor Änderung aktuellen Branch/Status prüfen
- keine funktionierenden Contracts nebenbei umbauen
- sichtbare Build-Kennung
- Cache-Busting bei JS-Änderungen, besonders iPhone/Safari
- PASS/FAIL vor Fortsetzung dokumentieren
- Repository-Dokumentation mit jedem relevanten Gate nachziehen
- Projektstatus enthält den Ist-Stand; Roadmap enthält Zielbild und Reihenfolge
- ChatGPT-Projektdatei soll nur dauerhafte Arbeitsregeln enthalten und GitHub als Source of Truth verwenden
- historische PRs/Branches später in eigenem Cleanup-/Freeze-Gate konsolidieren
