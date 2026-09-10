# DevForge – Project Status

Stand: 2026-09-10

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-05-controlled-asset-handoff-foundation`
- Aktueller eingefrorener Produktstand vor DF-05: `415d44bf78be86a80c6437f6817a30a056d8ba15`
- DF-HUB-01: `PASS / 0 BLOCKER / FROZEN`
- DF-05 Definition-Baseline: `415d44bf78be86a80c6437f6817a30a056d8ba15`
- DF-05 reconciled documentation baseline: `14973c69f667873c16eedf33c1382274d89d37e9`
- DF-05 Implementation Head: `22f8a59af510c508f0cbc5153a5af583ce352299`
- DF-05 Contract: `docs/DF-05_CONTROLLED_ASSET_HANDOFF_FOUNDATION_CONTRACT.md`

# DF-04 – Asset Review Foundation
DF-04A bis DF-04F bleiben `PASS / FROZEN`.

Ein möglicher `Silhouette Geometry Readout` bleibt ausschließlich `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`. Kein DF-04G ist freigegeben.

# DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation
`PASS / 0 BLOCKER / FROZEN`

DF-05 öffnet DF-HUB-01 nicht wieder. Bestehende Hub-Einträge bleiben fachlich unverändert; DF-05 ergänzt ausschließlich die neue Handoff-Tür.

# DF-05 – Controlled Asset Handoff Foundation
Status:
`IMPLEMENTED / TESTBUILD 1 / COMPLETION + REAL DEVICE REGRESSION PASS / 0 BLOCKER / NOT FROZEN`

Scope:
`Handoff Eligibility + Minimal Manifest Contract + Explicit Target Contract`

Fachlicher Übergang:
`APPROVED SOURCE ASSET → Handoff Manifest → explizites Ziel/Staging → später separat autorisierte Übergabe`

## Implementierter Scope
Produktiv wurden ausschließlich umgesetzt:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`
- `main.js` ausschließlich für den neuen `Controlled Asset Handoff`-Hub-Eintrag mit Rolle `RUNTIME / REPOSITORY HANDOFF`
- Root `index.html` ausschließlich für sichtbare `DF-05 · TESTBUILD 1`-/Cache-Busting-Anpassung

`app.js` bleibt auf Eingabevalidierung, Handoff Eligibility und deterministischen Manifest-Bau begrenzt. Keine GitHub-, Repository-, Datei- oder Runtime-Übertragung wurde eingeführt.

## Completion / Device Evidence – 2026-09-10
Realer iPhone-/Safari-Test gegen `DF-05 · TESTBUILD 1`:
1. Build-Kennung sichtbar – PASS;
2. Tool erreichbar und Rücknavigation zum Hub funktioniert – PASS;
3. fehlende Pflichtfelder → `NOT ELIGIBLE`, Manifest gesperrt – PASS;
4. vollständige Daten + `NOT APPROVED` → weiterhin `NOT ELIGIBLE` – PASS;
5. nur Wechsel auf `APPROVED` → `ELIGIBLE`, Manifest-Erzeugung aktiv – PASS;
6. Manifest enthält alle vertraglichen Mindestfelder – PASS;
7. identische Eingaben erzeugen erneut identischen Manifest-Inhalt – PASS;
8. JSON-Export funktioniert in Safari; keine GitHub-/Repository-/Runtime-Aktion – PASS.

Exportierter Testdatensatz:
`TEST-001-handoff.json` mit `assetId=TEST-001`, `assetType=CHARACTER`, `targetProject=DrHoschi/siedler-mini`, Source `carrier-test.png` / `TEST-V1`, `approvalStatus=APPROVED`, `stagingPath=assets/test/`, `outputFilename=carrier-test.png`, `format=png`.

## Scope-/Regression-Grenzen
Keine Änderungen an Asset Inspector, Sprite Lab, Prompt Builder, Source / Result Compare oder anderen bestehenden Tools. Kein zusätzlicher Service-/Datenbank-/Framework-Unterbau. Keine Änderung an `DrHoschi/siedler-mini`.

# Aktueller Gate-Status
`DF-05 – COMPLETION + REAL DEVICE REGRESSION PASS / 0 BLOCKER / NOT FROZEN`

# Nächster zulässiger Schritt
Ausschließlich der separate `DF-05 Freeze Gate`: vollständigen Branch-Diff gegen den reconcilierten Implementation Scope prüfen und nur bei weiterhin `PASS / 0 BLOCKER` einfrieren.

Noch keine neue Capability oder Scope-Erweiterung.