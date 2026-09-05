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

function rotateY([x,y,z],a){const c=Math.cos(a),s=Math.sin(a);return [x*c-z*s,y,x*s+z*c]}
function rotateX([x,y,z],a){const c=Math.cos(a),s=Math.sin(a);return [x,y*c-z*s,y*s+z*c]}
function project(p){const y1=rotateY(p,-camera.yawDeg*DEG);const p2=rotateX(y1,camera.elevationDeg*DEG);return [W/2+p2[0]*SCALE,H-74-p2[1]*SCALE,p2[2]]}
function line(a,b,width=18){return `<line x1="${a[0].toFixed(2)}" y1="${a[1].toFixed(2)}" x2="${b[0].toFixed(2)}" y2="${b[1].toFixed(2)}" stroke="#d8d4cf" stroke-width="${width}" stroke-linecap="round"/>`}
function joint(p,r=10){return `<circle cx="${p[0].toFixed(2)}" cy="${p[1].toFixed(2)}" r="${r}" fill="#eeeae5" stroke="#6f747b" stroke-width="2"/>`}
function ellipse(p,rx,ry){return `<ellipse cx="${p[0].toFixed(2)}" cy="${p[1].toFixed(2)}" rx="${rx}" ry="${ry}" fill="#e5e1dc" stroke="#6f747b" stroke-width="2"/>`}

const data=await fetch('./walk-se-fr1-fr4.v1.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error(`pose data ${r.status}`);return r.json()});
const byId=Object.fromEntries(data.poses.map(p=>[p.id,p]));
let current=byId.FR1;

function render(pose){
 const P=Object.fromEntries(Object.entries(pose.joints).map(([k,v])=>[k,project(v)]));
 const order=[...bones].sort((A,B)=>((P[A[0]][2]+P[A[1]][2])/2)-((P[B[0]][2]+P[B[1]][2])/2));
 let svg=`<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${pose.id} ${pose.name}"><defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f2f4f7"/></linearGradient></defs><rect width="720" height="720" fill="url(#bg)"/><ellipse cx="360" cy="640" rx="115" ry="28" fill="#000" opacity=".08"/>`;
 for(const [a,b] of order)svg+=line(P[a],P[b],a.includes('spine')||a==='pelvis'?22:18);
 svg+=ellipse(P.pelvis,38,28)+ellipse(P.spineUpper,54,42)+ellipse(P.head,31,39);
 for(const k of ['shoulderL','elbowL','wristL','shoulderR','elbowR','wristR','hipL','kneeL','ankleL','hipR','kneeR','ankleR'])svg+=joint(P[k],k.startsWith('hip')?12:10);
 for(const k of ['handL','handR'])svg+=joint(P[k],12);
 svg+=`<text x="24" y="34" font-family="system-ui,sans-serif" font-size="22" font-weight="800" fill="#172033">${pose.id} · ${pose.name}</text><text x="24" y="59" font-family="system-ui,sans-serif" font-size="14" fill="#526079">WALK · SE · deterministic joint data</text><path d="M650 652 L676 678" stroke="#172033" stroke-width="3"/><path d="M676 678 L665 675 M676 678 L673 667" stroke="#172033" stroke-width="3"/><text x="612" y="646" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#172033">+Z / SE</text></svg>`;
 document.getElementById('stage').innerHTML=svg;
 document.querySelectorAll('[data-pose]').forEach(b=>b.classList.toggle('active',b.dataset.pose===pose.id));
 document.getElementById('poseName').textContent=`${pose.id} · ${pose.name}`;
 document.getElementById('roles').textContent=`L: ${pose.roles.left} · R: ${pose.roles.right}`;
 document.getElementById('pelvisHeight').textContent=pose.pelvisHeight.toFixed(2);
 const snap={renderer:'df-02e3.v1',set:data.id,pose:pose.id,phase:pose.phase,camera,roles:pose.roles,projected:{root:P.root.map(n=>+n.toFixed(2)),pelvis:P.pelvis.map(n=>+n.toFixed(2)),head:P.head.map(n=>+n.toFixed(2)),handL:P.handL.map(n=>+n.toFixed(2)),handR:P.handR.map(n=>+n.toFixed(2)),footL:P.footL.map(n=>+n.toFixed(2)),footR:P.footR.map(n=>+n.toFixed(2))}};
 document.getElementById('snapshot').textContent=JSON.stringify(snap,null,2);
}

document.querySelectorAll('[data-pose]').forEach(btn=>btn.addEventListener('click',()=>{current=byId[btn.dataset.pose];render(current)}));
render(current);
