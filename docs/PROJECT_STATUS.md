# DevForge – Project Status

Stand: 2026-09-11

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- DF-05 Status: `PASS / 0 BLOCKER / FROZEN`
- DF-05 Frozen Product Commit: `c677f07773866dfe8f5c98dcb311ab1750538d9c`
- DF-06 Status: `PASS / 0 BLOCKER / FROZEN`
- DF-06 Frozen Product Commit: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
- DF-07 Status: `PASS / 0 BLOCKER / FROZEN`
- DF-07 Development Branch: `df-07-source-asset-approval-authority-foundation`
- DF-07 Development Branch Authorization Baseline: `8da923bf37f5005689918382560a893ca5cf0818`
- DF-07 Frozen Product Commit: `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`
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
`PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit:
`81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

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

Frozen Produktscope:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`
- Root `index.html` ausschließlich für sichtbare `DF-07 · TESTBUILD 1`-Kennung und Cache-Busting.

`main.js` blieb außerhalb des Scopes. Keine neue Hub-Tür, keine neue eigenständige Tool-Oberfläche und keine zusätzliche Service-/Datenbank-/Registry-Schicht.

Die bestehende Handoff-Oberfläche wurde ausschließlich um einen klar getrennten Approval-Record-Bereich ergänzt. Dieser verwendet `assetId`, `sourceRef` und `sourceVersion`, verlangt eine explizite Decision und erzeugt einen Record mit exakt den fünf Contract-Mindestfeldern.

## Identity-Mismatch-Regel
Ein erzeugter Record bleibt nur bei exakter Übereinstimmung von `assetId`, `sourceReference` und `sourceVersion` anwendbar. Ändert sich mindestens einer dieser Werte, wird der Record deterministisch als `IDENTITY MISMATCH` abgelehnt und kann nicht auf DF-05 angewendet werden.

## Approval Consumption
Ein gültiger identitätsgleicher Record darf ausschließlich seine `decision` explizit auf die vorhandene DF-05-Eingabe `approvalStatus` anwenden. Danach bleibt die bestehende DF-05-Logik allein autoritativ für `ELIGIBLE` / `NOT ELIGIBLE`.

`validateHandoffInput(...)`, `isHandoffEligible(...)` und `buildHandoffManifest(...)` behalten ihre eingefrorene DF-05-Semantik.

## Persistenz-/Infrastrukturgrenze
Keine Persistenz zwischen Sessions, kein Approval-Record-Export im ersten TESTBUILD, keine Approval Registry, Asset Registry, Datenbank, User-/Role Services oder neue Framework-Schicht.

## Development Branch / Authorization
`DF-07 DEVELOPMENT BRANCH / AUTHORIZATION – PASS / 0 BLOCKER`

Der separate Branch `df-07-source-asset-approval-authority-foundation` wurde exakt von `8da923bf37f5005689918382560a893ca5cf0818` angelegt.

## TESTBUILD-1 Implementation
`DF-07 – IMPLEMENTED / TESTBUILD 1 / SCOPE CLEAN`

Frozen Product Commit:
`81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

Der Produkt-Diff blieb auf die drei freigegebenen Dateien begrenzt. Keine zusätzliche Capability wurde implementiert.

## Completion / Regression / Real Device Evidence
`DF-07 COMPLETION / REGRESSION / DEVICE GATE – PASS / 0 BLOCKER`

Reale iPhone-/Safari-Evidenz vom 2026-09-11 bestätigt:
- `DF-07 · TESTBUILD 1` im Tool Hub und Controlled Asset Handoff;
- leere Decision → `INVALID` / `decision fehlt.`;
- explizites `NOT APPROVED` → `VALID` Record mit exakt fünf Mindestfeldern;
- explizites `APPROVED` → `VALID` Record;
- APPROVED Record allein verändert DF-05 Eligibility nicht;
- erst `Decision auf DF-05 anwenden` überträgt die Decision auf `approvalStatus`;
- bei vollständigen übrigen Pflichtfeldern bestätigt DF-05 danach `ELIGIBLE`;
- Änderung `sourceVersion: TEST-V1 → TEST-V2` bei bestehendem Record → `IDENTITY MISMATCH`, alter Record nicht anwendbar;
- neuer Record für `TEST-V2` → wieder `VALID`;
- DF-05 Manifest-Erzeugung für `TEST-V2` bleibt funktionsfähig und enthält `approvalStatus: "APPROVED"`.

Der Manifest-Exportpfad wurde in DF-07 nicht verändert und war bereits im Frozen-DF-05-Gerätegate auf iPhone/Safari bestätigt. Im DF-07-Gerätegate wurde kein neuer Export-Blocker beobachtet.

## Freeze Gate
`DF-07 FREEZE GATE – PASS / 0 BLOCKER`

Freeze-Basis ist exakt Product Commit `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`. Vor dem Freeze war der Branch gegen diesen Stand `3 commits ahead / 0 behind`, Merge-Base exakt der Product Commit. Seit dem getesteten Stand waren ausschließlich Contract, PROJECT_STATUS und ROADMAP verändert. Keine Produktdatei wurde zwischen Gerätetest und Freeze verändert.

# Aktueller Gate-Status
`DF-07 – PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit:
`81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

# Nächster zulässiger Schritt
DF-07 ist geschlossen. Der nächste Schritt darf ausschließlich eine neue Capability Reconciliation gegen den Frozen DF-07 Product Commit `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e` sein. Noch keine neue Capability-Implementierung oder neuer Entwicklungsbranch im selben Schritt.
