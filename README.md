# DevForge

DevForge ist die zentrale webbasierte Entwickler-Toolbox für unterschiedliche Spiele- und Softwareprojekte. Das Werkzeug ist projektübergreifend gedacht und soll Assets, Prompts, Referenzen, Animationen, Reviews und spätere Übergaben strukturiert vorbereiten.

## Tool Hub – Authority-Stand
`DF-HUB-01 – PASS / 0 BLOCKER / FROZEN`

Der Hub wurde durch DF-05 außerhalb des eingefrorenen HUB-01-Blocks um `Controlled Asset Handoff` ergänzt. Bestehende HUB-01-Capabilities bleiben unverändert.

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
- Controlled Asset Handoff – `FROZEN / PRODUCTIVE`; DF-05-Handoff-Eligibility, deterministisches Minimalmanifest und explizites Ziel/Staging ohne Repository-Übertragung

## Aktueller Character-Workflow
Der Character-Animationsworkflow wird anhand von `siedler-mini` / Carrier / WALK entwickelt.

Seit DF-02F ist eine echte geriggte 3D-Animation die autoritative Bewegungsquelle. DevForge kontrolliert Animation/Zeitposition, Facing, Gameplay-Kamera, Pose Bookmark / Reference Capture, visuellen Pose-Handoff und ergänzende explizite Gelenk-/Skeleton-Geometrie.

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

## DF-04 – Asset Review Foundation
DF-04A bis DF-04F sind `PASS / FROZEN`.

Ein möglicher `Silhouette Geometry Readout` bleibt ausschließlich `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`.

## DF-05 – Controlled Asset Handoff Foundation
`DF-05 – PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

DF-05 stellt die minimale kontrollierte Grenze bereit:
`APPROVED SOURCE ASSET → deterministisches Handoff Manifest → explizites Ziel/Staging`

Der reale iPhone-/Safari-Test vom 2026-09-10 bestätigte Pflichtfeldprüfung, `NOT APPROVED`-Blockade, `APPROVED`-Eligibility, vollständiges deterministisches Manifest, JSON-Export und Rücknavigation zum Hub. DF-05 führt keine GitHub-, Repository-, Datei- oder Runtime-Übertragung aus.

## DF-06 – Target Project Handoff Profile Foundation
Status:
`DEFINED / NOT IMPLEMENTED`

Definition-Baseline:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

DF-06 definiert als nächsten kleinen Capability-Kandidaten eine explizit auswählbare, wiederverwendbare Zielprojekt-Autorität für DF-05. Profile dürfen Zielprojekt, Staging-/Output-Vorgaben und minimale Formatinformation deklarativ und deterministisch bereitstellen. Approval bleibt außerhalb des Profils; automatische Projekterkennung, implizite Defaults sowie Repository-/Datei-/Runtime-Aktionen sind nicht Teil von DF-06.

Verbindlicher Contract:
`docs/DF-06_TARGET_PROJECT_HANDOFF_PROFILE_FOUNDATION_CONTRACT.md`

Der bereits vorhandene Branch `df-06-target-project-handoff-profile-foundation` wird aktuell ausschließlich für diese Steuerdokumentation verwendet und gilt noch nicht als freigegebener Entwicklungsbranch.

## Aktueller Stand
Autoritativer Frozen Product Stand:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

Aktueller Dokumentationsstand definiert DF-06, implementiert aber noch nichts.

## Siedler-Mini
Repository: `DrHoschi/siedler-mini`

DF-05 und die DF-06-Definition verändern dieses Repository nicht.

## Dokumentation
- `docs/PROJECT_STATUS.md` – aktueller Gesamtstand, Branch, PASS/FAIL und exakt nächster zulässiger Schritt
- `docs/ROADMAP.md` – Gesamtvision, Zielarchitektur und Entwicklungsgrenzen
- `docs/DF-05_CONTROLLED_ASSET_HANDOFF_FOUNDATION_CONTRACT.md` – eingefrorener DF-05-Handoff-Contract
- `docs/DF-06_TARGET_PROJECT_HANDOFF_PROFILE_FOUNDATION_CONTRACT.md` – definierter DF-06-Profil-Contract
- `docs/DF-HUB-01_TOOL_HUB_AUTHORITY_WORKFLOW_RECONCILIATION_CONTRACT.md` – eingefrorener Tool-Hub-Authority-/Workflow-Contract
- `docs/DF-04A_SOURCE_RESULT_COMPARE_VIEW_CONTRACT.md` bis `docs/DF-04F_SILHOUETTE_GEOMETRY_GUIDE_FOUNDATION_CONTRACT.md` – eingefrorene Review-Contracts

## Projektprinzip
DevForge wird nicht als große theoretische All-in-one-Anwendung vorgebaut. Neue Funktionen entstehen in kleinen nachprüfbaren Blöcken aus realen Produktionsproblemen. Ein bestätigter Contract wird nicht nebenbei wieder geöffnet.

## Nächster zulässiger Schritt
Ausschließlich DF-06 Contract / Documentation Reconciliation gegen Frozen Product Commit `c677f07773866dfe8f5c98dcb311ab1750538d9c` einschließlich Prüfung des README-Syncs.

Noch keine DF-06-Implementierung und keine Freigabe eines Entwicklungsbranches im selben Schritt.

## Archivierter Altstand
Der frühere parametrische Stahlträgerhallen-Prototyp ist unverändert auf folgendem Branch gesichert:
`archive/baustellenplaner-halle-legacy`
