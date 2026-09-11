# DevForge – Project Status

Stand: 2026-09-11

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- DF-05: `PASS / 0 BLOCKER / FROZEN` — `c677f07773866dfe8f5c98dcb311ab1750538d9c`
- DF-06: `PASS / 0 BLOCKER / FROZEN` — `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
- DF-07: `PASS / 0 BLOCKER / FROZEN` — `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`
- DF-08: `DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`
- DF-08 Definition Baseline: `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`
- DF-08 Contract: `docs/DF-08_SOURCE_ASSET_PAYLOAD_BINDING_FOUNDATION_CONTRACT.md`
- Documentation carrier branch: `df-07-source-asset-approval-authority-foundation`

# Frozen Foundations
DF-04A–F und DF-HUB-01 bleiben `PASS / FROZEN`. DF-05 bleibt alleinige Eligibility-/Manifest-Autorität. DF-06 bleibt Target-Project-Profile-Autorität. DF-07 bleibt alleinige Approval-Autorität. Keine dieser eingefrorenen Semantiken wird durch DF-08 geöffnet.

# DF-08 – Source Asset Payload Binding Foundation
Status: `DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`

Definition baseline / Frozen DF-07 Product Commit:
`81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

Fachlicher Übergang:
`APPROVED IDENTITY + EXPLICIT LOCAL SOURCE PAYLOAD → IDENTITY-BOUND HANDOFF CANDIDATE → bestehendes DF-05 Manifest`

## Contract / Documentation Reconciliation
`DF-08 CONTRACT / DOCUMENTATION RECONCILIATION – PASS / 0 BLOCKER`

Explizite Payload-Auswahl, Bindung an `assetId + sourceReference + sourceVersion`, exakte DF-07-Approval-Kompatibilität, bewusst offene Hash/Fingerprint-Grenze und harte Non-Goals sind widerspruchsfrei.

## Implementation Scope Reconciliation
`DF-08 IMPLEMENTATION SCOPE RECONCILIATION – PASS / 0 BLOCKER`

Maximaler erster TESTBUILD-1-Produktscope:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`

Keine neue Tool-Oberfläche und keine neue Hub-Tür. `main.js` bleibt außerhalb des Scopes. Root `index.html` ist fachlich nicht erforderlich und gehört nicht zum reconcilierten Produktscope.

Die bestehende Controlled-Asset-Handoff-Oberfläche erhält später ausschließlich eine klar getrennte Source-Payload-Binding-Fläche mit lokalem Datei-Input, sichtbarem Binding-Status und expliziter Bind-Aktion.

Der Browser darf das ausdrücklich gewählte `File`-Objekt ausschließlich im lokalen Laufzeitzustand halten. Die Bindung ordnet dieses File bewusst der zum Bindungszeitpunkt deklarierten Kombination aus `assetId`, `sourceReference` und `sourceVersion` zu.

Die Implementierung muss vier Verantwortlichkeiten getrennt halten: explizite Payload-Auswahl; explizite Binding-Erzeugung; Prüfung der aktuellen Payload-/Identity-Übereinstimmung; Prüfung der exakten Kompatibilität mit dem aktuell gültigen DF-07 Approval Record.

Änderung eines Identity-Feldes oder Auswahl eines anderen Payloads darf die alte Bindung nicht still weiterführen. Ein neuer Payload übernimmt keine alte Approval-Autorität automatisch.

`validateHandoffInput(...)`, `isHandoffEligible(...)` und `buildHandoffManifest(...)` bleiben unverändert. Der DF-08-Binding-Status ist keine zweite Eligibility-Autorität. DF-07 bleibt alleinige Approval-Autorität.

## TESTBUILD-1 Non-Goals
Keine Persistenz via LocalStorage/IndexedDB, kein Payload-Export, Upload, GitHub API, Repository-Transfer, Hash/Fingerprint, FileReader-Inhaltsprüfung, Preview/Rendering, Batch, Drag&Drop-Infrastruktur, neue Service-/Registry-/Datenbankdateien oder neue Hub-Tür. Dateiname, Größe und MIME-Type dürfen höchstens informativ sein und erzeugen keine fachliche Identität.

# Aktueller Gate-Status
`DF-08 – DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`

Bis einschließlich dieses Dokumentationsschritts wurde kein DF-08-Produktcode verändert und kein DF-08-Entwicklungsbranch angelegt.

# Nächster zulässiger Schritt
Ausschließlich die separate Autorisierung/Anlage eines DF-08-Entwicklungsbranches gegen den verbindlich dokumentierten Scope. Noch keine DF-08-Implementierung im selben Schritt.
