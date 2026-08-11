// src/sections/buttons/script.ts
//
// Button click confetti/particle burst — extracted verbatim from the big
// inline <script> block (index.html ~3436-3508, "Destellos al hacer click
// en cualquier botón de la sección Botones"). The original was already a
// self-contained IIFE; here it just becomes the body of initButtons().
import '../../styles/sections/buttons.css';
import { mountButtonDemos } from './react-demo.tsx';

// Demo markup relocated verbatim from index.html's #buttons
// .sec-full-content (card shells for each button-variant row). The
// `#btn-demo-*` mount-point ids below are queried by react-demo.tsx's
// mountButtonDemos() right after this renders — keep them intact.
function renderButtons() {
  return `
  <div class="mc-grid">

    <div class="card">
      <div class="ch"><h3>Primary</h3><p>Acción principal</p></div>
      <div class="cb">
        <div class="btn-row" id="btn-demo-primary"></div>
      </div>
    </div>

    <div class="card">
      <div class="ch"><h3>Secondary</h3><p>Ghost, acción secundaria</p></div>
      <div class="cb">
        <div class="btn-row" id="btn-demo-secondary"></div>
      </div>
    </div>

    <div class="card">
      <div class="ch"><h3>Outline</h3><p>Borde fino, sin relleno</p></div>
      <div class="cb">
        <div class="btn-row" id="btn-demo-outline"></div>
      </div>
    </div>

    <div class="card">
      <div class="ch"><h3>Ghost</h3><p>Solo ícono o texto</p></div>
      <div class="cb">
        <div class="btn-row" id="btn-demo-ghost"></div>
      </div>
    </div>

    <div class="card">
      <div class="ch"><h3>Tamaños</h3><p>Small · Medium · Large</p></div>
      <div class="cb">
        <div class="btn-row" id="btn-demo-sizes"></div>
      </div>
    </div>

    <div class="card">
      <div class="ch"><h3>Expandible</h3><p>Ícono que revela su etiqueta al pasar el mouse</p></div>
      <div class="cb">
        <div class="btn-row">
          <button class="btn-expand">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span class="btn-expand-label">Crear</span>
          </button>
          <button class="btn-expand">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2"/><circle cx="18" cy="18" r="3"/><path d="M18 15.2v1M18 19.8v1M15.2 18h1M19.8 18h1"/></svg>
            <span class="btn-expand-label">Cuenta</span>
          </button>
        </div>
      </div>
    </div>

  </div>
`;
}

export function initButtons() {
  document.querySelector('#buttons .sec-full-content').innerHTML = renderButtons();

  mountButtonDemos();

  // Destellos al hacer click en cualquier botón de la sección Botones
  const canvas=document.createElement('canvas');
  canvas.style.cssText='position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:9999';
  document.body.appendChild(canvas);
  const ctx=canvas.getContext('2d');
  function resize(){canvas.width=innerWidth;canvas.height=innerHeight}
  resize();addEventListener('resize',resize);
  const COLORS=['#0065BB','#89AEDC','#004D9E','#EF4444','#F59E0B','#22C55E','#FFFFFF'];
  let particles=[],raf=null;

  function drawSpark(p){
    const alpha=Math.max(0,4*p.life*(1-p.life)); // aparece y se apaga (curva de flash)
    if(alpha<=0)return;
    const s=p.size;
    ctx.save();
    ctx.globalAlpha=alpha;
    ctx.translate(p.x,p.y);ctx.rotate(p.rot);
    ctx.shadowColor=p.color;ctx.shadowBlur=14;
    ctx.fillStyle=p.color;
    ctx.beginPath();
    ctx.moveTo(0,-s*3.2);ctx.lineTo(s*0.55,0);ctx.lineTo(0,s*3.2);ctx.lineTo(-s*0.55,0);
    ctx.closePath();ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-s*3.2,0);ctx.lineTo(0,s*0.55);ctx.lineTo(s*3.2,0);ctx.lineTo(0,-s*0.55);
    ctx.closePath();ctx.fill();
    ctx.restore();
  }

  // Destellos que salen disparados desde el click, cubriendo buena parte de la pantalla
  function burst(x,y){
    for(let i=0;i<46;i++){
      const angle=Math.random()*Math.PI*2,speed=9+Math.random()*22;
      particles.push({
        x,y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,
        size:2.5+Math.random()*3,
        color:COLORS[Math.floor(Math.random()*COLORS.length)],
        rot:Math.random()*Math.PI,vr:(Math.random()-.5)*.25,
        drag:0.94,delay:0,life:1,decay:0.018+Math.random()*0.012
      });
    }
    // destellos extra repartidos por toda la pantalla, con aparición escalonada
    for(let i=0;i<26;i++){
      particles.push({
        x:Math.random()*canvas.width,y:Math.random()*canvas.height,
        vx:0,vy:0,size:2+Math.random()*3,
        color:COLORS[Math.floor(Math.random()*COLORS.length)],
        rot:Math.random()*Math.PI,vr:0,
        drag:1,delay:Math.floor(Math.random()*26),life:1,decay:0.03+Math.random()*0.02
      });
    }
    if(!raf)tick();
  }

  function tick(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      if(p.delay>0){p.delay--;return}
      p.vx*=p.drag;p.vy*=p.drag;p.x+=p.vx;p.y+=p.vy;p.rot+=p.vr;
      p.life-=p.decay;
      drawSpark(p);
    });
    particles=particles.filter(p=>p.delay>0||p.life>0);
    raf=particles.length?requestAnimationFrame(tick):null;
  }

  document.getElementById('buttons')?.addEventListener('click',e=>{
    const btn=e.target.closest('button');
    if(!btn||btn.disabled)return;
    const r=btn.getBoundingClientRect();
    burst(r.left+r.width/2,r.top+r.height/2);
  });
}
