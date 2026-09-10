# DevForge – Project Status

Stand: 2026-09-10

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-04f-silhouette-geometry-guide-foundation`
- Eingefrorener Produktstand: `DF-04E – PASS / 0 BLOCKER / FROZEN`
- Reconciliierte DF-04F-Baseline: `1f9badba271bb3a6a055f8ef234164dd9acd39e8`
- DF-04F Contract: `docs/DF-04F_SILHOUETTE_GEOMETRY_GUIDE_FOUNDATION_CONTRACT.md`
- Aktueller Status: `DF-04F · TESTBUILD 1 – PASS / 0 BLOCKER`
- Nächstes Gate: `DF-04F – Completion / Freeze Gate`

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

### DF-04F Gerätetest – PASS / 0 BLOCKER
Reale iPhone-/Safari-Evidenz vom 2026-09-10 bestätigt:
- sichtbare Build-Kennung `DF-04F · TESTBUILD 1`;
- DF-04A-Basisvergleich, DF-04B-Overlay/Blend, DF-04C-Alignment, DF-04D-RGBA-Difference und DF-04E-Silhouette funktionieren weiterhin;
- Source-Bounding-Box umfasst sichtbar die gerenderte Source-Silhouette;
- Result-Bounding-Box umfasst sichtbar die gerenderte Result-Silhouette;
- Source- und Result-Box sind eindeutig unterscheidbar;
- Source-Center liegt sichtbar im geometrischen Mittelpunkt der Source-Box;
- Result-Center liegt sichtbar im geometrischen Mittelpunkt der Result-Box;
- `Geometry Guides` wurde aus- und wieder eingeschaltet; ausschließlich Boxen/Center verschwanden bzw. erschienen wieder, Bilder und Alignment blieben unverändert;
- Änderung von Result-X aktualisierte ausschließlich Result-Box und Result-Center; Source-Guides blieben unverändert;
- Änderung von Result-Y aktualisierte ausschließlich Result-Box und Result-Center; Source-Guides blieben unverändert;
- Änderung der uniformen Result-Scale aktualisierte Result-Box und Result-Center; Source-Guides blieben unverändert;
- `Reset Alignment` stellte X = 0, Y = 0 und Scale = 100 % sowie die neutralen Result-Guides wieder her;
- Wechsel zwischen Basisvergleich, Overlay, Difference und Silhouette erhielt Bilder und Alignment-Zustand;
- Guides sind auf dem real getesteten iPhone/Safari sinnvoll erkennbar und bedienbar, ohne die Silhouette unbrauchbar zu machen;
- keine ausgeschlossene Auto-Alignment-, Best-Fit-, Scoring-, Threshold/Tolerance-, KI-, Persistenz- oder Atlas-Funktion wurde vorgezogen.

Gerätetest-Ergebnis: `DF-04F · TESTBUILD 1 – PASS / 0 BLOCKER`.

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
`DF-04F · TESTBUILD 1 – PASS / 0 BLOCKER`

Alle 14 vertraglichen Geräte-PASS-Kriterien sind durch Implementierung plus reale iPhone-/Safari-Evidenz erfüllt. DF-04F ist damit geräteseitig bestanden, aber noch nicht eingefroren.

# Nächster zulässiger Schritt
Ausschließlich `DF-04F – Completion / Freeze Gate`: den verbindlichen DF-04F-Contract, den vollständigen Branch-Diff gegen `1f9badba271bb3a6a055f8ef234164dd9acd39e8`, die eingefrorenen DF-04A-/DF-04B-/DF-04C-/DF-04D-/DF-04E-Regressionsgrenzen und die reale Geräte-Evidenz gemeinsam regressieren.

Erst bei `PASS / 0 BLOCKER` darf DF-04F als `FROZEN` markiert werden.

Noch kein Folgeblock und kein weiterer Funktionsausbau.
