# DF-02F.1 – Animated 3D Reference Asset Contract

Stand: 2026-09-06
Status: DRAFT / IMPLEMENTED FOR REVIEW

## 1. Ziel
DF-02F.1 ersetzt die bisherige Idee manuell gepflegter technischer Mannequin-Posen als zukünftige Produktionsquelle durch echte geriggte 3D-Animationsquellen.

DevForge soll Animationen künftig aus einem autoritativen 3D-Asset mit Skeleton/Rig und Animation Clip beziehen. Einzelne Produktionsframes werden später als Zeit-/Frame-Bookmarks innerhalb dieses Clips ausgewählt, nicht als separat erfundene Pose-Geometrie.

Noch nicht Bestandteil dieses Blocks:
- 3D-Runtime-Viewer;
- Timeline/Scrubbing;
- Kamera-Presets;
- acht Gameplay-Richtungen;
- Pose-Bookmarks/FR1–FR8;
- Prompt-Builder-Bridge;
- Export von Referenzbildern.

## 2. Erste Referenzquelle
Erste Testquelle:

`X Bot@Standard Walk 2.fbx`

Vom Nutzer bereitgestellt als Standard-Walk mit In-Place-Verhalten.

Technisch am bereitgestellten File bestätigt:
- binäres FBX;
- FBX-Version 7700;
- Dateigröße 392192 Byte;
- Mixamo-Skeleton-Namensraum `mixamorig:*` vorhanden;
- zentrale Bones wie `mixamorig:Hips`, Spine/Head, Arme, Hände, Beine, Füße und Zehen vorhanden;
- AnimationStack / AnimationLayer vorhanden.

Nicht in DF-02F.1 als bereits bewiesen behandeln:
- ob ein renderbares Character-Mesh im bereitgestellten FBX enthalten ist;
- konkrete Clip-Dauer/FPS;
- Material-/Texture-Inhalt;
- Browser-Runtime-Kompatibilität.

Diese Punkte werden erst im Viewer-/Asset-Intake-Schritt technisch verifiziert.

## 3. Authoritative-Source-Prinzip
Für jede Animation existiert genau eine freigegebene Quellanimation als Bewegungsreferenz.

Beispiel:
- Animation-ID: `WALK_STANDARD_01`
- Source: `X Bot@Standard Walk 2.fbx`
- Motion Type: `WALK`
- Root Policy: `IN_PLACE_REQUIRED`

Die Quellanimation bestimmt:
- Gelenkbewegung;
- Timing;
- Gewichtsverlagerung;
- Schrittfolge;
- Arm-/Bein-Gegenbewegung;
- Zwischenphasen.

DevForge darf diese Bewegung für die reine Referenzauswahl nicht durch manuell erfundene Pose-Daten ersetzen.

## 4. Modell / Rig / Animation
Die Produktionsarchitektur behandelt folgende Ebenen getrennt, aber gekoppelt:

### Model
Das sichtbare 3D-Character-Mesh für Vorschau und spätere Referenz-Renderings.

### Rig / Skeleton
Die Gelenkhierarchie, auf der der Animationsclip läuft.

### Animation Clip
Zeitabhängige Bone-Transforms des Bewegungsablaufs.

Ein Asset darf diese Ebenen gemeinsam in einer Datei oder technisch getrennt liefern. Entscheidend ist, dass DevForge sie zur Laufzeit reproduzierbar als eine animierte Referenz zusammensetzen kann.

## 5. In-Place-/Root-Vertrag
Für Pose- und Referenzarbeit muss die Figur an einer stabilen Weltposition bleiben.

Verbindlich:
- horizontale globale Fortbewegung der Figur ist für Reference Preview nicht zulässig;
- der globale Referenz-Root bleibt stationär;
- natürliche lokale Bewegung von Hips/Pelvis, Beinen, Armen und Oberkörper bleibt vollständig erhalten;
- vertikale Körperbewegung innerhalb der Animation darf nicht pauschal entfernt werden;
- bevorzugt werden bereits als `In Place` exportierte Clips.

Falls ein späterer Clip Root Motion enthält, muss dessen horizontale Translation im Intake explizit neutralisiert oder der Clip als ungeeignet markiert werden. Keine stille Veränderung.

## 6. Koordinaten- und Facing-Prinzip
Die Animation selbst definiert nicht die spätere Gameplay-Richtung.

DevForge trennt:
- Motion Space = eigentliche Animation;
- Facing = Drehung der Figur relativ zur Referenzwelt;
- Camera = definierte Ansicht auf die Figur.

Damit kann derselbe Walk-Clip später für N, NE, E, SE, S, SW, W und NW verwendet werden, ohne acht eigene Walk-Clips zu benötigen.

DF-02F.1 legt noch keine Winkelwerte für diese Richtungen fest. Diese gehören in einen späteren Camera-/Facing-Contract.

## 7. Bookmark-Prinzip für spätere Frames
FR1–FR8 sind künftig keine eigenständigen Skelett-Datensätze mehr.

Ein späterer Referenzframe wird mindestens beschrieben durch:
- Animation-ID;
- Clip-Zeit oder normalisierte Clip-Position;
- Facing-Preset;
- Camera-Preset;
- optional Frame-/Bookmark-ID wie `FR3`.

Beispielkonzept:
`WALK_STANDARD_01 @ 0.317 + SE + GAMEPLAY_ISO_45`

Der konkrete Bookmark-/Persistenzvertrag wird erst in einem späteren DF-02F-Block definiert.

## 8. Beziehung zu DF-02E
DF-02E.1–E.4 bleiben im Repository als dokumentierter deterministischer Pose-Renderer-Prototyp erhalten.

Sie sind nicht zu löschen und bleiben als technische Vergleichs-/Fallback-Referenz nachvollziehbar.

Ab DF-02F ist der manuell definierte Mannequin-Pose-Satz jedoch nicht mehr die geplante Produktionsquelle für neue Character-Animation-Referenzen.

## 9. Langfristige Wiederverwendung
Der Vertrag ist bewusst nicht nur auf 2D-Sprite-Erzeugung beschränkt.

Dieselben freigegebenen 3D-Animationsquellen sollen später nutzbar sein für:
- 2D-Referenzbild-Erzeugung;
- Sprite-/Direction-Referenzen;
- Character-Animation-Review;
- 3D-Character-Prototyping;
- spätere 3D-Projekte bzw. Runtime-Handoffs, sofern deren Ziel-Rig/Retargeting-Vertrag kompatibel ist.

## 10. Acceptance Gate DF-02F.1
PASS, wenn:
1. die neue 3D-Animationsquelle als zukünftige Produktionsbasis dokumentiert ist;
2. Model, Rig und Animation fachlich getrennt definiert sind;
3. In-Place/Root-Verhalten verbindlich festgelegt ist;
4. Animation, Facing und Kamera getrennte Verantwortungen besitzen;
5. DF-02E.1–E.4 ausdrücklich als Prototyp erhalten bleiben;
6. noch keine Viewer-, Timeline-, Direction- oder Prompt-Builder-Funktion vorgezogen wurde.

Nächster Block nach PASS:
**DF-02F.2 – Animated 3D Preview / Runtime Asset Intake**

Dort wird erstmals geprüft und umgesetzt, wie die bereitgestellte Quelle als echtes animiertes 3D-Modell im Browser dargestellt wird.