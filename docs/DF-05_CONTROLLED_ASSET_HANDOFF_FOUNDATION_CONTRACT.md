# DF-05 – Controlled Asset Handoff Foundation Contract

Stand: 2026-09-10
Status: `PASS / 0 BLOCKER / FROZEN`
Definition baseline: `415d44bf78be86a80c6437f6817a30a056d8ba15`
Reconciled documentation baseline: `14973c69f667873c16eedf33c1382274d89d37e9`
Development branch: `df-05-controlled-asset-handoff-foundation`
Implementation head before completion evidence: `22f8a59af510c508f0cbc5153a5af583ce352299`
Frozen product / completion-evidence commit: `c677f07773866dfe8f5c98dcb311ab1750538d9c`

## 1. Zweck
DF-05 definiert die minimale autoritative Grenze zwischen einem in DevForge geprüften/freigegebenen Source Asset und seiner kontrollierten Vorbereitung für ein konkretes Zielprojekt.

Der Block schließt fachlich die offene Grenze zwischen `TECHNICAL ASSET` und `RUNTIME / REPOSITORY HANDOFF`, ohne eine echte Repository-Übertragung oder Runtime-Integration zu implementieren.

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

DF-05 führt selbst keinen neuen Review-/Approval-Workflow ein. Für TESTBUILD 1 darf der Approval-Status als explizite Eingabe gesetzt werden. Diese Eingabe simuliert keinen bestehenden Approval-Speicher und erzeugt keine automatische Freigabe.

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

Das Manifest ist in DF-05 eine fachliche Beschreibung. Es löst keine Dateioperation, Repository-Aktion oder Runtime-Integration aus.

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

DF-05 wurde als eigenes kleines Werkzeug umgesetzt und nicht in Asset Inspector, Sprite Lab, Prompt Builder oder ein anderes bestehendes Tool eingebaut.

Produktiv betroffen sind exakt:
1. `tools/asset-handoff/index.html`;
2. `tools/asset-handoff/app.js`;
3. `main.js` ausschließlich für den neuen Hub-Eintrag `Controlled Asset Handoff` mit Rolle `RUNTIME / REPOSITORY HANDOFF`;
4. Root `index.html` ausschließlich für sichtbare `DF-05 · TESTBUILD 1`-/Cache-Busting-Anpassung.

Konzeptionelle Logikgrenzen in `app.js`:
- `validateHandoffInput(...)`
- `isHandoffEligible(...)`
- `buildHandoffManifest(...)`

## 10. Harte Non-Goals
Unverändert außerhalb von DF-05 bleiben insbesondere GitHub-API-Übertragung, Commit/Push/PR, Änderungen an Ziel-Repositories, automatische Dateiübertragung, Atlas-Build/Sprite-Packing, Konvertierung, große persistente Asset Library/Datenbank, Batch-Handoff, Dependency Graph, automatische Approval-Entscheidung/-Persistenz, neue Review-UI, Cloud Storage, Zielprojekt-Versionsverwaltung, Runtime-Integration, Parameter Playground, Geometry Readout und Änderungen an bestehenden Tools.

DF-04A–F und DF-HUB-01 bleiben geschlossen.

## 11. Completion / Device Evidence – 2026-09-10
Realer Test auf iPhone/Safari gegen `DF-05 · TESTBUILD 1` und Implementation Head `22f8a59af510c508f0cbc5153a5af583ce352299`:
1. sichtbare `DF-05 · TESTBUILD 1`-Kennung im Tool Hub – PASS;
2. `Controlled Asset Handoff` erreichbar und Rücknavigation zum Tool Hub funktionsfähig – PASS;
3. unvollständige Pflichtfelder führen zu `NOT ELIGIBLE`, fehlende Felder werden angezeigt, Manifest-Aktionen bleiben gesperrt – PASS;
4. vollständige Pflichtfelder mit `NOT APPROVED` bleiben `NOT ELIGIBLE`; einziger verbleibender Blocker ist `approvalStatus muss APPROVED sein` – PASS;
5. Wechsel ausschließlich auf `APPROVED` führt bei ansonsten unveränderten vollständigen Daten zu `ELIGIBLE`; Manifest-Erzeugung wird freigegeben – PASS;
6. Manifest Preview enthält vollständig `manifestVersion`, `assetId`, `assetName`, `assetType`, `targetProject`, Source-Referenz/-Version, `approvalStatus`, `stagingPath`, `outputFilename` und `format` – PASS;
7. erneute Manifest-Erzeugung mit exakt unveränderten Eingaben erzeugt denselben Inhalt – PASS;
8. Manifest-Export funktioniert in Safari als `TEST-001-handoff.json`; keine GitHub-, Repository- oder Runtime-Aktion wird ausgelöst – PASS.

Gesamtergebnis:
`DF-05 – COMPLETION + REAL DEVICE REGRESSION PASS / 0 BLOCKER`

## 12. Freeze Gate – 2026-09-10
Der bestätigte Completion-/Device-Stand auf Commit `c677f07773866dfe8f5c98dcb311ab1750538d9c` wird als autoritativer DF-05 Frozen Product Stand festgelegt.

Der Freeze-Schritt selbst verändert keinen Produktcode. Nachgelagerte Commits im selben Freeze Gate dürfen ausschließlich diesen Frozen-Status in der Steuerdokumentation festhalten.

Freeze-Ergebnis:
`DF-05 – PASS / 0 BLOCKER / FROZEN`

## 13. Aktueller Gate-Status
`DF-05 – PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

## 14. Nächster zulässiger Schritt
Kein DF-05-Folgeblock ist automatisch freigegeben. Vor einem weiteren Entwicklungsblock ist eine separate Capability Reconciliation gegen diesen Frozen-Stand erforderlich.