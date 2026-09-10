# DevForge – Master Roadmap & Entwicklungsgrenzen

Stand: 2026-09-10

## 1. Vision
DevForge soll eine projektübergreifende Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets werden. Langfristig verbindet DevForge wiederverwendbare Asset-Definitionen, Referenzen, Generierungsverträge, Vorschau/Review, Freigaben, technische Prüfung, Atlas-/Metadaten-Erzeugung und kontrollierte Übergabe in Ziel-Repositories.

Neue Funktionen werden bevorzugt aus echten Produktionsproblemen abgeleitet statt als theoretische All-in-one-Lösung vorgebaut.

## 2. Zielarchitektur
Die fachlichen Workflow-Rollen für den Tool Hub sind:
1. `REFERENCE / CREATE`
2. `GENERATION / HANDOFF`
3. `REVIEW`
4. `TECHNICAL ASSET`
5. `RUNTIME / REPOSITORY HANDOFF`

### A – Project & Preset Layer
Mehrere Zielprojekte, projektspezifische Style-/Camera-/Direction-/Scale-/Output-/Naming-Contracts, definierte Repository-/Staging-Ziele und wiederverwendbare Presets.

### B – Asset Library
Asset-Katalog mit getrennten Asset-Arten. Keine große persistente Asset-Datenbank vorziehen, bevor reale Workflows den minimal notwendigen Datensatz bewiesen haben.

### C – Generation Package Layer
Single Asset / Single Frame, Animation Frame, Direction Batch, Full Animation Batch, TXT/JSON/PDF, direkte Referenzbilder und klare Prioritäts-/Konfliktregeln.

### D – Preview & Review Layer
Animierte 3D-Referenzvorschau, Einzelbildprüfung, Source-/Result-Vergleich, Overlay, manuelles Alignment, Difference View, Silhouette Difference, Silhouette Geometry Guides, Direction-Vergleich sowie Animation Timeline/FPS/Loop/Frame-Stepping.

### E – Technical Asset Layer
Sprite Lab, Asset Inspector, Atlas-Funktionen, Pivot/Anchor/Scale, Alpha-/Abmessungsprüfung, Atlas-Zellen/Metadaten, deterministische Benennung und später Runtime-Handoff.

### F – Repository Handoff
Projektbezogene Staging-Pfade, Manifest-Dateien, nur ausdrücklich freigegebene Source Assets weitergeben und Atlas-/Runtime-Artefakte erst nach Review-/Approval-Gate erzeugen.

## 3. Aktuelle Module / Authority
- Source / Result Compare View – `FROZEN / PRODUCTIVE`, Rolle `REVIEW`, autoritativ DF-04F.
- Prompt Builder – `AVAILABLE`, Rolle `GENERATION / HANDOFF`.
- Animated 3D Reference Viewer – `FROZEN / PRODUCTIVE`, Rolle `REFERENCE / CREATE`.
- Deterministic Pose Renderer – `PROTOTYPE / HISTORICAL`.
- Sprite Lab – `AVAILABLE`, Rolle `TECHNICAL ASSET`.
- Atlas Builder – `CONSOLIDATED / REDIRECT`.
- Animation Tester – `AVAILABLE`, Rolle `REVIEW`.
- Asset Inspector – `AVAILABLE`, Rolle `TECHNICAL ASSET`.
- Parameter Playground – `PREPARED / NOT IMPLEMENTED`.
- Controlled Asset Handoff – DF-05 `FROZEN / PRODUCTIVE`; DF-06 `FROZEN / PRODUCTIVE` erweitert denselben Handoff-Kontext um explizite Target Project Profiles.

DF-HUB-01 bleibt `PASS / 0 BLOCKER / FROZEN`.

## 4. DF-04 – Asset Review Foundation
DF-04A bis DF-04F sind `PASS / FROZEN`. Ein möglicher `Silhouette Geometry Readout` bleibt `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`.

## 5. DF-05 – Controlled Asset Handoff Foundation
Frozen Product Commit:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

Status:
`PASS / 0 BLOCKER / FROZEN`

Scope:
`Handoff Eligibility + Minimal Manifest Contract + Explicit Target Contract`

DF-05 bleibt geschlossen. Keine Folgefunktion darf seine Eligibility-, Approval- oder Manifest-Semantik nebenbei ändern.

## 6. DF-06 – Target Project Handoff Profile Foundation
Frozen Product Commit:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

Status:
`PASS / 0 BLOCKER / FROZEN`

Scope:
`Project Profile Contract + Explicit Profile Selection Contract + Deterministic Profile Application Contract`

Fachlicher Übergang:
`EXPLICIT TARGET PROJECT PROFILE → deterministische Handoff-Vorgaben → DF-05 Minimalmanifest`

Der Frozen Product Stand enthält genau ein reales explizit auswählbares `Siedler Mini`-Profil. DF-06 erzeugt keine Approval-Autorität.

## 7. Capability Reconciliation nach DF-06
Gegen Frozen DF-06 `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec` wurde als nächste kleine Capability-Lücke die fehlende explizite, identitätsgebundene Source-Asset-Freigabe zwischen Review und bestehender DF-05-Approval-Grenze identifiziert.

Ausgewählt:
`DF-07 – Source Asset Approval Authority Foundation`

## 8. DF-07 – Source Asset Approval Authority Foundation
Verbindlicher Contract:
`docs/DF-07_SOURCE_ASSET_APPROVAL_AUTHORITY_FOUNDATION_CONTRACT.md`

Definition baseline:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

Status:
`DEFINED / NOT IMPLEMENTED`

Scope:
`Approval Record Contract + Explicit Approval Decision Contract + Approval Identity Binding Contract + Approval Consumption Contract`

Fachlicher Übergang:
`REVIEWED SOURCE ASSET + EXPLICIT IDENTITY → APPROVAL RECORD → DF-05 APPROVAL INPUT → Handoff Manifest`

### Minimaler Approval Record
- `approvalRecordVersion`
- `assetId`
- `sourceReference`
- `sourceVersion`
- `decision`

Zulässige Entscheidungen im ersten Contract sind ausschließlich `APPROVED` und `NOT APPROVED`.

### Identity Binding
Eine Freigabe ist ausschließlich für die deklarierte Kombination aus `assetId`, `sourceReference` und `sourceVersion` autoritativ. Änderungen an Source oder Version übernehmen keine vorherige Freigabe automatisch.

### Explicit Decision
Eine Approval-Autorität entsteht nur durch eine ausdrückliche Entscheidung. Review-Ansicht, technische Prüfung, Difference/Silhouette/Geometry, Score, KI, Profilwahl oder Manifest-Erzeugung dürfen nicht automatisch `APPROVED` erzeugen.

### Approval Consumption
Ein gültiger identitätsgebundener Approval Record darf die bestehende DF-05-Approval-Eingabegrenze bedienen. DF-05 bleibt geschlossen; es entsteht keine zweite Eligibility-Autorität.

### Persistenzgrenze
DF-07 definiert noch keine Persistenzarchitektur und keine große Asset-/Approval-Datenbank. Die minimale technische Form wird erst in einer späteren Implementation Scope Reconciliation festgelegt.

### Harte Non-Goals
Keine GitHub-/Repository-/Datei-/Runtime-Aktion, keine große Asset Library/Approval Database, kein Benutzer-/Rollensystem, keine Signaturen, keine Approval-Historie, kein Batch-Approval, keine automatische oder KI-basierte Freigabe, keine automatische Identitätserkennung, keine Änderung an DF-04A–F, DF-05 oder DF-06, kein Atlas-Build/Sprite-Packing und keine Konvertierung.

## 9. DF-03 – Animation Atlas Contract
Fachlich vorbereitet und nachgelagert. Vorhandene Atlas-Tool-Funktion ist keine automatische Produktionsfreigabe.

## 10. Asset Library / Referenzverwaltung – später
Geplant sind Asset-ID/Name/Typ/Projektzuordnung, Authoritative References, Model-/Rig-/Animation-Source, Style-/Identity-/Material-Contracts, Kamera-/Richtungsregeln, Varianten, Tasks, technische Output-Profile, Staging-/Runtime-Pfade und Versions-/Freigabestatus. Keine große persistente Asset-Datenbank vorziehen.

## 11. Building / Resource / Icon Workflows
Gemeinsames Prinzip:
`Authoritative Reference → veränderliche Parameter → feste Projektcontracts → Generation Package → Preview/Review → explicit APPROVAL → APPROVED Source Asset → technischer Handoff`

## 12. Repository-Verknüpfungen
### DevForge
- Repository: `DrHoschi/DevForge`
- Default: `main`
- DF-06 Frozen Product Commit: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
- Aktueller Dokumentationsträger: `df-06-target-project-handoff-profile-foundation`
- Noch kein DF-07-Entwicklungsbranch autorisiert oder angelegt.

### Siedler Mini
- Repository: `DrHoschi/siedler-mini`
- Default: `main`
- DF-07-Definition verändert dessen Dateien nicht.

## 13. Git-/Dokumentations-Arbeitsweise
Kleine klar benannte DF-Blöcke; aktuellen Branch/Status prüfen; funktionierende Contracts nicht nebenbei umbauen; sichtbare Build-Kennung bei produktiven UI-/Code-Blöcken; Cache-Busting bei JS-Änderungen; PASS/FAIL dokumentieren; GitHub ist Source of Truth; neue Entwicklungsblöcke starten nur von klar festgelegter Baseline.

## 14. Nächster zulässiger Schritt
Ausschließlich das `DF-07 Contract / Documentation Reconciliation Gate` gegen Frozen DF-06 Product Commit `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`.

Dabei Scope, Approval-Record-Mindestfelder, Identity Binding, Beziehung zu DF-04/05/06, README-Sync und harte Non-Goals auf Widerspruchsfreiheit prüfen.

Noch keine DF-07-Implementierung, keine Implementation Scope Reconciliation und kein neuer Entwicklungsbranch im selben Schritt.
