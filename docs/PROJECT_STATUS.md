# DevForge – Project Status

Stand: 2026-09-06

## Zweck
DevForge ist eine projektübergreifende webbasierte Entwickler-Toolbox. Aktueller Schwerpunkt ist die reproduzierbare Auswahl echter 3D-Animationsposen und deren direkte Verwendung als visuelle Pose-Referenz für die Character-Bildgenerierung.

## Repositories
### DevForge
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-02f6-prompt-builder-pose-reference-bridge`
- Historischer Prompt-Builder-Stand: `DF-02D.3R`
- Historischer Pose-Renderer-Prototyp: `DF-02E.1–E.4`
- Aktueller Entwicklungsblock: `DF-02F.6`

# ARCHITEKTURENTSCHEIDUNG: ECHTE 3D-ANIMATION ALS POSEQUELLE
Ab DF-02F verwendet DevForge echte geriggte 3D-Animationsquellen. Die Animation liefert die Bewegungsgeometrie. Timeline, Facing, Kamera und Referenzzeitpunkt werden in DevForge kontrolliert. Für die Bildgenerierung gilt ab F.6: Character Reference definiert Identität/Design; Pose Reference definiert Körperhaltung und Ansicht.

# DF-02F – 3D Animation Reference Viewer Foundation
1. DF-02F.1 – Animated 3D Reference Asset Contract – PASS
2. DF-02F.2 – Animated 3D Preview / Runtime Asset Intake – PASS
3. DF-02F.3 / F.3R – Animation Timeline / Scrubbing – PASS
4. DF-02F.4 / F.4R – Camera & Facing Presets / Semantic Alignment – PASS
5. DF-02F.5 – Pose Bookmark / Reference Capture – PASS
6. DF-02F.6 – Prompt Builder / Pose Reference Bridge – IMPLEMENTED / DEVICE TEST REQUIRED

# DF-02F.4R – PASS
Verbindlicher Gameplay-Direction-Contract:
- N = vom Betrachter weg / nach oben im Spielbild
- S = zum Betrachter / nach unten
- E = nach rechts im Spielbild
- W = nach links im Spielbild
- Diagonalen entsprechend dazwischen

Die feste orthografische Gameplay-Kamera, Animation und 45°-Schritte bleiben davon getrennt.

# DF-02F.5 – PASS
Gerätetest bestätigt:
- Pose-Bookmarks lassen sich aus dem echten Animation-Clip speichern;
- Referenzen können beliebig benannt werden;
- Zeit/Prozent, Facing und Kamera werden gemeinsam festgehalten;
- gespeicherte Zustände lassen sich wieder aufrufen;
- der Workflow ist nicht auf FR01–FR08 begrenzt.

Sampling-Entscheidung:
- Frame-/Referenzanzahl bleibt frei;
- für WALK ist ein 10%-Sampling (0%, 10%, … 90%) ein sinnvolles Start-Preset;
- 100% wird bei einem geschlossenen Loop nicht als zusätzlicher Frame benötigt, da es wieder dem Startzustand entspricht;
- die 10%-Positionen sind Ausgangspunkte, keine Zwangsregel; einzelne Referenzen dürfen visuell auf andere Prozentwerte verschoben werden.

# DF-02F.6 – Prompt Builder / Pose Reference Bridge – IMPLEMENTED / DEVICE TEST REQUIRED
Branch:
`df-02f6-prompt-builder-pose-reference-bridge`

Der bisherige DF-02D.3R-Prompt-Builder wurde für diesen Workflow bewusst vereinfacht.

Neu:
- freie Referenz-ID statt fester FR01–FR08-Timeline;
- Authoritative Character Reference als erste Bildquelle;
- Authoritative Pose Reference als zweite Bildquelle;
- keine Approved Motion History;
- keine Previous Approved Frames;
- keine Direction × Frame Matrix;
- keine textuell erfundenen WALK-Key-Poses/Motion-Deltas als Posequelle;
- keine Abhängigkeit von einer vorgegebenen Frame-Anzahl;
- Character Reference definiert Identität, Anatomie/Proportionen, Kleidung, Materialien und permanente Designdetails;
- Pose Reference definiert exakte Körperhaltung, Facing, Gameplay-Kamera, Projektion, Framing, Scale und Root-/Foot-Position;
- Prompt enthält eine harte Konfliktregel: das Mannequin/3D-Modell der Pose Reference darf nicht als Character Design übernommen werden;
- TXT- und JSON-Package-Export bleiben vorhanden.

## DF-02F.6 Acceptance Gate
Auf iPhone/iPad/Safari prüfen:
1. Prompt Builder öffnet als `DF-02F.6 · TESTBUILD`;
2. Character Reference lässt sich laden und wird angezeigt;
3. Pose Reference lässt sich separat laden und wird angezeigt;
4. Referenz-ID akzeptiert beliebige Werte wie FR01, FR10 oder freie Namen;
5. Generierungsauftrag nennt ausschließlich Character Reference und Pose Reference als visuelle Autoritäten;
6. keine Previous-Frame-/Motion-History-Anforderung erscheint mehr;
7. Prompt kopieren funktioniert;
8. TXT/JSON-Export funktioniert;
9. mit Character Reference + einer aus dem 3D-Viewer gewonnenen Pose Reference lässt sich ein erster echter Generierungstest durchführen.

# NÄCHSTER ZULÄSSIGER SCHRITT
Jetzt ausschließlich **DF-02F.6 Gerätetest / erster echter Character-Pose-Generationstest** auf Branch:
`df-02f6-prompt-builder-pose-reference-bridge`

Noch nicht erweitern:
- automatische Übergabe von Viewer-Bookmarks ohne Bilddatei;
- zusätzliche Animation-Library-Verwaltung;
- freie Bone-Manipulation;
- Atlas-Automatisierung.

Bei PASS folgt ein DF-02F Abschluss-/Regression-Gate und danach die Entscheidung, wie Pose-Referenzbilder dauerhaft aus dem Viewer exportiert/übergeben werden.