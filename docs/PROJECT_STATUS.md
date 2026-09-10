# DevForge – Project Status

Stand: 2026-09-10

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Autoritativer Frozen Product Stand vor DF-06: `c677f07773866dfe8f5c98dcb311ab1750538d9c`
- DF-05 Branch: `df-05-controlled-asset-handoff-foundation`
- DF-05 Status: `PASS / 0 BLOCKER / FROZEN`
- DF-06 Branch: `df-06-target-project-handoff-profile-foundation`
- DF-06 Development Baseline: `825d77e4b4f320c13482b024e3b523946b1b18f7`
- DF-06 Frozen Product Commit: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
- DF-06 Contract: `docs/DF-06_TARGET_PROJECT_HANDOFF_PROFILE_FOUNDATION_CONTRACT.md`

# DF-04 – Asset Review Foundation
DF-04A bis DF-04F bleiben `PASS / FROZEN`.

# DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation
`PASS / 0 BLOCKER / FROZEN`

# DF-05 – Controlled Asset Handoff Foundation
Status:
`PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

DF-05 bleibt geschlossen. DF-06 verändert dessen Eligibility-, Approval- und Manifest-Semantik nicht.

# DF-06 – Target Project Handoff Profile Foundation
Status:
`PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

Development Baseline:
`825d77e4b4f320c13482b024e3b523946b1b18f7`

Branch:
`df-06-target-project-handoff-profile-foundation`

Scope:
`Project Profile Contract + Explicit Profile Selection Contract + Deterministic Profile Application Contract`

Fachlicher Übergang:
`EXPLICIT TARGET PROJECT PROFILE → deterministische Handoff-Vorgaben → DF-05 Minimalmanifest`

## Frozen Produktscope
DF-06 TESTBUILD 1 verändert produktiv ausschließlich:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`
- Root `index.html` für Build-Kennung/Cache-Busting.

`main.js` blieb unverändert; keine neue Hub-Tür und keine zusätzliche Infrastrukturdatei wurden eingeführt.

## Erstes reales Profil
Genau ein reales Profil ist Bestandteil des Frozen Product Standes:
- `profileVersion: 1`
- `profileId: siedler-mini`
- `profileName: Siedler Mini`
- `targetProject: DrHoschi/siedler-mini`
- `stagingPath: assets/characters/`
- `format: png`
- `outputFilename: carrier.png`

Ohne ausdrückliche Auswahl besteht keine Profil-Autorität.

## Device-/Regression-Evidenz
`DF-06 Completion / Regression / Device Gate = PASS / 0 BLOCKER`

Realer Apple-/Safari-Test vom 2026-09-10 bestätigt die sichtbare `DF-06 · TESTBUILD 1`-Kennung, keine automatische Profilauswahl, explizite Auswahl `Siedler Mini`, korrekte Übernahme der vier Zielwerte in die bestehenden DF-05-Felder und den weiterhin verwendbaren DF-05-Handoff-Workflow.

## Freeze Gate
`DF-06 Freeze Gate = PASS / 0 BLOCKER / FROZEN`

Der Produktdiff von `825d77e4b4f320c13482b024e3b523946b1b18f7` bis `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec` wurde erneut geprüft. Merge-Base ist exakt die autorisierte Entwicklungsbaseline. Der produktive Diff liegt vollständig innerhalb des freigegebenen Scopes.

Der getestete Commit `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec` ist damit der verbindliche DF-06 Frozen Product Commit. Die Freeze-Dokumentation danach verändert keine Produktdatei.

## Harte Grenzen
Keine GitHub-/Repository-/Datei-/Runtime-Aktion, keine automatische Projekterkennung, keine Approval-Entscheidung oder -Persistenz, keine große Project-/Asset-Datenbank, kein Batch-Handoff, Dependency Graph, Atlas-Build, Sprite-Packing, Konverter, Parameter Playground oder neue Review-Funktion.

# Aktueller Gate-Status
`DF-06 – PASS / 0 BLOCKER / FROZEN`

# Nächster zulässiger Schritt
Ausschließlich eine neue Capability Reconciliation gegen den eingefrorenen DF-06-Produktstand `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`.

Noch keine neue Implementierung im selben Schritt.