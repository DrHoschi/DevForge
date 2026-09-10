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
- DF-06 Contract: `docs/DF-06_TARGET_PROJECT_HANDOFF_PROFILE_FOUNDATION_CONTRACT.md`

# DF-04 – Asset Review Foundation
DF-04A bis DF-04F bleiben `PASS / FROZEN`.

Ein möglicher `Silhouette Geometry Readout` bleibt ausschließlich `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`. Kein DF-04G ist freigegeben.

# DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation
`PASS / 0 BLOCKER / FROZEN`

DF-05 hat den Hub außerhalb des eingefrorenen HUB-01-Blocks ausschließlich um `Controlled Asset Handoff` ergänzt. Bestehende HUB-01-Capabilities bleiben unverändert.

# DF-05 – Controlled Asset Handoff Foundation
Status:
`PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

Scope:
`Handoff Eligibility + Minimal Manifest Contract + Explicit Target Contract`

Fachlicher Übergang:
`APPROVED SOURCE ASSET → Handoff Manifest → explizites Ziel/Staging → später separat autorisierte Übergabe`

DF-05 bleibt geschlossen. Keine DF-06-Implementierung darf DF-05-Eligibility, Approval-Semantik, Manifest-Felder oder dessen Non-Goals verändern.

# Capability Reconciliation nach DF-05
Gegen `c677f07773866dfe8f5c98dcb311ab1750538d9c` wurde als nächste kleine offene Capability-Lücke eine wiederverwendbare, ausdrücklich ausgewählte Zielprojekt-Autorität für den Handoff erkannt.

Ausgewählt:
`DF-06 – Target Project Handoff Profile Foundation`

# DF-06 – Target Project Handoff Profile Foundation
Status:
`DEFINED / IMPLEMENTATION SCOPE RECONCILED / DEVELOPMENT BRANCH AUTHORIZED / NOT IMPLEMENTED`

Definition-Baseline:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

Reconciled Documentation Head / Development Baseline:
`825d77e4b4f320c13482b024e3b523946b1b18f7`

Development Branch:
`df-06-target-project-handoff-profile-foundation`

Scope:
`Project Profile Contract + Explicit Profile Selection Contract + Deterministic Profile Application Contract`

Fachlicher Übergang:
`EXPLICIT TARGET PROJECT PROFILE → deterministische Handoff-Vorgaben → DF-05 Minimalmanifest`

## Verbindliche Profil-Autorität
Minimale stabile Profilidentität:
- `profileVersion`
- `profileId`
- `profileName`
- `targetProject`

Zusätzlich enthält ein Profil explizite Staging-/Output-/Format-Vorgaben. Approval gehört ausdrücklich nicht zur Profil-Autorität.

## Auswahlsemantik
Ohne ausdrückliche Profilauswahl gibt es keine Profil-Autorität. Keine automatische Auswahl über Session, URL, Toolzustand, Dateiname, Asset-Typ oder Repository-Historie und kein stiller Default-Fallback.

## Deterministische Anwendung
Gleiches autoritatives Profil plus gleicher deklarierter Asset-/Handoff-Eingang muss dieselben Handoff-Vorgaben liefern. Keine Zufalls-/Timestamp-Namen, versteckten Sessionwerte oder nicht deklarierten Defaults.

## Reconciled Implementation Scope
`DF-06 IMPLEMENTATION SCOPE RECONCILIATION – PASS / 0 BLOCKER`

DF-06 TESTBUILD 1 darf produktiv maximal berühren:
- `tools/asset-handoff/index.html` – explizite Profilauswahl und sichtbare Anwendung der Profilwerte;
- `tools/asset-handoff/app.js` – getrennte Profildefinition/-anwendung, ohne Änderung der bestehenden DF-05-Semantik;
- Root `index.html` – nur für sichtbare `DF-06 · TESTBUILD 1`-Kennung und notwendiges Cache-Busting.

`main.js` braucht keine neue Hub-Tür und gehört nicht zum vorgesehenen DF-06-Produktscope.

Keine zusätzliche Service-, Datenbank-, Project-Registry- oder Preset-Framework-Datei ist freigegeben.

## Erstes reales Profil
DF-06 TESTBUILD 1 enthält genau ein reales Profil:
- `profileVersion: 1`
- `profileId: siedler-mini`
- `profileName: Siedler Mini`
- `targetProject: DrHoschi/siedler-mini`

Konkrete Staging-, Format- und Output-Namenswerte dürfen nur aus einer autoritativen bestehenden Projektquelle übernommen werden. Nicht belegte Werte dürfen nicht erfunden werden.

Keine weiteren Projektprofile gehören zum ersten Scope.

## Harte Grenzen
Keine GitHub-/Repository-/Datei-/Runtime-Aktion, keine automatische Projekterkennung, keine Approval-Entscheidung oder -Persistenz, keine große Project-/Asset-Datenbank, kein Batch-Handoff, Dependency Graph, Atlas-Build, Sprite-Packing, Konverter, Parameter Playground oder neue Review-Funktion.

# Branch-Autorisierung
Der bereits existierende Branch `df-06-target-project-handoff-profile-foundation` ist ab jetzt ausdrücklich als DF-06-Entwicklungsbranch autorisiert.

Autorisierte Entwicklungsbaseline:
`825d77e4b4f320c13482b024e3b523946b1b18f7`

Die vorzeitige technische Branch-Anlage vor dieser Freigabe gilt nicht als frühere Implementierungsfreigabe und ändert die autorisierte Baseline nicht.

# Aktueller Gate-Status
`DF-06 – DEFINED / IMPLEMENTATION SCOPE RECONCILED / DEVELOPMENT BRANCH AUTHORIZED / NOT IMPLEMENTED`

# Nächster zulässiger Schritt
Ausschließlich die eigentliche DF-06-Implementierung auf `df-06-target-project-handoff-profile-foundation` gegen den verbindlich festgehaltenen Scope.

Keine zusätzliche Capability oder Scope-Erweiterung im selben Schritt.