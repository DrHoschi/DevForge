# DevForge – Project Status

Stand: 2026-09-07

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-04d-difference-view-foundation`
- DF-04D Baseline: `99c2e9e09733f4f5c7b989e1123127c305c312d8`
- DF-04D Contract: `docs/DF-04D_DIFFERENCE_VIEW_FOUNDATION_CONTRACT.md`
- Eingefrorener Review-Stand: `DF-04C – PASS / 0 BLOCKER / FROZEN`
- Aktueller Entwicklungsblock: `DF-04D – Difference View Foundation`
- Aktueller Status: `DF-04D · TESTBUILD 1 – PASS / 0 BLOCKER`
- Nächstes Gate: `DF-04D – Completion / Freeze Gate`

# DF-04 – Asset Review Foundation

## DF-04A – Source / Result Compare View – PASS / FROZEN
Autoritativ für zwei getrennte lokale Bildslots, feste Source-/Result-Rollen, unabhängiges Ersetzen, proportionale vollständige Darstellung und responsive Basisvergleichsansicht.

## DF-04B – Overlay / Onion-Skin Compare Foundation – PASS / FROZEN
Autoritativ für den zusätzlichen Overlay-/Onion-Skin-Modus auf denselben geladenen Bildern, gemeinsame Vergleichsfläche, Source als Basis-Layer, Result als Overlay-Layer, identische neutrale Fit-/Center-Regel und manuellen 0–100-%-Blend-Regler.

## DF-04C – Manual Alignment Foundation – PASS / FROZEN
Autoritativ für die manuelle Ausrichtung ausschließlich des Result-Layers über X, Y und uniforme Scale sowie `Reset Alignment` auf den neutralen DF-04B-Zustand. Source bleibt unbeweglich. Alignment bleibt temporärer Review-Zustand.

Realer iPhone-/Safari-Gerätetest und Completion-/Freeze-Gate: `PASS / 0 BLOCKER / FROZEN`.

## DF-04D – Difference View Foundation
Contract:
`docs/DF-04D_DIFFERENCE_VIEW_FOUNDATION_CONTRACT.md`

### TESTBUILD 1 implementiert
Auf dem separaten Branch `df-04d-difference-view-foundation` wurde ausschließlich der vertraglich freigegebene Difference-Ausbau ergänzt:
- sichtbare Build-Kennung `DF-04D · TESTBUILD 1`;
- bestehender DF-04A-Basisvergleich bleibt erhalten;
- bestehender DF-04B-Overlay-/Onion-Skin-Modus und Blend-Regler bleiben erhalten;
- bestehendes DF-04C-X/Y/Scale-Alignment und `Reset Alignment` bleiben unverändert Eigentum von DF-04C;
- zusätzlicher klarer Ansichtsmodus `Difference`;
- Difference verwendet dieselben bereits geladenen Source-/Result-Bilder, ohne neue Bildslots;
- Source und Result werden deterministisch auf dieselbe responsive Review-Rasterfläche mit derselben Contain-/Center-Regel gerendert;
- Result wird für die Difference ausschließlich mit dem aktuellen DF-04C-X/Y/Scale-Zustand transformiert;
- pixelweise absolute RGBA-Kanalabweichung wird deterministisch berechnet;
- aus der RGBA-Abweichung wird ausschließlich eine monotone Graustufenintensität gebildet: niedrige/keine Abweichung dunkel, stärkere Abweichung heller;
- Alpha ist Bestandteil der Differenzberechnung;
- Alignment-Änderungen und `Reset Alignment` stoßen eine aktualisierte Difference-Berechnung an;
- Difference-Raster reagiert auf Viewport-Resize;
- Rückkehr zu Basisvergleich oder Overlay verwendet weiterhin dieselben geladenen Bilder und denselben Alignment-Zustand;
- Tool-Cache-Busting wurde auf `df04d-testbuild1` aktualisiert.

Technische Review-Grenze des Testbuilds:
- gemeinsame Canvas-Rasterfläche entspricht der sichtbaren Difference-Stage;
- Rendering berücksichtigt `devicePixelRatio` bis maximal Faktor 2;
- keine semantische Bewertung oder numerische Kennzahl wird aus den Pixeldifferenzen erzeugt.

### DF-04D Gerätetest – PASS / 0 BLOCKER
Reale iPhone-/Safari-Evidenz vom 2026-09-07 bestätigt:
- DF-04A-Basisvergleich, DF-04B-Overlay/Blend und DF-04C-Alignment bleiben erreichbar und funktionsfähig;
- mit denselben zwei geladenen Bildern kann ohne erneutes Laden in den klar erkennbaren `Difference`-Modus gewechselt werden;
- die getesteten Source-/Result-Bilder zeigen unterschiedliche Posen desselben Character-Designs und erzeugen räumlich klar erkennbare Difference-Bereiche;
- geringe bzw. deckungsgleichere Abweichungen erscheinen dunkel/niedrig intensiv, stärkere Abweichungen heller/höher intensiv;
- transparente Bildbereiche werden ohne Darstellungsfehler verarbeitet; Alpha bleibt Bestandteil der Difference;
- ein veränderter DF-04C-Alignment-Zustand X = -53 px, Y = 47 px, Scale = 110 % wurde im Overlay gesetzt und anschließend in der Difference View sichtbar berücksichtigt;
- damit wurden X-, Y- und uniforme Scale-Änderungen in Kombination gegen die Difference-Darstellung regressiert;
- `Reset Alignment` stellt X = 0 px, Y = 0 px und Scale = 100 % wieder her und setzt die Difference entsprechend auf den neutralen DF-04B-Zustand zurück;
- der Wechsel `Difference → Overlay → Basisvergleich` erhält beide geladenen Bilder;
- der Alignment-Zustand bleibt beim normalen Moduswechsel erhalten, sofern nicht ausdrücklich `Reset Alignment` ausgelöst wird;
- Difference View und Moduswechsel sind auf dem getesteten iPhone/Safari sinnvoll bedienbar;
- keine ausgeschlossene Auto-Alignment-, Scoring-, Threshold-, Persistenz-, KI- oder Atlas-Funktion wurde vorgezogen.

Gerätetest-Ergebnis: `DF-04D · TESTBUILD 1 – PASS / 0 BLOCKER`.

### Weiterhin explizit nicht implementiert
- automatische Registrierung / Auto-Alignment / Best-Fit;
- Rotation, Perspective, Warp oder Skew;
- zusätzliche Difference-Alignment-Werkzeuge;
- Threshold-/Tolerance-Regler;
- Heatmap-Farbpaletten oder mehrere Difference-Modi;
- Difference-Prozentwert oder numerischer Score;
- Bounding-Box-/Flächenmessung der Differenz;
- Pose-/Skeleton-Scoring;
- KI-Auswertung oder automatische Fehlerklassifizierung;
- automatische PASS/FAIL-Entscheidung;
- Persistenz / Asset Library / gespeicherte Difference-Profile;
- Review-Notizen / Approve / Reject;
- Atlas-Funktionen;
- Änderungen am DF-02F-Generation-Handoff.

# Aktuelles Gate
`DF-04D · TESTBUILD 1 – PASS / 0 BLOCKER`

Alle 13 vertraglichen Geräte-PASS-Kriterien sind durch Implementierung plus reale iPhone-/Safari-Evidenz erfüllt. DF-04D ist damit geräteseitig bestanden, aber noch nicht eingefroren.

# Nächster zulässiger Schritt
Ausschließlich `DF-04D – Completion / Freeze Gate`: verbindlichen Contract, vollständigen Branch-Diff gegen `99c2e9e09733f4f5c7b989e1123127c305c312d8`, die eingefrorenen DF-04A-/DF-04B-/DF-04C-Regressionsgrenzen und die reale Geräte-Evidenz gemeinsam regressieren. Erst bei `PASS / 0 BLOCKER` darf DF-04D als `FROZEN` markiert werden.

Noch kein Folgeblock und kein weiterer Funktionsausbau.
