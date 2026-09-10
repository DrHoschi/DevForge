# DevForge

DevForge ist die zentrale webbasierte Entwickler-Toolbox für unterschiedliche Spiele- und Softwareprojekte. Das Werkzeug ist projektübergreifend gedacht und soll Assets, Prompts, Referenzen, Animationen, Reviews und spätere Übergaben strukturiert vorbereiten.

## Tool Hub – eingefrorener Authority-Stand
`DF-HUB-01 – PASS / 0 BLOCKER / FROZEN`

Getestete sichtbare Hub-Kennung:
`DF-HUB-01 · TESTBUILD 1`

Der Tool Hub unterscheidet verbindlich zwischen `FROZEN / PRODUCTIVE`, `AVAILABLE`, `PROTOTYPE / HISTORICAL`, `PREPARED / NOT IMPLEMENTED` und `CONSOLIDATED / REDIRECT` und zeigt die jeweilige Workflow-Rolle an.

## Module
- Animated 3D Reference Viewer – `FROZEN / PRODUCTIVE` für die belegten DF-02F.1–F.5-Capabilities; echte geriggte 3D-Animationsquellen laden, scrubben, Facing/Kamera festlegen und Pose-Bookmarks erzeugen
- Prompt Builder – `AVAILABLE`; Character Identity mit visueller Pose Control und expliziter Geometry Control zu einem Generation Package verbinden
- Source / Result Compare View – `FROZEN / PRODUCTIVE`; Source und Result laden, vergleichen, überblenden, Result manuell ausrichten sowie RGBA-Difference, Silhouette Difference und Silhouette Geometry Guides anzeigen
- Animation Tester – `AVAILABLE`; rohe Einzelbilder vor dem Atlas als Loop prüfen, inkl. FPS, Onion-Skin, Frame-Stepping und Bottom-Center-Anchor
- Deterministic Pose Renderer – `PROTOTYPE / HISTORICAL`; historischer DF-02E-Prototyp, nicht mehr die geplante Produktionsquelle
- Sprite Lab – `AVAILABLE`; Sprites/Sprite-Sheets laden, Pivot/Anchor/Scale bearbeiten und Atlasdaten prüfen
- Atlas Builder – `CONSOLIDATED / REDIRECT`; keine eigenständige Capability-Autorität, Atlas-Funktionen sind im gemeinsamen technischen Werkzeug konsolidiert
- Asset Inspector – `AVAILABLE`; technische Eigenschaften von Bildern/Texturen/Sprites prüfen
- Parameter Playground – `PREPARED / NOT IMPLEMENTED`; noch keine aktive Produktionsrolle

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
DF-04A bis DF-04F sind `PASS / FROZEN`. DF-HUB-01 öffnet diese Contracts nicht wieder und verändert keine Dateien innerhalb der Tools.

Ein möglicher `Silhouette Geometry Readout` bleibt ausschließlich `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`.

## Aktueller Stand
Aktueller eingefrorener Branch:
`df-hub-01-tool-hub-authority-workflow-reconciliation`

Aktueller Hub-Stand:
`DF-HUB-01 – PASS / 0 BLOCKER / FROZEN`

Der reale iPhone-/Safari-Test vom 2026-09-10 bestätigte responsive Nutzbarkeit, Sichtbarkeit aller neun Hub-Türen, lesbare Authority-/Workflow-Kennzeichnung und funktionierende vorhandene Hub-Links.

Kein Folgeblock ist automatisch freigegeben.

## Siedler-Mini
Repository: `DrHoschi/siedler-mini`

Konkrete aktuelle Handoff-Pfade und Freigabegrenzen werden verbindlich in der Repository-Dokumentation gepflegt.

## Dokumentation
- `docs/PROJECT_STATUS.md` – aktueller Gesamtstand, Branch, PASS/FAIL und exakt nächster zulässiger Schritt
- `docs/ROADMAP.md` – Gesamtvision, Zielarchitektur und Entwicklungsgrenzen
- `docs/DF-HUB-01_TOOL_HUB_AUTHORITY_WORKFLOW_RECONCILIATION_CONTRACT.md` – eingefrorener Tool-Hub-Authority-/Workflow-Contract
- `docs/DF-04A_SOURCE_RESULT_COMPARE_VIEW_CONTRACT.md` bis `docs/DF-04F_SILHOUETTE_GEOMETRY_GUIDE_FOUNDATION_CONTRACT.md` – eingefrorene Review-Contracts

## Projektprinzip
DevForge wird nicht als große theoretische All-in-one-Anwendung vorgebaut. Neue Funktionen entstehen in kleinen nachprüfbaren Blöcken aus realen Produktionsproblemen. Ein bestätigter Contract wird nicht nebenbei wieder geöffnet.

## Archivierter Altstand
Der frühere parametrische Stahlträgerhallen-Prototyp ist unverändert auf folgendem Branch gesichert:
`archive/baustellenplaner-halle-legacy`
