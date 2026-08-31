const tools = [
  { id: 'sprite-lab', title: 'Sprite Lab', text: 'Sprites laden, skalieren, Pivot/Anker, Abstände und Ausrichtung testen.' },
  { id: 'atlas-builder', title: 'Atlas Builder', text: 'Sprite-Atlanten erzeugen, Layout prüfen und Metadaten vorbereiten.' },
  { id: 'animation-tester', title: 'Animation Tester', text: 'Frames, FPS, Loop und Animationszustände direkt im Browser testen.' },
  { id: 'asset-inspector', title: 'Asset Inspector', text: 'Technische Eigenschaften von Bildern, Texturen, Sprites und später 3D-Assets prüfen.' },
  { id: 'parameter-playground', title: 'Parameter Playground', text: 'Parameter verändern und Auswirkungen unmittelbar sichtbar machen.' }
];

const grid = document.querySelector('#toolGrid');

for (const tool of tools) {
  const article = document.createElement('article');
  article.className = 'tool';
  article.dataset.tool = tool.id;
  article.innerHTML = `
    <h2>${tool.title}</h2>
    <p>${tool.text}</p>
    <span class="status">VORBEREITET</span>
  `;
  grid.appendChild(article);
}
