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
- Sprite Lab – Responsive Layout `PASS / 0 BLOCKER / FROZEN`, Rolle `TECHNICAL ASSET`, Frozen Product Commit `fc25cc51147dcd7493dc84c42887a434519a422c`
- Atlas Builder – `CONSOLIDATED / REDIRECT`
- Asset Inspector – `AVAILABLE`, Rolle `TECHNICAL ASSET`
- Parameter Playground – `PREPARED / NOT IMPLEMENTED`
- Controlled Asset Handoff – DF-05, DF-06, DF-07 und DF-08 `FROZEN / PRODUCTIVE`; DF-09 ist `DEFINED / NOT IMPLEMENTED`

## Sprite Lab – Responsive Layout
Status: `PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit: `fc25cc51147dcd7493dc84c42887a434519a422c`

Geprüfter sichtbarer Stand: `SPRITE LAB · TESTBUILD 5.4.1`

Verbindlicher Freeze-Nachweis: `docs/SPRITE_LAB_RESPONSIVE_LAYOUT_FREEZE.md`

Der Frozen Stand umfasst das responsive iPhone-/iPad-Layout, Tablet-Rail-Tabs, die mobile `Auswahl | Eigenschaften`-Navigation, direkten Inspector-Zugriff und den Erhalt des bestehenden Atlas-/Frame-Zustands beim Bereichswechsel. Undo/Redo, Frame-Kopieren, direkte Canvas-Move/Resize-Bearbeitung und Animationsvorschau sind ausdrücklich nicht Teil dieses Frozen Blocks.

## Aktueller Character-Workflow
Der Character-Animationsworkflow wird anhand von `siedler-mini` / Carrier / WALK entwickelt.

Seit DF-02F ist eine echte geriggte 3D-Animation die autoritative Bewegungsquelle. DevForge kontrolliert Animation/Zeitposition, Facing, Gameplay-Kamera, Pose Bookmark / Reference Capture, visuellen Pose-Handoff und ergänzende explizite Gelenk-/Skeleton-Geometrie.

## DF-04 – Asset Review Foundation
DF-04A bis DF-04F sind `PASS / FROZEN`.

Ein möglicher `Silhouette Geometry Readout` bleibt ausschließlich `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`.

## DF-05 – Controlled Asset Handoff Foundation
Status: `PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit: `c677f07773866dfe8f5c98dcb311ab1750538d9c`

DF-05 stellt die minimale kontrollierte Grenze bereit:
`APPROVED SOURCE ASSET → deterministisches Handoff Manifest → explizites Ziel/Staging`

DF-05 führt keine GitHub-, Repository-, Datei- oder Runtime-Übertragung aus.

## DF-06 – Target Project Handoff Profile Foundation
Status: `PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

Verbindlicher Contract: `docs/DF-06_TARGET_PROJECT_HANDOFF_PROFILE_FOUNDATION_CONTRACT.md`

DF-06 stellt eine explizit auswählbare, wiederverwendbare Zielprojekt-Autorität für DF-05 bereit. Der Frozen Product Stand enthält genau ein reales Profil `Siedler Mini` für `DrHoschi/siedler-mini`.

## DF-07 – Source Asset Approval Authority Foundation
Status: `PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit: `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

Verbindlicher Contract: `docs/DF-07_SOURCE_ASSET_APPROVAL_AUTHORITY_FOUNDATION_CONTRACT.md`

DF-07 stellt die explizite identitätsgebundene Approval-Autorität bereit:
`REVIEWED SOURCE ASSET + EXPLICIT IDENTITY → APPROVAL RECORD → DF-05 APPROVAL INPUT → Handoff Manifest`

Der Approval Record bindet die Entscheidung an `assetId`, `sourceReference` und `sourceVersion`. Die reale iPhone-/Safari-Evidenz bestätigte explizite Decisions, `VALID`, `IDENTITY MISMATCH`, explizite Anwendung auf DF-05 und unveränderte DF-05-Eligibility.

## DF-08 – Source Asset Payload Binding Foundation
Status: `PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit: `2c08b275f999f7467d5eb62a17515f39283b1f25`

Verbindlicher Contract: `docs/DF-08_SOURCE_ASSET_PAYLOAD_BINDING_FOUNDATION_CONTRACT.md`

DF-08 stellt die explizite lokale Payload-Bindung bereit:
`APPROVED IDENTITY + EXPLICIT LOCAL SOURCE PAYLOAD → IDENTITY-BOUND HANDOFF CANDIDATE → bestehendes DF-05 Manifest`

Ein lokaler Source-Payload wird ausdrücklich gewählt und an die aktuell deklarierte Kombination aus `assetId`, `sourceReference` und `sourceVersion` gebunden. Ein gebundener Payload gilt nur bei identischer gültiger DF-07-Approval-Identität als approval-kompatibel. Eine neue Datei oder geänderte Identität übernimmt keine alte Approval-Autorität automatisch.

Der Frozen Stand enthält weiterhin keinen verpflichtenden Content-Hash/Fingerprint und führt keine Repository-/Datei-/Runtime-Übertragung aus.

## DF-09 – Source Asset Payload Fingerprint Foundation
Status: `DEFINED / NOT IMPLEMENTED`

Definition baseline / Frozen DF-08 Product Commit: `2c08b275f999f7467d5eb62a17515f39283b1f25`

Verbindlicher Contract: `docs/DF-09_SOURCE_ASSET_PAYLOAD_FINGERPRINT_FOUNDATION_CONTRACT.md`

DF-09 definiert die nächste kleine technische Nachweisgrenze:
`EXPLICITLY BOUND LOCAL PAYLOAD + DECLARED IDENTITY → DETERMINISTIC PAYLOAD FINGERPRINT → IDENTITY-BOUND PAYLOAD PROOF`

Der Fingerprint wird ausschließlich aus dem Byte-Inhalt des ausdrücklich ausgewählten und nach DF-08 gebundenen lokalen Payloads berechnet. Verbindlicher Algorithmus ist `SHA-256`; der Digest wird vollständig als lowercase hexadecimal string dargestellt.

Der Fingerprint ersetzt weder `assetId`, `sourceReference` oder `sourceVersion` noch die DF-07-Approval-Autorität. Er dient ausschließlich als technischer Nachweis für die Binäridentität des aktuell gebundenen Payloads.

DF-09 autorisiert noch keine Repository-/Datei-/Runtime-Übertragung, keine Persistenz, keine Signaturen, keine semantische Inhaltsanalyse und keine Änderung der eingefrorenen DF-05/06/07/08-Semantik.

## Aktueller Stand
Der Sprite Lab Responsive Layout Block ist `PASS / 0 BLOCKER / FROZEN` auf Frozen Product Commit `fc25cc51147dcd7493dc84c42887a434519a422c`.

DF-08 bleibt `PASS / 0 BLOCKER / FROZEN`. DF-09 bleibt definiert, aber nicht implementiert und wird durch den Sprite-Lab-Freeze nicht geöffnet.

## Siedler-Mini
Repository: `DrHoschi/siedler-mini`

DF-09 verändert dieses Repository nicht.

## Dokumentation
- `docs/PROJECT_STATUS.md` – aktueller Gesamtstand, Branch, PASS/FAIL und exakt nächster zulässiger Schritt
- `docs/ROADMAP.md` – Gesamtvision, Zielarchitektur und Entwicklungsgrenzen
- `docs/SPRITE_LAB_RESPONSIVE_LAYOUT_FREEZE.md` – eingefrorener Sprite-Lab-Responsive-Layout-Stand
- `docs/DF-05_CONTROLLED_ASSET_HANDOFF_FOUNDATION_CONTRACT.md` – eingefrorener DF-05-Handoff-Contract
- `docs/DF-06_TARGET_PROJECT_HANDOFF_PROFILE_FOUNDATION_CONTRACT.md` – eingefrorener DF-06-Profil-Contract
- `docs/DF-07_SOURCE_ASSET_APPROVAL_AUTHORITY_FOUNDATION_CONTRACT.md` – eingefrorener DF-07-Approval-Authority-Contract
- `docs/DF-08_SOURCE_ASSET_PAYLOAD_BINDING_FOUNDATION_CONTRACT.md` – eingefrorener DF-08-Payload-Binding-Contract
- `docs/DF-09_SOURCE_ASSET_PAYLOAD_FINGERPRINT_FOUNDATION_CONTRACT.md` – definierter DF-09-Payload-Fingerprint-Contract
- `docs/DF-HUB-01_TOOL_HUB_AUTHORITY_WORKFLOW_RECONCILIATION_CONTRACT.md` – eingefrorener Tool-Hub-Authority-/Workflow-Contract
- `docs/DF-04A_SOURCE_RESULT_COMPARE_VIEW_CONTRACT.md` bis `docs/DF-04F_SILHOUETTE_GEOMETRY_GUIDE_FOUNDATION_CONTRACT.md` – eingefrorene Review-Contracts

## Projektprinzip
DevForge wird nicht als große theoretische All-in-one-Anwendung vorgebaut. Neue Funktionen entstehen in kleinen nachprüfbaren Blöcken aus realen Produktionsproblemen. Ein bestätigter Contract wird nicht nebenbei wieder geöffnet.

## Nächster zulässiger Schritt
Für das Sprite Lab ausschließlich ein neuer, separat reconciliierter Folgeblock oberhalb des Frozen Responsive-Layout-Stands. Ein späterer Mockup-/Capability-Gap-Abgleich darf Undo/Redo, Frame-Kopieren, direkte Canvas-Bearbeitung und Animationsvorschau bewerten, ist aber nicht Bestandteil dieses Freeze-Schritts.

DF-09 bleibt davon unabhängig `DEFINED / NOT IMPLEMENTED` und wird nicht durch diesen Schritt autorisiert.

## Archivierter Altstand
Der frühere parametrische Stahlträgerhallen-Prototyp ist unverändert auf folgendem Branch gesichert:
`archive/baustellenplaner-halle-legacy`
