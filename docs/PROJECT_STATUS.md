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

### Siedler Mini – Asset-Testprojekt
- Repository: `DrHoschi/siedler-mini`
- Asset-Staging-Branch: `asset-carrier-animation-staging`
- WALK-Test: 8 FPS, Loop, Bottom-Center-Anchor

## Bisherige DF-02 Entwicklung
- DF-02B: Authoritative Character Reference eingebettet.
- DF-02C: Previous Approved Frame / Sequenzkontinuität.
- DF-02D: Key Pose + Mandatory Motion Delta.
- DF-02D.1: Zielpose hat Vorrang vor der Pose des Previous Frame.
- DF-02D.2: Identity-/Render-/Camera-/Scale-/Root-Locks verstärkt.
- DF-02D.3R: Approved Motion History mit festen Einzel-Slots FR1…FR(N-1); FR1 ist Sequence Appearance Anchor, alle Vorgängerframes bilden Temporal Motion History.

## Aktueller Befund Carrier WALK / SE
FR1 und FR2 sind als bisherige Sequenzreferenzen brauchbar. Mehrere FR3-Versuche zeigen jedoch trotz Textvertrag und Motion History wieder eine Contact-/Stride-ähnliche Pose statt einer eindeutig lesbaren Passing-Pose. Daraus folgt: Text + Character Reference + Motion History reichen für zuverlässige Gelenkgeometrie nicht aus.

## AKTUELLER ARBEITSAUFTRAG – POSE REFERENCE LIBRARY EXPERIMENT
Vor weiteren Carrier-FR3-Versuchen wird eine neutrale visuelle Pose-Referenzbibliothek aufgebaut und getestet.

### Grundprinzip
- `AUTHORITATIVE CHARACTER REFERENCE` = permanentes Character-Design / Identität / Anatomie / Kleidung / Equipment.
- `FRAME 01 SEQUENCE APPEARANCE ANCHOR` = akzeptierter Look der generierten Sequenz.
- `APPROVED MOTION HISTORY` = zeitliche Bewegungsprogression bereits freigegebener Frames.
- `POSE REFERENCE` = autoritative Gelenkstellung, Körperhaltung und Silhouette des Ziel-Frames; kein Character-Design.

### Pose-Referenz-Design
- immer derselbe bereits etablierte neutrale graue 3D-Mannequin-Charakter als Pose-Dummy;
- keine Kleidung, keine Zielcharacter-Materialien, keine Identitätsmerkmale;
- exakt standardisierte 45°-Top-Down-Gameplay-Kamera;
- pro Frame eine einzelne, groß und klar lesbare Produktionspose – KEIN neues 8-Frame-Übersichtsboard als Produktionsreferenz;
- gleiche Mannequin-Proportionen, Kamera, Scale, Framing und Root über die komplette Bibliothek;
- Pose Reference bestimmt ausschließlich Articulation/Pose.

### WALK – geplanter 8-Frame-Loop
1. FR1 `Contact L`: LEFT foot forward/contact, RIGHT leg rear, opposing arm swing.
2. FR2 `Down L`: LEFT support/loading, body down, RIGHT heel/knee advances.
3. FR3 `Passing L`: RIGHT leg passes planted LEFT beneath pelvis; kompakte Passing-Silhouette, kein langer Contact-Schritt.
4. FR4 `Up / Right Swing`: RIGHT leg swings clearly forward, LEFT heel rises, body high.
5. FR5 `Contact R`: RIGHT foot forward/contact, LEFT leg rear; klare Gegenphase zu FR1.
6. FR6 `Down R`: RIGHT support/loading, body down, LEFT heel/knee advances.
7. FR7 `Passing R`: LEFT leg passes planted RIGHT beneath pelvis.
8. FR8 `Up / Left Swing`: LEFT leg swings forward, RIGHT heel rises; bereitet Loop zurück zu FR1 vor.

FR5–FR8 sind die anatomisch korrekte Gegenhälfte und dürfen nicht einfach FR1–FR4 mit derselben Beinbelegung wiederholen.

### Richtungen / Spiegelstrategie
Jede akzeptierte einzelne Master-Pose wird zusätzlich als exakt gespiegelte Richtungsvariante geführt, sofern geometrisch sinnvoll. Damit entstehen mit einer Pose-Erstellung direkt zwei Richtungsassets. Anatomische LEFT/RIGHT-Semantik bleibt erhalten.

Spiegelpaare:
- SE ↔ SW
- E ↔ W
- NE ↔ NW
- N ↔ S

### EXAKTE BEDEUTUNG EINES POSE-AUFTRAGS IM CHAT
Wenn der Nutzer z. B. sagt:
`Erstelle mir die Pose mit unserem neutralen Charakter, was du vorher schon verwendet hast. FR1: linkes Bein vorne – Contact L`

dann ist damit ausdrücklich gemeint:
1. KEIN Carrier und kein finaler Spielcharakter.
2. Den bereits etablierten neutralen grauen 3D-Mannequin-Pose-Dummy verwenden.
3. Genau EINE einzelne Zielpose groß und eindeutig erzeugen, nicht acht ähnliche Frames auf einem Board.
4. Aktuelle Masterrichtung zunächst SE in der festen 45°-Top-Down-Gameplay-Kamera.
5. Bei FR1 Contact L: anatomisches LEFT leg/foot eindeutig vorne und im Bodenkontakt; anatomisches RIGHT leg eindeutig hinten; natürliche gegensinnige Armbewegung.
6. Zusätzlich die geometrisch exakt gespiegelte Gegenrichtungsvariante SW derselben anatomischen Pose mitführen/erzeugen; Spiegelung ändert die Bildschirmseite, aber NICHT die anatomische LEFT/RIGHT-Bedeutung.
7. Keine neue Pose erfinden, keine nächste Frame-Phase vorziehen und keine Übersichtsseite mit automatisch halluzinierten FR2–FR8 erzeugen.
8. Erst nach visueller Freigabe dieses Posepaares wird FR2 erstellt.

Diese Regel gilt entsprechend für spätere explizit benannte Frames: Der Nutzer benennt Frame/Pose; ChatGPT erzeugt genau diese einzelne Pose mit dem neutralen Mannequin und ihrer Spiegelvariante.

### Aktueller enger Testumfang
1. WALK / SE / FR1 + gespiegelte SW-Variante erstellen und visuell freigeben.
2. Danach WALK / SE / FR2 + SW.
3. Danach WALK / SE / FR3 + SW.
4. Erst dann diese Pose-Referenzen als `POSE REFERENCE AUTHORITY` in den Prompt Builder integrieren.
5. Carrier WALK SE FR3 erneut generieren und Passing-Pose testen.
6. Nur bei erfolgreichem Grundtest FR4–FR8 und weitere Richtungen vervollständigen.

## Spätere Pose-Bibliothek – nur vorgemerkt
Bei erfolgreichem WALK-Grundtest dauerhaft projektübergreifend erweitern, u. a. RUN, PICK UP / PUT DOWN, SIT / SITTING und weitere Gameplay-/Arbeitsposen. Jetzt noch nicht implementieren.

## Verbindliche Produktionsprinzipien
- Keine Carrier-FR4+-Produktion vor PASS des Pose-Reference-FR3-Grundtests.
- Pose Reference = Pose/Articulation Authority, nicht Character-Design.
- Character Reference = permanentes Design/Identität.
- FR1 = Sequence Appearance Anchor.
- Approved Motion History = chronologische Bewegungsprogression.

## Technischer nächster DevForge-Schritt
Nach Freigabe SE/SW-FR1 bis FR3 Prompt Builder um echte `Pose Reference`-Auswahl/Einbettung erweitern. Pose Reference erhält höchste Autorität für Gelenkstellung/Silhouette.
