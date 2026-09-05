# DevForge – Project Status

Stand: 2026-09-05

## Zweck
DevForge ist eine projektübergreifende webbasierte Entwickler-Toolbox. Aktueller Schwerpunkt ist die reproduzierbare Vorbereitung, Generierung und Prüfung von Character-Animationsframes.

## Repositories
### DevForge
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-02d3-approved-motion-history`
- Aktueller Prompt-Builder-Stand: `DF-02D.3R`

## AKTUELLER ARBEITSAUFTRAG – POSE REFERENCE LIBRARY EXPERIMENT
Vor weiteren Carrier-Tests wird eine neutrale visuelle Pose-Referenzbibliothek aufgebaut und getestet.

### VERBINDLICHER POSE-DUMMY / PARAMETRISIERUNGSFIGUR
Immer dieselbe neutrale technische Mannequin-Figur verwenden:
- glattes, gesichtsloses humanoides 3D-Mannequin;
- neutral hellgrau/beige, matte bis leicht satinierte Oberfläche;
- klar segmentierte Schulter-, Ellenbogen-, Handgelenk-, Hüft-, Knie- und Sprunggelenke;
- vereinfachte natürliche Menschenproportionen;
- glatter ovaler Kopf ohne Gesicht, Haare oder Identitätsmerkmale;
- keine Kleidung und kein Character-Equipment.

Die Figur ist ausschließlich technische Pose-/Parametrisierungsfigur. Sie bestimmt nur Pose, Gelenkwinkel, Gewichtsverlagerung, Körperhöhe, Arm-/Beinbewegung und Silhouette. Sie darf niemals Character-Design, Gesicht, Kleidung, Material oder Equipment des späteren Spielcharacters bestimmen.

## GLOBALER WALK-KAMERA-/RICHTUNGSVERTRAG – SE
Dieser Vertrag gilt unverändert für FR1 bis FR8 und ist wichtiger als eine einzelne Beinbeschreibung:
- Bewegungsrichtung des Körpers bleibt in ALLEN acht Frames exakt `SE`.
- Kopf, Brustkorb, Becken und Füße bleiben grundsätzlich entlang derselben SE-Bewegungsachse orientiert.
- Die Figur darf in FR5–FR8 NICHT umdrehen, seitlich wegdrehen oder plötzlich aus einer anderen Azimutrichtung laufen.
- Kamera bleibt in ALLEN Frames dieselbe feste 45°-Top-Down-Gameplay-Kamera: gleiche Kameraposition, Azimut, Elevation, Projektion, Framing und Scale.
- Ein Wechsel von LEFT zu RIGHT als führendem Bein ist ausschließlich eine Änderung der Körperartikulation innerhalb derselben SE-Bewegungsrichtung; er ist KEINE Kameraspiegelung und KEINE Richtungsänderung.
- FR5 ist deshalb NICHT das horizontal gespiegelte Gesamtbild von FR1. Es ist derselbe nach SE gerichtete Körper unter derselben Kamera, aber mit vertauschter Schrittphase der anatomischen Gliedmaßen.
- Anatomisches LEFT/RIGHT wird immer aus Sicht der Figur definiert, niemals aus der Bildschirmposition.

## WALK-SE – AUSFÜHRLICHER PHASENVERTRAG

### FR1 – Contact L
Zweck: erster klarer linker Fersenkontakt / maximale linke Schrittauslage.
- Anatomisches LEFT leg ist das führende Bein.
- LEFT hip ist nach vorn geführt; LEFT knee nahezu gestreckt, aber natürlich weich.
- LEFT lower leg zeigt nach vorn/unten; LEFT heel/foot erreicht den Boden vor dem Körper.
- Anatomisches RIGHT leg liegt klar hinter dem Becken als trailing leg.
- RIGHT heel darf angehoben sein; hinteres Bein ist gestreckt bzw. in natürlicher Abstoß-/Nachlaufposition.
- Becken befindet sich zwischen den beiden Füßen; große, klar lesbare Schrittweite.
- Torso bleibt nach SE ausgerichtet und leicht natürlich nach vorn geneigt.
- Opposing arm swing: bei LEFT leg forward ist RIGHT arm forward und LEFT arm rear.
- Verboten: rechte Beinführung, neutrale/passende Beinstellung, gedrehter Körper, andere Laufrichtung.

### FR2 – Down L
Zweck: Gewicht wird nach dem linken Kontakt aufgenommen; niedrigster/komprimierter früher Stützpunkt.
- LEFT foot bleibt vorn auf dem Boden und wird zum belasteten Support Foot.
- LEFT knee beugt sich sichtbar stärker als in FR1.
- Becken/Torso sinken gegenüber FR1 sichtbar ab; Körperhöhe ist niedriger.
- Körpergewicht bewegt sich über das LEFT support leg.
- RIGHT trailing heel löst sich deutlich; RIGHT knee beginnt nach vorn unter den Körper zu reisen.
- RIGHT foot ist noch NICHT am linken Bein vorbeigeschwungen und noch NICHT als neuer Contact weit vorn.
- Schrittweite wird gegenüber FR1 bereits kompakter.
- Armbewegung schreitet kontinuierlich von FR1 weiter; keine plötzlich neue Armphase.
- Kopf/Brust/Becken bleiben exakt nach SE orientiert.
- Verboten: FR1 nahezu unverändert kopieren; Passing schon vollständig erreichen; Laufrichtung drehen.

### FR3 – Passing L
Zweck: rechtes Schwungbein passiert das belastete linke Standbein unter dem Körper.
- LEFT leg ist weiterhin das Support/Stance Leg.
- LEFT foot liegt ungefähr unter bzw. leicht hinter dem Becken, nicht weit als Contact-Fuß voraus.
- RIGHT hip/knee haben sich klar nach vorn bewegt.
- RIGHT knee befindet sich unter bzw. leicht vor dem Becken und passiert in der Projektion das LEFT leg.
- RIGHT foot ist angehoben und befindet sich nahe am LEFT support foot in der projizierten Bildschirmgeometrie.
- Silhouette ist kompakt: KEIN Fuß weit vorne und gleichzeitig anderer Fuß weit hinten.
- Torso kehrt aus der abgesenkten FR2-Position Richtung mittlere Höhe zurück.
- Arm swing passiert ebenfalls seine mittlere Übergangsphase.
- Kopf/Brust/Becken bleiben exakt nach SE ausgerichtet.
- Verboten: Contact-/Stride-Silhouette wie FR1; unveränderte FR2-Beingeometrie; Richtungswechsel.

### FR4 – Up / Right Swing
Zweck: rechtes Schwungbein verlässt Passing und erreicht die hohe Vorwärtsschwungphase kurz vor dem rechten Contact.
- LEFT leg bleibt noch das letzte Support Leg.
- LEFT heel hebt sich zunehmend; LEFT leg beginnt hinter den Körper zu geraten.
- RIGHT thigh/knee sind klar VOR dem Becken.
- RIGHT foot ist vom Boden gelöst und schwingt nach vorn; noch kein endgültiger rechter Bodenkontakt.
- Becken/Torso befinden sich höher als in FR2/FR3; Up-Phase klar lesbar.
- Schritt öffnet sich wieder, diesmal mit RIGHT leg als kommendem führenden Bein.
- Opposing arm swing nähert sich der Gegenphase zu FR1: LEFT arm bewegt sich nach vorn, RIGHT arm nach hinten.
- Kopf/Brust/Becken bleiben exakt nach SE ausgerichtet.
- Verboten: rechten Fuß bereits als langen belasteten Contact darstellen; Körper/Kamera spiegeln; Richtung ändern.

## ABLEITUNGSREGEL FÜR FR5–FR8
FR5–FR8 sind keine frei neu beschriebenen Posen. Sie sind die zweite Hälfte desselben kontinuierlichen Walk-Cycles und werden streng aus FR1–FR4 abgeleitet, während Kamera und SE-Facing unverändert bleiben:

- `FR5 Contact R` = gait-phase counterpart von FR1 Contact L: RIGHT leg übernimmt exakt die funktionale Rolle des LEFT leg aus FR1; LEFT leg übernimmt die trailing Rolle des RIGHT leg. Gleichzeitig LEFT arm forward / RIGHT arm rear. Kopf, Brust, Becken, Bewegungsachse und Kamera bleiben wie FR1 nach SE.
- `FR6 Down R` = counterpart von FR2 Down L: RIGHT foot/support leg trägt und knickt ein; Körper sinkt; LEFT heel löst sich und LEFT knee beginnt nach vorn zu reisen. Facing/Kamera unverändert SE.
- `FR7 Passing R` = counterpart von FR3 Passing L: RIGHT bleibt Support; LEFT knee/foot passieren unter dem Becken nach vorn; kompakte Passing-Silhouette. Facing/Kamera unverändert SE.
- `FR8 Up / Left Swing` = counterpart von FR4 Up / Right Swing: LEFT thigh/knee/foot schwingen klar vor das Becken, RIGHT heel hebt sich/trailing; Körper hoch. Diese Pose bereitet unmittelbar FR1 Contact L vor. Facing/Kamera unverändert SE.

### Harte Gegenphasen-Regel
Für die zweite Zyklushälfte werden NUR die funktionalen Rollen der anatomischen Gliedmaßen L↔R vertauscht. NIEMALS das komplette Bild spiegeln, NIEMALS die Kamera spiegeln und NIEMALS den Character-Facing-Vektor ändern. Die gedachte Vorwärtsachse durch Kopf → Brust → Becken bleibt FR1 bis FR8 identisch.

## SEPARATE RICHTUNGS-SPIEGELUNG
Die geplante SE↔SW-Spiegelvariante ist ein anderer Vorgang als FR1↔FR5. Erst nachdem eine SE-Pose korrekt freigegeben ist, kann daraus separat eine SW-Richtungsfassung entstehen. Diese Richtungsfassung darf nicht mit dem Links-/Rechts-Phasenwechsel des Walk-Cycles verwechselt werden.

Geplante Richtungspaare: SE↔SW, E↔W, NE↔NW, N↔S.

## AKTUELLER TESTSTATUS
- FR1 Contact L: als Posegrundlage akzeptiert.
- FR2 Down L: als Posegrundlage akzeptiert.
- FR3 Passing L: als Posegrundlage akzeptiert.
- FR4 Up / Right Swing: als Posegrundlage akzeptiert.
- erster FR5-Versuch: FAIL, wiederholte FR1-artige Beinbelegung.
- zweiter FR5-Versuch: FAIL, rechte Gegenphase erkennbar, aber Facing/Bewegungsrichtung/Körperorientierung nicht ausreichend konsistent zu FR1–FR4.
- Nächster zulässiger Pose-Schritt: FR5 Contact R erneut erzeugen, diesmal unter dem globalen SE-Facing-Vertrag und der harten Gegenphasen-Regel. FR6–FR8 erst nach FR5-PASS.

## Späterer Prompt-Builder
Pose Reference = höchste Autorität ausschließlich für Articulation/Pose. Character Reference = Character-Design/Identität. FR1 Sequence Appearance Anchor = konkreter Sequenzlook. Approved Motion History = chronologische Bewegungsprogression.
