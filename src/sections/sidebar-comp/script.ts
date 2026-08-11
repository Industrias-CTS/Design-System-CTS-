// src/sections/sidebar-comp/script.ts
//
// Extracted verbatim from the big inline <script> block:
//   - sidebar/topbar animated tour (index.html ~3246-3391, "Tour animado del
//     Sidebar/Topbar — recorre cada parte con anillo + descripción")
//   - real-sidebar collapse/expand (index.html ~3510-3513, "Sidebar real —
//     solo colapsar/expandir, sin más funcionalidad")
//   - generic user-dropdown wiring (index.html ~3517-3526, "User dropdown")
//
// NOTE on wireUserDropdown: the original called it twice —
//   wireUserDropdown('udAvatarBtn','udPanel')   <- dead: no element with
//                                                   these ids exists anywhere
//                                                   in index.html (verified
//                                                   via grep); the function's
//                                                   own `if(!btn||!panel)return`
//                                                   guard makes this a no-op.
//   wireUserDropdown('rsAvatarBtn','rsPanel')    <- live: this is the avatar
//                                                   button inside this
//                                                   section's real-sidebar demo.
// Both calls were kept (verbatim behavior), but the dead one is flagged here
// and in the final report rather than silently dropped.
import '../../styles/sections/sidebar-comp.css';
import { watchOnScreen } from '../../shared/on-screen.ts';

// Demo markup relocated verbatim from index.html's #sidebar-comp
// .sec-full-content (real-sidebar/topbar tour device + its tour-nav mount
// point). `#sb-tour-nav` is populated dynamically below by SB_STEPS —
// its id must stay intact.
function renderSidebarComp() {
  return `
  <div class="tour-layout">
  <div class="tour-device">
    <div class="tour-device-bar"><span></span><span></span><span></span></div>
  <div class="real-sidebar-wrap" id="sbTourFrame">
    <div class="real-sidebar" id="realSidebar">
      <div class="rs-head">
        <div class="rs-logo-icon" id="rsLogo" title="Expandir menú" data-tour="sb-logo">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <span class="rs-logo-name" data-tour="sb-logo-name">CTS</span>
        <button class="rs-toggle" id="rsToggle" title="Colapsar / expandir menú" data-tour="sb-toggle">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
      </div>
      <div class="rs-nav">
        <div class="rs-item si-active" data-tour="sb-active">
          <span class="rs-ico"><svg viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
          <span class="rs-label">Inicio</span>
        </div>
        <div class="rs-item" data-tour="sb-item">
          <span class="rs-ico"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></span>
          <span class="rs-label">Proyectos</span>
        </div>
        <div class="rs-sep" data-tour="sb-sep"></div>
        <div class="rs-item">
          <span class="rs-ico"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
          <span class="rs-label">Usuarios</span>
        </div>
        <div class="rs-item">
          <span class="rs-ico"><svg viewBox="0 0 24 24"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></span>
          <span class="rs-label">Catálogo</span>
        </div>
      </div>
      <div class="rs-foot" data-tour="sb-foot">
        <div class="rs-item">
          <span class="rs-ico"><svg viewBox="0 0 24 24"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></span>
          <span class="rs-label">Configuración</span>
        </div>
        <div class="rs-item">
          <span class="rs-ico"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></span>
          <span class="rs-label">Ayuda</span>
        </div>
      </div>
    </div>
    <div class="rs-app">
      <div class="rs-topbar">
        <div class="rs-topbar-title" data-tour="sb-topbar-title">Inicio</div>
        <div class="rs-topbar-right">
          <span class="rs-topbar-date" data-tour="sb-topbar-date">Miércoles, 5 de agosto de 2026</span>
          <div class="rs-topbar-icon" data-tour="sb-topbar-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>
          </div>
          <div class="rs-topbar-icon" data-tour="sb-topbar-notif">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span class="rs-notif-count">3</span>
          </div>
          <div class="ud-trigger">
            <div class="rs-avatar" id="rsAvatarBtn" style="cursor:pointer" title="Perfil" data-tour="sb-avatar">AB</div>
            <div class="ud-panel" id="rsPanel">
              <div class="ud-av-wrap" data-tour="sb-user-photo">
                <div class="ud-av">AB</div>
              </div>
              <div class="ud-uname" data-tour="sb-user-name">Nombre del usuario</div>
              <div class="ud-role-row" data-tour="sb-user-role">
                <span class="ud-role-badge">Rol del usuario</span>
              </div>
              <div class="ud-div"></div>
              <div class="ud-action" data-tour="sb-user-photo-action">
                <span class="ud-action-ico">
                  <svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                </span>
                <span>Cambiar foto</span>
              </div>
              <div class="ud-action ud-action-danger" data-tour="sb-user-logout">
                <span class="ud-action-ico">
                  <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                </span>
                <span>Cerrar sesión</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rs-content"></div>
    </div>
    <div class="tour-ring" id="sb-tour-ring"></div>
    <div class="tour-callout" id="sb-tour-callout">
      <span class="tour-callout-ico" id="sb-tour-callout-ico"></span>
      <div><div class="tour-callout-t" id="sb-tour-callout-t"></div><div class="tour-callout-d" id="sb-tour-callout-d"></div></div>
    </div>
  </div>
  </div>
  <nav class="tour-nav" id="sb-tour-nav" aria-label="Especificaciones del sidebar"></nav>
  </div>
`;
}

export function initSidebarComp() {
  document.querySelector('#sidebar-comp .sec-full-content').innerHTML = renderSidebarComp();

  // Tour animado del Sidebar/Topbar — recorre cada parte con anillo + descripción
  const sbTourFrame=document.getElementById('sbTourFrame');
  if(sbTourFrame){
    const sbRing=document.getElementById('sb-tour-ring');
    const sbCallout=document.getElementById('sb-tour-callout');
    const sbIco=document.getElementById('sb-tour-callout-ico');
    const sbT=document.getElementById('sb-tour-callout-t');
    const sbD=document.getElementById('sb-tour-callout-d');
    const sbNav=document.getElementById('sb-tour-nav');

    const SB_STEPS=[
      {sel:'[data-tour="sb-logo"]',icon:'🔷',title:'Logo del menú',desc:'Fijo arriba; en modo colapsado funciona como botón para expandir el menú.'},
      {sel:'[data-tour="sb-toggle"]',icon:'↔️',title:'Botón colapsar',desc:'Flecha que colapsa o expande el menú; se oculta cuando el menú ya está colapsado.'},
      {sel:'[data-tour="sb-active"]',icon:'📍',title:'Item activo',desc:'Fondo + borde izquierdo de color indican la sección actual.'},
      {sel:'[data-tour="sb-item"]',icon:'🗂️',title:'Item de navegación',desc:'Ícono de ancho fijo; la etiqueta se oculta al colapsar el menú.'},
      {sel:'[data-tour="sb-sep"]',icon:'➖',title:'Separador',desc:'Línea sutil que agrupa secciones relacionadas del menú.'},
      {sel:'[data-tour="sb-foot"]',icon:'⚙️',title:'Pie del menú',desc:'Acciones secundarias, siempre visibles sin scroll, separadas con línea superior.'},
      {sel:'[data-tour="sb-topbar-title"]',icon:'🏷️',title:'Título de sección',desc:'Nombre de la vista actual, a la izquierda de la topbar.'},
      {sel:'[data-tour="sb-topbar-date"]',icon:'📅',title:'Fecha',desc:'Opcional, a la derecha del título y antes de los íconos de acción.'},
      {sel:'[data-tour="sb-topbar-icon"]',icon:'🌗',title:'Cambiar tema',desc:'Alterna entre modo claro y oscuro.'},
      {sel:'[data-tour="sb-topbar-notif"]',icon:'🔔',title:'Notificaciones',desc:'Ícono con contador de pendientes; el número aparece solo si hay notificaciones sin leer.'},
      {sel:'[data-tour="sb-avatar"]',icon:'👤',title:'Perfil',desc:'Clic abre el dropdown con nombre, rol, cambiar foto y cerrar sesión.'},
      {sel:'[data-tour="sb-user-photo"]',icon:'🖼️',title:'Foto de perfil',desc:'Círculo de 72px centrado arriba del panel; sin foto muestra las iniciales del usuario.'},
      {sel:'[data-tour="sb-user-name"]',icon:'🔤',title:'Nombre del usuario',desc:'Nombre completo en Conthrax (--font-display), 700, centrado debajo de la foto.'},
      {sel:'[data-tour="sb-user-role"]',icon:'🏷️',title:'Rol del usuario',desc:'Badge outline, centrado, con el cargo o rol dentro del sistema.'},
      {sel:'[data-tour="sb-user-photo-action"]',icon:'📷',title:'Cambiar foto',desc:'Acción opcional para subir foto de perfil; si no se define, se muestran las iniciales del usuario.'},
      {sel:'[data-tour="sb-user-logout"]',icon:'🚪',title:'Cerrar sesión',desc:'Misma estructura que las demás acciones, pero en color de error (--cts-error) por ser destructiva.'}
    ];
    const rsPanelEl=document.getElementById('rsPanel');

    const sleep=ms=>new Promise(r=>setTimeout(r,ms));
    function rectIn(el){
      const t=el.getBoundingClientRect(),f=sbTourFrame.getBoundingClientRect();
      return{top:t.top-f.top,left:t.left-f.left,width:t.width,height:t.height};
    }
    function ringTo(r){
      const pad=6,fw=sbTourFrame.clientWidth,fh=sbTourFrame.clientHeight;
      let top=r.top-pad,left=r.left-pad,width=r.width+pad*2,height=r.height+pad*2;
      if(top<0){height+=top;top=0}
      if(left<0){width+=left;left=0}
      if(top+height>fh)height=fh-top;
      if(left+width>fw)width=fw-left;
      sbRing.style.top=top+'px';sbRing.style.left=left+'px';
      sbRing.style.width=width+'px';sbRing.style.height=height+'px';
      sbRing.style.opacity='1';
    }
    function calloutTo(r,step){
      sbIco.textContent=step.icon;sbT.textContent=step.title;sbD.textContent=step.desc;
      const cw=230,fw=sbTourFrame.clientWidth,fh=sbTourFrame.clientHeight,ch=sbCallout.offsetHeight||90;
      let left=r.left+r.width+18;
      if(left+cw>fw-8)left=r.left-cw-18;
      if(left<8)left=8;
      let top=r.top+r.height/2-28;
      top=Math.max(8,Math.min(top,fh-ch-8));
      sbCallout.style.left=left+'px';sbCallout.style.top=top+'px';
      sbCallout.style.opacity='1';
    }

    // Loop nunca se detiene: un click solo lo pausa un rato y luego sigue solo.
    let sbPaused=false,sbResumeTimer=null;
    function pauseFor(ms){sbPaused=true;clearTimeout(sbResumeTimer);sbResumeTimer=setTimeout(()=>{sbPaused=false},ms)}
    // Solo corre mientras el frame esté en viewport y la pestaña visible.
    const sbOnScreen=watchOnScreen(sbTourFrame);
    async function waitIfPaused(){while(sbPaused||!sbOnScreen()||document.hidden)await sleep(150)}

    // Oculto (ej. botón colapsar cuando el menú ya está colapsado) mide 0x0 — no anclar ahí.
    function isVisible(el){const r=el.getBoundingClientRect();return r.width>0&&r.height>0}

    // Los pasos "sb-user-*" viven dentro del dropdown de perfil, cerrado por defecto —
    // hay que abrirlo antes de medir/anclar, y cerrarlo al salir de esos pasos.
    let sbCurrentStep=null;
    function showStep(step){
      const isPanelStep=step.sel.includes('sb-user');
      if(rsPanelEl)rsPanelEl.classList.toggle('open',isPanelStep);
      const target=sbTourFrame.querySelector(step.sel);
      if(!target||!isVisible(target))return false;
      sbCurrentStep=step;
      const r=rectIn(target);
      ringTo(r);
      calloutTo(r,step);
      setActiveNav(step);
      return true;
    }
    function refreshCurrent(){
      if(!sbCurrentStep)return;
      const target=sbTourFrame.querySelector(sbCurrentStep.sel);
      if(!target)return;
      const r=rectIn(target);
      ringTo(r);
      calloutTo(r,sbCurrentStep);
    }

    // Índice lateral: navega directo a cualquier especificación sin esperar el loop automático
    const sbNavItems=[];
    function setActiveNav(step){
      sbNavItems.forEach(n=>n.classList.remove('active'));
      if(!step)return;
      const btn=sbNavItems.find(n=>n.dataset.sel===step.sel);
      if(btn)btn.classList.add('active');
    }
    if(sbNav){
      SB_STEPS.forEach(step=>{
        const b=document.createElement('button');
        b.type='button';b.className='tour-nav-item';b.textContent=step.title;b.dataset.sel=step.sel;
        sbNavItems.push(b);
        b.addEventListener('click',()=>{pauseFor(3000);if(!showStep(step))setActiveNav(null)});
        sbNav.appendChild(b);
      });
    }

    async function runSbTour(){
      while(true){
        for(const step of SB_STEPS){
          await waitIfPaused();
          if(!showStep(step)){await sleep(150);continue;}
          await sleep(2200);
          await waitIfPaused();
          sbCallout.style.opacity='0';
          await sleep(220);
        }
      }
    }
    runSbTour();

    // Click para inspeccionar: clic en cualquier parte pausa el loop y muestra su descripción;
    // no bloquea el click real (colapsar menú, abrir perfil, etc.)
    function sbInspectClick(e){
      const el=e.target.closest('[data-tour]');
      if(!el){pauseFor(1200);return}
      const step=SB_STEPS.find(s=>s.sel===`[data-tour="${el.getAttribute('data-tour')}"]`);
      if(!step)return;
      pauseFor(2600);
      showStep(step);
    }
    sbTourFrame.addEventListener('click',sbInspectClick);
    // El panel de perfil detiene la propagación de sus clics (para no cerrarse solo);
    // se registra aquí, antes que ese listener, para inspeccionar sus partes igual.
    if(rsPanelEl)rsPanelEl.addEventListener('click',sbInspectClick);

    let sbResizeTimer;
    window.addEventListener('resize',()=>{clearTimeout(sbResizeTimer);sbResizeTimer=setTimeout(refreshCurrent,200)});

    // Al colapsar/expandir el sidebar, el anillo debe apuntar a la nueva posición
    const sbSidebarEl=document.getElementById('realSidebar');
    if(sbSidebarEl)sbSidebarEl.addEventListener('transitionend',e=>{if(e.propertyName==='width')refreshCurrent()});
  }

  // Sidebar real — solo colapsar/expandir, sin más funcionalidad
  const rsToggle=document.getElementById('rsToggle'),realSidebar=document.getElementById('realSidebar'),rsLogo=document.getElementById('rsLogo');
  if(rsToggle&&realSidebar)rsToggle.addEventListener('click',()=>realSidebar.classList.add('collapsed'));
  if(rsLogo&&realSidebar)rsLogo.addEventListener('click',()=>realSidebar.classList.remove('collapsed'));

  // User dropdown
  function wireUserDropdown(btnId,panelId){
    const btn=document.getElementById(btnId),panel=document.getElementById(panelId);
    if(!btn||!panel)return;
    btn.addEventListener('click',e=>{e.stopPropagation();panel.classList.toggle('open')});
    panel.addEventListener('click',e=>e.stopPropagation());
    document.addEventListener('click',()=>panel.classList.remove('open'));
  }
  wireUserDropdown('udAvatarBtn','udPanel'); // dead: ids don't exist in current HTML (see header note)
  wireUserDropdown('rsAvatarBtn','rsPanel'); // live: this section's sidebar-tour avatar
}
