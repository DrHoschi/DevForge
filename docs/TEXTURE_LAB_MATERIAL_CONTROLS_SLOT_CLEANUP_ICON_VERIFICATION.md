# Texture Lab – Material Controls / Slot Cleanup + Icon Verification

Stand: 2026-10-14

Status:
`IMPLEMENTED / STATIC VERIFICATION PASS / DEVICE EVIDENCE PENDING`

Branch:
`feature/texture-lab-minimal-v1`

Baseline:
`157a520d3dfbd6f129a67199f805da237f935489`

Implementation Commits:
- Hub icon wiring: `3af4e8086d3b4ed9a28eeb9e6348f80d833988c7`
- Material controls / slot cleanup: `0c1e35010bfd3d4f056ce6bed9799657eb4dee0f`

Icon Asset:
`assets/tool-icons/texture-lab.png`

## Implementierter Scope

Texture Lab bleibt ein lokaler Texture Tester. Ergänzt wurden ausschließlich Bedien- und Preview-Funktionen:

- eigenes Texture-Lab-Tool-Icon im Hub;
- Texture-Lab-Icon im Tool-Header;
- Map entfernen pro Slot;
- Slot aktiv/deaktiv pro Slot;
- Normal Strength;
- AO Intensity;
- Roughness-Basiswert, wenn keine aktive Roughness Map wirkt;
- Metalness-Basiswert, wenn keine aktive Metalness Map wirkt.

## Nicht-Ziele

Bewusst nicht enthalten:

- keine Map-Erzeugung;
- kein Texture Creator / Map Generator;
- kein Export, Download, Zip oder Asset-Handoff;
- keine Projekt-/Cloud-/Library-Persistenz;
- kein GLB-/Custom-Model-Import;
- keine DF-05–DF-09-Änderung;
- keine Main-Integration.

## Statische Verification

| Check | Ergebnis |
| --- | --- |
| `texture-lab.png` im Tool-Icon-Verzeichnis vorhanden | PASS |
| Hub-Registry nutzt `icon:'texture-lab'` | PASS |
| Tool-Header referenziert `../../assets/tool-icons/texture-lab.png` | PASS |
| Script-Syntax parsebar | PASS |
| Map entfernen für Base Color, Normal, Roughness, Metalness, AO vorhanden | PASS |
| Aktiv/Deaktiv-Toggle für Base Color, Normal, Roughness, Metalness, AO vorhanden | PASS |
| Normal Strength vorhanden | PASS |
| AO Intensity vorhanden | PASS |
| Roughness-Basiswert vorhanden | PASS |
| Metalness-Basiswert vorhanden | PASS |
| Keine Export-/Creator-Funktion ergänzt | PASS |

## Device Evidence Status

Noch offen:

1. Pages/Testbuild aktualisieren.
2. iPhone Safari hart neu laden.
3. Texture Lab aus dem Hub öffnen.
4. Prüfen, ob das neue Texture-Lab-Icon im Hub sichtbar ist.
5. Prüfen, ob das Icon im Texture-Lab-Header sichtbar ist.
6. Base Color laden.
7. Mindestens eine Zusatz-Map laden.
8. Slot deaktivieren/aktivieren.
9. Map entfernen.
10. Normal Strength, AO Intensity, Roughness Basis und Metalness Basis sichtbar verändern.
11. Preview auf Fläche, Würfel und Kugel prüfen.

## Nächster zulässiger Schritt

Ausschließlich ein separater **Texture Lab – Material Controls / Slot Cleanup + Icon Device Evidence Gate** gegen den aktuellen Branch-Head.

Keine Main-Integration vor erfolgreicher Device-Evidence.
