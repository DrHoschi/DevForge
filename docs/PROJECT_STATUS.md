# DevForge – Project Status

Stand: 2026-09-08

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Dokumentations-/Freeze-Branch: `df-04e-silhouette-difference-foundation`
- Eingefrorener Produktstand: `DF-04E – PASS / 0 BLOCKER / FROZEN`
- Eingefrorener DF-04E-Produkt-Head: `49ff536b6070072c94e340e61cff7b37457a5f91`
- DF-04F Contract: `docs/DF-04F_SILHOUETTE_GEOMETRY_GUIDE_FOUNDATION_CONTRACT.md`
- Aktuelles Gate: `DF-04F Contract / Roadmap Reconciliation`

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

Realer iPhone-/Safari-Gerätetest und Completion-/Freeze-Gate: `PASS / 0 BLOCKER / FROZEN`.

Contract:
`docs/DF-04E_SILHOUETTE_DIFFERENCE_FOUNDATION_CONTRACT.md`

## DF-04F – Silhouette Geometry Guide Foundation – CONTRACT DEFINED
Contract:
`docs/DF-04F_SILHOUETTE_GEOMETRY_GUIDE_FOUNDATION_CONTRACT.md`

### Fachlicher Bedarf aus realer DF-04E-Erfahrung
DF-04E macht die Silhouettenabweichung bereits zuverlässig sichtbar. Der nächste kleine Review-Bedarf ist deshalb nicht mehr ein weiterer Difference-Modus, sondern eine einfache geometrische Orientierung für das weiterhin manuelle DF-04C-Alignment: Wo liegen Source- und Result-Silhouette auf der gemeinsamen Review-Fläche und wie groß ist ihre jeweilige Ausdehnung?

### Verbindlicher enger Scope
- achsenparallele Bounding Box der gerenderten Source-Silhouette;
- achsenparallele Bounding Box der gerenderten Result-Silhouette unter aktuellem DF-04C-X/Y/Scale;
- geometrischer Mittelpunkt jeder Bounding Box;
- sichtbare und eindeutig unterscheidbare Source-/Result-Boxen und Center-Marker;
- optional genau ein gemeinsamer `Geometry Guides`-Ein-/Aus-Schalter;
- Guides basieren auf derselben eingefrorenen DF-04E-Alpha-Maske mit fester interner Grenze `16 / 255`;
- Result-Box und Result-Center aktualisieren sich bei X/Y/Scale und `Reset Alignment`;
- Source-Guides bleiben bei Result-Alignment unverändert;
- keine Änderung an Bildern, Alignment oder bestehenden Modi;
- responsive/touch-taugliche iPhone/iPad/Safari-Darstellung;
- sichtbare DF-04F-Build-Kennung und Cache-Busting erst im später freigegebenen Implementierungsblock.

### Explizit nicht Teil von DF-04F
- automatische Bewegung von Result;
- Auto-Alignment / Best-Fit / automatische Center-Ausrichtung;
- automatische oder neue Scale-Logik;
- Rotation / Perspective / Warp / Skew;
- zusätzliche Alignment-Werkzeuge;
- benutzerveränderbarer Alpha-Threshold oder Tolerance-Regler;
- numerische Center-, Breiten-, Höhen-, Flächen-, Pixel-, Prozent-, IoU- oder Overlap-Metrik;
- Difference-, Silhouette- oder Pose-Scoring;
- automatische PASS/FAIL-Entscheidung;
- KI-Auswertung oder Fehlerklassifizierung;
- Persistenz / Asset Library;
- Review-Notizen / Approve / Reject;
- Atlas-Funktionen;
- Änderungen am DF-02F-Generation-Handoff.

# Aktuelles Gate
`DF-04F Contract / Roadmap Reconciliation`

Dieses Gate ist ausschließlich dokumentarisch. Es regressiert:
- den eingefrorenen DF-04E-Produkt-Head `49ff536b6070072c94e340e61cff7b37457a5f91`;
- den neuen DF-04F-Contract;
- die ROADMAP-Grenze;
- die unveränderten DF-04A/B/C/D/E-Verträge;
- die Sicherstellung, dass kein DF-04F-Branch angelegt und keine Produktlogik/UI/JavaScript verändert wurde.

# Nächster zulässiger Schritt
Ausschließlich das `DF-04F Contract / Roadmap Reconciliation` Gate gegen den vollständigen Dokumentations-Diff seit `49ff536b6070072c94e340e61cff7b37457a5f91` prüfen.

Nur bei `PASS / 0 BLOCKER` darf anschließend ein separater DF-04F-Entwicklungsbranch exakt von der dann festgelegten reconciliierten Dokumentationsbaseline erstellt werden.

Noch kein DF-04F-Branch und keine DF-04F-Implementierung.
