# DevForge – Project Status

Stand: 2026-09-07

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Dokumentations-/Freeze-Branch: `df-04d-difference-view-foundation`
- Eingefrorener Produktstand: `DF-04D – PASS / 0 BLOCKER / FROZEN`
- Eingefrorener DF-04D-Produkt-Head: `89b9b8e214ed4463a0e8150cb5a4563351c7c55b`
- DF-04E Contract: `docs/DF-04E_SILHOUETTE_DIFFERENCE_FOUNDATION_CONTRACT.md`
- Aktuelles Gate: `DF-04E Contract / Roadmap Reconciliation`

# DF-04 – Asset Review Foundation

## DF-04A – Source / Result Compare View – PASS / FROZEN
Autoritativ für zwei getrennte lokale Bildslots, feste Source-/Result-Rollen, unabhängiges Ersetzen, proportionale vollständige Darstellung und responsive Basisvergleichsansicht.

## DF-04B – Overlay / Onion-Skin Compare Foundation – PASS / FROZEN
Autoritativ für gemeinsamen Overlay-Vergleich, Source als Basis-Layer, Result als Overlay-Layer und manuellen 0–100-%-Blend-Regler.

## DF-04C – Manual Alignment Foundation – PASS / FROZEN
Autoritativ für manuelle Result-Translation X/Y, uniforme Scale, sichtbare Werte, `Reset Alignment` und temporären nicht persistierten Alignment-Zustand. Source bleibt unbeweglich.

## DF-04D – Difference View Foundation – PASS / FROZEN
Autoritativ für die deterministische pixelweise absolute RGBA-Difference auf gemeinsamer Review-Rasterfläche unter Verwendung desselben DF-04C-Alignments. Geringe Abweichung erscheint dunkel, stärkere heller; Alpha ist Bestandteil der Difference. Kein Score und keine automatische Bewertung.

Realer iPhone-/Safari-Gerätetest und Completion-/Freeze-Gate: `PASS / 0 BLOCKER / FROZEN`.

Contract:
`docs/DF-04D_DIFFERENCE_VIEW_FOUNDATION_CONTRACT.md`

## DF-04E – Silhouette Difference Foundation – CONTRACT DEFINED
Contract:
`docs/DF-04E_SILHOUETTE_DIFFERENCE_FOUNDATION_CONTRACT.md`

### Fachlicher Bedarf aus realer DF-04D-Erfahrung
Die eingefrorene DF-04D-RGBA-Difference zeigt Abweichungen zuverlässig, mischt dabei aber Kontur-/Formabweichungen mit Farbe, Material, Beleuchtung und Textur. Als nächster kleiner Review-Schritt wird deshalb ausschließlich eine zusätzliche Silhouetten-/Alpha-Masken-Prüfung definiert.

### Verbindlicher enger Scope
- zusätzlicher Modus `Silhouette` bzw. `Silhouette Difference`;
- dieselben geladenen Source-/Result-Bilder, keine neuen Bildslots;
- dieselbe gemeinsame Review-Rasterfläche;
- Source nach bestehender Fit-/Center-Regel;
- Result nach derselben Regel plus aktuellem DF-04C-X/Y/Scale-Alignment;
- Ableitung je einer deterministischen Vordergrund-/Hintergrund-Maske ausschließlich aus Alpha;
- RGB-Farbe, Textur, Licht und Material beeinflussen die Silhouettenmaske nicht;
- gemeinsame Überlappung, Source-only und Result-only werden visuell eindeutig unterschieden;
- X/Y/Scale und `Reset Alignment` aktualisieren die Silhouettenansicht über den bestehenden DF-04C-Zustand;
- Wechsel zu Basisvergleich, Overlay und Difference erhält Bilder und Alignment;
- responsive/touch-taugliche iPhone/iPad/Safari-Darstellung;
- sichtbare DF-04E-Build-Kennung und Cache-Busting erst im später freigegebenen Implementierungsblock.

### Explizit nicht Teil von DF-04E
- Auto-Alignment / Best-Fit;
- Rotation / Perspective / Warp / Skew;
- zusätzliche Alignment-Werkzeuge;
- benutzerveränderbarer Alpha-Threshold;
- Tolerance-Regler;
- mehrere Masken-/Morphologie-Modi;
- Kontur-, Pixel-, Flächen-, Prozent-, IoU- oder Overlap-Score;
- automatische PASS/FAIL-Entscheidung;
- Pose-/Skeleton-Scoring;
- KI-Auswertung oder Fehlerklassifizierung;
- Persistenz / Asset Library;
- Review-Notizen / Approve / Reject;
- Atlas-Funktionen;
- Änderungen am DF-02F-Generation-Handoff.

# Aktuelles Gate
`DF-04E Contract / Roadmap Reconciliation`

Dieses Gate ist ausschließlich dokumentarisch. Es regressiert:
- den eingefrorenen DF-04D-Produkt-Head `89b9b8e214ed4463a0e8150cb5a4563351c7c55b`;
- den neuen DF-04E-Contract;
- die ROADMAP-Grenze;
- die unveränderten DF-04A/B/C/D-Verträge;
- die Sicherstellung, dass kein DF-04E-Branch angelegt und keine Produktlogik/UI/JavaScript verändert wurde.

# Nächster zulässiger Schritt
Ausschließlich das `DF-04E Contract / Roadmap Reconciliation` Gate gegen den vollständigen Dokumentations-Diff seit `89b9b8e214ed4463a0e8150cb5a4563351c7c55b` prüfen.

Nur bei `PASS / 0 BLOCKER` darf anschließend ein separater DF-04E-Entwicklungsbranch exakt von der dann festgelegten reconciliierten Dokumentationsbaseline erstellt werden.

Noch kein DF-04E-Branch und keine DF-04E-Implementierung.
