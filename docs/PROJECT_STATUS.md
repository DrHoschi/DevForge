# DevForge – Project Status

Stand: 2026-10-14

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Texture Lab Scope Baseline: `d270bb80834eb285de776733dffedab3d28efb8c`
- Texture Lab Product Priority / Minimal V1 Scope: `PASS / FROZEN`
- Texture Lab Minimal V1 Implementation Baseline: `203b6c3ab9697d5f9243fde2af0d315227f55f7b`

## Frozen Core Foundations
- DF-04A–F: `PASS / FROZEN`
- DF-HUB-01: `PASS / FROZEN`
- DF-05: `PASS / 0 BLOCKER / FROZEN` — `c677f07773866dfe8f5c98dcb311ab1750538d9c`
- DF-06: `PASS / 0 BLOCKER / FROZEN` — `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
- DF-07: `PASS / 0 BLOCKER / FROZEN` — `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`
- DF-08: `PASS / 0 BLOCKER / FROZEN` — `2c08b275f999f7467d5eb62a17515f39283b1f25`
- DF-09: `DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`

Authority boundaries bleiben unverändert: DF-05 Eligibility/Manifest, DF-06 Target Project Profile, DF-07 Approval, DF-08 lokale Payload-Auswahl und Payload-/Identity-Binding. DF-09 ist ausschließlich als Fingerprint-Nachweis definiert.

## Integrierter Hub-/Presentation-Stand
Auf dem reconcilierten `main` sind folgende späteren Blöcke zusätzlich abgeschlossen und eingefroren:

- Main Consolidation — `PASS / FROZEN`
- Visual Direction — `PASS / 0 BLOCKER / FROZEN`
- Hero Branding — `PASS / 0 BLOCKER / FROZEN`
- Amboss Header — `PASS / 0 BLOCKER / FROZEN`
- Category Cards — `PASS / 0 BLOCKER / FROZEN`
- Category Identity Icons — `PASS / 0 BLOCKER / FROZEN`
- Hub Authority Metadata — `PASS / 0 BLOCKER / FROZEN`
- Tool Identity Icons — `PASS / 0 BLOCKER / FROZEN`
- Industry Tools — `PASS / 0 BLOCKER / FROZEN`

Der Hub umfasst auf diesem Testbuild-Branch aktuell 13 Registry-Einträge. Industry enthält genau:
- `virtual-baustellenplaner` → Virtual Baustellenplaner
- `cybermotion-3d` → CyberMotion 3D Web Designer

Beide sind `EXTERNAL PRODUCT` und behalten ihre jeweilige externe Produkt-Authority. Die finalen Launch-Ziele führen direkt zu den produktiven Web-Anwendungen.

Industry Completion-/Evidence-/Freeze:
`docs/DEVFORGE_INDUSTRY_TOOLS_COMPLETION_EVIDENCE_FREEZE.md`

## Sprite Lab
Asset Contract / Persistence:
`PASS WITH DEVICE LIMITATION / FROZEN`

Frozen Product Commit:
`d7101a582d3b8fa9ef9d7bc0cf3feeefb5f7cc31`

Completion-/Evidence:
`docs/ASSET_CONTRACT_PERSISTENCE_COMPLETION_EVIDENCE_FREEZE.md`

Verifiziert sind Asset Save/Load, Spatial-Persistenz, stable-ID Frame Binding, History-Session-Reset und Legacy-Atlas-Regression. Nicht Teil dieses Freeze sind Marker/Sockets, Layer/Z-Order, Rig/Skeleton, GLB/LOD/Collision und weitere spätere Capabilities.

Dokumentierte Limitationen:
- iPad Full-Persistence-Roundtrip nicht separat ausgeführt;
- nativer Dateiinput zeigt nach erfolgreichem Load wieder „Keine Datei ausgewählt“ — `KNOWN UI ISSUE / NON-BLOCKING`.

## DF-09 – Source Asset Payload Fingerprint Foundation
Status:
`DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`

Definition baseline / Frozen DF-08 Product Commit:
`2c08b275f999f7467d5eb62a17515f39283b1f25`

Contract:
`docs/DF-09_SOURCE_ASSET_PAYLOAD_FINGERPRINT_FOUNDATION_CONTRACT.md`

Reconciled maximaler TESTBUILD-1-Produktscope:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`

Der Block ergänzt ausschließlich SHA-256 des bereits gebundenen lokalen Payloads, einen minimalen Fingerprint Record sowie die definierte Validity-/Invalidation-Logik. Keine neue Tool-Oberfläche, keine neue Hub-Tür und keine Änderung der DF-05–08-Semantik.

DF-09 bleibt ein vollständig definierter Core-Capability-Kandidat, ist aber aktuell nicht als höchste Produktpriorität ausgewählt.

## Texture Lab – Minimal V1
Status:
`PASS / FROZEN`

Scope-Dokument:
`docs/TEXTURE_LAB_PRODUCT_PRIORITY_MINIMAL_V1_SCOPE.md`

Scope Baseline:
`d270bb80834eb285de776733dffedab3d28efb8c`

Implementation Baseline:
`203b6c3ab9697d5f9243fde2af0d315227f55f7b`

Frozen Product Commit:
`200b769c3b4fff5f236dee4ca791a2f5867a40c0`

Completion-/Evidence:
`docs/TEXTURE_LAB_MINIMAL_V1_COMPLETION_EVIDENCE_FREEZE.md`

Texture Lab Minimal V1 ist auf `feature/texture-lab-minimal-v1` als isolierter Texture Tester implementiert:

- lokale PNG/JPG/WebP-Texturen laden;
- Base-Color-/Diffuse-Wirkung auf Fläche, Würfel und Kugel prüfen;
- Repeat, Scale, Rotation, Offset, Alpha und einfache Beleuchtung visuell bewerten;
- keine KI-Generierung;
- keine automatische Normal-/Roughness-/Metalness-/AO-Erzeugung;
- keine Änderung an DF-05–DF-09;
- keine Sprite-, Atlas-, Rig-, Skeleton- oder Animation-Authority.

Ein späterer Texture Creator bleibt ausdrücklich ein separater Folgeblock.

## Texture Lab – Multi Map Preview
Status:
`PASS WITH EVIDENCE LIMITATIONS / FROZEN`

Scope-Dokument:
`docs/TEXTURE_LAB_MULTI_MAP_PREVIEW_SCOPE.md`

Implementation-/Verification-Dokument:
`docs/TEXTURE_LAB_MULTI_MAP_PREVIEW_IMPLEMENTATION_VERIFICATION.md`

Scope Authorization Baseline:
`bc506a0b6ed155c617a23e7578eecc28390edfe2`

Ziel ist ausschließlich die Preview vorhandener lokaler Material-Maps im bestehenden Texture Lab:

- Base Color bleibt wie in Minimal V1;
- zusätzliche Slots für Normal, Roughness, Metalness und AO;
- lokale PNG/JPG/JPEG/WebP-Dateien pro Slot;
- gemeinsames Material auf Fläche, Würfel und Kugel prüfen;
- gemeinsame Transform-Parameter bleiben synchron, damit Maps ausgerichtet bleiben;
- iPhone-Safari-Dateiauswahl und sichtbare Readouts bleiben Acceptance-relevant.

Nicht Teil dieses Blocks sind Map-Erzeugung, Texture Creator / Map Generator, Export, Download, Handoff, Projekt-Persistenz, dediziertes Icon, GLB-Import oder DF-05–DF-09-Änderungen.

Multi Map Preview ist über Nutzer-Evidence auf iPhone Safari funktional verifiziert und im erweiterten V1-Freeze enthalten. Main-Integration bleibt separat.

Implementation Commit:
`060793be662a9fa33e0fb6508c855226b52b1c89`

Statisch verifiziert sind zusätzliche Slots für Normal, Roughness, Metalness und AO, Map-Zuweisung auf `MeshStandardMaterial`, synchronisierte Texture-Transforms, iOS-Dateiendungsfallback, sichtbare Slot-Readouts und unveränderte Non-Goals ohne Generator, Export oder Handoff.

## Tatsächlich offene Bereiche
- DF-09 Implementation ist noch nicht begonnen.
- Sprite-Lab-Folgefähigkeiten wie Marker/Sockets, Layer/Z-Order und Rig/Skeleton bleiben separate spätere Blöcke.
- Dokumentierte non-blocking UI-/Visual-Polish-Punkte bleiben optional.
- Repository-Transfer, Runtime-Handoff, persistente Libraries, Batch, Signaturen/PKI und Formatkonvertierung bleiben spätere Core-Grenzen.

## Aktueller Gate-Status
`TEXTURE LAB V1 – TEXTURE TESTER – PASS WITH EVIDENCE LIMITATIONS / FROZEN`

Arbeitsbranch: `feature/texture-lab-minimal-v1`.
Frozen Product Commit: `be9534c62cc48c21e664aed84b0476e590364d16`.

Completion-/Evidence-/Freeze:
`docs/TEXTURE_LAB_MATERIAL_CONTROLS_SLOT_CLEANUP_ICON_VERIFICATION.md`

Der Nutzer bestätigte auf iPhone Safari alle fünf Map-Slots, sichtbare Preview, Entfernen, Aktiv/Deaktiv, Materialregler und Fläche/Würfel/Kugel. Screenshots belegen geladene Slots und den texturierten Würfel mit Tool-Icon. Nachweisgrenzen: keine unabhängig ermittelte Pages-SHA, keine separate neue Reset-/Format-/iPad-/Desktop-Regression; Details im Evidence-Dokument. Keine weiteren Funktionen für diesen Freeze erforderlich.

Der erweiterte V1-Stand ergänzt den historischen Base-Color-Minimal-V1-Freeze. Texture Creator / Map Generator bleibt separat. Main ist weiterhin `203b6c3ab9697d5f9243fde2af0d315227f55f7b`; keine Integration in diesem Gate.

## Nächster zulässiger Schritt

Ausschließlich **Texture Lab V1 – main Integration Reconciliation**, read-only: den vollständigen Freeze-Stand auf `feature/texture-lab-minimal-v1` mit dem dann aktuellen `main` vergleichen. Keine Main-Integration in diesem Gate; eine Integration bleibt separat zu autorisieren.
