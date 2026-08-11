// src/sections/badges/script.ts
//
// The #badges section has no section-specific behavior in the original
// inline <script> blocks — it's static markup only (badges, priority chips,
// icon guide). This file exists to keep every section's shape consistent in
// main.js (initColors/initTypography/.../initBadges/...); its init() is
// intentionally a no-op.
import '../../styles/sections/badges.css';
import { mountBadgeDemos } from './react-demo.tsx';

// Demo markup relocated verbatim from index.html's #badges
// .sec-full-content (state variants card, priority badges, icon guide
// card). `#badge-demo-variants`/`#badge-demo-dots` mount-point ids
// below are queried by react-demo.tsx's mountBadgeDemos() right after
// this renders — keep them intact.
function renderBadges() {
  return `
  <div class="card">
    <div class="cb" style="display:flex;flex-direction:column;gap:18px">
      <div><p class="sub">Variantes de estado</p>
        <div class="bgrow" id="badge-demo-variants"></div>
      </div>
      <div><p class="sub">Prioridades</p>
        <div class="bgrow">
          <span class="badge bg-alta"><span class="dot"></span>Alta</span>
          <span class="badge bg-media"><span class="dot"></span>Media</span>
          <span class="badge bg-baja"><span class="dot"></span>Baja</span>
        </div>
      </div>
      <div><p class="sub">Con punto de estado</p>
        <div class="bgrow" id="badge-demo-dots"></div>
      </div>
    </div>
  </div>
  <div class="card" style="margin-top:20px">
    <div class="ch"><h3>Íconos</h3><p>Guía de estilo</p></div>
    <div class="cb">
      <p style="font-size:.82rem;color:var(--tx-secondary);line-height:1.5">Íconos outline tipo Feather/Lucide: SVG 24×24, trazo de 2px sin relleno, puntas y uniones redondeadas (stroke-linecap/linejoin round).</p>
      <div style="display:flex;gap:22px;flex-wrap:wrap;margin-top:16px">
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;width:62px">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          <span style="font-size:.66rem;color:var(--tx-secondary);text-align:center">Chevron</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;width:62px">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span style="font-size:.66rem;color:var(--tx-secondary);text-align:center">Más</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;width:62px">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          <span style="font-size:.66rem;color:var(--tx-secondary);text-align:center">Cuadrícula</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;width:62px">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          <span style="font-size:.66rem;color:var(--tx-secondary);text-align:center">Chevron izq.</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;width:62px">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <span style="font-size:.66rem;color:var(--tx-secondary);text-align:center">Usuarios</span>
        </div>
      </div>
    </div>
  </div>
`;
}

export function initBadges() {
  document.querySelector('#badges .sec-full-content').innerHTML = renderBadges();

  mountBadgeDemos();
}
