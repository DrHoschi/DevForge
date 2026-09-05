# DF-02E.3 – WALK SE Pose Set FR1–FR4

Status: TEST-READY

## Zweck
DF-02E.3 definiert erstmals vier echte WALK-SE-Posen als explizite deterministische Joint-Daten auf dem eingefrorenen DF-02E.1-Skelett und der eingefrorenen DF-02E.2-Kamera.

## Unveränderliche Basis
- Skeleton/Joints: `devforge.mannequin-skeleton.v1`
- Root: `[0,0,0]`
- horizontale Root-Translation: verboten
- Facing: lokales `+Z`, fachlich SE
- Kamera: orthografisch, yaw 45°, elevation 45°
- Canvas: 720 × 720 logical px
- keine generative Pose-Erzeugung

## Posefolge
### FR1 – Contact L
- LEFT = CONTACT
- RIGHT = TRAILING
- linkes Bein klar vorne und am Boden
- rechtes Bein klar hinten
- rechte Seite des Armschwungs vorne, linke hinten
- normale/mittlere Körperhöhe

### FR2 – Down L
- LEFT = SUPPORT
- RIGHT = TRAILING
- Gewicht liegt auf links
- Becken/Körper sinkt gegenüber FR1 sichtbar ab
- rechter Fuß bleibt hinten; rechte Ferse löst sich
- noch kein Passing

### FR3 – Passing L
- LEFT = SUPPORT
- RIGHT = SWING
- linkes Bein bleibt Standbein
- rechtes Knie/Fuß zieht unter dem Becken am linken Bein vorbei
- Füße in der Projektion deutlich näher zusammen als FR1
- kein Contact-/Long-stride-Silhouette

### FR4 – Up / Right Swing
- LEFT = SUPPORT
- RIGHT = SWING
- Körper steigt gegenüber FR3 an
- rechtes Knie/Fuß liegt deutlich vor der Passing-Position und bleibt in der Luft
- Vorbereitung auf den späteren rechten Contact
- FR5 selbst wird in E.3 NICHT definiert

## Datenquelle
`tools/pose-renderer/walk-se-fr1-fr4.v1.json`

Jede Pose besitzt:
- stabile Pose-ID
- Phase
- explizite Rollen für linkes/rechtes Bein
- explizite 3D-Joint-Koordinaten
- feste Root-Position
- explizite Pelvishöhe

## Acceptance Gate
E.3 ist nur PASS, wenn auf dem Gerät visuell erkennbar ist:
1. FR1 bis FR4 sind vier unterscheidbare aufeinanderfolgende Phasen.
2. Facing/Kamera/Scale bleiben in allen vier Posen gleich.
3. FR2 ist sichtbar niedriger als FR1.
4. FR3 ist eine echte Passing-Pose und keine Contact-Wiederholung.
5. FR4 zeigt das rechte Bein klar im Vorwärtsschwung.
6. Reload erzeugt für dieselbe Pose dieselbe Projektion.
7. Keine FR5–FR8-Daten oder Counterphase-Logik sind vorhanden.

## Harte Grenze
DF-02E.3 enthält NICHT:
- FR5–FR8
- L↔R-Counterphase-Ableitung
- Pose-Editor/Slider
- Animation/Playback
- weitere Richtungen oder Kameras
- Prompt-Builder-Bridge
- Character-Rendering

FR5–FR8 bleiben ausschließlich DF-02E.4 vorbehalten.
