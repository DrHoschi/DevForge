# DevForge

DevForge ist die zentrale webbasierte Entwickler-Toolbox für unterschiedliche Spiele- und Softwareprojekte. Das Werkzeug ist ausdrücklich projektübergreifend gedacht und soll Assets, Prompts, Referenzen, Animationen, Reviews und spätere Übergaben strukturiert vorbereiten.

## Module
- Prompt Builder – Generation Packages für Characters und später weitere Asset-Typen
- Animation Tester – rohe Einzelbilder vor dem Atlas als Loop prüfen, inkl. FPS, Onion-Skin, Frame-Stepping und Bottom-Center-Anchor
- Sprite Lab – Sprites/Sprite-Sheets laden, Pivot/Anchor/Scale bearbeiten und Atlasdaten prüfen
- Atlas Builder – Atlas-Funktionen und Metadaten vorbereiten
- Asset Inspector – technische Eigenschaften von Bildern/Texturen/Sprites prüfen
- Parameter Playground – Parameter verändern und Auswirkungen direkt sichtbar machen

## Aktueller Schwerpunkt
Aktuell wird der Character-Animation-Workflow anhand von `siedler-mini` / Carrier / WALK / Richtung SE entwickelt. Ziel ist nicht nur ein guter Prompt, sondern ein reproduzierbarer Produktionsvertrag für:
- Character Identity
- Anatomie und permanente Designmerkmale
- feste 45° Gameplay-Kamera
- Scale und Bottom-Center/Root-Anchor
- Renderstil, Materialien und Licht
- harte Frame-/Pose-Definitionen
- sichtbare Motion Deltas
- Previous Approved Frame Continuity
- transparente Einzel-PNGs
- Review vor Atlas-Assembly

## Entwicklungskette
- `DF-01 – Prompt Builder Foundation`
- `DF-02 – Character Animation Generation Package`
- `DF-02B – Authoritative Character Reference`
- `DF-02B.1 – Mobile Reference Import Fix`
- `DF-02C – Animation Sequence Reference Contract`
- `DF-02D – Key Pose / Motion Delta Contract`
- `DF-02D.1 – Previous Frame Pose Override Fix`
- `DF-02D.2 – Identity & Render Lock Reinforcement` ← aktueller Arbeitsstand

Der aktuelle Branch ist:

`df-02d2-identity-render-lock-reinforcement`

## Aktueller Teststatus
Carrier WALK / SE:
- FR1 – L Contact: PASS / APPROVED
- FR2 – L Down: PASS / APPROVED
- FR3 – Passing L: Retest unter DF-02D.2 ausstehend

FR3 darf erst bei gleichzeitigem `POSE PASS` und `CONTINUITY PASS` als Previous Approved Frame für FR4 verwendet werden.

## Siedler-Mini Asset-Staging
Repository: `DrHoschi/siedler-mini`

Branch:

`asset-carrier-animation-staging`

Pfad:

`assets/characters/source/carrier/walk/se/`

Dort sind `carrier_walk_se_f01.png` bis `carrier_walk_se_f08.png` und ein `manifest.json` für den DevForge Animation Tester vorgesehen. Source Frames bleiben einzeln erhalten und werden erst nach Review in einen finalen Atlas überführt.

## Dokumentation
- `docs/PROJECT_STATUS.md` – aktueller Gesamtstand, Repositories, Teststatus und verbindliche Produktionsregeln
- `docs/ROADMAP.md` – nächste zulässige Schritte und bewusste Entwicklungsgrenzen
- `docs/CHATGPT_PROJECT_CONTEXT.md` – kompakte Übergabedatei für neue ChatGPT-Chats im DevForge-Projekt

## Projektprinzip
DevForge soll nicht als großer theoretischer All-in-one-Editor vorgebaut werden. Neue Funktionen werden anhand real beobachteter Produktionsprobleme ergänzt. Ein Fix darf funktionierende Contracts nicht unnötig wieder öffnen.

## Archivierter Altstand
Der frühere parametrische Stahlträgerhallen-Prototyp ist unverändert auf folgendem Branch gesichert:

`archive/baustellenplaner-halle-legacy`

## Git-Hinweis
Mehrere ältere DF-Feature-Branches/PRs existieren noch als Zwischenstände. Der aktuelle Character-Animation-Arbeitsstand ist die fortgeschriebene Branch-Kette bis DF-02D.2. Ein separates Cleanup-/Freeze-Gate soll diese historischen Zwischenstände später konsolidieren.
