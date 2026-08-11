// src/sections/metrics/script.ts
//
// Extracted verbatim from the big inline <script> block:
//   - chart/table toggle (index.html ~3393-3404, "Métricas — alterna cada
//     gráfico con su tabla accesible equivalente")
//   - line chart tooltip (index.html ~3406-3424, "Métricas — tooltip al
//     pasar el cursor sobre cada punto de la línea")
//   - line chart legend toggle (index.html ~3426-3434, "Métricas — leyenda
//     del gráfico de líneas: clic esconde/muestra cada serie")
import '../../styles/sections/metrics.css';

// Demo markup relocated verbatim from index.html's #metrics
// .sec-full-content (KPI tiles, bar chart, line chart, meter, stat strip).
// Injected at the top of initMetrics() before any DOM queries below run.
function renderMetrics() {
  return `

  <div class="stat-strip">
    <div class="stat-item">
      <div class="stat-main">
        <span class="stat-num stat-num-blue">2</span>
        <span class="stat-icon stat-icon-blue"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></span>
      </div>
      <span class="stat-lbl">Métrica 1</span>
      <span class="stat-sub">6 total</span>
    </div>
    <div class="stat-div"></div>
    <div class="stat-item">
      <div class="stat-main">
        <span class="stat-num stat-num-green">1</span>
        <span class="stat-icon stat-icon-green"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>
      </div>
      <span class="stat-lbl">Métrica 2</span>
      <span class="stat-sub">&nbsp;</span>
    </div>
    <div class="stat-div"></div>
    <div class="stat-item">
      <div class="stat-main">
        <span class="stat-num stat-num-neutral">1</span>
        <span class="stat-icon stat-icon-neutral"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/></svg></span>
      </div>
      <span class="stat-lbl">Métrica 3</span>
      <span class="stat-sub">&nbsp;</span>
    </div>
    <div class="stat-div"></div>
    <div class="stat-item">
      <div class="stat-main">
        <span class="stat-num stat-num-purple">11</span>
        <span class="stat-icon stat-icon-purple"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></span>
      </div>
      <span class="stat-lbl">Métrica 4</span>
      <span class="stat-sub">16 total</span>
    </div>
  </div>

  <div class="kpi-grid" style="margin-bottom:20px">
    <div class="kpi-card">
      <div class="kpi-top">
        <div class="kpi-val">128</div>
        <div class="kpi-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div>
      </div>
      <div class="kpi-lbl">KPI 1</div>
      <div class="kpi-delta good"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="18 15 12 9 6 15"/></svg>+12% vs periodo anterior</div>
      <svg class="kpi-spark" viewBox="0 0 100 28" preserveAspectRatio="none">
        <path d="M0,20 L17,18 L34,15 L50,17 L67,11 L84,8 L100,4 L100,28 L0,28 Z" fill="#0065BB" opacity=".12"/>
        <path d="M0,20 L17,18 L34,15 L50,17 L67,11 L84,8 L100,4" fill="none" stroke="#0065BB" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="kpi-card">
      <div class="kpi-top">
        <div class="kpi-val">86</div>
        <div class="kpi-icon" style="background:#DCFCE7;color:#16A34A"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
      </div>
      <div class="kpi-lbl">KPI 2</div>
      <div class="kpi-delta good"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="18 15 12 9 6 15"/></svg>+8% vs periodo anterior</div>
      <svg class="kpi-spark" viewBox="0 0 100 28" preserveAspectRatio="none">
        <path d="M0,22 L17,19 L34,20 L50,14 L67,16 L84,9 L100,6 L100,28 L0,28 Z" fill="#16A34A" opacity=".12"/>
        <path d="M0,22 L17,19 L34,20 L50,14 L67,16 L84,9 L100,6" fill="none" stroke="#16A34A" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="kpi-card">
      <div class="kpi-top">
        <div class="kpi-val">24</div>
        <div class="kpi-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
      </div>
      <div class="kpi-lbl">KPI 3</div>
      <div class="kpi-delta bad"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"/></svg>-3% vs periodo anterior</div>
      <svg class="kpi-spark" viewBox="0 0 100 28" preserveAspectRatio="none">
        <path d="M0,10 L17,13 L34,9 L50,15 L67,12 L84,17 L100,15 L100,28 L0,28 Z" fill="#0065BB" opacity=".12"/>
        <path d="M0,10 L17,13 L34,9 L50,15 L67,12 L84,17 L100,15" fill="none" stroke="#0065BB" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="kpi-card">
      <div class="kpi-top">
        <div class="kpi-val">6</div>
        <div class="kpi-icon" style="background:#FEE2E2;color:#DC2626"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
      </div>
      <div class="kpi-lbl">KPI 4</div>
      <div class="kpi-delta good"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"/></svg>-40% vs periodo anterior</div>
      <svg class="kpi-spark" viewBox="0 0 100 28" preserveAspectRatio="none">
        <path d="M0,4 L17,8 L34,7 L50,14 L67,12 L84,20 L100,23 L100,28 L0,28 Z" fill="#DC2626" opacity=".12"/>
        <path d="M0,4 L17,8 L34,7 L50,14 L67,12 L84,20 L100,23" fill="none" stroke="#DC2626" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
      </svg>
    </div>
    </div>

  <div class="g2">

    <!-- Bar chart -->
    <div class="card">
      <div class="ch"><h3>Gráfica de barras</h3><p>Barra horizontal con leyenda</p></div>
      <div class="cb">
        <div class="chart-head">
          <span></span>
          <button class="table-toggle" data-toggle="bar-metrics">Ver tabla</button>
        </div>
        <div class="bar-rows" id="bar-metrics-chart">
          <div class="bar-row">
            <span class="bar-cat"><span class="dot" style="background:#16A34A"></span>Item 1</span>
            <div class="bar-track"><div class="bar-fill" style="width:100%;background:#16A34A"></div></div>
            <span class="bar-val">86</span>
          </div>
          <div class="bar-row">
            <span class="bar-cat"><span class="dot" style="background:var(--cts-blue)"></span>Item 2</span>
            <div class="bar-track"><div class="bar-fill" style="width:28%;background:var(--cts-blue)"></div></div>
            <span class="bar-val">24</span>
          </div>
          <div class="bar-row">
            <span class="bar-cat"><span class="dot" style="background:#F97316"></span>Item 3</span>
            <div class="bar-track"><div class="bar-fill" style="width:14%;background:#F97316"></div></div>
            <span class="bar-val">12</span>
          </div>
          <div class="bar-row">
            <span class="bar-cat"><span class="dot" style="background:#8F8F8F"></span>Item 4</span>
            <div class="bar-track"><div class="bar-fill" style="width:5%;background:#8F8F8F"></div></div>
            <span class="bar-val">4</span>
          </div>
          <div class="bar-row">
            <span class="bar-cat"><span class="dot" style="background:#DC2626"></span>Item 5</span>
            <div class="bar-track"><div class="bar-fill" style="width:2%;background:#DC2626"></div></div>
            <span class="bar-val">2</span>
          </div>
        </div>
        <table class="chart-table" id="bar-metrics-table" hidden>
          <thead><tr><th>Categoría</th><th>Valor</th></tr></thead>
          <tbody>
            <tr><td>Item 1</td><td>86</td></tr>
            <tr><td>Item 2</td><td>24</td></tr>
            <tr><td>Item 3</td><td>12</td></tr>
            <tr><td>Item 4</td><td>4</td></tr>
            <tr><td>Item 5</td><td>2</td></tr>
          </tbody>
        </table>
        <div class="chart-a11y">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <span><strong>Naranja↔Rojo</strong> y <strong>Naranja↔Verde</strong> no siempre se distinguen (bajo contraste / daltonismo) — por eso cada barra siempre lleva nombre y valor en texto, nunca solo el color.</span>
        </div>
      </div>
    </div>

    <!-- Line chart -->
    <div class="card">
      <div class="ch"><h3>Gráfica de líneas</h3><p>Múltiples series — clic en la leyenda para aislar una</p></div>
      <div class="cb">
        <div class="chart-head">
          <div class="lc-legend">
            <button type="button" class="lc-legend-item" data-series="serie1"><span class="dot" style="background:var(--cts-blue)"></span>Serie 1</button>
            <button type="button" class="lc-legend-item" data-series="serie2"><span class="dot" style="background:#16A34A"></span>Serie 2</button>
            <button type="button" class="lc-legend-item" data-series="serie3"><span class="dot" style="background:#DC2626"></span>Serie 3</button>
          </div>
          <button class="table-toggle" data-toggle="line-metrics">Ver tabla</button>
        </div>
        <div class="line-chart-wrap" id="line-metrics-chart">
          <svg class="line-chart-svg" viewBox="0 0 320 110" preserveAspectRatio="none" id="lc-svg">
            <line class="lc-grid-line" x1="10" y1="10" x2="310" y2="10" stroke-width="1"/>
            <line class="lc-grid-line" x1="10" y1="50" x2="310" y2="50" stroke-width="1"/>
            <line class="lc-grid-line" x1="10" y1="90" x2="310" y2="90" stroke-width="1"/>
            <text class="lc-axis-lbl" x="10" y="104" text-anchor="middle">1</text>
            <text class="lc-axis-lbl" x="60" y="104" text-anchor="middle">2</text>
            <text class="lc-axis-lbl" x="110" y="104" text-anchor="middle">3</text>
            <text class="lc-axis-lbl" x="160" y="104" text-anchor="middle">4</text>
            <text class="lc-axis-lbl" x="210" y="104" text-anchor="middle">5</text>
            <text class="lc-axis-lbl" x="260" y="104" text-anchor="middle">6</text>
            <text class="lc-axis-lbl" x="310" y="104" text-anchor="middle">7</text>
            <g class="lc-series" data-series="serie1">
              <path class="lc-area" d="M10,58 L60,39.33 L110,52.67 L160,20.67 L210,31.33 L260,10 L310,26 L310,90 L10,90 Z"/>
              <path class="lc-line" d="M10,58 L60,39.33 L110,52.67 L160,20.67 L210,31.33 L260,10 L310,26"/>
              <g class="lc-hit" data-series-label="Serie 1" data-label="Punto 1" data-value="12"><circle cx="10" cy="58" r="8" fill="transparent"/><circle class="lc-dot" cx="10" cy="58" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 1" data-label="Punto 2" data-value="19"><circle cx="60" cy="39.33" r="8" fill="transparent"/><circle class="lc-dot" cx="60" cy="39.33" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 1" data-label="Punto 3" data-value="14"><circle cx="110" cy="52.67" r="8" fill="transparent"/><circle class="lc-dot" cx="110" cy="52.67" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 1" data-label="Punto 4" data-value="26"><circle cx="160" cy="20.67" r="8" fill="transparent"/><circle class="lc-dot" cx="160" cy="20.67" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 1" data-label="Punto 5" data-value="22"><circle cx="210" cy="31.33" r="8" fill="transparent"/><circle class="lc-dot" cx="210" cy="31.33" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 1" data-label="Punto 6" data-value="30"><circle cx="260" cy="10" r="8" fill="transparent"/><circle class="lc-dot" cx="260" cy="10" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 1" data-label="Punto 7" data-value="24"><circle cx="310" cy="26" r="8" fill="transparent"/><circle class="lc-dot" cx="310" cy="26" r="3"/></g>
            </g>
            <g class="lc-series" data-series="serie2">
              <path class="lc-line lc-line-creadas" d="M10,50 L60,31.33 L110,44.67 L160,15.33 L210,26 L260,12.67 L310,20.67"/>
              <g class="lc-hit" data-series-label="Serie 2" data-label="Punto 1" data-value="15"><circle cx="10" cy="50" r="8" fill="transparent"/><circle class="lc-dot lc-dot-creadas" cx="10" cy="50" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 2" data-label="Punto 2" data-value="22"><circle cx="60" cy="31.33" r="8" fill="transparent"/><circle class="lc-dot lc-dot-creadas" cx="60" cy="31.33" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 2" data-label="Punto 3" data-value="17"><circle cx="110" cy="44.67" r="8" fill="transparent"/><circle class="lc-dot lc-dot-creadas" cx="110" cy="44.67" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 2" data-label="Punto 4" data-value="28"><circle cx="160" cy="15.33" r="8" fill="transparent"/><circle class="lc-dot lc-dot-creadas" cx="160" cy="15.33" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 2" data-label="Punto 5" data-value="24"><circle cx="210" cy="26" r="8" fill="transparent"/><circle class="lc-dot lc-dot-creadas" cx="210" cy="26" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 2" data-label="Punto 6" data-value="29"><circle cx="260" cy="12.67" r="8" fill="transparent"/><circle class="lc-dot lc-dot-creadas" cx="260" cy="12.67" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 2" data-label="Punto 7" data-value="26"><circle cx="310" cy="20.67" r="8" fill="transparent"/><circle class="lc-dot lc-dot-creadas" cx="310" cy="20.67" r="3"/></g>
            </g>
            <g class="lc-series" data-series="serie3">
              <path class="lc-line lc-line-vencidas" d="M10,79.33 L60,74 L110,82 L160,68.67 L210,76.67 L260,84.67 L310,71.33"/>
              <g class="lc-hit" data-series-label="Serie 3" data-label="Punto 1" data-value="4"><circle cx="10" cy="79.33" r="8" fill="transparent"/><circle class="lc-dot lc-dot-vencidas" cx="10" cy="79.33" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 3" data-label="Punto 2" data-value="6"><circle cx="60" cy="74" r="8" fill="transparent"/><circle class="lc-dot lc-dot-vencidas" cx="60" cy="74" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 3" data-label="Punto 3" data-value="3"><circle cx="110" cy="82" r="8" fill="transparent"/><circle class="lc-dot lc-dot-vencidas" cx="110" cy="82" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 3" data-label="Punto 4" data-value="8"><circle cx="160" cy="68.67" r="8" fill="transparent"/><circle class="lc-dot lc-dot-vencidas" cx="160" cy="68.67" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 3" data-label="Punto 5" data-value="5"><circle cx="210" cy="76.67" r="8" fill="transparent"/><circle class="lc-dot lc-dot-vencidas" cx="210" cy="76.67" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 3" data-label="Punto 6" data-value="2"><circle cx="260" cy="84.67" r="8" fill="transparent"/><circle class="lc-dot lc-dot-vencidas" cx="260" cy="84.67" r="3"/></g>
              <g class="lc-hit" data-series-label="Serie 3" data-label="Punto 7" data-value="7"><circle cx="310" cy="71.33" r="8" fill="transparent"/><circle class="lc-dot lc-dot-vencidas" cx="310" cy="71.33" r="3"/></g>
            </g>
          </svg>
          <div class="chart-tooltip" id="lc-tooltip"></div>
        </div>
        <table class="chart-table" id="line-metrics-table" hidden>
          <thead><tr><th>Punto</th><th>Serie 1</th><th>Serie 2</th><th>Serie 3</th></tr></thead>
          <tbody>
            <tr><td>Punto 1</td><td>12</td><td>15</td><td>4</td></tr>
            <tr><td>Punto 2</td><td>19</td><td>22</td><td>6</td></tr>
            <tr><td>Punto 3</td><td>14</td><td>17</td><td>3</td></tr>
            <tr><td>Punto 4</td><td>26</td><td>28</td><td>8</td></tr>
            <tr><td>Punto 5</td><td>22</td><td>24</td><td>5</td></tr>
            <tr><td>Punto 6</td><td>30</td><td>29</td><td>2</td></tr>
            <tr><td>Punto 7</td><td>24</td><td>26</td><td>7</td></tr>
          </tbody>
        </table>
        <div class="chart-a11y">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <span>Pasa el cursor sobre un punto para ver su valor exacto. Clic en un nombre de la leyenda oculta o muestra esa serie, para comparar de a una.</span>
        </div>
      </div>
    </div>

    <!-- Meter -->
    <div class="card">
      <div class="ch"><h3>Barra de progreso</h3><p>Meter con valor y etiqueta</p></div>
      <div class="cb">
        <div class="meter-head">
          <span class="meter-val">68%</span>
          <span class="meter-lbl">34 de 50</span>
        </div>
        <div class="meter-track"><div class="meter-fill" style="width:68%"></div></div>
      </div>
    </div>

  </div>

`;
}

export function initMetrics() {
  document.querySelector('#metrics .sec-full-content').innerHTML = renderMetrics();

  // Métricas — alterna cada gráfico con su tabla accesible equivalente
  document.querySelectorAll('.table-toggle').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const key=btn.dataset.toggle;
      const chart=document.getElementById(key+'-chart');
      const table=document.getElementById(key+'-table');
      const showingTable=!table.hidden;
      table.hidden=showingTable;
      chart.hidden=!showingTable;
      btn.textContent=showingTable?'Ver tabla':'Ver gráfico';
    });
  });

  // Métricas — tooltip al pasar el cursor sobre cada punto de la línea
  const lcTooltip=document.getElementById('lc-tooltip');
  const lcSvg=document.getElementById('lc-svg');
  if(lcTooltip&&lcSvg){
    lcSvg.querySelectorAll('.lc-hit').forEach(hit=>{
      const dot=hit.querySelector('.lc-dot');
      hit.addEventListener('mouseenter',()=>{
        const svgRect=lcSvg.getBoundingClientRect();
        const wrapRect=lcSvg.parentElement.getBoundingClientRect();
        const cx=parseFloat(dot.getAttribute('cx')),cy=parseFloat(dot.getAttribute('cy'));
        const scaleX=svgRect.width/320,scaleY=svgRect.height/110;
        lcTooltip.style.left=(svgRect.left-wrapRect.left+cx*scaleX)+'px';
        lcTooltip.style.top=(svgRect.top-wrapRect.top+cy*scaleY)+'px';
        lcTooltip.textContent=hit.dataset.seriesLabel+' — '+hit.dataset.label+': '+hit.dataset.value;
        lcTooltip.style.opacity='1';
      });
      hit.addEventListener('mouseleave',()=>{lcTooltip.style.opacity='0'});
    });
  }

  // Métricas — leyenda del gráfico de líneas: clic esconde/muestra cada serie
  document.querySelectorAll('.lc-legend-item').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const series=document.querySelector('.lc-series[data-series="'+btn.dataset.series+'"]');
      if(!series)return;
      const off=series.classList.toggle('lc-off');
      btn.classList.toggle('lc-off',off);
    });
  });
}
