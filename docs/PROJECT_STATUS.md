# DevForge – Project Status

Stand: 2026-09-10

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- DF-05 Status: `PASS / 0 BLOCKER / FROZEN`
- DF-05 Frozen Product Commit: `c677f07773866dfe8f5c98dcb311ab1750538d9c`
- DF-06 Branch: `df-06-target-project-handoff-profile-foundation`
- DF-06 Frozen Product Commit: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
- DF-06 Contract: `docs/DF-06_TARGET_PROJECT_HANDOFF_PROFILE_FOUNDATION_CONTRACT.md`
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

Scope:
`Project Profile Contract + Explicit Profile Selection Contract + Deterministic Profile Application Contract`

Der Frozen Product Stand enthält genau ein reales explizit auswählbares `Siedler Mini`-Profil. DF-06 erzeugt keine Approval-Autorität und führt keine Repository-/Datei-/Runtime-Aktion aus.

# Capability Reconciliation nach DF-06
Gegen Frozen DF-06 `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec` wurde als nächste kleine Capability-Lücke die fehlende explizite, identitätsgebundene Source-Asset-Freigabe zwischen Review und bestehender DF-05-Approval-Grenze identifiziert.

Ausgewählt:
`DF-07 – Source Asset Approval Authority Foundation`

# DF-07 – Source Asset Approval Authority Foundation
Status:
`DEFINED / NOT IMPLEMENTED`

Definition baseline:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

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

Zulässige Entscheidungen im ersten Contract:
- `APPROVED`
- `NOT APPROVED`

## Identity Binding
Eine Entscheidung gilt ausschließlich für die deklarierte Kombination aus `assetId`, `sourceReference` und `sourceVersion`. Eine geänderte Source oder Version erbt keine frühere Freigabe automatisch.

## Approval-Grenze
Eine Entscheidung muss ausdrücklich gesetzt werden. Review-Ansicht, technischer Check, Difference/Silhouette/Geometry, Score, KI, Profilwahl oder Manifest-Erzeugung dürfen keine automatische Freigabe erzeugen.

DF-07 darf einen gültigen identitätsgebundenen Record an die bestehende DF-05-Approval-Eingabegrenze liefern, führt aber keine zweite Eligibility-Autorität ein.

## Persistenzgrenze
DF-07 definiert in diesem Schritt keine Persistenzarchitektur und keine große Asset-/Approval-Datenbank. Die minimale technische Form gehört erst in eine spätere Implementation Scope Reconciliation.

## Harte Non-Goals
Keine GitHub-/Repository-/Datei-/Runtime-Aktion, keine große Asset Library/Approval Database, kein Benutzer-/Rollensystem, keine Signaturen, keine Approval-Historie, kein Batch-Approval, keine automatische oder KI-basierte Freigabe, keine automatische Identitätserkennung, keine Änderung an DF-04A–F, DF-05 oder DF-06, kein Atlas-Build/Sprite-Packing und keine Konvertierung.

## Documentation Boundary
Die DF-07-Definition wird auf dem bestehenden `df-06-target-project-handoff-profile-foundation` ausschließlich dokumentiert. Dieser Branch ist dadurch nicht als DF-07-Entwicklungsbranch autorisiert. Es wurde kein neuer Entwicklungsbranch angelegt.

# Aktueller Gate-Status
`DF-07 – DEFINED / NOT IMPLEMENTED`

# Nächster zulässiger Schritt
Ausschließlich das `DF-07 Contract / Documentation Reconciliation Gate` gegen Frozen DF-06 Product Commit `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`.

Dabei Scope, Mindestfelder, Identity Binding, Beziehung zu DF-04/05/06, README-Sync und harte Non-Goals auf Widerspruchsfreiheit prüfen.

Noch keine DF-07-Implementierung, keine Implementation Scope Reconciliation und kein neuer Entwicklungsbranch im selben Schritt.
