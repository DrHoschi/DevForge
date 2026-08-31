# Asset Inspector

Status: einsatzbereit

Zweck: technische Eigenschaften von Bildern, Texturen, Sprites und Atlas-Metadaten direkt im Browser prüfen.

Aktuell unterstützt:
- browserlesbare Bildformate wie PNG, JPEG, WebP und GIF
- Abmessungen und Seitenverhältnis
- Pixelanzahl und Dateigröße
- Erkennung von Transparenz/Alpha-Pixeln
- Power-of-two-Prüfung
- Hinweise zu großen Texturen und möglicher Atlas-Nutzung
- JSON-Syntaxprüfung
- Erkennung typischer `frames`-Strukturen in Atlas-JSON

Geplant:
- detailliertere Atlas-Validierung
- Batch-Prüfung mehrerer Assets
- Farbraum-/Metadatenanalyse soweit browserseitig zuverlässig möglich
- 3D-Asset-Prüfung für GLB/glTF und weitere Formate
