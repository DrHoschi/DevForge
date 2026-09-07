# DF-04C – Manual Alignment Foundation – Contract

Stand: 2026-09-07
Status: CONTRACT DEFINED – IMPLEMENTATION NOT AUTHORIZED
Baseline: eingefrorener `DF-04B – Overlay / Onion-Skin Compare Foundation` Stand

## 1. Zweck
DF-04C erweitert den eingefrorenen DF-04B-Overlay-Vergleich um eine bewusst kleine manuelle Ausrichtung des Result-Layers. Ziel ist, reine Lage- und Größenabweichungen zwischen Source / Control und Result von tatsächlichen Pose-, Silhouetten- oder Formabweichungen besser trennen zu können.

DF-04C führt noch keine Difference-Berechnung und keine automatische Ausrichtung ein.

## 2. Verbindliche Baseline / Grenze zu DF-04B
DF-04B bleibt vollständig autoritativ und unverändert für:
- die DF-04A-Basisvergleichsansicht;
- Source-/Control- und Result-Slots;
- unabhängiges Laden und Ersetzen der Bilder;
- den Overlay-/Onion-Skin-Modus;
- Source als Basis-Layer und Result als Overlay-Layer;
- die gemeinsame deterministische Fit-/Center-Regel im neutralen Zustand;
- den 0–100-%-Blend-/Opacity-Regler;
- den Erhalt geladener Bilder beim Wechsel der Ansichten;
- responsive iPhone/iPad/Safari-Bedienbarkeit.

DF-04C darf diese Funktionen nicht ersetzen oder semantisch umbauen. Die manuelle Ausrichtung wirkt ausschließlich auf den Result-Layer innerhalb des Overlay-Modus.

## 3. Scope DF-04C
DF-04C implementiert ausschließlich:
- horizontale manuelle Verschiebung des Result-Layers (`X`);
- vertikale manuelle Verschiebung des Result-Layers (`Y`);
- einheitliche proportionale Skalierung des Result-Layers (`Scale`);
- klar sichtbare aktuelle X-/Y-/Scale-Werte;
- `Reset Alignment`, das X, Y und Scale deterministisch auf den neutralen DF-04B-Zustand zurücksetzt;
- unmittelbare visuelle Aktualisierung des Result-Layers bei Änderung der Alignment-Werte;
- Beibehaltung des bestehenden DF-04B-Blend-Reglers während der manuellen Ausrichtung;
- responsive und touch-taugliche Bedienbarkeit auf iPhone/iPad/Safari;
- sichtbare DF-04C-Build-Kennung und Cache-Busting für den Testbuild.

## 4. Transformationsregel
Source / Control bleibt im Overlay vollständig unbeweglich und bildet die autoritative visuelle Referenz.

Nur Result darf transformiert werden.

Zulässige Transformationen:
- Translation X;
- Translation Y;
- uniforme Skalierung.

Scale muss das Seitenverhältnis des Result-Layers erhalten. X/Y/Scale verändern weder die zugrunde liegende Bilddatei noch den Source-Layer.

Der neutrale Alignment-Zustand entspricht exakt der eingefrorenen DF-04B-Darstellung.

## 5. Zustandsgrenze
Alignment-Werte sind in DF-04C ausschließlich temporärer Review-Zustand der aktuell geöffneten Seite.

Sie werden nicht:
- in eine Asset Library geschrieben;
- als Preset gespeichert;
- in Projektdateien persistiert;
- auf andere Assets übertragen;
- als automatische Korrektur des Result-Bildes exportiert.

Beim `Reset Alignment` muss jederzeit der unveränderte DF-04B-Neutralzustand reproduzierbar wiederhergestellt werden können.

## 6. Explizite Nicht-Ziele
Nicht Teil von DF-04C sind:
- Rotation;
- Perspective / Warp / Skew;
- nicht-uniforme X-/Y-Skalierung;
- Crop-Werkzeuge;
- automatische Registrierung;
- automatische Best-Fit-Suche;
- Feature-/Landmark-Erkennung;
- Pixel-Difference / Difference View / Heatmap;
- Difference-Scoring;
- Pose-/Skeleton-Scoring;
- KI-Auswertung;
- automatische PASS/FAIL-Entscheidung;
- synchrones Pan/Zoom;
- Persistenz / Asset Library;
- gespeicherte Alignment-Profile;
- Review-Notizen / Approve / Reject;
- Atlas-Funktionen;
- Änderungen am DF-02F-Generation-Handoff oder Prompt Builder.

## 7. PASS-Kriterien
DF-04C kann erst PASS werden, wenn auf einem realen Zielgerät bestätigt ist:
1. Die eingefrorenen DF-04A- und DF-04B-Funktionen funktionieren unverändert weiter.
2. Source / Control bleibt bei allen Alignment-Änderungen visuell unverändert.
3. X verschiebt ausschließlich Result horizontal.
4. Y verschiebt ausschließlich Result vertikal.
5. Scale skaliert ausschließlich Result proportional.
6. X, Y und Scale können kombiniert verwendet werden, ohne den Overlay-Modus oder Blend-Regler zu zerstören.
7. Blend 0–100 % bleibt auch bei verändertem Alignment funktionsfähig.
8. `Reset Alignment` stellt deterministisch den neutralen DF-04B-Zustand wieder her.
9. Der Wechsel zurück zum Basisvergleich verliert oder verändert die geladenen Source-/Result-Bilder nicht.
10. Die Alignment-Bedienung ist auf iPhone/iPad/Safari sinnvoll nutzbar.
11. Keine ausgeschlossene Difference-, Auto-Alignment-, Scoring-, Persistenz- oder Atlas-Funktion wurde vorgezogen.

## 8. Folgegrenze
Ein möglicher Folgeblock ist frühestens:
`DF-04D – Difference View Foundation`

DF-04D ist nicht automatisch freigegeben. Erst die reale DF-04C-Geräteerfahrung soll zeigen, ob der manuell ausgerichtete Overlay-Vergleich eine Difference-Ansicht tatsächlich sinnvoll und ausreichend definiert macht.

## 9. Branch-/Implementierungsregel
Dieser Contract wird zunächst auf dem eingefrorenen DF-04B-Stand dokumentiert. Dabei wird noch kein DF-04C-Entwicklungsbranch angelegt und keine Produktionslogik geändert.

Erst nach PASS des DF-04C Contract / Roadmap Reconciliation Gates darf ein separater DF-04C-Branch exakt von der dann festgelegten reconciliierten DF-04B-Baseline erstellt werden.
