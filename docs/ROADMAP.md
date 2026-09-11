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
Projektbezogene Staging-Pfade, Manifest-Dateien, nur ausdrücklich freigegebene und an ihre deklarierte Identität gebundene Source Assets weitergeben und Atlas-/Runtime-Artefakte erst nach Review-/Approval-Gate erzeugen.

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
- Controlled Asset Handoff – DF-05 `FROZEN / PRODUCTIVE`; DF-06 `FROZEN / PRODUCTIVE`; DF-07 `FROZEN / PRODUCTIVE`; DF-08 `DEFINED / NOT IMPLEMENTED`.

DF-HUB-01 bleibt `PASS / 0 BLOCKER / FROZEN`.

## 4. DF-04 – Asset Review Foundation
DF-04A bis DF-04F sind `PASS / FROZEN`. Ein möglicher `Silhouette Geometry Readout` bleibt `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`.

## 5. DF-05 – Controlled Asset Handoff Foundation
Frozen Product Commit: `c677f07773866dfe8f5c98dcb311ab1750538d9c`

Status: `PASS / 0 BLOCKER / FROZEN`

Scope: `Handoff Eligibility + Minimal Manifest Contract + Explicit Target Contract`

DF-05 bleibt geschlossen. Keine Folgefunktion darf seine Eligibility-, Approval- oder Manifest-Semantik nebenbei ändern.

## 6. DF-06 – Target Project Handoff Profile Foundation
Frozen Product Commit: `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`

Status: `PASS / 0 BLOCKER / FROZEN`

Scope: `Project Profile Contract + Explicit Profile Selection Contract + Deterministic Profile Application Contract`

Fachlicher Übergang:
`EXPLICIT TARGET PROJECT PROFILE → deterministische Handoff-Vorgaben → DF-05 Minimalmanifest`

Der Frozen Product Stand enthält genau ein reales explizit auswählbares `Siedler Mini`-Profil. DF-06 erzeugt keine Approval-Autorität.

## 7. DF-07 – Source Asset Approval Authority Foundation
Verbindlicher Contract: `docs/DF-07_SOURCE_ASSET_APPROVAL_AUTHORITY_FOUNDATION_CONTRACT.md`

Frozen Product Commit: `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

Status: `PASS / 0 BLOCKER / FROZEN`

Scope: `Approval Record Contract + Explicit Approval Decision Contract + Approval Identity Binding Contract + Approval Consumption Contract`

Fachlicher Übergang:
`REVIEWED SOURCE ASSET + EXPLICIT IDENTITY → APPROVAL RECORD → DF-05 APPROVAL INPUT → Handoff Manifest`

Der minimale Approval Record enthält `approvalRecordVersion`, `assetId`, `sourceReference`, `sourceVersion` und `decision`. Entscheidungen sind ausschließlich `APPROVED` und `NOT APPROVED`. Die Approval-Autorität gilt nur für die exakte deklarierte Identität. Änderungen führen zu `IDENTITY MISMATCH`; eine Decision wird ausschließlich explizit auf die bestehende DF-05-Eingabe angewendet. DF-05 bleibt danach allein autoritativ für Eligibility und Manifest.

TESTBUILD 1, Completion / Regression / Real Device Gate und Freeze Gate sind `PASS / 0 BLOCKER`. DF-07 ist geschlossen.

### Harte Non-Goals DF-07
Keine GitHub-/Repository-/Datei-/Runtime-Aktion, keine große Asset Library/Approval Database, keine Persistenz zwischen Sessions, kein Approval-Record-Export im ersten TESTBUILD, kein Benutzer-/Rollensystem, keine Signaturen, keine Approval-Historie, kein Batch-Approval, keine automatische oder KI-basierte Freigabe, keine automatische Identitätserkennung, keine Änderung an DF-04A–F, DF-05 oder DF-06, kein Atlas-Build/Sprite-Packing, keine Konvertierung, keine neue Tool-Oberfläche und keine neue Hub-Tür.

## 8. DF-08 – Source Asset Payload Binding Foundation
Verbindlicher Contract:
`docs/DF-08_SOURCE_ASSET_PAYLOAD_BINDING_FOUNDATION_CONTRACT.md`

Definition baseline / Frozen DF-07 Product Commit:
`81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`

Status:
`DEFINED / NOT IMPLEMENTED`

Post-DF-07 Capability Reconciliation:
`PASS / 0 PRODUCT BLOCKER`

Scope:
`Explicit Local Source Payload Selection Contract + Payload-to-Declared-Identity Binding Contract + Approval-/Identity Compatibility Contract + Bound Handoff Candidate Contract`

Fachlicher Übergang:
`APPROVED IDENTITY + EXPLICIT LOCAL SOURCE PAYLOAD → IDENTITY-BOUND HANDOFF CANDIDATE → bestehendes DF-05 Manifest`

### Explicit Local Source Payload
Ein Source-Payload muss ausdrücklich vom Benutzer ausgewählt werden. Dateiname, `sourceReference`, letzter Browser-/Sessionzustand, Projektprofil oder Repository-Historie wählen keinen Payload automatisch aus.

### Payload / Identity Binding
Der ausdrücklich ausgewählte Payload wird an die aktuell deklarierte Kombination aus `assetId`, `sourceReference` und `sourceVersion` gebunden. Wird ein Identitätswert geändert oder ein anderer Payload gewählt, gilt die alte Bindung nicht still weiter.

### Approval Compatibility
Ein gebundener Payload darf nur bei exakter Identitätsübereinstimmung mit einem aktuell gültigen DF-07 Approval Record als Handoff-Kandidat gelten. DF-08 erzeugt keine Approval-Entscheidung und darf keinen `IDENTITY MISMATCH` umgehen.

DF-07 bleibt alleinige Approval-Autorität. DF-05 bleibt alleinige Eligibility-/Manifest-Autorität.

### Payload-Identitätsgrenze
DF-08 führt noch keinen verpflichtenden Content-Hash, Fingerprint oder kryptografischen Dateinachweis ein. Falls später binäre Dateigleichheit nachgewiesen werden muss, ist dafür eine separate Reconciliation erforderlich.

### Persistenz-/Infrastrukturgrenze
Keine Payload Library, Asset Registry, Upload Registry, Datenbank oder andere persistente Infrastruktur wird durch den Contract autorisiert. Die minimale technische Form eines ersten TESTBUILDs wird erst in einer separaten Implementation Scope Reconciliation festgelegt.

### Harte Non-Goals DF-08
Keine GitHub-API-Schreibaktion, kein Commit/Push/PR, keine Dateiübertragung in Ziel-Repositories, kein Runtime-Handoff, kein automatischer Repository-Download, keine große Asset-/Payload-Library oder Datenbank, kein Batch-Handoff, keine automatische Payload-Auswahl, keine automatische Approval-Entscheidung oder stille Approval-Übernahme, keine automatische Identitätserkennung, kein verpflichtender Hash/Fingerprint, keine Signaturen, Benutzer/Rollen oder Historien, kein Atlas/Sprite-Packing, keine Formatkonvertierung und keine Änderung an DF-04/05/06/07.

Der bestehende Branch `df-07-source-asset-approval-authority-foundation` ist für diesen Definition-Step ausschließlich Dokumentationsträger und kein DF-08-Entwicklungsbranch. Kein DF-08-Code wurde in diesem Schritt autorisiert.

## 9. DF-03 – Animation Atlas Contract
Fachlich vorbereitet und nachgelagert. Vorhandene Atlas-Tool-Funktion ist keine automatische Produktionsfreigabe.

## 10. Asset Library / Referenzverwaltung – später
Geplant sind Asset-ID/Name/Typ/Projektzuordnung, Authoritative References, Model-/Rig-/Animation-Source, Style-/Identity-/Material-Contracts, Kamera-/Richtungsregeln, Varianten, Tasks, technische Output-Profile, Staging-/Runtime-Pfade und Versions-/Freigabestatus. Keine große persistente Asset-Datenbank vorziehen.

## 11. Building / Resource / Icon Workflows
Gemeinsames Prinzip:
`Authoritative Reference → veränderliche Parameter → feste Projektcontracts → Generation Package → Preview/Review → explicit APPROVAL → APPROVED Source Asset → explicit Payload Binding → technischer Handoff`

## 12. Repository-Verknüpfungen
### DevForge
- Repository: `DrHoschi/DevForge`
- Default: `main`
- DF-07 Frozen Product Commit: `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`
- DF-08 Definition Baseline: `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`
- aktueller Dokumentationsträger: `df-07-source-asset-approval-authority-foundation`

### Siedler Mini
- Repository: `DrHoschi/siedler-mini`
- Default: `main`
- DF-08 verändert dessen Dateien nicht.

## 13. Git-/Dokumentations-Arbeitsweise
Kleine klar benannte DF-Blöcke; aktuellen Branch/Status prüfen; funktionierende Contracts nicht nebenbei umbauen; sichtbare Build-Kennung bei produktiven UI-/Code-Blöcken; Cache-Busting bei JS-Änderungen; PASS/FAIL dokumentieren; GitHub ist Source of Truth; neue Entwicklungsblöcke starten nur von klar festgelegter Baseline.

## 14. Nächster zulässiger Schritt
Ausschließlich das `DF-08 Contract / Documentation Reconciliation Gate` gegen Frozen DF-07 Product Commit `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`.

Dabei sind Scope, explizite Payload-Auswahl, Payload-/Identity-Bindung, Approval-Kompatibilität, Grenzen zu DF-05/06/07, Payload-Identitätsgrenze und harte Non-Goals auf Widerspruchsfreiheit zu prüfen.

Noch keine DF-08 Implementation Scope Reconciliation, keine Code-Implementierung und kein DF-08-Entwicklungsbranch im selben Schritt.
