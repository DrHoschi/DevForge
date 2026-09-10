# DevForge – Project Status

Stand: 2026-09-10

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Autoritativer Frozen Product Stand: `c677f07773866dfe8f5c98dcb311ab1750538d9c`
- DF-05 Branch: `df-05-controlled-asset-handoff-foundation`
- DF-05 Status: `PASS / 0 BLOCKER / FROZEN`
- DF-06 Development Branch: `df-06-target-project-handoff-profile-foundation`
- DF-06 Development Baseline: `825d77e4b4f320c13482b024e3b523946b1b18f7`
- DF-06 Implementation Head: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
- DF-06 Contract: `docs/DF-06_TARGET_PROJECT_HANDOFF_PROFILE_FOUNDATION_CONTRACT.md`

# DF-04 – Asset Review Foundation
DF-04A bis DF-04F bleiben `PASS / FROZEN`.

# DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation
`PASS / 0 BLOCKER / FROZEN`

DF-05 hat den Hub außerhalb des eingefrorenen HUB-01-Blocks ausschließlich um `Controlled Asset Handoff` ergänzt. Bestehende HUB-01-Capabilities bleiben unverändert.

# DF-05 – Controlled Asset Handoff Foundation
Status:
`PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

DF-05 bleibt geschlossen. DF-06 verändert dessen Eligibility-, Approval- und Manifest-Semantik nicht.

# DF-06 – Target Project Handoff Profile Foundation
Status:
`IMPLEMENTED / TESTBUILD 1 / COMPLETION + REGRESSION + DEVICE GATE PASS / 0 BLOCKER / NOT FROZEN`

Definition-Baseline:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

Reconciled Documentation Head / Development Baseline:
`825d77e4b4f320c13482b024e3b523946b1b18f7`

Implementation Head:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

Development Branch:
`df-06-target-project-handoff-profile-foundation`

Scope:
`Project Profile Contract + Explicit Profile Selection Contract + Deterministic Profile Application Contract`

Fachlicher Übergang:
`EXPLICIT TARGET PROJECT PROFILE → deterministische Handoff-Vorgaben → DF-05 Minimalmanifest`

## Implementierter Produktscope
DF-06 TESTBUILD 1 hat ausschließlich folgende Produktdateien verändert:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`
- Root `index.html`

`main.js` wurde nicht verändert; keine neue Hub-Tür wurde angelegt. Keine zusätzlichen Service-, Datenbank-, Project-Registry- oder Preset-Framework-Dateien wurden eingeführt.

## Erstes reales Profil
Genau ein reales Profil ist implementiert:
- `profileVersion: 1`
- `profileId: siedler-mini`
- `profileName: Siedler Mini`
- `targetProject: DrHoschi/siedler-mini`
- `stagingPath: assets/characters/`
- `format: png`
- `outputFilename: carrier.png`

Ohne ausdrückliche Auswahl besteht keine Profil-Autorität.

## Device-/Regression-Evidenz
Realer Gerätetest auf Apple/Safari vom 2026-09-10 bestätigt:
- sichtbare `DF-06 · TESTBUILD 1`-Kennung;
- keine automatische Profilauswahl;
- explizite Auswahl `Siedler Mini` funktioniert;
- die vier Zielwerte werden korrekt in die bestehenden DF-05-Felder übernommen;
- die Profilwerte sind sichtbar und konsistent;
- der bestehende DF-05-Handoff-Workflow bleibt verwendbar;
- keine zusätzliche Repository-/Runtime-Aktion oder Capability wurde eingeführt.

Der Nutzer hat das vollständige `DF-06 Completion / Regression / Device Gate` ausdrücklich als `PASS / 0 BLOCKER` bestätigt.

## Harte Grenzen
Keine GitHub-/Repository-/Datei-/Runtime-Aktion, keine automatische Projekterkennung, keine Approval-Entscheidung oder -Persistenz, keine große Project-/Asset-Datenbank, kein Batch-Handoff, Dependency Graph, Atlas-Build, Sprite-Packing, Konverter, Parameter Playground oder neue Review-Funktion.

# Aktueller Gate-Status
`DF-06 – IMPLEMENTED / TESTBUILD 1 / COMPLETION + REGRESSION + DEVICE GATE PASS / 0 BLOCKER / NOT FROZEN`

# Nächster zulässiger Schritt
Ausschließlich das `DF-06 Freeze Gate` gegen Implementation Head `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`: vollständigen Produktdiff und dokumentierte Device-Evidenz prüfen und den Produktstand nur bei weiterhin sauberem Scope einfrieren.

Noch keine neue Capability, kein zusätzlicher Profilumfang und keine Produktänderung im selben Schritt.