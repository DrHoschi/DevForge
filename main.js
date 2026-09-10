const tools = [
  {
    id: 'source-result-compare',
    title: 'Source / Result Compare View',
    text: 'Autoritative Source-/Control-Referenz und Result in einer stabilen Review-Ansicht vergleichen.',
    href: 'tools/source-result-compare/',
    authority: 'FROZEN / PRODUCTIVE',
    role: 'REVIEW',
    detail: 'DF-04F · PASS / 0 BLOCKER / FROZEN'
  },
  {
    id: 'prompt-builder',
    title: 'Prompt Builder',
    text: 'Character-Referenz und Pose-/Geometry-Control zu einem nachvollziehbaren Generation Package verbinden.',
    href: 'tools/prompt-builder/',
    authority: 'AVAILABLE',
    role: 'GENERATION / HANDOFF',
    detail: 'DF-02F.6 vorhanden · externe deterministische Bildgenerierung bleibt begrenzt'
  },
  {
    id: 'animation-reference-viewer',
    title: 'Animated 3D Reference Viewer',
    text: 'Geriggte 3D-Animationen laden, scrubben, Facing/Kamera festlegen und Pose-Bookmarks als Referenzen speichern.',
    href: 'tools/animation-reference-viewer/',
    authority: 'FROZEN / PRODUCTIVE',
    role: 'REFERENCE / CREATE',
    detail: 'DF-02F.1–F.5 · belegte Capabilities'
  },
  {
    id: 'pose-renderer',
    title: 'Deterministic Pose Renderer',
    text: 'Historischer DF-02E-Prototyp für technische Mannequin-Posen. Keine aktuelle Produktionsquelle.',
    href: 'tools/pose-renderer/',
    authority: 'PROTOTYPE / HISTORICAL',
    role: 'REFERENCE / CREATE',
    detail: 'DF-02E · historischer Stand'
  },
  {
    id: 'sprite-lab',
    title: 'Sprite Lab',
    text: 'Sprites/Sprite-Sheets laden, Frames definieren, Pivot/Anchor und Scale bearbeiten sowie Atlas-JSON importieren/exportieren.',
    href: 'tools/sprite-lab/',
    authority: 'AVAILABLE',
    role: 'TECHNICAL ASSET',
    detail: 'Tool vorhanden · keine Atlas-Produktionsfreigabe'
  },
  {
    id: 'atlas-builder',
    title: 'Atlas Builder',
    text: 'Die Atlas-Funktionen sind in das Sprite Lab konsolidiert. Diese Tür führt ausschließlich zum gemeinsamen Werkzeug.',
    href: 'tools/atlas-builder/',
    linkLabel: 'Zum konsolidierten Werkzeug →',
    authority: 'CONSOLIDATED / REDIRECT',
    role: 'TECHNICAL ASSET',
    detail: 'Keine eigenständige Capability-Autorität'
  },
  {
    id: 'animation-tester',
    title: 'Animation Tester',
    text: 'Einzelne Produktionsframes vor dem Atlas als Loop mit FPS, Frame-Stepping, Onion-Skin und Bottom-Center-Anchor prüfen.',
    href: 'tools/animation-tester/',
    authority: 'AVAILABLE',
    role: 'REVIEW',
    detail: 'Standalone Frame-/Manifest-Review'
  },
  {
    id: 'asset-inspector',
    title: 'Asset Inspector',
    text: 'Bilder, Texturen, Sprites und Atlas-JSON technisch auf Abmessungen, Alpha und typische Asset-Risiken prüfen.',
    href: 'tools/asset-inspector/',
    authority: 'AVAILABLE',
    role: 'TECHNICAL ASSET',
    detail: 'Technische Prüfung · keine automatische fachliche Freigabe'
  },
  {
    id: 'parameter-playground',
    title: 'Parameter Playground',
    text: 'Als spätere Parameter-Testfläche vorgesehen. Derzeit existiert keine freigegebene aktive Tool-Funktion.',
    href: null,
    authority: 'PREPARED / NOT IMPLEMENTED',
    role: null,
    detail: 'Keine aktive Produktionsrolle'
  },
  {
    id: 'asset-handoff',
    title: 'Controlled Asset Handoff',
    text: 'Freigegebene Source Assets gegen explizite Ziel-/Staging-Angaben prüfen und als deterministisches Minimalmanifest vorbereiten.',
    href: 'tools/asset-handoff/',
    authority: 'TESTBUILD',
    role: 'RUNTIME / REPOSITORY HANDOFF',
    detail: 'DF-05 · TESTBUILD 1 · keine Repository-Übertragung'
  }
];

const grid = document.querySelector('#toolGrid');

for (const tool of tools) {
  const article = document.createElement('article');
  article.className = 'tool';
  article.dataset.tool = tool.id;
  article.dataset.authority = tool.authority;

  const link = tool.href
    ? `<p class="open"><a href="${tool.href}">${tool.linkLabel || 'Werkzeug öffnen →'}</a></p>`
    : '<p class="open"><strong>Nicht implementiert</strong></p>';
  const role = tool.role ? `<span class="role">${tool.role}</span>` : '';

  article.innerHTML = `
    <h2>${tool.title}</h2>
    <p>${tool.text}</p>
    <p><small>${tool.detail}</small></p>
    ${link}
    <div class="meta">
      <span class="status">${tool.authority}</span>
      ${role}
    </div>`;

  grid.appendChild(article);
}
