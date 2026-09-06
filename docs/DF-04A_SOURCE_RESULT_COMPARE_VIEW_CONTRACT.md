# DF-04A – Source / Result Compare View Contract

Stand: 2026-09-06

## Zweck
DF-04A ist der erste Block der `DF-04 – Asset Review Foundation`.

Ziel ist ausschließlich, eine autoritative Source-/Control-Referenz und das daraus entstandene Resultat gleichzeitig in einer stabilen, reproduzierbaren Vergleichsansicht darzustellen.

DF-04A bewertet noch nichts automatisch. Der Block schafft nur die verlässliche visuelle Vergleichsbasis für spätere Review-Funktionen.

## Baseline
- Repository: `DrHoschi/DevForge`
- Baseline-Commit: `64110d0bbdc6a78a959497f2a619d809e9038d66`
- Baseline-Stand: `DF-02F.6R.4 – Documentation / Status Reconciliation` PASS
- Entwicklungsbranch: `df-04a-source-result-compare-view`

## Rollen
### Source / Control
Die linke Seite zeigt die autoritative Referenz, gegen die geprüft werden soll.

Mögliche Beispiele:
- Character Reference
- Pose Control
- Geometry Control
- freigegebenes Source Asset
- andere autoritative Bildreferenz

DF-04A interpretiert die Bedeutung der Source noch nicht semantisch. Die Rolle wird lediglich eindeutig gekennzeichnet.

### Result
Die rechte Seite zeigt das erzeugte oder bearbeitete Ergebnis, das visuell gegen die Source / Control verglichen werden soll.

## Verbindlicher Funktionsumfang
DF-04A muss:
1. genau zwei Bildquellen separat laden können;
2. die Source / Control dauerhaft links anzeigen;
3. das Result dauerhaft rechts anzeigen;
4. beide Rollen sichtbar und eindeutig beschriften;
5. beide Bilder gleichzeitig darstellen;
6. eine stabile Vergleichsfläche verwenden, deren Layout nicht durch unterschiedliche Bildabmessungen unkontrolliert springt;
7. jedes Bild vollständig sichtbar machen, ohne es zu beschneiden;
8. bei erneutem Laden derselben beiden Bilder dieselbe grundlegende Vergleichsanordnung herstellen;
9. einen klaren leeren Zustand anzeigen, solange eine oder beide Bildquellen fehlen;
10. das Ersetzen einer einzelnen Seite erlauben, ohne die jeweils andere geladene Seite zu verlieren.

## Vergleichsgeometrie
DF-04A stellt noch keinen Pixel- oder Geometrievergleich her.

Verbindlich ist lediglich:
- gemeinsame horizontale Zwei-Spalten-Ansicht, sofern die verfügbare Breite das zulässt;
- auf schmalen Geräten darf responsiv untereinander dargestellt werden, ohne die Rollenreihenfolge zu ändern;
- Source / Control bleibt logisch zuerst bzw. links/oben;
- Result bleibt logisch danach bzw. rechts/unten;
- Bilder werden proportional skaliert;
- kein Stretching;
- kein Cropping;
- keine automatische Veränderung des Bildinhalts.

## Zulässige Eingaben
DF-04A ist zunächst auf lokale Bilddateien beschränkt, die vom Browser als Bild dargestellt werden können.

Der Vertrag verlangt noch keine Repository-, URL-, Clipboard- oder Asset-Library-Integration.

## Nicht Teil von DF-04A
Explizit ausgeschlossen sind:
- Overlay;
- Onion-Skin;
- Difference View / Pixel-Differenz;
- Blend-Slider;
- synchrones Pan/Zoom;
- automatische Registrierung/Ausrichtung;
- Pose-Scoring;
- Skeleton-Scoring;
- KI-Bewertung;
- automatische PASS/FAIL-Entscheidung;
- Persistenz;
- Asset-ID-/Asset-Library-Verwaltung;
- Review-Notizen;
- Approve/Reject-Workflow;
- technische Alpha-/Bounds-/Scale-Messung;
- Atlas-Umbau oder Atlas-Produktion;
- Änderungen an DF-02F-Generation-Handoff oder Prompt Builder.

Diese Funktionen dürfen nur in späteren, eigenen Blöcken ergänzt werden.

## Geplanter Folgeschritt
Frühestens nach DF-04A PASS kann ein separater Block wie `DF-04B – Overlay / Onion-Skin / Difference Review` definiert werden.

DF-04B ist durch diesen Vertrag noch nicht freigegeben.

## Abnahmekriterien
DF-04A kann nur PASS erhalten, wenn auf dem Zielgerät nachgewiesen ist:
- Source / Control kann geladen werden;
- Result kann unabhängig davon geladen werden;
- beide bleiben gleichzeitig sichtbar;
- Source / Control ist eindeutig links/oben gekennzeichnet;
- Result ist eindeutig rechts/unten gekennzeichnet;
- kein Bild wird verzerrt oder abgeschnitten;
- Ersetzen nur einer Seite lässt die andere Seite unverändert geladen;
- unterschiedliche Seitenverhältnisse zerstören die Vergleichsanordnung nicht;
- auf schmalem Bildschirm bleibt die logische Reihenfolge erhalten;
- keine ausgeschlossene DF-04B-/Scoring-/Persistenz-/Atlas-Funktion wurde vorgezogen.

## Entwicklungsgrenze
Der erste Implementierungsschritt nach Freigabe dieses Vertrags darf ausschließlich die oben definierte Source-/Result-Vergleichsansicht bauen.

Keine bestehende DF-02F-Funktion darf dafür umgebaut werden. DF-04A wird als eigenständiger Review-Baustein angelegt.
