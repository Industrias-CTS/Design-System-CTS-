// src/molecules/section-banner/index.js
//
// Renders the repeated "label column" markup used inside every full-bleed
// section banner (`.cs-full-label-col` inside `.cs-full-in > .cs-full-row`).
// The wrapper elements (`.sec-full-banner`/`.colorspin-full`, `.cs-full-in`,
// `.cs-full-row`, `.cs-full-label-col`, `.sec-full-content`/`.cs-carousel-wrap`)
// stay in index.html — this helper only replaces the *inner* content of
// `.cs-full-label-col` that was duplicated verbatim across 8 sections
// (typo, buttons, inputs, sidebar-comp, nav-comp, badges, metrics, tips) plus
// the very similar (but hint-bearing) markup used by #colors.
//
// Verified against index.html — exact pattern per section (n / title / desc / hint):
//   colors        01 Colores        ...                              hint: yes
//   typo          02 Tipografía     ...                              hint: no
//   buttons       03 Botones        ... (desc contains inline <span>) hint: no
//   inputs        04 Inputs & Modales ...                            hint: no
//   sidebar-comp  05 Sidebar y Topbar ...                            hint: no
//   nav-comp      06 Navegación     ...                              hint: no
//   badges        07 Badges         ...                              hint: yes
//   metrics       08 Métricas       ...                              hint: no
//   tips          09 Consejos       ...                              hint: no
//
// `desc` is inserted as raw HTML (not escaped) because the "Botones" banner
// embeds an inline <span style="..."> inside its description — same
// behavior as the original inline markup.

/**
 * Mounts every section's banner text into its `.cs-full-label-col` at
 * runtime, from the single SECTION_BANNERS source below — replaces what
 * used to be 9 copies of the same n/title/desc/hint markup hand-written
 * in index.html.
 */
export function mountSectionBanners() {
  Object.entries(SECTION_BANNERS).forEach(([id, data]) => {
    const col = document.querySelector(`#${id} .cs-full-label-col`);
    if (col) col.innerHTML = renderSectionBanner(data);
  });
}

/**
 * @param {{n:string, title:string, desc:string, hint?:string}} opts
 * @returns {string} HTML for the contents of a `.cs-full-label-col`
 */
export function renderSectionBanner({ n, title, desc, hint }) {
  return (
    `<span class="sec-n">${n}</span>` +
    `<h2 class="sec-title2">${title}</h2>` +
    `<p class="sec-desc">${desc}</p>` +
    (hint ? `<p class="cs-hint">${hint}</p>` : '')
  );
}

// Convenience: build the whole `.cs-full-label-col` element (not just its
// innerHTML) for callers that render into the DOM directly rather than via
// server/template string interpolation.
export function renderSectionBannerEl(opts) {
  const el = document.createElement('div');
  el.className = 'cs-full-label-col';
  el.innerHTML = renderSectionBanner(opts);
  return el;
}

// Exact copy used by every non-colors section banner, for reference/reuse
// when regenerating index.html markup:
export const SECTION_BANNERS = {
  colors: {
    n: '01',
    title: 'Colores',
    desc: 'Paleta de marca, estados del sistema y fondos por tema.',
    hint:
      'Haz clic en una tarjeta o usa las flechas para recorrerlas. El texto de abajo indica dónde usar cada color. Con los botones "Modo claro / Modo oscuro" cambias los valores según el tema.',
  },
  typo: {
    n: '02',
    title: 'Tipografía',
    desc: 'Conthrax y Titillium Web — jerarquía y escala tipográfica.',
  },
  buttons: {
    n: '03',
    title: 'Botones',
    desc:
      'Variantes, tamaños y estados interactivos. <span style="font-size:.75em;opacity:.7">Prueba tocar alguno.</span>',
  },
  inputs: {
    n: '04',
    title: 'Inputs &amp; Modales',
    desc: 'Campos de formulario, validación, estados y modales.',
  },
  'sidebar-comp': {
    n: '05',
    title: 'Sidebar y Topbar',
    desc: 'Menú lateral colapsado y expandido.',
  },
  'nav-comp': {
    n: '06',
    title: 'Navegación',
    desc: 'Breadcrumb, tabs y barra de filtros.',
  },
  badges: {
    n: '07',
    title: 'Badges',
    desc: 'Etiquetas de estado y prioridad.',
    hint: 'Forma pill (radio completo, --r-full).',
  },
  metrics: {
    n: '08',
    title: 'Métricas',
    desc: 'KPIs, barras, tendencia y progreso.',
  },
  tips: {
    n: '09',
    title: 'Consejos',
    desc:
      'Reglas rápidas para que cualquier página nueva se vea igual de consistente.',
  },
};
