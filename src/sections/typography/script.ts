// src/sections/typography/script.ts
//
// Extracted verbatim from the big inline <script> block:
//   - marquee cloning loop (index.html ~2987-3009, "Marquee tipográfico")
//   - live type-in demo (index.html ~3011-3019, "Escala tipográfica — texto
//     editable en vivo")
import '../../styles/sections/typography.css';
import { watchOnScreen } from '../../shared/on-screen.ts';

// Demo markup relocated verbatim from index.html's #typo
// .sec-full-content (live type-in card + type-scale rows). The
// marquee tracks live OUTSIDE .sec-full-content (siblings at the
// .sec-full-banner level) and are untouched, still static in index.html.
// `#ty-input` below is queried by initTypography() right after this
// renders — keep it intact.
function renderTypography() {
  return `
  <div class="card">
    <div class="cb">
      <div class="ty-input-wrap" style="display:flex;align-items:center;gap:12px;margin-left:-5px">
        <input type="text" id="ty-input" class="ty-input" style="flex:1" placeholder="Escribe aquí para ver tu texto en las 10 variantes...">
        <a href="#recursos-tipografias" class="btn-expand ty-dl-btn" aria-label="Descargar tipografías">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12"/><path d="M6 12l6 6 6-6"/><path d="M4 20h16"/></svg>
          <span class="btn-expand-label">Descargar</span>
        </a>
      </div>
      <div class="g2" style="margin-bottom:20px">
        <div>
          <div class="ch"><h3>Conthrax — Display</h3><p>Títulos, portadas, separadores</p></div>
          <p style="font-size:.7rem;font-weight:700;color:#ffb300;margin-top:12px">⚠ Fuente comercial — Typodermic Fonts. Requiere licencia.</p>
        </div>
        <div>
          <div class="ch"><h3>Titillium Web — Body</h3><p>Contenido, UI, manuales, fichas</p></div>
          <p style="font-size:.7rem;font-weight:700;color:#4ade80;margin-top:12px">✓ Libre — Google Fonts / SIL OFL</p>
        </div>
      </div>
      <div class="ty-scale-grid">
      <div class="ty-row"><div class="ty-meta"><code>h1</code><span class="td">Conthrax Bold · 48px</span></div><div class="ty-sample" data-default="Título" style="font-family:var(--font-display);font-size:clamp(1.3rem,3vw,2rem);font-weight:700;color:var(--tx-primary);line-height:1.2">Título</div></div>
      <div class="ty-row"><div class="ty-meta"><code>h2</code><span class="td">Conthrax Bold · 36px</span></div><div class="ty-sample" data-default="Secciones" style="font-family:var(--font-display);font-size:clamp(1.1rem,2.4vw,1.6rem);font-weight:700;color:var(--tx-primary);line-height:1.25">Secciones</div></div>
      <div class="ty-row"><div class="ty-meta"><code>h3</code><span class="td">Conthrax SemiBold · 30px</span></div><div class="ty-sample" data-default="Encabezado de tarjeta" style="font-family:var(--font-display);font-size:1.3rem;font-weight:600;color:var(--tx-primary)">Encabezado de tarjeta</div></div>
      <div class="ty-row"><div class="ty-meta"><code>h4</code><span class="td">Conthrax SemiBold · 24px</span></div><div class="ty-sample" data-default="Encabezado menor" style="font-family:var(--font-display);font-size:1.15rem;font-weight:600;color:var(--tx-primary)">Encabezado menor</div></div>
      <div class="ty-row"><div class="ty-meta"><code>subtitle</code><span class="td">Conthrax Reg · 20px</span></div><div class="ty-sample" data-default="Subtítulo" style="font-family:var(--font-display);font-size:1rem;font-weight:400;color:var(--tx-secondary)">Subtítulo</div></div>
      <div class="ty-row"><div class="ty-meta"><code>body-lg</code><span class="td">Titillium Reg · 18px</span></div><div class="ty-sample" data-default="Texto destacado" style="font-size:.95rem;color:var(--tx-primary)">Texto destacado</div></div>
      <div class="ty-row"><div class="ty-meta"><code>body</code><span class="td">Titillium Reg · 16px</span></div><div class="ty-sample" data-default="Texto de cuerpo" style="font-size:.88rem;color:var(--tx-primary)">Texto de cuerpo</div></div>
      <div class="ty-row"><div class="ty-meta"><code>body-sm</code><span class="td">Titillium Reg · 14px</span></div><div class="ty-sample" data-default="Texto secundario" style="font-size:.8rem;color:var(--tx-secondary)">Texto secundario</div></div>
      <div class="ty-row"><div class="ty-meta"><code>label</code><span class="td">Titillium Bold · 14px</span></div><div class="ty-sample" data-default="Etiqueta de campo" style="font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--tx-primary)">Etiqueta de campo</div></div>
      <div class="ty-row"><div class="ty-meta"><code>caption</code><span class="td">Titillium Reg · 12px</span></div><div class="ty-sample" data-default="Pie de elemento · metadata · Actualizado: 12/05/2026" style="font-size:.72rem;color:var(--tx-muted)">Pie de elemento · metadata · Actualizado: 12/05/2026</div></div>
      </div>
    </div>
  </div>
`;
}

export function initTypography() {
  document.querySelector('#typo .sec-full-content').innerHTML = renderTypography();

  // Marquee tipográfico — clona el contenido hasta llenar el ancho, para loop sin huecos
  document.querySelectorAll('.ty-marquee-track').forEach(track=>{
    const unit=track.querySelector('span:not([aria-hidden])').textContent;
    const containerWidth=track.parentElement.clientWidth;
    track.innerHTML='';
    const real=document.createElement('span');
    track.appendChild(real);
    let w=0,prevW=-1;
    while(w<containerWidth&&w>prevW){
      const s=document.createElement('span');
      s.textContent=unit;
      real.appendChild(s);
      prevW=w;
      w=real.getBoundingClientRect().width;
    }
    if(!real.childElementCount){const s=document.createElement('span');s.textContent=unit;real.appendChild(s);}
    const dup=real.cloneNode(true);
    dup.setAttribute('aria-hidden','true');
    track.appendChild(dup);

    // Solo anima mientras esté en viewport y la pestaña visible.
    watchOnScreen(track,onScreen=>{track.style.animationPlayState=(onScreen&&!document.hidden)?'running':'paused'});
  });

  // Escala tipográfica — texto editable en vivo
  const tyInput=document.getElementById('ty-input');
  if(tyInput){
    const tySamples=document.querySelectorAll('.ty-sample');
    tyInput.addEventListener('input',()=>{
      const v=tyInput.value;
      tySamples.forEach(el=>{el.textContent=v||el.dataset.default});
    });
  }
}
