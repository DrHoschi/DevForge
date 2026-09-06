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
- Aktueller Entwicklungsblock: `DF-02F.6R.3`

# ARCHITEKTURENTSCHEIDUNG: ECHTE 3D-ANIMATION ALS POSEQUELLE
Ab DF-02F verwendet DevForge echte geriggte 3D-Animationsquellen. Die Animation liefert die Bewegungsgeometrie. Timeline, Facing, Kamera und Referenzzeitpunkt werden in DevForge kontrolliert. Für die Bildgenerierung gilt ab F.6: Character Reference definiert Identität/Design; Pose Reference definiert Körperhaltung und Ansicht.

# DF-02F – 3D Animation Reference Viewer Foundation
1. DF-02F.1 – Animated 3D Reference Asset Contract – PASS
2. DF-02F.2 – Animated 3D Preview / Runtime Asset Intake – PASS
3. DF-02F.3 / F.3R – Animation Timeline / Scrubbing – PASS
4. DF-02F.4 / F.4R – Camera & Facing Presets / Semantic Alignment – PASS
5. DF-02F.5 – Pose Bookmark / Reference Capture – PASS
6. DF-02F.6 – Prompt Builder / Pose Reference Bridge – PARTIAL / RETEST REQUIRED
7. DF-02F.6R.1 – Pose Fidelity Contract Reinforcement – FAIL
8. DF-02F.6R.2 – Pose-dominant PDF Transfer Contract – FAIL
9. DF-02F.6R.3 – Direct Visual Pose Handoff – IMPLEMENTATION IN PROGRESS / RETEST REQUIRED

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

# DF-02F.6R.1 / R.2 – FAIL
Die beiden Retests zeigen, dass reine Verschärfung des PDF-/Prompt-Vertrags nicht genügt. Beobachtet wurden weiterhin:
- Kamera driftet in Richtung einer normalen 3/4-Charakteransicht;
- FR01/FR02 werden teilweise auf generische WALK-Beingeometrie normalisiert;
- selbst bei pose-dominanter PDF-Seite wird die eingebettete Mannequinreferenz nicht zuverlässig als direkte visuelle Control-Geometrie behandelt.

Folgerung:
Nicht weiter unspezifisch Prompttext verlängern. Der Generation-Handoff muss die Pose als eigenständige Bilddatei direkt übergeben.

# DF-02F.6R.3 – Direct Visual Pose Handoff
Scope:
- PDF bleibt Review-/Traceability-Dokument und ist nicht mehr primärer Generation-Input;
- aus der Authoritative Pose Reference wird ein eigenständiges `POSE_CONTROL.png` erzeugt;
- der Pose-Control-Export erhält einen automatischen pose-dominanten Crop mit Sicherheitsrand, damit das Mannequin deutlich mehr Bildfläche belegt;
- die Character Reference wird separat als Identity Image übergeben;
- ein kurzer `HANDOFF.txt` beschreibt ausschließlich den direkten Bild-zu-Bild-Pose-Transfer;
- Animation/Action (`WALK`) bleibt Metadatum und darf keine Körpergeometrie erzeugen;
- Generation-Handoff besteht verbindlich aus genau drei Artefakten: Pose Control PNG + Character Identity Image + Handoff TXT;
- JSON/PDF bleiben Dokumentations-/Nachvollziehbarkeitsartefakte.

Build:
`DF-02F.6R.3 · TESTBUILD`

Schema:
`df-character-pose-0.2f6r3`

## R.3 Retest Gate
Zunächst ausschließlich FR01 testen.

PASS-Kriterien FR01:
- Kamera/Azimuth/Elevation entsprechen sichtbar der Mannequin-Pose-Reference;
- Beingeometrie, Kniebiegung, Fußabstand, Fußhöhe/Kontakt und Schrittphase entsprechen sichtbar der Pose Control;
- Upper Body / Arme / Kopf bleiben posegetreu;
- Carrier-Identität und permanentes Design bleiben erhalten;
- kein Rückfall auf eine generische WALK-Pose.

Bei PASS folgt FR02. Bei FAIL wird nicht FR02 getestet; dann wird gezielt geprüft, ob Direct Image Handoff selbst noch zu wenig Kontrolle bietet oder ob die Pose-Control-Grafik zusätzlich Skeleton-/Silhouetteninformationen benötigt.

# NÄCHSTER ZULÄSSIGER SCHRITT
DF-02F.6R.3 vollständig implementieren, danach ausschließlich FR01 mit den drei direkten Handoff-Artefakten neu generieren.
