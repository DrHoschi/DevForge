# Texture Lab – Multi Map Preview Implementation / Verification

Stand: 2026-10-13

Status:
`IMPLEMENTED / STATIC VERIFICATION PASS / DEVICE EVIDENCE PENDING`

Branch:
`feature/texture-lab-minimal-v1`

Scope Authorization Baseline:
`bc506a0b6ed155c617a23e7578eecc28390edfe2`

Implementation Commit:
`060793be662a9fa33e0fb6508c855226b52b1c89`

## Implementierter Scope

Texture Lab wurde vom reinen Base-Color-Tester zu einem Multi-Map-Preview-Tester erweitert:

- Base Color bleibt als bestehender Drop-/File-Flow erhalten;
- zusätzliche lokale Slots für Normal, Roughness, Metalness und AO;
- alle Slots akzeptieren PNG, JPG, JPEG und WebP;
- MIME-Prüfung bleibt iOS-tauglich mit Dateiendungs-Fallback;
- pro geladenem Slot zeigt der Readout Dateiname, Pixelgröße, MIME-Info und Dateigröße;
- geladene Maps werden gemeinsam auf `MeshStandardMaterial` angewendet;
- Prüfkörper bleiben Fläche, Würfel und Kugel;
- Repeat, Rotation und Offset werden synchron auf alle geladenen Texturen angewendet;
- AO-fähige UV2-Daten werden für die Prüfkörper gesetzt;
- Three.js und OrbitControls bleiben dynamische Browser-Imports;
- Engine- und Texture-Fehler bleiben sichtbar im Readout.

## Nicht implementiert

Bewusst nicht enthalten:

- keine Normal-/Roughness-/Metalness-/AO-Erzeugung aus Base Color;
- kein Texture Creator / Map Generator;
- kein Export, Download, Zip oder Asset-Handoff;
- keine Projekt-/Cloud-/Library-Persistenz;
- kein dediziertes Texture-Lab-Icon;
- keine `main`-Integration;
- keine DF-05–DF-09-Änderung.

## Statische Verification

Statisch geprüft:

| Check | Ergebnis |
| --- | --- |
| Script-Syntax parsebar | PASS |
| Base-Color-Slot vorhanden | PASS |
| Normal-Slot und `normalMap`-Zuweisung vorhanden | PASS |
| Roughness-Slot und `roughnessMap`-Zuweisung vorhanden | PASS |
| Metalness-Slot und `metalnessMap`-Zuweisung vorhanden | PASS |
| AO-Slot, `aoMap` und UV2-Ergänzung vorhanden | PASS |
| Dateiendungs-Fallback für iOS-MIME vorhanden | PASS |
| Readout nutzt Dateiname, Pixelgröße und Dateigröße | PASS |
| Dynamischer Three-/OrbitControls-Import erhalten | PASS |
| Keine Generator-/Export-/Handoff-UI ergänzt | PASS |

## Device Evidence Status

Noch offen:

- Pages/Testbuild aktualisieren;
- iPhone Safari hart neu laden;
- Base Color laden;
- mindestens eine zusätzliche Map laden;
- Readout pro Slot prüfen;
- Preview auf Fläche, Würfel und Kugel prüfen;
- Transform-Parameter sichtbar prüfen.

## Nächster zulässiger Schritt

Ausschließlich ein separater **Texture Lab – Multi Map Preview Device Evidence Gate** gegen den aktuellen Branch-Head.

Erst nach realer iPhone-Safari-Evidence darf ein Freeze- oder Main-Integration-Gate vorbereitet werden.
