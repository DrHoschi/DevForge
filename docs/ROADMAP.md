# DevForge – Master Roadmap & Entwicklungsgrenzen

Stand: 2026-10-09

## 1. Vision
DevForge ist eine projektübergreifende Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets und ein Hub für eigenständige Entwicklungswerkzeuge. Neue Funktionen werden in kleinen überprüfbaren Blöcken aus realen Produktionsproblemen entwickelt.

## 2. Aktuelle Repository-Authority
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Texture Lab Scope Baseline: `d270bb80834eb285de776733dffedab3d28efb8c`
- Texture Lab Minimal V1 Implementation Baseline: `203b6c3ab9697d5f9243fde2af0d315227f55f7b`
- Texture Lab Testbuild Branch: `feature/texture-lab-minimal-v1`
- GitHub bleibt Source of Truth.
- Eingefrorene Contracts und Produktblöcke werden nicht durch Roadmap-Pflege neu geöffnet.

## 3. Frozen Core Authority Chain
- DF-04A–F: Review Foundation — `PASS / FROZEN`
- DF-HUB-01: Tool Hub Authority — `PASS / FROZEN`
- DF-05: Controlled Asset Handoff — `PASS / 0 BLOCKER / FROZEN`, Product Commit `c677f07773866dfe8f5c98dcb311ab1750538d9c`
- DF-06: Target Project Handoff Profile — `PASS / 0 BLOCKER / FROZEN`, Product Commit `a33a48e07b1e88c8c4a57f3e4418eed16e22d0ec`
- DF-07: Source Asset Approval Authority — `PASS / 0 BLOCKER / FROZEN`, Product Commit `81e9fc42cf00a04e3f7fd89271b50f9ec44a1a3e`
- DF-08: Source Asset Payload Binding — `PASS / 0 BLOCKER / FROZEN`, Product Commit `2c08b275f999f7467d5eb62a17515f39283b1f25`
- DF-09: Source Asset Payload Fingerprint — `DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`

DF-05 bleibt Eligibility-/Manifest-Autorität, DF-06 Target-Project-Profile-Autorität, DF-07 Approval-Autorität und DF-08 Payload-/Identity-Binding-Autorität. DF-09 darf diese Grenzen nicht neu definieren.

## 4. Seit dem alten Roadmap-Stand integrierte Frozen Blöcke
Der frühere Roadmap-Stand vom 2026-09-12 bildete die inzwischen integrierte Entwicklung nicht mehr vollständig ab. Auf dem reconcilierten `main` sind zusätzlich dokumentiert:

- Main Consolidation — `PASS / FROZEN`
- Visual Direction — `PASS / 0 BLOCKER / FROZEN`
- DevForge Hero Branding — `PASS / 0 BLOCKER / FROZEN`
- DevForge Amboss Header — `PASS / 0 BLOCKER / FROZEN`
- DevForge Category Cards — `PASS / 0 BLOCKER / FROZEN`
- DevForge Category Identity Icons — `PASS / 0 BLOCKER / FROZEN`
- DevForge Hub Authority Metadata — `PASS / 0 BLOCKER / FROZEN`
- Tool Identity Icons — `PASS / 0 BLOCKER / FROZEN`
- Sprite Lab Asset Contract / Persistence — `PASS WITH DEVICE LIMITATION / FROZEN`
- DevForge Industry Tools — `PASS / 0 BLOCKER / FROZEN`

Diese Einträge sind Statusabgleich, keine neue Autorisierung.

## 5. Hub / Industry aktueller Stand
Der DevForge-Hub enthält auf `main` 12 Tool-/Produkt-Einträge. Der Texture-Lab-Testbuild-Branch registriert zusätzlich Texture Lab und umfasst dort 13 Registry-Einträge. Industry enthält genau zwei eigenständige externe Produkte:

- Virtual Baustellenplaner — `EXTERNAL PRODUCT` / `PLANNING / SITE WORKFLOW`
- CyberMotion 3D Web Designer — `EXTERNAL PRODUCT` / `3D DESIGN / ENGINEERING`

Beide besitzen eigene Produkt-Authority außerhalb von DevForge. DevForge registriert und startet sie, dupliziert aber weder ihren Produktcode noch ihren Produktstatus.

Industry Tools sind vollständig integriert und `FROZEN`. Completion-/Evidence-Dokument: `docs/DEVFORGE_INDUSTRY_TOOLS_COMPLETION_EVIDENCE_FREEZE.md`.

## 6. DF-09 – definierter Core-Capability-Kandidat
Contract: `docs/DF-09_SOURCE_ASSET_PAYLOAD_FINGERPRINT_FOUNDATION_CONTRACT.md`

Status:
`DEFINED / IMPLEMENTATION SCOPE RECONCILED / NOT IMPLEMENTED`

Definition baseline / Frozen DF-08 Product Commit:
`2c08b275f999f7467d5eb62a17515f39283b1f25`

Fachlicher Übergang:
`EXPLICITLY BOUND LOCAL PAYLOAD + DECLARED IDENTITY → DETERMINISTIC PAYLOAD FINGERPRINT → IDENTITY-BOUND PAYLOAD PROOF`

Der reconciled TESTBUILD-1-Scope bleibt exakt:
- `tools/asset-handoff/index.html`
- `tools/asset-handoff/app.js`

Vorgesehen sind ausschließlich SHA-256 über die Bytes des bereits nach DF-08 gebundenen Payloads, ein minimaler Fingerprint Record und die definierte Validierung/Invalidierung bei Payload-, Identity- oder Binding-Wechsel.

Keine neue Hub-Tür, kein `main.js`, kein Root-`index.html`, kein Upload/Repository-Transfer, kein Runtime-Handoff, kein Manifest-Schema-Upgrade und keine Änderung der DF-05–08-Authorities.

DF-09 bleibt ein gültiger Core-Capability-Kandidat, ist aber nach der aktuellen Produktpriorisierung nicht der nächste ausgewählte Produktblock.

## 7. Texture Lab – Minimal V1 Testbuild
Scope-Dokument:
`docs/TEXTURE_LAB_PRODUCT_PRIORITY_MINIMAL_V1_SCOPE.md`

Status:
`IMPLEMENTED / TESTBUILD / VERIFICATION PENDING`

Branch:
`feature/texture-lab-minimal-v1`

Aktueller vorbereiteter Verification-Head vor Roadmap-Korrektur:
`937df35ae0d76356254ab47a8fe3ea5209321441`

Texture Lab Minimal V1 ist als isolierter Texture Tester implementiert, weil es einen unmittelbar sichtbaren Produktionsschritt abdeckt: Texturen und Materialquellen sollen vor Verwendung in Assets, importierten Modellen oder Zielprojekten schnell geprüft werden können.

Minimal V1 kann:

- lokale Bilddateien laden: PNG, JPG/JPEG, WebP soweit browserseitig verfügbar;
- Base-Color-/Diffuse-Textur auf Fläche, Würfel und Kugel anzeigen;
- Repeat/Kachelung, Scale, Rotation, Offset und Alpha prüfen;
- einfache Licht-/Preview-Kontrolle bereitstellen;
- Map-Slots für spätere Material-Maps höchstens vorbereiten, aber nicht automatisch erzeugen.

Harte V1-Grenzen:

- keine KI-Textur-Generierung;
- keine automatische Normal-/Roughness-/Metalness-/AO-Erzeugung;
- kein Prompt-basierter Texture Creator;
- keine persistente Library;
- kein Repository-/Runtime-Handoff;
- keine Änderung an DF-05–DF-09;
- keine Sprite-, Atlas-, Character-Layer-, Rig-, Skeleton- oder Animation-Authority.

Ein späterer Texture Creator bleibt ein separater Folgeblock und darf erst nach bewährtem Texture Tester neu autorisiert werden.

## 8. Weitere offene Produktbereiche
### Sprite Lab
Der Frozen Asset Contract / Persistence schließt Layer/Z-Order, Rig/Skeleton, GLB/LOD/Collision und weitere spätere Capabilities ausdrücklich aus. Marker/Sockets-Folgeblöcke sind bereits separat dokumentiert und eröffnen keinen bestehenden Freeze automatisch neu. Der bekannte native Dateiinput-Anzeigepunkt bleibt `KNOWN UI ISSUE / NON-BLOCKING`; die iPad-Persistence-Wiederholung bleibt eine dokumentierte Device Limitation.

### Visual / Hub Polish
Kleinere visuelle oder textliche Follow-ups bleiben möglich, soweit sie in Freeze-Dokumenten ausdrücklich als non-blocking festgehalten wurden. Sie eröffnen keinen bestehenden Freeze automatisch neu.

### Spätere Core-Grenzen
Repository-Dateiübertragung, Runtime-Handoff, persistente Asset-/Payload-/Fingerprint-Library, Batch-Workflows, Atlas-/Sprite-Produktion, Signaturen/PKI und Formatkonvertierung bleiben separate spätere Blöcke.

## 9. Prioritätsgrenze
Die aktuelle Prioritätsentscheidung wählt Texture Lab Minimal V1 als nächsten praktischen Produktkandidaten aus.

Diese Entscheidung verändert keine Frozen Contracts. DF-09 bleibt definiert und kann später separat implementiert werden, wenn sein technischer Nachweisnutzen wieder priorisiert wird.

## 10. Arbeitsweise
Kleine Blöcke, Exact-Head-/Baseline-Nachweis, getrennte Definition/Authorization/Implementation/Verification/Freeze/Integration-Gates, reale Device-Evidence bei produktiven UI-/Code-Blöcken und explizite Non-Goals bleiben verbindlich.

## 11. Nächster zulässiger Schritt
Ausschließlich ein separater **Texture Lab – Minimal V1 Verification / Evidence Gate** gegen `feature/texture-lab-minimal-v1`.

Vor Freeze erforderlich: Manual-Test-Deploy des Branches ausführen, Hub-Link öffnen, lokale PNG/JPG/WebP laden, Fläche/Würfel/Kugel prüfen, Transform-/Alpha-/Hintergrund-/Lichtregler sichtbar verifizieren und bestätigen, dass keine Generator-, Creator- oder Handoff-Funktion angeboten wird.
