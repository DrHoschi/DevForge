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
Die Referenzaufgaben werden strikt getrennt:
- `AUTHORITATIVE CHARACTER REFERENCE` = permanentes Character-Design / Identität / Anatomie / Kleidung / Equipment.
- `FRAME 01 SEQUENCE APPEARANCE ANCHOR` = akzeptierter Look dieser konkreten generierten Sequenz, insbesondere feine Gesichtsausprägung, Renderlook, Licht, Kamera und Scale.
- `APPROVED MOTION HISTORY` = zeitliche Bewegungsprogression bereits freigegebener Frames.
- `POSE REFERENCE` = autoritative Gelenkstellung, Körperhaltung und Silhouette des Ziel-Frames. Sie enthält absichtlich kein Character-Design.

### Pose-Referenz-Design
- neutrales graues 3D-Mannequin, keine Kleidung, keine Materialien des Zielcharacters, keine Identitätsmerkmale;
- exakt standardisierte 45°-Top-Down-Gameplay-Kamera;
- pro Pose eine einzelne klar lesbare Produktionsreferenz;
- gleiche Mannequin-Proportionen, Kamera, Scale, Framing und Root über die komplette Bibliothek;
- Pose Reference darf ausschließlich Articulation/Pose bestimmen und niemals Character-Design übertragen.

### WALK – geplanter 8-Frame-Loop
1. FR1 `Contact L`: LEFT foot forward/contact, RIGHT leg rear, opposing arm swing.
2. FR2 `Down L`: LEFT support/loading, body down, RIGHT heel/knee advances.
3. FR3 `Passing L`: RIGHT leg passes planted LEFT beneath pelvis; kompakte Passing-Silhouette, kein langer Contact-Schritt.
4. FR4 `Up / Right Swing`: RIGHT leg swings clearly forward, LEFT heel rises, body high.
5. FR5 `Contact R`: RIGHT foot forward/contact, LEFT leg rear; klare Gegenphase zu FR1.
6. FR6 `Down R`: RIGHT support/loading, body down, LEFT heel/knee advances.
7. FR7 `Passing R`: LEFT leg passes planted RIGHT beneath pelvis.
8. FR8 `Up / Left Swing`: LEFT leg swings forward, RIGHT heel rises; bereitet den sauberen Loop zurück zu FR1 vor.

Wichtig: FR5–FR8 dürfen NICHT dieselbe Beingeometrie wie FR1–FR4 wiederholen. Sie sind die anatomisch korrekte Gegenhälfte des Walk-Cycles.

### Richtungen / Spiegelstrategie
Pose-Assets werden zunächst einzeln kontrolliert erzeugt. Zu jeder akzeptierten Master-Pose soll unmittelbar eine exakt gespiegelte Richtungsvariante erzeugt/gespeichert werden, sofern die Richtungsgeometrie spiegelbar ist. Ziel ist, mit einer Pose-Erstellung direkt zwei Himmelsrichtungen abzudecken. Anatomische LEFT/RIGHT-Semantik bleibt beim Spiegeln erhalten und darf nicht allein wegen der Bildschirmseite umbenannt werden.

Geplante Spiegelpaare für die Bibliothek:
- SE ↔ SW
- E ↔ W
- NE ↔ NW
- N ↔ S

### Aktueller enger Testumfang
Noch NICHT alle Animationen und Richtungen bauen. Zuerst ausschließlich WALK und zunächst die ersten drei Zielposen:
1. `WALK / SE / FR1` als einzelne Pose-Referenz erstellen und visuell freigeben; passende gespiegelte Variante gleich mitführen.
2. Danach `WALK / SE / FR2` + Spiegelvariante.
3. Danach `WALK / SE / FR3` + Spiegelvariante.
4. Diese drei Pose-Referenzen in den Prompt Builder als neue `POSE REFERENCE AUTHORITY` integrieren/auswählbar machen.
5. Carrier WALK SE FR3 erneut generieren und prüfen, ob die visuelle Passing-Pose zuverlässig übernommen wird.
6. Nur bei erfolgreichem Grundtest WALK FR4–FR8 und danach weitere Richtungen vervollständigen.

### Bedienziel für einen neuen Chat
Wenn der Nutzer sinngemäß nur sagt `Erstell mir die Pose`, ist der Repository-Status zuerst zu lesen. Solange dieser Arbeitsauftrag aktuell ist, bedeutet dies: die exakt nächste noch nicht freigegebene neutrale WALK-Pose aus obiger Reihenfolge erzeugen, in der festgelegten 45°-Gameplay-Perspektive, mit korrekter Walk-Mechanik und der passenden gespiegelten Richtungsvariante. Keine Carrier-Generierung und keinen späteren Frame vorziehen, solange die betreffende Pose nicht visuell freigegeben wurde.

## Spätere Pose-Bibliothek – nur vorgemerkt
Wenn der WALK-Grundtest funktioniert, soll das System dauerhaft projektübergreifend genutzt und schrittweise erweitert werden, u. a. für:
- RUN
- PICK UP / PUT DOWN
- SIT / SITTING
- weitere wichtige Gameplay-/Arbeitsposen

Die Bibliothek bleibt erweiterbar; diese Animationen werden jetzt noch nicht implementiert.

## Verbindliche Produktionsprinzipien
- Keine Carrier-FR4+-Produktion, solange der neue Pose-Reference-Grundtest mit FR3 nicht PASS ist.
- Ein FAIL-Frame wird nicht als neue freigegebene Sequenzbasis verwendet.
- Pose Reference = Pose/Articulation Authority, nicht Character-Design.
- Character Reference = permanentes Design/Identität.
- FR1 = akzeptierter Sequence Appearance Anchor.
- Approved Motion History = chronologische Bewegungsprogression.
- Einzel-PNGs bleiben Source Assets; Atlas erst nach freigegebenen Frames.

## Technischer nächster DevForge-Schritt
Nach Erstellung/Freigabe von SE-FR1 bis SE-FR3 (+ Spiegelvarianten) Prompt Builder um eine echte `Pose Reference`-Auswahl/Einbettung erweitern. Pose Reference erhält höchste Autorität für Gelenkstellung/Silhouette; Character Reference und Sequence Appearance Anchor behalten ihre jeweiligen nicht-posenbezogenen Zuständigkeiten.
