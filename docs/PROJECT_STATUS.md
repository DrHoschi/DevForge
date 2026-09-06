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
- Aktueller Entwicklungsblock: `DF-02F.6R.1`

# ARCHITEKTURENTSCHEIDUNG: ECHTE 3D-ANIMATION ALS POSEQUELLE
Ab DF-02F verwendet DevForge echte geriggte 3D-Animationsquellen. Die Animation liefert die Bewegungsgeometrie. Timeline, Facing, Kamera und Referenzzeitpunkt werden in DevForge kontrolliert. Für die Bildgenerierung gilt ab F.6: Character Reference definiert Identität/Design; Pose Reference definiert Körperhaltung und Ansicht.

# DF-02F – 3D Animation Reference Viewer Foundation
1. DF-02F.1 – Animated 3D Reference Asset Contract – PASS
2. DF-02F.2 – Animated 3D Preview / Runtime Asset Intake – PASS
3. DF-02F.3 / F.3R – Animation Timeline / Scrubbing – PASS
4. DF-02F.4 / F.4R – Camera & Facing Presets / Semantic Alignment – PASS
5. DF-02F.5 – Pose Bookmark / Reference Capture – PASS
6. DF-02F.6 – Prompt Builder / Pose Reference Bridge – PARTIAL / RETEST REQUIRED
7. DF-02F.6R.1 – Pose Fidelity Contract Reinforcement – IMPLEMENTED / RETEST REQUIRED

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

# DF-02F.6 – Prompt Builder / Pose Reference Bridge – PARTIAL / RETEST REQUIRED
Branch:
`df-02f6-prompt-builder-pose-reference-bridge`

Der bisherige DF-02D.3R-Prompt-Builder wurde für diesen Workflow bewusst vereinfacht.

Grundstruktur bleibt gültig:
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
- TXT-, JSON- und PDF-Package-Export bleiben vorhanden.

## Ergebnis des ersten echten Character-Pose-Generationstests
FR01–FR05 wurden mit echten Pose References erzeugt.

Ergebnis:
- Identität / Character Design deutlich stabiler als im früheren Prompt-Workflow;
- Pose-Referenzen werden grundsätzlich erkannt;
- die Generierung normalisiert einzelne Zwischenposen jedoch weiterhin zu ähnlichen generischen WALK-Posen;
- insbesondere die zeitliche / geometrische Unterscheidbarkeit zwischen aufeinanderfolgenden Frames ist noch nicht zuverlässig genug;
- die Character Reference beeinflusst teilweise frameabhängige Hand-/Armpositionen stärker als gewünscht;
- DF-02F.6 erhält deshalb noch keinen PASS.

Status:
**PARTIAL / CONTRACT REFINEMENT REQUIRED**

# DF-02F.6R.1 – Pose Fidelity Contract Reinforcement – IMPLEMENTED / RETEST REQUIRED
Scope dieses Fixes ist ausschließlich der Generierungscontract im Prompt Builder. Viewer, 3D-Animation, Timeline, Bookmarks, Facing-/Kameraimplementierung und Reference-Architektur bleiben unverändert.

Neu verstärkt:
- `POSE GEOMETRY IS AUTHORITATIVE, NOT ADVISORY`;
- keine Normalisierung auf eine natürlichere, attraktivere oder generische WALK-Pose;
- expliziter Artikulationsvertrag für leading/trailing leg, Fußabstand, Fußhöhe, Foot Contact, Knöchel, Knie, Hüfte, Pelvis, Torso, Schultern, Ellenbogen, Handgelenke, Hände und Kopf;
- ungewöhnliche / transitorische Pose-Geometrie muss als solche erhalten bleiben;
- temporäre Hand-/Objektkontakte gelten als Pose State und werden nicht aus der Character Reference erzwungen;
- permanente Ausrüstung bleibt Character Design, Körperhaltung und Griffzustand bleiben Pose-Eigenschaften;
- Camera/Scale/Root Lock verschärft: kein Zoom-in für Gesichts- oder Materialdetail;
- Frame Distinctness Contract ergänzt;
- Acceptance Gate um ARTICULATION PASS, CONTACT PASS und DISTINCTNESS PASS erweitert;
- weiterhin genau zwei visuelle Autoritäten: Character Reference + Pose Reference;
- keine Previous Frames oder zusätzlichen Difference References in diesem Retest.

Build:
`DF-02F.6R.1 · TESTBUILD`

Schema:
`df-character-pose-0.2f6r1`

## DF-02F.6R.1 Retest Gate
Jetzt ausschließlich FR01, FR02 und FR03 neu als PDF Packages exportieren und anschließend neu generieren.

Vor jedem Export verbindlich prüfen:
1. Referenz-ID-Feld enthält exakt `FR01`, `FR02` bzw. `FR03`;
2. Authoritative Character Reference ist dieselbe Carrier-Referenz;
3. Authoritative Pose Reference entspricht dem jeweiligen 3D-Bookmark;
4. PDF enthält die jeweilige korrekte Reference ID;
5. keine früher generierten Carrier-Frames werden als Pose- oder Difference-Reference ergänzt.

PASS-Kriterien:
- FR01, FR02 und FR03 zeigen dieselbe Carrier-Identität und permanentes Design;
- Facing, Gameplay-Kamera, Projektion, Framing, Scale und Root bleiben konsistent;
- die drei Zielposen reproduzieren klar unterschiedliche Gelenkstellungen entsprechend ihren jeweiligen Mannequin-/3D-Pose-References;
- insbesondere FR03 fällt nicht wieder auf FR01/FR02 oder eine generische WALK-Pose zurück;
- temporäre Hand-/Arm-/Foot-Contact-Zustände folgen der jeweiligen Pose Reference.

FINAL PASS für diesen Retest nur, wenn alle drei Frames die Kriterien erfüllen.

Bei FAIL:
- nicht FR04–FR08 fortsetzen;
- nicht unspezifisch weitere Prompttexte hinzufügen;
- gezielt analysieren, welcher Teil des Pose-Vertrags weiterhin ignoriert wird (z. B. Beine/Füße, Pelvis/Torso, Arme/Hände, Kamera/Scale oder Distinctness);
- erst daraus den nächsten eng begrenzten Fix ableiten.

# NÄCHSTER ZULÄSSIGER SCHRITT
Jetzt ausschließlich **DF-02F.6R.1 Retest mit FR01–FR03** auf Branch:
`df-02f6-prompt-builder-pose-reference-bridge`

Noch nicht:
- FR04–FR08 weiterproduzieren;
- zusätzliche Difference References einführen;
- automatische Übergabe von Viewer-Bookmarks ohne Bilddatei;
- zusätzliche Animation-Library-Verwaltung;
- freie Bone-Manipulation;
- Atlas-Automatisierung.

Bei PASS folgt die Entscheidung, ob DF-02F.6 als belastbar abgeschlossen werden kann. Erst danach wird der weitere DF-02F-Abschluss-/Regression-Gate bzw. die Fortsetzung der Frame-Produktion freigegeben.