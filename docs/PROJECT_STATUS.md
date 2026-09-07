# DevForge – Project Status

Stand: 2026-09-07

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Dokumentationsbranch: `df-04c-manual-alignment-foundation`
- Eingefrorener Produktstand: `DF-04C – PASS / 0 BLOCKER / FROZEN`
- Eingefrorener DF-04C-Head vor DF-04D-Dokumentation: `c6c624065c8c7a3390e3ff22f49742d9554bbd27`
- DF-04D Contract: `docs/DF-04D_DIFFERENCE_VIEW_FOUNDATION_CONTRACT.md`
- Aktuelles Gate: `DF-04D Contract / Roadmap Reconciliation`

# DF-04 – Asset Review Foundation

## DF-04A – Source / Result Compare View – PASS / FROZEN
Autoritativ für zwei getrennte lokale Bildslots, feste Source-/Result-Rollen, unabhängiges Ersetzen, proportionale vollständige Darstellung und responsive Basisvergleichsansicht.

## DF-04B – Overlay / Onion-Skin Compare Foundation – PASS / FROZEN
Autoritativ für den zusätzlichen Overlay-/Onion-Skin-Modus auf denselben geladenen Bildern, gemeinsame Vergleichsfläche, Source als Basis-Layer, Result als Overlay-Layer, identische neutrale Fit-/Center-Regel und manuellen 0–100-%-Blend-Regler.

## DF-04C – Manual Alignment Foundation – PASS / FROZEN
Autoritativ für die manuelle Ausrichtung ausschließlich des Result-Layers über X, Y und uniforme Scale sowie `Reset Alignment` auf den neutralen DF-04B-Zustand. Source bleibt unbeweglich. Alignment bleibt temporärer Review-Zustand.

Realer iPhone-/Safari-Gerätetest und Completion-/Freeze-Gate: `PASS / 0 BLOCKER / FROZEN`.

Contract:
`docs/DF-04C_MANUAL_ALIGNMENT_FOUNDATION_CONTRACT.md`

## DF-04D – Difference View Foundation – CONTRACT DEFINED
Contract:
`docs/DF-04D_DIFFERENCE_VIEW_FOUNDATION_CONTRACT.md`

### Fachlicher Zweck
DF-04D soll auf den bereits geladenen und bei Bedarf manuell ausgerichteten Source-/Result-Bildern eine einfache deterministische Difference-Ansicht ergänzen, damit visuelle Abweichungen räumlich klarer erkennbar werden.

### Verbindlicher enger Scope
- zusätzlicher Ansichtsmodus `Difference`;
- keine neuen Bildslots;
- Wiederverwendung derselben Source-/Result-Daten aus DF-04A;
- Source wird nach der eingefrorenen Fit-/Center-Regel gerendert;
- Result wird nach derselben Regel plus aktuellem DF-04C-X/Y/Scale-Alignment gerendert;
- pixelbezogene deterministische RGBA-Abweichung auf gemeinsamer Review-Rasterfläche;
- identische/nahezu identische Bereiche erscheinen dunkel bzw. mit geringer Intensität;
- stärkere Unterschiede erscheinen mit höherer Intensität;
- Alpha-Unterschiede bleiben Teil der Difference;
- Difference aktualisiert sich bei Änderungen des bestehenden DF-04C-Alignments;
- Rückkehr zu Basisvergleich/Overlay verliert weder Bilder noch Alignment;
- responsive iPhone/iPad/Safari-Darstellung;
- sichtbare DF-04D-Build-Kennung und Cache-Busting erst im später freigegebenen Implementierungsblock.

### Explizit nicht Teil von DF-04D
- automatische Registrierung / Auto-Alignment / Best-Fit;
- Rotation, Perspective, Warp, Skew oder zusätzliche Alignment-Werkzeuge;
- Threshold-/Tolerance-Regler;
- mehrere Heatmap-/Difference-Modi;
- numerischer Difference-Score;
- automatische PASS/FAIL-Entscheidung;
- Pose-/Skeleton-Scoring;
- KI-Auswertung oder Fehlerklassifikation;
- Persistenz / Asset Library / gespeicherte Difference-Profile;
- Review-Notizen / Approve / Reject;
- Atlas-Funktionen;
- Änderungen am DF-02F-Generation-Handoff.

# Aktuelles Gate
`DF-04D Contract / Roadmap Reconciliation`

Dieses Gate ist ausschließlich dokumentarisch. Regressiert werden:
- eingefrorener DF-04C-Stand `c6c624065c8c7a3390e3ff22f49742d9554bbd27`;
- neuer DF-04D-Contract;
- ROADMAP-Grenze;
- Sicherstellung, dass keine Produktlogik/UI/JavaScript verändert und kein DF-04D-Branch angelegt wurde.

# Nächster zulässiger Schritt
Zuerst dieses Dokumentationsgate gegen den vollständigen Diff seit dem DF-04C-Freeze prüfen. Nur bei `PASS` darf anschließend ein separater DF-04D-Entwicklungsbranch exakt von der reconciliierten DF-04C-Dokumentationsbaseline angelegt werden.

Noch keine DF-04D-Implementierung.
