# DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation Contract

Stand: 2026-09-10
Status: PASS / 0 BLOCKER / FROZEN
Autoritative Produktbaseline vor DF-HUB-01: `17cec9ca4b399d1099be5bf4bb398a74ea27aff2`
DF-HUB-01 Entwicklungsbaseline: `e3aea9ea8e492b7e2c7dca474b1350461383adcd`

## 1. Zweck
DF-HUB-01 reconciliiert ausschließlich die fachliche Autorität, den realen Status und die Workflow-Rolle der auf dem DevForge Tool Hub vorhandenen Türen. Der Block verändert keine Capability innerhalb der einzelnen Tools.

## 2. Ausgangslage
Der eingefrorene DF-04F-Stand zeigte, dass einzelne DevForge-Werkzeuge schneller weiterentwickelt wurden als ihre gemeinsame Hub-Navigation. Insbesondere waren Hub-Statusangaben teilweise veraltet, konsolidierte Werkzeuge wurden noch als getrennte Türen dargestellt und vorbereitete, aber nicht implementierte Werkzeuge waren nicht eindeutig von real nutzbaren Werkzeugen getrennt.

## 3. Verbindliche Authority-Statusklassen
Jede Hub-Tür ist genau einer fachlichen Klasse zugeordnet:

- `FROZEN / PRODUCTIVE` – vertraglich geprüft, real getestet und eingefroren.
- `AVAILABLE` – reale Funktion vorhanden und nutzbar, aber nicht als vollständig eingefrorener Produktionsworkflow autorisiert.
- `PROTOTYPE / HISTORICAL` – vorhandener historischer oder experimenteller Stand; keine aktuelle Produktionsautorität.
- `PREPARED / NOT IMPLEMENTED` – fachlich vorgesehen, aber keine aktive Tool-Funktion vorhanden.
- `CONSOLIDATED / REDIRECT` – keine eigenständige Capability-Autorität mehr; Funktion wurde in ein anderes Werkzeug konsolidiert.

Eine Hub-Tür darf nicht durch einen werbenden oder historischen Status eine höhere Reife suggerieren als Repository und Contracts tatsächlich belegen.

## 4. Verbindliche Workflow-Rollen
Aktive Capabilities werden einer primären Workflow-Rolle zugeordnet:

1. `REFERENCE / CREATE`
2. `GENERATION / HANDOFF`
3. `REVIEW`
4. `TECHNICAL ASSET`
5. `RUNTIME / REPOSITORY HANDOFF`

Die Zuordnung beschreibt die fachliche Rolle, nicht zwingend die visuelle Reihenfolge oder das Layout des Hubs.

## 5. Eingefrorenes Tool-Inventar

### Source / Result Compare View
- Authority: `FROZEN / PRODUCTIVE`
- Autoritativer Stand: `DF-04F – PASS / 0 BLOCKER / FROZEN`
- Workflow-Rolle: `REVIEW`

### Prompt Builder
- Authority: `AVAILABLE`
- Belegter Stand: DF-02F.6 vorhanden; externe deterministische Bildgenerierung bleibt begrenzt.
- Workflow-Rolle: `GENERATION / HANDOFF`

### Animated 3D Reference Viewer
- Authority: `FROZEN / PRODUCTIVE` für die belegten DF-02F.1–F.5-Capabilities
- Workflow-Rolle: `REFERENCE / CREATE`

### Deterministic Pose Renderer
- Authority: `PROTOTYPE / HISTORICAL`
- Workflow-Rolle: `REFERENCE / CREATE`
- Keine aktuelle Produktionsquelle.

### Sprite Lab
- Authority: `AVAILABLE`
- Workflow-Rolle: `TECHNICAL ASSET`
- Vorhandene Tool-Funktion ist keine automatische Atlas-Produktionsfreigabe.

### Atlas Builder
- Authority: `CONSOLIDATED / REDIRECT`
- Workflow-Rolle: `TECHNICAL ASSET`
- Keine eigenständige Capability-Autorität; die Tür verweist auf das konsolidierte Werkzeug.

### Animation Tester
- Authority: `AVAILABLE`
- Workflow-Rolle: `REVIEW`

### Asset Inspector
- Authority: `AVAILABLE`
- Workflow-Rolle: `TECHNICAL ASSET`

### Parameter Playground
- Authority: `PREPARED / NOT IMPLEMENTED`
- Noch keine aktive Produktionsrolle und kein aktiver Tool-Link.

## 6. Eingefrorener Implementierungsumfang
DF-HUB-01 änderte ausschließlich:
- `index.html` – Hub-Identität, sichtbare Testbuild-Kennung, Status-/Rollen-Darstellung und Cache-Busting;
- `main.js` – Authority-Klassen, Workflow-Rollen und reconciliierte Türtexte für alle neun Hub-Einträge;
- Projektdokumentation.

Keine Datei unter `tools/` wurde verändert. Keine neue Capability wurde eingeführt.

Die getestete sichtbare Kennung bleibt:
`DF-HUB-01 · TESTBUILD 1`

Das getestete Cache-Busting bleibt:
`main.js?v=dfhub01-testbuild1`

## 7. Completion / Regression Evidenz
Der vollständige Branch-Diff gegen `e3aea9ea8e492b7e2c7dca474b1350461383adcd` wurde regressiert. Vor Gate-/Freeze-Dokumentation enthielt der Produktdiff ausschließlich `index.html` und `main.js`; alle weiteren Änderungen waren Dokumentation. Keine Datei unter `tools/` wurde verändert.

Realer iPhone-/Safari-Test vom 2026-09-10: `PASS / 0 BLOCKER`.

Bestätigt wurden:
- responsive Nutzbarkeit;
- Sichtbarkeit aller neun Hub-Türen;
- lesbare Authority-/Workflow-Kennzeichnungen;
- funktionierende vorhandene Hub-Links;
- Atlas Builder eindeutig als `CONSOLIDATED / REDIRECT`;
- Parameter Playground ohne aktiven Tool-Link;
- einzelne unvollständige Zieltools sind kein DF-HUB-01-Blocker, solange die Hub-Navigation korrekt funktioniert.

## 8. Nicht Bestandteil / weiterhin ausgeschlossen
- keine Capability-Änderung innerhalb eines Tools;
- kein Tool-Refactor;
- kein Redirect-Umbau;
- keine Atlas-Produktionsfreigabe;
- kein Repository-Handoff;
- kein DF-04G;
- kein automatisches Scoring oder Auto-Alignment.

## 9. Später vorgemerkt
`Silhouette Geometry Readout` bleibt ausschließlich `LATER / ONLY IF REAL REVIEW NEED IS PROVEN`.

## 10. Freeze Gate
Gate-Ergebnis:
`DF-HUB-01 – PASS / 0 BLOCKER / FROZEN`

Der bestätigte Produktcode wurde im Freeze-Schritt nicht verändert. Die sichtbare Testbuild-Kennung und das Cache-Busting bleiben unverändert erhalten.

## 11. Folgegrenze
Kein Folgeblock ist automatisch freigegeben. Der nächste fachliche Schritt muss gegen den eingefrorenen DF-HUB-01-Stand separat reconciliiert und ausdrücklich definiert werden.