# DevForge – Master Roadmap & Entwicklungsgrenzen

Stand: 2026-09-05

## 1. Vision
DevForge soll eine projektübergreifende Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets werden. Der Prompt Builder ist nur der erste Einstiegspunkt. Langfristig soll DevForge wiederverwendbare Asset-Definitionen, Referenzen, Generierungsverträge, Vorschau/Review, Freigaben, technische Prüfung, Atlas-/Metadaten-Erzeugung und kontrollierte Übergabe in Ziel-Repositories verbinden.

Der aktuelle Carrier-WALK ist der erste reale Referenzprozess. Neue Funktionen werden bevorzugt aus echten Produktionsproblemen abgeleitet statt als theoretische All-in-one-Lösung vorgebaut.

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
- Prompt Builder – aktiv in Entwicklung
- Animation Tester – Standalone Frames/Manifest, FPS, Loop, Step, Onion-Skin, Bottom-Center-Anchor
- Sprite Lab – vorhanden
- Atlas Builder – vorhanden; Produktionsintegration noch nicht freigegeben
- Asset Inspector – vorhanden
- Parameter Playground – vorbereitet

## 4. Character Animation Contract – bisherige Entwicklung

### DF-01 – Prompt Builder Foundation
Projektübergreifende Basis mit Projekt-Presets, Asset-Typen, Kamera/Richtung, editierbaren Contracts sowie TXT/JSON/PDF.

### DF-02 – Character Animation Generation Package
Character-Auswahl, IDLE/WALK/WALK+CARRY, Frame-/Pose-Definitionen, 8 Richtungen, Direction × Frame Matrix und Einzeljob-Export.

### DF-02B – Authoritative Character Reference
Visuelle Character-Referenz wird direkt eingebettet und ist autoritativ für Identität und permanentes Design.

### DF-02B.1 – Mobile Reference Import Fix
Robuster iPhone/Safari-Import, Vorschau, Status, PDF-Gate und Cache-Busting.

### DF-02C – Sequence Reference Contract
Ab FR2 wird der unmittelbar vorherige APPROVED Frame als Previous Approved Frame eingebettet. Animation Tester wurde für Einzelbildsequenzen erweitert.

### DF-02D – Key Pose / Motion Delta Contract
WALK erhält harte Key Poses und Mandatory Motion Deltas, damit echte Bewegungsprogression entsteht.

### DF-02D.1 – Previous Frame Pose Override Fix
Target Pose / Motion Delta gewinnt für animierte Gelenke. Previous Frame darf die Pose nicht einfrieren.

### DF-02D.2 – Identity & Render Lock Reinforcement
Status: `IMPLEMENTED / TEST PENDING`.
Pose-Freiheit bleibt erhalten; Identität, Anatomie/Proportionen, permanentes Design, Kleidung, Rucksack, Materialien, Renderstil, Licht, Kamera, Scale und Root werden hart stabilisiert. Final PASS = POSE PASS + CONTINUITY PASS.

## 5. Aktuelles Gate – Carrier WALK / SE
- FR1 L Contact: PASS / APPROVED
- FR2 L Down: PASS / APPROVED
- FR3 Passing L: alter Versuch erreichte Pose/Motion, aber nicht ausreichende Identity/Render-Continuity; nicht freigegeben
- nächster Test: FR3 mit DF-02D.2 erneut gegen APPROVED FR2

Bei FAIL wird nur die konkret fehlerhafte Contract-Seite nachgeschärft. FR4 darf erst nach freigegebenem FR3 beginnen.

Danach: FR4 R Up → FR5 R Contact → FR6 R Down → FR7 Passing R → FR8 L Up. Jeder Frame einzeln prüfen und nur APPROVED weiterketten.

Nach FR8: vollständige 8-Frame-Sequenz bei 8 FPS im Animation Tester prüfen, einschließlich Onion-Skin, Root/Scale, Silhouettenwechsel und Loop FR8→FR1.

## 6. Skalierung nach WALK/SE
Erst nach vollständigem WALK/SE PASS:
- übrige 7 Richtungen
- Direction-Consistency und echte Asymmetrien prüfen
- vollständigen 8×8 WALK-Satz abnehmen
- danach Batch-Erzeugung priorisieren
- IDLE und weitere Animationen auf demselben Contract-System aufbauen

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

Nicht jede Animation wird sofort implementiert. Für jede neue Animation werden zuerst Framezahl, Key Poses, Motion Deltas, Attachments und Acceptance-Kriterien definiert.

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

## 10. Asset Library / Referenzverwaltung
Später soll DevForge Authoritative References nicht jedes Mal nur als temporären Upload behandeln, sondern als wiederverwendbare Asset-Datensätze verwalten können. Geplant sind:
- Asset-ID / Name / Typ / Projektzuordnung
- eine oder mehrere Authoritative References
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
Aktueller Entwicklungsbranch: `df-02d2-identity-render-lock-reinforcement`

### Siedler Mini
`DrHoschi/siedler-mini`
Default: `main`
Asset-Staging: `asset-carrier-animation-staging`
Carrier WALK/SE Source: `assets/characters/source/carrier/walk/se/`
Manifest: `assets/characters/source/carrier/walk/se/manifest.json`
Naming: `carrier_walk_se_f01.png` … `carrier_walk_se_f08.png`

Weitere Zielprojekte werden erst verbindlich eingetragen, wenn konkrete DevForge-Handoff-Pfade festgelegt sind.

## 14. Nicht vorziehen
Solange WALK/SE nicht belastbar ist, nicht parallel beginnen mit:
- allen Richtungen gleichzeitig
- vielen weiteren Character-Animationen
- komplexer Attachment-Engine
- automatischer Generierungs-API
- finalem automatischem Atlas-Packing
- großer persistenter Asset-Datenbank

Die Punkte bleiben geplant, werden aber erst aktiviert, wenn die darunterliegende Produktionskette bewiesen ist.

## 15. Git-/Dokumentations-Arbeitsweise
- kleine, klar benannte DF-Blöcke
- ein beobachtetes Problem pro Fix-Block
- vor Änderung aktuellen Branch/Status prüfen
- keine funktionierenden Contracts nebenbei umbauen
- sichtbare Build-Kennung
- Cache-Busting bei JS-Änderungen, besonders iPhone/Safari
- PASS/FAIL vor Fortsetzung dokumentieren
- Repository-Dokumentation mit jedem relevanten Gate nachziehen
- Projektstatus enthält den Ist-Stand; Roadmap enthält Zielbild und Reihenfolge
- ChatGPT-Projektdatei soll nur dauerhafte Arbeitsregeln enthalten und GitHub als Source of Truth verwenden
- historische PRs/Branches später in eigenem Cleanup-/Freeze-Gate konsolidieren
