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

# ENTSCHEIDUNG: DETERMINISTIC POSE REFERENCE FOUNDATION

Der bisherige Versuch, technische Pose-Referenzen ausschließlich über generative Bild-Prompts zu erzeugen, ist für die endgültige Posebibliothek beendet.

## Befund aus dem WALK-SE-Test
Die Versuche FR1–FR6 haben gezeigt:
- Die neutrale Mannequin-Darstellung eignet sich visuell sehr gut als Pose Reference.
- Textbeschreibungen können einzelne Phasen plausibel erzeugen, garantieren aber keine anatomisch deterministische LEFT/RIGHT-Gelenkbelegung.
- Besonders bei der zweiten Zyklushälfte kann das Bildmodell trotz korrekter Beschriftung wieder eine falsche Beinphase darstellen.
- FR5 konnte nach mehreren Versuchen funktional korrekt als rechte Gegenphase erzeugt werden; FR6 scheiterte jedoch erneut trotz expliziter FR2→FR6-Gegenphasenregel.
- Damit ist nachgewiesen, dass weiteres Prompt-Tuning allein keine ausreichend reproduzierbare technische Posebibliothek liefert.

## Verbindliche Konsequenz
FR7 wird NICHT mehr generativ erzeugt. Es werden vorerst keine weiteren generativen Mannequin-WALK-Frames produziert.

DevForge wird stattdessen auf eine **deterministische Pose-Referenz** umgestellt. Die Posebibliothek muss künftig aus kontrollierbarer Gelenk-/Skelettgeometrie entstehen. Die technische Pose darf nicht vom Bildmodell frei interpretiert werden.

## Zielmodell der deterministischen Posefigur
Die bisher visuell etablierte neutrale Figur bleibt das gewünschte Erscheinungsbild der technischen Parametrisierungsfigur:
- gesichtsloses neutrales humanoides Mannequin;
- klar erkennbare Körpersegmente/Gelenke;
- keine Kleidung, keine Character-Identität, kein Equipment;
- ausschließlich technische Visualisierung von Pose und Silhouette.

Neu ist: Die Pose wird nicht mehr primär durch einen Bildprompt definiert, sondern durch kontrollierte Poseparameter bzw. Gelenktransformationen. Das Renderbild ist nur noch die deterministische Visualisierung dieser Daten.

## Erforderlicher Pose-Datenvertrag
Eine Pose muss mindestens reproduzierbar festlegen können:
- Root-/Pelvis-Position und Körperhöhe;
- Torso-Neigung und -Rotation;
- Head/Facing-Orientierung;
- LEFT/RIGHT shoulder rotation;
- LEFT/RIGHT elbow flexion;
- LEFT/RIGHT hip rotation/flexion;
- LEFT/RIGHT knee flexion;
- LEFT/RIGHT ankle/foot orientation;
- Support-/Swing-/Contact-Rolle jedes Beins;
- feste Bewegungsrichtung;
- feste Kamera-/Projektionsparameter.

Gleiche Poseparameter + gleiche Kamera müssen immer dieselbe Poseprojektion ergeben.

## WALK SE – deterministisch aufzubauende 8 Frames
Die fachliche Phasenfolge bleibt:
1. FR1 `Contact L` – LEFT vorne/contact, RIGHT trailing.
2. FR2 `Down L` – LEFT loaded support, Körper abgesenkt, RIGHT beginnt vorzuziehen.
3. FR3 `Passing L` – RIGHT passiert LEFT unter dem Becken.
4. FR4 `Up / Right Swing` – RIGHT schwingt vor, Körper hoch.
5. FR5 `Contact R` – RIGHT vorne/contact, LEFT trailing.
6. FR6 `Down R` – RIGHT loaded support, Körper abgesenkt, LEFT beginnt vorzuziehen.
7. FR7 `Passing R` – LEFT passiert RIGHT unter dem Becken.
8. FR8 `Up / Left Swing` – LEFT schwingt vor, Körper hoch und bereitet FR1 vor.

## Harte Symmetrie-/Ableitungsregel
FR5–FR8 werden geometrisch aus FR1–FR4 abgeleitet, nicht unabhängig neu erfunden:
- FR5 = FR1 mit funktionalem anatomischem L↔R-Phasentausch.
- FR6 = FR2 mit funktionalem anatomischem L↔R-Phasentausch.
- FR7 = FR3 mit funktionalem anatomischem L↔R-Phasentausch.
- FR8 = FR4 mit funktionalem anatomischem L↔R-Phasentausch.

Dabei bleiben Root-System, SE-Bewegungsachse, Kamera, Projektion, Scale und Framing identisch. Dies ist ein Gelenk-/Phasentausch und ausdrücklich KEINE Spiegelung des Gesamtbildes.

## Richtungsableitung
Richtungsvarianten werden ebenfalls deterministisch aus Pose-/Kameradaten abgeleitet. Eine SE→SW-Variante soll nicht erneut generativ erraten werden. Spiegel-/Rotationsregeln müssen mathematisch reproduzierbar sein und anatomische LEFT/RIGHT-Semantik erhalten.

## Rolle im Prompt Builder
Der Prompt Builder soll später nicht nur ein frei generiertes Posebild kennen, sondern eine Pose Reference aus dem deterministischen Pose-System auswählen können. Für den finalen Character-Generator wird daraus eine saubere visuelle Pose Reference gerendert/eingebettet.

Referenzrollen bleiben getrennt:
- `DETERMINISTIC POSE REFERENCE` = Pose, Gelenkstellung, Gewichtsverlagerung, Silhouette.
- `AUTHORITATIVE CHARACTER REFERENCE` = Identität, Character-Anatomie/Proportionen, Kleidung, Equipment, permanentes Design.
- `FRAME 01 SEQUENCE APPEARANCE ANCHOR` = konkreter akzeptierter Sequenzlook.
- `APPROVED MOTION HISTORY` = chronologische Bewegungsprogression.

Die neutrale Posefigur darf weiterhin niemals Character-Design auf den finalen Character übertragen.

## Status der bisherigen generativen Posebilder
Die bisher erzeugten Mannequin-Bilder sind ausschließlich Explorations-/Designreferenzen. Sie zeigen das gewünschte Darstellungsprinzip und halfen bei der Definition der Walk-Phasen, sind aber NICHT die endgültige technische Posebibliothek und dürfen nicht als geometrisch autoritative Datenbasis behandelt werden.

Insbesondere:
- FR1–FR4: visuell brauchbare Explorationsreferenzen, aber noch nicht deterministisch.
- FR5: letzter Versuch funktional brauchbar, aber weiterhin nur generative Explorationsreferenz.
- FR6: FAIL; auch die verschärfte FR2→FR6-Promptregel erzeugte keine verlässlich kontrollierte Gegenphase.
- FR7/FR8: nicht mehr generativ fortsetzen.

# NÄCHSTER ZULÄSSIGER ENTWICKLUNGSSCHRITT

Nicht weiter Bilder prompten.

Als nächstes wird ein kleiner DevForge-Implementierungsblock für die **Deterministic Pose Reference Foundation** definiert und umgesetzt. Er soll zunächst nur das Minimum liefern, um WALK / SE / FR1–FR8 geometrisch kontrolliert darzustellen.

Empfohlene Staffelung:

### DF-02E.1 – Deterministic Mannequin Skeleton Contract
Nur technisches Skelett-/Joint-Modell, anatomische LEFT/RIGHT-Namen, Parent-Hierarchie, Root/Pelvis und feste Poseparameter definieren. Noch kein Pose-Editor und keine Animation.

### DF-02E.2 – Fixed 45° Gameplay Pose Renderer
Das neutrale Mannequin aus deterministischen Joint-Daten unter einer festen 45°-Top-Down-Gameplay-Kamera darstellen. Gleiche Daten müssen gleiche Projektion ergeben.

### DF-02E.3 – WALK SE Pose Set FR1–FR4
Die ersten vier Walk-Phasen als explizite kontrollierte Poseparameter definieren und visuell prüfen.

### DF-02E.4 – Deterministic Counterphase Derivation FR5–FR8
FR5–FR8 algorithmisch aus FR1–FR4 durch anatomischen L↔R-Rollentausch ableiten. Keine unabhängige Neuerstellung.

### DF-02E.5 – Pose Reference Export / Prompt Builder Bridge
Aus einer ausgewählten deterministischen Pose eine saubere Pose-Reference-Grafik erzeugen und im bestehenden Prompt Builder als `POSE REFERENCE AUTHORITY` einbetten.

### DF-02E.6 – Carrier FR3 Validation Gate
Erst danach Carrier WALK SE FR3 erneut mit Character Reference + Sequence Appearance Anchor + Approved Motion History + deterministischer FR3 Pose Reference erzeugen. Prüfen, ob Passing-Pose und Character-Kontinuität gleichzeitig PASS erreichen.

## Scope-Grenze
Bis DF-02E.6 PASS:
- keine RUN-Posebibliothek;
- keine PICK-UP/PUT-DOWN/SIT-Bibliothek;
- keine vollständigen acht Himmelsrichtungen;
- kein allgemeiner Animationseditor;
- keine weiteren generativen Mannequin-WALK-Versuche.

Zuerst muss WALK / SE als deterministischer Proof of Concept funktionieren.
