# DF-05 – Controlled Asset Handoff Foundation Contract

Stand: 2026-09-10
Status: `DEFINED / NOT IMPLEMENTED`
Definition baseline: `415d44bf78be86a80c6437f6817a30a056d8ba15`

## 1. Zweck
DF-05 definiert erstmals die minimale autoritative Grenze zwischen einem in DevForge geprüften/freigegebenen Source Asset und seiner kontrollierten Vorbereitung für ein konkretes Zielprojekt.

Der Block schließt fachlich die offene Grenze zwischen `TECHNICAL ASSET` und `RUNTIME / REPOSITORY HANDOFF`, ohne bereits eine echte Repository-Übertragung oder Runtime-Integration zu implementieren.

## 2. Scope
DF-05 umfasst ausschließlich:
1. Handoff Eligibility Contract;
2. Minimal Handoff Manifest Contract;
3. Explicit Target Contract.

Der fachliche Übergang lautet:

`APPROVED SOURCE ASSET → Handoff Manifest → explizites Ziel/Staging → später separat autorisierte Übergabe`

## 3. Handoff Eligibility
Ein Asset darf nur Handoff-Kandidat sein, wenn:
- seine fachliche Source eindeutig bestimmt ist;
- eine stabile Asset-Identität vorhanden ist;
- ein explizites Zielprojekt angegeben ist;
- ein expliziter Approval-Status vorhanden ist;
- der Approval-Status `APPROVED` lautet.

Verbindliche Grenze:

`NOT APPROVED → kein produktiver Handoff`

`APPROVED → darf als Handoff-Kandidat manifestiert werden`

`AVAILABLE`, bloßes Vorhandensein einer Datei, ein erfolgreicher technischer Check oder das Öffnen eines Assets in einem Tool gelten nicht automatisch als fachliche Freigabe.

DF-05 führt selbst keinen neuen Review-/Approval-Workflow ein. Der Contract definiert ausschließlich die Eingangsanforderung für einen späteren Handoff.

## 4. Minimaler Handoff-Datensatz
Ein DF-05-Handoff-Manifest muss mindestens folgende Informationen eindeutig enthalten:
- `manifestVersion`
- `assetId`
- `assetName`
- `assetType`
- `targetProject`
- eindeutige Source-Datei oder Source-Asset-Referenz
- `approvalStatus`
- freigegebene Source-Version oder anderweitig nachvollziehbare Source-Identität
- expliziter Ziel-/Staging-Pfad
- Output-Dateiname
- minimale Formatinformation

`assetType` bleibt projektübergreifend und darf beispielsweise `CHARACTER`, `RESOURCE`, `BUILDING` oder `ICON` repräsentieren. DF-05 erzwingt noch keine vollständige Typ-Taxonomie.

Komplexe typabhängige Metadaten wie Material-, Rig-, Skeleton-, Animation- oder projektspezifische Runtime-Daten gehören nicht zum minimalen DF-05-Datensatz und dürfen erst bei nachgewiesenem realem Bedarf separat erweitert werden.

## 5. Manifest Authority
Das Handoff Manifest beschreibt autoritativ:

`welches Asset → welche freigegebene Source → welches Zielprojekt → welcher Ziel-/Staging-Pfad → welcher Outputname`

Diese Informationen dürfen nicht aus implizitem UI-Zustand, zuletzt geöffnetem Projekt, zufälliger Ordnerposition oder nur aus einem Dateinamen abgeleitet werden.

Das Manifest ist in DF-05 eine fachliche Beschreibung. Es löst noch keine Dateioperation, Repository-Aktion oder Runtime-Integration aus.

## 6. Explicit Target Contract
`targetProject` und Ziel-/Staging-Pfad müssen explizit angegeben werden.

DevForge darf für DF-05 nicht automatisch aus dem aktuell geöffneten Tool, dem zuletzt verwendeten Projekt oder einer historischen Session schließen, wohin ein Asset gehört.

Konkrete Zielprojektprofile, beispielsweise für `DrHoschi/siedler-mini`, dürfen später separat definiert werden. DF-05 selbst bleibt projektübergreifend.

## 7. Source-vs-Derived-Grenze
DF-05 behandelt ausschließlich den kontrollierten Handoff des `APPROVED SOURCE ASSET`.

Nicht Teil von DF-05 sind automatisch erzeugte Atlanten, Sprite-Packing-Ergebnisse, optimierte Texturen, konvertierte 3D-Dateien oder sonstige Derived/Runtime Assets.

Derived Assets dürfen erst in einem später separat definierten Block nach einem geeigneten Review-/Approval-Gate autorisiert werden.

## 8. Determinismus
Gleicher autoritativer Eingang plus gleiches Handoff-Profil muss dasselbe fachliche Manifest ergeben.

Zufalls-IDs, timestampspezifische Outputnamen oder nicht deklarierte UI-/Session-Werte dürfen die Handoff-Identität nicht verändern.

## 9. Harte Non-Goals
DF-05 implementiert ausdrücklich nicht:
- GitHub-API-Übertragung;
- automatisches Committen, Pushen oder Erstellen von Pull Requests;
- Änderungen an `DrHoschi/siedler-mini` oder anderen Ziel-Repositories;
- automatische Dateiübertragung/Kopie in ein Ziel-Repository;
- Atlas-Build oder Sprite-Packing;
- Bild-/Texturkonvertierung;
- FBX-/GLB-Konvertierung;
- große persistente Asset Library oder Asset-Datenbank;
- Batch-Handoff;
- Dependency Graph;
- automatische Approval-Entscheidung;
- Approve-/Reject-UI oder neuen Review-Modus;
- Cloud Storage;
- Versionsverwaltung des Zielprojekts;
- Runtime-Integration;
- Parameter Playground;
- Geometry Readout oder weitere DF-04-Funktion.

DF-04A–F und DF-HUB-01 bleiben geschlossen und werden durch DF-05 nicht wieder geöffnet.

## 10. Contract-Akzeptanzkriterien
DF-05 ist fachlich ausreichend definiert, wenn ein späterer Implementierer eindeutig bestimmen kann:
1. wann ein Asset handoff-fähig ist;
2. welche Mindestfelder das Manifest besitzen muss;
3. welche Source autoritativ ist;
4. welches Zielprojekt und welcher Ziel-/Staging-Pfad gemeint sind;
5. wie Approval, Source und Target voneinander getrennt bleiben;
6. dass das Manifest noch keine Übertragung ausführt;
7. welche Aktionen und Derived Assets ausdrücklich außerhalb dieses Blocks liegen.

## 11. Aktueller Gate-Status
`DF-05 – DEFINED / NOT IMPLEMENTED`

Noch kein Entwicklungsbranch, kein Produktcode und keine Ziel-Repository-Änderung sind durch diesen Contract autorisiert.

## 12. Nächster zulässiger Schritt
Ausschließlich DF-05 Contract / Documentation Reconciliation gegen die Definition-Baseline `415d44bf78be86a80c6437f6817a30a056d8ba15` abschließen und bestätigen, dass ausschließlich die definierte Steuerdokumentation hinzugekommen ist.

Erst nach einem separaten `PASS / 0 BLOCKER` darf über einen DF-05-Entwicklungsbranch entschieden werden.