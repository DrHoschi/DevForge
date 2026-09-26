const tools = [
  {id:'source-result-compare',title:'Source / Result Compare View',text:'Autoritative Source-/Control-Referenz und Result in einer stabilen Review-Ansicht vergleichen.',href:'tools/source-result-compare/',authority:'FROZEN / PRODUCTIVE',role:'REVIEW',detail:'DF-04F · PASS / 0 BLOCKER / FROZEN',areas:['game','film']},
  {id:'prompt-builder',title:'Prompt Builder',text:'Character-Referenz und Pose-/Geometry-Control zu einem nachvollziehbaren Generation Package verbinden.',href:'tools/prompt-builder/',authority:'AVAILABLE',role:'GENERATION / HANDOFF',detail:'DF-02F.6 vorhanden · externe deterministische Bildgenerierung bleibt begrenzt',areas:['game','film']},
  {id:'animation-reference-viewer',title:'Animated 3D Reference Viewer',text:'Geriggte 3D-Animationen laden, scrubben, Facing/Kamera festlegen und Pose-Bookmarks als Referenzen speichern.',href:'tools/animation-reference-viewer/',authority:'FROZEN / PRODUCTIVE',role:'REFERENCE / CREATE',detail:'DF-02F.1–F.5 · belegte Capabilities',areas:['game','film']},
  {id:'pose-renderer',title:'Deterministic Pose Renderer',text:'Historischer DF-02E-Prototyp für technische Mannequin-Posen. Keine aktuelle Produktionsquelle.',href:'tools/pose-renderer/',authority:'PROTOTYPE / HISTORICAL',role:'REFERENCE / CREATE',detail:'DF-02E · historischer Stand',areas:['game','film']},
  {id:'sprite-lab',title:'Sprite Lab',text:'Sprites/Sprite-Sheets laden, Frames definieren, Pivot/Anchor und Scale bearbeiten sowie Atlas-JSON importieren/exportieren.',href:'tools/sprite-lab/?v=sprite-lab-tb5-4-1',authority:'AVAILABLE',role:'TECHNICAL ASSET',detail:'Tool vorhanden · keine Atlas-Produktionsfreigabe',areas:['game','film']},
  {id:'atlas-builder',title:'Atlas Builder',text:'Die Atlas-Funktionen sind in das Sprite Lab konsolidiert. Diese Tür führt ausschließlich zum gemeinsamen Werkzeug.',href:'tools/atlas-builder/',linkLabel:'Zum konsolidierten Werkzeug →',authority:'CONSOLIDATED / REDIRECT',role:'TECHNICAL ASSET',detail:'Keine eigenständige Capability-Autorität',areas:['game','film']},
  {id:'animation-tester',title:'Animation Tester',text:'Einzelne Produktionsframes vor dem Atlas als Loop mit FPS, Frame-Stepping, Onion-Skin und Bottom-Center-Anchor prüfen.',href:'tools/animation-tester/',authority:'AVAILABLE',role:'REVIEW',detail:'Standalone Frame-/Manifest-Review',areas:['game','film']},
  {id:'asset-inspector',title:'Asset Inspector',text:'Bilder, Texturen, Sprites und Atlas-JSON technisch auf Abmessungen, Alpha und typische Asset-Risiken prüfen.',href:'tools/asset-inspector/',authority:'AVAILABLE',role:'TECHNICAL ASSET',detail:'Technische Prüfung · keine automatische fachliche Freigabe',areas:['game','film']},
  {id:'parameter-playground',title:'Parameter Playground',text:'Als spätere Parameter-Testfläche vorgesehen. Derzeit existiert keine freigegebene aktive Tool-Funktion.',href:null,authority:'PREPARED / NOT IMPLEMENTED',role:null,detail:'Keine aktive Produktionsrolle',areas:[]},
  {id:'asset-handoff',title:'Controlled Asset Handoff',text:'Freigegebene Source Assets gegen explizite Ziel-/Staging-Angaben prüfen und als deterministisches Minimalmanifest vorbereiten.',href:'tools/asset-handoff/',authority:'FROZEN / PRODUCTIVE',role:'RUNTIME / REPOSITORY HANDOFF',detail:'DF-05–DF-08 · PASS / 0 BLOCKER / FROZEN',areas:['game','film']}
];

const views={
  industry:{kicker:'Industry',title:'Plan real systems.',text:'Industrielle Planung ist Teil der DevForge-Zielstruktur. Aktuell ist hier noch kein produktives Tool autorisiert.'},
  game:{kicker:'Game Development',title:'Build interactive worlds.',text:'Werkzeuge für Asset-Erstellung, technische Vorbereitung, Animation, Review und kontrollierten Handoff.'},
  film:{kicker:'Film & Animation',title:'Bring worlds to life.',text:'Werkzeuge für visuelle Referenzen, Animation, Review und produktionsnahe Asset-Workflows.'},
  all:{kicker:'DevForge Workshop',title:'All Tools',text:'Der vollständige aktuelle Tool-Bestand – einschließlich historischer, konsolidierter und vorbereiteter Einträge.'}
};

const homeView=document.querySelector('#homeView');
const catalogView=document.querySelector('#catalogView');
const grid=document.querySelector('#toolGrid');
const topbar=document.querySelector('#topbar');
const menuBtn=document.querySelector('#menuBtn');

function toolCard(tool){
  const article=document.createElement('article');
  article.className='tool';
  article.dataset.tool=tool.id;
  article.dataset.authority=tool.authority;
  const link=tool.href?'<p class="open"><a href="'+tool.href+'">'+(tool.linkLabel||'Werkzeug öffnen →')+'</a></p>':'<p class="open"><strong>Nicht implementiert</strong></p>';
  const role=tool.role?'<span class="role">'+tool.role+'</span>':'';
  const icon='<img class="tool-icon" src="assets/tool-icons/'+tool.id+'.png" alt="" aria-hidden="true">';
  article.innerHTML=icon+'<h2>'+tool.title+'</h2><p>'+tool.text+'</p><p><small>'+tool.detail+'</small></p>'+link+'<div class="meta"><span class="status">'+tool.authority+'</span>'+role+'</div>';
  return article;
}

function setActive(view){
  document.querySelectorAll('.nav-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.view===view));
}

function showView(view){
  topbar.classList.remove('menu-open');
  menuBtn.setAttribute('aria-expanded','false');
  if(view==='home'){
    homeView.hidden=false;
    catalogView.hidden=true;
    setActive('home');
    window.scrollTo({top:0,behavior:'smooth'});
    return;
  }
  const config=views[view]||views.all;
  homeView.hidden=true;
  catalogView.hidden=false;
  document.querySelector('#viewHero').dataset.area=view;
  document.querySelector('#viewKicker').textContent=config.kicker;
  document.querySelector('#viewTitle').textContent=config.title;
  document.querySelector('#viewText').textContent=config.text;
  grid.replaceChildren();
  const visible=view==='all'?tools:tools.filter(tool=>tool.areas.includes(view));
  if(!visible.length){
    const empty=document.createElement('div');
    empty.className='empty';
    empty.innerHTML='<strong>Noch keine aktuelle produktive Tool-Zuordnung.</strong><br>Dieser Bereich ist Teil der DevForge-Informationsarchitektur. Archivierte Prototypen werden dadurch nicht zu aktuellen Capabilities.';
    grid.appendChild(empty);
  }else{
    visible.forEach(tool=>grid.appendChild(toolCard(tool)));
  }
  setActive(view);
  window.scrollTo({top:0,behavior:'smooth'});
}

document.addEventListener('click',event=>{
  const trigger=event.target.closest('[data-view]');
  if(trigger) showView(trigger.dataset.view);
});

menuBtn.addEventListener('click',()=>{
  const open=topbar.classList.toggle('menu-open');
  menuBtn.setAttribute('aria-expanded',String(open));
});

showView('home');
