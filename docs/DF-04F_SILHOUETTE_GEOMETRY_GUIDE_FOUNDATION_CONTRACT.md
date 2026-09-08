# DF-04F – Silhouette Geometry Guide Foundation – Contract

Stand: 2026-09-08
Status: CONTRACT DEFINED – IMPLEMENTATION NOT AUTHORIZED
Frozen product baseline: `DF-04E – PASS / 0 BLOCKER / FROZEN`
Frozen DF-04E head: `49ff536b6070072c94e340e61cff7b37457a5f91`

## 1. Zweck
DF-04F ergänzt den eingefrorenen Source-/Result-Review um eine kleine geometrische Orientierungshilfe für die bereits vorhandene Silhouettenprüfung.

Die reale DF-04E-Erfahrung hat gezeigt, dass Überlappung, Source-only und Result-only zuverlässig sichtbar sind. Der nächste offene praktische Punkt ist nicht die Sichtbarkeit der Abweichung, sondern die manuelle Einordnung von Lage und Ausdehnung der beiden Silhouetten während des bestehenden DF-04C-X/Y/Scale-Alignments.

DF-04F macht deshalb ausschließlich die einfache Geometrie hinter den beiden bereits gerenderten Silhouetten sichtbar. Es verändert die Bilder nicht, führt keine automatische Bewegung aus und berechnet keinen Bewertungs- oder Freigabescore.

## 2. Verbindliche Baseline / Grenze zu DF-04A–E
DF-04A bleibt autoritativ für:
- die zwei lokalen Bildslots;
- Source-/Control- und Result-Rollen;
- Laden und Ersetzen;
- Basisvergleich und proportionale vollständige Darstellung.

DF-04B bleibt autoritativ für:
- Overlay / Onion-Skin;
- Source als Basis-Layer und Result als Overlay-Layer;
- den 0–100-%-Blend-Regler.

DF-04C bleibt autoritativ für:
- unbewegliche Source / Control;
- Result-X;
- Result-Y;
- uniforme Result-Scale;
- sichtbare Alignment-Werte;
- `Reset Alignment`;
- temporären, nicht persistierten Alignment-Zustand.

DF-04D bleibt autoritativ für:
- den RGBA-`Difference`-Modus;
- die gemeinsame Review-Rasterfläche;
- deterministische pixelweise absolute RGBA-Difference.

DF-04E bleibt autoritativ für:
- den `Silhouette`-Modus;
- die binären Alpha-Masken;
- die feste interne Alpha-Grenze `16 / 255`;
- die visuelle Trennung von Überlappung, Source-only und Result-only.

DF-04F darf keine dieser Funktionen ersetzen oder semantisch verändern. Die Geometry Guides sind ausschließlich eine zusätzliche visuelle Orientierung auf derselben bereits gerenderten Review-Geometrie.

## 3. Scope DF-04F
DF-04F implementiert ausschließlich:
- Ermittlung einer achsenparallelen Bounding Box für die gerenderte Source-Silhouette auf der gemeinsamen Review-Rasterfläche;
- Ermittlung einer achsenparallelen Bounding Box für die gerenderte Result-Silhouette auf derselben Review-Rasterfläche und unter aktuellem DF-04C-X/Y/Scale-Alignment;
- Ermittlung des geometrischen Mittelpunktes jeder dieser beiden Bounding Boxes;
- sichtbare Darstellung der Source-Bounding-Box und ihres Centers;
- sichtbare Darstellung der Result-Bounding-Box und ihres Centers;
- eindeutige visuelle Unterscheidbarkeit von Source- und Result-Geometrie;
- optional einen einzigen gemeinsamen Ein-/Aus-Schalter `Geometry Guides`, der ausschließlich diese Hilfslinien ein- oder ausblendet;
- unmittelbare Aktualisierung der Result-Bounding-Box und ihres Centers bei Änderung von X, Y oder uniformer Scale;
- unmittelbare Aktualisierung beider Geometrien bei Bildersetzung bzw. Bildwechsel;
- `Reset Alignment` wirkt unverändert und bringt damit auch die Result-Geometrie in den neutralen DF-04B-Zustand zurück;
- Erhalt geladener Bilder und Alignment-Werte beim Wechsel zwischen Basisvergleich, Overlay, Difference und Silhouette;
- responsive und touch-taugliche Darstellung auf iPhone/iPad/Safari;
- sichtbare DF-04F-Build-Kennung und Cache-Busting erst im später freigegebenen Implementierungsblock.

## 4. Geometrieregel
DF-04F arbeitet ausschließlich auf derselben gerenderten Silhouettengeometrie wie DF-04E.

Verbindlich gilt:
1. Die Vordergrundmaske wird unverändert nach der eingefrorenen DF-04E-Regel aus Alpha mit der festen internen Grenze `16 / 255` bestimmt.
2. Die Source-Bounding-Box ist das kleinste achsenparallele Rechteck auf der Review-Rasterfläche, das alle Source-Vordergrundpixel umfasst.
3. Die Result-Bounding-Box wird nach derselben Regel aus der bereits mit DF-04C-X/Y/Scale gerenderten Result-Silhouette bestimmt.
4. Der jeweilige Center ist ausschließlich der geometrische Mittelpunkt der betreffenden Bounding Box.
5. Die Guides sind rein visuelle Hilfsgeometrie und verändern weder Renderposition noch Alignment-Zustand.
6. Es wird kein Abstand, Verhältnis, Prozentwert oder anderer Bewertungswert aus Boxen oder Centern abgeleitet.

Falls eine Maske keinen Vordergrund enthält, wird für diese Seite keine gültige Bounding Box bzw. kein Center dargestellt; daraus entsteht keine automatische Fehlklassifikation oder Bewertung.

## 5. Darstellungs- und Zustandsregel
Source- und Result-Guides müssen visuell eindeutig unterscheidbar sein, ohne die bestehende Silhouette-Difference unbrauchbar zu machen.

Zulässig sind:
- dünne Bounding-Box-Linien;
- ein kleines Center-Kreuz bzw. Center-Marker;
- eindeutige Source-/Result-Kennzeichnung;
- ein gemeinsamer Ein-/Aus-Schalter für alle Geometry Guides.

Nicht zulässig sind zusätzliche Einstellregler für Linienbreite, Farbe, Center-Größe, Toleranz oder Berechnungsparameter.

Der Guide-Sichtbarkeitszustand ist in DF-04F nur temporärer Seitenzustand und wird nicht persistiert.

## 6. Explizite Nicht-Ziele
Nicht Teil von DF-04F sind:
- automatische Bewegung von Result;
- Auto-Alignment;
- Best-Fit;
- automatische Center-Ausrichtung;
- automatische Scale-Anpassung;
- neuer oder alternativer Scale-Algorithmus;
- Rotation, Perspective, Warp oder Skew;
- zusätzliche Alignment-Werkzeuge;
- benutzerveränderbarer Alpha-Threshold;
- Tolerance-Regler;
- Morphologie / Erosion / Dilatation / Blur;
- Konturverfolgung oder Polygonisierung;
- numerische X-/Y-Center-Differenz als Review-Metrik;
- Breiten-/Höhenverhältnis als Review-Metrik;
- Flächen-, Pixel-, Prozent-, IoU- oder Overlap-Score;
- Difference- oder Pose-Scoring;
- automatische PASS/FAIL-Entscheidung;
- automatische Bewertung oder Fehlerklassifikation;
- KI-Auswertung;
- Landmark-/Skeleton-Erkennung;
- Persistenz / Asset Library / gespeicherte Guide-Profile;
- Review-Notizen / Approve / Reject;
- Atlas-Funktionen;
- Änderungen am DF-02F-Generation-Handoff oder Prompt Builder.

## 7. PASS-Kriterien
DF-04F kann erst PASS werden, wenn auf einem realen Zielgerät bestätigt ist:
1. DF-04A-Basisvergleich, DF-04B-Overlay/Blend, DF-04C-Alignment, DF-04D-RGBA-Difference und DF-04E-Silhouette funktionieren unverändert weiter.
2. Source-Bounding-Box umfasst sichtbar die gerenderte Source-Silhouette.
3. Result-Bounding-Box umfasst sichtbar die gerenderte Result-Silhouette.
4. Source- und Result-Bounding-Box sind eindeutig unterscheidbar.
5. Source-Center liegt sichtbar im geometrischen Mittelpunkt der Source-Bounding-Box.
6. Result-Center liegt sichtbar im geometrischen Mittelpunkt der Result-Bounding-Box.
7. Änderung von Result-X aktualisiert Result-Box und Result-Center entsprechend; Source-Guides bleiben unverändert.
8. Änderung von Result-Y aktualisiert Result-Box und Result-Center entsprechend; Source-Guides bleiben unverändert.
9. Änderung der uniformen Result-Scale aktualisiert Result-Box und Result-Center entsprechend; Source-Guides bleiben unverändert.
10. `Reset Alignment` stellt den neutralen DF-04B-Zustand wieder her und aktualisiert die Result-Guides entsprechend.
11. Falls ein gemeinsamer `Geometry Guides`-Schalter implementiert wird, blendet er ausschließlich die Hilfsgeometrie ein/aus und verändert keine Bilder oder Alignment-Werte.
12. Wechsel zwischen Basisvergleich, Overlay, Difference und Silhouette erhält Bilder und Alignment-Zustand.
13. Die Guides sind auf iPhone/iPad/Safari sinnvoll erkennbar und bedienbar, ohne den Silhouettenvergleich unbrauchbar zu machen.
14. Keine ausgeschlossene Auto-Alignment-, Best-Fit-, Scoring-, Threshold-/Tolerance-, KI-, Persistenz- oder Atlas-Funktion wurde vorgezogen.

## 8. Folgegrenze
DF-04F schließt nur die visuelle Darstellung einfacher Silhouettengeometrie.

Erst die reale DF-04F-Geräteerfahrung darf zeigen, ob später überhaupt numerische Geometriewerte, eine manuelle Snap-Hilfe oder eine weitergehende Ausrichtungshilfe benötigt wird. Solche Funktionen benötigen jeweils einen separaten Contract und sind nicht automatisch freigegeben.

## 9. Branch-/Implementierungsregel
Dieser Contract wird auf dem eingefrorenen DF-04E-Produktstand dokumentiert. Der eingefrorene Produkt-Head `49ff536b6070072c94e340e61cff7b37457a5f91` bleibt die fachliche Produktbaseline.

In diesem Dokumentationsschritt wird kein DF-04F-Entwicklungsbranch angelegt und keine Produktlogik/UI/JavaScript verändert.

Erst nach PASS eines separaten `DF-04F Contract / Roadmap Reconciliation` Gates darf ein DF-04F-Entwicklungsbranch exakt von der dann festgelegten reconciliierten Dokumentationsbaseline erstellt werden.
