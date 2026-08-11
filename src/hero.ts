// src/hero.js
//
// Extracted verbatim from the big inline <script> block:
//   - hero parallax on mousemove (index.html ~2828-2854, "Hero — cada
//     elemento reacciona al cursor por separado (parallax en capas)")
//   - hero "copy code into your project" GSAP loop (index.html ~2856-2892,
//     "Hero visual — copiar código del Sidebar y pegarlo en 'tu proyecto'")
//
// This is page-shell content (the `.hero` block sits above all 9 sections
// on #view-design, it isn't owned by any single section), so — like
// theme-toggle.js/router.js/scroll-lock.js — it lives at the top of src/
// rather than under src/sections/. Flagged in the final report as a
// structural addition not spelled out in the target src/ tree.
//
// Depends on window.gsap being loaded globally (same as the original —
// this file does not import/bundle GSAP, it just checks `window.gsap`
// exactly like the inline script did).
import { watchOnScreen } from './shared/on-screen.ts';

// Demo markup relocated verbatim from index.html's #view-design .hero
// (hero-main text/chips + hero-visual copy-code scene). All ids queried
// below by initHero() itself (hero-visual, cp-select-box, cp-paste-1/2,
// cp-badge) and by scroll-lock.ts's `.hero`-as-scroll-target selector
// (which only needs the outer .hero container, unaffected by this)
// must stay intact.
function renderHero() {
  return `
  <div class="hero-split">
    <div class="hero-main">
      <h1>Identidad Visual CTS</h1>
      <p class="hero-desc">Guía oficial de identidad visual de Industrias CTS: colores de marca, tipografía, espaciado y componentes de interfaz documentados y listos para implementar en cualquier producto o página nueva.</p>
      <div class="chips">
        <span class="chip">React / Next.js</span>
        <span class="chip">TypeScript</span>
        <span class="chip">Tailwind CSS</span>
        <span class="chip">v1.0.0</span>
        <span class="chip mode-chip">☀ Modo claro</span>
      </div>
    </div>
    <div class="hero-visual" id="hero-visual">

      <div class="cp-scene">

        <div class="cp-window cp-source">
          <div class="cp-win-head">
            <span class="cp-dot" style="background:#EF4444"></span>
            <span class="cp-dot" style="background:#F59E0B"></span>
            <span class="cp-dot" style="background:#22C55E"></span>
            <span class="cp-win-file">Design System</span>
          </div>
          <div class="cp-code">
            <div class="cp-line"><span class="cp-tag">&lt;Sidebar&gt;</span></div>
            <div class="cp-line" id="cp-src-1">&nbsp;&nbsp;<span class="cp-tag">&lt;SidebarItem</span> <span class="cp-attr">icon</span>="home" /&gt;</div>
            <div class="cp-line" id="cp-src-2">&nbsp;&nbsp;<span class="cp-tag">&lt;SidebarItem</span> <span class="cp-attr">icon</span>="tasks" /&gt;</div>
            <div class="cp-line"><span class="cp-tag">&lt;/Sidebar&gt;</span></div>
          </div>
          <div class="cp-select-box" id="cp-select-box"></div>
        </div>

        <div class="cp-window cp-target">
          <div class="cp-win-head">
            <span class="cp-dot" style="background:#EF4444"></span>
            <span class="cp-dot" style="background:#F59E0B"></span>
            <span class="cp-dot" style="background:#22C55E"></span>
            <span class="cp-win-file">MiProyecto / App.tsx</span>
          </div>
          <div class="cp-code">
            <div class="cp-line"><span class="cp-kw">import</span> { Sidebar } <span class="cp-kw">from</span> './ui'</div>
            <div class="cp-line"><span class="cp-tag">&lt;Sidebar&gt;</span></div>
            <div class="cp-line cp-pasted-line" id="cp-paste-1">&nbsp;&nbsp;<span class="cp-tag">&lt;SidebarItem</span> <span class="cp-attr">icon</span>="home" /&gt;</div>
            <div class="cp-line cp-pasted-line" id="cp-paste-2">&nbsp;&nbsp;<span class="cp-tag">&lt;SidebarItem</span> <span class="cp-attr">icon</span>="tasks" /&gt;</div>
            <div class="cp-line"><span class="cp-tag">&lt;/Sidebar&gt;</span></div>
          </div>
        </div>

        <div class="cp-badge" id="cp-badge">Copiado ✓</div>

      </div>
    </div>
  </div>
`;
}

export function initHero() {
  document.querySelector('.hero').innerHTML = renderHero();

  // Hero — cada elemento reacciona al cursor por separado (parallax en capas)
  const heroEl=document.querySelector('.hero');
  const heroMainEl=document.querySelector('.hero-main');
  const heroVisualEl=document.getElementById('hero-visual');
  const heroTitleEl=heroMainEl&&heroMainEl.querySelector('h1');
  const heroDescEl=heroMainEl&&heroMainEl.querySelector('.hero-desc');
  const heroChipEls=heroMainEl?Array.from(heroMainEl.querySelectorAll('.chip')):[];
  if(heroEl&&heroMainEl&&heroVisualEl){
    heroEl.addEventListener('mousemove',e=>{
      const rect=heroEl.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width-0.5;
      const y=(e.clientY-rect.top)/rect.height-0.5;
      if(heroTitleEl)heroTitleEl.style.transform=`translate(${x*22}px, ${y*14}px)`;
      if(heroDescEl)heroDescEl.style.transform=`translate(${x*14}px, ${y*9}px)`;
      heroChipEls.forEach((chip,i)=>{
        const depth=8+i*4;
        chip.style.transform=`translate(${x*depth}px, ${y*depth*.6}px)`;
      });
      heroVisualEl.style.transform=`translate(${x*-26}px, ${y*-18}px)`;
    });
    heroEl.addEventListener('mouseleave',()=>{
      if(heroTitleEl)heroTitleEl.style.transform='';
      if(heroDescEl)heroDescEl.style.transform='';
      heroChipEls.forEach(chip=>chip.style.transform='');
      heroVisualEl.style.transform='';
    });
  }

  // Hero visual — copiar código del Sidebar y pegarlo en "tu proyecto" (GSAP timeline en loop)
  const heroVisual=document.getElementById('hero-visual');
  if(heroVisual&&window.gsap){
    const selectBox=document.getElementById('cp-select-box');
    const paste1=document.getElementById('cp-paste-1');
    const paste2=document.getElementById('cp-paste-2');
    const badge=document.getElementById('cp-badge');

    gsap.from('.cp-scene',{opacity:0,y:30,duration:.8,ease:'power3.out',delay:.2});
    gsap.set(badge,{y:0});

    const tl=gsap.timeline({repeat:-1,repeatDelay:.8,delay:1,paused:true});

    // 1) Seleccionar y "copiar" las líneas del Sidebar
    tl.to(selectBox,{opacity:1,duration:.4,ease:'power2.out'})
      .call(()=>{badge.textContent='Copiado ✓';})
      .to(badge,{opacity:1,duration:.3},'+=0.2')
      .to({},{duration:.6})

    // 2) La insignia "viaja" hasta el proyecto de destino
      .to(badge,{y:150,duration:.7,ease:'power2.inOut'})
      .call(()=>{badge.textContent='Pegado ✓';})

    // 3) "Pegar" las líneas en App.tsx
      .to(paste1,{height:20,opacity:1,duration:.35,ease:'power2.out'},'<0.1')
      .to(paste2,{height:20,opacity:1,duration:.35,ease:'power2.out'},'+=0.1')
      .to({},{duration:1.4})

    // 4) Reset
      .to(badge,{opacity:0,duration:.3})
      .to(selectBox,{opacity:0,duration:.3},'<')
      .to([paste1,paste2],{height:0,opacity:0,duration:.3},'<')
      .set(badge,{y:0});

    // Solo corre mientras la escena esté en viewport y la pestaña visible.
    watchOnScreen(heroVisual,onScreen=>{(onScreen&&!document.hidden)?tl.play():tl.pause()});
  }
}
