# DevForge – Project Status

Stand: 2026-09-07

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungs-/Freeze-Branch: `df-04e-silhouette-difference-foundation`
- DF-04E Baseline: `d22ccfdfe682a33a56ead9fd2db2355fd8734682`
- DF-04E Contract: `docs/DF-04E_SILHOUETTE_DIFFERENCE_FOUNDATION_CONTRACT.md`
- Eingefrorener Review-Stand: `DF-04E – PASS / 0 BLOCKER / FROZEN`
- Aktueller abgeschlossener Entwicklungsblock: `DF-04E – Silhouette Difference Foundation`

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
Contract:
`docs/DF-04E_SILHOUETTE_DIFFERENCE_FOUNDATION_CONTRACT.md`

Eingefrorener Umfang:
- sichtbare geprüfte Build-Kennung `DF-04E · TESTBUILD 1`;
- DF-04A-Basisvergleich bleibt unverändert erhalten;
- DF-04B-Overlay/Blend bleibt unverändert erhalten;
- DF-04C-X/Y/Scale und `Reset Alignment` bleiben unverändert erhalten;
- DF-04D-RGBA-Difference bleibt als eigener Modus unverändert erhalten;
- zusätzlicher Ansichtsmodus `Silhouette`;
- Wiederverwendung derselben geladenen Source-/Result-Bilder ohne neue Slots;
- dieselbe responsive Review-Rasterfläche und dieselben Fit-/Center-/Alignment-Regeln wie DF-04D;
- deterministische binäre Silhouettenmaske ausschließlich aus gerendertem Alpha;
- feste interne Alpha-Grenze `16 / 255`, nicht benutzerveränderbar;
- RGB-Farbe, Textur, Material und Beleuchtung beeinflussen die Silhouettenmaske nicht;
- Überlappung = hellgrau, Source-only = magenta, Result-only = cyan, Hintergrund = schwarz;
- X/Y/Scale und `Reset Alignment` aktualisieren die Silhouette Difference über den bestehenden DF-04C-Zustand;
- Wechsel zwischen Basisvergleich, Overlay, Difference und Silhouette erhält Bilder und Alignment;
- responsive/touch-taugliche iPhone/iPad/Safari-Darstellung;
- Cache-Busting `df04e-testbuild1`.

### DF-04E Gerätetest – PASS / 0 BLOCKER
Reale iPhone-/Safari-Evidenz vom 2026-09-07 bestätigt:
- DF-04A/B/C/D funktionieren weiterhin;
- `Silhouette` ist klar erreichbar und nutzt dieselben geladenen Bilder;
- Farbe, Textur, Material und Beleuchtung dominieren die Silhouettenansicht nicht;
- Überlappung, Source-only und Result-only sind klar und voneinander unterscheidbar;
- transparente Hintergründe und Alpha-Kanten werden ohne sichtbare Darstellungsfehler verarbeitet;
- Result-X, Result-Y und uniforme Result-Scale verändern die Silhouette Difference entsprechend;
- `Reset Alignment` stellt den neutralen DF-04B-Zustand wieder her;
- alle bisherigen Modi und Funktionen bleiben erhalten;
- die Silhouettenansicht ist auf dem getesteten iPhone/Safari sinnvoll bedienbar;
- keine ausgeschlossene Threshold-, Tolerance-, Scoring-, Auto-Alignment-, KI-, Persistenz- oder Atlas-Funktion wurde vorgezogen.

Gerätetest-Ergebnis: `DF-04E · TESTBUILD 1 – PASS / 0 BLOCKER`.

### Explizit nicht Teil des eingefrorenen DF-04E-Umfangs
- Auto-Alignment / Best-Fit;
- Rotation / Perspective / Warp / Skew;
- zusätzliche Alignment-Werkzeuge;
- benutzerveränderbarer Alpha-Threshold;
- Tolerance-Regler;
- mehrere Masken-/Morphologie-Modi;
- Erosion / Dilatation / Blur / Edge-Smoothing als Benutzerfunktion;
- Konturvermessung;
- Pixel-, Flächen-, Prozent-, IoU- oder Overlap-Score;
- automatische PASS/FAIL-Entscheidung;
- Pose-/Skeleton-Scoring;
- KI-Auswertung oder Fehlerklassifizierung;
- Persistenz / Asset Library;
- Review-Notizen / Approve / Reject;
- Atlas-Funktionen;
- Änderungen am DF-02F-Generation-Handoff.

# DF-04E – Completion / Freeze Gate – PASS
Gemeinsame Regression durchgeführt gegen:
- den verbindlichen DF-04E-Contract;
- die reconciliierte DF-04E-Baseline `d22ccfdfe682a33a56ead9fd2db2355fd8734682`;
- den vollständigen Branch-Diff bis zum Geräte-PASS-Head `252932e672c3a6f6c6c359089d6a93a7fadbfbd9`;
- die eingefrorenen DF-04A-/DF-04B-/DF-04C-/DF-04D-Regressionsgrenzen;
- die vollständige reale iPhone-/Safari-Geräte-Evidenz;
- sämtliche DF-04E-Nicht-Ziele.

Gate-Ergebnis:
- Branch ist exakt von der reconciliierten Baseline abgeleitet und `0 behind`;
- vor dem Freeze-Dokumentationscommit umfasst der vollständige DF-04E-Diff ausschließlich `tools/source-result-compare/index.html`, `tools/source-result-compare/app.js` und `docs/PROJECT_STATUS.md`;
- die Produktänderung bleibt auf die vertraglich definierte Silhouette Difference begrenzt;
- DF-04A/B/C/D wurden auf dem Zielgerät gegen ihre eingefrorenen Grenzen regressiert;
- alle 14 DF-04E-PASS-Kriterien sind durch Implementierung plus reale Geräte-Evidenz erfüllt;
- keine Threshold-, Tolerance-, Scoring-, Auto-Alignment-, KI-, Persistenz-, Atlas- oder Generation-Handoff-Funktion wurde vorgezogen;
- im Completion-/Freeze-Gate selbst wurde keine neue Produktfunktion ergänzt.

Ergebnis: `DF-04E – PASS / 0 BLOCKER / FROZEN`.

# Nächster zulässiger Schritt
Kein weiterer DF-04E-Funktionsausbau auf diesem eingefrorenen Stand.

Ein Folgeblock ist nicht automatisch freigegeben. Zuerst muss aus der realen DF-04E-Erfahrung fachlich bestimmt werden, welcher eng abgegrenzte Review-Schritt als Nächstes tatsächlich benötigt wird. Bis dahin kein Threshold/Tolerance, kein Scoring, kein Auto-Alignment und keine zusätzliche Silhouettenlogik.
