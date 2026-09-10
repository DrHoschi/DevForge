# DF-07 – Source Asset Approval Authority Foundation Contract

Stand: 2026-09-10
Status: `DEFINED / IMPLEMENTATION SCOPE RECONCILED / DEVELOPMENT BRANCH AUTHORIZED / NOT IMPLEMENTED`
Definition baseline / Frozen DF-06 Product Commit: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
Reconciled implementation-scope head / Development branch authorization baseline: `8da923bf37f5005689918382560a893ca5cf0818`
Development branch: `df-07-source-asset-approval-authority-foundation`

## 1. Zweck
DF-07 definiert die minimale fachliche Autorität, mit der eine ausdrückliche Freigabe eindeutig an ein bestimmtes Source Asset und dessen deklarierte Version gebunden werden kann.

DF-04 stellt eingefrorene Review-Capabilities bereit. DF-05 verlangt weiterhin `APPROVED`, erzeugt diese Entscheidung aber nicht. DF-06 stellt ausschließlich explizite Zielprojektprofile bereit. DF-07 schließt ausschließlich die Autoritätslücke zwischen einer expliziten fachlichen Freigabe und dem bestehenden DF-05-Approval-Eingang.

Fachlicher Übergang:

`REVIEWED SOURCE ASSET + EXPLICIT IDENTITY → APPROVAL RECORD → DF-05 APPROVAL INPUT → Handoff Manifest`

## 2. Scope
DF-07 umfasst ausschließlich:
1. Approval Record Contract;
2. Explicit Approval Decision Contract;
3. Approval Identity Binding Contract;
4. Approval Consumption Contract an der bestehenden DF-05-Eingabegrenze.

Keine weitere Capability ist durch diesen Contract freigegeben.

## 3. Approval Authority
Ein DF-07 Approval Record ist eine deklarierte fachliche Entscheidung über genau ein identifiziertes Source Asset in genau einer deklarierten Source-Version.

Eine Approval-Autorität entsteht nur durch eine ausdrückliche Entscheidung. Weder Dateipräsenz noch technische Validität, Review-Ansicht, Difference-/Silhouette-Ergebnis, Profilwahl, Manifest-Erzeugung oder andere Toolzustände dürfen automatisch `APPROVED` erzeugen.

## 4. Minimaler Approval-Record-Datensatz
Ein DF-07 Approval Record muss mindestens folgende Informationen eindeutig enthalten:
- `approvalRecordVersion`
- `assetId`
- `sourceReference`
- `sourceVersion`
- `decision`

Für den ersten Contract sind als fachliche Entscheidungswerte ausschließlich zulässig:
- `APPROVED`
- `NOT APPROVED`

Zusätzliche Metadaten dürfen später nur separat reconciliert werden. Insbesondere werden in DF-07 noch keine Benutzerkonten, Rollen, Signaturen, Zeitstempel, Kommentare, Review-Scores oder Historien verpflichtend eingeführt.

## 5. Identity Binding Contract
Ein Approval Record gilt ausschließlich für die deklarierte Kombination aus Asset- und Source-Identität.

Verbindliche Grenze:
- `assetId` muss explizit sein;
- `sourceReference` muss explizit sein;
- `sourceVersion` muss explizit sein;
- eine Freigabe darf nicht still auf eine andere Datei, Version, Variante oder neu erzeugte Source übertragen werden;
- ändert sich die deklarierte Source-Identität oder Source-Version, ist der vorherige Record für diese neue Source nicht autoritativ.

Keine Identität darf aus Dateiname, zuletzt geöffnetem Asset, Sessionzustand, Projektprofil oder Repository-Historie still abgeleitet werden.

## 6. Explicit Approval Decision Contract
Die Entscheidung muss ausdrücklich gesetzt werden.

Verbindlich ausgeschlossen sind:
- automatische Freigabe aufgrund eines technischen Checks;
- automatische Freigabe aufgrund eines Review-Modus;
- automatische Freigabe aufgrund von Difference-, Silhouette-, Geometry- oder anderen Scores;
- KI-basierte automatische Freigabe;
- implizites APPROVED als Default;
- Übernahme einer alten Entscheidung ohne bestätigte Identitätsübereinstimmung.

Ohne explizite Entscheidung besteht keine Approval-Autorität.

## 7. Approval Consumption Contract
DF-07 darf eine gültige, identitätsgebundene Entscheidung an die bereits vorhandene DF-05-Approval-Eingabegrenze liefern.

DF-05 bleibt dabei geschlossen:
- `validateHandoffInput(...)` wird durch diesen Contract nicht neu definiert;
- `isHandoffEligible(...)` wird durch diesen Contract nicht neu definiert;
- `buildHandoffManifest(...)` wird durch diesen Contract nicht neu definiert;
- `NOT APPROVED` bleibt nicht handoff-fähig;
- `APPROVED` allein ersetzt keine anderen DF-05-Pflichtfelder;
- das Manifest bleibt eine Beschreibung und keine Repository-/Dateiübertragung.

DF-07 darf keine parallele zweite Handoff-Eligibility-Autorität einführen.

## 8. Beziehung zu DF-04, DF-05 und DF-06
DF-04A bis DF-04F bleiben `PASS / FROZEN`. DF-07 verändert keine eingefrorene Review-Funktion und leitet aus Review-Ergebnissen keine automatische Freigabe ab.

DF-05 bleibt `PASS / 0 BLOCKER / FROZEN` auf Frozen Product Commit `c677f07773866dfe8f5c98dcb311ab1750538d9c`.

DF-06 bleibt `PASS / 0 BLOCKER / FROZEN` auf Frozen Product Commit `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`. Target Project Profiles sind keine Approval-Autorität.

## 9. Persistenzgrenze
DF-07 definiert zunächst den fachlichen Approval Record und seine verbrauchbare Autorität, aber noch keine große persistente Asset-/Approval-Datenbank.

Für TESTBUILD 1 wird keine Persistenz zwischen Sessions vorausgesetzt. Der Approval Record darf innerhalb der bestehenden Controlled-Asset-Handoff-Oberfläche nur als lokaler Laufzeitzustand erzeugt und angewendet werden. Export, Datenbank, Historie oder andere Persistenzformen gehören nicht zum reconcilierten ersten Produktscope.

## 10. Reconciled Implementation Scope
`DF-07 IMPLEMENTATION SCOPE RECONCILIATION – PASS / 0 BLOCKER`

Der erste zulässige Produktscope für DF-07 TESTBUILD 1 ist eng begrenzt auf:
- `tools/asset-handoff/index.html` – klar abgegrenzter Approval-Record-Bereich innerhalb der bestehenden Controlled-Asset-Handoff-Oberfläche; explizite Decision-Auswahl, sichtbare Record-Identität, Record-Status sowie getrennte Aktionen zum Erzeugen und Anwenden des Records;
- `tools/asset-handoff/app.js` – klar getrennte Approval-Record-Validierung/-Erzeugung, Identity-Matching und explizite Anwendung der Record-Decision auf die bestehende DF-05-Eingabe `approvalStatus`;
- Root `index.html` – ausschließlich soweit für eine spätere sichtbare `DF-07 · TESTBUILD 1`-Kennung und notwendiges Cache-Busting erforderlich.

Keine neue Tool-Oberfläche und keine neue Hub-Tür sind erforderlich. `main.js` gehört nicht zum vorgesehenen Produktscope.

### 10.1 Approval-Record-Oberfläche
DF-07 verwendet die bereits vorhandenen Handoff-Identitätsfelder:
- `assetId`
- `sourceRef` als technische UI-Bezeichnung für `sourceReference`
- `sourceVersion`

Die Decision muss explizit als `APPROVED` oder `NOT APPROVED` gewählt werden. Es gibt kein vorausgewähltes `APPROVED` und keine automatische Decision.

Der erzeugte Record enthält exakt die fünf Contract-Mindestfelder:
- `approvalRecordVersion`
- `assetId`
- `sourceReference`
- `sourceVersion`
- `decision`

Keine weiteren Record-Felder sind für TESTBUILD 1 erforderlich.

### 10.2 Identity-Mismatch-Regel
Ein erzeugter Approval Record bleibt nur dann anwendbar, wenn die aktuell deklarierte Kombination aus `assetId`, `sourceReference` und `sourceVersion` exakt mit dem Record übereinstimmt.

Wird nach Record-Erzeugung mindestens einer dieser drei Identitätswerte geändert, darf der Record nicht mehr als Approval-Autorität angewendet werden. Die technische Umsetzung darf ihn entweder unmittelbar invalidieren oder beim Anwenden deterministisch als `IDENTITY MISMATCH` ablehnen.

Eine alte Decision darf dadurch niemals still auf eine andere Source oder Version übertragen werden.

### 10.3 Approval Consumption
Ein gültiger identitätsgleicher Approval Record darf ausschließlich seine `decision` explizit in die bereits vorhandene DF-05-Eingabe `approvalStatus` übertragen.

Danach bleibt ausschließlich die bestehende DF-05-Logik autoritativ für `ELIGIBLE` / `NOT ELIGIBLE`. DF-07 führt keine zweite Eligibility-Funktion und keine parallele Handoff-Freigabe ein.

Die bestehenden Funktionen `validateHandoffInput(...)`, `isHandoffEligible(...)` und `buildHandoffManifest(...)` behalten ihre eingefrorene DF-05-Semantik.

### 10.4 Vorgesehene technische Verantwortlichkeiten
Die Implementation darf sinngemäß klar getrennte Funktionen für folgende Verantwortlichkeiten ergänzen:
- Approval-Record-Eingabe validieren;
- deterministischen Approval Record erzeugen;
- aktuelle Source-Identität gegen den Record prüfen;
- gültige Record-Decision explizit auf `approvalStatus` anwenden.

Konkrete Funktionsnamen sind kein zusätzlicher Contract, solange die Verantwortlichkeiten und Grenzen eingehalten werden.

### 10.5 Nicht erforderliche Infrastruktur
Für TESTBUILD 1 werden ausdrücklich nicht benötigt:
- neue Service-Dateien;
- neue Datenbankmodule;
- Approval Registry;
- Asset Registry;
- Repository Service;
- User-/Role Service;
- neues Preset-/Framework-System;
- neue Review-Integration;
- neue Hub-Tür.

## 11. Harte Non-Goals
DF-07 implementiert ausdrücklich nicht:
- GitHub-API-Übertragung;
- Commit, Push oder Pull Request in Ziel-Repositories;
- Dateiübertragung oder Kopie in Ziel-Repositories;
- Runtime-Integration;
- große Asset Library oder Approval Database;
- Persistenz zwischen Sessions;
- Approval-Record-Export im ersten TESTBUILD;
- Benutzer-/Rollen-/Rechtesystem;
- kryptografische Signaturen;
- Audit-History oder Approval-Historie;
- Batch-Approval;
- automatische Approval-Entscheidung;
- KI-Scoring oder KI-Freigabe;
- Review-Scoring-Schwellenwerte;
- automatische Identitätserkennung;
- automatische Projekterkennung;
- Änderung an DF-04A–F;
- Änderung an DF-05 Eligibility-, Approval- oder Manifest-Semantik;
- Änderung an DF-06 Target Project Profile Semantik;
- Atlas-Build, Sprite-Packing oder Konvertierung;
- neue Runtime-/Repository-Handoff-Aktion;
- neue Tool-Oberfläche oder neue Hub-Tür.

## 12. Development Branch / Authorization
`DF-07 DEVELOPMENT BRANCH / AUTHORIZATION – PASS / 0 BLOCKER`

Der separate Entwicklungsbranch lautet:
`df-07-source-asset-approval-authority-foundation`

Er wurde exakt vom reconcilierten Implementation-Scope-Stand
`8da923bf37f5005689918382560a893ca5cf0818`
angelegt.

Dieser Commit ist die verbindliche DF-07 Development Branch Authorization Baseline. Der autoritative Produkt-Ausgangspunkt bleibt Frozen DF-06 `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`; die dazwischenliegenden Commits bis `8da923bf...` sind ausschließlich freigegebene DF-07-Steuerdokumentation.

Mit diesem Schritt wird ausschließlich der Entwicklungsbranch für den bereits reconcilierten TESTBUILD-1-Scope freigegeben. Es ist noch keine DF-07-Code-Implementierung erfolgt.

## 13. Aktueller Gate-Status
`DF-07 – DEFINED / IMPLEMENTATION SCOPE RECONCILED / DEVELOPMENT BRANCH AUTHORIZED / NOT IMPLEMENTED`

## 14. Nächster zulässiger Schritt
Ausschließlich die eigentliche DF-07-Implementierung auf `df-07-source-asset-approval-authority-foundation` gegen die Authorization Baseline `8da923bf37f5005689918382560a893ca5cf0818` und exakt innerhalb des reconcilierten TESTBUILD-1-Scopes.

Keine zusätzliche Capability oder Scope-Erweiterung im selben Schritt.
