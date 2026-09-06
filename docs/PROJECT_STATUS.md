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
- Aktueller Entwicklungsblock: `DF-02F.6R.2`

# ARCHITEKTURENTSCHEIDUNG: ECHTE 3D-ANIMATION ALS POSEQUELLE
Ab DF-02F verwendet DevForge echte geriggte 3D-Animationsquellen. Die Animation liefert die Bewegungsgeometrie. Timeline, Facing, Kamera und Referenzzeitpunkt werden in DevForge kontrolliert. Für die Bildgenerierung gilt ab F.6: Character Reference definiert Identität/Design; Pose Reference definiert Körperhaltung und Ansicht.

# DF-02F – 3D Animation Reference Viewer Foundation
1. DF-02F.1 – Animated 3D Reference Asset Contract – PASS
2. DF-02F.2 – Animated 3D Preview / Runtime Asset Intake – PASS
3. DF-02F.3 / F.3R – Animation Timeline / Scrubbing – PASS
4. DF-02F.4 / F.4R – Camera & Facing Presets / Semantic Alignment – PASS
5. DF-02F.5 – Pose Bookmark / Reference Capture – PASS
6. DF-02F.6 – Prompt Builder / Pose Reference Bridge – PARTIAL / RETEST REQUIRED
7. DF-02F.6R.1 – Pose Fidelity Contract Reinforcement – FAIL IN PRODUCTION RETEST
8. DF-02F.6R.2 – Pose-Reference Dominance / Image-Space Transfer Contract – IMPLEMENTED / RETEST REQUIRED

# DF-02F.4R – PASS
Verbindlicher Gameplay-Direction-Contract:
- N = vom Betrachter weg / nach oben im Spielbild
- S = zum Betrachter / nach unten
- E = nach rechts im Spielbild
- W = nach links
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
- für WALK ist ein 10%-Sampling ein sinnvolles Start-Preset;
- 100% wird bei geschlossenem Loop nicht als zusätzlicher Frame benötigt;
- einzelne Referenzen dürfen visuell auf andere Prozentwerte verschoben werden.

# DF-02F.6 – Prompt Builder / Pose Reference Bridge – PARTIAL
Grundstruktur bleibt gültig:
- freie Referenz-ID;
- Authoritative Character Reference;
- Authoritative Pose Reference;
- keine Approved Motion History;
- keine Previous Approved Frames;
- keine textuell erfundenen WALK-Key-Poses/Motion-Deltas als Posequelle;
- Character Reference definiert Identität, Anatomie/Proportionen, Kleidung, Materialien und permanente Designdetails;
- Pose Reference definiert Körperhaltung, Facing, Gameplay-Kamera, Projektion, Framing, Scale und Root-/Foot-Position;
- TXT-, JSON- und PDF-Package-Export bleiben vorhanden.

# DF-02F.6R.1 – Retest-Ergebnis: FAIL
Der FR01–FR03-Retest zeigte weiterhin zwei konkrete Fehlerklassen:

1. **Kamera / Projektion nicht stabil genug**
   - generierte Frames drifteten in unterschiedliche 3/4-Ansichten;
   - die gewünschte feste 45°-ISO-/Top-Down-Gameplay-Ansicht wurde nicht konsistent aus der Pose Reference übernommen.

2. **Beinpose in FR01 / FR02 weiterhin normalisiert**
   - FR03 traf die Beingeometrie deutlich besser;
   - FR01 und FR02 wurden weiterhin in Richtung eines generischen plausiblen Gehschrittes umgeformt;
   - längere verbale Artikulationslisten allein reichen daher nicht als belastbarer Handoff.

Folgerung aus dem FAIL:
Nicht weitere generische Prompt-Verstärkung, sondern Änderung der visuellen Priorität und Task-Definition des Generation Packages.

# DF-02F.6R.2 – Pose-Reference Dominance / Image-Space Transfer Contract
Scope bleibt eng auf den Prompt Builder und dessen Export-Package begrenzt. Animation Viewer, Timeline, Bookmarks, Facing, Kameraimplementierung und 3D-Quelle bleiben unangetastet.

Implementiert:
- Schema `df-character-pose-0.2f6r2`;
- Build `DF-02F.6R.2 · TESTBUILD`;
- Generierungsaufgabe wird explizit als **POSE TRANSFER, NOT POSE INVENTION** definiert;
- `WALK`, `RUN` usw. sind im Generierungscontract nur noch Metadaten und dürfen keine Körpergeometrie erzeugen;
- Pose Reference wird zum **PRIMARY GEOMETRY CONTROL IMAGE**;
- Character Reference wird ausdrücklich zur **IDENTITY SOURCE ONLY**;
- neue Image-Space Geometry Transfer Rule: sichtbare Screen-X/Screen-Y-Fußtrennung, Joint-Anordnung, Silhouette, Kontaktzustände und Kamera werden aus dem Bild kopiert statt semantisch rekonstruiert;
- Kamera-Regel verschärft: Begriffe wie `isometric`, `45-degree`, `three-quarter` oder `top-down` dürfen nicht als neue Kamera interpretiert werden; die sichtbare Projektion der Pose Reference ist zu kopieren;
- PDF-Seite 1 ist jetzt bewusst pose-dominant: Pose Reference groß über nahezu die gesamte Seitenbreite, Character Reference deutlich kleiner und sekundär;
- Transfer-Regel steht direkt neben der Character Reference: gleiche projizierte Körperanordnung und gleiche Kamera, nur Character-Identität ersetzen;
- Acceptance Gate besitzt eigenen LEG/FOOT PASS und POSE TRANSFER PASS;
- Cache-Busting auf `app.js?v=df-02f6r2-1` aktualisiert.

## DF-02F.6R.2 Retest Gate
Jetzt zuerst **nur FR01** erneut aus dem Prompt Builder als neues PDF Package exportieren und generieren.

Vor Export prüfen:
1. Build-Badge zeigt `DF-02F.6R.2 · TESTBUILD`;
2. Referenz-ID = `FR01`;
3. dieselbe Carrier Character Reference wie bisher;
4. dieselbe korrekte FR01 Pose Reference / Mannequinaufnahme;
5. PDF-Seite 1 zeigt die Pose Reference groß als PRIMARY GEOMETRY CONTROL IMAGE;
6. keine früher generierten Carrier-Frames als Zusatzreferenz.

FR01 PASS-Kriterien:
- Kamera eindeutig dieselbe feste Gameplay-/45°-ISO-Projektion wie in der Pose Reference;
- Beinstellung entspricht sichtbar dem FR01-Mannequin statt einem generischen Walk;
- Fußtrennung, Kniebeugung, führendes/nachlaufendes Bein und Kontaktzustand sind korrekt;
- Character bleibt eindeutig derselbe Carrier;
- keine zusätzliche Pose-Erfindung durch das Wort WALK.

Bei FR01 PASS folgt erst FR02. FR03 bleibt Vergleichsreferenz, weil dessen Beingeometrie im R.1-Test bereits deutlich besser getroffen wurde.

Bei FR01 FAIL:
- nicht FR02/FR03 weiterproduzieren;
- prüfen, ob die visuelle Pose Reference selbst noch zu viel ungenutzte Fläche / Hintergrund enthält und als nächster kleiner Fix ein eigenständiges Pose-Control-Image-Crop bzw. Skeleton-/Silhouette-Control-Sheet nötig ist;
- keine weitere unspezifische Verlängerung des Prompttexts.

# NÄCHSTER ZULÄSSIGER SCHRITT
Ausschließlich **DF-02F.6R.2 FR01 Retest** auf Branch:
`df-02f6-prompt-builder-pose-reference-bridge`

Noch nicht:
- FR02/FR03 vor FR01-PASS weiterproduzieren;
- FR04–FR08 produzieren;
- zusätzliche Difference References einführen;
- automatische Übergabe von Viewer-Bookmarks ohne Bilddatei;
- zusätzliche Animation-Library-Verwaltung;
- freie Bone-Manipulation;
- Atlas-Automatisierung.