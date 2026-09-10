# DF-06 – Target Project Handoff Profile Foundation Contract

Stand: 2026-09-10
Status: `PASS / 0 BLOCKER / FROZEN`
Definition baseline: `c677f07773866dfe8f5c98dcb311ab1750538d9c`
Reconciled documentation head before implementation-scope recording: `825d77e4b4f320c13482b024e3b523946b1b18f7`
Development branch: `df-06-target-project-handoff-profile-foundation`
Development branch authorization baseline: `825d77e4b4f320c13482b024e3b523946b1b18f7`
Frozen Product Commit: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

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

Der erste Implementierungsscope enthält genau ein reales Target Project Handoff Profile für `DrHoschi/siedler-mini`.

Verbindliche Identität dieses Profils:
- `profileVersion: 1`
- `profileId: siedler-mini`
- `profileName: Siedler Mini`
- `targetProject: DrHoschi/siedler-mini`
- `stagingPath: assets/characters/`
- `format: png`
- `outputFilename: carrier.png`

Keine weiteren Projektprofile gehören zu DF-06 TESTBUILD 1.

## 9. Reconciled Implementation Scope
`DF-06 IMPLEMENTATION SCOPE RECONCILIATION – PASS / 0 BLOCKER`

Der Produktscope war verbindlich begrenzt auf:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`
- Root `index.html` ausschließlich für `DF-06 · TESTBUILD 1` und Cache-Busting.

`main.js` blieb unverändert. Keine neue Hub-Tür, kein zusätzlicher Service, keine Datenbank, keine Project Registry und kein Preset-Framework wurden eingeführt.

## 10. Implementierter Stand
Frozen Product Commit:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

DF-06 TESTBUILD 1 implementiert ausschließlich:
- explizite Auswahl `Kein Profil ausgewählt` oder `Siedler Mini`;
- keine automatische Profil-Autorität beim Laden;
- sichtbare Profilidentität und Profilwerte;
- deterministische Übernahme der vier Zielwerte `targetProject`, `targetPath`, `format` und `outputFilename` in die bestehenden DF-05-Eingabefelder;
- sichtbare Build-Kennung `DF-06 · TESTBUILD 1` und Cache-Busting.

Keine neue Hub-Tür und keine Änderung an der DF-05 Eligibility-/Approval-/Manifest-Semantik wurden eingeführt.

## 11. Completion / Regression / Device Gate
`DF-06 Completion / Regression / Device Gate = PASS / 0 BLOCKER`

Reale Geräte-/Safari-Evidenz vom 2026-09-10 bestätigt:
- DF-06 TESTBUILD 1 ist sichtbar;
- kein Profil wird automatisch als autoritativ gesetzt;
- `Siedler Mini` kann explizit ausgewählt werden;
- die vier Profilwerte werden korrekt in die vorhandenen DF-05-Felder übernommen;
- Profilwerte sind im UI sichtbar und stimmen mit dem freigegebenen Testprofil überein;
- der bestehende DF-05-Workflow bleibt verwendbar;
- keine zusätzliche Capability oder Repository-/Runtime-Aktion wurde beobachtet.

Der Nutzer hat das vollständige Completion-/Regression-/Device-Gate ausdrücklich mit `PASS / 0 BLOCKER` bestätigt.

## 12. Freeze Gate
`DF-06 Freeze Gate = PASS / 0 BLOCKER / FROZEN`

Der Produktdiff von der autorisierten Entwicklungsbaseline `825d77e4b4f320c13482b024e3b523946b1b18f7` bis zum getesteten Produktstand `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec` wurde erneut geprüft.

Der Merge-Base ist exakt `825d77e4b4f320c13482b024e3b523946b1b18f7`. Die produktiven Änderungen entsprechen exakt dem freigegebenen Scope: Root `index.html`, `tools/asset-handoff/index.html` und `tools/asset-handoff/app.js`; zusätzliche Änderungen betreffen ausschließlich die zuvor autorisierte DF-06-Steuerdokumentation.

Damit wird der bereits real getestete Commit `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec` verbindlich als `Frozen Product Commit` festgelegt. Nach diesem Commit erfolgen im Freeze-Schritt ausschließlich Dokumentationsänderungen.

## 13. Harte Non-Goals
DF-06 implementiert ausdrücklich nicht:
- GitHub-API-Übertragung;
- Commit, Push oder Pull Request in Ziel-Repositories;
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
- zusätzliche Projektprofile über das eine freigegebene `siedler-mini`-Profil hinaus.

## 14. Branch-Autorisierung
Der Branch `df-06-target-project-handoff-profile-foundation` bleibt der dokumentierte DF-06-Branch. Die autorisierte Entwicklungsbaseline bleibt `825d77e4b4f320c13482b024e3b523946b1b18f7`.

## 15. Aktueller Gate-Status
`DF-06 – PASS / 0 BLOCKER / FROZEN`

Frozen Product Commit:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

## 16. Nächster zulässiger Schritt
DF-06 ist geschlossen. Vor einer weiteren Produktänderung ist eine separate Capability Reconciliation gegen den eingefrorenen DF-06-Produktstand erforderlich.

Keine DF-06-Erweiterung, kein zusätzliches Projektprofil und keine Produktänderung im selben Schritt.