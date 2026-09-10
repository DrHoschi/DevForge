# DevForge – Project Status

Stand: 2026-09-10

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-hub-01-tool-hub-authority-workflow-reconciliation`
- DF-HUB-01 Entwicklungsbaseline: `e3aea9ea8e492b7e2c7dca474b1350461383adcd`
- Eingefrorener Produktstand vor DF-HUB-01: `17cec9ca4b399d1099be5bf4bb398a74ea27aff2`
- Eingefrorener Review-Stand: `DF-04F – PASS / 0 BLOCKER / FROZEN`
- DF-HUB-01 Contract: `docs/DF-HUB-01_TOOL_HUB_AUTHORITY_WORKFLOW_RECONCILIATION_CONTRACT.md`

# DF-04 – Asset Review Foundation
DF-04A bis DF-04F bleiben `PASS / FROZEN`. DF-HUB-01 verändert keine Dateien unter `tools/` und öffnet DF-04F nicht wieder.

Ein möglicher `Silhouette Geometry Readout` bleibt ausschließlich `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`. Kein DF-04G ist freigegeben.

# DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation
Contract-/Documentation-Reconciliation:
`PASS / 0 BLOCKER`

Implementierungsstatus:
`IMPLEMENTED / TESTBUILD 1 / REGRESSION GATE PENDING`

Sichtbare Hub-Build-Kennung:
`DF-HUB-01 · TESTBUILD 1`

Cache-Busting:
`main.js?v=dfhub01-testbuild1`

## Implementierter Umfang
- Tool-Hub-Titel auf `DevForge · Tool Hub` reconciliiert;
- alle neun inventarisierten Türen zeigen ihren autoritativen Authority-Status;
- vorhandene Workflow-Rollen werden sichtbar ausgewiesen;
- Source / Result Compare View zeigt den aktuellen Stand `DF-04F · PASS / 0 BLOCKER / FROZEN` statt des veralteten DF-04A-Testbuild-Labels;
- Prompt Builder bleibt `AVAILABLE` und suggeriert keine gelöste deterministische externe Bildgenerierung;
- Animated 3D Reference Viewer wird für die belegten DF-02F.1–F.5-Capabilities als `FROZEN / PRODUCTIVE` geführt;
- Deterministic Pose Renderer ist sichtbar `PROTOTYPE / HISTORICAL`;
- Sprite Lab ist `AVAILABLE`, ohne Atlas-Produktionsfreigabe zu behaupten;
- Atlas Builder ist sichtbar `CONSOLIDATED / REDIRECT` und bleibt eine Weiterleitung zum konsolidierten Werkzeug;
- Animation Tester und Asset Inspector sind `AVAILABLE`;
- Parameter Playground ist sichtbar `PREPARED / NOT IMPLEMENTED` und besitzt weiterhin keinen aktiven Tool-Link;
- historische, vorbereitete und konsolidierte Türen werden visuell zurückhaltender dargestellt;
- keine Capability innerhalb eines einzelnen Tools wurde verändert.

## Geänderte Produktdateien
- `index.html`
- `main.js`

Keine Datei unter `tools/` wurde geändert.

# Aktueller Gate-Status
`DF-HUB-01 – IMPLEMENTED / TESTBUILD 1 / REGRESSION GATE PENDING`

Noch kein PASS/FROZEN. Die Implementierung muss gegen den DF-HUB-01-Contract, die Entwicklungsbaseline `e3aea9ea8e492b7e2c7dca474b1350461383adcd` und die bestehenden Tool-Grenzen regressiert werden.

# Nächster zulässiger Schritt
Ausschließlich `DF-HUB-01 – Completion / Regression Gate`: vollständigen Branch-Diff gegen `e3aea9ea8e492b7e2c7dca474b1350461383adcd` prüfen, Contract-Grenzen und unveränderte `tools/`-Dateien bestätigen sowie die Hub-Darstellung auf realem Zielgerät prüfen. Erst bei `PASS / 0 BLOCKER` darf ein separater Freeze-Schritt freigegeben werden.
