# Texture Lab

Status: `V1 TEXTURE TESTER / PASS WITH EVIDENCE LIMITATIONS / FROZEN`

Texture Lab Minimal V1 ist ein lokaler Texture Tester für DevForge. Er dient dazu, normale Bild-/Texturquellen schnell im Browser zu prüfen, bevor daraus spätere Material- oder Pipeline-Schritte entstehen.

## V1 Capability

- lokale PNG-, JPG- und WebP-Dateien laden;
- Base-Color-/Diffuse-Textur auf Fläche, Würfel und Kugel anzeigen;
- Repeat X/Y, Objekt-Scale, Rotation und Offset visuell prüfen;
- Alpha/Transparenz über Opacity und wechselnde Hintergründe sichtbar machen;
- einfache Lichtintensität im Preview steuern;
- Kamera per Maus/Touch drehen, zoomen und schwenken.

## Boundary

Dieses Tool ist bewusst kein Generator und keine Produktionsfreigabe.

Nicht enthalten in Minimal V1:

- keine KI-Texturerzeugung;
- keine automatische Normal-, Roughness-, Metalness- oder AO-Map-Erzeugung;
- keine Sprite-, Atlas-, Rig-, Skeleton- oder Animation-Authority;
- keine Änderung an DF-05, DF-06, DF-07, DF-08 oder DF-09;
- keine Repository-, Runtime- oder Asset-Handoff-Funktion.

## Verhältnis zu bestehenden Tools

- Asset Inspector prüft technische Eigenschaften von Assets.
- Sprite Lab bearbeitet Sprites, Frames, Pivot/Anchor und Atlas-Daten.
- Animation Tester prüft Frame-Loops und Animationstiming.
- Texture Lab prüft ausschließlich Material-/Texturwirkung auf einfachen 3D-Prüfkörpern.

## Completion Evidence

Frozen Product Commit: `200b769c3b4fff5f236dee4ca791a2f5867a40c0`

Completion-/Evidence-Dokument: `docs/TEXTURE_LAB_MINIMAL_V1_COMPLETION_EVIDENCE_FREEZE.md`

Minimaler Test vor Freeze wurde erfüllt:

1. Texture Lab aus dem Hub öffnen.
2. PNG, JPG und WebP einzeln laden.
3. Fläche, Würfel und Kugel wechseln.
4. Repeat, Scale, Rotation und Offset sichtbar verändern.
5. Alpha/Opacity und Hintergründe prüfen.
6. Sicherstellen, dass keine Generator- oder Handoff-Funktion angeboten wird.

Gate Result: `Texture Lab – Minimal V1 Completion / Evidence / Freeze: PASS / FROZEN`

## Abgeschlossene Erweiterung – Multi Map Preview

Status: `PASS WITH EVIDENCE LIMITATIONS / FROZEN`

Scope-Dokument: `docs/TEXTURE_LAB_MULTI_MAP_PREVIEW_SCOPE.md`

Der abgeschlossene Produktblock erweitert Texture Lab vom Base-Color-Tester zum Preview-Tester vorhandener Material-Maps:

- Base Color bleibt wie in Minimal V1;
- zusätzliche lokale Slots für Normal, Roughness, Metalness und AO;
- alle geladenen Maps werden gemeinsam auf Fläche, Würfel oder Kugel geprüft;
- Transform-Parameter bleiben materialweit synchron;
- pro Slot muss ein sichtbarer Readout mit Dateiname, Pixelgröße und Dateigröße möglich sein;
- iPhone-Safari-Dateiauswahl und Preview-Rendering bleiben Acceptance-relevant.

Nicht enthalten: Map-Erzeugung, Texture Creator / Map Generator, Export, Download, Asset-Handoff, Projekt-Persistenz, dediziertes Icon, GLB-Import oder DF-05–DF-09-Änderung.


## Multi Map Preview Verification

Implementation Commit: `060793be662a9fa33e0fb6508c855226b52b1c89`

Verification-Dokument: `docs/TEXTURE_LAB_MULTI_MAP_PREVIEW_IMPLEMENTATION_VERIFICATION.md`

Statisch bestanden sind Slot-UI, iOS-Dateiendungsfallback, Map-Zuweisung auf `MeshStandardMaterial`, synchronisierte Texture-Transforms und sichtbare Readouts. Der funktionale Nutzertest auf iPhone Safari ist bestanden; Evidence und Grenzen sind im Material-Controls-Verification-Dokument dokumentiert.


## Material Controls / Slot Cleanup + Icon

Status: `PASS WITH EVIDENCE LIMITATIONS / FROZEN`

Verification-Dokument: `docs/TEXTURE_LAB_MATERIAL_CONTROLS_SLOT_CLEANUP_ICON_VERIFICATION.md`

Ergänzt wurden:

- dediziertes Hub-Icon `assets/tool-icons/texture-lab.png`;
- Tool-Header-Icon;
- Map entfernen pro Slot;
- Slot aktiv/deaktiv pro Slot;
- Normal Strength;
- AO Intensity;
- Roughness-Basiswert;
- Metalness-Basiswert.

Nicht enthalten bleiben Map-Erzeugung, Texture Creator / Map Generator, Export, Download, Asset-Handoff, Projekt-Persistenz, GLB-Import oder DF-05–DF-09-Änderung.

## Erweiterter V1 Completion / Evidence / Freeze

Frozen Product Commit: `be9534c62cc48c21e664aed84b0476e590364d16`.

Nutzer bestätigt: alle fünf Maps laden, Preview sichtbar, Maps entfernen, Slots aktiv/deaktiv, Materialregler und Fläche/Würfel/Kugel. Status: `PASS WITH EVIDENCE LIMITATIONS / FROZEN`.

Vollständige Evidence einschließlich nicht separat bestätigter Reset-/Format-Regression und weiterer Device-Grenzen: `docs/TEXTURE_LAB_MATERIAL_CONTROLS_SLOT_CLEANUP_ICON_VERIFICATION.md`.

Der ursprüngliche Base-Color-Minimal-V1-Freeze oben bleibt historische Grundlage. Das Icon ist im nachfolgenden Material-Controls-Block ergänzt worden. Main-Integration bleibt separat.

## Nächster zulässiger Schritt

Ausschließlich **Texture Lab V1 – main Integration Reconciliation**, read-only: den vollständigen Freeze-Stand auf `feature/texture-lab-minimal-v1` mit dem dann aktuellen `main` vergleichen. Keine Main-Integration in diesem Gate; eine Integration bleibt separat zu autorisieren.
