# DevForge – Project Status

Stand: 2026-09-09

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-04f-silhouette-geometry-guide-foundation`
- Eingefrorener Produktstand: `DF-04E – PASS / 0 BLOCKER / FROZEN`
- Reconciliierte DF-04F-Baseline: `1f9badba271bb3a6a055f8ef234164dd9acd39e8`
- DF-04F Contract: `docs/DF-04F_SILHOUETTE_GEOMETRY_GUIDE_FOUNDATION_CONTRACT.md`
- Aktuelles Gate: `DF-04F · TESTBUILD 1 – DEVICE TEST REQUIRED`

# DF-04 – Asset Review Foundation

## DF-04A – Source / Result Compare View – PASS / FROZEN
Autoritativ für zwei getrennte lokale Bildslots, feste Source-/Result-Rollen, unabhängiges Ersetzen, proportionale vollständige Darstellung und responsive Basisvergleichsansicht.

## DF-04B – Overlay / Onion-Skin Compare Foundation – PASS / FROZEN
Autoritativ für gemeinsamen Overlay-Vergleich, Source als Basis-Layer, Result als Overlay-Layer und manuellen 0–100-%-Blend-Regler.

## DF-04C – Manual Alignment Foundation – PASS / FROZEN
Autoritativ für manuelle Result-Translation X/Y, uniforme Scale, sichtbare Werte, `Reset Alignment` und temporären nicht persistierten Alignment-Zustand. Source bleibt unbeweglich.

## DF-04D – Difference View Foundation – PASS / FROZEN
Autoritativ für die deterministische pixelweise absolute RGBA-Difference auf gemeinsamer Review-Rasterfläche unter Verwendung desselben DF-04C-Alignments. Geringe Abweichung erscheint dunkel, stärkere heller; Alpha ist Bestandteil der Difference. Kein Score und keine automatische Bewertung.

## DF-04E – Silhouette Difference Foundation – PASS / FROZEN
Autoritativ für die deterministische Alpha-/Silhouettenprüfung auf derselben Review-Rasterfläche. Überlappung, Source-only und Result-only werden visuell unterschieden. RGB, Textur, Material und Beleuchtung beeinflussen die Maske nicht. DF-04C-X/Y/Scale und `Reset Alignment` gelten unverändert weiter.

## DF-04F – Silhouette Geometry Guide Foundation – TESTBUILD 1
Contract:
`docs/DF-04F_SILHOUETTE_GEOMETRY_GUIDE_FOUNDATION_CONTRACT.md`

### TESTBUILD 1 implementiert
Auf dem separaten Branch `df-04f-silhouette-geometry-guide-foundation` wurde ausschließlich der vertraglich freigegebene Geometry-Guide-Ausbau ergänzt:
- sichtbare Build-Kennung `DF-04F · TESTBUILD 1`;
- Cache-Busting `df04f-testbuild1`;
- bestehende Modi Basisvergleich, Overlay / Onion-Skin, Difference und Silhouette bleiben erhalten;
- Source-Bounding-Box wird aus derselben gerenderten DF-04E-Alpha-Maske mit fester interner Grenze `16 / 255` ermittelt;
- Result-Bounding-Box wird aus derselben Alpha-Maske nach aktuellem DF-04C-X/Y/Scale-Alignment ermittelt;
- beide Bounding Boxes sind achsenparallel und entsprechen jeweils dem kleinsten Rechteck um alle Vordergrundpixel;
- geometrischer Center jeder Bounding Box wird als Center-Kreuz dargestellt;
- Source-Guide ist durchgezogen, Result-Guide gestrichelt und damit visuell unterscheidbar;
- optionaler gemeinsamer Schalter `Geometry Guides` blendet ausschließlich beide Guides ein bzw. aus;
- der Guide-Schalter verändert weder Bilder noch Alignment-Werte;
- Änderungen von X, Y und uniformer Scale lösen die bestehende Silhouette-Neuberechnung aus und aktualisieren dadurch Result-Box und Result-Center;
- `Reset Alignment` aktualisiert Result-Box und Result-Center zurück auf den neutralen DF-04B-Zustand;
- Source-Guides werden durch Result-Alignment nicht verändert;
- bei leerer Alpha-Maske wird für die betreffende Seite kein Guide dargestellt;
- keine numerischen Geometriewerte oder Scores werden ausgegeben;
- responsive/touch-tauglicher einzelner Guide-Schalter für schmale Viewports.

### Weiterhin explizit nicht implementiert
- automatische Bewegung von Result;
- Auto-Alignment / Best-Fit;
- automatische Center-Ausrichtung;
- automatische Scale-Anpassung oder neuer Scale-Algorithmus;
- Rotation / Perspective / Warp / Skew;
- zusätzliche Alignment-Werkzeuge;
- benutzerveränderbarer Alpha-Threshold;
- Tolerance-Regler;
- Morphologie / Erosion / Dilatation / Blur;
- Konturverfolgung / Polygonisierung;
- numerische Center-, Breiten-, Höhen-, Flächen-, Pixel-, Prozent-, IoU- oder Overlap-Metriken;
- Difference-, Silhouette- oder Pose-Scoring;
- automatische PASS/FAIL-Entscheidung;
- KI-Auswertung oder Fehlerklassifizierung;
- Persistenz / Asset Library;
- Review-Notizen / Approve / Reject;
- Atlas-Funktionen;
- Änderungen am DF-02F-Generation-Handoff oder Prompt Builder.

# Aktuelles Gate
`DF-04F · TESTBUILD 1 – DEVICE TEST REQUIRED`

Vor PASS/FROZEN muss auf realem iPhone/iPad/Safari gegen den Contract bestätigt werden:
1. DF-04A-Basisvergleich, DF-04B-Overlay/Blend, DF-04C-Alignment, DF-04D-RGBA-Difference und DF-04E-Silhouette funktionieren unverändert weiter.
2. Source-Bounding-Box umfasst sichtbar die Source-Silhouette.
3. Result-Bounding-Box umfasst sichtbar die Result-Silhouette.
4. Source- und Result-Box sind eindeutig unterscheidbar.
5. Source-Center liegt sichtbar im geometrischen Mittelpunkt der Source-Box.
6. Result-Center liegt sichtbar im geometrischen Mittelpunkt der Result-Box.
7. Result-X aktualisiert Result-Box und Result-Center; Source-Guides bleiben unverändert.
8. Result-Y aktualisiert Result-Box und Result-Center; Source-Guides bleiben unverändert.
9. uniforme Result-Scale aktualisiert Result-Box und Result-Center; Source-Guides bleiben unverändert.
10. `Reset Alignment` stellt neutralen Zustand und passende Result-Guides wieder her.
11. `Geometry Guides` blendet ausschließlich Hilfsgeometrie ein/aus und verändert weder Bilder noch Alignment.
12. Moduswechsel erhält Bilder und Alignment-Zustand.
13. Guides sind auf iPhone/iPad/Safari sinnvoll erkennbar und bedienbar, ohne Silhouette unbrauchbar zu machen.
14. Keine ausgeschlossene Auto-Alignment-, Best-Fit-, Scoring-, Threshold/Tolerance-, KI-, Persistenz- oder Atlas-Funktion wurde vorgezogen.

# Nächster zulässiger Schritt
Ausschließlich `DF-04F · TESTBUILD 1` auf realem Zielgerät testen und Evidenz gegen die 14 PASS-Kriterien sammeln.

Noch kein Completion-/Freeze-Gate, kein Folgeblock und kein weiterer Funktionsausbau.
