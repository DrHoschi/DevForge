# DF-06 – Target Project Handoff Profile Foundation Contract

Stand: 2026-09-10
Status: `DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`
Definition baseline: `c677f07773866dfe8f5c98dcb311ab1750538d9c`
Reconciled documentation head before implementation-scope recording: `825d77e4b4f320c13482b024e3b523946b1b18f7`
Development branch: `df-06-target-project-handoff-profile-foundation`
Development branch authorization baseline: `825d77e4b4f320c13482b024e3b523946b1b18f7`

## 1. Zweck
DF-06 definiert die minimale wiederverwendbare Zielprojekt-Autorität für den bereits eingefrorenen DF-05-Handoff-Workflow.

DF-05 verlangt explizite Angaben für Zielprojekt, Ziel-/Staging-Pfad, Output-Dateiname und Format. DF-06 darf diese Angaben über ein ausdrücklich ausgewähltes Projektprofil konsistent vorbereiten, ohne DF-05 zu öffnen oder eine Repository-Übertragung einzuführen.

Fachlicher Übergang:

`EXPLICIT TARGET PROJECT PROFILE → deterministische Handoff-Vorgaben → DF-05 Minimalmanifest`

## 2. Scope
DF-06 umfasst ausschließlich:
1. Project Profile Contract;
2. Explicit Profile Selection Contract;
3. Deterministic Profile Application Contract.

Keine weitere Capability ist durch diesen Contract freigegeben.

## 3. Profile Authority
Ein Target Project Handoff Profile ist eine deklarierte, versionierbare Eingabe für Handoff-Vorgaben. Es ist keine automatische Projekterkennung und kein impliziter Session-Zustand.

Ein Profil darf nur als autoritativ gelten, wenn es mindestens folgende stabile Identität besitzt:
- `profileVersion`
- `profileId`
- `profileName`
- `targetProject`

Das Profil definiert ausschließlich wiederverwendbare Ziel-/Output-Vorgaben für DF-05. Es entscheidet nicht, ob ein Asset fachlich APPROVED ist.

## 4. Minimaler Profildatensatz
Ein DF-06-Profil muss mindestens folgende Informationen eindeutig enthalten:
- `profileVersion`
- `profileId`
- `profileName`
- `targetProject`
- expliziter `stagingPath` oder eine explizite Staging-Pfad-Vorgabe
- explizite minimale Formatinformation oder zulässige Format-Vorgabe
- explizite Output-Namensvorgabe, soweit für den ersten realen Workflow benötigt

Die konkrete Ausprägung der Output-Namensvorgabe muss deklarativ und deterministisch bleiben.

## 5. Explicit Profile Selection Contract
Ein Profil muss ausdrücklich ausgewählt oder ausdrücklich als Eingabe übergeben werden.

Verbindliche Grenze:
- kein automatisch zuletzt verwendetes Profil;
- kein Target aus URL, Toolzustand, vorheriger Session oder geöffnetem Asset ableiten;
- kein stiller Fallback auf ein Default-Projekt;
- keine automatische Auswahl anhand von Dateiname, Asset-Typ oder Repository-Historie.

Ohne explizite Auswahl gibt es keine Profil-Autorität.

## 6. Deterministic Profile Application Contract
Gleiches autoritatives Profil plus gleicher deklarierter Asset-/Handoff-Eingang muss dieselben Handoff-Vorgaben ergeben.

Nicht zulässig sind:
- zufällige Outputnamen;
- timestampabhängige Namen;
- versteckte Sessionwerte;
- nicht deklarierte Defaults;
- automatische, kontextabhängige Zielumschaltung.

Die Anwendung eines Profils darf nur deklarierte Werte bereitstellen. Sie führt selbst keine Datei-, GitHub-, Repository- oder Runtime-Aktion aus.

## 7. Beziehung zu DF-05
DF-05 bleibt `PASS / 0 BLOCKER / FROZEN` auf Frozen Product Commit `c677f07773866dfe8f5c98dcb311ab1750538d9c`.

DF-06 darf DF-05 nur über dessen bestehende Eingabegrenzen bedienen. DF-05-Eligibility, Approval-Semantik, Manifest-Felder und Non-Goals werden nicht verändert.

Insbesondere gilt weiterhin:
- `NOT APPROVED` bleibt nicht handoff-fähig;
- `APPROVED` wird nicht durch DF-06 erzeugt;
- das Manifest bleibt eine Beschreibung und keine Übertragung.

## 8. Projektübergreifende Grenze
DF-06 bleibt grundsätzlich projektübergreifend.

Der erste Implementierungsscope enthält genau ein reales Target Project Handoff Profile für `DrHoschi/siedler-mini`, damit die Profilanwendung gegen einen realen Workflow geprüft werden kann.

Verbindliche Identität dieses ersten Profils:
- `profileVersion: 1`
- `profileId: siedler-mini`
- `profileName: Siedler Mini`
- `targetProject: DrHoschi/siedler-mini`

Konkrete Werte für `stagingPath`, Formatvorgabe und Output-Namensregel dürfen nur übernommen werden, wenn sie vor der Implementierung aus einer autoritativen bestehenden Projektquelle bestätigt werden. Nicht belegte Werte dürfen nicht erfunden oder still als Default eingeführt werden.

Keine weiteren Projektprofile gehören in DF-06 TESTBUILD 1.

## 9. Reconciled Implementation Scope
`DF-06 IMPLEMENTATION SCOPE RECONCILIATION – PASS / 0 BLOCKER`

Der erste zulässige Produktscope ist eng begrenzt auf:
- `tools/asset-handoff/index.html` – explizite Profilauswahl und sichtbare Darstellung bzw. Anwendung der deklarativen Profilwerte innerhalb des bestehenden Controlled Asset Handoff;
- `tools/asset-handoff/app.js` – klar getrennte Project-Profile-Definition/-Anwendung zusätzlich zu den bestehenden DF-05-Funktionen; `validateHandoffInput(...)`, `isHandoffEligible(...)` und `buildHandoffManifest(...)` behalten ihre DF-05-Semantik;
- Root `index.html` – ausschließlich soweit für sichtbare `DF-06 · TESTBUILD 1`-Kennung und notwendiges Cache-Busting erforderlich.

`main.js` erhält keine neue Hub-Tür. `Controlled Asset Handoff` bleibt die bestehende Oberfläche für die Rolle `RUNTIME / REPOSITORY HANDOFF`.

Nicht erforderlich und nicht freigegeben sind zusätzliche Service-, Datenbank-, Project-Registry-, Preset-Framework- oder ähnliche Infrastrukturmodule.

## 10. Harte Non-Goals
DF-06 implementiert ausdrücklich nicht:
- GitHub-API-Übertragung;
- Commit, Push oder Pull Request;
- Dateiübertragung oder Kopie in ein Ziel-Repository;
- Runtime-Integration;
- automatische Projekterkennung;
- implizite Default-Projektwahl;
- automatische Approval-Entscheidung;
- Approval-Persistenz oder neuen Review-/Approval-Workflow;
- große Project Database oder Asset Library;
- Batch-Handoff;
- Dependency Graph;
- Atlas-Build oder Sprite-Packing;
- Bild-, Textur-, FBX- oder GLB-Konvertierung;
- automatische Ableitung komplexer Runtime-Metadaten;
- Parameter Playground;
- erneute DF-04-Erweiterung;
- Änderungen an den eingefrorenen DF-05-Contracts oder deren Produktlogik;
- zusätzliche Projektprofile über das eine freigegebene `siedler-mini`-Testprofil hinaus.

## 11. Contract-Akzeptanzkriterien
DF-06 ist fachlich ausreichend definiert, wenn ein Implementierer eindeutig bestimmen kann:
1. was die autoritative Identität eines Target Project Handoff Profile ist;
2. welche Mindestfelder ein Profil besitzt;
3. dass Profilwahl explizit sein muss;
4. welche Werte das Profil für DF-05 bereitstellen darf;
5. dass gleiche Eingaben deterministisch dieselben Vorgaben ergeben;
6. dass Approval nicht zum Profil gehört;
7. dass keine Repository-/Datei-/Runtime-Aktion ausgelöst wird;
8. welche Erweiterungen ausdrücklich außerhalb von DF-06 liegen;
9. welche Produktdateien DF-06 TESTBUILD 1 maximal berühren darf;
10. dass genau ein reales `siedler-mini`-Profil zum ersten Testscope gehört.

## 12. Branch-Autorisierung
Der bereits existierende Branch `df-06-target-project-handoff-profile-foundation` wird mit diesem Dokumentationsschritt ausdrücklich als DF-06-Entwicklungsbranch freigegeben.

Seine autorisierte Entwicklungsbaseline ist exakt:
`825d77e4b4f320c13482b024e3b523946b1b18f7`

Die vorherige vorzeitige Anlage des Branches ändert diese Baseline nicht. Vor `825d77e4...` existierte auf diesem Branch keine DF-06-Produktimplementierung.

## 13. Aktueller Gate-Status
`DF-06 – DEFINED / IMPLEMENTATION SCOPE RECONCILED / DEVELOPMENT BRANCH AUTHORIZED / NOT IMPLEMENTED`

## 14. Nächster zulässiger Schritt
Ausschließlich die eigentliche DF-06-Implementierung auf `df-06-target-project-handoff-profile-foundation` gegen den hier festgeschriebenen Scope und ausgehend von der autorisierten Baseline `825d77e4b4f320c13482b024e3b523946b1b18f7`.

Keine zusätzliche Capability oder Scope-Erweiterung im selben Schritt.