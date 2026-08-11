// src/sections/views/recursos/script.ts
//
// Extracted verbatim from the last inline <script> block (index.html
// 3570-3610): the LOGO_GROUPS / ICON_PRODUCTS tile data + renderers, the
// .res-tab category-switching, and the icon search filter.
import '../../../styles/sections/views/recursos.css';

// Datos de tiles (logos/íconos) — antes eran ~260 líneas de HTML repetido a mano
const LOGO_GROUPS=[{"name":"Solo isotipo","variants":[{"cls":"lp-light","img":"assets/logos/logo-cts-principal.png","alt":"Logo CTS solo isotipo — Principal","label":"Principal","png":"assets/logos/logo-cts-principal.png"},{"cls":"lp-blue-tint","img":"assets/logos/logo-cts-azul.png","alt":"Logo CTS solo isotipo — Azul","label":"Azul","png":"assets/logos/logo-cts-azul.png"},{"cls":"lp-blue","img":"assets/logos/logo-cts-blanco.png","alt":"Logo CTS solo isotipo — Blanco","label":"Blanco","png":"assets/logos/logo-cts-blanco.png"},{"cls":"lp-light","img":"assets/logos/logo-cts-gris.png","alt":"Logo CTS solo isotipo — Gris","label":"Gris","png":"assets/logos/logo-cts-gris.png"}]},{"name":"Con slogan","variants":[{"cls":"lp-light","img":"assets/logos/logo-cts-slogan-principal.png","alt":"Logo CTS con slogan — Principal","label":"Principal","png":"assets/logos/logo-cts-slogan-principal.png"},{"cls":"lp-blue-tint","img":"assets/logos/logo-cts-slogan-azul.png","alt":"Logo CTS con slogan — Azul","label":"Azul","png":"assets/logos/logo-cts-slogan-azul.png"},{"cls":"lp-blue","img":"assets/logos/logo-cts-slogan-blanco.png","alt":"Logo CTS con slogan — Blanco","label":"Blanco","png":"assets/logos/logo-cts-slogan-blanco.png"},{"cls":"lp-light","img":"assets/logos/logo-cts-slogan-gris.png","alt":"Logo CTS con slogan — Gris","label":"Gris","png":"assets/logos/logo-cts-slogan-gris.png"}]},{"name":"Con slogan + NIT","variants":[{"cls":"lp-light","img":"assets/logos/logo-cts-slogan-nit-principal.png","alt":"Logo CTS con slogan y NIT — Principal","label":"Principal","png":"assets/logos/logo-cts-slogan-nit-principal.png"},{"cls":"lp-blue-tint","img":"assets/logos/logo-cts-slogan-nit-azul.png","alt":"Logo CTS con slogan y NIT — Azul","label":"Azul","png":"assets/logos/logo-cts-slogan-nit-azul.png"},{"cls":"lp-blue","img":"assets/logos/logo-cts-slogan-nit-blanco.png","alt":"Logo CTS con slogan y NIT — Blanco","label":"Blanco","png":"assets/logos/logo-cts-slogan-nit-blanco.png"},{"cls":"lp-light","img":"assets/logos/logo-cts-slogan-nit-gris.png","alt":"Logo CTS con slogan y NIT — Gris","label":"Gris","png":"assets/logos/logo-cts-slogan-nit-gris.png"}]},{"name":"Con NIT","variants":[{"cls":"lp-light","img":"assets/logos/logo-cts-nit-principal.png","alt":"Logo CTS con NIT — Principal","label":"Principal","png":"assets/logos/logo-cts-nit-principal.png"},{"cls":"lp-blue-tint","img":"assets/logos/logo-cts-nit-azul.png","alt":"Logo CTS con NIT — Azul","label":"Azul","png":"assets/logos/logo-cts-nit-azul.png"},{"cls":"lp-blue","img":"assets/logos/logo-cts-nit-blanco.png","alt":"Logo CTS con NIT — Blanco","label":"Blanco","png":"assets/logos/logo-cts-nit-blanco.png"},{"cls":"lp-light","img":"assets/logos/logo-cts-nit-gris.png","alt":"Logo CTS con NIT — Gris","label":"Gris","png":"assets/logos/logo-cts-nit-gris.png"}]}];
const ICON_PRODUCTS=[{"name":"B-Storage","variants":[{"cls":"lp-light","img":"assets/icons/png/b-storage.png","alt":"B-Storage principal","label":"Principal","png":"assets/icons/png/b-storage.png","svg":"assets/icons/svg/b-storage.svg"}]},{"name":"B-Rack","variants":[{"cls":"lp-light","img":"assets/icons/png/b-rack.png","alt":"B-Rack principal","label":"Principal","png":"assets/icons/png/b-rack.png","svg":"assets/icons/svg/b-rack.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/b-rack-azul.png","alt":"B-Rack azul","label":"Azul","png":"assets/icons/png/b-rack-azul.png","svg":"assets/icons/svg/b-rack-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/b-rack-blanco.png","alt":"B-Rack blanco","label":"Blanco","png":"assets/icons/png/b-rack-blanco.png","svg":"assets/icons/svg/b-rack-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/b-rack-gris.png","alt":"B-Rack gris","label":"Gris","png":"assets/icons/png/b-rack-gris.png","svg":"assets/icons/svg/b-rack-gris.svg"}]},{"name":"C-Board","variants":[{"cls":"lp-light","img":"assets/icons/png/c-board.png","alt":"C-Board principal","label":"Principal","png":"assets/icons/png/c-board.png","svg":"assets/icons/svg/c-board.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/c-board-azul.png","alt":"C-Board azul","label":"Azul","png":"assets/icons/png/c-board-azul.png","svg":"assets/icons/svg/c-board-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/c-board-blanco.png","alt":"C-Board blanco","label":"Blanco","png":"assets/icons/png/c-board-blanco.png"},{"cls":"lp-gray","img":"assets/icons/png/c-board-gris.png","alt":"C-Board gris","label":"Gris","png":"assets/icons/png/c-board-gris.png"}]},{"name":"C-Box","variants":[{"cls":"lp-light","img":"assets/icons/png/c-box.png","alt":"C-Box principal","label":"Principal","png":"assets/icons/png/c-box.png","svg":"assets/icons/svg/c-box.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/c-box-azul.png","alt":"C-Box azul","label":"Azul","png":"assets/icons/png/c-box-azul.png","svg":"assets/icons/svg/c-box-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/c-box-blanco.png","alt":"C-Box blanco","label":"Blanco","png":"assets/icons/png/c-box-blanco.png","svg":"assets/icons/svg/c-box-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/c-box-gris.png","alt":"C-Box gris","label":"Gris","png":"assets/icons/png/c-box-gris.png","svg":"assets/icons/svg/c-box-gris.svg"}]},{"name":"D-Critical","variants":[{"cls":"lp-light","img":"assets/icons/png/d-critical.png","alt":"D-Critical principal","label":"Principal","png":"assets/icons/png/d-critical.png","svg":"assets/icons/svg/d-critical.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/d-critical-azul.png","alt":"D-Critical azul","label":"Azul","png":"assets/icons/png/d-critical-azul.png","svg":"assets/icons/svg/d-critical-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/d-critical-blanco.png","alt":"D-Critical blanco","label":"Blanco","png":"assets/icons/png/d-critical-blanco.png","svg":"assets/icons/svg/d-critical-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/d-critical-gris.png","alt":"D-Critical gris","label":"Gris","png":"assets/icons/png/d-critical-gris.png","svg":"assets/icons/svg/d-critical-gris.svg"}]},{"name":"E-Center","variants":[{"cls":"lp-light","img":"assets/icons/png/e-center.png","alt":"E-Center principal","label":"Principal","png":"assets/icons/png/e-center.png","svg":"assets/icons/svg/e-center.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/e-center-azul.png","alt":"E-Center azul","label":"Azul","png":"assets/icons/png/e-center-azul.png","svg":"assets/icons/svg/e-center-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/e-center-blanco.png","alt":"E-Center blanco","label":"Blanco","png":"assets/icons/png/e-center-blanco.png","svg":"assets/icons/svg/e-center-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/e-center-gris.png","alt":"E-Center gris","label":"Gris","png":"assets/icons/png/e-center-gris.png","svg":"assets/icons/svg/e-center-gris.svg"}]},{"name":"G-Flex","variants":[{"cls":"lp-light","img":"assets/icons/png/g-flex.png","alt":"G-Flex principal","label":"Principal","png":"assets/icons/png/g-flex.png","svg":"assets/icons/svg/g-flex.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/g-flex-azul.png","alt":"G-Flex azul","label":"Azul","png":"assets/icons/png/g-flex-azul.png","svg":"assets/icons/svg/g-flex-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/g-flex-blanco.png","alt":"G-Flex blanco","label":"Blanco","png":"assets/icons/png/g-flex-blanco.png","svg":"assets/icons/svg/g-flex-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/g-flex-gris.png","alt":"G-Flex gris","label":"Gris","png":"assets/icons/png/g-flex-gris.png","svg":"assets/icons/svg/g-flex-gris.svg"}]},{"name":"I-MCC","variants":[{"cls":"lp-light","img":"assets/icons/png/i-mcc.png","alt":"I-MCC principal","label":"Principal","png":"assets/icons/png/i-mcc.png"},{"cls":"lp-blue-tint","img":"assets/icons/png/i-mcc-azul.png","alt":"I-MCC azul","label":"Azul","png":"assets/icons/png/i-mcc-azul.png","svg":"assets/icons/svg/i-mcc-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/i-mcc-blanco.png","alt":"I-MCC blanco","label":"Blanco","png":"assets/icons/png/i-mcc-blanco.png","svg":"assets/icons/svg/i-mcc-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/i-mcc-gris.png","alt":"I-MCC gris","label":"Gris","png":"assets/icons/png/i-mcc-gris.png","svg":"assets/icons/svg/i-mcc-gris.svg"}]},{"name":"K-Master","variants":[{"cls":"lp-light","img":"assets/icons/png/k-master.png","alt":"K-Master principal","label":"Principal","png":"assets/icons/png/k-master.png","svg":"assets/icons/svg/k-master.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/k-master-azul.png","alt":"K-Master azul","label":"Azul","png":"assets/icons/png/k-master-azul.png","svg":"assets/icons/svg/k-master-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/k-master-blanco.png","alt":"K-Master blanco","label":"Blanco","png":"assets/icons/png/k-master-blanco.png"},{"cls":"lp-gray","img":"assets/icons/png/k-master-gris.png","alt":"K-Master gris","label":"Gris","png":"assets/icons/png/k-master-gris.png"}]},{"name":"L-Meter","variants":[{"cls":"lp-light","img":"assets/icons/png/l-meter.png","alt":"L-Meter principal","label":"Principal","png":"assets/icons/png/l-meter.png","svg":"assets/icons/svg/l-meter.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/l-meter-azul.png","alt":"L-Meter azul","label":"Azul","png":"assets/icons/png/l-meter-azul.png","svg":"assets/icons/svg/l-meter-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/l-meter-blanco.png","alt":"L-Meter blanco","label":"Blanco","png":"assets/icons/png/l-meter-blanco.png","svg":"assets/icons/svg/l-meter-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/l-meter-gris.png","alt":"L-Meter gris","label":"Gris","png":"assets/icons/png/l-meter-gris.png","svg":"assets/icons/svg/l-meter-gris.svg"}]},{"name":"M-Board","variants":[{"cls":"lp-light","img":"assets/icons/png/m-board.png","alt":"M-Board principal","label":"Principal","png":"assets/icons/png/m-board.png","svg":"assets/icons/svg/m-board.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/m-board-azul.png","alt":"M-Board azul","label":"Azul","png":"assets/icons/png/m-board-azul.png","svg":"assets/icons/svg/m-board-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/m-board-blanco.png","alt":"M-Board blanco","label":"Blanco","png":"assets/icons/png/m-board-blanco.png","svg":"assets/icons/svg/m-board-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/m-board-gris.png","alt":"M-Board gris","label":"Gris","png":"assets/icons/png/m-board-gris.png","svg":"assets/icons/svg/m-board-gris.svg"}]},{"name":"M-System","variants":[{"cls":"lp-light","img":"assets/icons/png/m-system.png","alt":"M-System principal","label":"Principal","png":"assets/icons/png/m-system.png","svg":"assets/icons/svg/m-system.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/m-system-azul.png","alt":"M-System azul","label":"Azul","png":"assets/icons/png/m-system-azul.png","svg":"assets/icons/svg/m-system-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/m-system-blanco.png","alt":"M-System blanco","label":"Blanco","png":"assets/icons/png/m-system-blanco.png"},{"cls":"lp-gray","img":"assets/icons/png/m-system-gris.png","alt":"M-System gris","label":"Gris","png":"assets/icons/png/m-system-gris.png"}]},{"name":"P-ATS","variants":[{"cls":"lp-light","img":"assets/icons/png/p-ats.png","alt":"P-ATS principal","label":"Principal","png":"assets/icons/png/p-ats.png","svg":"assets/icons/svg/p-ats.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/p-ats-azul.png","alt":"P-ATS azul","label":"Azul","png":"assets/icons/png/p-ats-azul.png","svg":"assets/icons/svg/p-ats-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/p-ats-blanco.png","alt":"P-ATS blanco","label":"Blanco","png":"assets/icons/png/p-ats-blanco.png","svg":"assets/icons/svg/p-ats-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/p-ats-gris.png","alt":"P-ATS gris","label":"Gris","png":"assets/icons/png/p-ats-gris.png","svg":"assets/icons/svg/p-ats-gris.svg"}]},{"name":"Q-Bank","variants":[{"cls":"lp-light","img":"assets/icons/png/q-bank.png","alt":"Q-Bank principal","label":"Principal","png":"assets/icons/png/q-bank.png","svg":"assets/icons/svg/q-bank.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/q-bank-azul.png","alt":"Q-Bank azul","label":"Azul","png":"assets/icons/png/q-bank-azul.png","svg":"assets/icons/svg/q-bank-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/q-bank-blanco.png","alt":"Q-Bank blanco","label":"Blanco","png":"assets/icons/png/q-bank-blanco.png","svg":"assets/icons/svg/q-bank-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/q-bank-gris.png","alt":"Q-Bank gris","label":"Gris","png":"assets/icons/png/q-bank-gris.png","svg":"assets/icons/svg/q-bank-gris.svg"}]},{"name":"QRCloud","variants":[{"cls":"lp-light","img":"assets/icons/png/qrcloud.png","alt":"QRCloud principal","label":"Principal","png":"assets/icons/png/qrcloud.png","svg":"assets/icons/svg/qrcloud.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/qrcloud-azul.png","alt":"QRCloud azul","label":"Azul","png":"assets/icons/png/qrcloud-azul.png","svg":"assets/icons/svg/qrcloud-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/qrcloud-blanco.png","alt":"QRCloud blanco","label":"Blanco","png":"assets/icons/png/qrcloud-blanco.png"},{"cls":"lp-gray","img":"assets/icons/png/qrcloud-gris.png","alt":"QRCloud gris","label":"Gris","png":"assets/icons/png/qrcloud-gris.png"}]},{"name":"S-Energy","variants":[{"cls":"lp-light","img":"assets/icons/png/s-energy.png","alt":"S-Energy principal","label":"Principal","png":"assets/icons/png/s-energy.png","svg":"assets/icons/svg/s-energy.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/s-energy-azul.png","alt":"S-Energy azul","label":"Azul","png":"assets/icons/png/s-energy-azul.png","svg":"assets/icons/svg/s-energy-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/s-energy-blanco.png","alt":"S-Energy blanco","label":"Blanco","png":"assets/icons/png/s-energy-blanco.png","svg":"assets/icons/svg/s-energy-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/s-energy-gris.png","alt":"S-Energy gris","label":"Gris","png":"assets/icons/png/s-energy-gris.png","svg":"assets/icons/svg/s-energy-gris.svg"}]},{"name":"T-Monitor","variants":[{"cls":"lp-light","img":"assets/icons/png/t-monitor.png","alt":"T-Monitor principal","label":"Principal","png":"assets/icons/png/t-monitor.png","svg":"assets/icons/svg/t-monitor.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/t-monitor-azul.png","alt":"T-Monitor azul","label":"Azul","png":"assets/icons/png/t-monitor-azul.png","svg":"assets/icons/svg/t-monitor-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/t-monitor-blanco.png","alt":"T-Monitor blanco","label":"Blanco","png":"assets/icons/png/t-monitor-blanco.png"},{"cls":"lp-gray","img":"assets/icons/png/t-monitor-gris.png","alt":"T-Monitor gris","label":"Gris","png":"assets/icons/png/t-monitor-gris.png"}]},{"name":"T-Power","variants":[{"cls":"lp-light","img":"assets/icons/png/t-power.png","alt":"T-Power principal","label":"Principal","png":"assets/icons/png/t-power.png","svg":"assets/icons/svg/t-power.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/t-power-azul.png","alt":"T-Power azul","label":"Azul","png":"assets/icons/png/t-power-azul.png","svg":"assets/icons/svg/t-power-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/t-power-blanco.png","alt":"T-Power blanco","label":"Blanco","png":"assets/icons/png/t-power-blanco.png","svg":"assets/icons/svg/t-power-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/t-power-gris.png","alt":"T-Power gris","label":"Gris","png":"assets/icons/png/t-power-gris.png","svg":"assets/icons/svg/t-power-gris.svg"}]},{"name":"V-Drive","variants":[{"cls":"lp-light","img":"assets/icons/png/v-drive.png","alt":"V-Drive principal","label":"Principal","png":"assets/icons/png/v-drive.png","svg":"assets/icons/svg/v-drive.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/v-drive-azul.png","alt":"V-Drive azul","label":"Azul","png":"assets/icons/png/v-drive-azul.png","svg":"assets/icons/svg/v-drive-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/v-drive-blanco.png","alt":"V-Drive blanco","label":"Blanco","png":"assets/icons/png/v-drive-blanco.png","svg":"assets/icons/svg/v-drive-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/v-drive-gris.png","alt":"V-Drive gris","label":"Gris","png":"assets/icons/png/v-drive-gris.png","svg":"assets/icons/svg/v-drive-gris.svg"}]},{"name":"X-Proof","variants":[{"cls":"lp-light","img":"assets/icons/png/x-proof.png","alt":"X-Proof principal","label":"Principal","png":"assets/icons/png/x-proof.png","svg":"assets/icons/svg/x-proof.svg"},{"cls":"lp-blue-tint","img":"assets/icons/png/x-proof-azul.png","alt":"X-Proof azul","label":"Azul","png":"assets/icons/png/x-proof-azul.png","svg":"assets/icons/svg/x-proof-azul.svg"},{"cls":"lp-blue","img":"assets/icons/png/x-proof-blanco.png","alt":"X-Proof blanco","label":"Blanco","png":"assets/icons/png/x-proof-blanco.png","svg":"assets/icons/svg/x-proof-blanco.svg"},{"cls":"lp-gray","img":"assets/icons/png/x-proof-gris.png","alt":"X-Proof gris","label":"Gris","png":"assets/icons/png/x-proof-gris.png","svg":"assets/icons/svg/x-proof-gris.svg"}]}];
function tileHTML(v){
  const svg=v.svg?`<a class="dl-btn dl-btn-svg" href="${v.svg}" download>SVG</a>`:'';
  return `<div class="logo-tile"><div class="logo-preview ${v.cls}"><img src="${v.img}" alt="${v.alt}"></div><div class="logo-info"><span class="logo-name">${v.label}</span><div class="icon-btns"><a class="dl-btn" href="${v.png}" download>PNG</a>${svg}</div></div></div>`;
}
function productHTML(p){
  return `<div class="icon-product"><p class="sub">${p.name}</p><div class="icon-variants">${p.variants.map(tileHTML).join('')}</div></div>`;
}
function renderTiles(containerId,data){
  const el=document.getElementById(containerId);
  if(el)el.innerHTML=data.map(productHTML).join('');
}

// Demo markup relocated verbatim from index.html's #view-recursos
// (hero + category tabs + logos/iconos/tipografias panels). The
// #logo-groups-root/#icon-products-root mount points populated by
// renderTiles() below, and #panel-*/.res-tab elements the router (see
// src/router.ts's `recursos-tipografias` deep-link handling) queries,
// must stay intact verbatim.
function renderRecursosView() {
  return `
<div class="res-layout">
<div class="res-layout-left">
<div class="hero">
  <div class="hero-split">
    <h1>Recursos Descargables</h1>
    <div class="hero-side">
      <p>Logos · Íconos de producto · Tipografías</p>
      <div class="chips">
        <span class="chip mode-chip">☀ Modo claro</span>
      </div>
    </div>
  </div>
</div>

  <!-- Tabs de categoría -->
  <p class="res-nav-label">Secciones</p>
  <div class="res-tabs" role="tablist" aria-label="Secciones de recursos">
    <button class="res-tab active" data-panel="logos" role="tab" aria-selected="true" aria-controls="panel-logos">Logos</button>
    <button class="res-tab" data-panel="iconos" role="tab" aria-selected="false" aria-controls="panel-iconos">Íconos de producto</button>
    <button class="res-tab" data-panel="tipografias" role="tab" aria-selected="false" aria-controls="panel-tipografias">Tipografías</button>
  </div>
</div>

<div class="res-layout-right">
<div class="page">

  <!-- ── LOGOS ─────────────────────────────────── -->
  <div class="res-panel active" id="panel-logos" role="tabpanel" aria-label="Logos">
    <div class="card" style="margin-bottom:18px">
      <div class="ch"><h3>Logos</h3><p>PNG · 4 variantes de color × 4 formatos</p></div>
      <div class="cb" id="logo-groups-root"></div>
    </div>
  </div>

  <!-- ── ÍCONOS ─────────────────────────────────── -->
  <div class="res-panel" id="panel-iconos" role="tabpanel" aria-label="Íconos de producto">
    <div class="card">
      <div class="ch" style="display:flex;align-items:center;gap:20px">
        <div>
          <h3>Íconos de producto</h3>
          <p>20 productos · variantes principal, azul, blanco, gris · PNG + SVG</p>
        </div>
        <div class="fb-search" id="icon-search-wrap" style="width:460px;flex:none">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input id="icon-search" type="text" placeholder="Buscar ícono..." aria-label="Buscar ícono de producto" style="border:none;background:none;outline:none;font-family:var(--font-body);font-size:.85rem;color:#fff;width:100%">
        </div>
      </div>
      <div class="cb" id="icon-products-root"></div>
    </div>
  </div>

  <!-- ── TIPOGRAFÍAS ────────────────────────────── -->
  <div class="res-panel" id="panel-tipografias" role="tabpanel" aria-label="Tipografías">
    <div class="g2">
      <div class="card">
        <div class="ch"><h3>Conthrax — Display</h3><p>Comercial · Typodermic Fonts · .otf</p></div>
        <div class="cb">
          <div class="font-grid">
            <div class="font-row"><div class="font-sample"><div class="font-sample-name">Light · 300</div><div class="font-sample-prev" style="font-family:'Conthrax','Arial Narrow',Arial,sans-serif;font-weight:300">Industrias CTS</div></div><div class="font-meta">.otf</div><a class="dl-btn" href="assets/fonts/conthrax/conthrax-light.otf" download>↓ OTF</a></div>
            <div class="font-row"><div class="font-sample"><div class="font-sample-name">Regular · 400</div><div class="font-sample-prev" style="font-family:'Conthrax','Arial Narrow',Arial,sans-serif;font-weight:400">Industrias CTS</div></div><div class="font-meta">.otf</div><a class="dl-btn" href="assets/fonts/conthrax/conthrax-regular.otf" download>↓ OTF</a></div>
            <div class="font-row"><div class="font-sample"><div class="font-sample-name">SemiBold · 600</div><div class="font-sample-prev" style="font-family:'Conthrax','Arial Narrow',Arial,sans-serif;font-weight:600">Industrias CTS</div></div><div class="font-meta">.otf</div><a class="dl-btn" href="assets/fonts/conthrax/conthrax-semibold.otf" download>↓ OTF</a></div>
            <div class="font-row"><div class="font-sample"><div class="font-sample-name">Bold · 700</div><div class="font-sample-prev" style="font-family:'Conthrax','Arial Narrow',Arial,sans-serif;font-weight:700">Industrias CTS</div></div><div class="font-meta">.otf</div><a class="dl-btn" href="assets/fonts/conthrax/conthrax-bold.otf" download>↓ OTF</a></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="ch"><h3>Titillium Web — Body</h3><p>Libre · Google Fonts / SIL OFL · .ttf</p></div>
        <div class="cb">
          <div class="font-grid">
            <div class="font-row"><div class="font-sample"><div class="font-sample-name">Light · 300</div><div class="font-sample-prev" style="font-family:'Titillium Web',Arial,sans-serif;font-weight:300">Texto de contenido</div></div><div class="font-meta">.ttf</div><a class="dl-btn" href="assets/fonts/titillium/TitilliumWeb-Light.ttf" download>↓ TTF</a></div>
            <div class="font-row"><div class="font-sample"><div class="font-sample-name">Regular · 400</div><div class="font-sample-prev" style="font-family:'Titillium Web',Arial,sans-serif;font-weight:400">Texto de contenido</div></div><div class="font-meta">.ttf</div><a class="dl-btn" href="assets/fonts/titillium/TitilliumWeb-Regular.ttf" download>↓ TTF</a></div>
            <div class="font-row"><div class="font-sample"><div class="font-sample-name">SemiBold · 600</div><div class="font-sample-prev" style="font-family:'Titillium Web',Arial,sans-serif;font-weight:600">Texto de contenido</div></div><div class="font-meta">.ttf</div><a class="dl-btn" href="assets/fonts/titillium/TitilliumWeb-SemiBold.ttf" download>↓ TTF</a></div>
            <div class="font-row"><div class="font-sample"><div class="font-sample-name">Bold · 700</div><div class="font-sample-prev" style="font-family:'Titillium Web',Arial,sans-serif;font-weight:700">Texto de contenido</div></div><div class="font-meta">.ttf</div><a class="dl-btn" href="assets/fonts/titillium/TitilliumWeb-Bold.ttf" download>↓ TTF</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</div>
</div>
`;
}

export function initRecursos() {
  document.getElementById('view-recursos').innerHTML = renderRecursosView();

  renderTiles('logo-groups-root',LOGO_GROUPS);
  renderTiles('icon-products-root',ICON_PRODUCTS);

  // Tabs
  document.querySelectorAll('.res-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.res-tab').forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false')});
      document.querySelectorAll('.res-panel').forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected','true');
      document.getElementById('panel-'+tab.dataset.panel).classList.add('active');
    });
  });

  // Buscar ícono de producto
  const iconSearch=document.getElementById('icon-search');
  if(iconSearch){
    iconSearch.addEventListener('input',()=>{
      const q=iconSearch.value.trim().toLowerCase();
      document.querySelectorAll('#panel-iconos .icon-product').forEach(item=>{
        const name=item.querySelector('.sub').textContent.toLowerCase();
        item.style.display=name.includes(q)?'':'none';
      });
    });
  }
}
