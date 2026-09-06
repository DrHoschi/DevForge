export async function buildPoseControl(dataUrl,{paddingRatio=.16,minLuma=24,minAlpha=8}={}){
  const img=await loadImage(dataUrl);
  const source=document.createElement('canvas');source.width=img.naturalWidth||img.width;source.height=img.naturalHeight||img.height;
  const sctx=source.getContext('2d',{willReadFrequently:true});sctx.drawImage(img,0,0);
  const {data,width,height}=sctx.getImageData(0,0,source.width,source.height);
  let minX=width,minY=height,maxX=-1,maxY=-1;
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){
    const i=(y*width+x)*4,a=data[i+3];if(a<minAlpha)continue;
    const l=.2126*data[i]+.7152*data[i+1]+.0722*data[i+2];
    if(l<=minLuma)continue;
    if(x<minX)minX=x;if(x>maxX)maxX=x;if(y<minY)minY=y;if(y>maxY)maxY=y;
  }
  if(maxX<minX||maxY<minY){minX=0;minY=0;maxX=width-1;maxY=height-1}
  const bw=maxX-minX+1,bh=maxY-minY+1,pad=Math.round(Math.max(bw,bh)*paddingRatio);
  minX=Math.max(0,minX-pad);minY=Math.max(0,minY-pad);maxX=Math.min(width-1,maxX+pad);maxY=Math.min(height-1,maxY+pad);
  const cw=maxX-minX+1,ch=maxY-minY+1;
  const out=document.createElement('canvas');out.width=cw;out.height=ch;
  out.getContext('2d').drawImage(source,minX,minY,cw,ch,0,0,cw,ch);
  return{dataUrl:out.toDataURL('image/png'),crop:{x:minX,y:minY,width:cw,height:ch,sourceWidth:width,sourceHeight:height,paddingRatio},occupancy:{x:Math.round(bw/cw*100),y:Math.round(bh/ch*100)}}
}
function loadImage(src){return new Promise((res,rej)=>{const im=new Image();im.onload=()=>res(im);im.onerror=()=>rej(new Error('Pose image decode failed'));im.src=src})}
