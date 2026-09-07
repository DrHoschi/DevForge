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
- Aktuelles Gate: `DF-04B – Completion / Freeze Gate`

# DF-02F – bekannte Generation-Handoff-Grenze
Die reproduzierbare Pose-Auswahl innerhalb DevForge ist nicht mehr der Hauptengpass. Externe Bildgenerierung übernimmt selbst explizite Pose-/Skeleton-Kontrolle nicht deterministisch genug für die benötigte Frame-genaue Character-Animation. Diese Grenze blockiert den unabhängigen Review-Ausbau nicht.

# DF-04 – Asset Review Foundation

## DF-04A – Source / Result Compare View – PASS / FROZEN
DF-04A bleibt autoritativ für zwei getrennte lokale Bildslots, die Source-/Result-Rollen, unabhängiges Ersetzen, proportionale vollständige Darstellung und die responsive Basisvergleichsansicht.

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
- Rückkehr zum Basisvergleich ohne Verlust der geladenen Slots;
- responsive Bedienung für schmale Viewports;
- Tool-Cache-Busting auf `df04b-testbuild1`.

### DF-04B Gerätetest – PASS
Reale iPhone-/Safari-Evidenz vom 2026-09-07 bestätigt:
- sichtbare Build-Kennung `DF-04B · TESTBUILD 1`;
- DF-04A-Basisvergleich auf schmalem Viewport weiterhin nutzbar;
- Source und Result wurden geladen und blieben beim Wechsel in den Overlay-Modus erhalten;
- beide Bilder erscheinen gleichzeitig in derselben Overlay-Vergleichsfläche;
- bei 0 % Result-Opacity ist ausschließlich Source / Control sichtbar;
- bei 50 % sind Source / Control und Result gleichzeitig überblendet sichtbar und Pose-/Silhouettenabweichungen unmittelbar vergleichbar;
- bei 100 % Result-Opacity ist ausschließlich Result sichtbar;
- der Blend-Regler ist auf iPhone/Safari über den vollständigen Bereich 0–100 % bedienbar;
- die gemeinsame Vergleichsfläche bleibt bei den getesteten Blend-Werten stabil;
- beide Layer bleiben proportional und ohne sichtbares Stretching dargestellt;
- nach Rückkehr zu `Basisvergleich` sind Source und Result weiterhin geladen;
- keine ausgeschlossene Difference-/Alignment-/Scoring-/Persistenz-/Atlas-Funktion wurde sichtbar vorgezogen.

Gerätetest-Ergebnis: `DF-04B · TESTBUILD 1 – PASS / 0 BLOCKER`.

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
`DF-04B – Completion / Freeze Gate`

Dieses Gate darf keine neue Funktion hinzufügen. Es regressiert ausschließlich:
- den verbindlichen DF-04B-Contract;
- den Branch-Diff gegen die DF-04B-Baseline;
- die dokumentierte reale Geräte-Evidenz;
- die unveränderte DF-04A-Basisfunktion;
- die Nicht-Ziele von DF-04B.

Nur bei `PASS / 0 BLOCKER` wird DF-04B anschließend als Ganzes eingefroren.

# Nächster zulässiger Schritt
`DF-04B – Completion / Freeze Gate` durchführen. Noch kein DF-04C und kein weiterer Funktionsausbau.
