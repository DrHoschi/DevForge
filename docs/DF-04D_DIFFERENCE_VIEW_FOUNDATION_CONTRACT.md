# DF-04D – Difference View Foundation – Contract

Stand: 2026-09-07
Status: CONTRACT DEFINED – IMPLEMENTATION NOT AUTHORIZED
Baseline: eingefrorener `DF-04C – Manual Alignment Foundation` Stand `c6c624065c8c7a3390e3ff22f49742d9554bbd27`

## 1. Zweck
DF-04D erweitert den eingefrorenen Source-/Result-Review um genau eine zusätzliche visuelle Prüfansicht: eine deterministische Difference View, die auf derselben Source-/Result-Paarung und derselben manuellen DF-04C-Ausrichtung sichtbar macht, an welchen Bildbereichen Source / Control und Result voneinander abweichen.

DF-04D dient ausschließlich der menschlichen visuellen Prüfung. Es führt kein Scoring, keine automatische Bewertung und keine automatische Ausrichtung ein.

## 2. Verbindliche Baseline / Grenze zu DF-04A–C
DF-04A bleibt autoritativ für:
- die zwei lokalen Bildslots;
- Source-/Control- und Result-Rollen;
- unabhängiges Laden und Ersetzen;
- Basisvergleich und proportionale vollständige Darstellung.

DF-04B bleibt autoritativ für:
- den Overlay-/Onion-Skin-Modus;
- Source als Basis-Layer und Result als Overlay-Layer;
- den manuellen 0–100-%-Blend-Regler.

DF-04C bleibt autoritativ für:
- unbewegliche Source / Control;
- Result-Translation X und Y;
- uniforme Result-Skalierung;
- sichtbare X-/Y-/Scale-Werte;
- `Reset Alignment`;
- temporären, nicht persistierten Alignment-Zustand.

DF-04D darf keine dieser Funktionen ersetzen oder semantisch verändern. Die Difference View ist eine zusätzliche Review-Ansicht auf exakt denselben geladenen Bildern und dem aktuellen DF-04C-Alignment.

## 3. Scope DF-04D
DF-04D implementiert ausschließlich:
- einen klaren zusätzlichen Ansichtsmodus `Difference` neben Basisvergleich und Overlay / Onion-Skin;
- eine gemeinsame Difference-Darstellungsfläche für Source / Control und Result;
- Verwendung des aktuell in DF-04C eingestellten Result-Alignments (X, Y, uniforme Scale) als Eingabe für die Difference-Darstellung;
- eine deterministische pixelbezogene Abweichungsdarstellung auf einer gemeinsamen Review-Rasterfläche;
- identische bzw. nahezu identische Bereiche erscheinen dunkel bzw. mit geringer Intensität;
- stärkere visuelle Abweichungen erscheinen entsprechend heller bzw. mit höherer Intensität;
- unmittelbare Aktualisierung der Difference View, wenn X, Y oder Scale in DF-04C verändert werden;
- Rückkehr zu Basisvergleich oder Overlay ohne Verlust der geladenen Bilder oder Alignment-Werte;
- responsive und touch-taugliche Darstellung auf iPhone/iPad/Safari;
- sichtbare DF-04D-Build-Kennung und Cache-Busting für den Testbuild.

## 4. Difference-Berechnungsregel
Die Difference View arbeitet deterministisch auf einer gemeinsamen Review-Rasterfläche.

Für die Berechnung gelten verbindlich:
1. Source / Control wird nach der eingefrorenen DF-04B-Fit-/Center-Regel in die gemeinsame Rasterfläche gerendert.
2. Result wird nach derselben neutralen Fit-/Center-Regel gerendert und anschließend ausschließlich mit dem aktuellen DF-04C-X-/Y-/Scale-Zustand transformiert.
3. Die Abweichung wird pixelweise aus den beiden so gerenderten RGBA-Ergebnissen berechnet.
4. Pro Pixel wird eine nicht-negative absolute Kanalabweichung verwendet; identische RGBA-Werte ergeben Difference 0.
5. Die visuelle Difference-Intensität muss monoton mit der berechneten Abweichung steigen.
6. Transparenz ist Teil der Differenz: unterschiedliche Alpha-Werte dürfen nicht stillschweigend ignoriert werden.

Die konkrete interne Rechenformel darf technisch kompakt umgesetzt werden, muss aber deterministisch sein und darf während DF-04D nicht in eine semantische Bewertung oder einen Score überführt werden.

## 5. Alignment- und Zustandsregel
DF-04D besitzt keine eigenen Alignment-Transformationen.

Die Difference View liest ausschließlich den bereits vorhandenen temporären DF-04C-Zustand:
- X;
- Y;
- uniforme Scale.

Änderungen an diesen Werten bleiben Eigentum von DF-04C. `Reset Alignment` muss weiterhin den neutralen DF-04B-Zustand herstellen und dadurch auch die Difference View entsprechend zurücksetzen.

Der Difference-Modus selbst erzeugt keinen persistenten Zustand und verändert weder Source noch Result.

## 6. Explizite Nicht-Ziele
Nicht Teil von DF-04D sind:
- automatische Registrierung oder Auto-Alignment;
- automatische Best-Fit-Suche;
- Rotation, Perspective, Warp oder Skew;
- zusätzliche Difference-Alignment-Werkzeuge;
- Threshold-/Tolerance-Regler;
- Heatmap-Farbpaletten oder mehrere Difference-Darstellungsmodi;
- Difference-Prozentwert oder numerischer Score;
- Bounding-Box-/Flächenmessung der Differenz;
- Pose-/Skeleton-Scoring;
- KI-Auswertung;
- automatische PASS/FAIL-Entscheidung;
- automatische Fehlerklassifizierung;
- Persistenz / Asset Library;
- gespeicherte Alignment- oder Difference-Profile;
- Review-Notizen / Approve / Reject;
- Atlas-Funktionen;
- Änderungen am DF-02F-Generation-Handoff oder Prompt Builder.

## 7. PASS-Kriterien
DF-04D kann erst PASS werden, wenn auf einem realen Zielgerät bestätigt ist:
1. DF-04A-Basisvergleich, DF-04B-Overlay/Blend und DF-04C-Alignment funktionieren unverändert weiter.
2. Mit zwei geladenen Bildern kann in einen klar erkennbaren Difference-Modus gewechselt werden.
3. Die Difference View verwendet dieselben geladenen Source-/Result-Bilder und verlangt kein erneutes Laden.
4. Bei identischen bzw. deckungsgleich gleichen Bildbereichen ist die Difference-Intensität niedrig/dunkel.
5. Sichtbar abweichende Bildbereiche erscheinen mit höherer Difference-Intensität.
6. Änderung von Result-X aktualisiert die Difference View unmittelbar und ausschließlich über das bestehende DF-04C-Alignment.
7. Änderung von Result-Y aktualisiert die Difference View entsprechend.
8. Änderung der uniformen Result-Scale aktualisiert die Difference View entsprechend.
9. `Reset Alignment` stellt auch für die Difference View deterministisch den neutralen DF-04B-Zustand wieder her.
10. Transparente Bildbereiche werden ohne Darstellungsfehler verarbeitet; Alpha-Unterschiede bleiben als Difference erkennbar.
11. Rückkehr zu Overlay oder Basisvergleich erhält Bilder und Alignment-Zustand.
12. Die Difference View ist auf iPhone/iPad/Safari sinnvoll nutzbar.
13. Keine ausgeschlossene Auto-Alignment-, Scoring-, Threshold-, Persistenz-, KI- oder Atlas-Funktion wurde vorgezogen.

## 8. Folgegrenze
DF-04D schließt nur die grundlegende visuelle Difference-Darstellung.

Erst reale DF-04D-Geräteerfahrung darf zeigen, ob später zusätzliche Review-Hilfen wie Threshold/Tolerance, technische Messwerte oder andere Difference-Visualisierungen benötigt werden. Solche Funktionen benötigen jeweils einen separaten Folgecontract und sind nicht automatisch freigegeben.

## 9. Branch-/Implementierungsregel
Dieser Contract wird zunächst auf dem eingefrorenen DF-04C-Stand dokumentiert. Dabei wird noch kein DF-04D-Entwicklungsbranch angelegt und keine Produktlogik/UI/JavaScript geändert.

Erst nach PASS des `DF-04D Contract / Roadmap Reconciliation` Gates darf ein separater DF-04D-Branch exakt von der dann festgelegten reconciliierten DF-04C-Baseline erstellt werden.
