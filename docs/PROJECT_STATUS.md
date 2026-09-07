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
- Aktueller Entwicklungsblock: `DF-04A – Source / Result Compare View`
- Aktuelles Gate: `DF-04A – Completion / Freeze Gate`

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

## DF-04A – Source / Result Compare View
Contract:
`docs/DF-04A_SOURCE_RESULT_COMPARE_VIEW_CONTRACT.md`

### Implementiert in TESTBUILD 1
- eigenständiges Tool unter `tools/source-result-compare/`;
- zwei vollständig getrennte lokale Bildinputs;
- `Source / Control` bleibt links bzw. auf schmalen Geräten oben;
- `Result` bleibt rechts bzw. auf schmalen Geräten unten;
- beide Bilder können gleichzeitig sichtbar bleiben;
- Ersetzen einer Seite verändert die jeweils andere Seite nicht;
- proportionaler Bild-Fit mit `object-fit: contain`, ohne Cropping oder Stretching;
- stabil begrenzte Vergleichsflächen für unterschiedliche Bildabmessungen und Seitenverhältnisse;
- klare Leerzustände je Slot;
- Dateiname und natürliche Pixelabmessungen werden rein informativ angezeigt;
- responsive Ein-Spalten-Darstellung auf schmalen Geräten bei unveränderter Rollenreihenfolge;
- sichtbare Build-Kennung `DF-04A · TESTBUILD 1`;
- Cache-Busting für den neuen Tool-Build und den DevForge-Toolindex.

### Explizit nicht implementiert
- Overlay;
- Onion-Skin;
- Difference View;
- Blend-Slider;
- synchrones Pan/Zoom;
- automatische Registrierung/Ausrichtung;
- Pose-/Skeleton-Scoring;
- KI-Bewertung;
- automatische PASS/FAIL-Entscheidung;
- Persistenz / Asset Library;
- Review-Notizen / Approve / Reject;
- technische Alpha-/Bounds-/Scale-Prüfung;
- Atlas-Funktionen;
- Änderungen an DF-02F-Generation-Handoff oder Prompt Builder.

## DF-04A Gerätetest – PASS
Reale iPhone-/Safari-Evidenz vom 2026-09-07 bestätigt:
- sichtbare Build-Kennung `DF-04A · TESTBUILD 1`;
- Source / Control und Result lassen sich separat laden;
- beide bleiben gleichzeitig sichtbar;
- Source bleibt auf schmalem Viewport logisch oben, Result darunter;
- beide Bilder werden proportional und vollständig ohne erkennbares Cropping oder Stretching dargestellt;
- unterschiedliche Bildinhalte und Abmessungen zerstören die Vergleichsanordnung nicht;
- Source wurde durch ein drittes Bild (`IMG_4633.jpeg`, 1120 × 1120 px) ersetzt, während das zuvor geladene Result (`54677C4E-64AF-4E01-9B5E-1D7AA9DA71D9.png`, 1243 × 1265 px) unverändert geladen blieb;
- damit ist die unabhängige Slot-Ersetzung praktisch bestätigt;
- keine ausgeschlossene DF-04B-/Scoring-/Persistenz-/Atlas-Funktion ist sichtbar vorgezogen.

Ergebnis: `DF-04A · TESTBUILD 1 – DEVICE TEST PASS / 0 BLOCKER`.

# Aktuelles Gate
`DF-04A – Completion / Freeze Gate`

Im Completion-/Freeze-Gate wird keine neue Funktion ergänzt. Der implementierte DF-04A-Stand wird ausschließlich gegen Contract, Branch-Diff und dokumentierte Geräte-Evidenz regressiert und bei PASS / 0 BLOCKER als abgeschlossen/frozen markiert.

# Nächster zulässiger Schritt
`DF-04A – Completion / Freeze Gate` durchführen. Noch kein DF-04B und keine weitere Review-Funktion vorziehen.
