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
- Aktueller Status: `DF-04E · TESTBUILD 1 – PASS / 0 BLOCKER`
- Nächstes Gate: `DF-04E – Completion / Freeze Gate`

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

### DF-04E Gerätetest – PASS / 0 BLOCKER
Reale iPhone-/Safari-Evidenz vom 2026-09-07 bestätigt:
- DF-04A-Basisvergleich, DF-04B-Overlay/Blend, DF-04C-Alignment und DF-04D-RGBA-Difference funktionieren weiterhin;
- `DF-04E · TESTBUILD 1` ist sichtbar;
- mit denselben geladenen Bildern kann ohne erneutes Laden in den `Silhouette`-Modus gewechselt werden;
- RGB-Farbe, Textur, Material und Beleuchtung dominieren die Silhouettenansicht nicht;
- Überlappung ist klar hellgrau erkennbar;
- Source-only ist klar magenta erkennbar;
- Result-only ist klar cyan erkennbar und eindeutig von Source-only unterscheidbar;
- transparente Hintergründe und Alpha-Kanten werden ohne sichtbare Darstellungsfehler verarbeitet;
- Result-X, Result-Y und uniforme Result-Scale wurden auf dem Zielgerät verändert und die Silhouette Difference aktualisierte sich entsprechend;
- `Reset Alignment` wurde getestet und stellte den neutralen DF-04B-Zustand wieder her;
- alle bisherigen Modi und Funktionen bleiben nach den DF-04E-Änderungen erhalten;
- die Silhouettenansicht ist auf dem getesteten iPhone/Safari sinnvoll bedienbar;
- keine ausgeschlossene Threshold-, Tolerance-, Scoring-, Auto-Alignment-, KI-, Persistenz- oder Atlas-Funktion wurde vorgezogen.

Gerätetest-Ergebnis: `DF-04E · TESTBUILD 1 – PASS / 0 BLOCKER`.

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
`DF-04E · TESTBUILD 1 – PASS / 0 BLOCKER`

Alle 14 vertraglichen Geräte-PASS-Kriterien sind durch Implementierung plus reale iPhone-/Safari-Evidenz erfüllt. DF-04E ist damit geräteseitig bestanden, aber noch nicht eingefroren.

# Nächster zulässiger Schritt
Ausschließlich `DF-04E – Completion / Freeze Gate`: verbindlichen DF-04E-Contract, vollständigen Branch-Diff gegen `d22ccfdfe682a33a56ead9fd2db2355fd8734682`, die eingefrorenen DF-04A-/DF-04B-/DF-04C-/DF-04D-Regressionsgrenzen und die reale Geräte-Evidenz gemeinsam regressieren. Erst bei `PASS / 0 BLOCKER` darf DF-04E als `FROZEN` markiert werden.

Noch kein Folgeblock und kein weiterer Funktionsausbau.
