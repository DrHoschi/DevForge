# DevForge – Roadmap & Entwicklungsgrenzen

Stand: 2026-09-05

## Leitidee
DevForge wird schrittweise anhand realer Produktionsprobleme erweitert. Keine große theoretische All-in-one-Lösung vorbauen. Jeder neue Block muss ein konkret beobachtetes Problem lösen und darf bestehende funktionierende Verträge nicht unnötig verändern.

## Aktuelle Phase – Character Animation Production Contract

### DF-02D.2 – Identity & Render Lock Reinforcement
Status: `IMPLEMENTED / TEST PENDING`

Ziel: Die in DF-02D.1 funktionierende Pose-Freiheit beibehalten, gleichzeitig aber Identity/Render/Kamera/Scale/Root strikt stabilisieren.

Unmittelbarer Gate-Test: `Carrier → WALK → SE → FR3 / Passing L` gegen freigegebenes FR2.

PASS nur wenn:
- Passing-L-Pose sichtbar korrekt ist,
- Character Identity stabil bleibt,
- Anatomie/Proportionen stabil bleiben,
- Rucksack/Kleidung/Materialien stabil bleiben,
- Renderstil/Licht stabil bleiben,
- 45° Kamera/SE-Richtung stabil bleiben,
- Scale und Bottom-Center/Root stabil bleiben,
- echtes Alpha erhalten bleibt.

Bei FAIL wird ausschließlich die konkret fehlerhafte Contract-Seite nachgeschärft. Keine Fortsetzung zu FR4 mit einem nicht freigegebenen FR3.

## Danach – WALK/SE Completion
Wenn FR3 PASS ist:
- FR4 – R Up
- FR5 – R Contact [KEY POSE]
- FR6 – R Down
- FR7 – Passing R [KEY POSE]
- FR8 – L Up

Jeder Frame wird einzeln geprüft und nur bei PASS als Previous Approved Frame weitergegeben.

Anschließend: vollständige 8-Frame-Sequenz im Animation Tester laden und bei 8 FPS als Loop prüfen. Onion-Skin, Bottom-Center-Anchor, Silhouettenwechsel, Größen-/Kamerasprünge und Loop FR8→FR1 bewerten.

## Nächster Skalierungsschritt
Erst nach vollständigem WALK/SE PASS:
- übrige 7 Richtungen produzieren,
- Direction-Vertrag und Symmetrie/Asymmetrie prüfen,
- erst danach automatisierte Batch-Erzeugung priorisieren.

## DF-03 – Animation Atlas Contract
Bereits fachlich vorbereitet. Verbindliche Grundidee:
- Direction-Reihenfolge: N, NE, E, SE, S, SW, W, NW
- chronologische Frame-Reihenfolge
- feste Zellen/Benennung/Metadaten
- gemeinsamer Bottom-Center-Anchor
- Einzel-PNGs bleiben Source of Truth bis zur Freigabe
- Character-Animation bleibt getrennt von Ressourcen/Waren/Werkzeugen

Der Atlas wird erst nach erfolgreichem Source-Frame-Review produktiv gebaut.

## Spätere DevForge-Blöcke

### Asset Library / Project Presets
- Character-Datensätze mit Authoritative References
- Buildings
- Resources
- Icons
- Environment Assets
- projektbezogene Style-/Camera-/Output-Contracts

### Generation Packages
- Single Frame
- Direction Batch
- Full Animation Batch
- später vollständige Character Packages

### Animation Review
- Repository Manifest laden
- Frame Approve/Reject Status
- Review-Notizen
- optional automatischer Delta-/Anchor-/Scale-Vergleich
- später direkter Staging-Commit freigegebener Frames

### Atlas / Runtime Handoff
- freigegebene Frames deterministisch atlasieren
- JSON-Metadaten erzeugen
- Runtime-Pfade/Import vorbereiten

### Weitere Asset-Arten
DevForge bleibt allgemein. Die gleiche Grundarchitektur soll später auch für Gebäude, Ressourcen und Icons dienen: Authoritative Reference + projektbezogene Contracts + Preview/Review + strukturierter Export.

## Nicht vorziehen
Solange WALK/SE nicht belastbar ist, nicht parallel anfangen mit:
- allen acht Richtungen,
- vielen weiteren Character-Animationen,
- komplexer Carry/Attachment-Engine,
- automatischer Generierungs-API,
- automatischem finalem Atlas-Packing,
- großer allgemeiner Asset-Datenbank.

## Git-Arbeitsweise
- kleine, klar benannte DF-Branches
- ein beobachtetes Problem pro Fix-Block
- sichtbare Build-Kennung im Tool
- Cache-Busting bei JavaScript-Änderungen, besonders wegen iPhone/Safari
- PASS/FAIL vor Fortsetzung dokumentieren
- historische PRs/Branches später in einem eigenen Cleanup-/Freeze-Gate konsolidieren
