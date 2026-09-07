# DevForge

DevForge ist die zentrale webbasierte Entwickler-Toolbox für unterschiedliche Spiele- und Softwareprojekte. Das Werkzeug ist projektübergreifend gedacht und soll Assets, Prompts, Referenzen, Animationen, Reviews und spätere Übergaben strukturiert vorbereiten.

## Module
- Animated 3D Reference Viewer – echte geriggte 3D-Animationsquellen laden, scrubben, Facing/Kamera festlegen und reproduzierbare Pose-Bookmarks erzeugen
- Prompt Builder – Character Identity mit visueller Pose Control und expliziter Geometry Control zu einem Generation Package verbinden
- Source / Result Compare View – Source und Result laden, vergleichen, überblenden, den Result-Layer manuell ausrichten und eine Difference View anzeigen
- Animation Tester – rohe Einzelbilder vor dem Atlas als Loop prüfen, inkl. FPS, Onion-Skin, Frame-Stepping und Bottom-Center-Anchor
- Deterministic Pose Renderer – historischer DF-02E-Prototyp; nicht mehr die geplante Produktionsquelle
- Sprite Lab – Sprites/Sprite-Sheets laden, Pivot/Anchor/Scale bearbeiten und Atlasdaten prüfen
- Atlas Builder – Atlas-Funktionen und Metadaten vorbereiten
- Asset Inspector – technische Eigenschaften von Bildern/Texturen/Sprites prüfen
- Parameter Playground – Parameter verändern und Auswirkungen direkt sichtbar machen

## Aktueller Character-Workflow
Der Character-Animationsworkflow wird anhand von `siedler-mini` / Carrier / WALK entwickelt.

Seit DF-02F ist eine echte geriggte 3D-Animation die autoritative Bewegungsquelle. DevForge kontrolliert dabei Animation/Zeitposition, Facing, Gameplay-Kamera, Pose Bookmark / Reference Capture, visuellen Pose-Handoff und ergänzende explizite Gelenk-/Skeleton-Geometrie.

## Erreichter DF-02F-Stand
- `DF-02F.1 – Animated 3D Reference Asset Contract` – PASS
- `DF-02F.2 – Animated 3D Preview / Runtime Asset Intake` – PASS
- `DF-02F.3 / F.3R – Animation Timeline / Scrubbing` – PASS
- `DF-02F.4 / F.4R – Camera & Facing Presets / Semantic Alignment` – PASS
- `DF-02F.5 – Pose Bookmark / Reference Capture` – PASS
- `DF-02F.6 – Prompt Builder / Reference Export Bridge` – implemented
- `DF-02F.6R.1 – Pose Fidelity Contract Reinforcement` – FAIL
- `DF-02F.6R.2 – Pose-dominant PDF Transfer Contract` – FAIL
- `DF-02F.6R.3 – Direct Visual Pose Handoff` – implemented, external generation still insufficiently deterministic
- `DF-02F.6R.4 – Explicit Pose Geometry Control` – IMPLEMENTED; external generation limit remains

## Bekannte Generation-Handoff-Grenze
Die reproduzierbare Pose-Auswahl innerhalb von DevForge funktioniert. Der offene Engpass liegt weiterhin beim externen Transfer dieser Pose in ein neu generiertes Character-Bild. Diese Grenze blockiert den unabhängigen Ausbau von DevForge als Review-, Prüf- und Asset-Produktionsplattform nicht.

## DF-04 – Asset Review Foundation
Der Review-Layer wurde bis einschließlich DF-04D schrittweise auf realen Zielgeräten aufgebaut und eingefroren.

### DF-04A – Source / Result Compare View – PASS / FROZEN
Zwei lokale Bildslots mit festen Source-/Result-Rollen, unabhängiger Ersetzung, proportionaler vollständiger Darstellung und responsiver Basisvergleichsansicht.

### DF-04B – Overlay / Onion-Skin Compare Foundation – PASS / FROZEN
Zusätzlicher Overlay-/Onion-Skin-Modus mit gemeinsamer Vergleichsfläche, Source als Basis-Layer, Result als Overlay-Layer und manuellem 0–100-%-Blend-Regler.

### DF-04C – Manual Alignment Foundation – PASS / FROZEN
Manuelle Ausrichtung ausschließlich des Result-Layers innerhalb des Overlay-Modus über Translation X, Translation Y und uniforme proportionale Skalierung. Sichtbare Werte, `Reset Alignment`, unveränderter Blend und temporärer Review-Zustand sind Bestandteil des eingefrorenen Vertrags.

### DF-04D – Difference View Foundation – PASS / FROZEN
Zusätzliche deterministische Difference View auf denselben geladenen Source-/Result-Bildern und unter Verwendung des aktuellen DF-04C-Alignments. Die Ansicht berechnet pixelweise absolute RGBA-Abweichungen auf einer gemeinsamen Review-Rasterfläche. Geringe/keine Abweichungen erscheinen dunkel, stärkere Abweichungen heller; Alpha wird berücksichtigt.

Der reale iPhone-/Safari-Gerätetest und das Completion-/Freeze-Gate sind `PASS / 0 BLOCKER / FROZEN`.

Nicht Bestandteil des eingefrorenen DF-04D-Vertrags sind unter anderem Auto-Alignment / Best-Fit, Threshold/Tolerance, mehrere Difference-Modi, numerisches Scoring, KI-Auswertung, automatische PASS/FAIL-Entscheidung, Persistenz und Atlas-Funktionen.

## Aktueller Stand
Aktueller Entwicklungs-/Freeze-Branch:
`df-04d-difference-view-foundation`

Aktueller eingefrorener Review-Stand:
`DF-04D – PASS / 0 BLOCKER / FROZEN`

Ein Folgeblock ist noch nicht automatisch freigegeben. Zuerst wird aus der realen DF-04D-Erfahrung fachlich festgelegt, welcher kleine Review-Schritt als Nächstes tatsächlich benötigt wird.

## Siedler-Mini
Repository: `DrHoschi/siedler-mini`

Konkrete aktuelle Handoff-Pfade und Freigabegrenzen werden verbindlich in der Repository-Dokumentation gepflegt.

## Dokumentation
- `docs/PROJECT_STATUS.md` – aktueller Gesamtstand, Branch, PASS/FAIL und exakt nächster zulässiger Schritt
- `docs/ROADMAP.md` – Gesamtvision, Zielarchitektur und Entwicklungsgrenzen
- `docs/DF-04A_SOURCE_RESULT_COMPARE_VIEW_CONTRACT.md` – eingefrorener Basisvergleich
- `docs/DF-04B_OVERLAY_ONION_SKIN_COMPARE_CONTRACT.md` – eingefrorener Overlay-Vertrag
- `docs/DF-04C_MANUAL_ALIGNMENT_FOUNDATION_CONTRACT.md` – eingefrorener Manual-Alignment-Vertrag
- `docs/DF-04D_DIFFERENCE_VIEW_FOUNDATION_CONTRACT.md` – eingefrorener Difference-View-Vertrag

## Projektprinzip
DevForge wird nicht als große theoretische All-in-one-Anwendung vorgebaut. Neue Funktionen entstehen in kleinen nachprüfbaren Blöcken aus realen Produktionsproblemen. Ein bestätigter Contract wird nicht nebenbei wieder geöffnet.

## Archivierter Altstand
Der frühere parametrische Stahlträgerhallen-Prototyp ist unverändert auf folgendem Branch gesichert:
`archive/baustellenplaner-halle-legacy`
