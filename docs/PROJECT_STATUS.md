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
- DF-06 Documentation Branch: `df-06-target-project-handoff-profile-foundation`
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

DF-05 bleibt geschlossen. Keine DF-06-Definition darf DF-05-Eligibility, Approval-Semantik, Manifest-Felder oder dessen Non-Goals verändern.

# Capability Reconciliation nach DF-05
Gegen `c677f07773866dfe8f5c98dcb311ab1750538d9c` wurde als nächste kleine offene Capability-Lücke eine wiederverwendbare, ausdrücklich ausgewählte Zielprojekt-Autorität für den Handoff erkannt.

Ausgewählter Kandidat:
`DF-06 – Target Project Handoff Profile Foundation`

Nicht vorgezogen werden große Asset-/Project-Datenbank, Parameter Playground, automatische Projekterkennung, Repository-Transfer, Atlas-Produktion, Konvertierung oder neuer Review-/Approval-Workflow.

# DF-06 – Target Project Handoff Profile Foundation
Status:
`DEFINED / NOT IMPLEMENTED`

Definition-Baseline:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

Scope:
`Project Profile Contract + Explicit Profile Selection Contract + Deterministic Profile Application Contract`

Fachlicher Übergang:
`EXPLICIT TARGET PROJECT PROFILE → deterministische Handoff-Vorgaben → DF-05 Minimalmanifest`

## Verbindliche Profil-Autorität
Ein Profil ist nur eine deklarierte, versionierbare Eingabe für Handoff-Vorgaben und keine automatische Projekterkennung.

Minimale stabile Profilidentität:
- `profileVersion`
- `profileId`
- `profileName`
- `targetProject`

Zusätzlich muss ein Profil explizite Staging-/Output-/Format-Vorgaben enthalten, soweit sie für den jeweiligen realen Workflow benötigt werden.

## Auswahlsemantik
Ohne ausdrückliche Profilauswahl gibt es keine Profil-Autorität.

Nicht zulässig sind automatische Auswahl über vorherige Session, zuletzt verwendetes Projekt, URL, Toolzustand, Dateiname, Asset-Typ oder Repository-Historie sowie ein stiller Default-Fallback.

## Deterministische Anwendung
Gleiches autoritatives Profil plus gleicher deklarierter Asset-/Handoff-Eingang muss dieselben Handoff-Vorgaben liefern.

Keine zufälligen oder timestampabhängigen Outputnamen, keine versteckten Sessionwerte und keine nicht deklarierten Defaults.

## Harte Grenzen
DF-06 führt keine GitHub-/Repository-/Datei-/Runtime-Aktion aus, entscheidet kein Approval, persistiert keinen Approval-Status und baut keine große Project-/Asset-Datenbank, keinen Batch-Handoff, Dependency Graph, Atlas, Konverter oder neue Review-Funktion.

Ein konkretes erstes Profil für `DrHoschi/siedler-mini` ist durch die Definition noch nicht implementiert.

# Dokumentationskorrektur
Der README-Drift nach DF-05 wurde im selben reinen Dokumentationsschritt reconciliiert. README beschreibt nun DF-05 als FROZEN und DF-06 als `DEFINED / NOT IMPLEMENTED`.

Der versehentlich vorzeitig angelegte Branch `df-06-target-project-handoff-profile-foundation` wird bis zu einer separaten Entwicklungsfreigabe ausschließlich als Dokumentationsbranch behandelt. Seine Existenz gilt nicht als Implementierungsfreigabe.

# Aktueller Gate-Status
`DF-06 – DEFINED / NOT IMPLEMENTED / DOCUMENTATION RECONCILIATION PENDING`

# Nächster zulässiger Schritt
Ausschließlich `DF-06 Contract / Documentation Reconciliation Gate`: Contract, PROJECT_STATUS, ROADMAP und README gegen Frozen Product Commit `c677f07773866dfe8f5c98dcb311ab1750538d9c` auf fachliche Konsistenz, vollständige Scope-/Non-Goal-Grenzen und reinen Dokumentationsumfang prüfen.

Noch keine DF-06-Implementierung. Erst nach `PASS / 0 BLOCKER` darf separat entschieden werden, ob der bereits existierende Branch als Entwicklungsbranch weiterverwendet oder ein neuer Entwicklungsbranch vom reconcilierten Dokumentationsstand angelegt wird.