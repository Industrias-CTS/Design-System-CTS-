// src/molecules/tip-card/index.js
//
// The 9 `.tip-card` blocks rendered inside `#tips .mc-grid`. Copied verbatim
// from index.html lines 2500-2570 (one card per 2500-2506, 2508-2514,
// 2516-2522, 2524-2530, 2532-2538, 2540-2546, 2548-2554, 2556-2562,
// 2564-2570). Only the repeated wrapper markup was factored out into
// renderTipCard(); icon SVG paths, titles and body text are byte-for-byte
// copies of the original — do not paraphrase.

export const TIPS = [
  {
    icon: '<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    title: 'Usa siempre los tokens',
    text: 'Colores, radios, sombras y fuentes solo desde variables CSS (<code>--cts-blue</code>, <code>--r-md</code>, <code>--sh-sm</code>, <code>--font-display</code>). Nada de hex ni px sueltos en un componente nuevo.',
  },
  {
    icon: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    title: 'Cada regla, sus dos temas',
    text: 'Todo estilo nuevo lleva su versión <code>[data-theme="dark"]</code> en el mismo cambio. Un color pensado solo para uno de los dos temas se vuelve invisible en el otro.',
  },
  {
    icon: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    title: 'Reutiliza antes de crear',
    text: 'Revisa si ya existe <code>.card</code>, <code>.badge</code>, <code>.btn</code>, <code>.kpi-card</code> o <code>.stat-strip</code> antes de inventar una clase nueva para lo mismo.',
  },
  {
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    title: 'Un solo estilo de ícono',
    text: 'SVG outline 24×24, trazo de 2px, puntas y uniones redondeadas (estilo Feather/Lucide). No mezclar con íconos rellenos (<code>fill</code>).',
  },
  {
    icon: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',
    title: 'Tipografía por función',
    text: 'Conthrax (<code>--font-display</code>) solo en títulos y cifras destacadas. Titillium Web (<code>--font-body</code>) en todo el resto del contenido.',
  },
  {
    icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    title: 'Revisa en ambos temas',
    text: 'Antes de dar por lista una pantalla nueva, alterna claro/oscuro con el botón de tema y comprueba contraste — no solo cómo se ve por defecto.',
  },
  {
    icon: '<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/>',
    title: 'No abuses de tarjetas y encasillados',
    text: 'Meter cada bloque en <code>.card</code> o en un contenedor con borde y sombra suma peso: visual (la pantalla se recarga y pierde jerarquía) y real (más DOM, más CSS por pintar). Reserva estos encasillados para agrupar contenido que de verdad lo necesita — lo demás puede vivir como texto simple dentro de la sección.',
  },
  {
    icon: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    title: 'Este sistema se actualiza siempre',
    text: 'Cada mejora, componente o recurso nuevo que aparezca más adelante debe sumarse aquí. Esta página no es una versión final: se mantiene viva y creciendo con el proyecto.',
  },
  {
    icon: '<polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    title: 'Cuida el peso de tu página',
    text: 'Comprime imágenes, evita animaciones o librerías JS de más y carga solo las fuentes/íconos que uses. Una pantalla nueva pesada arrastra tiempos de carga para todo el sistema.',
  },
];

/**
 * @param {{icon:string, title:string, text:string}} tip
 * @returns {string} HTML for one `.card.tip-card` block
 */
export function renderTipCard(tip) {
  return (
    `<div class="card tip-card">` +
    `<div class="ch">` +
    `<span class="tip-icon kpi-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${tip.icon}</svg></span>` +
    `<h3>${tip.title}</h3>` +
    `</div>` +
    `<div class="cb"><p style="font-size:.82rem;color:var(--tx-secondary);line-height:1.5">${tip.text}</p></div>` +
    `</div>`
  );
}

/** Renders all 9 tip cards, joined (matches the `.mc-grid` contents of #tips verbatim). */
export function renderTipCards() {
  return TIPS.map(renderTipCard).join('\n');
}
