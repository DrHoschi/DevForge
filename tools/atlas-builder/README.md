# Atlas Builder

Status: vorbereitet / DF-03 Contract vorhanden

Zweck: Sprite-Atlanten erzeugen, Atlas-Layout prüfen und zugehörige Metadaten/Dateien vorbereiten.

## Aktueller Stand

DF-03 definiert zunächst nur den verbindlichen Character-Animation-Atlas-Contract. Noch kein neuer Editor und kein automatischer Pack-Algorithmus.

Verbindliche Grundlage:

- feste Direction-Reihenfolge: N, NE, E, SE, S, SW, W, NW
- Zeilen = Richtungen
- Spalten = chronologische Frames
- Runtime-Zelle: 256×256 px
- transparentes Safety Padding: 16 px
- gemeinsamer Bottom-Center-Anchor
- feste Dateibenennung für Einzelbilder, Atlas und JSON
- getrennte Character-Animationen; Ressourcen/Werkzeuge bleiben separate Assets/Layers

Siehe `docs/DF-03-ANIMATION-ATLAS-CONTRACT.md`.

Ein JSON-Beispiel liegt unter `tools/atlas-builder/contracts/carrier-walk.atlas.sample.json`.

Geplante spätere Übernahme: vorhandene Atlas-Test- und Exportlogik aus bisherigen Projekten.
