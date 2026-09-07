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
- Eingefrorener Review-Stand: `DF-04B – PASS / FROZEN`
- Aktueller abgeschlossener Entwicklungsblock: `DF-04B – Overlay / Onion-Skin Compare Foundation`
- Aktueller Status: `DF-04B – PASS / FROZEN`

# DF-02F – bekannte Generation-Handoff-Grenze
Die reproduzierbare Pose-Auswahl innerhalb DevForge ist nicht mehr der Hauptengpass. Externe Bildgenerierung übernimmt selbst explizite Pose-/Skeleton-Kontrolle nicht deterministisch genug für die benötigte Frame-genaue Character-Animation. Diese Grenze blockiert den unabhängigen Review-Ausbau nicht.

# DF-04 – Asset Review Foundation

## DF-04A – Source / Result Compare View – PASS / FROZEN
DF-04A bleibt autoritativ für zwei getrennte lokale Bildslots, die Source-/Result-Rollen, unabhängiges Ersetzen, proportionale vollständige Darstellung und die responsive Basisvergleichsansicht.

Realer iPhone-/Safari-Gerätetest und Completion-/Freeze-Gate: `PASS / 0 BLOCKER / FROZEN`.

## DF-04B – Overlay / Onion-Skin Compare Foundation – PASS / FROZEN
Contract:
`docs/DF-04B_OVERLAY_ONION_SKIN_COMPARE_CONTRACT.md`

Eingefrorener Umfang:
- sichtbare geprüfte Build-Kennung `DF-04B · TESTBUILD 1`;
- DF-04A-Basisvergleich bleibt als eigener Modus erhalten;
- zusätzlicher Modus `Overlay / Onion-Skin`;
- Source / Control und Result verwenden im Overlay dieselbe gemeinsame Darstellungsfläche;
- identische `object-fit: contain`-/Center-Regel für beide Layer;
- Source als Basis-Layer, Result darüber;
- manueller Blend-/Opacity-Regler von 0 bis 100 % für den Result-Layer;
- Rückkehr zum Basisvergleich ohne Verlust der geladenen Slots;
- responsive Bedienung für schmale Viewports;
- Tool-Cache-Busting auf `df04b-testbuild1`.

### DF-04B Gerätetest – PASS
Reale iPhone-/Safari-Evidenz vom 2026-09-07 bestätigt:
- sichtbare Build-Kennung `DF-04B · TESTBUILD 1`;
- DF-04A-Basisvergleich auf schmalem Viewport weiterhin nutzbar;
- Source und Result bleiben beim Wechsel in den Overlay-Modus geladen;
- beide Bilder erscheinen gleichzeitig in derselben Overlay-Vergleichsfläche;
- 0 % zeigt Source / Control;
- 50 % zeigt beide Layer gemeinsam und macht Pose-/Silhouettenabweichungen sichtbar;
- 100 % zeigt Result;
- der Blend-Regler ist auf iPhone/Safari über den vollständigen Bereich bedienbar;
- gemeinsame Vergleichsfläche bleibt stabil;
- beide Layer bleiben proportional und ohne sichtbares Stretching;
- nach Rückkehr zu `Basisvergleich` sind Source und Result weiterhin geladen;
- keine ausgeschlossene Folgefunktion wurde sichtbar vorgezogen.

Gerätetest-Ergebnis: `DF-04B · TESTBUILD 1 – PASS / 0 BLOCKER`.

### Explizit nicht Teil des eingefrorenen DF-04B-Umfangs
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

# DF-04B – Completion / Freeze Gate – PASS
Regression gemeinsam gegen den verbindlichen DF-04B-Contract, die Baseline `ad2d98dde3ed1e7bc25401780f65d5b40aaec8ab`, den vollständigen Branch-Diff, die DF-04A-Regressionsgrenze und die dokumentierte reale Geräte-Evidenz durchgeführt.

Gate-Ergebnis:
- Branch ist exakt von der reconciliierten DF-04A-Baseline abgeleitet und nicht hinter ihr;
- vor dem Freeze-Dokumentationscommit umfasst der Branch-Diff ausschließlich `tools/source-result-compare/index.html`, `tools/source-result-compare/app.js` und `docs/PROJECT_STATUS.md`;
- die Codeänderungen sind auf den vertraglich freigegebenen Overlay-Modus, gemeinsame Layerfläche, Blend-Regler und Testbuild-Kennung/Cache-Busting begrenzt;
- DF-04A-Laden, Rollen, Basisvergleich und Slot-Erhalt bleiben erhalten und wurden auf dem Zielgerät regressiert;
- alle neun DF-04B-PASS-Kriterien sind durch Implementierung plus reale Geräte-Evidenz erfüllt;
- keine Difference-, Alignment-, Scoring-, Persistenz-, Atlas- oder Generation-Handoff-Funktion wurde vorgezogen;
- im Completion-/Freeze-Gate selbst wurde keine neue Produktfunktion ergänzt.

Ergebnis: `DF-04B – PASS / 0 BLOCKER / FROZEN`.

# Nächster zulässiger Schritt
Kein weiterer DF-04B-Funktionsausbau auf diesem eingefrorenen Stand.

Ein möglicher `DF-04C – Difference / Alignment Foundation` ist nicht automatisch freigegeben. Zuerst muss aus der realen DF-04B-Erfahrung fachlich festgelegt werden, welche Difference-/Alignment-Funktion tatsächlich benötigt wird, und dafür ein eigener enger Contract gegen den eingefrorenen DF-04B-Stand definiert werden. Noch kein DF-04C-Branch und keine DF-04C-Implementierung.
