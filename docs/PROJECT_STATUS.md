# DevForge – Project Status

Stand: 2026-09-06

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Reconciliation-Branch: `df-02f6r4-explicit-pose-geometry-control`
- Historischer Prompt-Builder-Stand: `DF-02D.3R`
- Historischer Pose-Renderer-Prototyp: `DF-02E.1–E.4`
- Aktueller abgeschlossener Implementierungsstand: `DF-02F.6R.4`
- Aktuelles Gate: `DF-02F.6R.4 – Documentation / Status Reconciliation`

# Architekturentscheidung: echte 3D-Animation als Posequelle
Ab DF-02F verwendet DevForge echte geriggte 3D-Animationsquellen. Die Animation liefert die Bewegungsgeometrie. Timeline, Facing, Kamera und Referenzzeitpunkt werden in DevForge kontrolliert.

Für den Generation-Handoff gilt:
- Character Reference definiert Identität und permanentes Design.
- Pose/Geometry Control definiert Körperhaltung und Ansicht.
- Action-Namen wie `WALK` sind Metadaten und dürfen keine alternative generische Körpergeometrie erzeugen.

# DF-02F – 3D Animation Reference Viewer / Generation Bridge
1. `DF-02F.1 – Animated 3D Reference Asset Contract` – PASS
2. `DF-02F.2 – Animated 3D Preview / Runtime Asset Intake` – PASS
3. `DF-02F.3 / F.3R – Animation Timeline / Scrubbing` – PASS
4. `DF-02F.4 / F.4R – Camera & Facing Presets / Semantic Alignment` – PASS
5. `DF-02F.5 – Pose Bookmark / Reference Capture` – PASS
6. `DF-02F.6 – Prompt Builder / Pose Reference Bridge` – implemented, external generation fidelity not proven
7. `DF-02F.6R.1 – Pose Fidelity Contract Reinforcement` – FAIL
8. `DF-02F.6R.2 – Pose-dominant PDF Transfer Contract` – FAIL
9. `DF-02F.6R.3 – Direct Visual Pose Handoff` – implemented, insufficiently deterministic in external generation test
10. `DF-02F.6R.4 – Explicit Pose Geometry Control` – IMPLEMENTED; external generation limit remains

# DF-02F.4R – Direction Contract
Verbindlicher Gameplay-Direction-Contract:
- N = vom Betrachter weg / nach oben im Spielbild
- S = zum Betrachter / nach unten
- E = nach rechts im Spielbild
- W = nach links im Spielbild
- Diagonalen entsprechend dazwischen

Feste orthografische Gameplay-Kamera, Animation und 45°-Facing-Schritte bleiben getrennte Verantwortungen.

# DF-02F.5 – Pose Bookmark / Reference Capture
Gerätetest bestätigt:
- Pose-Bookmarks lassen sich aus dem echten Animation-Clip speichern.
- Referenzen können frei benannt werden.
- Zeit/Prozent, Facing und Kamera werden gemeinsam festgehalten.
- gespeicherte Zustände lassen sich reproduzierbar wieder aufrufen.
- der Workflow ist nicht auf FR01–FR08 begrenzt.

# DF-02F.6R.1–R.3 – Erkenntnisse
R.1 und R.2 zeigten, dass verschärfte Prompt- oder PDF-Verträge die Pose nicht ausreichend deterministisch auf die externe Bildgenerierung übertragen.

R.3 trennte deshalb den Generation-Handoff in direkte Artefakte:
- Pose-Control als eigenständiges Bild,
- Character Identity Image,
- kurzer Handoff-Text.

PDF/JSON bleiben Review-/Traceability-Artefakte und sind nicht die primäre Pose-Steuerung.

Auch der direkte visuelle Handoff beseitigte die beobachtete Normalisierung auf generische WALK-Geometrie nicht zuverlässig.

# DF-02F.6R.4 – Explicit Pose Geometry Control
R.4 ergänzt die visuelle Pose Control um explizite maschinenlesbarere Körpergeometrie.

Implementiert auf dem aktuellen Branch:
- eigener Geometry-Control-Editor im Prompt Builder;
- definierte Gelenkpunkte für Kopf, Nacken, Becken, Schultern, Ellbogen, Handgelenke, Hüften, Knie, Knöchel und Zehen;
- sichtbare Knochen-/Achsenverbindungen zwischen den Gelenkpunkten;
- Punkte können auf der geladenen Pose-Referenz gesetzt und korrigiert werden;
- Undo/Clear für die Geometrieannotation;
- Export der annotierten Kontrollgrafik als PNG;
- normalisierte Gelenkkoordinaten als strukturierte Geometriedaten;
- Mannequin-/Posebild bleibt die visuelle Autorität; die Geometrieannotation ergänzt sie, ersetzt sie aber nicht.

## R.4 Ergebnis / bekannte Grenze
R.4 verbessert die Explizitheit des Generation-Handoffs, löst aber die zentrale externe Grenze nicht zuverlässig: Die verwendete Bildgenerierung übernimmt selbst explizite Pose-/Skeleton-Kontrolle nicht deterministisch genug für die benötigte Frame-genaue Character-Animation.

Diese Grenze liegt nach aktuellem Erkenntnisstand hinter der reproduzierbaren Pose-Auswahl in DevForge. Deshalb wird DF-02F nicht weiter durch unspezifische Prompt-Verstärkung aufgebläht.

Der ungelöste externe Generation-Handoff blockiert den unabhängigen Ausbau von DevForge als Review-, Prüf- und Asset-Produktionswerkzeug nicht.

# DF-02F.6R.4 – Documentation / Status Reconciliation Gate
Dieses Gate verändert ausschließlich Repository-Dokumentation.

Erlaubt:
- `docs/PROJECT_STATUS.md`
- `docs/ROADMAP.md`
- `README.md`

Nicht erlaubt:
- Produktionslogik
- Prompt-Builder-Code
- UI-/JavaScript-Änderungen
- Atlas-/Sprite-Logik
- neue Asset-Persistenz

PASS-Kriterium:
- alle drei Dokumente beschreiben denselben tatsächlichen R.4-Stand;
- kein Dokument bezeichnet einen älteren DF-02F-Block als aktuellen Entwicklungsstand;
- der nächste unabhängige Block ist eindeutig definiert.

# Nächster unabhängiger Entwicklungsblock
Nach PASS dieses Reconciliation-Gates wird ein eigener Branch von der reconciliierten Baseline erstellt für:

## DF-04 – Asset Review Foundation
### DF-04A – Source / Result Compare View
Ziel von DF-04A:
Eine autoritative Source-/Control-Referenz und das daraus entstandene Resultat gleichzeitig reproduzierbar anzeigen und visuell vergleichen können.

Scope DF-04A:
- zwei Bilder laden;
- Source / Control links;
- Result rechts;
- stabile gemeinsame Vergleichsansicht.

Explizit noch nicht Teil von DF-04A:
- Overlay / Onion-Skin / Difference View;
- automatisches Pose-Scoring;
- KI-Bewertung;
- Asset-Datenbank oder persistente Asset Library;
- Atlas-Umbau oder Atlas-Produktion.

Overlay / Onion-Skin ist frühestens ein eigener nachfolgender Block, z. B. `DF-04B`.

# Nächster zulässiger Schritt
Reconciliation-Diff prüfen. Erst bei PASS wird ein separater DF-04A-Branch angelegt.