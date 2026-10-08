# Texture Lab

Status: `MINIMAL V1 / TESTBUILD`

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

## Manual Test Evidence

Minimaler Test vor Freeze:

1. Texture Lab aus dem Hub öffnen.
2. PNG, JPG und WebP einzeln laden.
3. Fläche, Würfel und Kugel wechseln.
4. Repeat, Scale, Rotation und Offset sichtbar verändern.
5. Alpha/Opacity und Hintergründe prüfen.
6. Sicherstellen, dass keine Generator- oder Handoff-Funktion angeboten wird.
