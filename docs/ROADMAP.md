# DevForge – Master Roadmap & Entwicklungsgrenzen

Stand: 2026-09-12

## 1. Vision
DevForge ist eine projektübergreifende Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Neue Funktionen werden in kleinen überprüfbaren Blöcken aus realen Produktionsproblemen entwickelt.

## 2. Authority Chain
- DF-04A–F: Review Foundation — `PASS / FROZEN`
- DF-HUB-01: Tool Hub Authority — `PASS / FROZEN`
- DF-05: Controlled Asset Handoff — `PASS / 0 BLOCKER / FROZEN`, Product Commit `c677f07773866dfe8f5c98dcb311ab1750538d9c`
- DF-06: Target Project Handoff Profile — `PASS / 0 BLOCKER / FROZEN`, Product Commit `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
- DF-07: Source Asset Approval Authority — `PASS / 0 BLOCKER / FROZEN`, Product Commit `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`
- DF-08: Source Asset Payload Binding — `PASS / 0 BLOCKER / FROZEN`, Product Commit `2c08b275f999f7467d5eb62a17515f39283b1f25`
- DF-09: Source Asset Payload Fingerprint — `DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`

## 3. DF-08 – Source Asset Payload Binding Foundation
Contract: `docs/DF-08_SOURCE_ASSET_PAYLOAD_BINDING_FOUNDATION_CONTRACT.md`

Definition baseline / Frozen DF-07 Product Commit:
`81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

Development Branch:
`df-08-source-asset-payload-binding-foundation`

Branch Authorization / Implementation Baseline:
`6cbaac377a3080ad472adecb694d14716426d52b`

Frozen Product Commit:
`2c08b275f999f7467d5eb62a17515f39283b1f25`

Fachlicher Übergang:
`APPROVED IDENTITY + EXPLICIT LOCAL SOURCE PAYLOAD → IDENTITY-BOUND HANDOFF CANDIDATE → bestehendes DF-05 Manifest`

Scope:
`Explicit Local Source Payload Selection + Payload-to-Declared-Identity Binding + Approval-/Identity Compatibility + Bound Handoff Candidate`

### Contract / Documentation Reconciliation
`DF-08 CONTRACT / DOCUMENTATION RECONCILIATION – PASS / 0 BLOCKER`

DF-08 erzeugt keine Approval-Entscheidung und keine zweite Eligibility. DF-07 bleibt Approval-Autorität; DF-05 bleibt Eligibility-/Manifest-Autorität; DF-06 bleibt Target-Profile-Autorität. Hash/Fingerprint und binärer Identitätsnachweis bleiben bewusst außerhalb dieses Blocks.

### Implementation Scope Reconciliation
`DF-08 IMPLEMENTATION SCOPE RECONCILIATION – PASS / 0 BLOCKER`

Der TESTBUILD-1-Produktscope ist exakt:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`

Keine neue Tool-Oberfläche, keine neue Hub-Tür, kein `main.js`, kein Root-`index.html`.

Die minimale UI wurde innerhalb des bestehenden Controlled Asset Handoff ergänzt: expliziter lokaler Datei-Input, sichtbarer Payload-/Binding-Status und explizite Bind-Aktion.

Der Laufzeitzustand hält das ausdrücklich ausgewählte Browser-`File`-Objekt lokal und bindet es bewusst an die beim Binding aktuellen Werte `assetId`, `sourceReference` und `sourceVersion`.

Änderung der deklarierten Identität oder Auswahl eines anderen Payloads invalidiert die alte Bindung für die neue Kombination. Keine stille Approval-Übernahme.

Die Frozen-DF-05-Funktionen `validateHandoffInput(...)`, `isHandoffEligible(...)` und `buildHandoffManifest(...)` bleiben unverändert. Der DF-08-Status dient nicht als zweite Eligibility-Autorität.

### TESTBUILD 1
Sichtbare Tool-Kennung:
`DF-08 · TESTBUILD 1`

Product Commit:
`2c08b275f999f7467d5eb62a17515f39283b1f25`

Die Implementierung liegt vollständig innerhalb des reconcilierten Zwei-Dateien-Scopes.

### Completion / Regression / Real Device Gate
`DF-08 COMPLETION / REGRESSION / REAL DEVICE GATE – PASS / 0 BLOCKER`

Reale iPhone-/Safari-Evidenz vom 2026-09-12 bestätigt lokale Dateiauswahl und Payload Binding, die erwarteten Identity-/Approval-Mismatch-Zustände sowie einen neuen gültigen Approval Record für die geänderte Source Version. DF-05 bleibt `ELIGIBLE` und die bestehende Manifest-Erzeugung funktioniert weiter.

Die vorhandenen Screenshots und die Nutzerbestätigung sind als ausreichende Real-Device-Evidenz akzeptiert; ein erneuter kompletter Reload-/Dateneingabe-Durchlauf ist nicht erforderlich.

### Completion / Freeze Gate
`DF-08 COMPLETION / FREEZE GATE – PASS / 0 BLOCKER / FROZEN`

Diff-Prüfung gegen die Branch-Authorization-Baseline `6cbaac377a3080ad472adecb694d14716426d52b` bis zum Frozen Product Commit `2c08b275f999f7467d5eb62a17515f39283b1f25`:
- `2 commits ahead / 0 behind`;
- Merge Base exakt die Authorization-Baseline;
- ausschließlich `tools/asset-handoff/index.html` und `tools/asset-handoff/app.js` verändert;
- keine Scope-fremde Produktdatei verändert.

DF-08 ist damit geschlossen und eingefroren.

### TESTBUILD-1 Non-Goals bleiben geschlossen
Keine Persistenz via LocalStorage/IndexedDB; kein Payload-Export oder Upload; keine GitHub-/Repository-Aktion im Produkt; kein Runtime-Handoff; kein Hash/Fingerprint; keine FileReader-Inhaltsprüfung; kein Preview/Rendering; kein Batch; keine Drag&Drop-Infrastruktur; keine neuen Service-/Registry-/Datenbankdateien; keine neue Hub-Tür; keine Formatkonvertierung. Dateiname, Größe und MIME-Type bleiben ausschließlich informative Metadaten.

## 4. Post-DF-08 Capability Reconciliation
`POST-DF-08 CAPABILITY RECONCILIATION – PASS / 0 PRODUCT BLOCKER`

Ausgewählte nächste Capability:
`DF-09 – Source Asset Payload Fingerprint Foundation`

Die reale nächste Lücke ist der technische Binärnachweis. DF-08 bindet ein konkretes lokales Browser-`File` an die deklarierte Identity, beweist aber bewusst noch nicht, ob ein später erneut ausgewählter bzw. gleich deklarierter Payload byte-identisch ist.

## 5. DF-09 – Source Asset Payload Fingerprint Foundation
Contract:
`docs/DF-09_SOURCE_ASSET_PAYLOAD_FINGERPRINT_FOUNDATION_CONTRACT.md`

Definition baseline / Frozen DF-08 Product Commit:
`2c08b275f999f7467d5eb62a17515f39283b1f25`

Status:
`DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`

Documentation carrier branch:
`df-08-source-asset-payload-binding-foundation`

Dieser Branch ist weiterhin ausschließlich Dokumentationsträger und kein DF-09-Entwicklungsbranch.

Fachlicher Übergang:
`EXPLICITLY BOUND LOCAL PAYLOAD + DECLARED IDENTITY → DETERMINISTIC PAYLOAD FINGERPRINT → IDENTITY-BOUND PAYLOAD PROOF`

Scope:
`Deterministic Payload Fingerprint + Fingerprint-to-Bound-Payload + Fingerprint-to-Declared-Identity Association + Validity/Invalidation + Minimal Fingerprint Record`

### Contract / Documentation Reconciliation
`DF-09 CONTRACT / DOCUMENTATION RECONCILIATION – PASS / 0 BLOCKER`

SHA-256-Fingerprint-Vertrag, Byte-Inhalt-Grenze, Bindung an den aktuellen DF-08-Payload, deklarierte Identity-Assoziation, Validity-/Invalidation-Regeln, Authority-Grenzen und Non-Goals sind widerspruchsfrei.

### Implementation Scope Reconciliation
`DF-09 IMPLEMENTATION SCOPE RECONCILIATION – PASS / 0 BLOCKER`

Der maximale erste TESTBUILD-1-Produktscope ist exakt:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`

Keine neue Tool-Oberfläche, keine neue Hub-Tür, kein `main.js`, kein Root-`index.html`.

Die minimale UI bleibt innerhalb des bestehenden Controlled Asset Handoff und ergänzt ausschließlich eine getrennte Payload-Fingerprint-Fläche mit sichtbarem Fingerprint-Status, expliziter SHA-256-Erzeugungsaktion und Vorschau des minimalen Fingerprint Records. Kein zweiter Datei-Input wird eingeführt.

TESTBUILD 1 hält zusätzlich genau einen aktuellen Fingerprint Record im lokalen Browser-Laufzeitzustand. Der Record enthält `fingerprintRecordVersion`, `assetId`, `sourceReference`, `sourceVersion`, `algorithm` und `digest`.

Die technische Verantwortung ist auf vier Punkte begrenzt: passende aktuelle DF-08-Bindung prüfen; SHA-256 ausschließlich über die Bytes des gebundenen Payloads berechnen; den Record an dieselbe deklarierte Identity binden; den Record bei Payload-/Identity-/Binding-Wechsel als nicht mehr passend behandeln.

Die Hash-Berechnung darf den Browser-Krypto-Pfad verwenden, ohne dadurch semantische Inhaltsanalyse, Parsing oder Formatprüfung zu eröffnen.

### Authority Chain bleibt geschlossen
DF-05 bleibt alleinige Eligibility-/Manifest-Autorität. DF-06 bleibt Target-Project-Profile-Autorität. DF-07 bleibt alleinige Approval-Autorität. DF-08 bleibt Autorität für ausdrückliche lokale Payload-Auswahl und Payload-/Identity-Bindung. DF-09 ergänzt ausschließlich den Fingerprint-Nachweis.

`validateHandoffInput(...)`, `isHandoffEligible(...)` und `buildHandoffManifest(...)` bleiben semantisch unverändert. Der Fingerprint wird in TESTBUILD 1 nicht automatisch in das DF-05-Handoff-Manifest aufgenommen.

### TESTBUILD-1 Non-Goals DF-09
Keine Persistenz via LocalStorage/IndexedDB; keine neue Datei-Auswahl; kein zusätzlicher Payload-Import; kein Manifest-Schema-Upgrade; kein Payload-Export oder Upload; keine GitHub-/Repository-Aktion im Produkt; kein Runtime-Handoff; keine semantische Inhaltsprüfung; keine Bildanalyse; keine Formatvalidierung; keine Konvertierung; kein Batch; keine Drag&Drop-Infrastruktur; keine neuen Service-/Registry-/Datenbankdateien; keine neue Hub-Tür.

## 6. Spätere Capability-Grenzen
Repository-Dateiübertragung, Runtime-Handoff, persistente Asset-/Payload-/Fingerprint-Library, Batch-Workflows, Atlas-/Sprite-Produktion, Signaturen/PKI und Formatkonvertierung bleiben separate spätere Blöcke.

DF-09 selbst beweist ausschließlich die Binäridentität eines aktuell gebundenen lokalen Payloads per SHA-256 und führt noch keine Übertragung aus.

## 7. Arbeitsweise
GitHub ist Source of Truth. Kleine DF-Blöcke, klarer Baseline-/Branch-Nachweis, sichtbare Build-Kennung bei produktiven UI-/Code-Blöcken, reale Device-Gates und getrennte Freeze-Gates bleiben verbindlich. Eingefrorene Contracts werden nicht nebenbei geöffnet.

## 8. Aktueller Stand
`DF-08 – PASS / 0 BLOCKER / FROZEN`

Autoritativer Frozen Product Stand:
`2c08b275f999f7467d5eb62a17515f39283b1f25`

`DF-09 – DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`

Bis einschließlich dieses Schritts wurde kein DF-09-Produktcode verändert und kein DF-09-Entwicklungsbranch angelegt.

## 9. Nächster zulässiger Schritt
Ausschließlich die separate Autorisierung/Anlage eines DF-09-Entwicklungsbranches gegen den verbindlich dokumentierten reconcilierten Scope.

Noch keine DF-09-Implementierung im selben Schritt.
