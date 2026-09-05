const tools = [
  { id: 'pose-renderer', title: 'Deterministic Pose Renderer', text: 'DF-02E.2 Test-Surface: neutrale Mannequin-Testpose deterministisch unter einer festen orthografischen 45°-Top-Down-Gameplay-Kamera darstellen.', href: 'tools/pose-renderer/', status: 'DF-02E.2 TEST' },
  { id: 'sprite-lab', title: 'Sprite Lab', text: 'Sprites/Sprite-Sheets laden, Frames zeichnen, Pivot/Anchor und Scale bearbeiten sowie Atlas-JSON importieren/exportieren.', href: 'tools/sprite-lab/', status: 'EINSATZBEREIT' },
  { id: 'atlas-builder', title: 'Atlas Builder', text: 'Atlas-Funktionen sind bewusst mit dem Sprite Lab zusammengeführt: Frames definieren, Metadaten prüfen und JSON exportieren.', href: 'tools/atlas-builder/', status: 'EINSATZBEREIT' },
  { id: 'animation-tester', title: 'Animation Tester', text: 'Sprite-Animationen projektunabhängig mit FPS, Loop/Ping-Pong, Bewegungswegen, 8 Richtungen und Debug-Overlays testen.', href: 'tools/animation-tester/', status: 'EINSATZBEREIT' },
  { id: 'asset-inspector', title: 'Asset Inspector', text: 'Bilder, Texturen, Sprites und Atlas-JSON technisch prüfen: Größe, Seitenverhältnis, Alpha, Dateigröße, Power-of-two und typische Atlas-Risiken.', href: 'tools/asset-inspector/', status: 'EINSATZBEREIT' },
  { id: 'parameter-playground', title: 'Parameter Playground', text: 'Parameter verändern und Auswirkungen unmittelbar sichtbar machen.', href: null, status: 'VORBEREITET' }
];

const grid = document.querySelector('#toolGrid');

for (const tool of tools) {
  const article = document.createElement('article');
  article.className = 'tool';
  article.dataset.tool = tool.id;
  article.innerHTML = `
    <h2>${tool.title}</h2>
    <p>${tool.text}</p>
    ${tool.href ? `<p><a href="${tool.href}">Werkzeug öffnen →</a></p>` : ''}
    <span class="status">${tool.status}</span>
  `;
  grid.appendChild(article);
}
