# DevForge – Project Status

Stand: 2026-09-07

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-04b-overlay-onion-skin-compare`
- DF-04B Baseline: `ad2d98dde3ed1e7bc25401780f65d5b40aaec8ab`
- DF-04B Contract: `docs/DF-04B_OVERLAY_ONION_SKIN_COMPARE_CONTRACT.md`
- Abgeschlossener DF-02F-Stand: `DF-02F.6R.4`
- Eingefrorener Review-Stand: `DF-04A – PASS / FROZEN`
- Aktueller Entwicklungsblock: `DF-04B – Overlay / Onion-Skin Compare Foundation`
- Aktuelles Gate: `DF-04B · TESTBUILD 1 – DEVICE TEST REQUIRED`

# DF-02F – bekannte Generation-Handoff-Grenze
Die reproduzierbare Pose-Auswahl innerhalb DevForge ist nicht mehr der Hauptengpass. Externe Bildgenerierung übernimmt selbst explizite Pose-/Skeleton-Kontrolle nicht deterministisch genug für die benötigte Frame-genaue Character-Animation. Diese Grenze blockiert den unabhängigen Review-Ausbau nicht.

# DF-04 – Asset Review Foundation

## DF-04A – Source / Result Compare View – PASS / FROZEN
DF-04A bleibt autoritativ für:
- zwei getrennte lokale Bildslots;
- Source / Control links bzw. auf schmalen Geräten oben;
- Result rechts bzw. unten;
- gleichzeitige Sichtbarkeit;
- unabhängiges Ersetzen der Slots;
- proportionale vollständige Darstellung ohne Cropping/Stretching;
- responsive Basisvergleichsansicht.

Realer iPhone-/Safari-Gerätetest und Completion-/Freeze-Gate: `PASS / 0 BLOCKER / FROZEN`.

## DF-04B – Overlay / Onion-Skin Compare Foundation
Contract:
`docs/DF-04B_OVERLAY_ONION_SKIN_COMPARE_CONTRACT.md`

### TESTBUILD 1 implementiert
Auf dem separaten Branch `df-04b-overlay-onion-skin-compare` wurde ausschließlich der vertraglich freigegebene manuelle Overlay-Ausbau ergänzt:
- sichtbare Build-Kennung `DF-04B · TESTBUILD 1`;
- DF-04A-Basisvergleich bleibt als eigener Modus erhalten;
- zusätzlicher Modus `Overlay / Onion-Skin`;
- Source / Control und Result verwenden im Overlay dieselbe gemeinsame Darstellungsfläche;
- identische `object-fit: contain`-/Center-Regel für beide Layer;
- Source liegt als Basis-Layer, Result darüber;
- manueller Blend-/Opacity-Regler von 0 bis 100 % für den Result-Layer;
- Rückkehr zum Basisvergleich ohne bewusstes Leeren/Ersetzen der geladenen Slots;
- Overlay wird erst als bereit markiert, wenn beide Slots geladen sind;
- responsive Bedienung für schmale Viewports;
- Tool-Cache-Busting auf `df04b-testbuild1` aktualisiert.

### Weiterhin explizit nicht implementiert
- Difference View / Pixel-Difference / Heatmap;
- automatische Registrierung oder Alignment;
- manuelle Transform-/Alignment-Werkzeuge;
- synchrones Pan/Zoom;
- Pose-/Skeleton-Scoring;
- KI-Auswertung oder automatische PASS/FAIL-Entscheidung;
- Persistenz / Asset Library;
- Approve/Reject / Review-Notizen;
- technische Alpha-/Bounds-/Scale-Prüfung;
- Atlas-Funktionen;
- Änderungen am DF-02F-Generation-Handoff.

# Aktuelles Gate
`DF-04B · TESTBUILD 1 – DEVICE TEST REQUIRED`

Vor PASS/FROZEN muss auf realem iPhone/iPad/Safari mindestens bestätigt werden:
1. DF-04A-Basisvergleich funktioniert unverändert.
2. Zwei Bilder bleiben beim Wechsel in den Overlay-Modus geladen.
3. Beide erscheinen gleichzeitig in derselben Overlay-Fläche.
4. Beide Layer bleiben proportional und ungestreckt.
5. Blend-Regler verändert nur die Result-Deckkraft und funktioniert über den gesamten Bereich 0–100 %.
6. Rückkehr zum Basisvergleich verliert keine geladenen Bilder.
7. Bedienung auf schmalem Viewport bleibt nutzbar.
8. Keine ausgeschlossene DF-04C-/Scoring-/Persistenz-/Atlas-Funktion ist sichtbar vorgezogen.

# Nächster zulässiger Schritt
Ausschließlich `DF-04B · TESTBUILD 1` auf realem Zielgerät testen und Evidenz gegen den Contract sammeln. Noch kein DF-04C und kein weiterer Funktionsausbau.
