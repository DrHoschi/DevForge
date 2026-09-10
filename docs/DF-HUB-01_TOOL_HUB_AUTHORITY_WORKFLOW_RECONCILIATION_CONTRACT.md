# DF-HUB-01 – Tool Hub Authority & Workflow Reconciliation Contract

Stand: 2026-09-10
Status: DEFINED / NOT IMPLEMENTED
Autoritative Produktbaseline: `17cec9ca4b399d1099be5bf4bb398a74ea27aff2`

## 1. Zweck
DF-HUB-01 reconciliiert ausschließlich die fachliche Autorität, den realen Status und die Workflow-Rolle der auf dem DevForge Tool Hub vorhandenen Türen. Der Block ist ein Dokumentations-/Authority-Contract und verändert weder Hub-UI noch Tool-Code.

## 2. Ausgangslage
Der eingefrorene DF-04F-Stand zeigt, dass einzelne DevForge-Werkzeuge schneller weiterentwickelt wurden als ihre gemeinsame Hub-Navigation. Insbesondere sind Hub-Statusangaben teilweise veraltet, konsolidierte Werkzeuge werden noch als getrennte Türen dargestellt und vorbereitete, aber nicht implementierte Werkzeuge sind nicht eindeutig von real nutzbaren Werkzeugen getrennt.

## 3. Verbindliche Authority-Statusklassen
Jede Hub-Tür muss genau einer fachlichen Klasse zugeordnet werden:

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

Die Zuordnung beschreibt die fachliche Rolle, nicht zwingend die spätere visuelle Reihenfolge oder das Layout des Hubs.

## 5. Reconciliertes Tool-Inventar

### Source / Result Compare View
- Authority: `FROZEN / PRODUCTIVE`
- Autoritativer Stand: `DF-04F – PASS / 0 BLOCKER / FROZEN`
- Workflow-Rolle: `REVIEW`
- Hub-Reconciliation: Der aktuelle Hub-Status `DF-04A · TESTBUILD 1` ist veraltet und darf in einer später separat freigegebenen Hub-Implementierung nicht als aktueller Authority-Status bestehen bleiben.

### Prompt Builder
- Authority: `AVAILABLE`
- Belegter Stand: DF-02F.6 vorhanden; spätere Pose-Handoff-Verstärkungen haben die externe Generation nicht ausreichend deterministisch gemacht.
- Workflow-Rolle: `GENERATION / HANDOFF`
- Grenze: Der Prompt Builder darf nicht als gelöste deterministische Bildgenerierung dargestellt werden.

### Animated 3D Reference Viewer
- Authority: `FROZEN / PRODUCTIVE` für die belegten DF-02F.1–F.5-Capabilities
- Workflow-Rolle: `REFERENCE / CREATE`
- Grenze: Seine Autorität umfasst Intake, Timeline/Scrubbing, Facing/Kamera und Pose Bookmarks; nicht die externe Bildgenerierung.

### Deterministic Pose Renderer
- Authority: `PROTOTYPE / HISTORICAL`
- Workflow-Rolle: `REFERENCE / CREATE`
- Navigation Authority: keine aktuelle Produktionsquelle; historischer DF-02E-Prototyp.

### Sprite Lab
- Authority: `AVAILABLE`
- Workflow-Rolle: `TECHNICAL ASSET`
- Reale Capability: Bild/Sprite-Sheet laden, Atlas-JSON importieren, Frames definieren, Anchor/Scale bearbeiten und JSON exportieren.
- Grenze: Vorhandene Tool-Funktion ist nicht gleichbedeutend mit freigegebener Atlas-Produktionsintegration.

### Atlas Builder
- Authority: `CONSOLIDATED / REDIRECT`
- Workflow-Rolle: `TECHNICAL ASSET`
- Navigation Authority: keine eigenständige Capability-Autorität; die bestehende Seite verweist auf das konsolidierte Sprite Lab / Atlas Builder.
- Grenze: Die spätere Hub-Darstellung darf nicht suggerieren, dass zwei unabhängige produktive Atlas-Werkzeuge existieren.

### Animation Tester
- Authority: `AVAILABLE`
- Workflow-Rolle: `REVIEW`
- Reale Capability: Standalone-Frames/Manifest, FPS, Loop, Frame-Stepping, Onion-Skin und Bottom-Center-Anchor-Review.
- Grenze: Kein Atlas-/Runtime-Freigabegate allein durch seine Existenz.

### Asset Inspector
- Authority: `AVAILABLE`
- Workflow-Rolle: `TECHNICAL ASSET`
- Reale Capability: technische Prüfung von Bild-/Textur-/Sprite-/Atlas-Eigenschaften.
- Grenze: keine automatische fachliche Asset-Freigabe.

### Parameter Playground
- Authority: `PREPARED / NOT IMPLEMENTED`
- Workflow-Rolle: noch keine aktive Produktionsrolle
- Navigation Authority: darf nicht als einsatzbereites Werkzeug erscheinen, solange keine reale Tool-Funktion implementiert und separat freigegeben ist.

## 6. Hub-Navigationsautorität
Eine spätere, separat freizugebende Hub-Implementierung darf ausschließlich auf Grundlage dieses Contracts entscheiden:
- welche aktiven Capability-Türen sichtbar bleiben;
- wie Authority-Status dargestellt werden;
- wie historische/prototypische Werkzeuge gekennzeichnet werden;
- wie konsolidierte Redirects dargestellt oder in ihre Ziel-Capability integriert werden;
- wie nicht implementierte vorbereitete Werkzeuge von real nutzbaren Werkzeugen getrennt werden;
- wie Workflow-Rollen verständlich erkennbar gemacht werden.

Dieser Contract legt ausdrücklich noch keine konkrete Kartenreihenfolge, Farben, Icons, CSS-Geometrie oder Smartphone-/Desktop-Anordnung fest.

## 7. Nicht Bestandteil von DF-HUB-01
- keine Änderung an `index.html`;
- keine Änderung an `main.js`;
- keine Änderung an Dateien unter `tools/`;
- kein neuer Entwicklungsbranch in diesem Contract-Schritt;
- kein neues Werkzeug;
- keine neue Capability;
- kein Tool-Refactor;
- kein Redirect-Umbau;
- keine Statusänderung innerhalb eingefrorener Tool-Contracts;
- keine Atlas-Produktionsfreigabe;
- kein Repository-Handoff;
- kein UI-/CSS-Umbau;
- kein DF-04G.

## 8. Später vorgemerkt
`Silhouette Geometry Readout` aus der DF-04F-Erfahrung wird ausschließlich als `LATER / ONLY IF REAL REVIEW NEED IS PROVEN` vorgemerkt. Daraus entsteht mit DF-HUB-01 weder DF-04G noch eine Implementierungsfreigabe.

## 9. PASS-Kriterien für Contract / Documentation Reconciliation
DF-HUB-01 ist als Contract reconciliiert, wenn:
1. die Produktbaseline exakt `17cec9ca4b399d1099be5bf4bb398a74ea27aff2` bleibt;
2. alle neun aktuell im Hub inventarisierten Türen fachlich klassifiziert sind;
3. Authority-Status und Workflow-Rolle nicht über den belegten Repository-Stand hinausgehen;
4. Atlas Builder als konsolidierter Redirect und Parameter Playground als nicht implementiert erkannt sind;
5. DF-04F nicht wieder geöffnet wird;
6. Geometry Readout nur als LATER vorgemerkt ist;
7. keinerlei Produktcode oder Hub-UI im Contract-/Reconciliation-Schritt geändert wird.

## 10. Folgegrenze
Nach erfolgreicher Contract-/Documentation-Reconciliation ist noch keine Hub-Implementierung automatisch freigegeben. Der nächste zulässige Schritt muss separat entschieden werden. Falls eine Umsetzung freigegeben wird, benötigt sie eine klar benannte neue Entwicklungsbaseline exakt vom eingefrorenen Produktstand beziehungsweise vom reconciliierten Dokumentationsstand und einen separaten Implementierungsbranch.
