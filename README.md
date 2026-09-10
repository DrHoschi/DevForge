# DevForge

DevForge ist die zentrale webbasierte Entwickler-Toolbox für unterschiedliche Spiele- und Softwareprojekte. Das Werkzeug ist projektübergreifend gedacht und soll Assets, Prompts, Referenzen, Animationen, Reviews und spätere Übergaben strukturiert vorbereiten.

## Tool Hub – Authority-Stand
`DF-HUB-01 – PASS / 0 BLOCKER / FROZEN`

Der Hub wurde durch DF-05 außerhalb des eingefrorenen HUB-01-Blocks um `Controlled Asset Handoff` ergänzt. Bestehende HUB-01-Capabilities bleiben unverändert.

## Module
- Animated 3D Reference Viewer – `FROZEN / PRODUCTIVE` für die belegten DF-02F.1–F.5-Capabilities
- Prompt Builder – `AVAILABLE`, Rolle `GENERATION / HANDOFF`
- Source / Result Compare View – `FROZEN / PRODUCTIVE`, Rolle `REVIEW`, autoritativ DF-04F
- Animation Tester – `AVAILABLE`, Rolle `REVIEW`
- Deterministic Pose Renderer – `PROTOTYPE / HISTORICAL`
- Sprite Lab – `AVAILABLE`, Rolle `TECHNICAL ASSET`
- Atlas Builder – `CONSOLIDATED / REDIRECT`
- Asset Inspector – `AVAILABLE`, Rolle `TECHNICAL ASSET`
- Parameter Playground – `PREPARED / NOT IMPLEMENTED`
- Controlled Asset Handoff – DF-05 `FROZEN / PRODUCTIVE`; DF-06 `FROZEN / PRODUCTIVE` erweitert denselben Handoff-Kontext um explizite Target Project Profiles

## Aktueller Character-Workflow
Der Character-Animationsworkflow wird anhand von `siedler-mini` / Carrier / WALK entwickelt.

Seit DF-02F ist eine echte geriggte 3D-Animation die autoritative Bewegungsquelle. DevForge kontrolliert Animation/Zeitposition, Facing, Gameplay-Kamera, Pose Bookmark / Reference Capture, visuellen Pose-Handoff und ergänzende explizite Gelenk-/Skeleton-Geometrie.

## DF-04 – Asset Review Foundation
DF-04A bis DF-04F sind `PASS / FROZEN`.

Ein möglicher `Silhouette Geometry Readout` bleibt ausschließlich `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`.

## DF-05 – Controlled Asset Handoff Foundation
Status:
`PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

DF-05 stellt die minimale kontrollierte Grenze bereit:
`APPROVED SOURCE ASSET → deterministisches Handoff Manifest → explizites Ziel/Staging`

Der reale iPhone-/Safari-Test vom 2026-09-10 bestätigte Pflichtfeldprüfung, `NOT APPROVED`-Blockade, `APPROVED`-Eligibility, vollständiges deterministisches Manifest, JSON-Export und Rücknavigation zum Hub. DF-05 führt keine GitHub-, Repository-, Datei- oder Runtime-Übertragung aus.

## DF-06 – Target Project Handoff Profile Foundation
Status:
`PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

Verbindlicher Contract:
`docs/DF-06_TARGET_PROJECT_HANDOFF_PROFILE_FOUNDATION_CONTRACT.md`

DF-06 stellt eine explizit auswählbare, wiederverwendbare Zielprojekt-Autorität für DF-05 bereit. Der Frozen Product Stand enthält genau ein reales Profil `Siedler Mini` für `DrHoschi/siedler-mini`; ohne ausdrückliche Auswahl besteht keine Profil-Autorität. DF-06 erzeugt keine Approval-Entscheidung und führt keine Repository-/Datei-/Runtime-Aktion aus.

## DF-07 – Source Asset Approval Authority Foundation
Status:
`DEFINED / NOT IMPLEMENTED`

Definition baseline / Frozen DF-06 Product Commit:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

Verbindlicher Contract:
`docs/DF-07_SOURCE_ASSET_APPROVAL_AUTHORITY_FOUNDATION_CONTRACT.md`

DF-07 definiert die nächste kleine Autoritätsgrenze:
`REVIEWED SOURCE ASSET + EXPLICIT IDENTITY → APPROVAL RECORD → DF-05 APPROVAL INPUT → Handoff Manifest`

Der minimale Approval Record bindet eine ausdrückliche Entscheidung an `assetId`, `sourceReference` und `sourceVersion`. Zulässige Entscheidungen sind zunächst ausschließlich `APPROVED` und `NOT APPROVED`. Keine Review-Ansicht, kein technischer Check, kein Score und keine KI darf automatisch `APPROVED` erzeugen.

DF-07 definiert noch keine Persistenzarchitektur und keine große Asset-/Approval-Datenbank. DF-04, DF-05 und DF-06 bleiben geschlossen und eingefroren.

## Aktueller Stand
Autoritativer Frozen Product Stand:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

Aktueller Dokumentationsstand definiert DF-07, implementiert aber noch nichts.

## Siedler-Mini
Repository: `DrHoschi/siedler-mini`

DF-05, DF-06 und die DF-07-Definition verändern dieses Repository nicht.

## Dokumentation
- `docs/PROJECT_STATUS.md` – aktueller Gesamtstand, Branch, PASS/FAIL und exakt nächster zulässiger Schritt
- `docs/ROADMAP.md` – Gesamtvision, Zielarchitektur und Entwicklungsgrenzen
- `docs/DF-05_CONTROLLED_ASSET_HANDOFF_FOUNDATION_CONTRACT.md` – eingefrorener DF-05-Handoff-Contract
- `docs/DF-06_TARGET_PROJECT_HANDOFF_PROFILE_FOUNDATION_CONTRACT.md` – eingefrorener DF-06-Profil-Contract
- `docs/DF-07_SOURCE_ASSET_APPROVAL_AUTHORITY_FOUNDATION_CONTRACT.md` – definierter DF-07-Approval-Authority-Contract
- `docs/DF-HUB-01_TOOL_HUB_AUTHORITY_WORKFLOW_RECONCILIATION_CONTRACT.md` – eingefrorener Tool-Hub-Authority-/Workflow-Contract
- `docs/DF-04A_SOURCE_RESULT_COMPARE_VIEW_CONTRACT.md` bis `docs/DF-04F_SILHOUETTE_GEOMETRY_GUIDE_FOUNDATION_CONTRACT.md` – eingefrorene Review-Contracts

## Projektprinzip
DevForge wird nicht als große theoretische All-in-one-Anwendung vorgebaut. Neue Funktionen entstehen in kleinen nachprüfbaren Blöcken aus realen Produktionsproblemen. Ein bestätigter Contract wird nicht nebenbei wieder geöffnet.

## Nächster zulässiger Schritt
Ausschließlich das `DF-07 Contract / Documentation Reconciliation Gate` gegen Frozen DF-06 Product Commit `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`.

Dabei sind Scope, Approval-Record-Mindestfelder, Identity Binding, Beziehung zu DF-04/05/06, README-Sync und harte Non-Goals auf Widerspruchsfreiheit zu prüfen.

Noch keine DF-07-Implementierung, keine Implementation Scope Reconciliation und kein neuer Entwicklungsbranch im selben Schritt.

## Archivierter Altstand
Der frühere parametrische Stahlträgerhallen-Prototyp ist unverändert auf folgendem Branch gesichert:
`archive/baustellenplaner-halle-legacy`
