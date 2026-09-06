# DF-02F.2 – Animated 3D Preview / Runtime Asset Intake

Stand: 2026-09-06
Status: IMPLEMENTED / DEVICE TEST REQUIRED

## Ziel
DF-02F.2 beweist erstmals, dass eine echte geriggte FBX-Animationsquelle im Browser als 3D-Referenz geladen, analysiert und abgespielt werden kann.

Dieser Block erweitert nicht den fachlichen Animationsumfang. Er enthält bewusst noch keine Timeline, Richtungswahl, Produktionskamera, Bookmarks oder Prompt-Builder-Bridge.

## Testquelle
Authoritative Test Asset:
`X Bot@Standard Walk 2.fbx`

Animation-ID aus DF-02F.1:
`WALK_STANDARD_01`

Root Policy:
`IN_PLACE_REQUIRED`

## Umsetzung
Neues Werkzeug:
`tools/animation-reference-viewer/`

Runtime:
- Three.js im Browser;
- `FBXLoader` für binäre FBX-Dateien;
- lokaler Datei-Intake über Browser File Picker;
- automatische Erkennung von Meshes, Skinned Meshes, Bones und Animation Clips;
- automatische Clip-Wiedergabe;
- Play/Pause ausschließlich zur Intake-Prüfung;
- technische feste Vorschaukamera;
- SkeletonHelper nur als Diagnose-Fallback, falls das FBX kein sichtbares Mesh enthält;
- Anzeige von Clip-Dauer und aktueller Root-X/Z-Position;
- In-Place-Diagnose durch Vergleich der horizontalen Root-/Hips-Position am Clip-Anfang und Clip-Ende.

## Warum der FBX aktuell über File Picker geladen wird
Das GitHub-Repository enthält im DF-02F.2-Branch noch keine binäre Kopie des vom Nutzer bereitgestellten FBX. Der Viewer beweist deshalb zunächst den Browser-Runtime-Intake direkt mit der Originaldatei auf dem Gerät.

Die dauerhafte Asset-Ablage bzw. ein späteres Runtime-Standardformat wird erst nach erfolgreichem Intake-Test festgelegt. Der Test soll nicht durch eine vorschnelle Speicher-/Konvertierungsarchitektur erweitert werden.

## F.2-Grenzen
Noch nicht enthalten:
- Timeline-Scrubber oder Frame-Seeking;
- FR1–FR8 Bookmarks;
- Kamera-Presets;
- N/NE/E/SE/S/SW/W/NW;
- freie Bone-/Pose-Manipulation;
- Prompt-Builder-Bridge;
- weitere Animationen.

## Acceptance Gate
Auf iPhone/iPad/Safari mit `X Bot@Standard Walk 2.fbx` prüfen:
1. Viewer öffnet ohne JavaScript-Fehler;
2. FBX lässt sich über den File Picker laden;
3. sichtbares Character-Mesh wird angezeigt oder der Viewer meldet eindeutig, dass das Asset Motion-only ist;
4. Mixamo-Skeleton/Bones werden erkannt;
5. mindestens ein Animation Clip wird erkannt und abgespielt;
6. Figur bleibt während des Walks an stabiler Weltposition; keine sichtbare globale Vorwärtswanderung;
7. Play/Pause funktioniert reproduzierbar;
8. Reload erzeugt wieder einen leeren Intake-Zustand und lädt das Asset anschließend erneut reproduzierbar.

Bei PASS folgt:
**DF-02F.3 – Animation Timeline / Scrubbing**

Bei FAIL wird ausschließlich der konkrete Runtime-Intake-Fehler innerhalb DF-02F.2 korrigiert.