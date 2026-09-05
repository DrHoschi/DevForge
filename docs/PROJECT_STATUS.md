# DevForge – Project Status

Stand: 2026-09-05

## Zweck
DevForge ist eine projektübergreifende webbasierte Entwickler-Toolbox. Aktueller Schwerpunkt ist die reproduzierbare Vorbereitung, Generierung und Prüfung von Character-Animationsframes.

## Repositories
### DevForge
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- GitHub Pages: `https://drhoschi.github.io/DevForge/`
- Aktueller Entwicklungsbranch: `df-02d3-approved-motion-history`
- Aktueller Prompt-Builder-Stand: `DF-02D.3R`

## AKTUELLER ARBEITSAUFTRAG – POSE REFERENCE LIBRARY EXPERIMENT
Vor weiteren Carrier-FR3-Versuchen wird eine neutrale visuelle Pose-Referenzbibliothek aufgebaut und getestet.

### VERBINDLICHER POSE-DUMMY / PARAMETRISIERUNGSFIGUR
Für die Erstellung aller Pose-Referenzen wird ab jetzt immer dieselbe neutrale technische Mannequin-Figur verwendet, entsprechend der vom Nutzer freigegebenen visuellen Referenz:
- glattes, gesichtsloses humanoides 3D-Mannequin;
- neutral hellgrau/beige, matte bis leicht satinierte Oberfläche;
- klar segmentierte Gelenke an Schulter, Ellenbogen, Handgelenk, Hüfte, Knie und Sprunggelenk;
- vereinfachte anatomische Menschenproportionen, weder muskulös überzeichnet noch stilisiert/cartoonhaft;
- glatter ovaler Kopf ohne Gesicht, Haare oder Identitätsmerkmale;
- vereinfachter Brustkorb, Taille/Becken, Ober-/Unterarme, Hände, Ober-/Unterschenkel und neutrale fuß-/schuhartige Füße;
- saubere technische 3D-Visualisierung mit weicher neutraler Beleuchtung, sodass Gelenkwinkel und Silhouette eindeutig lesbar sind.

Diese Figur ist ausdrücklich **KEIN Character Design und KEIN Spielcharakter**. Sie ist ausschließlich eine **technische Parametrisierungs-/Posefigur für DevForge**. Ihre Aufgabe ist nur, Pose, Gelenkwinkel, Gewichtsverlagerung, Körperhöhe, Arm-/Beinbewegung und Silhouette eindeutig visuell zu codieren. Sie darf niemals als Vorlage für Gesicht, Körperdesign, Kleidung, Materialien, Equipment oder Stil des späteren Characters interpretiert werden.

Wenn später im Prompt Builder eine Pose Reference ausgewählt wird, bedeutet die Mannequin-Abbildung ausschließlich: `übernimm diese Körperpose / Articulation`. Der eigentliche Character kommt weiterhin vollständig aus der Authoritative Character Reference bzw. dem Sequence Appearance Anchor.

### Kameravertrag der Posefigur
- feste 45°-Top-Down-Gameplay-Kamera passend zum Animationssystem;
- Richtung und Kamera werden pro Pose-Asset eindeutig benannt;
- gleiche Mannequin-Proportionen, Kamerahöhe/-neigung, Scale, Framing und Root-Position innerhalb einer Richtungsserie;
- keine dramatische Perspektive, kein wechselndes Objektiv, keine freie Illustration;
- Pose muss primär in der für den Generator relevanten Gameplay-Ansicht eindeutig lesbar sein.

### Produktionsformat einer Pose
Für die eigentliche Tool-Parametrisierung zählt die einzelne Mannequin-Pose, nicht ein dekoratives Informationsposter. Ein Übersichts-/Dokumentationsblatt kann zusätzlich existieren, aber die im Prompt Builder verwendete Pose Reference soll möglichst nur die neutrale Figur in der festgelegten Gameplay-Kamera zeigen, groß, sauber und eindeutig. Keine Character-Details und keine automatisch erfundenen Nachbarframes.

### WALK – geplanter 8-Frame-Loop
1. FR1 `Contact L`: LEFT foot forward/contact, RIGHT leg rear, opposing arm swing.
2. FR2 `Down L`: LEFT support/loading, body down, RIGHT heel/knee advances.
3. FR3 `Passing L`: RIGHT leg passes planted LEFT beneath pelvis; kompakte Passing-Silhouette.
4. FR4 `Up / Right Swing`: RIGHT leg swings forward, LEFT heel rises, body high.
5. FR5 `Contact R`: RIGHT foot forward/contact, LEFT leg rear; Gegenphase zu FR1.
6. FR6 `Down R`: RIGHT support/loading, body down, LEFT heel/knee advances.
7. FR7 `Passing R`: LEFT leg passes planted RIGHT beneath pelvis.
8. FR8 `Up / Left Swing`: LEFT leg swings forward, RIGHT heel rises; Übergang zurück zu FR1.

FR5–FR8 sind die anatomisch korrekte Gegenhälfte und dürfen nicht einfach FR1–FR4 mit derselben Beinbelegung wiederholen.

### Richtungen / Spiegelstrategie
Jede akzeptierte einzelne Master-Pose wird zusätzlich als exakt gespiegelte Richtungsvariante geführt, sofern geometrisch sinnvoll. Anatomische LEFT/RIGHT-Semantik bleibt beim Spiegeln erhalten.

Spiegelpaare:
- SE ↔ SW
- E ↔ W
- NE ↔ NW
- N ↔ S

### EXAKTE BEDEUTUNG EINES POSE-AUFTRAGS IM CHAT
Wenn der Nutzer z. B. sagt `Erstelle mir die Pose ... FR1: linkes Bein vorne – Contact L`, bedeutet dies:
1. ausschließlich die oben definierte neutrale DevForge-Mannequin-Parametrisierungsfigur verwenden;
2. keinen Carrier und keinen finalen Character erzeugen;
3. genau die benannte Pose erzeugen, keine erfundenen weiteren Frames;
4. primär eine einzelne große Gameplay-Ansicht in der aktuell geforderten Richtung/Kamera erstellen;
5. die passende Spiegelvariante als zweite Richtungsfassung derselben anatomischen Pose mitführen;
6. LEFT/RIGHT bezeichnet immer die Anatomie der Figur, nicht links/rechts auf dem Bildschirm;
7. erst nach visueller Freigabe zur nächsten Pose weitergehen.

### Aktueller enger Testumfang
1. WALK / SE / FR1 + SW-Spiegelvariante mit der verbindlichen Mannequin-Figur erstellen und freigeben.
2. Danach FR2 + Spiegelvariante.
3. Danach FR3 + Spiegelvariante.
4. Danach diese drei Pose-Referenzen als `POSE REFERENCE AUTHORITY` in den Prompt Builder integrieren.
5. Carrier WALK SE FR3 erneut generieren und prüfen.
6. Nur bei erfolgreichem Grundtest FR4–FR8 und weitere Richtungen vervollständigen.

## Referenzrollen im späteren Prompt Builder
- `POSE REFERENCE / MANNEQUIN` = ausschließlich Pose, Articulation, Gewichtsverlagerung und Silhouette.
- `AUTHORITATIVE CHARACTER REFERENCE` = Identität, Anatomie/Proportionen des echten Characters, Kleidung, Equipment, permanentes Design.
- `FRAME 01 SEQUENCE APPEARANCE ANCHOR` = akzeptierter konkreter Sequenzlook.
- `APPROVED MOTION HISTORY` = chronologische Bewegungsprogression.

## Später vorgemerkt
Nach erfolgreichem WALK-Grundtest Pose Library projektübergreifend erweitern, u. a. RUN, PICK UP / PUT DOWN, SIT / SITTING und weitere Gameplay-/Arbeitsposen.

## Technischer nächster DevForge-Schritt
Nach Freigabe SE/SW-FR1 bis FR3 Prompt Builder um echte `Pose Reference`-Auswahl/Einbettung erweitern. Pose Reference erhält höchste Autorität ausschließlich für Gelenkstellung/Silhouette; sie darf niemals das Character-Design beeinflussen.
