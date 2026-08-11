// src/router.js
//
// Extracted verbatim from the first inline <script> block (index.html
// 2736-2769), "ROUTER — una sola entrada (index.html), vistas por hash".
// The original was a self-executing IIFE that ran immediately (including
// calling route() once and registering the hashchange listener at parse
// time); initRouter() preserves that exact behavior, just called explicitly
// from main.js instead of running as an inline <script>.

export function initRouter() {
  /* ══ ROUTER — una sola entrada (index.html), vistas por hash ══ */
  function showView(view){
    document.querySelectorAll('.view').forEach(v => v.hidden = (v.id !== 'view-' + view));
    document.getElementById('topnav').hidden = (view === 'login');
    document.body.dataset.view = view;
  }
  function route(){
    const hash = location.hash.slice(1);
    if (hash === 'login' || hash === 'recursos' || hash === 'recursos-tipografias') {
      showView(hash === 'login' ? 'login' : 'recursos');
      if (hash === 'recursos-tipografias') {
        document.querySelectorAll('.res-tab').forEach(t => {t.classList.remove('active');t.setAttribute('aria-selected','false')});
        document.querySelectorAll('.res-panel').forEach(p => p.classList.remove('active'));
        const tab = document.querySelector('.res-tab[data-panel="tipografias"]');
        const panel = document.getElementById('panel-tipografias');
        if (tab) {tab.classList.add('active');tab.setAttribute('aria-selected','true')}
        if (panel) panel.classList.add('active');
      }
    } else {
      showView('design');
      if (hash) {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    }
  }
  window.addEventListener('hashchange', route);
  route();
}
