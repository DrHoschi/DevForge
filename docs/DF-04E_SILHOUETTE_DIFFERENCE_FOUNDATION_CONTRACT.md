# DF-04E – Silhouette Difference Foundation – Contract

Stand: 2026-09-07
Status: CONTRACT DEFINED – IMPLEMENTATION NOT AUTHORIZED
Frozen product baseline: `DF-04D – PASS / 0 BLOCKER / FROZEN`
Frozen DF-04D head: `89b9b8e214ed4463a0e8150cb5a4563351c7c55b`

## 1. Zweck
DF-04E ergänzt den eingefrorenen Source-/Result-Review um genau eine zusätzliche visuelle Prüfhilfe: eine Silhouette Difference View, die die äußere Form bzw. Alpha-Maske von Source / Control und Result auf derselben Review-Fläche miteinander vergleicht.

Der reale DF-04D-Test hat gezeigt, dass die vorhandene RGBA-Difference zuverlässig Abweichungen sichtbar macht, dabei aber Farb-, Material-, Licht- und Texturunterschiede gemeinsam mit geometrischen Konturabweichungen darstellt. DF-04E trennt deshalb als nächsten kleinen Schritt ausschließlich die Silhouetten-/Alpha-Formprüfung von der bestehenden vollfarbigen RGBA-Difference.

DF-04E dient weiterhin ausschließlich der menschlichen visuellen Prüfung. Es führt kein Scoring, keine automatische Bewertung und keine automatische Ausrichtung ein.

## 2. Verbindliche Baseline / Grenze zu DF-04A–D
DF-04A bleibt autoritativ für:
- die zwei lokalen Bildslots;
- Source-/Control- und Result-Rollen;
- Laden/Ersetzen;
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
- den bestehenden `Difference`-Modus;
- gemeinsame Review-Rasterfläche;
- deterministische pixelweise absolute RGBA-Difference;
- Alpha als Bestandteil dieser Difference;
- dunkle/helle Intensitätsdarstellung der RGBA-Abweichung.

DF-04E darf keine dieser Funktionen ersetzen oder semantisch verändern. Die Silhouette Difference ist eine zusätzliche Review-Ansicht auf denselben geladenen Bildern und demselben aktuellen DF-04C-Alignment.

## 3. Scope DF-04E
DF-04E implementiert ausschließlich:
- einen zusätzlichen klar erkennbaren Ansichtsmodus `Silhouette` oder `Silhouette Difference` neben Basisvergleich, Overlay und Difference;
- Wiederverwendung derselben geladenen Source-/Result-Bilder ohne neue Bildslots;
- Verwendung derselben gemeinsamen Review-Rasterfläche;
- Source nach der eingefrorenen Fit-/Center-Regel;
- Result nach derselben Regel plus aktuellem DF-04C-X/Y/Scale-Alignment;
- Ableitung genau einer binären bzw. eindeutig zweistufigen Vordergrund-/Hintergrund-Silhouettenmaske pro Bild aus dem gerenderten Alpha-Kanal;
- visuellen Vergleich der beiden Silhouettenmasken;
- Bereiche, die in beiden Masken gleichermaßen Vordergrund oder gleichermaßen Hintergrund sind, erscheinen neutral/dunkel;
- Bereiche, in denen nur Source Vordergrund ist, werden eindeutig von Bereichen unterschieden, in denen nur Result Vordergrund ist;
- Überlappungsbereiche der beiden Silhouetten bleiben klar erkennbar;
- unmittelbare Aktualisierung der Silhouette Difference bei Änderung von X, Y oder Scale;
- `Reset Alignment` wirkt unverändert auch auf die Silhouette Difference;
- Rückkehr zu Basisvergleich, Overlay oder Difference ohne Verlust geladener Bilder oder Alignment-Werte;
- responsive und touch-taugliche Darstellung auf iPhone/iPad/Safari;
- sichtbare DF-04E-Build-Kennung und Cache-Busting erst im später freigegebenen Implementierungsblock.

## 4. Silhouettenregel
Die Silhouette Difference arbeitet deterministisch auf derselben Review-Rasterfläche wie DF-04D.

Verbindlich gilt:
1. Source und Result werden geometrisch nach denselben eingefrorenen Render-/Alignment-Regeln wie in DF-04D auf die Review-Fläche gebracht.
2. Für die Silhouettenbildung wird ausschließlich der gerenderte Alpha-Kanal ausgewertet.
3. DF-04E verwendet genau eine feste, intern definierte Alpha-Grenze zur Unterscheidung von Vordergrund und Hintergrund.
4. Diese Grenze ist im DF-04E-Testbuild nicht benutzerveränderbar.
5. RGB-Farbwerte, Texturen, Beleuchtung und Materialdetails beeinflussen die Silhouettenmaske nicht.
6. Die Silhouettenvisualisierung muss deterministisch zwischen gemeinsamer Überlappung, Source-only und Result-only unterscheiden.

Die feste interne Alpha-Grenze ist nur technische Maskenbildung und kein freigegebener Threshold-/Tolerance-Regler. Eine benutzerveränderbare Toleranz bleibt ausdrücklich außerhalb von DF-04E.

## 5. Alignment- und Zustandsregel
DF-04E besitzt keine eigenen Alignment-Werkzeuge.

Die Silhouette Difference liest ausschließlich den bestehenden temporären DF-04C-Zustand:
- X;
- Y;
- uniforme Scale.

Änderungen bleiben Eigentum von DF-04C. `Reset Alignment` muss weiterhin X = 0, Y = 0 und Scale = 100 % herstellen und damit auch die Silhouettenansicht deterministisch aktualisieren.

DF-04E erzeugt keinen persistenten Zustand und verändert weder Source noch Result.

## 6. Explizite Nicht-Ziele
Nicht Teil von DF-04E sind:
- automatische Registrierung / Auto-Alignment / Best-Fit;
- Rotation, Perspective, Warp oder Skew;
- zusätzliche Alignment-Werkzeuge;
- benutzerveränderbarer Alpha-Threshold;
- Tolerance-Regler;
- mehrere Masken-/Morphologie-Modi;
- Erosion / Dilatation / Blur / Edge-Smoothing als Benutzerfunktion;
- Konturvermessung;
- Pixel-, Flächen- oder Prozentwert der Silhouettenabweichung;
- Bounding-Box-/IoU-/Overlap-Score;
- Difference- oder Pose-Scoring;
- automatische PASS/FAIL-Entscheidung;
- KI-Auswertung oder Fehlerklassifizierung;
- Landmark-/Skeleton-Erkennung;
- Persistenz / Asset Library / gespeicherte Silhouette-Profile;
- Review-Notizen / Approve / Reject;
- Atlas-Funktionen;
- Änderungen am DF-02F-Generation-Handoff oder Prompt Builder.

## 7. PASS-Kriterien
DF-04E kann erst PASS werden, wenn auf einem realen Zielgerät bestätigt ist:
1. DF-04A-Basisvergleich, DF-04B-Overlay/Blend, DF-04C-Alignment und DF-04D-RGBA-Difference funktionieren unverändert weiter.
2. Mit denselben geladenen Bildern kann ohne erneutes Laden in einen klar erkennbaren Silhouette-Difference-Modus gewechselt werden.
3. Farb-, Textur- und Beleuchtungsunterschiede dominieren die Silhouettenansicht nicht.
4. Gemeinsame Source-/Result-Silhouette ist klar als Überlappung erkennbar.
5. Source-only-Silhouettenbereiche sind eindeutig erkennbar.
6. Result-only-Silhouettenbereiche sind eindeutig erkennbar und von Source-only unterscheidbar.
7. Änderung von Result-X aktualisiert die Silhouette Difference entsprechend dem bestehenden DF-04C-Alignment.
8. Änderung von Result-Y aktualisiert sie entsprechend.
9. Änderung der uniformen Result-Scale aktualisiert sie entsprechend.
10. `Reset Alignment` stellt auch für die Silhouette Difference den neutralen DF-04B-Zustand wieder her.
11. Transparente Hintergründe und Alpha-Kanten werden ohne Darstellungsfehler verarbeitet.
12. Wechsel zwischen Silhouette, Difference, Overlay und Basisvergleich erhält Bilder und Alignment-Zustand.
13. Die Silhouettenansicht ist auf iPhone/iPad/Safari sinnvoll nutzbar.
14. Keine ausgeschlossene Threshold-, Tolerance-, Scoring-, Auto-Alignment-, KI-, Persistenz- oder Atlas-Funktion wurde vorgezogen.

## 8. Folgegrenze
DF-04E schließt nur die grundlegende visuelle Silhouetten-/Alpha-Masken-Prüfung.

Erst die reale DF-04E-Geräteerfahrung darf zeigen, ob anschließend überhaupt ein technischer Messwert, eine benutzerveränderbare Toleranz oder eine andere Konturhilfe benötigt wird. Solche Funktionen benötigen einen separaten Contract und sind nicht automatisch freigegeben.

## 9. Branch-/Implementierungsregel
Dieser Contract wird auf dem eingefrorenen DF-04D-Produktstand dokumentiert. Der eingefrorene Produkt-Head `89b9b8e214ed4463a0e8150cb5a4563351c7c55b` bleibt die fachliche Produktbaseline.

In diesem Dokumentationsschritt wird kein DF-04E-Branch angelegt und keine Produktlogik/UI/JavaScript verändert.

Erst nach PASS eines separaten `DF-04E Contract / Roadmap Reconciliation` Gates darf ein DF-04E-Entwicklungsbranch exakt von der dann festgelegten reconciliierten Dokumentationsbaseline erstellt werden.
