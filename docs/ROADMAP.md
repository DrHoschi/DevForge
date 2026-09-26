# DevForge – Master Roadmap & Entwicklungsgrenzen

Stand: 2026-09-26

## 1. Vision
DevForge ist eine projektübergreifende Produktions-, Prüf- und Übergabeplattform für Entwicklungsassets und ein Hub für eigenständige Entwicklungswerkzeuge. Neue Funktionen werden in kleinen überprüfbaren Blöcken aus realen Produktionsproblemen entwickelt.

## 2. Aktuelle Repository-Authority
- Repository: `DrHoschi/DevForge`
- Default Branch: `main`
- Reconciled baseline vor diesem Dokumentationsupdate: `80a01b03ea649e007873e0859c16c68187ab4774`
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
Der DevForge-Hub enthält jetzt 12 Tool-/Produkt-Einträge. Industry enthält genau zwei eigenständige externe Produkte:

- Virtual Baustellenplaner — `EXTERNAL PRODUCT` / `PLANNING / SITE WORKFLOW`
- CyberMotion 3D Web Designer — `EXTERNAL PRODUCT` / `3D DESIGN / ENGINEERING`

Beide besitzen eigene Produkt-Authority außerhalb von DevForge. DevForge registriert und startet sie, dupliziert aber weder ihren Produktcode noch ihren Produktstatus.

Industry Tools sind auf dem reconcilierten Stand vollständig integriert und `FROZEN`. Completion-/Evidence-Dokument: `docs/DEVFORGE_INDUSTRY_TOOLS_COMPLETION_EVIDENCE_FREEZE.md`.

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

DF-09 ist damit der **bereits vollständig definierte nächste Core-Capability-Kandidat**. Diese Roadmap-Reconciliation legt jedoch ausdrücklich **keine globale Produktpriorität** gegenüber anderen offenen Produktbereichen fest.

## 7. Weitere offene Produktbereiche
### Sprite Lab
Der Frozen Asset Contract / Persistence schließt Marker/Sockets, Layer/Z-Order, Rig/Skeleton, GLB/LOD/Collision und weitere spätere Capabilities ausdrücklich aus. Diese bleiben mögliche separate Folgeblöcke. Der bekannte native Dateiinput-Anzeigepunkt bleibt `KNOWN UI ISSUE / NON-BLOCKING`; die iPad-Persistence-Wiederholung bleibt eine dokumentierte Device Limitation.

### Visual / Hub Polish
Kleinere visuelle oder textliche Follow-ups bleiben möglich, soweit sie in Freeze-Dokumenten ausdrücklich als non-blocking festgehalten wurden. Sie eröffnen keinen bestehenden Freeze automatisch neu.

### Spätere Core-Grenzen
Repository-Dateiübertragung, Runtime-Handoff, persistente Asset-/Payload-/Fingerprint-Library, Batch-Workflows, Atlas-/Sprite-Produktion, Signaturen/PKI und Formatkonvertierung bleiben separate spätere Blöcke.

## 8. Prioritätsgrenze
Aus dem dokumentierten Status allein folgt nicht, dass DF-09 gegenüber allen anderen offenen DevForge-, Sprite-Lab- oder externen Produktarbeiten den größten praktischen Nutzen besitzt.

Vor neuer Implementation ist daher eine separate Prioritätsentscheidung zulässig, die reale Einsatzbedürfnisse gegen die bereits definierten offenen Capabilities abgleicht. Diese Entscheidung darf Frozen Contracts nicht still verändern.

## 9. Arbeitsweise
Kleine Blöcke, Exact-Head-/Baseline-Nachweis, getrennte Definition/Authorization/Implementation/Verification/Freeze/Integration-Gates, reale Device-Evidence bei produktiven UI-/Code-Blöcken und explizite Non-Goals bleiben verbindlich.

## 10. Nächster zulässiger Schritt
Nach Abschluss dieser reinen Dokumentations-Reconciliation ist der nächste fachliche Schritt **noch nicht automatisch DF-09 Implementation**.

Zulässig ist zunächst ein separater **Open Capability / Product Priority Reconciliation** gegen den dann aktuellen `main`, um DF-09 und die übrigen tatsächlich offenen Produktbereiche nach aktuellem Einsatznutzen einzuordnen.

Falls dabei DF-09 ausgewählt wird, bleibt dessen nächster eigener Gate ausschließlich die separate Autorisierung/Anlage eines DF-09-Entwicklungsbranches gegen den bereits reconcilierten Scope. Noch keine Implementation im selben Schritt.
