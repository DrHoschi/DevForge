# DevForge

DevForge ist die zentrale webbasierte Entwickler-Toolbox für unterschiedliche Spiele- und Softwareprojekte.

## Module
- Prompt Builder – projektbezogene Master-Prompts und Übergabedatenblätter für Figuren, Gebäude, Ressourcen, Icons und weitere Assets erstellen
- Sprite Lab – Sprites laden, skalieren, Pivot/Anker, Abstände und Ausrichtung testen
- Atlas Builder – Sprite-Atlanten erzeugen und Metadaten prüfen
- Animation Tester – Frames, FPS, Loop und Zustände testen
- Asset Inspector – technische Eigenschaften von Bildern, Texturen, Sprites und später 3D-Assets prüfen
- Parameter Playground – Parameter verändern und Auswirkungen direkt sichtbar machen

## DF-01 – Prompt Builder Foundation
Der erste Prompt-Builder-Stand ist bewusst projektübergreifend aufgebaut und enthält zunächst ein `Siedler Mini`-Preset für die aktuelle Asset-/Figurenvorbereitung.

Enthalten:
- Projekt-Preset und generischer Modus
- Asset-Typen Character, Building, Resource, Icon und Environment
- Task-/Animationsauswahl
- 45°-Top-down- und 8-Richtungsmodell mit visueller Winkelreferenz
- editierbarer Identity-/Reference-Contract und Zusatzvorgaben
- Live-Master-Prompt
- Export als TXT und strukturierte JSON-Datei
- druckbares Prompt-Datenblatt über den Browser-PDF-Dialog

Der Prompt Builder ist kein Siedler-spezifisches Werkzeug. Weitere Projekt-Presets können auf derselben Struktur ergänzt werden.

## Projektbezug
Die Tools sollen projektübergreifend nutzbar sein, unter anderem für Siedler Mini, Neue Siedler, Mini-Worms und zukünftige Projekte.

## Archivierter Altstand
Der frühere parametrische Stahlträgerhallen-Prototyp wurde vor der Umnutzung unverändert auf folgendem Branch gesichert:

`archive/baustellenplaner-halle-legacy`

Dieser Altstand bleibt als Referenz für den Baustellenplaner erhalten.

## Status
Grundstruktur vorhanden. DF-01 Prompt Builder Foundation ist auf eigenem Feature-Branch testbereit.
