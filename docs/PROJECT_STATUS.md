# DevForge – Project Status

Stand: 2026-09-07

## Zweck
DevForge ist eine projektübergreifende webbasierte Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets. Der aktuelle Character-Animationsworkflow dient als erster realer Referenzprozess.

## Repository
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Aktueller Entwicklungsbranch: `df-04a-source-result-compare-view`
- Reconciliierte Baseline: `64110d0bbdc6a78a959497f2a619d809e9038d66`
- DF-04A Contract-Commit: `12e7aa97e263681ac055d394be5f27dd9b48510a`
- Historischer Prompt-Builder-Stand: `DF-02D.3R`
- Historischer Pose-Renderer-Prototyp: `DF-02E.1–E.4`
- Abgeschlossener DF-02F-Stand: `DF-02F.6R.4`
- Aktueller abgeschlossener Entwicklungsblock: `DF-04A – Source / Result Compare View`
- Aktueller Status: `DF-04A – PASS / FROZEN`

# Architekturentscheidung: echte 3D-Animation als Posequelle
Ab DF-02F verwendet DevForge echte geriggte 3D-Animationsquellen. Die Animation liefert die Bewegungsgeometrie. Timeline, Facing, Kamera und Referenzzeitpunkt werden in DevForge kontrolliert.

Für den Generation-Handoff gilt:
- Character Reference definiert Identität und permanentes Design.
- Pose/Geometry Control definiert Körperhaltung und Ansicht.
- Action-Namen wie `WALK` sind Metadaten und dürfen keine alternative generische Körpergeometrie erzeugen.

# DF-02F – 3D Animation Reference Viewer / Generation Bridge
1. `DF-02F.1 – Animated 3D Reference Asset Contract` – PASS
2. `DF-02F.2 – Animated 3D Preview / Runtime Asset Intake` – PASS
3. `DF-02F.3 / F.3R – Animation Timeline / Scrubbing` – PASS
4. `DF-02F.4 / F.4R – Camera & Facing Presets / Semantic Alignment` – PASS
5. `DF-02F.5 – Pose Bookmark / Reference Capture` – PASS
6. `DF-02F.6 – Prompt Builder / Pose Reference Bridge` – implemented, external generation fidelity not proven
7. `DF-02F.6R.1 – Pose Fidelity Contract Reinforcement` – FAIL
8. `DF-02F.6R.2 – Pose-dominant PDF Transfer Contract` – FAIL
9. `DF-02F.6R.3 – Direct Visual Pose Handoff` – implemented, insufficiently deterministic in external generation test
10. `DF-02F.6R.4 – Explicit Pose Geometry Control` – IMPLEMENTED; external generation limit remains

# DF-02F.6R.4 – bekannte Grenze
R.4 verbessert die Explizitheit des Generation-Handoffs, löst aber die zentrale externe Grenze nicht zuverlässig: Die verwendete Bildgenerierung übernimmt selbst explizite Pose-/Skeleton-Kontrolle nicht deterministisch genug für die benötigte Frame-genaue Character-Animation.

Diese Grenze blockiert den unabhängigen Ausbau von DevForge als Review-, Prüf- und Asset-Produktionswerkzeug nicht.

# DF-04 – Asset Review Foundation
DF-04 schafft unabhängige Review-Bausteine, mit denen erzeugte oder bearbeitete Assets gegen autoritative Quellen und Controls geprüft werden können.

## DF-04A – Source / Result Compare View – PASS / FROZEN
Contract:
`docs/DF-04A_SOURCE_RESULT_COMPARE_VIEW_CONTRACT.md`

Implementierter eingefrorener Umfang:
- eigenständiges Tool unter `tools/source-result-compare/`;
- zwei vollständig getrennte lokale Bildinputs;
- `Source / Control` links bzw. auf schmalen Geräten oben;
- `Result` rechts bzw. auf schmalen Geräten unten;
- beide Bilder gleichzeitig sichtbar;
- unabhängiges Ersetzen einer Seite ohne Verlust der anderen;
- proportionaler vollständiger Bild-Fit ohne Cropping oder Stretching;
- stabil begrenzte Vergleichsflächen für unterschiedliche Bildabmessungen und Seitenverhältnisse;
- klare Leerzustände je Slot;
- Dateiname und natürliche Pixelabmessungen rein informativ;
- responsive Ein-Spalten-Darstellung auf schmalen Geräten bei unveränderter Rollenreihenfolge;
- sichtbare Build-Kennung `DF-04A · TESTBUILD 1` für den geprüften Build;
- Cache-Busting für Tool-Build und DevForge-Toolindex.

Explizit nicht Teil des eingefrorenen DF-04A-Umfangs:
- Overlay / Onion-Skin / Difference View / Blend-Slider;
- synchrones Pan/Zoom oder automatische Registrierung/Ausrichtung;
- Pose-/Skeleton-Scoring oder KI-Bewertung;
- automatische PASS/FAIL-Entscheidung;
- Persistenz / Asset Library;
- Review-Notizen / Approve / Reject;
- technische Alpha-/Bounds-/Scale-Prüfung;
- Atlas-Funktionen;
- Änderungen an DF-02F-Generation-Handoff oder Prompt Builder.

## DF-04A Gerätetest – PASS
Reale iPhone-/Safari-Evidenz vom 2026-09-07 bestätigt:
- sichtbare Build-Kennung `DF-04A · TESTBUILD 1`;
- Source / Control und Result separat ladbar;
- beide gleichzeitig sichtbar;
- Source auf schmalem Viewport logisch oben, Result darunter;
- proportionale und vollständige Darstellung ohne erkennbares Cropping oder Stretching;
- unterschiedliche Bildinhalte und Abmessungen zerstören die Vergleichsanordnung nicht;
- Source wurde durch ein drittes Bild (`IMG_4633.jpeg`, 1120 × 1120 px) ersetzt, während das zuvor geladene Result (`54677C4E-64AF-4E01-9B5E-1D7AA9DA71D9.png`, 1243 × 1265 px) unverändert geladen blieb;
- unabhängige Slot-Ersetzung damit praktisch bestätigt;
- keine ausgeschlossene DF-04B-/Scoring-/Persistenz-/Atlas-Funktion sichtbar vorgezogen.

Gerätetest-Ergebnis: `PASS / 0 BLOCKER`.

# DF-04A – Completion / Freeze Gate – PASS
Regression gegen Contract-Commit `12e7aa97e263681ac055d394be5f27dd9b48510a`, Branch-Diff und dokumentierte Geräte-Evidenz durchgeführt.

Gate-Ergebnis:
- Branch basiert weiterhin auf dem freigegebenen DF-04A-Vertrag;
- Implementierungsdiff ist auf den eigenständigen Compare-Baustein, dessen Toolindex-Eintrag/Cache-Busting und Statusdokumentation begrenzt;
- `tools/source-result-compare/app.js` hält Source und Result als getrennte Slots und verändert beim Laden nur den jeweils adressierten Slot;
- `tools/source-result-compare/index.html` erzwingt proportionale vollständige Darstellung und die vertragliche responsive Rollenreihenfolge;
- reale Geräte-Evidenz erfüllt die Abnahmekriterien;
- keine ausgeschlossene Folgefunktion wurde vorgezogen;
- keine neue Funktion wurde im Freeze-Gate ergänzt.

Ergebnis: `DF-04A – PASS / 0 BLOCKER / FROZEN`.

# Nächster zulässiger Schritt
Kein weiterer DF-04A-Funktionsausbau auf diesem eingefrorenen Stand.

Vor einem Folgeblock muss dessen eigener Vertrag und seine Grenze gegen den eingefrorenen DF-04A-Stand definiert werden. `DF-04B` ist durch den DF-04A-Freeze nicht automatisch zur Implementierung freigegeben.
