# Animation Tester

Status: einsatzbereit (Standalone V1)

Zweck: Sprite-Animationen und Atlas-Frames projektunabhängig direkt im Browser testen.

Funktionen:
- PNG/Sprite-Sheet laden
- Atlas-JSON laden
- Frames nach Namen filtern und Sequenzen testen
- FPS, Loop und Ping-Pong
- Zoom
- Bewegungswege: Linie, Kreis, Rechteck
- Bewegungsgeschwindigkeit
- Richtungswahl N/NE/E/SE/S/SW/W/NW bzw. Auto
- Debug-Overlays: Grid, Bounding Box, Pivot/Anchor, Fußlinie, Trail
- Pixel- oder geglättete Darstellung

Das Tool hat keine Abhängigkeit zu `window.Assets`, Phaser oder der Siedler-Runtime. Der frühere SpriteTest im Repository `DrHoschi/siedler-mini` bleibt unverändert und dient nur als funktionale Referenz.