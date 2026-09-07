# DevForge – Project Status

Stand: 2026-09-07

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-04e-silhouette-difference-foundation`
- DF-04E Baseline: `d22ccfdfe682a33a56ead9fd2db2355fd8734682`
- Eingefrorener Produktstand: `DF-04D – PASS / 0 BLOCKER / FROZEN`
- DF-04E Contract: `docs/DF-04E_SILHOUETTE_DIFFERENCE_FOUNDATION_CONTRACT.md`
- Aktuelles Gate: `DF-04E · TESTBUILD 1 – DEVICE TEST REQUIRED`

# DF-04 – Asset Review Foundation

## DF-04A – Source / Result Compare View – PASS / FROZEN
Autoritativ für zwei getrennte lokale Bildslots, feste Source-/Result-Rollen, unabhängiges Ersetzen, proportionale vollständige Darstellung und responsive Basisvergleichsansicht.

## DF-04B – Overlay / Onion-Skin Compare Foundation – PASS / FROZEN
Autoritativ für gemeinsamen Overlay-Vergleich, Source als Basis-Layer, Result als Overlay-Layer und manuellen 0–100-%-Blend-Regler.

## DF-04C – Manual Alignment Foundation – PASS / FROZEN
Autoritativ für manuelle Result-Translation X/Y, uniforme Scale, sichtbare Werte, `Reset Alignment` und temporären nicht persistierten Alignment-Zustand. Source bleibt unbeweglich.

## DF-04D – Difference View Foundation – PASS / FROZEN
Autoritativ für die deterministische pixelweise absolute RGBA-Difference auf gemeinsamer Review-Rasterfläche unter Verwendung desselben DF-04C-Alignments. Geringe Abweichung erscheint dunkel, stärkere heller; Alpha ist Bestandteil der Difference. Kein Score und keine automatische Bewertung.

## DF-04E – Silhouette Difference Foundation
Contract:
`docs/DF-04E_SILHOUETTE_DIFFERENCE_FOUNDATION_CONTRACT.md`

### TESTBUILD 1 implementiert
Auf dem separaten Branch `df-04e-silhouette-difference-foundation` wurde ausschließlich der vertraglich freigegebene Silhouetten-Ausbau ergänzt:
- sichtbare Build-Kennung `DF-04E · TESTBUILD 1`;
- DF-04A-Basisvergleich bleibt unverändert erhalten;
- DF-04B-Overlay/Blend bleibt unverändert erhalten;
- DF-04C-X/Y/Scale und `Reset Alignment` bleiben unverändert Eigentum von DF-04C;
- DF-04D-RGBA-Difference bleibt als eigener Modus unverändert erhalten;
- zusätzlicher Ansichtsmodus `Silhouette`;
- Wiederverwendung derselben geladenen Source-/Result-Bilder ohne neue Slots;
- dieselbe responsive Review-Rasterfläche und dieselben Fit-/Center-/Alignment-Regeln wie DF-04D;
- pro Bild wird aus dem gerenderten Alpha-Kanal eine deterministische binäre Vordergrund-/Hintergrund-Maske abgeleitet;
- feste interne Alpha-Grenze `16 / 255`, im Testbuild nicht veränderbar;
- RGB-Farbe, Textur, Material und Beleuchtung beeinflussen die Silhouettenmaske nicht;
- Überlappung, Source-only und Result-only werden visuell eindeutig getrennt;
- Überlappung wird neutral hellgrau dargestellt;
- Source-only wird magenta dargestellt;
- Result-only wird cyan dargestellt;
- gemeinsamer Hintergrund bleibt schwarz;
- X/Y/Scale und `Reset Alignment` aktualisieren sowohl Difference als auch Silhouette über denselben DF-04C-Zustand;
- Moduswechsel zwischen Basisvergleich, Overlay, Difference und Silhouette erhält Bilder und Alignment;
- responsive/touch-taugliche Darstellung für schmale Viewports;
- Cache-Busting auf `df04e-testbuild1` aktualisiert.

### Weiterhin explizit nicht implementiert
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

# Aktuelles Gate
`DF-04E · TESTBUILD 1 – DEVICE TEST REQUIRED`

Vor PASS/FROZEN muss auf realem iPhone/iPad/Safari gegen den Contract bestätigt werden:
1. DF-04A-Basisvergleich, DF-04B-Overlay/Blend, DF-04C-Alignment und DF-04D-RGBA-Difference funktionieren unverändert weiter.
2. Mit denselben geladenen Bildern kann ohne erneutes Laden in den klar erkennbaren `Silhouette`-Modus gewechselt werden.
3. Farb-, Textur- und Beleuchtungsunterschiede dominieren die Silhouettenansicht nicht.
4. Gemeinsame Source-/Result-Silhouette ist klar als Überlappung erkennbar.
5. Source-only-Bereiche sind eindeutig erkennbar.
6. Result-only-Bereiche sind eindeutig erkennbar und von Source-only unterscheidbar.
7. Änderung von Result-X aktualisiert die Silhouette Difference entsprechend dem bestehenden DF-04C-Alignment.
8. Änderung von Result-Y aktualisiert sie entsprechend.
9. Änderung der uniformen Result-Scale aktualisiert sie entsprechend.
10. `Reset Alignment` stellt auch für die Silhouette Difference den neutralen DF-04B-Zustand wieder her.
11. Transparente Hintergründe und Alpha-Kanten werden ohne Darstellungsfehler verarbeitet.
12. Wechsel zwischen Silhouette, Difference, Overlay und Basisvergleich erhält Bilder und Alignment-Zustand.
13. Die Silhouettenansicht ist auf iPhone/iPad/Safari sinnvoll nutzbar.
14. Keine ausgeschlossene Threshold-, Tolerance-, Scoring-, Auto-Alignment-, KI-, Persistenz- oder Atlas-Funktion wurde vorgezogen.

# Nächster zulässiger Schritt
Ausschließlich `DF-04E · TESTBUILD 1` auf realem Zielgerät testen und Evidenz gegen den Contract sammeln. Noch kein Folgeblock und kein weiterer Funktionsausbau.
