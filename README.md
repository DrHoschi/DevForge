# DevForge

DevForge ist die zentrale webbasierte Entwickler-Toolbox für unterschiedliche Spiele- und Softwareprojekte. Das Werkzeug ist projektübergreifend gedacht und soll Assets, Prompts, Referenzen, Animationen, Reviews und spätere Übergaben strukturiert vorbereiten.

## Module
- Animated 3D Reference Viewer – echte geriggte 3D-Animationsquellen laden, scrubben, Facing/Kamera festlegen und reproduzierbare Pose-Bookmarks erzeugen
- Prompt Builder – Character Identity mit visueller Pose Control und expliziter Geometry Control zu einem Generation Package verbinden
- Animation Tester – rohe Einzelbilder vor dem Atlas als Loop prüfen, inkl. FPS, Onion-Skin, Frame-Stepping und Bottom-Center-Anchor
- Deterministic Pose Renderer – historischer DF-02E-Prototyp; nicht mehr die geplante Produktionsquelle
- Sprite Lab – Sprites/Sprite-Sheets laden, Pivot/Anchor/Scale bearbeiten und Atlasdaten prüfen
- Atlas Builder – Atlas-Funktionen und Metadaten vorbereiten
- Asset Inspector – technische Eigenschaften von Bildern/Texturen/Sprites prüfen
- Parameter Playground – Parameter verändern und Auswirkungen direkt sichtbar machen

## Aktueller Character-Workflow
Der Character-Animationsworkflow wird anhand von `siedler-mini` / Carrier / WALK entwickelt.

Seit DF-02F ist eine echte geriggte 3D-Animation die autoritative Bewegungsquelle. DevForge kontrolliert dabei:
- Animation / Zeitposition;
- Facing;
- Gameplay-Kamera;
- Pose Bookmark / Reference Capture;
- visuellen Pose-Handoff;
- ergänzende explizite Gelenk-/Skeleton-Geometrie.

## Erreichter DF-02F-Stand
- `DF-02F.1 – Animated 3D Reference Asset Contract` – PASS
- `DF-02F.2 – Animated 3D Preview / Runtime Asset Intake` – PASS
- `DF-02F.3 / F.3R – Animation Timeline / Scrubbing` – PASS
- `DF-02F.4 / F.4R – Camera & Facing Presets / Semantic Alignment` – PASS
- `DF-02F.5 – Pose Bookmark / Reference Capture` – PASS
- `DF-02F.6 – Prompt Builder / Reference Export Bridge` – implemented
- `DF-02F.6R.1 – Pose Fidelity Contract Reinforcement` – FAIL
- `DF-02F.6R.2 – Pose-dominant PDF Transfer Contract` – FAIL
- `DF-02F.6R.3 – Direct Visual Pose Handoff` – implemented, external generation still insufficiently deterministic
- `DF-02F.6R.4 – Explicit Pose Geometry Control` – IMPLEMENTED; external generation limit remains

## DF-02F.6R.4 – Explicit Pose Geometry Control
Der Prompt Builder besitzt auf dem aktuellen Branch eine zusätzliche Geometry-Control-Schicht über der visuellen Pose-Referenz.

Sie umfasst definierte Gelenkpunkte für Kopf, Nacken, Becken, Schultern, Ellbogen, Handgelenke, Hüften, Knie, Knöchel und Zehen sowie verbindende Körperachsen. Die Annotation kann als PNG exportiert werden; zusätzlich stehen normalisierte Gelenkkoordinaten zur Verfügung.

Die visuelle Mannequin-/Pose-Referenz bleibt dabei autoritativ. Die Geometry Control ergänzt sie lediglich um explizitere maschinenlesbare Körpergeometrie.

## Bekannte aktuelle Grenze
Die reproduzierbare Pose-Auswahl innerhalb von DevForge funktioniert. Der offene Engpass liegt beim externen Transfer dieser Pose in ein neu generiertes Character-Bild.

Prompt-Verstärkung, pose-dominanter PDF-Handoff, direkte Pose-Control-Bilder und explizite Skeleton-/Geometry-Control haben die externe Generierung bislang nicht frame-genau deterministisch genug gemacht.

Deshalb wird DF-02F nicht weiter unspezifisch mit Prompttext erweitert. Diese externe Grenze blockiert den unabhängigen Ausbau von DevForge als Review-, Prüf- und Asset-Produktionsplattform nicht.

## Aktuelles Gate
Aktueller Branch:
`df-02f6r4-explicit-pose-geometry-control`

Aktuelles Gate:
`DF-02F.6R.4 – Documentation / Status Reconciliation`

In diesem Gate werden ausschließlich folgende Dateien reconciliiert:
- `docs/PROJECT_STATUS.md`
- `docs/ROADMAP.md`
- `README.md`

Keine Produktionslogik, keine UI und kein JavaScript werden in diesem Gate geändert.

## Nächster unabhängiger Entwicklungsblock
Nach PASS der R.4-Reconciliation wird ein eigener Branch von der reconciliierten Baseline erstellt für:

### DF-04 – Asset Review Foundation
#### DF-04A – Source / Result Compare View
Ziel:
Eine autoritative Source-/Control-Referenz und das daraus entstandene Resultat gleichzeitig reproduzierbar anzeigen und visuell vergleichen können.

Scope DF-04A:
- zwei Bilder laden;
- Source / Control links;
- Result rechts;
- stabile gemeinsame Vergleichsansicht;
- klare Rollenkennzeichnung.

Noch nicht Teil von DF-04A:
- Overlay / Onion-Skin / Difference View;
- automatisches Pose-Scoring;
- KI-Bewertung;
- persistente Asset Library / Asset-Datenbank;
- Atlas-Umbau oder Atlas-Produktion.

## Siedler-Mini
Repository: `DrHoschi/siedler-mini`

Konkrete aktuelle Handoff-Pfade und Freigabegrenzen werden verbindlich in der Repository-Dokumentation gepflegt.

## Dokumentation
- `docs/PROJECT_STATUS.md` – aktueller Gesamtstand, Branch, PASS/FAIL und exakt nächster zulässiger Schritt
- `docs/ROADMAP.md` – Gesamtvision, Zielarchitektur und Entwicklungsgrenzen

## Projektprinzip
DevForge wird nicht als große theoretische All-in-one-Anwendung vorgebaut. Neue Funktionen entstehen in kleinen nachprüfbaren Blöcken aus realen Produktionsproblemen. Ein bestätigter Contract wird nicht nebenbei wieder geöffnet.

## Archivierter Altstand
Der frühere parametrische Stahlträgerhallen-Prototyp ist unverändert auf folgendem Branch gesichert:
`archive/baustellenplaner-halle-legacy`