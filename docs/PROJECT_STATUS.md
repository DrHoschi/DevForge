# DevForge – Project Status

Stand: 2026-09-10

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- DF-05 Status: `PASS / 0 BLOCKER / FROZEN`
- DF-05 Frozen Product Commit: `c677f07773866dfe8f5c98dcb311ab1750538d9c`
- DF-06 Frozen Product Commit: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
- DF-07 Development Branch: `df-07-source-asset-approval-authority-foundation`
- DF-07 Development Branch Authorization Baseline: `8da923bf37f5005689918382560a893ca5cf0818`
- DF-07 Contract: `docs/DF-07_SOURCE_ASSET_APPROVAL_AUTHORITY_FOUNDATION_CONTRACT.md`

# DF-04 – Asset Review Foundation
DF-04A bis DF-04F bleiben `PASS / FROZEN`.

# DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation
`PASS / 0 BLOCKER / FROZEN`

# DF-05 – Controlled Asset Handoff Foundation
Status:
`PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

DF-05 bleibt geschlossen. Seine Eligibility-, Approval- und Manifest-Semantik wird durch DF-07 nicht neu definiert.

# DF-06 – Target Project Handoff Profile Foundation
Status:
`PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

DF-06 erzeugt keine Approval-Autorität und bleibt geschlossen.

# DF-07 – Source Asset Approval Authority Foundation
Status:
`DEFINED / IMPLEMENTATION SCOPE RECONCILED / DEVELOPMENT BRANCH AUTHORIZED / NOT IMPLEMENTED`

Definition baseline / Frozen DF-06 Product Commit:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

Development Branch:
`df-07-source-asset-approval-authority-foundation`

Development Branch Authorization Baseline:
`8da923bf37f5005689918382560a893ca5cf0818`

Contract:
`docs/DF-07_SOURCE_ASSET_APPROVAL_AUTHORITY_FOUNDATION_CONTRACT.md`

Scope:
`Approval Record Contract + Explicit Approval Decision Contract + Approval Identity Binding Contract + Approval Consumption Contract`

Fachlicher Übergang:
`REVIEWED SOURCE ASSET + EXPLICIT IDENTITY → APPROVAL RECORD → DF-05 APPROVAL INPUT → Handoff Manifest`

## Minimaler Approval Record
Verbindliche Mindestfelder:
- `approvalRecordVersion`
- `assetId`
- `sourceReference`
- `sourceVersion`
- `decision`

Zulässige Entscheidungen:
- `APPROVED`
- `NOT APPROVED`

## Reconciled Implementation Scope
`DF-07 IMPLEMENTATION SCOPE RECONCILIATION – PASS / 0 BLOCKER`

Maximaler TESTBUILD-1-Produktscope:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`
- Root `index.html` ausschließlich für sichtbare `DF-07 · TESTBUILD 1`-Kennung und notwendiges Cache-Busting.

`main.js` ist ausdrücklich außerhalb des Scopes. Keine neue Hub-Tür, keine neue eigenständige Tool-Oberfläche und keine zusätzliche Service-/Datenbank-/Registry-Schicht.

Die bestehende Handoff-Oberfläche darf ausschließlich um einen klar getrennten Approval-Record-Bereich ergänzt werden. Dieser verwendet die vorhandenen Identitätswerte `assetId`, `sourceRef` und `sourceVersion`, verlangt eine explizite Decision und erzeugt einen Record mit exakt den fünf Contract-Mindestfeldern.

## Identity-Mismatch-Regel
Ein erzeugter Record bleibt nur bei exakter Übereinstimmung von `assetId`, `sourceReference` und `sourceVersion` anwendbar. Ändert sich mindestens einer dieser Werte, muss der Record invalidiert oder beim Anwenden deterministisch als `IDENTITY MISMATCH` abgelehnt werden.

## Approval Consumption
Ein gültiger identitätsgleicher Record darf ausschließlich seine `decision` explizit auf die vorhandene DF-05-Eingabe `approvalStatus` anwenden. Danach bleibt die bestehende DF-05-Logik allein autoritativ für `ELIGIBLE` / `NOT ELIGIBLE`.

`validateHandoffInput(...)`, `isHandoffEligible(...)` und `buildHandoffManifest(...)` behalten ihre eingefrorene DF-05-Semantik.

## Persistenz-/Infrastrukturgrenze
Keine Persistenz zwischen Sessions, kein Approval-Record-Export im ersten TESTBUILD, keine Approval Registry, Asset Registry, Datenbank, User-/Role Services oder neue Framework-Schicht.

## Development Branch / Authorization
`DF-07 DEVELOPMENT BRANCH / AUTHORIZATION – PASS / 0 BLOCKER`

Der separate Branch `df-07-source-asset-approval-authority-foundation` wurde exakt von `8da923bf37f5005689918382560a893ca5cf0818` angelegt. Dieser Stand enthält den reconcilierten DF-07-Implementation-Scope und ist die verbindliche Development Branch Authorization Baseline.

Der produktive Ausgangspunkt bleibt Frozen DF-06 `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`. Die Commits zwischen Frozen Product Commit und Authorization Baseline sind ausschließlich autorisierte Steuerdokumentation.

Es wurde in diesem Authorization Step noch kein DF-07-Produktcode implementiert.

# Aktueller Gate-Status
`DF-07 – DEFINED / IMPLEMENTATION SCOPE RECONCILED / DEVELOPMENT BRANCH AUTHORIZED / NOT IMPLEMENTED`

# Nächster zulässiger Schritt
Ausschließlich die eigentliche DF-07-Implementierung auf `df-07-source-asset-approval-authority-foundation` gegen exakt `8da923bf37f5005689918382560a893ca5cf0818` und innerhalb des freigegebenen TESTBUILD-1-Scopes.

Keine zusätzliche Capability oder Scope-Erweiterung im selben Schritt.
