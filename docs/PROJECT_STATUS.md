# DevForge – Project Status

Stand: 2026-09-07

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-04c-manual-alignment-foundation`
- DF-04C Baseline: `182331260917ec4699741204be3571fe38c51d8b`
- DF-04C Contract: `docs/DF-04C_MANUAL_ALIGNMENT_FOUNDATION_CONTRACT.md`
- Eingefrorener Review-Stand: `DF-04B – PASS / FROZEN`
- Aktueller Entwicklungsblock: `DF-04C – Manual Alignment Foundation`
- Aktuelles Gate: `DF-04C – Completion / Freeze Gate`

# DF-04 – Asset Review Foundation

## DF-04A – Source / Result Compare View – PASS / FROZEN
Autoritativ für zwei getrennte lokale Bildslots, feste Source-/Result-Rollen, unabhängiges Ersetzen, proportionale vollständige Darstellung und responsive Basisvergleichsansicht.

## DF-04B – Overlay / Onion-Skin Compare Foundation – PASS / FROZEN
Autoritativ für den zusätzlichen Overlay-/Onion-Skin-Modus auf denselben geladenen Bildern, gemeinsame Vergleichsfläche, Source als Basis-Layer, Result als Overlay-Layer, identische neutrale Fit-/Center-Regel und manuellen 0–100-%-Blend-Regler.

Realer iPhone-/Safari-Gerätetest und Completion-/Freeze-Gate: `PASS / 0 BLOCKER / FROZEN`.

## DF-04C – Manual Alignment Foundation
Contract:
`docs/DF-04C_MANUAL_ALIGNMENT_FOUNDATION_CONTRACT.md`

### TESTBUILD 1 implementiert
Auf dem separaten Branch `df-04c-manual-alignment-foundation` wurde ausschließlich der vertraglich freigegebene manuelle Alignment-Ausbau ergänzt:
- sichtbare Build-Kennung `DF-04C · TESTBUILD 1`;
- bestehender DF-04A-Basisvergleich unverändert als eigener Modus;
- bestehender DF-04B-Overlay-/Onion-Skin-Modus bleibt erhalten;
- Source / Control bleibt im Overlay unbeweglich;
- ausschließlich Result erhält manuelle Translation X;
- ausschließlich Result erhält manuelle Translation Y;
- ausschließlich Result erhält uniforme proportionale Skalierung;
- aktuelle X-, Y- und Scale-Werte werden sichtbar angezeigt;
- `Reset Alignment` stellt X = 0 px, Y = 0 px und Scale = 100 % wieder her;
- bestehender DF-04B-Blend-Regler bleibt parallel funktionsfähig;
- Alignment wird nur als temporärer Seitenzustand gehalten und nicht persistiert;
- responsive/mobile Controls für schmale Viewports;
- Tool-Cache-Busting auf `df04c-testbuild1` aktualisiert.

Testbuild-Grenzen:
- X: -200 bis +200 px;
- Y: -200 bis +200 px;
- Scale: 50 bis 150 %;
- neutraler Zustand: X = 0, Y = 0, Scale = 100 %.

### DF-04C Gerätetest – PASS
Reale iPhone-/Safari-Evidenz vom 2026-09-07 bestätigt:
- DF-04A-Basisvergleich und DF-04B-Overlay bleiben erreichbar und funktionsfähig;
- Source / Control bleibt bei Alignment-Änderungen unbewegt;
- X verschiebt ausschließlich Result horizontal;
- Y verschiebt ausschließlich Result vertikal;
- Scale skaliert ausschließlich Result proportional;
- X, Y und Scale funktionieren kombiniert;
- sichtbare getestete Kombinationen umfassten unter anderem X = -70 px, Y = 63 px, Scale = 100 % sowie X = -70 px, Y = 63 px, Scale = 135 %;
- Blend bleibt bei verändertem Alignment funktionsfähig;
- 100 % Result-Blend wurde bei verändertem Alignment bestätigt;
- 0 % Result-Blend wurde bei verändertem Alignment bestätigt und zeigt ausschließlich Source / Control;
- `Reset Alignment` stellt den neutralen Zustand X = 0 px, Y = 0 px, Scale = 100 % wieder her;
- Rückkehr zum Basisvergleich erhält die geladenen Source-/Result-Bilder;
- Controls sind auf dem getesteten iPhone/Safari sinnvoll bedienbar;
- ein Result-Bild mit transparentem Hintergrund funktioniert im Overlay korrekt und stellt keinen DF-04C-Blocker dar;
- keine ausgeschlossene Difference-, Auto-Alignment-, Scoring-, Persistenz- oder Atlas-Funktion wurde vorgezogen.

Gerätetest-Ergebnis: `DF-04C · TESTBUILD 1 – PASS / 0 BLOCKER`.

### Weiterhin explizit nicht implementiert
- Rotation;
- Perspective / Warp / Skew;
- nicht-uniforme Skalierung;
- Crop-Werkzeuge;
- automatische Registrierung oder Best-Fit;
- Feature-/Landmark-Erkennung;
- Difference View / Pixel-Difference / Heatmap;
- Difference- oder Pose-Scoring;
- KI-Auswertung oder automatische PASS/FAIL-Entscheidung;
- synchrones Pan/Zoom;
- Persistenz / Asset Library / gespeicherte Alignment-Profile;
- Approve/Reject / Review-Notizen;
- Atlas-Funktionen;
- Änderungen am DF-02F-Generation-Handoff.

# Aktuelles Gate
`DF-04C – Completion / Freeze Gate`

Dieses Gate darf keine neue Funktion hinzufügen. Es regressiert ausschließlich:
- den verbindlichen DF-04C-Contract;
- den vollständigen Branch-Diff gegen die DF-04C-Baseline;
- die dokumentierte reale Geräte-Evidenz;
- die unveränderte DF-04A-/DF-04B-Regressionsgrenze;
- die Nicht-Ziele von DF-04C.

Nur bei `PASS / 0 BLOCKER` wird DF-04C anschließend als Ganzes eingefroren.

# Nächster zulässiger Schritt
`DF-04C – Completion / Freeze Gate` durchführen. Noch kein DF-04D und kein weiterer Funktionsausbau.
