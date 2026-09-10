# DF-07 – Source Asset Approval Authority Foundation Contract

Stand: 2026-09-10
Status: `DEFINED / NOT IMPLEMENTED`
Definition baseline / Frozen DF-06 Product Commit: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
Documentation branch: `df-06-target-project-handoff-profile-foundation`

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
DF-07 definiert zunächst den fachlichen Approval Record und seine Verbrauchbare Autorität, aber noch keine große persistente Asset-/Approval-Datenbank.

Ob der erste Implementierungsschritt einen Record nur lokal erzeugt/exportiert, in einem kleinen deklarativen Datensatz hält oder eine andere minimale technische Form nutzt, gehört in eine spätere Implementation Scope Reconciliation. Dieser Contract autorisiert keine Persistenzarchitektur.

## 10. Harte Non-Goals
DF-07 implementiert ausdrücklich nicht:
- GitHub-API-Übertragung;
- Commit, Push oder Pull Request in Ziel-Repositories;
- Dateiübertragung oder Kopie in Ziel-Repositories;
- Runtime-Integration;
- große Asset Library oder Approval Database;
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
- neue Runtime-/Repository-Handoff-Aktion.

## 11. Dokumentations- und Branch-Grenze
Diese Definition wird gegen den Frozen DF-06 Product Commit `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec` erstellt.

Der bestehende Branch `df-06-target-project-handoff-profile-foundation` dient in diesem Schritt ausschließlich als Dokumentationsträger. Er wird dadurch nicht zum DF-07-Entwicklungsbranch.

Es wird in diesem Schritt kein neuer Entwicklungsbranch angelegt und kein Produktcode verändert.

## 12. Aktueller Gate-Status
`DF-07 – DEFINED / NOT IMPLEMENTED`

## 13. Nächster zulässiger Schritt
Ausschließlich ein separates `DF-07 Contract / Documentation Reconciliation Gate` gegen Frozen DF-06 `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`.

Dabei ist zu prüfen, dass Scope, Mindestfelder, Identity Binding, Beziehung zu DF-04/05/06, README-Sync und harte Non-Goals widerspruchsfrei dokumentiert sind.

Noch keine DF-07-Implementierung, keine Implementation Scope Reconciliation und kein neuer Entwicklungsbranch im selben Schritt.
