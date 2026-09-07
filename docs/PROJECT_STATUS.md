# DevForge – Project Status

Stand: 2026-09-07

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungs-/Freeze-Branch: `df-04d-difference-view-foundation`
- DF-04D Baseline: `99c2e9e09733f4f5c7b989e1123127c305c312d8`
- DF-04D Contract: `docs/DF-04D_DIFFERENCE_VIEW_FOUNDATION_CONTRACT.md`
- Eingefrorener Review-Stand: `DF-04D – PASS / 0 BLOCKER / FROZEN`
- Aktueller abgeschlossener Entwicklungsblock: `DF-04D – Difference View Foundation`

# DF-04 – Asset Review Foundation

## DF-04A – Source / Result Compare View – PASS / FROZEN
Autoritativ für zwei getrennte lokale Bildslots, feste Source-/Result-Rollen, unabhängiges Ersetzen, proportionale vollständige Darstellung und responsive Basisvergleichsansicht.

## DF-04B – Overlay / Onion-Skin Compare Foundation – PASS / FROZEN
Autoritativ für den zusätzlichen Overlay-/Onion-Skin-Modus auf denselben geladenen Bildern, gemeinsame Vergleichsfläche, Source als Basis-Layer, Result als Overlay-Layer, identische neutrale Fit-/Center-Regel und manuellen 0–100-%-Blend-Regler.

## DF-04C – Manual Alignment Foundation – PASS / FROZEN
Autoritativ für die manuelle Ausrichtung ausschließlich des Result-Layers über X, Y und uniforme Scale sowie `Reset Alignment` auf den neutralen DF-04B-Zustand. Source bleibt unbeweglich. Alignment bleibt temporärer Review-Zustand.

## DF-04D – Difference View Foundation – PASS / FROZEN
Contract:
`docs/DF-04D_DIFFERENCE_VIEW_FOUNDATION_CONTRACT.md`

Eingefrorener Umfang:
- sichtbare geprüfte Build-Kennung `DF-04D · TESTBUILD 1`;
- DF-04A-Basisvergleich bleibt unverändert erhalten;
- DF-04B-Overlay-/Onion-Skin-Modus und Blend-Regler bleiben unverändert erhalten;
- DF-04C-X/Y/Scale-Alignment und `Reset Alignment` bleiben unverändert Eigentum von DF-04C;
- zusätzlicher Ansichtsmodus `Difference`;
- Wiederverwendung derselben geladenen Source-/Result-Bilder ohne neue Bildslots;
- gemeinsame responsive Review-Rasterfläche;
- Source nach bestehender Fit-/Center-Regel;
- Result nach derselben Regel plus aktuellem DF-04C-X/Y/Scale-Zustand;
- deterministische pixelweise absolute RGBA-Differenz;
- monotone Graustufenintensität: niedrige/keine Abweichung dunkel, stärkere Abweichung heller;
- Alpha als Bestandteil der Differenzberechnung;
- unmittelbare Aktualisierung bei X/Y/Scale und `Reset Alignment`;
- Erhalt von Bildern und Alignment beim Moduswechsel;
- iPhone/iPad/Safari-taugliche responsive Darstellung;
- Cache-Busting `df04d-testbuild1`.

### DF-04D Gerätetest – PASS / 0 BLOCKER
Reale iPhone-/Safari-Evidenz vom 2026-09-07 bestätigt:
- Basisvergleich, Overlay/Blend und manuelles Alignment funktionieren weiter;
- Difference verwendet dieselben geladenen Bilder ohne erneutes Laden;
- geringe/deckungsgleiche Abweichungen erscheinen dunkel, stärkere Abweichungen heller;
- transparente Bereiche werden fehlerfrei verarbeitet und Alpha-Unterschiede bleiben sichtbar;
- getesteter Alignment-Zustand X = -53 px, Y = 47 px, Scale = 110 % wird in Difference sichtbar berücksichtigt;
- `Reset Alignment` stellt X = 0 px, Y = 0 px und Scale = 100 % wieder her und setzt Difference auf den neutralen Zustand zurück;
- `Difference → Overlay → Basisvergleich` erhält beide geladenen Bilder;
- Bedienung auf iPhone/Safari ist sinnvoll nutzbar;
- keine ausgeschlossene Auto-Alignment-, Scoring-, Threshold-, Persistenz-, KI- oder Atlas-Funktion wurde vorgezogen.

Gerätetest-Ergebnis: `DF-04D · TESTBUILD 1 – PASS / 0 BLOCKER`.

### Explizit nicht Teil des eingefrorenen DF-04D-Umfangs
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

# DF-04D – Completion / Freeze Gate – PASS
Gemeinsame Regression durchgeführt gegen:
- den verbindlichen DF-04D-Contract;
- die reconciliierte DF-04D-Baseline `99c2e9e09733f4f5c7b989e1123127c305c312d8`;
- den vollständigen Branch-Diff bis zum Geräte-PASS-Head `4f0f3dd3153fa5af0ffb956ba63ea6faada7cf0c`;
- die eingefrorenen DF-04A-/DF-04B-/DF-04C-Regressionsgrenzen;
- die vollständige reale iPhone-/Safari-Geräte-Evidenz;
- sämtliche DF-04D-Nicht-Ziele.

Gate-Ergebnis:
- Branch ist exakt von der reconciliierten Baseline abgeleitet und `0 behind`;
- vor dem Freeze-Dokumentationscommit umfasst der vollständige DF-04D-Diff ausschließlich `tools/source-result-compare/index.html`, `tools/source-result-compare/app.js` und `docs/PROJECT_STATUS.md`;
- die Produktänderung bleibt auf die vertraglich definierte Difference View begrenzt;
- DF-04A/B/C wurden auf dem Zielgerät gegen ihre eingefrorenen Grenzen regressiert;
- alle 13 DF-04D-PASS-Kriterien sind durch Implementierung plus reale Geräte-Evidenz erfüllt;
- keine Auto-Alignment-, Scoring-, Threshold-, Persistenz-, KI-, Atlas- oder Generation-Handoff-Funktion wurde vorgezogen;
- im Completion-/Freeze-Gate selbst wurde keine neue Produktfunktion ergänzt.

Ergebnis: `DF-04D – PASS / 0 BLOCKER / FROZEN`.

# Nächster zulässiger Schritt
Kein weiterer DF-04D-Funktionsausbau auf diesem eingefrorenen Stand.

Ein Folgeblock ist noch nicht automatisch freigegeben. Zuerst muss aus der realen DF-04D-Erfahrung fachlich festgelegt werden, welcher eng abgegrenzte Review-Schritt als Nächstes tatsächlich benötigt wird. Bis dahin kein Threshold/Tolerance, kein Scoring und keine zusätzliche Difference-Logik.
