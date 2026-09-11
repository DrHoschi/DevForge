# DF-08 – Source Asset Payload Binding Foundation Contract

Stand: 2026-09-11
Status: `DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`
Definition baseline / Frozen DF-07 Product Commit: `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`
Documentation carrier branch: `df-07-source-asset-approval-authority-foundation`

## 1. Zweck
DF-08 definiert die minimale fachliche Grenze, mit der ein ausdrücklich vom Benutzer gewählter lokaler Source-Payload an die bereits deklarierte und durch DF-07 freigabefähige Source-Identität gebunden werden kann.

Fachlicher Übergang:
`APPROVED IDENTITY + EXPLICIT LOCAL SOURCE PAYLOAD → IDENTITY-BOUND HANDOFF CANDIDATE → bestehendes DF-05 Manifest`

## 2. Scope
DF-08 umfasst ausschließlich:
1. Explicit Local Source Payload Selection Contract;
2. Payload-to-Declared-Identity Binding Contract;
3. Approval-/Identity Compatibility Contract;
4. Bound Handoff Candidate Contract an der bestehenden DF-05-/DF-07-Grenze.

## 3. Explicit Local Source Payload Selection Contract
Ein Source-Payload muss ausdrücklich vom Benutzer ausgewählt werden. Ohne ausdrückliche Payload-Auswahl besteht kein gebundener Handoff-Kandidat. Dateiname, `sourceReference`, letzter Browser-/Sessionzustand, Projektprofil oder Repository-Historie dürfen keinen Payload still auswählen. DF-08 bezieht keine Datei automatisch aus Repository oder externem Speicher.

## 4. Payload-to-Declared-Identity Binding Contract
Der ausgewählte Payload wird ausschließlich an die aktuell ausdrücklich deklarierte Kombination aus `assetId`, `sourceReference` und `sourceVersion` gebunden. Die Bindung erzeugt keine neue Asset-ID, Source-Version oder Approval-Entscheidung. Ändert sich mindestens ein Identitätswert oder wird ein anderer Payload ausgewählt, gilt die vorherige Bindung nicht still weiter; eine neue ausdrückliche Bindung ist erforderlich.

## 5. Approval-/Identity Compatibility Contract
Ein gebundener Payload darf nur dann als Handoff-Kandidat gelten, wenn `assetId`, `sourceReference` und `sourceVersion` exakt mit einem aktuell gültigen DF-07 Approval Record übereinstimmen. `IDENTITY MISMATCH` darf nicht umgangen werden. Ein neuer Payload übernimmt keine alte Approval-Autorität automatisch. DF-07 bleibt alleinige fachliche Approval-Autorität.

## 6. Bound Handoff Candidate Contract
`IDENTITY-BOUND HANDOFF CANDIDATE` bedeutet ausschließlich: lokaler Payload ausdrücklich gewählt, ausdrücklich an die aktuelle deklarierte Identität gebunden und mit der gültigen DF-07 Approval-Identität kompatibel. Dieser Status ist keine Repository-, Datei- oder Runtime-Übertragung.

DF-05 bleibt allein autoritativ für Eligibility und Manifest. DF-08 führt keine zweite Handoff-Eligibility ein und definiert `validateHandoffInput(...)`, `isHandoffEligible(...)` oder `buildHandoffManifest(...)` nicht neu.

## 7. Beziehung zu DF-05, DF-06 und DF-07
DF-05 bleibt `PASS / 0 BLOCKER / FROZEN` auf `c677f07773866dfe8f5c98dcb311ab1750538d9c`; sein Manifest bleibt Beschreibung und keine Dateiübertragung.

DF-06 bleibt `PASS / 0 BLOCKER / FROZEN` auf `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`; Target Project Profiles wählen keinen Source-Payload und erzeugen keine Payload-Bindung.

DF-07 bleibt `PASS / 0 BLOCKER / FROZEN` auf `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`; Approval Records bleiben alleinige Approval-Autorität.

## 8. Payload-Identitätsgrenze
DF-08 führt keinen verpflichtenden Content-Hash, Fingerprint oder kryptografischen Dateinachweis ein. Binäre Identitätsprüfung benötigt eine separate Reconciliation. Dateiname, Dateigröße, MIME-Type oder andere technische Merkmale dürfen nicht still eine fachliche Source-Identität erzeugen.

## 9. Persistenz-/Infrastrukturgrenze
Keine dauerhafte Payload Library, Asset Registry, Upload Registry oder Datenbank. TESTBUILD 1 darf den Payload ausschließlich als lokalen Browser-Laufzeitzustand halten. Keine Persistenzarchitektur wird vorweggenommen.

## 10. Harte Non-Goals
Nicht autorisiert sind GitHub-API-Schreibaktionen; Commit/Push/PR; Dateiübertragung in Ziel-Repositories; Runtime-Handoff; automatischer Repository-Download; große Asset-/Payload-Library oder Datenbank; Batch-Handoff/-Binding; automatische Payload-Auswahl; automatische Approval-Entscheidung oder stille Approval-Übernahme; automatische Identitätserkennung; verpflichtender Hash/Fingerprint; kryptografische Signaturen; Benutzer/Rollen/Rechte; Historien; Atlas/Sprite-Packing; Formatkonvertierung; Änderungen an DF-04/05/06/07; neue Repository-/Runtime-Handoff-Aktion.

## 11. Contract / Documentation Reconciliation Gate
`DF-08 CONTRACT / DOCUMENTATION RECONCILIATION – PASS / 0 BLOCKER`

Scope, explizite Payload-Auswahl, Identity-Bindung, Approval-Kompatibilität, Grenzen zu DF-05/06/07, bewusst offene Hash/Fingerprint-Grenze und Non-Goals wurden gegen Frozen DF-07 geprüft und sind widerspruchsfrei.

## 12. Reconciled Implementation Scope
`DF-08 IMPLEMENTATION SCOPE RECONCILIATION – PASS / 0 BLOCKER`

Der maximale erste TESTBUILD-1-Produktscope ist auf genau diese bestehenden Produktdateien begrenzt:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`

Keine neue Tool-Oberfläche und keine neue Hub-Tür. `main.js` bleibt außerhalb des Scopes. Root `index.html` ist fachlich nicht erforderlich und gehört nicht zum reconcilierten Produktscope; eine spätere globale Build-Kennungsentscheidung benötigt separate Autorisierung.

### 12.1 Minimale Oberfläche
Innerhalb des bestehenden Controlled Asset Handoff wird eine klar getrennte `Source Payload Binding`-Sektion vorgesehen mit:
- lokalem Datei-Input für eine ausdrückliche Benutzerauswahl;
- sichtbarem Payload-/Binding-Status;
- expliziter Aktion zum Binden des aktuell gewählten Payloads an die aktuell deklarierte Identität.

Die vorhandenen Felder `assetId`, `sourceRef` als UI-Bezeichnung für `sourceReference` und `sourceVersion` bleiben die deklarierte Identity-Grenze.

### 12.2 Minimaler Laufzeitzustand
TESTBUILD 1 hält das vom Browser gelieferte `File`-Objekt ausschließlich lokal im Laufzeitzustand. Es wird nicht persistiert, exportiert, hochgeladen, konvertiert oder automatisch aus einer anderen Quelle geladen.

Die Bindung hält mindestens die bewusste Zuordnung zwischen dem aktuell ausgewählten `File`-Objekt und der zum Bindungszeitpunkt deklarierten Kombination aus `assetId`, `sourceReference` und `sourceVersion`.

### 12.3 Minimale technische Verantwortlichkeiten
Die Implementierung trennt vier Verantwortlichkeiten:
1. explizite Payload-Auswahl;
2. explizite Erzeugung einer Payload-/Identity-Bindung;
3. Prüfung, ob aktuelle Identität und aktuell ausgewählter Payload noch zur bestehenden Bindung gehören;
4. Prüfung der exakten Identitätskompatibilität mit dem aktuell gültigen DF-07 Approval Record.

Der sichtbare Zustand muss mindestens unterscheiden können, ob keine Bindung besteht, eine Bindung gültig ist oder eine Identity-/Approval-Inkompatibilität vorliegt. Konkrete UI-Wortwahl darf innerhalb dieses Contracts eng umgesetzt werden, darf aber keine zusätzliche Eligibility-Autorität behaupten.

### 12.4 Geschlossene DF-05-/DF-07-Grenzen
`validateHandoffInput(...)`, `isHandoffEligible(...)` und `buildHandoffManifest(...)` bleiben semantisch unverändert. DF-08 darf seinen Binding-Status nicht als zweite DF-05-Eligibility verwenden.

Der vorhandene DF-07 Approval Record bleibt die Approval-Autorität. DF-08 darf ihn nur auf exakte Identitätskompatibilität prüfen und weder erzeugen noch verändern oder automatisch übertragen.

### 12.5 Ausdrücklich außerhalb TESTBUILD 1
Keine Persistenz via LocalStorage/IndexedDB; kein Payload-Export; kein Upload; keine GitHub API; kein Repository-Transfer; kein Hash/Fingerprint; keine Inhaltsprüfung via FileReader; kein Preview/Rendering; kein Batch; keine Drag&Drop-Infrastruktur; keine neuen Service-/Registry-/Datenbankdateien; keine neue Hub-Tür.

Dateiname, Dateigröße und MIME-Type dürfen höchstens informativ angezeigt werden und erzeugen keine fachliche Identitätsautorität.

## 13. Dokumentations-/Branch-Grenze
Diese Definition und Scope-Reconciliation erfolgen gegen Frozen DF-07 Product Commit `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`. Der bestehende Branch `df-07-source-asset-approval-authority-foundation` dient ausschließlich als Dokumentationsträger und ist kein DF-08-Entwicklungsbranch. Bis einschließlich dieses Schritts wurde kein DF-08-Code implementiert und kein DF-08-Entwicklungsbranch angelegt.

## 14. Status
`DF-08 – DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`

## 15. Nächster zulässiger Schritt
Ausschließlich die separate Autorisierung/Anlage eines DF-08-Entwicklungsbranches gegen den verbindlich dokumentierten Scope. Noch keine DF-08-Implementierung im selben Schritt.
