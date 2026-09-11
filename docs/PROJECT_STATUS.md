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
- DF-07 Frozen Product Commit: `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`
- DF-07 Contract: `docs/DF-07_SOURCE_ASSET_APPROVAL_AUTHORITY_FOUNDATION_CONTRACT.md`
- DF-08 Status: `DEFINED / NOT IMPLEMENTED`
- DF-08 Definition Baseline: `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`
- DF-08 Contract: `docs/DF-08_SOURCE_ASSET_PAYLOAD_BINDING_FOUNDATION_CONTRACT.md`

# DF-04 – Asset Review Foundation
DF-04A bis DF-04F bleiben `PASS / FROZEN`.

# DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation
`PASS / 0 BLOCKER / FROZEN`

# DF-05 – Controlled Asset Handoff Foundation
Status: `PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit: `c677f07773866dfe8f5c98dcb311ab1750538d9c`

DF-05 bleibt geschlossen. Seine Eligibility-, Approval- und Manifest-Semantik wird nicht neu definiert.

# DF-06 – Target Project Handoff Profile Foundation
Status: `PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

DF-06 bleibt geschlossen und erzeugt keine Approval- oder Payload-Autorität.

# DF-07 – Source Asset Approval Authority Foundation
Status: `PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit: `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

Contract: `docs/DF-07_SOURCE_ASSET_APPROVAL_AUTHORITY_FOUNDATION_CONTRACT.md`

Scope: `Approval Record Contract + Explicit Approval Decision Contract + Approval Identity Binding Contract + Approval Consumption Contract`

Fachlicher Übergang:
`REVIEWED SOURCE ASSET + EXPLICIT IDENTITY → APPROVAL RECORD → DF-05 APPROVAL INPUT → Handoff Manifest`

Der Frozen Stand bindet eine explizite Decision an `assetId`, `sourceReference` und `sourceVersion`, lehnt geänderte Identitäten deterministisch als `IDENTITY MISMATCH` ab und darf die Decision ausschließlich explizit auf die vorhandene DF-05-Eingabe `approvalStatus` anwenden. DF-05 bleibt danach allein autoritativ für Eligibility und Manifest.

Completion / Regression / Real Device Gate und Freeze Gate sind `PASS / 0 BLOCKER`. DF-07 ist geschlossen.

# Post-DF-07 Capability Reconciliation
`POST-DF-07 CAPABILITY RECONCILIATION – PASS / 0 PRODUCT BLOCKER`

Ausgewählte nächste Capability:
`DF-08 – Source Asset Payload Binding Foundation`

Reale Lücke des Frozen DF-07-Stands: Die bestehende Kette beschreibt und genehmigt eine deklarierte Source-Identität, hält aber noch keinen ausdrücklich ausgewählten tatsächlichen lokalen Source-Payload als identitätsgebundenen Handoff-Kandidaten.

# DF-08 – Source Asset Payload Binding Foundation
Status:
`DEFINED / NOT IMPLEMENTED`

Definition baseline / Frozen DF-07 Product Commit:
`81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

Contract:
`docs/DF-08_SOURCE_ASSET_PAYLOAD_BINDING_FOUNDATION_CONTRACT.md`

Documentation carrier branch:
`df-07-source-asset-approval-authority-foundation`

Dieser Branch dient im Definition-Step ausschließlich als Dokumentationsträger und ist kein DF-08-Entwicklungsbranch.

## Scope
DF-08 umfasst ausschließlich:
- Explicit Local Source Payload Selection Contract;
- Payload-to-Declared-Identity Binding Contract;
- Approval-/Identity Compatibility Contract;
- Bound Handoff Candidate Contract an der bestehenden DF-05-/DF-07-Grenze.

Fachlicher Übergang:
`APPROVED IDENTITY + EXPLICIT LOCAL SOURCE PAYLOAD → IDENTITY-BOUND HANDOFF CANDIDATE → bestehendes DF-05 Manifest`

## Explicit Payload Selection
Ein tatsächlicher lokaler Source-Payload muss ausdrücklich vom Benutzer ausgewählt werden. Ein eingegebener Dateiname oder `sourceReference`, ein zuletzt verwendeter Browser-/Sessionzustand, ein Projektprofil oder Repository-Historie ersetzt keine explizite Payload-Auswahl.

## Payload / Identity Binding
Der ausgewählte Payload wird ausschließlich an die aktuell deklarierte Kombination aus `assetId`, `sourceReference` und `sourceVersion` gebunden. Ändert sich mindestens einer dieser Werte oder wird ein anderer Payload gewählt, gilt die alte Bindung nicht still weiter.

## Approval-/Identity-Grenze
Ein gebundener Payload darf nur dann als Handoff-Kandidat gelten, wenn seine deklarierte Identität exakt mit einem aktuell gültigen DF-07 Approval Record übereinstimmt. DF-08 erzeugt keine Approval-Entscheidung und darf `IDENTITY MISMATCH` nicht umgehen.

DF-07 bleibt alleinige Approval-Autorität. DF-05 bleibt alleinige Eligibility-/Manifest-Autorität.

## Payload-Identitätsgrenze
DF-08 führt im Contract noch keinen verpflichtenden Content-Hash, Fingerprint oder kryptografischen Dateinachweis ein. Eine spätere binäre Identitätsprüfung benötigt eine separate Reconciliation.

Dateiname, Dateigröße, MIME-Type oder Inhalt dürfen in DF-08 nicht still eine neue fachliche Source-Identität erzeugen.

## Persistenz-/Infrastrukturgrenze
Noch keine Payload Library, Asset Registry, Upload Registry, Datenbank oder andere persistente Infrastruktur. Die minimale technische Form eines ersten TESTBUILDs wird erst in einer späteren Implementation Scope Reconciliation festgelegt.

## Harte Non-Goals
Keine GitHub-API-Schreibaktion, kein Commit/Push/PR, keine Dateiübertragung nach `siedler-mini` oder andere Ziel-Repositories, kein Runtime-Handoff, kein automatischer Repository-Download, keine große Asset-/Payload-Library oder Datenbank, kein Batch-Handoff, keine automatische Payload-Auswahl, keine automatische Approval-Entscheidung, keine stille Approval-Übernahme auf neue Payloads, keine automatische Identitätserkennung, kein verpflichtender Hash/Fingerprint, keine Signaturen, Benutzer/Rollen oder Historien, kein Atlas/Sprite-Packing, keine Formatkonvertierung und keine Änderung an DF-04/05/06/07.

# Aktueller Gate-Status
`DF-08 – DEFINED / NOT IMPLEMENTED`

Autoritativer Frozen Product Stand:
`81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

In diesem Definition-Step wurde kein Produktcode verändert und kein DF-08-Entwicklungsbranch angelegt.

# Nächster zulässiger Schritt
Ausschließlich das `DF-08 Contract / Documentation Reconciliation Gate` gegen Frozen DF-07 Product Commit `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`.

Dabei sind Scope, explizite Payload-Auswahl, Payload-/Identity-Bindung, Approval-Kompatibilität, Grenzen zu DF-05/06/07, Payload-Identitätsgrenze und harte Non-Goals auf Widerspruchsfreiheit zu prüfen.

Noch keine DF-08 Implementation Scope Reconciliation, keine Code-Implementierung und kein DF-08-Entwicklungsbranch im selben Schritt.
