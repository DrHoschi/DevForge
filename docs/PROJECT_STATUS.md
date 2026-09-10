# DevForge – Project Status

Stand: 2026-09-10

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungs-/Freeze-Branch: `df-04f-silhouette-geometry-guide-foundation`
- Eingefrorener Produktstand: `DF-04F – PASS / 0 BLOCKER / FROZEN`
- Reconciliierte DF-04F-Implementierungsbaseline: `1f9badba271bb3a6a055f8ef234164dd9acd39e8`
- DF-04F Contract: `docs/DF-04F_SILHOUETTE_GEOMETRY_GUIDE_FOUNDATION_CONTRACT.md`
- Completion-/Freeze-Gate: `PASS / 0 BLOCKER / FROZEN`

# DF-04 – Asset Review Foundation

## DF-04A – Source / Result Compare View – PASS / FROZEN
Autoritativ für zwei getrennte lokale Bildslots, feste Source-/Result-Rollen, unabhängiges Ersetzen, proportionale vollständige Darstellung und responsive Basisvergleichsansicht.

## DF-04B – Overlay / Onion-Skin Compare Foundation – PASS / FROZEN
Autoritativ für gemeinsamen Overlay-Vergleich, Source als Basis-Layer und Result als Overlay-Layer sowie manuellen 0–100-%-Blend-Regler.

## DF-04C – Manual Alignment Foundation – PASS / FROZEN
Autoritativ für manuelle Result-Translation X/Y, uniforme Scale, sichtbare Werte, `Reset Alignment` und temporären nicht persistierten Alignment-Zustand. Source bleibt unbeweglich.

## DF-04D – Difference View Foundation – PASS / FROZEN
Autoritativ für deterministische pixelweise absolute RGBA-Difference auf gemeinsamer Review-Rasterfläche unter Verwendung desselben DF-04C-Alignments. Kein Score und keine automatische Bewertung.

## DF-04E – Silhouette Difference Foundation – PASS / FROZEN
Autoritativ für deterministische Alpha-/Silhouettenprüfung auf derselben Review-Rasterfläche mit fester interner Alpha-Grenze `16 / 255`. Überlappung, Source-only und Result-only werden visuell unterschieden. DF-04C-X/Y/Scale und `Reset Alignment` gelten unverändert weiter.

## DF-04F – Silhouette Geometry Guide Foundation – PASS / FROZEN
Contract:
`docs/DF-04F_SILHOUETTE_GEOMETRY_GUIDE_FOUNDATION_CONTRACT.md`

Eingefrorener Umfang:
- Source-Bounding-Box aus derselben gerenderten DF-04E-Alpha-Maske;
- Result-Bounding-Box aus derselben Alpha-Maske nach aktuellem DF-04C-X/Y/Scale-Alignment;
- geometrischer Center jeder Bounding Box;
- Source-Guide durchgezogen, Result-Guide gestrichelt;
- genau ein gemeinsamer temporärer Schalter `Geometry Guides` zum Ein-/Ausblenden der Hilfsgeometrie;
- Guide-Schalter verändert weder Bilder noch Alignment-Werte;
- Result-Guides aktualisieren sich bei X, Y, uniformer Scale und `Reset Alignment`;
- Source-Guides bleiben durch Result-Alignment unverändert;
- bei leerer Alpha-Maske kein Guide für die betreffende Seite;
- keine numerischen Geometriewerte oder Scores;
- responsive/touch-taugliche Darstellung;
- getestete sichtbare Build-Kennung bleibt `DF-04F · TESTBUILD 1` mit Cache-Busting `df04f-testbuild1`.

### Reale Geräte-Evidenz
Realer iPhone-/Safari-Test vom 2026-09-10: `PASS / 0 BLOCKER`.

Bestätigt wurden alle 14 Contract-PASS-Kriterien:
- DF-04A/B/C/D/E funktionieren unverändert weiter;
- Source- und Result-Bounding-Box umfassen ihre jeweiligen gerenderten Silhouetten;
- Boxen und Center sind eindeutig unterscheidbar und korrekt positioniert;
- X, Y und uniforme Scale aktualisieren ausschließlich die Result-Geometrie; Source-Guides bleiben unverändert;
- `Reset Alignment` stellt X = 0, Y = 0, Scale = 100 % und neutrale Result-Guides wieder her;
- `Geometry Guides` blendet ausschließlich Boxen/Center ein bzw. aus;
- Moduswechsel erhält Bilder und Alignment;
- iPhone/Safari-Darstellung ist sinnvoll erkennbar und bedienbar;
- keine ausgeschlossene Folgefunktion wurde vorgezogen.

### Completion / Freeze Gate
Regressiert wurden gemeinsam:
- der verbindliche DF-04F-Contract;
- der vollständige Branch-Diff gegen `1f9badba271bb3a6a055f8ef234164dd9acd39e8`;
- die eingefrorenen DF-04A/B/C/D/E-Grenzen;
- die reale Geräte-Evidenz.

Der Branch-Diff vor dem Freeze-Dokumentationscommit stand `4 ahead / 0 behind` und umfasste ausschließlich:
- `tools/source-result-compare/index.html` – vertraglicher DF-04F-UI-Ausbau, sichtbare Build-Kennung und Cache-Busting;
- `tools/source-result-compare/app.js` – vertragliche Bounding-Box-/Center- und Guide-Toggle-Logik;
- `docs/PROJECT_STATUS.md` – Implementierungs- und Geräte-Evidenz.

Regressionsergebnis:
- Implementierung entspricht dem DF-04F-Contract;
- DF-04A/B/C/D/E bleiben funktional und semantisch unverändert erhalten;
- keine automatische Bewegung, kein Auto-Alignment/Best-Fit, keine automatische Center-/Scale-Korrektur, kein neuer Scale-Algorithmus, kein benutzerveränderbarer Threshold/Tolerance, keine Geometriemetrik, kein Score, kein automatisches PASS/FAIL, keine KI, keine Persistenz und keine Atlas-Funktion wurde vorgezogen;
- reale Geräte-Evidenz erfüllt sämtliche PASS-Kriterien;
- `0 BLOCKER`.

Gate-Ergebnis: `DF-04F – PASS / 0 BLOCKER / FROZEN`.

# Aktueller Gate-Status
`DF-04F – PASS / 0 BLOCKER / FROZEN`

DF-04F ist abgeschlossen. Der getestete Produktcode wird im Freeze-Schritt nicht verändert; insbesondere bleibt die sichtbare Geräte-Build-Kennung `DF-04F · TESTBUILD 1` unverändert.

# Nächster zulässiger Schritt
Kein Folgeblock ist automatisch freigegeben.

Ausschließlich aus der realen DF-04F-Erfahrung fachlich entscheiden, welcher kleine Review-Schritt als Nächstes tatsächlich benötigt wird. Erst danach darf ein separater Folgecontract definiert werden.
