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
- DF-05 Contract: `docs/DF-05_CONTROLLED_ASSET_HANDOFF_FOUNDATION_CONTRACT.md`

# DF-04 – Asset Review Foundation
DF-04A bis DF-04F bleiben `PASS / FROZEN`.

Ein möglicher `Silhouette Geometry Readout` bleibt ausschließlich `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`. Kein DF-04G ist freigegeben.

# DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation
`PASS / 0 BLOCKER / FROZEN`

DF-05 öffnet DF-HUB-01 nicht wieder. Bestehende Hub-Einträge bleiben fachlich unverändert; DF-05 darf später ausschließlich eine neue Handoff-Tür ergänzen.

# DF-05 – Controlled Asset Handoff Foundation
Status:
`DEFINED / NOT IMPLEMENTED / IMPLEMENTATION SCOPE RECONCILED / PASS / 0 BLOCKER`

Scope:
`Handoff Eligibility + Minimal Manifest Contract + Explicit Target Contract`

Fachlicher Übergang:
`APPROVED SOURCE ASSET → Handoff Manifest → explizites Ziel/Staging → später separat autorisierte Übergabe`

## Contract-Grenzen
- nur eindeutig bestimmte Source Assets mit stabiler Identität und explizitem Approval-Status dürfen Handoff-Kandidaten sein;
- `NOT APPROVED` ist nicht handoff-fähig;
- `APPROVED` darf bei ansonsten gültigen Pflichtfeldern als Handoff-Kandidat manifestiert werden;
- `targetProject` und Ziel-/Staging-Pfad müssen explizit sein;
- DF-05 behandelt ausschließlich `APPROVED SOURCE ASSET`, keine automatisch erzeugten Derived/Runtime Assets;
- gleicher autoritativer Eingang plus gleiches Handoff-Profil muss dasselbe fachliche Manifest ergeben;
- das Manifest löst keine Datei-, GitHub-, Repository- oder Runtime-Aktion aus.

## Reconciled Implementation Scope
DF-05 wird als eigenes kleines Werkzeug umgesetzt.

Maximal zulässige produktive Dateien im ersten Implementierungsschritt:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`
- `main.js` ausschließlich für einen neuen `Controlled Asset Handoff`-Hub-Eintrag mit Rolle `RUNTIME / REPOSITORY HANDOFF`
- Root `index.html` ausschließlich für notwendige DF-05-Testbuild-/Cache-Busting-Anpassung

`app.js` trägt ausschließlich die Verantwortungen Eingabevalidierung, Handoff Eligibility und deterministischen Manifest-Bau. Konzeptionelle Grenzen: `validateHandoffInput(...)`, `isHandoffEligible(...)`, `buildHandoffManifest(...)`.

Für TESTBUILD 1 darf der Approval-Status explizit eingegeben werden. Dadurch wird kein bestehender Approval-Speicher behauptet und kein neuer Approval-Workflow eingeführt.

## Nicht im Implementierungsscope
Keine Änderungen an Asset Inspector, Sprite Lab, Prompt Builder, Source / Result Compare oder anderen bestehenden Tools. Kein zusätzliches CSS-/Datenbank-/Project-Service-/Repository-Service-/Manifest-Framework-Modul. Keine GitHub-Übertragung, kein Commit/Push/PR, keine Ziel-Repository-Änderung, kein Atlas-Build/Sprite-Packing, keine Konvertierung, keine große Asset-Datenbank, kein Batch-Handoff, kein Dependency Graph, keine automatische Approval-Entscheidung/-Persistenz, keine neue Review-UI, kein Cloud Storage und keine Runtime-Integration.

# Aktueller Gate-Status
`DF-05 – IMPLEMENTATION SCOPE RECONCILIATION PASS / 0 BLOCKER / NOT IMPLEMENTED`

Der Entwicklungsbranch ist angelegt. Bis einschließlich dieses Dokumentationsschritts wurde kein DF-05-Produktcode implementiert.

# Nächster zulässiger Schritt
Ausschließlich die separate Freigabe des eigentlichen DF-05-Implementierungsschritts auf `df-05-controlled-asset-handoff-foundation` gegen den reconcilierten Scope.

Noch keine zusätzliche Capability oder Scope-Erweiterung.