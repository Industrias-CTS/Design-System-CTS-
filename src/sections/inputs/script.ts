// src/sections/inputs/script.ts
//
// Extracted verbatim from the big inline <script> block:
//   - wireModal() + its call for the form modal (index.html ~3021-3029)
//   - the animated modal tour overlay (index.html ~3031-3244, "Tour animado
//     del modal — abre solo y va señalando cada parte con su descripción")
//
// NOTE: watchOnScreen is imported from ../../shared/on-screen.js instead of
// being redefined here — see that file's header comment for why it was
// factored out (it's shared by 4+ unrelated consumers in the original code).
import '../../styles/sections/inputs.css';
import { watchOnScreen } from '../../shared/on-screen.ts';

// Modales (confirmación y formulario)
function wireModal(openId,overlayId){
  const openBtn=document.getElementById(openId),overlay=document.getElementById(overlayId);
  if(!openBtn||!overlay)return;
  openBtn.addEventListener('click',()=>overlay.classList.add('open'));
  overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.classList.remove('open')});
  overlay.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>overlay.classList.remove('open')));
}

// Demo markup relocated verbatim from index.html's #inputs
// .sec-full-content (modal-tour device + form modal + its tour-nav
// mount point). `#tour-nav`/`#modal-tour-frame`/`#modal-form-open`/
// `#modal-form-overlay`/`#tour-ring`/`#tour-callout*`/`#tour-cursor`
// ids below are queried by initInputs() right after this renders —
// keep them intact.
function renderInputs() {
  return `
  <div class="tour-layout">
  <div class="tour-device">
    <div class="tour-device-bar"><span></span><span></span><span></span></div>
  <div class="modal-demo-frame modal-tour-frame" id="modal-tour-frame">
    <div class="brow">
      <button class="btn blg bo" id="modal-form-open">Tócame si puedes</button>
    </div>
    <div class="tour-cursor" id="tour-cursor"></div>

    <div class="modal-overlay" id="modal-form-overlay">
      <div class="modal-box modal-box-lg">
        <div class="modal-hero" data-tour="hero">
          <div class="modal-hero-text">
            <h4 data-tour="hero-title">Nueva tarea</h4>
            <p data-tour="hero-sub">Crea una tarea para el proyecto</p>
          </div>
          <button class="modal-close modal-close-hero" data-close data-tour="close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="modal-section-label" data-tour="section1">Selección y opciones</div>
          <div class="modal-grid" data-tour="grid1">
            <div class="field"><label>Selección</label>
              <select><option>Selecciona…</option><option>Opción A</option><option>Opción B</option><option>Opción C</option></select>
            </div>
            <div class="field"><label>Casilla de verificación</label>
              <label class="chk"><input type="checkbox" checked/> Activo</label>
            </div>
          </div>
          <div class="modal-section-label">Texto y validación</div>
          <div class="field">
            <label data-tour="label-pos">Campo obligatorio <span class="req" data-tour="required">*</span></label>
            <input type="text" placeholder="Escribe aquí…" data-tour="input-style"/>
          </div>
          <div class="field"><label>Correo</label><input type="email" placeholder="nombre@empresa.com"/></div>
          <div class="modal-grid">
            <div class="field"><label>Código</label><input type="text" placeholder="TSK-000" data-tour="placeholder"/></div>
            <div class="field"><label>Fecha</label><input type="text" placeholder="dd/mm/aaaa"/></div>
          </div>
          <div class="field"><label>Campo deshabilitado</label><input type="text" value="No editable" disabled data-tour="disabled"/></div>
        </div>
        <div class="modal-foot" data-tour="footer">
          <button class="btn bmd bs" data-close>Cancelar</button>
          <button class="btn bmd bp" data-close>Guardar tarea</button>
        </div>
      </div>
    </div>

    <div class="tour-ring" id="tour-ring"></div>
    <div class="tour-callout" id="tour-callout">
      <span class="tour-callout-ico" id="tour-callout-ico"></span>
      <div><div class="tour-callout-t" id="tour-callout-t"></div><div class="tour-callout-d" id="tour-callout-d"></div></div>
    </div>
  </div>
  </div>
  <nav class="tour-nav" id="tour-nav" aria-label="Especificaciones del modal"></nav>
  </div>
`;
}

export function initInputs() {
  document.querySelector('#inputs .sec-full-content').innerHTML = renderInputs();

  wireModal('modal-form-open','modal-form-overlay');

  // Tour animado del modal — abre solo y va señalando cada parte con su descripción
  const tourFrame=document.getElementById('modal-tour-frame');
  if(tourFrame){
  const tourOverlay=document.getElementById('modal-form-overlay');
  const tourOpenBtn=document.getElementById('modal-form-open');
  const tourRing=document.getElementById('tour-ring');
  const tourCallout=document.getElementById('tour-callout');
  const tourIco=document.getElementById('tour-callout-ico');
  const tourT=document.getElementById('tour-callout-t');
  const tourD=document.getElementById('tour-callout-d');
  const tourNav=document.getElementById('tour-nav');
  const tourCursor=document.getElementById('tour-cursor');
  const tourDevice=tourFrame.closest('.tour-device');

  // Solo corre mientras el frame esté en viewport y la pestaña visible.
  const tourOnScreen=watchOnScreen(tourFrame);

  // El botón outline flota lento y aleatorio dentro del frame — alcanzable con calma
  let btnFloatFrozen=false;
  function floatBtn(){
    const fw=tourFrame.clientWidth,fh=tourFrame.clientHeight;
    const bw=tourOpenBtn.offsetWidth,bh=tourOpenBtn.offsetHeight;
    const maxLeft=Math.max(0,fw-bw-16),maxTop=Math.max(0,fh-bh-16);
    tourOpenBtn.style.left=(8+Math.random()*maxLeft)+'px';
    tourOpenBtn.style.top=(8+Math.random()*maxTop)+'px';
  }
  function scheduleFloat(){
    if(btnFloatFrozen||tourOverlay.classList.contains('open')||!tourOnScreen()||document.hidden){
      setTimeout(scheduleFloat,200);
      return;
    }
    floatBtn();
    setTimeout(scheduleFloat,4000);
  }
  function stopFloat(){
    const r=rectIn(tourOpenBtn);
    tourOpenBtn.style.transition='none';
    tourOpenBtn.style.left=r.left+'px';tourOpenBtn.style.top=r.top+'px';
    tourOpenBtn.offsetHeight;
    tourOpenBtn.style.transition='';
  }
  floatBtn();
  scheduleFloat();

  function placeCursor(r,noTransition){
    if(noTransition)tourCursor.style.transition='none';
    tourCursor.style.left=r.left+'px';tourCursor.style.top=r.top+'px';
    if(noTransition){tourCursor.offsetHeight;tourCursor.style.transition='';}
  }

  const TOUR_STEPS=[
    {sel:'#modal-form-open',icon:'🖱️',title:'Botón outline',desc:'Acción secundaria que abre el modal: solo borde, sin relleno.'},
    {sel:'[data-tour="hero-title"]',icon:'🔤',title:'Título del modal',desc:'Arriba a la izquierda del encabezado. Tipografía Conthrax (--font-display), 700, 1.2rem, blanco.'},
    {sel:'[data-tour="hero-sub"]',icon:'💬',title:'Subtítulo',desc:'Debajo del título, en Titillium Web (--font-body), 0.82rem — explica en una línea la utilidad del modal.'},
    {sel:'[data-tour="hero"]',icon:'🖼️',title:'Imagen de fondo (opcional)',desc:'Circuito decorativo bajo un degradado hacia var(--bg-surface): blanco #FFFFFF en claro, #2E4A78 en oscuro. Es un detalle opcional — el header funciona igual con fondo liso.'},
    {sel:'[data-tour="close"]',icon:'✕',title:'Botón de cierre',desc:'Fijo arriba a la derecha del encabezado, siempre visible y con alto contraste sobre el color.'},
    {sel:'[data-tour="section1"]',icon:'▎',title:'Agrupar por secciones',desc:'Divide el formulario en bloques cortos: etiqueta en mayúsculas + barra de color a la izquierda.'},
    {sel:'[data-tour="label-pos"]',icon:'🏷️',title:'Título del campo',desc:'Va siempre encima del input, nunca al lado ni dentro de él.'},
    {sel:'[data-tour="required"]',icon:'❗',title:'Campo obligatorio',desc:'Asterisco en color de error (--cts-error) justo junto al título del campo.'},
    {sel:'[data-tour="input-style"]',icon:'▢',title:'Estilo del input',desc:'Sin relleno de color, borde de 1px: rgba(0,0,0,.23) claro / rgba(255,255,255,.23) oscuro. Al pasar el cursor, borde azul; al enfocar, azul de marca más sólido. Radio 8px (--r-md); el modal usa 12px (--r-lg).'},
    {sel:'[data-tour="grid1"]',icon:'▾',title:'Selección y opciones',desc:'Select para elegir entre opciones cerradas y predefinidas; checkbox para un valor booleano (sí/no).'},
    {sel:'[data-tour="disabled"]',icon:'🔒',title:'Campo deshabilitado',desc:'Fondo apagado y cursor not-allowed, para datos no editables (ej. valores autogenerados).'},
    {sel:'[data-tour="placeholder"]',icon:'✏️',title:'Placeholder',desc:'Los inputs vacíos muestran un ejemplo en gris; nunca repitas el título dentro del campo.'},
    {sel:'[data-tour="footer"]',icon:'✅',title:'Botones de acción',desc:'Cancelar en ghost/outline a la izquierda; Guardar sólido a la derecha, confirma y cierra el modal.'}
  ];

  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  function rectIn(el){
    const t=el.getBoundingClientRect(),f=tourFrame.getBoundingClientRect();
    return{top:t.top-f.top,left:t.left-f.left,width:t.width,height:t.height};
  }
  function ringTo(r){
    tourRing.style.top=(r.top-6)+'px';tourRing.style.left=(r.left-6)+'px';
    tourRing.style.width=(r.width+12)+'px';tourRing.style.height=(r.height+12)+'px';
    tourRing.style.opacity='1';
  }
  function calloutTo(r,step){
    tourIco.textContent=step.icon;tourT.textContent=step.title;tourD.textContent=step.desc;
    const cw=230,fw=tourFrame.clientWidth,fh=tourFrame.clientHeight,ch=tourCallout.offsetHeight||90;
    let left=r.left+r.width+18;
    if(left+cw>fw-8)left=r.left-cw-18;
    if(left<8)left=8;
    let top=r.top+r.height/2-28;
    top=Math.max(8,Math.min(top,fh-ch-8));
    tourCallout.style.left=left+'px';tourCallout.style.top=top+'px';
    tourCallout.style.opacity='1';
  }
  function hideTour(){tourRing.style.opacity='0';tourCallout.style.opacity='0';tourCursor.style.opacity='0'}

  // El loop nunca se detiene: un click solo lo pausa un rato y luego sigue solo.
  let tourPaused=false,resumeTimer=null;
  function pauseFor(ms){
    tourPaused=true;
    clearTimeout(resumeTimer);
    resumeTimer=setTimeout(()=>{tourPaused=false},ms);
  }
  async function waitIfPaused(){
    while(tourPaused||!tourOnScreen()||document.hidden)await sleep(150);
  }

  // Índice lateral: navega directo a cualquier especificación sin esperar el loop automático
  const tourNavItems=[];
  function setActiveNav(step){
    tourNavItems.forEach(n=>n.classList.remove('active'));
    if(!step)return;
    const btn=tourNavItems.find(n=>n.dataset.sel===step.sel);
    if(btn)btn.classList.add('active');
  }
  if(tourNav){
    TOUR_STEPS.forEach((step,i)=>{
      const b=document.createElement('button');
      b.type='button';b.className='tour-nav-item';b.textContent=step.title;b.dataset.sel=step.sel;
      tourNavItems.push(b);
      b.addEventListener('click',()=>{
        pauseFor(6000);
        setActiveNav(step);
        const needsOpen=step.sel!=='#modal-form-open';
        tourOverlay.classList.toggle('open',needsOpen);
        if(!needsOpen)hideTour();
        setTimeout(()=>{
          const target=tourFrame.querySelector(step.sel);
          if(!target)return;
          const r=rectIn(target);
          ringTo(r);
          if(needsOpen)calloutTo(r,step);
        },needsOpen?300:0);
      });
      tourNav.appendChild(b);
    });
  }

  async function runTour(){
    while(true){
      await waitIfPaused();
      hideTour();
      setActiveNav(null);
      tourOverlay.classList.remove('open');
      await sleep(1000);
      await waitIfPaused();

      btnFloatFrozen=true;
      stopFloat();
      const btnRect=rectIn(tourOpenBtn);
      placeCursor({left:btnRect.left+btnRect.width+50,top:btnRect.top+70},true);
      tourCursor.style.opacity='1';
      ringTo(btnRect);
      setActiveNav(TOUR_STEPS[0]);
      await sleep(300);
      placeCursor({left:btnRect.left+btnRect.width/2-2,top:btnRect.top+btnRect.height/2-2});
      await sleep(600);
      tourOpenBtn.classList.add('tour-press');
      tourCursor.classList.add('press');
      await sleep(160);
      tourOpenBtn.classList.remove('tour-press');
      tourCursor.classList.remove('press');
      tourOverlay.classList.add('open');
      tourRing.style.opacity='0';
      tourCursor.style.opacity='0';
      btnFloatFrozen=false;
      await sleep(550);

      for(const step of TOUR_STEPS.slice(1)){
        await waitIfPaused();
        if(!tourOverlay.classList.contains('open'))break;
        const target=tourFrame.querySelector(step.sel);
        if(!target){await sleep(150);continue;}
        const r=rectIn(target);
        ringTo(r);
        calloutTo(r,step);
        setActiveNav(step);
        await sleep(2200);
        await waitIfPaused();
        if(!tourOverlay.classList.contains('open'))break;
        tourCallout.style.opacity='0';
        await sleep(220);
      }
      hideTour();
      setActiveNav(null);
      await sleep(700);
    }
  }
  runTour();

  // Abrir manualmente el botón: pausa el loop un rato para no pelear con el click real
  tourOpenBtn.addEventListener('pointerdown',()=>pauseFor(2500));

  // Click para inspeccionar: clic en cualquier parte del modal muestra su descripción
  // y pausa el loop; luego sigue solo. Capture phase para adelantarse al click de
  // cerrar/guardar del botón real.
  tourOverlay.addEventListener('click',e=>{
    const el=e.target.closest('[data-tour]');
    if(!el){
      if(e.target===tourOverlay)pauseFor(1200);
      return;
    }
    if(e.target.closest('[data-close]')){pauseFor(1200);return}
    e.preventDefault();e.stopPropagation();
    const step=TOUR_STEPS.find(s=>s.sel===`[data-tour="${el.getAttribute('data-tour')}"]`);
    if(!step)return;
    pauseFor(2600);
    const r=rectIn(el);
    ringTo(r);
    calloutTo(r,step);
  },true);

  // Si el modal se cierra por cualquier vía (click afuera, Cancelar, Guardar, X),
  // el ring/callout no dependen del overlay: hay que ocultarlos al instante.
  // La ventana del navegador se oculta mientras el modal está abierto, para dar foco al modal.
  new MutationObserver(()=>{
    const open=tourOverlay.classList.contains('open');
    if(!open)hideTour();
    if(tourDevice)tourDevice.classList.toggle('chrome-hidden',open);
  }).observe(tourOverlay,{attributes:true,attributeFilter:['class']});
  }
}
