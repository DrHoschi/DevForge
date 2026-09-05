const W=720,H=720,SCALE=245;
const DEG=Math.PI/180;
const camera={yawDeg:45,elevationDeg:45,orthographic:true};
const bones=[
 ['pelvis','spineLower'],['spineLower','spineUpper'],['spineUpper','neck'],['neck','head'],
 ['spineUpper','clavicleL'],['clavicleL','shoulderL'],['shoulderL','elbowL'],['elbowL','wristL'],['wristL','handL'],
 ['spineUpper','clavicleR'],['clavicleR','shoulderR'],['shoulderR','elbowR'],['elbowR','wristR'],['wristR','handR'],
 ['pelvis','hipL'],['hipL','kneeL'],['kneeL','ankleL'],['ankleL','footL'],['footL','toeL'],
 ['pelvis','hipR'],['hipR','kneeR'],['kneeR','ankleR'],['ankleR','footR'],['footR','toeR']
];
const counterphasePairs=[
 ['clavicleL','clavicleR'],['shoulderL','shoulderR'],['elbowL','elbowR'],['wristL','wristR'],['handL','handR'],
 ['hipL','hipR'],['kneeL','kneeR'],['ankleL','ankleR'],['footL','footR'],['toeL','toeR']
];
const derivedMeta={
 FR1:{id:'FR5',name:'Contact R',phase:'CONTACT_R'},
 FR2:{id:'FR6',name:'Down R',phase:'DOWN_R'},
 FR3:{id:'FR7',name:'Passing R',phase:'PASSING_R'},
 FR4:{id:'FR8',name:'Up / Left Swing',phase:'UP_LEFT_SWING'}
};

function rotateY([x,y,z],a){const c=Math.cos(a),s=Math.sin(a);return [x*c-z*s,y,x*s+z*c]}
function rotateX([x,y,z],a){const c=Math.cos(a),s=Math.sin(a);return [x,y*c-z*s,y*s+z*c]}
function project(p){const y1=rotateY(p,-camera.yawDeg*DEG);const p2=rotateX(y1,camera.elevationDeg*DEG);return [W/2+p2[0]*SCALE,H-74-p2[1]*SCALE,p2[2]]}
function mirrorX([x,y,z]){return [-x,y,z]}
function line(a,b,width=18){return `<line x1="${a[0].toFixed(2)}" y1="${a[1].toFixed(2)}" x2="${b[0].toFixed(2)}" y2="${b[1].toFixed(2)}" stroke="#d8d4cf" stroke-width="${width}" stroke-linecap="round"/>`}
function joint(p,r=10){return `<circle cx="${p[0].toFixed(2)}" cy="${p[1].toFixed(2)}" r="${r}" fill="#eeeae5" stroke="#6f747b" stroke-width="2"/>`}
function ellipse(p,rx,ry){return `<ellipse cx="${p[0].toFixed(2)}" cy="${p[1].toFixed(2)}" rx="${rx}" ry="${ry}" fill="#e5e1dc" stroke="#6f747b" stroke-width="2"/>`}

function deriveCounterphase(source){
 const meta=derivedMeta[source.id];
 if(!meta)throw new Error(`No counterphase mapping for ${source.id}`);
 const joints={};
 const paired=new Set(counterphasePairs.flat());
 for(const [id,p] of Object.entries(source.joints))if(!paired.has(id))joints[id]=[...p];
 for(const [left,right] of counterphasePairs){
   joints[left]=mirrorX(source.joints[right]);
   joints[right]=mirrorX(source.joints[left]);
 }
 return {
   id:meta.id,name:meta.name,phase:meta.phase,pelvisHeight:source.pelvisHeight,
   roles:{left:source.roles.right,right:source.roles.left},
   joints,
   derivedFrom:source.id,
   derivation:'COUNTERPHASE_LR_SWAP_AND_X_MIRROR_V1'
 };
}

const data=await fetch('./walk-se-fr1-fr4.v1.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error(`pose data ${r.status}`);return r.json()});
const sourcePoses=data.poses;
const derivedPoses=sourcePoses.map(deriveCounterphase);
const fullSet=[...sourcePoses,...derivedPoses];
const byId=Object.fromEntries(fullSet.map(p=>[p.id,p]));
let current=byId.FR1;

function render(pose){
 const P=Object.fromEntries(Object.entries(pose.joints).map(([k,v])=>[k,project(v)]));
 const order=[...bones].sort((A,B)=>((P[A[0]][2]+P[A[1]][2])/2)-((P[B[0]][2]+P[B[1]][2])/2));
 let svg=`<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${pose.id} ${pose.name}"><defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f2f4f7"/></linearGradient></defs><rect width="720" height="720" fill="url(#bg)"/><ellipse cx="360" cy="640" rx="115" ry="28" fill="#000" opacity=".08"/>`;
 for(const [a,b] of order)svg+=line(P[a],P[b],a.includes('spine')||a==='pelvis'?22:18);
 svg+=ellipse(P.pelvis,38,28)+ellipse(P.spineUpper,54,42)+ellipse(P.head,31,39);
 for(const k of ['shoulderL','elbowL','wristL','shoulderR','elbowR','wristR','hipL','kneeL','ankleL','hipR','kneeR','ankleR'])svg+=joint(P[k],k.startsWith('hip')?12:10);
 for(const k of ['handL','handR'])svg+=joint(P[k],12);
 const origin=pose.derivedFrom?`derived from ${pose.derivedFrom}`:'authored source';
 svg+=`<text x="24" y="34" font-family="system-ui,sans-serif" font-size="22" font-weight="800" fill="#172033">${pose.id} · ${pose.name}</text><text x="24" y="59" font-family="system-ui,sans-serif" font-size="14" fill="#526079">WALK · SE · ${origin}</text><path d="M650 652 L676 678" stroke="#172033" stroke-width="3"/><path d="M676 678 L665 675 M676 678 L673 667" stroke="#172033" stroke-width="3"/><text x="612" y="646" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#172033">+Z / SE</text></svg>`;
 document.getElementById('stage').innerHTML=svg;
 document.querySelectorAll('[data-pose]').forEach(b=>b.classList.toggle('active',b.dataset.pose===pose.id));
 document.getElementById('poseName').textContent=`${pose.id} · ${pose.name}`;
 document.getElementById('roles').textContent=`L: ${pose.roles.left} · R: ${pose.roles.right}`;
 document.getElementById('pelvisHeight').textContent=pose.pelvisHeight.toFixed(2);
 document.getElementById('origin').textContent=pose.derivedFrom?`${pose.derivedFrom} → ${pose.id} · L↔R + X mirror`:'FR1–FR4 authored source geometry';
 const snap={renderer:'df-02e4.v1',set:'walk-se-fr1-fr8-counterphase-v1',pose:pose.id,phase:pose.phase,camera,roles:pose.roles,derivedFrom:pose.derivedFrom||null,derivation:pose.derivation||null,projected:{root:P.root.map(n=>+n.toFixed(2)),pelvis:P.pelvis.map(n=>+n.toFixed(2)),head:P.head.map(n=>+n.toFixed(2)),handL:P.handL.map(n=>+n.toFixed(2)),handR:P.handR.map(n=>+n.toFixed(2)),footL:P.footL.map(n=>+n.toFixed(2)),footR:P.footR.map(n=>+n.toFixed(2))}};
 document.getElementById('snapshot').textContent=JSON.stringify(snap,null,2);
}

document.querySelectorAll('[data-pose]').forEach(btn=>btn.addEventListener('click',()=>{current=byId[btn.dataset.pose];render(current)}));
render(current);
