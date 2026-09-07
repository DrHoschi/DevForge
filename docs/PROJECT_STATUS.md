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
- Aktuelles Gate: `DF-04D · TESTBUILD 1 – DEVICE TEST REQUIRED`

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
`DF-04D · TESTBUILD 1 – DEVICE TEST REQUIRED`

Vor PASS/FROZEN muss auf realem iPhone/iPad/Safari gegen den Contract bestätigt werden:
1. DF-04A-Basisvergleich, DF-04B-Overlay/Blend und DF-04C-Alignment funktionieren unverändert weiter.
2. Mit zwei geladenen Bildern kann in den klar erkennbaren `Difference`-Modus gewechselt werden.
3. Difference verwendet dieselben geladenen Bilder ohne erneutes Laden.
4. Identische bzw. deckungsgleich gleiche Bereiche erscheinen dunkel/niedrig intensiv.
5. Sichtbar abweichende Bereiche erscheinen heller/höher intensiv.
6. Änderung von Result-X beeinflusst die Difference entsprechend dem bestehenden DF-04C-Alignment.
7. Änderung von Result-Y beeinflusst die Difference entsprechend.
8. Änderung der uniformen Result-Scale beeinflusst die Difference entsprechend.
9. `Reset Alignment` stellt auch in der Difference den neutralen Zustand wieder her.
10. Transparente Bereiche werden fehlerfrei verarbeitet und Alpha-Unterschiede bleiben als Difference sichtbar.
11. Rückkehr zu Overlay oder Basisvergleich erhält Bilder und Alignment-Zustand.
12. Difference View ist auf iPhone/iPad/Safari sinnvoll nutzbar.
13. Keine ausgeschlossene Auto-Alignment-, Scoring-, Threshold-, Persistenz-, KI- oder Atlas-Funktion wurde vorgezogen.

# Nächster zulässiger Schritt
Ausschließlich `DF-04D · TESTBUILD 1` auf realem Zielgerät testen und Evidenz gegen den Contract sammeln. Noch kein Folgeblock und kein weiterer Funktionsausbau.
