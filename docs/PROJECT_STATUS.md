# DevForge – Project Status

Stand: 2026-10-08

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Texture Lab Scope Baseline: `d270bb80834eb285de776733dffedab3d28efb8c`
- Texture Lab Product Priority / Minimal V1 Scope: `IMPLEMENTED / TESTBUILD / VERIFICATION PENDING`
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

Der Hub umfasst aktuell 13 Registry-Einträge. Industry enthält genau:
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

## Texture Lab – Minimal V1 Implementation
Status:
`IMPLEMENTED / TESTBUILD / VERIFICATION PENDING`

Scope-Dokument:
`docs/TEXTURE_LAB_PRODUCT_PRIORITY_MINIMAL_V1_SCOPE.md`

Scope Baseline:
`d270bb80834eb285de776733dffedab3d28efb8c`

Implementation Baseline:
`203b6c3ab9697d5f9243fde2af0d315227f55f7b`

Texture Lab Minimal V1 ist auf `feature/texture-lab-minimal-v1` als isolierter Texture Tester implementiert:

- lokale PNG/JPG/WebP-Texturen laden;
- Base-Color-/Diffuse-Wirkung auf Fläche, Würfel und Kugel prüfen;
- Repeat, Scale, Rotation, Offset, Alpha und einfache Beleuchtung visuell bewerten;
- keine KI-Generierung;
- keine automatische Normal-/Roughness-/Metalness-/AO-Erzeugung;
- keine Änderung an DF-05–DF-09;
- keine Sprite-, Atlas-, Rig-, Skeleton- oder Animation-Authority.

Ein späterer Texture Creator bleibt ausdrücklich ein separater Folgeblock.

## Tatsächlich offene Bereiche
- Texture Lab Minimal V1 benötigt noch Pages-/Device-Evidence vor Freeze.
- DF-09 Implementation ist noch nicht begonnen.
- Sprite-Lab-Folgefähigkeiten wie Marker/Sockets, Layer/Z-Order und Rig/Skeleton bleiben separate spätere Blöcke.
- Dokumentierte non-blocking UI-/Visual-Polish-Punkte bleiben optional.
- Repository-Transfer, Runtime-Handoff, persistente Libraries, Batch, Signaturen/PKI und Formatkonvertierung bleiben spätere Core-Grenzen.

## Aktueller Gate-Status
`TEXTURE LAB – MINIMAL V1 IMPLEMENTATION – TESTBUILD / VERIFICATION PENDING`

Der Block ergänzt ausschließlich `tools/texture-lab/`, die Hub-Registrierung und Statusdokumentation. Er verändert keinen Frozen Contract und keine DF-05–DF-09-Semantik.

## Nächster zulässiger Schritt
Ausschließlich ein separater **Texture Lab – Minimal V1 Verification / Evidence Gate** gegen `feature/texture-lab-minimal-v1`.

Vor Freeze erforderlich: Hub-Link öffnen, lokale PNG/JPG/WebP laden, Fläche/Würfel/Kugel prüfen, Transform-/Alpha-/Hintergrund-/Lichtregler sichtbar verifizieren und bestätigen, dass keine Generator- oder Handoff-Funktion angeboten wird.
