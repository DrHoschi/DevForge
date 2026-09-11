# DevForge – Master Roadmap & Entwicklungsgrenzen

Stand: 2026-09-11

## 1. Vision
DevForge ist eine projektübergreifende Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Neue Funktionen werden in kleinen überprüfbaren Blöcken aus realen Produktionsproblemen entwickelt.

## 2. Authority Chain
- DF-04A–F: Review Foundation — `PASS / FROZEN`
- DF-HUB-01: Tool Hub Authority — `PASS / FROZEN`
- DF-05: Controlled Asset Handoff — `PASS / 0 BLOCKER / FROZEN`, Product Commit `c677f07773866dfe8f5c98dcb311ab1750538d9c`
- DF-06: Target Project Handoff Profile — `PASS / 0 BLOCKER / FROZEN`, Product Commit `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
- DF-07: Source Asset Approval Authority — `PASS / 0 BLOCKER / FROZEN`, Product Commit `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`
- DF-08: Source Asset Payload Binding — `DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`

## 3. DF-08 – Source Asset Payload Binding Foundation
Contract: `docs/DF-08_SOURCE_ASSET_PAYLOAD_BINDING_FOUNDATION_CONTRACT.md`

Definition baseline / Frozen DF-07 Product Commit:
`81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

Fachlicher Übergang:
`APPROVED IDENTITY + EXPLICIT LOCAL SOURCE PAYLOAD → IDENTITY-BOUND HANDOFF CANDIDATE → bestehendes DF-05 Manifest`

Scope:
`Explicit Local Source Payload Selection + Payload-to-Declared-Identity Binding + Approval-/Identity Compatibility + Bound Handoff Candidate`

### Contract / Documentation Reconciliation
`DF-08 CONTRACT / DOCUMENTATION RECONCILIATION – PASS / 0 BLOCKER`

DF-08 erzeugt keine Approval-Entscheidung und keine zweite Eligibility. DF-07 bleibt Approval-Autorität; DF-05 bleibt Eligibility-/Manifest-Autorität; DF-06 bleibt Target-Profile-Autorität. Hash/Fingerprint und binärer Identitätsnachweis bleiben bewusst außerhalb dieses Blocks.

### Implementation Scope Reconciliation
`DF-08 IMPLEMENTATION SCOPE RECONCILIATION – PASS / 0 BLOCKER`

Der maximale erste TESTBUILD-1-Produktscope ist:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`

Keine neue Tool-Oberfläche, keine neue Hub-Tür, kein `main.js`. Root `index.html` ist fachlich nicht erforderlich und nicht Teil des reconcilierten Produktscopes.

Die minimale UI wird innerhalb des bestehenden Controlled Asset Handoff ergänzt: expliziter lokaler Datei-Input, sichtbarer Payload-/Binding-Status und explizite Bind-Aktion.

Der minimale Laufzeitzustand hält das ausdrücklich ausgewählte Browser-`File`-Objekt lokal und bindet es bewusst an die beim Binding aktuellen Werte `assetId`, `sourceReference` und `sourceVersion`.

Die technische Verantwortung bleibt auf vier Punkte begrenzt: Payload auswählen; Binding explizit erzeugen; Binding gegen aktuelle Payload/Identity prüfen; exakte Kompatibilität mit dem aktuell gültigen DF-07 Approval Record prüfen.

Änderung der deklarierten Identität oder Auswahl eines anderen Payloads invalidiert die alte Bindung für die neue Kombination. Keine stille Approval-Übernahme.

Die Frozen-DF-05-Funktionen `validateHandoffInput(...)`, `isHandoffEligible(...)` und `buildHandoffManifest(...)` bleiben unverändert. Der DF-08-Status darf nicht als zweite Eligibility-Autorität dienen.

### TESTBUILD-1 Non-Goals
Keine Persistenz via LocalStorage/IndexedDB; kein Payload-Export oder Upload; keine GitHub-/Repository-Aktion; kein Runtime-Handoff; kein Hash/Fingerprint; keine FileReader-Inhaltsprüfung; kein Preview/Rendering; kein Batch; keine Drag&Drop-Infrastruktur; keine neuen Service-/Registry-/Datenbankdateien; keine neue Hub-Tür; keine Formatkonvertierung. Dateiname, Größe und MIME-Type sind höchstens informative Metadaten.

## 4. Spätere Capability-Grenzen
Binärer Payload-Identitätsnachweis per Hash/Fingerprint benötigt eine eigene Reconciliation. Repository-Dateiübertragung, Runtime-Handoff, persistente Asset-/Payload-Library, Batch-Workflows, Atlas-/Sprite-Produktion und Formatkonvertierung bleiben separate spätere Blöcke.

## 5. Arbeitsweise
GitHub ist Source of Truth. Kleine DF-Blöcke, klarer Baseline-/Branch-Nachweis, sichtbare Build-Kennung bei produktiven UI-/Code-Blöcken, reale Device-Gates und getrennte Freeze-Gates bleiben verbindlich. Eingefrorene Contracts werden nicht nebenbei geöffnet.

## 6. Aktueller Stand
`DF-08 – DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`

Der bestehende Branch `df-07-source-asset-approval-authority-foundation` ist weiterhin ausschließlich Dokumentationsträger. Kein DF-08-Entwicklungsbranch wurde in diesem Schritt angelegt und kein DF-08-Produktcode implementiert.

## 7. Nächster zulässiger Schritt
Ausschließlich die separate Autorisierung/Anlage eines DF-08-Entwicklungsbranches gegen den verbindlich dokumentierten Implementation Scope. Noch keine DF-08-Implementierung im selben Schritt.
