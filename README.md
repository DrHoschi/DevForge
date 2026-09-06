# DevForge

DevForge ist die zentrale webbasierte Entwickler-Toolbox für unterschiedliche Spiele- und Softwareprojekte. Das Werkzeug ist ausdrücklich projektübergreifend gedacht und soll Assets, Prompts, Referenzen, Animationen, Reviews und spätere Übergaben strukturiert vorbereiten.

## Module
- Animated 3D Reference Viewer – echte geriggte 3D-Animationsquellen laden, prüfen und später als reproduzierbare Pose-/Frame-Referenz verwenden
- Prompt Builder – Generation Packages für Characters und später weitere Asset-Typen
- Animation Tester – rohe Einzelbilder vor dem Atlas als Loop prüfen, inkl. FPS, Onion-Skin, Frame-Stepping und Bottom-Center-Anchor
- Deterministic Pose Renderer – historischer DF-02E-Prototyp; nicht mehr die geplante Produktionsquelle
- Sprite Lab – Sprites/Sprite-Sheets laden, Pivot/Anchor/Scale bearbeiten und Atlasdaten prüfen
- Atlas Builder – Atlas-Funktionen und Metadaten vorbereiten
- Asset Inspector – technische Eigenschaften von Bildern/Texturen/Sprites prüfen
- Parameter Playground – Parameter verändern und Auswirkungen direkt sichtbar machen

## Aktueller Schwerpunkt
Der Character-Animation-Workflow wird anhand von `siedler-mini` / Carrier / WALK entwickelt. Seit DF-02F ist eine echte geriggte 3D-Animation die geplante autoritative Bewegungsquelle.

Die erste Testquelle ist:
`X Bot@Standard Walk 2.fbx`

Ziel der neuen Kette:
- echtes Model + Rig + Animation als Bewegungsquelle;
- In-Place-Preview an stabiler Weltposition;
- später exakte Timeline-/Frame-Auswahl;
- feste Camera-/Facing-Presets für Gameplay-Richtungen;
- Pose-/Frame-Bookmarks statt manuell erfundener Skelettposen;
- daraus reproduzierbare Referenzbilder für 2D-Produktion;
- langfristige Wiederverwendung derselben 3D-Quellen für 3D-Workflows.

## Entwicklungskette
Bisherige Character-/Prompt-Foundation:
- `DF-01 – Prompt Builder Foundation`
- `DF-02 – Character Animation Generation Package`
- `DF-02B – Authoritative Character Reference`
- `DF-02C – Animation Sequence Reference Contract`
- `DF-02D – Key Pose / Motion Delta Contract`

Pose-Prototyp:
- `DF-02E.1–E.4 – Deterministic Pose Reference Prototype` – abgeschlossen, für Produktion durch DF-02F abgelöst

Aktuelle 3D-Reference-Foundation:
- `DF-02F.1 – Animated 3D Reference Asset Contract` – PASS
- `DF-02F.2 – Animated 3D Preview / Runtime Asset Intake` – aktueller Gerätetest
- danach `DF-02F.3 – Animation Timeline / Scrubbing`
- danach `DF-02F.4 – Camera & Facing Presets`
- danach `DF-02F.5 – Pose Bookmark / Reference Capture`
- danach `DF-02F.6 – Prompt Builder / Reference Export Bridge`

Der aktuelle Entwicklungsbranch ist:
`df-02f2-animated-3d-preview-runtime-intake`

## Aktueller Test
Im Animated 3D Reference Viewer die bereitgestellte Datei `X Bot@Standard Walk 2.fbx` laden und prüfen:
- sichtbares Mesh bzw. eindeutige Motion-only-Diagnose;
- Skeleton/Bones;
- Animation Clip;
- automatische Wiedergabe;
- In-Place-Verhalten;
- Play/Pause;
- reproduzierbares erneutes Laden.

Noch keine Timeline, keine 8 Richtungen und keine Pose-Bookmarks in DF-02F.2.

## Siedler-Mini Asset-Staging
Repository: `DrHoschi/siedler-mini`

Die konkreten aktuellen Handoff-Pfade und Freigabegrenzen werden verbindlich in `docs/PROJECT_STATUS.md` und `docs/ROADMAP.md` gepflegt.

## Dokumentation
- `docs/PROJECT_STATUS.md` – aktueller Gesamtstand, Branch, PASS/FAIL und exakt nächster zulässiger Schritt
- `docs/ROADMAP.md` – Gesamtvision, Zielarchitektur und Entwicklungsgrenzen
- `docs/DF-02F1_ANIMATED_3D_REFERENCE_ASSET_CONTRACT.md` – Vertrag der echten 3D-Animationsquelle
- `docs/DF-02F2_ANIMATED_3D_PREVIEW_RUNTIME_INTAKE.md` – aktueller Viewer-/Intake-Testvertrag

## Projektprinzip
DevForge wird nicht als große theoretische All-in-one-Anwendung vorgebaut. Neue Funktionen entstehen in kleinen nachprüfbaren Blöcken aus realen Produktionsproblemen. Ein bestätigter Contract wird nicht nebenbei wieder geöffnet.

## Archivierter Altstand
Der frühere parametrische Stahlträgerhallen-Prototyp ist unverändert auf folgendem Branch gesichert:
`archive/baustellenplaner-halle-legacy`
