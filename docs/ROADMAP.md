# DevForge – Master Roadmap & Entwicklungsgrenzen

Stand: 2026-09-11

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
- Controlled Asset Handoff – DF-05 `FROZEN / PRODUCTIVE`; DF-06 `FROZEN / PRODUCTIVE`; DF-07 `IMPLEMENTED / TESTBUILD 1 / COMPLETION + REGRESSION + REAL DEVICE PASS / NOT FROZEN` erweitert denselben Handoff-Kontext um explizite identitätsgebundene Approval Records.

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

## 7. DF-07 – Source Asset Approval Authority Foundation
Verbindlicher Contract:
`docs/DF-07_SOURCE_ASSET_APPROVAL_AUTHORITY_FOUNDATION_CONTRACT.md`

Definition baseline / Frozen DF-06 Product Commit:
`a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

Development Branch:
`df-07-source-asset-approval-authority-foundation`

Development Branch Authorization Baseline:
`8da923bf37f5005689918382560a893ca5cf0818`

TESTBUILD-1 Product Commit:
`81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

Status:
`IMPLEMENTED / TESTBUILD 1 / COMPLETION + REGRESSION + REAL DEVICE PASS / 0 BLOCKER / NOT FROZEN`

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

### Reconciled Implementation Scope
`DF-07 IMPLEMENTATION SCOPE RECONCILIATION – PASS / 0 BLOCKER`

Der maximal zulässige TESTBUILD-1-Produktscope ist:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`
- Root `index.html` ausschließlich für sichtbare `DF-07 · TESTBUILD 1`-Kennung und notwendiges Cache-Busting.

`main.js` bleibt außerhalb des Scopes. Keine neue Hub-Tür, keine neue eigenständige Tool-Oberfläche, keine zusätzliche Service-/Datenbank-/Registry-Schicht.

Die bestehende Handoff-Oberfläche wurde ausschließlich um einen klar getrennten Approval-Record-Bereich ergänzt. Ein gültiger identitätsgleicher Record darf ausschließlich seine `decision` explizit auf die bestehende DF-05-Eingabe `approvalStatus` anwenden. Danach bleibt DF-05 allein autoritativ für `ELIGIBLE` / `NOT ELIGIBLE`.

Ändert sich `assetId`, `sourceReference` oder `sourceVersion`, darf ein vorher erzeugter Record nicht mehr als Approval-Autorität verwendet werden; TESTBUILD 1 lehnt ihn deterministisch als `IDENTITY MISMATCH` ab.

### Development Branch / Authorization
`DF-07 DEVELOPMENT BRANCH / AUTHORIZATION – PASS / 0 BLOCKER`

Der separate Entwicklungsbranch `df-07-source-asset-approval-authority-foundation` wurde exakt vom reconcilierten Scope-Stand `8da923bf37f5005689918382560a893ca5cf0818` angelegt. Dieser Commit ist die verbindliche Development Branch Authorization Baseline.

### TESTBUILD-1 Implementation
`DF-07 – IMPLEMENTED / TESTBUILD 1 / SCOPE CLEAN`

Product Commit:
`81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

Der Produkt-Diff blieb innerhalb der drei freigegebenen Dateien. Keine zusätzliche Capability wurde eingeführt.

### Completion / Regression / Real Device Evidence
`DF-07 COMPLETION / REGRESSION / DEVICE GATE – PASS / 0 BLOCKER`

Reale iPhone-/Safari-Evidenz vom 2026-09-11 bestätigt die sichtbare TESTBUILD-1-Kennung im Hub und Handoff-Tool, `INVALID` ohne Decision, `VALID` für explizites `NOT APPROVED` und `APPROVED`, die explizite statt automatische Übertragung auf DF-05, unveränderte DF-05-Eligibility, deterministischen `IDENTITY MISMATCH` bei `TEST-V1 → TEST-V2`, einen neuen gültigen Record für `TEST-V2` sowie die weiterhin funktionierende DF-05-Manifest-Erzeugung mit `approvalStatus: "APPROVED"`.

Der Manifest-Exportpfad wurde durch DF-07 nicht verändert. Seine reale iPhone-/Safari-Funktion war bereits im Frozen-DF-05-Gate bestätigt; im DF-07-Gerätegate wurde kein neuer Export-Blocker beobachtet.

DF-07 bleibt trotz PASS dieses Gates ausdrücklich `NOT FROZEN`.

### Harte Non-Goals
Keine GitHub-/Repository-/Datei-/Runtime-Aktion, keine große Asset Library/Approval Database, keine Persistenz zwischen Sessions, kein Approval-Record-Export im ersten TESTBUILD, kein Benutzer-/Rollensystem, keine Signaturen, keine Approval-Historie, kein Batch-Approval, keine automatische oder KI-basierte Freigabe, keine automatische Identitätserkennung, keine Änderung an DF-04A–F, DF-05 oder DF-06, kein Atlas-Build/Sprite-Packing, keine Konvertierung, keine neue Tool-Oberfläche und keine neue Hub-Tür.

## 8. DF-03 – Animation Atlas Contract
Fachlich vorbereitet und nachgelagert. Vorhandene Atlas-Tool-Funktion ist keine automatische Produktionsfreigabe.

## 9. Asset Library / Referenzverwaltung – später
Geplant sind Asset-ID/Name/Typ/Projektzuordnung, Authoritative References, Model-/Rig-/Animation-Source, Style-/Identity-/Material-Contracts, Kamera-/Richtungsregeln, Varianten, Tasks, technische Output-Profile, Staging-/Runtime-Pfade und Versions-/Freigabestatus. Keine große persistente Asset-Datenbank vorziehen.

## 10. Building / Resource / Icon Workflows
Gemeinsames Prinzip:
`Authoritative Reference → veränderliche Parameter → feste Projektcontracts → Generation Package → Preview/Review → explicit APPROVAL → APPROVED Source Asset → technischer Handoff`

## 11. Repository-Verknüpfungen
### DevForge
- Repository: `DrHoschi/DevForge`
- Default: `main`
- DF-06 Frozen Product Commit: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
- DF-07 Development Branch: `df-07-source-asset-approval-authority-foundation`
- DF-07 Development Branch Authorization Baseline: `8da923bf37f5005689918382560a893ca5cf0818`
- DF-07 TESTBUILD-1 Product Commit: `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

### Siedler Mini
- Repository: `DrHoschi/siedler-mini`
- Default: `main`
- DF-07 verändert dessen Dateien nicht.

## 12. Git-/Dokumentations-Arbeitsweise
Kleine klar benannte DF-Blöcke; aktuellen Branch/Status prüfen; funktionierende Contracts nicht nebenbei umbauen; sichtbare Build-Kennung bei produktiven UI-/Code-Blöcken; Cache-Busting bei JS-Änderungen; PASS/FAIL dokumentieren; GitHub ist Source of Truth; neue Entwicklungsblöcke starten nur von klar festgelegter Baseline.

## 13. Nächster zulässiger Schritt
Ausschließlich ein separates DF-07 Freeze Gate gegen den getesteten Product Commit `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e` und die dokumentierte Completion-/Device-Evidenz.

Noch kein Freeze innerhalb dieses Documentation Steps.
