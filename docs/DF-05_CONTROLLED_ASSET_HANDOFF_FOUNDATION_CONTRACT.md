# DF-05 – Controlled Asset Handoff Foundation Contract

Stand: 2026-09-10
Status: `IMPLEMENTED / TESTBUILD 1 / COMPLETION + DEVICE REGRESSION PASS / 0 BLOCKER / NOT FROZEN`
Definition baseline: `415d44bf78be86a80c6437f6817a30a056d8ba15`
Reconciled documentation baseline: `14973c69f667873c16eedf33c1382274d89d37e9`
Development branch: `df-05-controlled-asset-handoff-foundation`
Implementation head before completion evidence: `22f8a59af510c508f0cbc5153a5af583ce352299`

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
Ein Asset darf nur Handoff-Kandidat sein, wenn seine fachliche Source eindeutig bestimmt ist, eine stabile Asset-Identität vorhanden ist, ein explizites Zielprojekt angegeben ist, ein expliziter Approval-Status vorhanden ist und dieser `APPROVED` lautet.

Verbindliche Grenze:
`NOT APPROVED → kein produktiver Handoff`
`APPROVED → darf als Handoff-Kandidat manifestiert werden`

`AVAILABLE`, bloßes Vorhandensein einer Datei, ein erfolgreicher technischer Check oder das Öffnen eines Assets in einem Tool gelten nicht automatisch als fachliche Freigabe.

DF-05 führt selbst keinen neuen Review-/Approval-Workflow ein. Für TESTBUILD 1 darf der Approval-Status deshalb als explizite Eingabe gesetzt werden. Diese Eingabe simuliert keinen bestehenden Approval-Speicher und erzeugt keine automatische Freigabe.

## 4. Minimaler Handoff-Datensatz
Ein DF-05-Handoff-Manifest muss mindestens eindeutig enthalten:
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

Komplexe typabhängige Metadaten wie Material-, Rig-, Skeleton-, Animation- oder projektspezifische Runtime-Daten gehören nicht zum minimalen DF-05-Datensatz.

## 5. Manifest Authority
Das Handoff Manifest beschreibt autoritativ:
`welches Asset → welche freigegebene Source → welches Zielprojekt → welcher Ziel-/Staging-Pfad → welcher Outputname`

Diese Informationen dürfen nicht aus implizitem UI-Zustand, zuletzt geöffnetem Projekt, zufälliger Ordnerposition oder nur aus einem Dateinamen abgeleitet werden.

Das Manifest ist in DF-05 eine fachliche Beschreibung. Es löst noch keine Dateioperation, Repository-Aktion oder Runtime-Integration aus.

## 6. Explicit Target Contract
`targetProject` und Ziel-/Staging-Pfad müssen explizit angegeben werden.

DevForge darf nicht automatisch aus dem aktuell geöffneten Tool, dem zuletzt verwendeten Projekt oder einer historischen Session schließen, wohin ein Asset gehört.

Konkrete Zielprojektprofile, beispielsweise für `DrHoschi/siedler-mini`, dürfen später separat definiert werden. DF-05 selbst bleibt projektübergreifend.

## 7. Source-vs-Derived-Grenze
DF-05 behandelt ausschließlich den kontrollierten Handoff des `APPROVED SOURCE ASSET`.

Nicht Teil von DF-05 sind automatisch erzeugte Atlanten, Sprite-Packing-Ergebnisse, optimierte Texturen, konvertierte 3D-Dateien oder sonstige Derived/Runtime Assets.

## 8. Determinismus
Gleicher autoritativer Eingang plus gleiches Handoff-Profil muss dasselbe fachliche Manifest ergeben.

Zufalls-IDs, timestampspezifische Outputnamen oder nicht deklarierte UI-/Session-Werte dürfen die Handoff-Identität nicht verändern.

## 9. Reconciled Implementation Scope
Die Implementation Scope Reconciliation auf `df-05-controlled-asset-handoff-foundation` ist `PASS / 0 BLOCKER`.

DF-05 wird als eigenes kleines Werkzeug umgesetzt und nicht in Asset Inspector, Sprite Lab, Prompt Builder oder ein anderes bestehendes Tool eingebaut.

Maximal zulässige produktive Dateien für den ersten DF-05-Implementierungsschritt:
1. `tools/asset-handoff/index.html` – eigenständige Oberfläche ausschließlich für Contract-Felder, Eligibility-Anzeige sowie Manifest-Vorschau/-Export;
2. `tools/asset-handoff/app.js` – einzige fachliche DF-05-Logik für Eingabevalidierung, Eligibility und deterministischen Manifest-Bau;
3. `main.js` – ausschließlich ein neuer Hub-Eintrag `Controlled Asset Handoff` mit Rolle `RUNTIME / REPOSITORY HANDOFF`; bestehende Hub-Einträge bleiben fachlich unangetastet;
4. Root `index.html` – ausschließlich notwendige sichtbare DF-05-Testbuild-/Cache-Busting-Anpassung, keine Hub-Neugestaltung.

Konzeptionelle Logikgrenzen in `app.js`:
- `validateHandoffInput(...)`
- `isHandoffEligible(...)`
- `buildHandoffManifest(...)`

Nicht erforderlich und im ersten Implementierungsschritt nicht zulässig sind zusätzliche CSS-/Datenbank-/Project-Service-/Repository-Service-/Manifest-Framework-Module.

## 10. Harte Non-Goals
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
- Approval-Persistenz oder neuen Approval-Speicher;
- Approve-/Reject-UI oder neuen Review-Modus;
- Cloud Storage;
- Versionsverwaltung des Zielprojekts;
- Runtime-Integration;
- Parameter Playground;
- Geometry Readout oder weitere DF-04-Funktion;
- Änderungen an Asset Inspector, Sprite Lab, Prompt Builder, Source / Result Compare oder anderen bestehenden Tools.

DF-04A–F und DF-HUB-01 bleiben geschlossen und werden durch DF-05 nicht wieder geöffnet.

## 11. Implementation Acceptance Boundary
Der erste DF-05-Implementierungsschritt gilt als scope-konform, wenn:
1. das eigene Asset-Handoff-Werkzeug erreichbar ist;
2. die Contract-Mindestfelder explizit eingegeben/angezeigt werden können;
3. `NOT APPROVED` nicht manifest-fähig ist;
4. `APPROVED` bei ansonsten gültigen Pflichtfeldern manifest-fähig ist;
5. das erzeugte Manifest deterministisch ist;
6. Zielprojekt und Ziel-/Staging-Pfad explizit bleiben;
7. keine Datei-, GitHub-, Repository- oder Runtime-Aktion ausgelöst wird;
8. bestehende Tools fachlich unverändert bleiben;
9. der Hub ausschließlich um die neue DF-05-Tür ergänzt wird;
10. die sichtbare Testbuild-/Cache-Kennung den neuen Teststand eindeutig macht.

## 12. Completion / Device Evidence – 2026-09-10
Realer Test auf iPhone/Safari gegen `DF-05 · TESTBUILD 1` und Implementation Head `22f8a59af510c508f0cbc5153a5af583ce352299`:
1. sichtbare `DF-05 · TESTBUILD 1`-Kennung im Tool Hub – PASS;
2. `Controlled Asset Handoff` erreichbar und Rücknavigation zum Tool Hub funktionsfähig – PASS;
3. unvollständige Pflichtfelder führen zu `NOT ELIGIBLE`, fehlende Felder werden angezeigt, Manifest-Aktionen bleiben gesperrt – PASS;
4. vollständige Pflichtfelder mit `NOT APPROVED` bleiben `NOT ELIGIBLE`; einziger verbleibender Blocker ist `approvalStatus muss APPROVED sein` – PASS;
5. Wechsel ausschließlich auf `APPROVED` führt bei ansonsten unveränderten vollständigen Daten zu `ELIGIBLE`; Manifest-Erzeugung wird freigegeben – PASS;
6. Manifest Preview enthält vollständig `manifestVersion`, `assetId`, `assetName`, `assetType`, `targetProject`, Source-Referenz/-Version, `approvalStatus`, `stagingPath`, `outputFilename` und `format` – PASS;
7. erneute Manifest-Erzeugung mit exakt unveränderten Eingaben erzeugt denselben Inhalt – PASS;
8. Manifest-Export funktioniert in Safari als `TEST-001-handoff.json`; keine GitHub-, Repository- oder Runtime-Aktion wird ausgelöst – PASS.

Verwendeter Device-Testdatensatz:
- `manifestVersion`: `1`
- `assetId`: `TEST-001`
- `assetName`: `Carrier Test`
- `assetType`: `CHARACTER`
- `targetProject`: `DrHoschi/siedler-mini`
- `source.reference`: `carrier-test.png`
- `source.version`: `TEST-V1`
- `approvalStatus`: `APPROVED`
- `target.stagingPath`: `assets/test/`
- `target.outputFilename`: `carrier-test.png`
- `target.format`: `png`

Gesamtergebnis:
`DF-05 – COMPLETION + REAL DEVICE REGRESSION PASS / 0 BLOCKER`

## 13. Aktueller Gate-Status
`DF-05 – IMPLEMENTED / TESTBUILD 1 / COMPLETION + REAL DEVICE REGRESSION PASS / 0 BLOCKER / NOT FROZEN`

## 14. Nächster zulässiger Schritt
Ausschließlich der separate `DF-05 Freeze Gate`: den vollständigen Branch-Diff gegen den reconcilierten Scope bestätigen und DF-05 nur bei weiterhin `PASS / 0 BLOCKER` einfrieren.

Keine neue Capability, keine Produktänderung und keine Scope-Erweiterung im Freeze-Schritt.