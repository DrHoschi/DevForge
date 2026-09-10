# DevForge – Project Status

Stand: 2026-09-10

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Freeze-/Definitionsbranch: `df-hub-01-tool-hub-authority-workflow-reconciliation`
- Aktueller eingefrorener Produktstand: `415d44bf78be86a80c6437f6817a30a056d8ba15`
- DF-HUB-01: `PASS / 0 BLOCKER / FROZEN`
- DF-05 Definition-Baseline: `415d44bf78be86a80c6437f6817a30a056d8ba15`
- DF-05 Contract: `docs/DF-05_CONTROLLED_ASSET_HANDOFF_FOUNDATION_CONTRACT.md`

# DF-04 – Asset Review Foundation
DF-04A bis DF-04F bleiben `PASS / FROZEN`.

Ein möglicher `Silhouette Geometry Readout` bleibt ausschließlich `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`. Kein DF-04G ist freigegeben.

# DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation
`PASS / 0 BLOCKER / FROZEN`

Der eingefrorene Hub-Stand, die getestete Kennung `DF-HUB-01 · TESTBUILD 1` und `main.js?v=dfhub01-testbuild1` bleiben unverändert. DF-05 öffnet DF-HUB-01 nicht wieder.

# Capability Reconciliation nach DF-HUB-01
Gegen den eingefrorenen Stand `415d44bf78be86a80c6437f6817a30a056d8ba15` wurde als nächste kleine offene Capability-Lücke die Grenze zwischen `TECHNICAL ASSET` und `RUNTIME / REPOSITORY HANDOFF` ausgewählt.

Nicht vorgezogen werden Parameter Playground, Geometry Readout, weitere DF-04-Analyse, automatisches Atlas-Packing oder eine große persistente Asset Library.

Ausgewählter nächster Block:
`DF-05 – Controlled Asset Handoff Foundation`

# DF-05 – Controlled Asset Handoff Foundation
Status:
`DEFINED / NOT IMPLEMENTED`

Scope:
`Handoff Eligibility + Minimal Manifest Contract + Explicit Target Contract`

Fachlicher Übergang:
`APPROVED SOURCE ASSET → Handoff Manifest → explizites Ziel/Staging → später separat autorisierte Übergabe`

## Verbindliche Grenzen
- nur eindeutig bestimmte Source Assets mit stabiler Identität und explizitem Approval-Status dürfen Handoff-Kandidaten sein;
- `NOT APPROVED` ist nicht handoff-fähig;
- `APPROVED` darf als Handoff-Kandidat manifestiert werden;
- das minimale Manifest enthält Asset-/Source-/Approval-/Target-/Output-Identität;
- `targetProject` und Ziel-/Staging-Pfad müssen explizit sein;
- impliziter UI-/Session-Zustand darf kein Ziel bestimmen;
- DF-05 behandelt ausschließlich `APPROVED SOURCE ASSET`, keine automatisch erzeugten Derived/Runtime Assets;
- gleicher autoritativer Eingang plus gleiches Handoff-Profil muss dasselbe fachliche Manifest ergeben.

## Harte Non-Goals
Keine GitHub-Übertragung, kein Commit/Push/PR, keine Änderung an Ziel-Repositories, keine automatische Dateiübertragung, kein Atlas-Build/Sprite-Packing, keine Konvertierung, keine große Asset-Datenbank, kein Batch-Handoff, kein Dependency Graph, keine automatische Approval-Entscheidung, keine neue Review-UI, kein Cloud Storage und keine Runtime-Integration.

DF-04A–F und DF-HUB-01 bleiben geschlossen.

# Aktueller Gate-Status
`DF-05 – DEFINED / NOT IMPLEMENTED / DOCUMENTATION RECONCILIATION IN PROGRESS`

Es existiert noch kein DF-05-Entwicklungsbranch und keine DF-05-Implementierung.

# Nächster zulässiger Schritt
Ausschließlich `DF-05 – Contract / Documentation Reconciliation Gate`: gegen `415d44bf78be86a80c6437f6817a30a056d8ba15` prüfen, dass ausschließlich die definierte DF-05-Steuerdokumentation hinzugekommen ist und Contract, PROJECT_STATUS und ROADMAP konsistent sind.

Noch keine Branch-Anlage und keine Implementierung. Erst nach `PASS / 0 BLOCKER` darf darüber separat entschieden werden.