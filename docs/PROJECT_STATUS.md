# DevForge – Project Status

Stand: 2026-09-10

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Dokumentationsbranch: `df-04f-silhouette-geometry-guide-foundation`
- Eingefrorener Produktstand / autoritative DF-HUB-01-Baseline: `17cec9ca4b399d1099be5bf4bb398a74ea27aff2`
- Eingefrorener Review-Stand: `DF-04F – PASS / 0 BLOCKER / FROZEN`
- DF-HUB-01 Contract: `docs/DF-HUB-01_TOOL_HUB_AUTHORITY_WORKFLOW_RECONCILIATION_CONTRACT.md`

# DF-04 – Asset Review Foundation
DF-04A bis DF-04F sind `PASS / FROZEN`. Der aktuelle autoritative Produktstand ist `17cec9ca4b399d1099be5bf4bb398a74ea27aff2`.

DF-04F bleibt geschlossen. Der getestete Produktcode und die sichtbare Geräte-Build-Kennung `DF-04F · TESTBUILD 1` werden durch DF-HUB-01 nicht verändert.

Ein möglicher `Silhouette Geometry Readout` wird ausschließlich als `LATER / ONLY IF REAL REVIEW NEED IS PROVEN` vorgemerkt. Kein DF-04G ist freigegeben.

# DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation
Contract:
`docs/DF-HUB-01_TOOL_HUB_AUTHORITY_WORKFLOW_RECONCILIATION_CONTRACT.md`

Status:
`DEFINED / DOCUMENTATION RECONCILED / NOT IMPLEMENTED`

Autoritative Produktbaseline:
`17cec9ca4b399d1099be5bf4bb398a74ea27aff2`

## Reconciliertes Hub-Inventar
- Source / Result Compare View → `FROZEN / PRODUCTIVE` → `REVIEW` → aktueller Stand DF-04F; Hub-Label DF-04A ist veraltet.
- Prompt Builder → `AVAILABLE` → `GENERATION / HANDOFF` → reale Funktion vorhanden, externe deterministische Bildgenerierung bleibt ungelöst.
- Animated 3D Reference Viewer → `FROZEN / PRODUCTIVE` für belegte DF-02F.1–F.5-Capabilities → `REFERENCE / CREATE`.
- Deterministic Pose Renderer → `PROTOTYPE / HISTORICAL` → `REFERENCE / CREATE`.
- Sprite Lab → `AVAILABLE` → `TECHNICAL ASSET` → reale technische Funktionen vorhanden, keine automatische Atlas-Produktionsfreigabe.
- Atlas Builder → `CONSOLIDATED / REDIRECT` → `TECHNICAL ASSET` → verweist auf Sprite Lab / Atlas Builder.
- Animation Tester → `AVAILABLE` → `REVIEW`.
- Asset Inspector → `AVAILABLE` → `TECHNICAL ASSET`.
- Parameter Playground → `PREPARED / NOT IMPLEMENTED` → noch keine aktive Produktionsrolle.

## Contract-/Documentation-Reconciliation
PASS-Kriterien geprüft:
- Baseline exakt `17cec9ca4b399d1099be5bf4bb398a74ea27aff2`;
- alle neun Hub-Türen klassifiziert;
- keine Authority über den belegten Repository-Stand hinaus;
- Atlas Builder korrekt als konsolidierter Redirect;
- Parameter Playground korrekt als nicht implementiert;
- DF-04F nicht geöffnet;
- Geometry Readout nur LATER;
- keine Änderung an `index.html`, `main.js` oder `tools/`.

Ergebnis:
`DF-HUB-01 Contract / Documentation Reconciliation – PASS / 0 BLOCKER`

# Aktueller Gate-Status
`DF-HUB-01 – DEFINED / DOCUMENTATION RECONCILED / NOT IMPLEMENTED`

Es wurde noch kein DF-HUB-01-Entwicklungsbranch angelegt und keine Hub-/Tool-Implementierung verändert.

# Nächster zulässiger Schritt
Ausschließlich fachlich entscheiden, ob auf Basis des reconciliierten DF-HUB-01-Contracts ein separater kleiner Hub-Implementierungsblock freigegeben werden soll. Falls ja, muss zuerst ein separater Entwicklungsbranch vom reconciliierten Dokumentationsstand angelegt werden. Noch keine Implementierung im selben Schritt.
