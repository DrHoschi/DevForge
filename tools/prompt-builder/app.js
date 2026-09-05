const dirs=['N','NE','E','SE','S','SW','W','NW'];
let active='SE';
const $=id=>document.getElementById(id);
const fields=['project','assetType','subject','task','customTask','cameraAngle','viewCount','identity','notes'];

function buildDirections(){
  $('directions').innerHTML='';
  dirs.forEach(d=>{const b=document.createElement('button');b.className='dir'+(d===active?' active':'');b.textContent=d;b.onclick=()=>{active=d;buildDirections();render();};$('directions').appendChild(b)});
}

function buildCamera(){
  const c=$('camera');c.innerHTML='<div class="center"><span>ASSET</span></div>';
  dirs.forEach((d,i)=>{const r=document.createElement('div');r.className='ray'+(d===active?' active':'');r.style.transform=`rotate(${i*45-90}deg)`;r.innerHTML=`<span style="transform:rotate(${90-i*45}deg)">${d}</span>`;c.appendChild(r)});
}

function state(){
  const task=$('task').value==='Custom' ? ($('customTask').value.trim()||'CUSTOM') : $('task').value;
  return {project:$('project').value,projectName:$('project').selectedOptions[0].text,assetType:$('assetType').value,subject:$('subject').value.trim()||'Unnamed Asset',task,cameraAngle:$('cameraAngle').value,viewCount:$('viewCount').value,direction:active,identity:$('identity').value.trim(),notes:$('notes').value.trim(),generator:'DevForge Prompt Builder',schemaVersion:'df-prompt-0.1'};
}

function prompt(s){
  const siedler=s.project==='siedler-mini';
  const heading=siedler?`SIEDLER-MINIGAME ${s.assetType.toUpperCase()} GENERATION / ${s.viewCount.toUpperCase()} ${s.cameraAngle} TOP-DOWN GAMEPLAY VIEW`:`${s.assetType.toUpperCase()} GENERATION REFERENCE`;
  const camera=siedler?`Use the exact fixed ${s.cameraAngle} top-down gameplay camera established for the Siedler-Minigame. This is NOT a new camera setup. Keep camera height, projection, framing, scale and visual gameplay readability consistent across every generated view.`:`Use a consistent ${s.cameraAngle} top-down camera across all requested views.`;
  const direction=`CURRENT DIRECTION: ${s.direction}\nInterpret ${s.direction} as the subject's gameplay-facing / movement direction while the camera remains fixed.`;
  const output=s.viewCount==='single view'?`Generate one clean production reference for direction ${s.direction}.`:`Generate a complete ${s.viewCount} set with consistent subject identity, camera, scale, lighting and framing. The direction set is: ${dirs.join(', ')}.`;
  return `${heading}\n\nCreate a production-ready generation reference based on the supplied reference material and the specification below.\n\n1. PROJECT\n${s.projectName}\n\n2. ASSET\nTYPE: ${s.assetType}\nSUBJECT: ${s.subject}\n\n3. TASK / ANIMATION\n${s.task}\n\n4. IDENTITY / REFERENCE CONTRACT\n${s.identity}\n\n5. CAMERA CONTRACT\n${camera}\n\n6. DIRECTION CONTRACT\n${direction}\n\n7. OUTPUT CONTRACT\n${output}\nMaintain exact consistency between directions. Do not mirror identifying asymmetries incorrectly. Do not change equipment, clothing, materials, proportions or design between views unless explicitly required by the task.\n\n8. QUALITY RULES\nClear readable silhouette. Stable proportions. Stable scale. Stable camera. Stable lighting. No unintended perspective drift. No redesign. No extra objects unless explicitly required by the task.\n${s.notes?`\n9. ADDITIONAL REQUIREMENTS\n${s.notes}\n`:''}\nThe supplied references are authoritative. When a reference conflicts with a generic assumption, follow the supplied reference.`;
}

function render(){
  buildCamera();
  const s=state(),p=prompt(s);
  $('output').textContent=p;
  $('cameraMeta').textContent=`${s.cameraAngle} top-down / fixed`;
  $('directionMeta').textContent=s.direction;
  $('assetMeta').textContent=`${s.assetType}: ${s.subject}`;
  $('taskMeta').textContent=s.task;
  $('sheetMeta').innerHTML=`<div><b>Projekt</b><br>${s.projectName}</div><div><b>Asset</b><br>${s.assetType}: ${s.subject}</div><div><b>Task</b><br>${s.task}</div><div><b>Kamera / Richtung</b><br>${s.cameraAngle} / ${s.direction}</div>`;
  $('sheetPrompt').textContent=p;
}

function download(name,text,type){const blob=new Blob([text],{type});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),0)}
function slug(v){return v.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'asset'}

$('copy').onclick=async()=>{await navigator.clipboard.writeText(prompt(state()));const old=$('copy').textContent;$('copy').textContent='Kopiert ✓';setTimeout(()=>$('copy').textContent=old,1100)};
$('txt').onclick=()=>{const s=state();download(`${slug(s.projectName)}_${slug(s.subject)}_${slug(s.task)}_${s.direction}.txt`,prompt(s),'text/plain;charset=utf-8')};
$('json').onclick=()=>{const s=state();download(`${slug(s.projectName)}_${slug(s.subject)}_${slug(s.task)}_${s.direction}.json`,JSON.stringify({...s,prompt:prompt(s)},null,2),'application/json;charset=utf-8')};
$('pdf').onclick=()=>window.print();
fields.forEach(id=>$(id).addEventListener('input',render));
$('project').addEventListener('change',()=>{if($('project').value==='siedler-mini'){$('cameraAngle').value='45°';$('viewCount').value='8 directions';}render()});
buildDirections();render();
