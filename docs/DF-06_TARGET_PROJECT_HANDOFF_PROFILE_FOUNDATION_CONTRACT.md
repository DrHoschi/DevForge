# DF-06 – Target Project Handoff Profile Foundation Contract

Stand: 2026-09-10
Status: `DEFINED / NOT IMPLEMENTED`
Definition baseline: `c677f07773866dfe8f5c98dcb311ab1750538d9c`
Documentation branch: `df-06-target-project-handoff-profile-foundation`

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

Die konkrete Ausprägung der Output-Namensvorgabe darf im Implementation Scope weiter eingegrenzt werden, muss aber deklarativ und deterministisch bleiben.

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

Ein erstes reales Profil für `DrHoschi/siedler-mini` darf später separat im Implementation Scope oder in einer nachgelagerten Profildatei freigegeben werden. Dieser Contract autorisiert noch keine konkrete Profilimplementierung.

## 9. Harte Non-Goals
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
- Änderungen an den eingefrorenen DF-05-Contracts oder deren Produktlogik.

## 10. Contract-Akzeptanzkriterien
DF-06 ist fachlich ausreichend definiert, wenn ein späterer Implementierer eindeutig bestimmen kann:
1. was die autoritative Identität eines Target Project Handoff Profile ist;
2. welche Mindestfelder ein Profil besitzt;
3. dass Profilwahl explizit sein muss;
4. welche Werte das Profil für DF-05 bereitstellen darf;
5. dass gleiche Eingaben deterministisch dieselben Vorgaben ergeben;
6. dass Approval nicht zum Profil gehört;
7. dass keine Repository-/Datei-/Runtime-Aktion ausgelöst wird;
8. welche Erweiterungen ausdrücklich außerhalb von DF-06 liegen.

## 11. Aktueller Gate-Status
`DF-06 – DEFINED / NOT IMPLEMENTED`

Der versehentlich vorzeitig angelegte Branch `df-06-target-project-handoff-profile-foundation` wird für diesen Dokumentationsschritt ausschließlich als Steuerdokumentationsbranch verwendet und gilt ausdrücklich noch nicht als freigegebener Entwicklungsbranch.

## 12. Nächster zulässiger Schritt
Ausschließlich DF-06 Contract / Documentation Reconciliation gegen Frozen Product Commit `c677f07773866dfe8f5c98dcb311ab1750538d9c` einschließlich README-Reconciliation.

Noch keine Implementierung und keine Freigabe eines Entwicklungsbranches im selben Schritt.