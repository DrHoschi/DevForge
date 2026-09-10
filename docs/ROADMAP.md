# DevForge – Master Roadmap & Entwicklungsgrenzen

Stand: 2026-09-10

## 1. Vision
DevForge soll eine projektübergreifende Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets werden. Der Prompt Builder ist nur ein Einstiegspunkt. Langfristig verbindet DevForge wiederverwendbare Asset-Definitionen, Referenzen, Generierungsverträge, Vorschau/Review, Freigaben, technische Prüfung, Atlas-/Metadaten-Erzeugung und kontrollierte Übergabe in Ziel-Repositories.

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
Projektbezogene Staging-Pfade, Manifest-Dateien, nur freigegebene Source Assets weitergeben und Atlas-/Runtime-Artefakte erst nach Review-Gate erzeugen.

## 3. Aktuelle Module / DF-HUB-01 Authority
- Source / Result Compare View – `FROZEN / PRODUCTIVE`, Rolle `REVIEW`, autoritativ DF-04F.
- Prompt Builder – `AVAILABLE`, Rolle `GENERATION / HANDOFF`.
- Animated 3D Reference Viewer – `FROZEN / PRODUCTIVE`, Rolle `REFERENCE / CREATE`.
- Deterministic Pose Renderer – `PROTOTYPE / HISTORICAL`, Rolle `REFERENCE / CREATE`.
- Sprite Lab – `AVAILABLE`, Rolle `TECHNICAL ASSET`.
- Atlas Builder – `CONSOLIDATED / REDIRECT`, Rolle `TECHNICAL ASSET`.
- Animation Tester – `AVAILABLE`, Rolle `REVIEW`.
- Asset Inspector – `AVAILABLE`, Rolle `TECHNICAL ASSET`.
- Parameter Playground – `PREPARED / NOT IMPLEMENTED`.
- Controlled Asset Handoff – `FROZEN / PRODUCTIVE`, Rolle `RUNTIME / REPOSITORY HANDOFF`, autoritativ DF-05.

DF-HUB-01 bleibt `PASS / 0 BLOCKER / FROZEN`; der DF-05-Eintrag erweitert den Hub außerhalb des eingefrorenen HUB-01-Blocks.

## 4. Character Animation Contract – erreichter Stand
DF-02F.1–F.5 sind als belegte Capabilities vorhanden. DF-02F.6 und R.3/R.4 sind implementiert; externe deterministische Bildgenerierung bleibt der begrenzende Faktor. R.1 und R.2 bleiben FAIL-Historie.

## 5. DF-04 – Asset Review Foundation
DF-04A bis DF-04F sind `PASS / FROZEN`. Ein möglicher `Silhouette Geometry Readout` bleibt `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`.

## 6. DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation
Eingefrorener Stand: `415d44bf78be86a80c6437f6817a30a056d8ba15`
Status: `PASS / 0 BLOCKER / FROZEN`

DF-05 öffnet diesen Block nicht wieder.

## 7. DF-05 – Controlled Asset Handoff Foundation
Contract:
`docs/DF-05_CONTROLLED_ASSET_HANDOFF_FOUNDATION_CONTRACT.md`

Definition-Baseline:
`415d44bf78be86a80c6437f6817a30a056d8ba15`

Reconciled Documentation Baseline:
`14973c69f667873c16eedf33c1382274d89d37e9`

Implementation Head:
`22f8a59af510c508f0cbc5153a5af583ce352299`

Frozen Product Commit:
`c677f07773866dfe8f5c98dcb311ab1750538d9c`

Branch:
`df-05-controlled-asset-handoff-foundation`

Status:
`PASS / 0 BLOCKER / FROZEN`

Scope:
`Handoff Eligibility + Minimal Manifest Contract + Explicit Target Contract`

Fachlicher Übergang:
`APPROVED SOURCE ASSET → Handoff Manifest → explizites Ziel/Staging → später separat autorisierte Übergabe`

### Frozen Scope
Produktiv exakt:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`
- Root `main.js` nur für den neuen Handoff-Hub-Eintrag
- Root `index.html` nur für `DF-05 · TESTBUILD 1` und Cache-Busting

Die fachliche Tool-Logik bleibt auf Eingabevalidierung, Eligibility und deterministischen Manifest-Bau begrenzt.

### Completion / Device Evidence
Realer iPhone-/Safari-Test am 2026-09-10: alle acht Gate-Punkte PASS. Bestätigt wurden sichtbare TESTBUILD-Kennung, Tool-/Hub-Navigation, Pflichtfeldvalidierung, `NOT APPROVED`-Blockade, `APPROVED`-Freigabe, vollständiges Minimalmanifest, deterministische Wiederholung und funktionierender JSON-Export ohne GitHub-/Repository-/Runtime-Aktion.

### Freeze
Der Completion-/Device-Stand `c677f07773866dfe8f5c98dcb311ab1750538d9c` ist der autoritative DF-05 Frozen Product Stand. Der Freeze selbst führt keine Produktänderung ein; nachgelagerte Freeze-Commits dokumentieren ausschließlich diesen Zustand.

### Non-Goals weiterhin unverändert
Keine Änderung bestehender Tools, keine zusätzliche Datenbank/Services/Frameworks, keine GitHub-API-Übertragung, kein Commit/Push/PR, keine Ziel-Repository-Änderung, keine automatische Dateiübertragung, kein Atlas-Build/Sprite-Packing, keine Konvertierung, keine große Asset-Datenbank, kein Batch-Handoff, kein Dependency Graph, keine automatische Approval-Entscheidung/-Persistenz, keine neue Review-UI, kein Cloud Storage und keine Runtime-Integration.

## 8. DF-03 – Animation Atlas Contract
Fachlich vorbereitet und nachgelagert. Vorhandene Atlas-Tool-Funktion ist keine automatische Produktionsfreigabe.

## 9. Asset Library / Referenzverwaltung – später
Geplant sind Asset-ID/Name/Typ/Projektzuordnung, Authoritative References, Model-/Rig-/Animation-Source, Style-/Identity-/Material-Contracts, Kamera-/Richtungsregeln, Varianten, Tasks, technische Output-Profile, Staging-/Runtime-Pfade und Versions-/Freigabestatus. Keine große persistente Asset-Datenbank vorziehen.

## 10. Building / Resource / Icon Workflows
Gemeinsames Prinzip:
`Authoritative Reference → veränderliche Parameter → feste Projektcontracts → Generation Package → Preview/Review → APPROVED Source Asset → technischer Handoff`

## 11. Review-Automation – später
Technische Automatisierung darf die fachliche visuelle Freigabe nicht automatisch ersetzen.

## 12. Repository-Verknüpfungen
### DevForge
- Repository: `DrHoschi/DevForge`
- Default: `main`
- DF-05 Branch: `df-05-controlled-asset-handoff-foundation`
- DF-05 Frozen Product Commit: `c677f07773866dfe8f5c98dcb311ab1750538d9c`

### Siedler Mini
- Repository: `DrHoschi/siedler-mini`
- Default: `main`
- DF-05 verändert dieses Repository nicht.

## 13. Nicht vorziehen
Keine vollständige Animation Library, komplexe Attachment-Engine, automatische Generierungs-API, finaler automatischer Atlas-Packing-Workflow, große persistente Asset-Datenbank, automatisches Pose-Scoring/KI-Review, Auto-Alignment/Best-Fit oder DF-04 Geometry Readout ohne realen Bedarf parallel vorziehen.

## 14. Git-/Dokumentations-Arbeitsweise
Kleine klar benannte DF-Blöcke; aktuellen Branch/Status prüfen; funktionierende Contracts nicht nebenbei umbauen; sichtbare Build-Kennung bei produktiven UI-/Code-Blöcken; Cache-Busting bei JS-Änderungen; PASS/FAIL dokumentieren; GitHub ist Source of Truth; neue Entwicklungsblöcke starten nur von klar festgelegter Baseline.

## 15. Nächster zulässiger Schritt
Kein DF-05-Folgeblock ist automatisch freigegeben. Ausschließlich eine neue Capability Reconciliation gegen den Frozen Product Commit `c677f07773866dfe8f5c98dcb311ab1750538d9c` darf als nächster Entwicklungsentscheid vorbereitet werden.

Noch keine neue Implementierung im selben Schritt.