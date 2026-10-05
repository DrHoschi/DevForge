# Texture Lab – Product Priority / Minimal V1 Scope

Stand: 2026-10-05

## 1. Gate

Texture Lab – Product Priority / Minimal V1 Scope Authorization

Basis:
`main = d270bb80834eb285de776733dffedab3d28efb8c`

Status:
`AUTHORIZED / DOCUMENTED / NOT IMPLEMENTED`

Dieser Block ist ein Scope-/Doku-Block. Er autorisiert noch keine Tool-Implementation, keinen neuen Produktcode und keinen Umbau bestehender DevForge-Werkzeuge.

## 2. Fachlicher Anlass

Aus dem praktischen Einsatz ist ein neues DevForge-Bedürfnis entstanden: normale Bilddateien und spätere Material-/Texturquellen sollen schnell sichtbar geprüft werden können, bevor sie in Assets, importierte Modelle oder Zielprojekte übernommen werden.

Der konkrete Bedarf umfasst insbesondere:

- einfache Bild-/Texturdateien laden und betrachten;
- Texturwirkung auf einfachen 3D-Testkörpern prüfen;
- Kachelung, Skalierung, Rotation, Offset und Alpha visuell bewerten;
- später optional zusammengehörige Material-Maps erzeugen oder prüfen;
- keine Vermischung mit Sprite-, Atlas-, Animation- oder Handoff-Authorities.

## 3. Prioritätsentscheidung

Texture Lab wird als nächster praktischer Produktkandidat gegenüber DF-09 priorisiert.

Begründung:

- DF-09 bleibt als definierter Core-Capability-Kandidat gültig, löst aber aktuell vor allem einen technischen Nachweis innerhalb `asset-handoff`.
- Texture Lab adressiert einen unmittelbar sichtbaren Produktionsschritt: Material- und Texturquellen prüfen, bevor sie in CyberMotion-/Asset-/Viewer-Flows weiterverwendet werden.
- Der Scope kann als kleines eigenständiges V1-Werkzeug beginnen und öffnet keine eingefrorenen DF-05–DF-09-Contracts.
- Der spätere Ausbau zu Textur-Set-Erzeugung ist möglich, aber nicht Teil von Minimal V1.

Diese Prioritätsentscheidung verändert keine bestehenden Frozen Contracts.

## 4. Tool-Rolle

Texture Lab ist ein DevForge-Werkzeug für Material-/Texturprüfung.

Minimal V1 ist ein **Texture Tester**, kein Generator.

Langfristig kann Texture Lab in einem separaten späteren Block zu einem **Texture Creator** erweitert werden, der aus Bild- oder Promptquellen zusammengehörige Textur-Sets erzeugt. Diese spätere Creator-Funktion ist ausdrücklich nicht Teil von Minimal V1.

## 5. Minimal V1 – erlaubte Capabilities

Minimal V1 darf ausschließlich folgende Funktionen erhalten:

1. Lokale Bilddatei laden
   - PNG
   - JPG/JPEG
   - WebP, sofern browserseitig verfügbar

2. Bild als Base-Color-/Diffuse-Textur anzeigen
   - auf einer ebenen Fläche;
   - auf einem Würfel;
   - auf einer Kugel.

3. Basisparameter visuell ändern
   - Repeat/Kachelung X/Y;
   - Scale;
   - Rotation;
   - Offset X/Y;
   - Alpha-/Transparenzanzeige;
   - Hintergrund hell/dunkel/neutral.

4. Einfache Licht-/Preview-Kontrolle
   - mindestens eine gerichtete Lichtquelle oder vergleichbare Standardbeleuchtung;
   - ein Preview-Modus, der Materialwirkung sichtbar macht;
   - keine physikalisch vollständige Render-Pipeline als V1-Ziel.

5. Map-Slots vorbereiten, aber nicht erzeugen
   - Base Color als aktiver V1-Pfad;
   - optionale leere UI-/Datenstruktur für Normal, Roughness, Metalness, AO und Alpha nur, wenn dies den V1-Code nicht aufbläht;
   - keine automatische Map-Erzeugung in V1.

## 6. Minimal V1 – harte Non-Goals

Minimal V1 darf nicht enthalten:

- KI-Textur-Generierung;
- automatische Normal-Map-Erzeugung;
- automatische Roughness-/Metalness-/AO-Erzeugung;
- Prompt-basierte Texturerstellung;
- persistente Library;
- Batch-Verarbeitung;
- Repository-/Runtime-Handoff;
- Änderung an DF-05, DF-06, DF-07, DF-08 oder DF-09;
- Asset-Handoff-Fingerprint-Logik;
- Sprite-Atlas-Export;
- Sprite-Animation;
- Character-Layer;
- Rig/Skeleton;
- Animation-Frames oder Playback;
- GLB-Import/Export als V1-Anforderung;
- Änderung bestehender Tools außer Hub-Registrierung und minimal notwendiger Navigation, falls ein späterer Implementation-Block dies ausdrücklich autorisiert.

## 7. Abgrenzung zu bestehenden Werkzeugen

### Sprite Lab

Sprite Lab bleibt verantwortlich für 2D-/Sprite-Asset-Strukturen, Spatial-Persistenz, stable IDs, Marker/Sockets und spätere Layer-/Rig-nahe Sprite-Arbeit.

Texture Lab übernimmt keine Sprite-Komposition, keine Sprite-Animation und keinen Atlas-Export.

### Asset Inspector

Asset Inspector bleibt ein technisches Prüfwerkzeug für vorhandene Assets.

Texture Lab prüft die visuelle Wirkung einer Textur-/Materialquelle. Eine spätere Übergabe an Asset Inspector ist denkbar, aber nicht Teil von Minimal V1.

### Animation Tester

Animation Tester bleibt für Bewegungs-/Frame-/Playback-Prüfung zuständig.

Texture Lab zeigt keine Animation und erzeugt keine Bewegungsdaten.

### Controlled Asset Handoff / DF-05–DF-09

Texture Lab ist kein Handoff-Tool und keine Fingerprint-Autorität.

DF-09 bleibt unverändert definierter Core-Capability-Kandidat für SHA-256-Nachweis eines bereits nach DF-08 gebundenen Payloads.

Texture Lab darf DF-09 nicht ersetzen, erweitern oder implizit vorwegnehmen.

### CyberMotion 3D Web Designer / externe Produkte

Texture Lab kann später als Vorprüfwerkzeug für Texturen dienen, die in CyberMotion oder anderen Produkten genutzt werden.

Es übernimmt keine externe Produkt-Authority und ändert keine externen Produkt-Repositories.

## 8. Minimaler späterer Implementation-Scope-Kandidat

Ein späterer Implementation-Block darf voraussichtlich nur folgende Bereiche öffnen:

- neues Verzeichnis `tools/texture-lab/`;
- Hub-/Registry-Eintrag für Texture Lab;
- ein passendes Tool-Icon nur falls für Hub-Darstellung erforderlich;
- Tests oder statische Checks nur soweit im Repo vorhanden und für den neuen Tool-Eintrag sinnvoll;
- Dokumentationsupdate zu Status und nächstem Schritt.

Noch nicht autorisiert:

- konkrete Dateiliste;
- Entwicklungsbranch;
- Produktcode;
- Tests;
- Integration nach main nach Implementierung.

Diese Punkte benötigen ein separates Implementation Authorization Gate.

## 9. Akzeptanz für diesen Scope-Block

Dieser Scope-Block gilt als erfüllt, wenn:

- Texture Lab als priorisierter Produktkandidat dokumentiert ist;
- Minimal V1 eindeutig auf Texture Testing begrenzt ist;
- spätere Texture-Creator-Funktionen ausdrücklich ausgeschlossen sind;
- Abgrenzung zu Sprite Lab, Asset Inspector, Animation Tester und DF-05–DF-09 festgehalten ist;
- der nächste zulässige Schritt keine Produktimplementation im selben Gate erlaubt.

## 10. Nächster zulässiger Schritt

Ausschließlich ein separater:

`Texture Lab – Minimal V1 Implementation Scope / Branch Authorization`

gegen den nach diesem Dokumentationsblock aktuellen `main`.

Dabei muss die konkrete Datei-/Branch-/Testgrenze festgelegt werden. Noch keine Implementation ohne separate Freigabe.
