# DevForge

DevForge ist die zentrale webbasierte Entwickler-Toolbox für unterschiedliche Spiele- und Softwareprojekte. Das Werkzeug ist projektübergreifend gedacht und soll Assets, Prompts, Referenzen, Animationen, Reviews und spätere Übergaben strukturiert vorbereiten.

## Module
- Animated 3D Reference Viewer – echte geriggte 3D-Animationsquellen laden, scrubben, Facing/Kamera festlegen und reproduzierbare Pose-Bookmarks erzeugen
- Prompt Builder – Character Identity mit visueller Pose Control und expliziter Geometry Control zu einem Generation Package verbinden
- Source / Result Compare View – Source und Result laden, vergleichen, überblenden, Result manuell ausrichten sowie RGBA-Difference, Silhouette Difference und Silhouette Geometry Guides anzeigen
- Animation Tester – rohe Einzelbilder vor dem Atlas als Loop prüfen, inkl. FPS, Onion-Skin, Frame-Stepping und Bottom-Center-Anchor
- Deterministic Pose Renderer – historischer DF-02E-Prototyp; nicht mehr die geplante Produktionsquelle
- Sprite Lab – Sprites/Sprite-Sheets laden, Pivot/Anchor/Scale bearbeiten und Atlasdaten prüfen
- Atlas Builder – Atlas-Funktionen und Metadaten vorbereiten
- Asset Inspector – technische Eigenschaften von Bildern/Texturen/Sprites prüfen
- Parameter Playground – Parameter verändern und Auswirkungen direkt sichtbar machen

## Aktueller Character-Workflow
Der Character-Animationsworkflow wird anhand von `siedler-mini` / Carrier / WALK entwickelt.

Seit DF-02F ist eine echte geriggte 3D-Animation die autoritative Bewegungsquelle. DevForge kontrolliert dabei Animation/Zeitposition, Facing, Gameplay-Kamera, Pose Bookmark / Reference Capture, visuellen Pose-Handoff und ergänzende explizite Gelenk-/Skeleton-Geometrie.

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

## Bekannte Generation-Handoff-Grenze
Die reproduzierbare Pose-Auswahl innerhalb von DevForge funktioniert. Der offene Engpass liegt weiterhin beim externen Transfer dieser Pose in ein neu generiertes Character-Bild. Diese Grenze blockiert den unabhängigen Ausbau von DevForge als Review-, Prüf- und Asset-Produktionsplattform nicht.

## DF-04 – Asset Review Foundation
Der Review-Layer wurde bis einschließlich DF-04F schrittweise auf realen Zielgeräten aufgebaut und eingefroren.

### DF-04A – Source / Result Compare View – PASS / FROZEN
Zwei lokale Bildslots mit festen Source-/Result-Rollen, unabhängiger Ersetzung, proportionaler vollständiger Darstellung und responsiver Basisvergleichsansicht.

### DF-04B – Overlay / Onion-Skin Compare Foundation – PASS / FROZEN
Gemeinsame Vergleichsfläche, Source als Basis-Layer, Result als Overlay-Layer und manueller 0–100-%-Blend-Regler.

### DF-04C – Manual Alignment Foundation – PASS / FROZEN
Manuelle Ausrichtung ausschließlich des Result-Layers über X, Y und uniforme proportionale Skalierung mit sichtbaren Werten und `Reset Alignment`.

### DF-04D – Difference View Foundation – PASS / FROZEN
Deterministische pixelweise absolute RGBA-Difference auf gemeinsamer Review-Rasterfläche unter Verwendung des aktuellen DF-04C-Alignments. Kein Score.

### DF-04E – Silhouette Difference Foundation – PASS / FROZEN
Deterministische Silhouette Difference auf derselben Review-Rasterfläche. Die Maske wird ausschließlich aus gerendertem Alpha mit fester interner Grenze `16 / 255` gebildet. Überlappung, Source-only und Result-only werden visuell unterschieden.

### DF-04F – Silhouette Geometry Guide Foundation – PASS / FROZEN
Rein visuelle Geometry Guides auf derselben Silhouettengeometrie: achsenparallele Source-/Result-Bounding-Boxen, geometrische Center-Marker und ein gemeinsamer temporärer Ein-/Aus-Schalter. Result-Guides folgen dem bestehenden DF-04C-X/Y/Scale-Alignment; Source bleibt unverändert. Keine automatische Korrektur, kein Best-Fit und kein Score.

Der reale iPhone-/Safari-Gerätetest und das Completion-/Freeze-Gate für DF-04F sind `PASS / 0 BLOCKER / FROZEN`.

## Aktueller Stand
Aktueller Entwicklungs-/Freeze-Branch:
`df-04f-silhouette-geometry-guide-foundation`

Aktueller eingefrorener Review-Stand:
`DF-04F – PASS / 0 BLOCKER / FROZEN`

Kein Folgeblock ist automatisch freigegeben. Der nächste kleine Review-Schritt wird erst aus der realen DF-04F-Erfahrung fachlich abgeleitet und danach separat vertraglich definiert.

## Siedler-Mini
Repository: `DrHoschi/siedler-mini`

Konkrete aktuelle Handoff-Pfade und Freigabegrenzen werden verbindlich in der Repository-Dokumentation gepflegt.

## Dokumentation
- `docs/PROJECT_STATUS.md` – aktueller Gesamtstand, Branch, PASS/FAIL und exakt nächster zulässiger Schritt
- `docs/ROADMAP.md` – Gesamtvision, Zielarchitektur und Entwicklungsgrenzen
- `docs/DF-04A_SOURCE_RESULT_COMPARE_VIEW_CONTRACT.md` – eingefrorener Basisvergleich
- `docs/DF-04B_OVERLAY_ONION_SKIN_COMPARE_CONTRACT.md` – eingefrorener Overlay-Vertrag
- `docs/DF-04C_MANUAL_ALIGNMENT_FOUNDATION_CONTRACT.md` – eingefrorener Manual-Alignment-Vertrag
- `docs/DF-04D_DIFFERENCE_VIEW_FOUNDATION_CONTRACT.md` – eingefrorener Difference-View-Vertrag
- `docs/DF-04E_SILHOUETTE_DIFFERENCE_FOUNDATION_CONTRACT.md` – eingefrorener Silhouette-Difference-Vertrag
- `docs/DF-04F_SILHOUETTE_GEOMETRY_GUIDE_FOUNDATION_CONTRACT.md` – eingefrorener Geometry-Guide-Vertrag

## Projektprinzip
DevForge wird nicht als große theoretische All-in-one-Anwendung vorgebaut. Neue Funktionen entstehen in kleinen nachprüfbaren Blöcken aus realen Produktionsproblemen. Ein bestätigter Contract wird nicht nebenbei wieder geöffnet.

## Archivierter Altstand
Der frühere parametrische Stahlträgerhallen-Prototyp ist unverändert auf folgendem Branch gesichert:
`archive/baustellenplaner-halle-legacy`
