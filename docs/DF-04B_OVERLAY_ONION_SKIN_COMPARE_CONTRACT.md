# DF-04B – Overlay / Onion-Skin Compare Foundation – Contract

Stand: 2026-09-07
Status: CONTRACT DEFINED – IMPLEMENTATION NOT AUTHORIZED
Baseline: eingefrorener `DF-04A – Source / Result Compare View` Stand

## 1. Zweck
DF-04B erweitert den in DF-04A eingefrorenen manuellen Source-/Result-Vergleich um genau eine zusätzliche visuelle Prüfmöglichkeit: Source / Control und Result werden in einer gemeinsamen Vergleichsfläche deckungsgleich übereinander dargestellt und können manuell überblendet werden.

Der Block dient ausschließlich der visuellen menschlichen Prüfung von Abweichungen. Er führt keine automatische Bewertung ein.

## 2. Verbindliche Baseline / Grenze zu DF-04A
DF-04A bleibt vollständig autoritativ und unverändert für:
- zwei getrennte lokale Bildslots;
- Rollen `Source / Control` und `Result`;
- unabhängiges Laden und Ersetzen der beiden Bilder;
- proportionale, vollständige Darstellung ohne Cropping oder Stretching;
- normale Side-by-Side- bzw. responsive Top/Bottom-Vergleichsansicht.

DF-04B darf diese DF-04A-Funktionen nicht ersetzen oder semantisch verändern. Der Overlay-Modus ist eine zusätzliche Review-Ansicht auf denselben bereits geladenen Source-/Result-Daten.

## 3. Scope DF-04B
DF-04B implementiert ausschließlich:
- einen klaren Wechsel zwischen der eingefrorenen DF-04A-Basisansicht und einem Overlay-/Onion-Skin-Modus;
- eine gemeinsame Overlay-Vergleichsfläche für Source / Control und Result;
- beide Bilder werden innerhalb derselben Vergleichsfläche nach derselben Fit-Regel proportional und vollständig dargestellt;
- definierte Layer-Reihenfolge: Source / Control als Basis, Result darüber;
- einen manuellen Blend-/Opacity-Regler für die Sichtbarkeit des Result-Layers;
- eindeutige Endpunkte des Reglers, sodass Source und Result gezielt visuell priorisiert werden können;
- Rückkehr zur normalen DF-04A-Vergleichsansicht ohne Verlust der geladenen Bilder;
- responsive Bedienbarkeit auf iPhone/iPad/Safari;
- sichtbare DF-04B-Build-Kennung und Cache-Busting für den Testbuild.

## 4. Alignment-Regel in DF-04B
DF-04B führt keine intelligente oder automatische Registrierung ein.

Für den Overlay-Modus gilt ausschließlich eine deterministische gemeinsame Darstellungsfläche mit identischer Fit-/Center-Regel für beide Bilder. Unterschiedliche natürliche Bildgrößen, Motivausschnitte oder intern abweichende Motivpositionen werden nicht automatisch korrigiert.

Das Overlay macht solche Abweichungen sichtbar; es versucht nicht, sie zu beheben.

## 5. Explizite Nicht-Ziele
Nicht Teil von DF-04B sind:
- Difference View / Pixel-Difference / Heatmap;
- automatische Bildregistrierung;
- automatische Translation, Rotation oder Skalierung zur Motiv-Ausrichtung;
- manuelle Alignment-Offsets oder Transform-Werkzeuge;
- synchrones Pan/Zoom;
- Pose-/Skeleton-Scoring;
- KI-Auswertung;
- automatische PASS/FAIL-Entscheidung;
- Persistenz / Asset Library;
- Review-Notizen / Approve / Reject;
- technische Alpha-/Bounds-/Scale-Prüfung;
- Atlas-Funktionen;
- Änderungen am DF-02F-Generation-Handoff oder Prompt Builder.

## 6. PASS-Kriterien
DF-04B kann erst PASS werden, wenn auf einem realen Zielgerät bestätigt ist:
1. Die eingefrorene DF-04A-Basisansicht funktioniert unverändert weiter.
2. Mit zwei geladenen Bildern kann in den Overlay-Modus gewechselt werden.
3. Source / Control und Result erscheinen gleichzeitig in derselben Vergleichsfläche.
4. Beide Layer verwenden dieselbe deterministische Fit-/Center-Regel und werden nicht gestreckt.
5. Der Blend-/Opacity-Regler verändert ausschließlich die visuelle Mischung der beiden Layer.
6. Die Regler-Endpunkte erlauben eine klare visuelle Priorisierung von Source bzw. Result.
7. Der Wechsel zurück zur DF-04A-Basisansicht verliert oder ersetzt keines der geladenen Bilder.
8. Der Modus ist auf iPhone/iPad/Safari sinnvoll bedienbar.
9. Keine ausgeschlossene Difference-, Alignment-, Scoring-, Persistenz- oder Atlas-Funktion wurde vorgezogen.

## 7. Folgegrenze
Ein möglicher Folgeblock ist frühestens:
`DF-04C – Difference / Alignment Foundation`

DF-04C ist nicht automatisch freigegeben. Erst die reale DF-04B-Geräteerfahrung soll zeigen, ob und welche Difference-/Alignment-Funktionen tatsächlich benötigt werden.

## 8. Branch-/Implementierungsregel
Dieser Contract wird zunächst auf dem eingefrorenen DF-04A-Stand dokumentiert. Dabei wird noch kein DF-04B-Entwicklungsbranch angelegt und keine Produktionslogik geändert.

Erst nach PASS des Dokumentations-/Roadmap-Reconciliation-Gates darf ein separater DF-04B-Branch exakt von der dann festgelegten reconciliierten DF-04A-Baseline erstellt werden.
