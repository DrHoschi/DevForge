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
- manuelles Result-Alignment
- Difference View
- Silhouette Difference
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
- Source / Result Compare View – `DF-04D PASS / FROZEN` inklusive Basisvergleich, Overlay / Onion-Skin, manuellem Result-Alignment und RGBA-Difference View
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
Eingefrorener Basisvergleich mit zwei getrennten lokalen Bildslots, festen Source-/Result-Rollen, unabhängiger Ersetzung, proportionaler vollständiger Darstellung und responsiver Side-by-Side-/Top-Bottom-Ansicht.

Contract:
`docs/DF-04A_SOURCE_RESULT_COMPARE_VIEW_CONTRACT.md`

### DF-04B – Overlay / Onion-Skin Compare Foundation – PASS / FROZEN
Eingefrorener Overlay-Ausbau mit gemeinsamer Vergleichsfläche, Source als Basis-Layer, Result als Overlay-Layer, identischer neutraler Fit-/Center-Regel, manuellem 0–100-%-Blend und Rückkehr zur Basisansicht ohne Verlust der geladenen Bilder.

Contract:
`docs/DF-04B_OVERLAY_ONION_SKIN_COMPARE_CONTRACT.md`

### DF-04C – Manual Alignment Foundation – PASS / FROZEN
Eingefrorene manuelle Ausrichtung ausschließlich des Result-Layers über X, Y und uniforme Scale mit sichtbaren Werten, `Reset Alignment`, unverändertem Blend und temporärem Review-Zustand.

Contract:
`docs/DF-04C_MANUAL_ALIGNMENT_FOUNDATION_CONTRACT.md`

### DF-04D – Difference View Foundation – PASS / FROZEN
Nach realem iPhone-/Safari-Gerätetest und Completion-/Freeze-Gate eingefroren.

Eingefrorener Kern:
- zusätzlicher Modus `Difference`;
- dieselben Source-/Result-Bilder;
- gemeinsame Review-Rasterfläche;
- Source nach Fit-/Center-Regel;
- Result nach derselben Regel plus DF-04C-X/Y/Scale;
- deterministische pixelweise absolute RGBA-Abweichung;
- geringe Abweichung dunkel, stärkere heller;
- Alpha ist Bestandteil der Difference;
- keine semantische Bewertung und kein numerischer Score.

Contract:
`docs/DF-04D_DIFFERENCE_VIEW_FOUNDATION_CONTRACT.md`

### DF-04E – Silhouette Difference Foundation – CONTRACT DEFINED
Verbindlicher Contract:
`docs/DF-04E_SILHOUETTE_DIFFERENCE_FOUNDATION_CONTRACT.md`

Aus der realen DF-04D-Erfahrung abgeleiteter Bedarf:
Die RGBA-Difference mischt geometrische Konturabweichungen mit Farb-, Textur-, Material- und Beleuchtungsunterschieden. DF-04E trennt als nächsten kleinen Review-Schritt ausschließlich die Silhouetten-/Alpha-Formprüfung davon ab.

Geplanter enger Scope:
- zusätzlicher Modus `Silhouette` bzw. `Silhouette Difference`;
- dieselben geladenen Source-/Result-Bilder, keine neuen Slots;
- dieselbe Review-Rasterfläche und dasselbe DF-04C-X/Y/Scale-Alignment;
- deterministische Vordergrund-/Hintergrund-Maske ausschließlich aus Alpha;
- RGB, Textur, Licht und Material beeinflussen die Silhouette nicht;
- Überlappung, Source-only und Result-only werden visuell unterschieden;
- X/Y/Scale und Reset aktualisieren die Silhouettenansicht;
- Basisvergleich, Overlay und DF-04D-Difference bleiben unverändert erhalten;
- responsive/touch-taugliche iPhone/iPad/Safari-Darstellung.

Nicht Teil von DF-04E:
- Auto-Alignment / Best-Fit;
- Rotation, Warp, Perspective oder zusätzliche Alignment-Werkzeuge;
- benutzerveränderbarer Alpha-Threshold oder Tolerance-Regler;
- mehrere Masken-/Morphologie-Modi;
- Kontur-, Pixel-, Flächen-, Prozent-, IoU- oder Overlap-Score;
- automatische PASS/FAIL-Entscheidung;
- Pose-/Skeleton-Scoring oder KI-Auswertung;
- Persistenz / Asset Library;
- Atlas-Funktionen.

## 6. Aktueller Stand / Gate
Aktueller Dokumentations-/Freeze-Branch:
`df-04d-difference-view-foundation`

Eingefrorener Produktstand:
`DF-04D – PASS / 0 BLOCKER / FROZEN`

Eingefrorener DF-04D-Produkt-Head:
`89b9b8e214ed4463a0e8150cb5a4563351c7c55b`

Aktuelles Gate:
**DF-04E Contract / Roadmap Reconciliation**

Erlaubt in diesem Gate:
- DF-04E-Contract gegen den eingefrorenen DF-04D-Produktstand dokumentieren;
- ROADMAP und PROJECT_STATUS auf die enge Silhouette-Difference-Grenze nachziehen;
- DF-04A–D unverändert eingefroren lassen.

Nicht erlaubt:
- DF-04E-Branch anlegen;
- DF-04E implementieren;
- Produktlogik/UI/JavaScript ändern;
- Threshold/Tolerance, Scoring, Auto-Alignment oder andere Folgefunktionen vorziehen.

Erst nach PASS dieses Dokumentationsgates darf ein separater DF-04E-Entwicklungsbranch exakt von der dann festgelegten reconciliierten Dokumentationsbaseline erstellt werden.

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
- Frame-zu-Frame-Motionindikatoren
- Direction-Vergleich
- Manifest-Vollständigkeit
- Dateinamen-/Metadatenvalidierung

Automatische Prüfungen unterstützen das Review; sie ersetzen nicht automatisch die fachliche visuelle Freigabe.

## 13. Repository-Verknüpfungen
### DevForge
- Repository: `DrHoschi/DevForge`
- Default: `main`
- aktueller Dokumentations-/Freeze-Stand: `df-04d-difference-view-foundation`

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
- Threshold/Tolerance oder Difference-/Silhouette-Scoring ohne separaten Folgecontract;
- automatische Registrierung / Best-Fit ohne separaten Folgecontract.

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
