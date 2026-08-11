// src/sections/nav-comp/script.ts
//
// "Tab interactivity" — extracted verbatim from the big inline <script>
// block (index.html ~3515-3516).
//
// FLAG: verified via grep that no element in the current HTML uses
// class="tab" or class="tabs" (the generic classes this handler targets).
// nav-comp's actual tab demos use `.btn-tab`/`.btn-tab-group` instead, which
// have their `active` state hardcoded in the markup and never wired to JS.
// This handler is therefore currently a no-op; kept verbatim per the "don't
// silently skip" rule rather than dropped, since the target spec explicitly
// asked for "tabs JS" to live in this section.
import '../../styles/sections/nav-comp.css';

// Demo markup relocated verbatim from index.html's #nav-comp
// .sec-full-content (breadcrumb, tabs, filter bars).
function renderNavComp() {
  return `

  <div class="g2">

    <!-- Breadcrumb -->
    <div class="card">
    <div class="ch"><h3>Breadcrumb</h3><p>Navegación jerárquica</p></div>
    <div class="cb" style="display:flex;flex-direction:column;gap:14px">
      <div class="bc">
        <a href="#">Sección principal</a>
        <span class="sep">›</span>
        <a href="#">Nombre del proyecto</a>
        <span class="sep">›</span>
        <a href="#">Nombre del tablero</a>
        <span class="sep">›</span>
        <span class="cur" style="color:var(--cts-blue);font-weight:600">COD-000</span>
      </div>
    </div>
    </div>

    <!-- Tabs con íconos -->
    <div class="card">
    <div class="ch"><h3>Tabs con íconos</h3><p>Panel o componente</p></div>
    <div class="cb">
        <div class="btn-tab-group">
          <button class="btn-tab active">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            General
          </button>
          <button class="btn-tab">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Equipos
          </button>
          <button class="btn-tab">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Tableros
          </button>
          <button class="btn-tab">Actividad</button>
        </div>
    </div>
    </div>

    <!-- Tabs solo texto -->
    <div class="card">
    <div class="ch"><h3>Tabs solo texto</h3><p>Panel o componente</p></div>
    <div class="cb">
        <div class="btn-tab-group">
          <button class="btn-tab active">Diario</button>
          <button class="btn-tab">Semanal</button>
          <button class="btn-tab">Mensual</button>
          <button class="btn-tab">Anual</button>
        </div>
    </div>
    </div>

    <!-- Filtro — búsqueda + dropdowns -->
    <div class="card">
    <div class="ch"><h3>Filtro — búsqueda + dropdowns</h3><p>Ej. catálogo</p></div>
    <div class="cb">
        <div class="filter-bar">
          <div class="fb-search">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <span style="font-size:.88rem;color:var(--tx-muted)">Buscar...</span>
          </div>
          <div class="fb-div"></div>
          <button class="fb-drop">Fabricante
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <button class="fb-drop">Estado
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <button class="fb-drop">Categoría
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>
    </div>
    </div>

    <!-- Filtro — selects etiquetados -->
    <div class="card">
    <div class="ch"><h3>Filtro — selects etiquetados</h3><p>Ej. proyectos</p></div>
    <div class="cb">
        <div class="filter-bar">
          <button class="filter-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            Filtros
          </button>
          <div class="fb-div"></div>
          <div class="fb-select">
            <span class="fb-select-lbl">Prioridad</span>
            <div class="fb-select-val">Todas
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
          <div class="fb-div"></div>
          <div class="fb-select">
            <span class="fb-select-lbl">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
              Ordenar por
            </span>
            <div class="fb-select-val">Nombre A → Z
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
`;
}

export function initNavComp() {
  document.querySelector('#nav-comp .sec-full-content').innerHTML = renderNavComp();

  // Tab interactivity
  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{t.closest('.tabs').querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));t.classList.add('active')}));
}
