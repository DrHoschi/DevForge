# Texture Lab – Multi Map Preview Scope

Stand: 2026-10-13

Status:
`IMPLEMENTED / STATIC VERIFICATION PASS / DEVICE EVIDENCE PENDING`

Branch:
`feature/texture-lab-minimal-v1`

Scope Authorization Baseline:
`bc506a0b6ed155c617a23e7578eecc28390edfe2`

Minimal V1 Frozen Product Commit:
`200b769c3b4fff5f236dee4ca791a2f5867a40c0`

## Ziel

Texture Lab bleibt ein Texture Tester. Der nächste Produktblock erweitert die bestehende Base-Color-Prüfung um zusätzliche vorhandene Material-Maps, damit ein Material-Set lokal auf Fläche, Würfel und Kugel geprüft werden kann, bevor der Branch nach `main` integriert wird.

Dieser Block erzeugt keine neuen Maps. Ein separater Texture Creator / Map Generator bleibt ein späterer eigener Produktblock.

## V1 bleibt Fundament

Der eingefrorene Minimal-V1-Stand bleibt gültig:

- lokale PNG/JPG/WebP-Texturen laden;
- Base-Color-/Diffuse-Wirkung auf Fläche, Würfel und Kugel prüfen;
- Repeat, Scale, Rotation, Offset, Alpha und einfache Beleuchtung visuell bewerten;
- iPhone-Safari-Dateiauswahl und Preview-Rendering sind funktional bestanden;
- keine Generator-, Export-, Handoff- oder Asset-Library-Funktion.

## Multi Map Preview – erlaubter Scope

Der nächste Implementierungsblock darf ausschließlich vorhandene lokale Maps als zusätzliche Slots laden und gemeinsam in der Preview darstellen:

| Slot | Zweck | Eingabe |
| --- | --- | --- |
| Base Color | Farbinformation / Diffuse | PNG, JPG, JPEG, WebP |
| Normal | Oberflächenrichtung / Reliefwirkung | PNG, JPG, JPEG, WebP |
| Roughness | Rauigkeit / Glanzverteilung | PNG, JPG, JPEG, WebP |
| Metalness | Metall-Anteil | PNG, JPG, JPEG, WebP |
| AO | Ambient Occlusion / Kontaktabdunklung | PNG, JPG, JPEG, WebP |

Erlaubte Capabilities:

- pro Slot lokale Datei auswählen;
- iOS-Safari-kompatible MIME-Prüfung mit Dateiendungs-Fallback wie in V1;
- pro Slot sichtbarer Readout mit Dateiname, Pixelgröße und Dateigröße;
- Base Color bleibt wie in V1 voll funktionsfähig;
- fehlende Maps sind erlaubt;
- geladene Maps werden auf demselben Prüfkörper kombiniert;
- Prüfkörper bleiben Fläche, Würfel und Kugel;
- gemeinsame Transform-Parameter bleiben materialweit synchron, damit alle Maps ausgerichtet bleiben;
- vorhandene Engine-/Import-Fehler müssen sichtbar im Readout landen;
- bestehende iPhone-Safari-Dateiauswahl darf nicht regressieren.

## Nicht-Ziele

Dieser Block darf nicht enthalten:

- keine Erzeugung von Normal-/Roughness-/Metalness-/AO-Maps aus Base Color;
- kein Texture Creator / Map Generator;
- kein Export, Download, Zip, Paket oder Asset-Handoff;
- keine Speicherung in Library, Cloud oder Projekt-Persistenz;
- kein Batch-Import;
- keine GLB-/Custom-Model-Imports;
- keine Sprite-, Atlas-, Rig-, Skeleton- oder Animation-Authority;
- keine DF-05–DF-09-Änderung;
- kein neues dediziertes Texture-Lab-Icon;
- keine Main-Integration.

## Vermutete Implementierungsfläche

Der Implementation-Gate soll klein bleiben. Erwartete Dateien:

- `tools/texture-lab/index.html`
- `tools/texture-lab/README.md`, falls die Tool-Doku nachgezogen werden muss
- Status-/Roadmap-Doku, falls der Gate danach verifiziert/frozen wird

Keine Änderung an `main.js`, solange die Hub-Registrierung unverändert bleibt.

## Acceptance Gate

Der nächste Implementierungs-/Verifikationsblock ist erst bestanden, wenn mindestens diese Nachweise vorliegen:

1. Texture Lab öffnet auf iPhone Safari aus dem Hub.
2. Base Color laden zeigt Dateiname, Pixelgröße und Dateigröße.
3. Mindestens eine zusätzliche Map lädt in ihrem eigenen Slot und zeigt Dateiname, Pixelgröße und Dateigröße.
4. Preview rendert nach Base Color plus Zusatz-Map sichtbar weiter.
5. Fläche, Würfel und Kugel funktionieren weiterhin.
6. Gemeinsame Transform-Parameter verändern die sichtbare Map-Ausrichtung.
7. Fehlende Zusatz-Maps blockieren Base Color nicht.
8. Kein Generator-, Export- oder Handoff-UI ist sichtbar.

## Implementation / Verification

Implementation Commit:
`060793be662a9fa33e0fb6508c855226b52b1c89`

Statische Verification:
`PASS`

Details:
`docs/TEXTURE_LAB_MULTI_MAP_PREVIEW_IMPLEMENTATION_VERIFICATION.md`

## Nächster zulässiger Schritt

Ausschließlich ein separater **Texture Lab – Multi Map Preview Device Evidence Gate** gegen den aktuellen Branch-Head.

Der aktualisierte Pages/Testbuild muss auf iPhone Safari hart neu geladen und mit Base Color plus mindestens einer zusätzlichen Map geprüft werden. Main-Integration bleibt bis nach erfolgreicher Device-Evidence zurückgestellt.
