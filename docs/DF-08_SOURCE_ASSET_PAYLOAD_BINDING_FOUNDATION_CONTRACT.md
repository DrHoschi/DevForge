# DF-08 – Source Asset Payload Binding Foundation Contract

Stand: 2026-09-11
Status: `DEFINED / NOT IMPLEMENTED`
Definition baseline / Frozen DF-07 Product Commit: `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`
Documentation carrier branch: `df-07-source-asset-approval-authority-foundation`

## 1. Zweck
DF-08 definiert die minimale fachliche Grenze, mit der ein ausdrücklich vom Benutzer gewählter lokaler Source-Payload an die bereits deklarierte und durch DF-07 freigabefähige Source-Identität gebunden werden kann.

DF-07 bindet eine Approval-Entscheidung an `assetId`, `sourceReference` und `sourceVersion`. DF-05 erzeugt daraus bei erfüllter Eligibility ein Handoff Manifest. Der Frozen Stand hält jedoch noch keinen tatsächlichen Source-Payload als Handoff-Kandidaten. DF-08 schließt ausschließlich diese Lücke.

Fachlicher Übergang:

`APPROVED IDENTITY + EXPLICIT LOCAL SOURCE PAYLOAD → IDENTITY-BOUND HANDOFF CANDIDATE → bestehendes DF-05 Manifest`

## 2. Scope
DF-08 umfasst ausschließlich:
1. Explicit Local Source Payload Selection Contract;
2. Payload-to-Declared-Identity Binding Contract;
3. Approval-/Identity Compatibility Contract;
4. Bound Handoff Candidate Contract an der bestehenden DF-05-/DF-07-Grenze.

Keine weitere Capability ist durch diesen Contract freigegeben.

## 3. Explicit Local Source Payload Selection Contract
Ein Source-Payload muss ausdrücklich vom Benutzer ausgewählt werden.

Verbindlich:
- ohne ausdrückliche Payload-Auswahl besteht kein gebundener Handoff-Kandidat;
- die bloße Eingabe eines Dateinamens oder `sourceReference` ersetzt keine Payload-Auswahl;
- zuletzt verwendete Dateien, Browser-/Sessionzustand, Projektprofil oder Repository-Historie dürfen keinen Payload still auswählen;
- DF-08 darf keine Datei automatisch aus einem Repository oder externen Speicher beziehen.

## 4. Payload-to-Declared-Identity Binding Contract
Der ausgewählte Payload wird ausschließlich an die aktuell ausdrücklich deklarierte Source-Identität gebunden:
- `assetId`
- `sourceReference`
- `sourceVersion`

Die Bindung ist eine bewusste Zuordnung des ausgewählten lokalen Payloads zu genau dieser deklarierten Identität. Sie erzeugt keine neue Asset-ID, keine neue Source-Version und keine automatische fachliche Freigabe.

Ändert sich nach der Bindung mindestens einer der drei Identitätswerte oder wird ein anderer Payload ausgewählt, darf die vorherige Bindung nicht still weitergelten. Für die neue Kombination ist eine neue ausdrückliche Bindung erforderlich.

## 5. Approval-/Identity Compatibility Contract
Ein gebundener Payload darf nur dann als Handoff-Kandidat gelten, wenn die deklarierte Identität exakt mit der Identität eines aktuell gültigen DF-07 Approval Records übereinstimmt.

Verbindlich:
- `assetId` muss übereinstimmen;
- `sourceReference` muss übereinstimmen;
- `sourceVersion` muss übereinstimmen;
- der DF-07 Record muss weiterhin für genau diese Identität gültig sein;
- ein `IDENTITY MISMATCH` darf nicht durch vorhandenen Payload, Dateinamen, Profil oder Manifest übergangen werden;
- ein neuer oder neu ausgewählter Payload übernimmt keine alte Approval-Autorität automatisch.

DF-08 erzeugt selbst keine Approval-Entscheidung. Die fachliche Approval-Autorität bleibt ausschließlich bei DF-07.

## 6. Bound Handoff Candidate Contract
Ein `IDENTITY-BOUND HANDOFF CANDIDATE` bedeutet ausschließlich:
- ein lokaler Source-Payload wurde ausdrücklich gewählt;
- dieser Payload wurde ausdrücklich an die aktuell deklarierte Source-Identität gebunden;
- die deklarierte Identität ist mit der gültigen DF-07 Approval-Identität kompatibel.

Dieser Status ist noch keine Repository-, Datei- oder Runtime-Übertragung.

DF-05 bleibt allein autoritativ für seine bestehende Eligibility und Manifest-Erzeugung. DF-08 darf keine zweite Handoff-Eligibility-Autorität einführen und `validateHandoffInput(...)`, `isHandoffEligible(...)` oder `buildHandoffManifest(...)` nicht neu definieren.

## 7. Beziehung zu DF-05, DF-06 und DF-07
DF-05 bleibt `PASS / 0 BLOCKER / FROZEN` auf Frozen Product Commit `c677f07773866dfe8f5c98dcb311ab1750538d9c`. Sein Manifest bleibt Beschreibung und keine Dateiübertragung.

DF-06 bleibt `PASS / 0 BLOCKER / FROZEN` auf Frozen Product Commit `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`. Target Project Profiles wählen keinen Source-Payload aus und erzeugen keine Payload-Bindung.

DF-07 bleibt `PASS / 0 BLOCKER / FROZEN` auf Frozen Product Commit `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`. Approval Records bleiben die alleinige fachliche Approval-Autorität. DF-08 darf diese Semantik nicht verändern.

## 8. Payload-Identitätsgrenze
DF-08 führt im Contract noch keinen Content-Hash, Fingerprint oder kryptografischen Dateinachweis als Pflicht ein.

Die erste Capability bindet die ausdrücklich ausgewählte lokale Datei an die ausdrücklich deklarierte Identität. Falls später bewiesen werden muss, dass zwei gleich benannte oder gleich deklarierte Dateien binär identisch sind, benötigt dies eine separate Reconciliation und ausdrückliche Autorisierung.

DF-08 darf daher aus Dateiname, Dateigröße, MIME-Type oder anderen technischen Dateimerkmalen nicht still eine neue fachliche Source-Identität ableiten.

## 9. Persistenz-/Infrastrukturgrenze
Dieser Contract definiert noch keine dauerhafte Payload Library, Asset Registry, Upload Registry oder andere persistente Infrastruktur.

Ob TESTBUILD 1 den Payload ausschließlich als lokalen Browser-/Sessionzustand hält und welche minimale technische Darstellung dafür notwendig ist, gehört erst in eine separate Implementation Scope Reconciliation.

Keine Persistenzarchitektur wird mit dieser Definition vorweggenommen.

## 10. Harte Non-Goals
DF-08 autorisiert ausdrücklich nicht:
- GitHub-API-Upload oder andere GitHub-Schreibaktion;
- Commit, Push oder Pull Request;
- Kopieren oder Übertragen einer Datei in `DrHoschi/siedler-mini` oder ein anderes Ziel-Repository;
- Runtime-Handoff oder Runtime-Integration;
- automatischen Repository-Download eines Source-Payloads;
- große Asset Library, Payload Library, Asset Registry oder Datenbank;
- Batch-Handoff oder Batch-Payload-Binding;
- automatische Payload-Auswahl;
- automatische Approval-Entscheidung;
- automatische Übernahme einer alten Approval-Autorität auf einen neuen Payload;
- automatische Identitätserkennung aus Dateiname, Dateimetadaten oder Inhalt;
- verpflichtenden Content-Hash/Fingerprint in diesem Contract;
- kryptografische Signaturen;
- Benutzer-/Rollen-/Rechtesystem;
- Audit-/Approval-/Payload-Historie;
- Atlas-Build oder Sprite-Packing;
- Bild-, Textur-, FBX-, GLB- oder andere Formatkonvertierung;
- Änderung an DF-04A–F;
- Änderung an DF-05 Eligibility-, Approval- oder Manifest-Semantik;
- Änderung an DF-06 Target Project Profile Semantik;
- Änderung an DF-07 Approval-Record-/Identity-/Consumption-Semantik;
- neue Repository-/Runtime-Handoff-Aktion.

## 11. Dokumentations-/Branch-Grenze
Diese Definition erfolgt gegen den Frozen DF-07 Product Commit `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`.

Der bestehende Branch `df-07-source-asset-approval-authority-foundation` dient in diesem Schritt ausschließlich als Dokumentationsträger. Er wird dadurch nicht zum DF-08-Entwicklungsbranch.

In diesem Schritt wird kein DF-08-Code implementiert und kein neuer Entwicklungsbranch angelegt.

## 12. Status
`DF-08 – DEFINED / NOT IMPLEMENTED`

## 13. Nächster zulässiger Schritt
Ausschließlich ein `DF-08 Contract / Documentation Reconciliation Gate` gegen Frozen DF-07 Product Commit `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`.

Dabei sind Scope, explizite Payload-Auswahl, Payload-/Identity-Bindung, Approval-Kompatibilität, Grenzen zu DF-05/06/07, Payload-Identitätsgrenze und harte Non-Goals auf Widerspruchsfreiheit zu prüfen.

Noch keine DF-08 Implementation Scope Reconciliation, keine Code-Implementierung und kein DF-08-Entwicklungsbranch im selben Schritt.
