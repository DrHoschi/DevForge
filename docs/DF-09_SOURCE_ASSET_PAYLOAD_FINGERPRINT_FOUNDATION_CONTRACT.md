# DF-09 – Source Asset Payload Fingerprint Foundation Contract

Stand: 2026-09-12
Status: `DEFINED / NOT IMPLEMENTED`
Definition baseline / Frozen DF-08 Product Commit: `2c08b275f999f7467d5eb62a17515f39283b1f25`
Documentation carrier branch: `df-08-source-asset-payload-binding-foundation`

## 1. Zweck
DF-09 definiert die minimale technische Nachweisgrenze, mit der ein ausdrücklich ausgewählter und nach DF-08 an eine deklarierte Source-Identität gebundener lokaler Payload einen deterministischen binären Fingerprint erhält.

DF-08 beweist bereits die bewusste lokale Auswahl und Bindung eines Browser-`File`-Objekts an `assetId`, `sourceReference` und `sourceVersion`, beweist aber ausdrücklich noch nicht, dass zwei gleich deklarierte Payloads binär identisch sind. DF-09 schließt ausschließlich diese Lücke.

Fachlicher Übergang:

`EXPLICITLY BOUND LOCAL PAYLOAD + DECLARED IDENTITY → DETERMINISTIC PAYLOAD FINGERPRINT → IDENTITY-BOUND PAYLOAD PROOF`

## 2. Scope
DF-09 umfasst ausschließlich:
1. Deterministic Payload Fingerprint Contract;
2. Fingerprint-to-Bound-Payload Contract;
3. Fingerprint-to-Declared-Identity Association Contract;
4. Fingerprint Validity / Invalidation Contract;
5. Minimal Fingerprint Record Contract.

Keine Repository-, Datei- oder Runtime-Übertragung ist Teil von DF-09.

## 3. Fingerprint-Autorität
Der Fingerprint ist ausschließlich ein technischer Binärnachweis für den aktuell ausgewählten lokalen Payload.

Er ersetzt nicht die fachliche Source-Identität. Autoritative fachliche Identity-Felder bleiben:
- `assetId`
- `sourceReference`
- `sourceVersion`

Der Fingerprint darf aus diesen Feldern keine neue Asset-ID oder Source-Version ableiten und darf sie nicht automatisch verändern.

## 4. Deterministic Payload Fingerprint Contract
Für denselben Byte-Inhalt muss derselbe Fingerprint entstehen; für geänderten Byte-Inhalt muss ein anderer Fingerprint erwartet werden.

Der Contract legt für DF-09 verbindlich fest:
- Algorithmus: `SHA-256`;
- Digest-Darstellung: vollständiger SHA-256-Digest als lowercase hexadecimal string;
- Fingerprint wird ausschließlich aus dem Byte-Inhalt des ausdrücklich ausgewählten lokalen Payloads berechnet;
- Dateiname, MIME-Type, Dateigröße, Pfad-/UI-Text oder deklarierte Source-Identität gehen nicht als zusätzliche Daten in die Hash-Berechnung ein.

DF-09 darf den Payload binär lesen, soweit dies ausschließlich zur Fingerprint-Berechnung erforderlich ist. Eine semantische Inhaltsanalyse, Bildanalyse, Parsing- oder Formatprüfung wird dadurch nicht autorisiert.

## 5. Fingerprint-to-Bound-Payload Contract
Ein Fingerprint darf nur für einen aktuell nach DF-08 ausdrücklich ausgewählten und gebundenen Payload erzeugt bzw. als gültig betrachtet werden.

Verbindlich:
- ohne lokalen Payload kein Fingerprint;
- ohne gültige DF-08-Payload-Bindung kein identitätsgebundener Fingerprint;
- Auswahl eines anderen Payloads invalidiert den bisherigen Fingerprint für den aktuellen Laufzeitzustand;
- erneutes Binden eines anderen Payloads erfordert einen neu berechneten Fingerprint;
- ein Fingerprint darf nicht allein anhand eines Dateinamens oder früheren Digest-Werts still wiederverwendet werden.

## 6. Fingerprint-to-Declared-Identity Association Contract
Der Fingerprint Record wird mit genau der deklarierten Identität verbunden, für die die aktuelle DF-08-Bindung gültig ist:
- `assetId`
- `sourceReference`
- `sourceVersion`

Ändert sich nach der Fingerprint-Erzeugung mindestens eines dieser Felder, ist der vorhandene identitätsgebundene Fingerprint für die neue Kombination nicht mehr gültig. Für die neue Kombination ist eine gültige DF-08-Bindung und eine neue ausdrückliche Fingerprint-Erzeugung erforderlich.

DF-09 erzeugt keine neue Approval-Autorität. Ein Fingerprint beweist Binäridentität, nicht fachliche Freigabe.

## 7. Minimal Fingerprint Record Contract
Der minimale DF-09 Fingerprint Record enthält genau die für diesen Nachweis erforderlichen Felder:
- `fingerprintRecordVersion`
- `assetId`
- `sourceReference`
- `sourceVersion`
- `algorithm`
- `digest`

Für den ersten Contract gilt:
- `fingerprintRecordVersion = "1"`
- `algorithm = "SHA-256"`
- `digest` = vollständiger lowercase SHA-256 Hex-Digest.

Dateiname, Dateigröße und MIME-Type dürfen weiterhin rein informativ angezeigt werden, gehören aber nicht zur fachlichen Identity-Autorität und sind keine erforderlichen Felder des minimalen Fingerprint Records.

## 8. Validity / Invalidation Contract
Ein DF-09 Fingerprint Record gilt im aktuellen Laufzeitzustand nur dann als passend, wenn:
- der aktuell ausgewählte Payload derselbe Payload ist, aus dessen Bytes der Digest berechnet wurde;
- die aktuelle DF-08-Bindung weiterhin gültig ist;
- `assetId`, `sourceReference` und `sourceVersion` exakt mit dem Fingerprint Record übereinstimmen.

Payload-Wechsel, Identity-Wechsel oder Verlust der gültigen DF-08-Bindung dürfen den bestehenden Fingerprint nicht still als weiterhin gültig erscheinen lassen.

## 9. Beziehung zu DF-05, DF-06, DF-07 und DF-08
DF-05 bleibt `PASS / 0 BLOCKER / FROZEN` und alleinige Eligibility-/Manifest-Autorität. DF-09 verändert `validateHandoffInput(...)`, `isHandoffEligible(...)` oder `buildHandoffManifest(...)` nicht.

DF-06 bleibt `PASS / 0 BLOCKER / FROZEN` und alleinige Target-Project-Profile-Autorität. Ein Target Profile erzeugt keinen Fingerprint.

DF-07 bleibt `PASS / 0 BLOCKER / FROZEN` und alleinige Approval-Autorität. Ein Fingerprint erzeugt weder `APPROVED` noch `NOT APPROVED` und ersetzt keinen Approval Record.

DF-08 bleibt `PASS / 0 BLOCKER / FROZEN` auf Frozen Product Commit `2c08b275f999f7467d5eb62a17515f39283b1f25`. DF-09 setzt eine gültige DF-08-Payload-Bindung voraus, darf deren Semantik aber nicht neu definieren.

## 10. Persistenz-/Infrastrukturgrenze
DF-09 definiert keine persistente Fingerprint Library, Asset Registry, Payload Registry oder Datenbank.

Ob und wie TESTBUILD 1 den Fingerprint ausschließlich im lokalen Browser-Laufzeitzustand hält und welche minimale technische Oberfläche dafür erforderlich ist, wird erst in einer separaten Implementation Scope Reconciliation festgelegt.

Keine LocalStorage-/IndexedDB-/Backend-Persistenz wird durch diesen Contract autorisiert.

## 11. Harte Non-Goals
DF-09 autorisiert ausdrücklich nicht:
- GitHub-API-Upload oder andere GitHub-Schreibaktion;
- Commit, Push oder Pull Request;
- Kopieren oder Übertragen des Payloads in `DrHoschi/siedler-mini` oder ein anderes Ziel-Repository;
- Runtime-Handoff oder Runtime-Integration;
- automatischen Repository-Download eines Payloads;
- automatische Payload-Auswahl;
- automatische Approval-Entscheidung;
- Änderung der DF-05 Eligibility-/Manifest-Semantik;
- Änderung der DF-06 Target-Profile-Semantik;
- Änderung der DF-07 Approval-Semantik;
- Änderung der DF-08 Payload-Binding-Semantik;
- neue fachliche Identity aus Hash, Dateiname, Dateigröße oder MIME-Type;
- semantische Inhaltsanalyse, Bildanalyse, Parser, Formatvalidierung oder Konvertierung;
- Malware-/Security-Scanning;
- kryptografische Signaturen oder PKI;
- Benutzer-/Rollen-/Rechtesystem;
- Audit-/Fingerprint-Historie;
- Batch-Fingerprinting;
- große persistente Asset-/Payload-/Fingerprint-Datenbank;
- Atlas-/Sprite-Packing;
- neue Repository-/Runtime-Handoff-Aktion.

## 12. Dokumentations-/Branch-Grenze
Diese Definition erfolgt gegen den Frozen DF-08 Product Commit `2c08b275f999f7467d5eb62a17515f39283b1f25`.

Der bestehende Branch `df-08-source-asset-payload-binding-foundation` dient in diesem Schritt ausschließlich als Dokumentationsträger. Er wird dadurch nicht zum DF-09-Entwicklungsbranch.

In diesem Schritt wird kein DF-09-Code implementiert und kein neuer DF-09-Entwicklungsbranch angelegt.

## 13. Status
`DF-09 – DEFINED / NOT IMPLEMENTED`

## 14. Nächster zulässiger Schritt
Ausschließlich ein `DF-09 Contract / Documentation Reconciliation Gate` gegen Frozen DF-08 Product Commit `2c08b275f999f7467d5eb62a17515f39283b1f25`.

Dabei sind SHA-256-Fingerprint-Vertrag, Byte-Inhalt-Grenze, Bindung an den aktuellen DF-08-Payload, deklarierte Identity-Assoziation, Validity-/Invalidation-Regeln, Grenzen zu DF-05/06/07/08 und harte Non-Goals auf Widerspruchsfreiheit zu prüfen.

Noch keine DF-09 Implementation Scope Reconciliation, keine Code-Implementierung und kein DF-09-Entwicklungsbranch im selben Schritt.
