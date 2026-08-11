// src/sections/colors/script.ts
//
// Color carousel — extracted verbatim from the big inline <script> block
// (index.html ~2894-2985, "Color carousel — carrusel estilo Apple Music con
// los 6 azules de marca"). Wrapped in an exported initColors() instead of
// running top-level so main.js controls execution order.
import '../../styles/sections/colors.css';
import { watchOnScreen } from '../../shared/on-screen.ts';

export function initColors() {
  // Color carousel — carrusel estilo Apple Music con los 6 azules de marca
  const CS_PALETTE=[
    {name:'Fondo de página',light:'#e8f0f9',dark:'#1F3252',use:'pageBg — Fondo general de la página'},
    {name:'Texto principal',light:'#0d1e38',dark:'#ffffff',use:'text — Color de texto principal'},
    {name:'Texto secundario',light:'#3a5278',dark:'#b4c4dc',use:'textSecondary — Subtítulos y texto de apoyo'},
    {name:'Texto deshabilitado',light:'#5a7a9f',dark:'#93a8c9',use:'textDisabled — Texto e íconos deshabilitados'},
    {name:'Fondo de superficie',light:'#FFFFFF',dark:'#2e4a78',use:'cardBg — Fondo de tarjetas y paneles'},
    {name:'Primario',light:'#0065BB',dark:'#008AFF',use:'primary — Color de foco y estados interactivos'},
    {name:'Color de enlace',light:'#0065BB',dark:'#4a9eff',use:'linkColor — Enlaces de texto'},
    {name:'Color de error',light:'#dc2626',dark:'#f87171',use:'errorColor — Estados de error y bloqueo'},
  ];
  function csHex(item,mode){return item.hex||item[mode]}
  const csCarousel=document.getElementById('cs-carousel');
  if(csCarousel){
  const csBlurBg=document.getElementById('cs-blurbg'),
        csPlayerSwatch=document.getElementById('cs-player-swatch'),
        csPlayerUse=document.getElementById('cs-player-use'),
        csPlayIcon=document.getElementById('cs-play-icon');
  const ICON_PAUSE='<path d="M6 5h4v14H6zm8 0h4v14h-4z"/>',
        ICON_PLAY='<path d="M8 5v14l11-7z"/>';

  let csMode='light';

  const csCards=CS_PALETTE.map((c,i)=>{
    const el=document.createElement('div');
    el.className='cs-card';
    el.innerHTML='<div class="cs-card-label"><div class="cs-card-name">'+c.name+'</div><div class="cs-card-hex" data-hex></div></div>';
    el.addEventListener('click',()=>{csIdx=i;csLayout()});
    csCarousel.appendChild(el);
    return el;
  });

  let csIdx=0,csPlaying=true,csTimer=null,csOnScreen=false;

  function csRefreshColors(){
    csCards.forEach((card,i)=>{
      const hex=csHex(CS_PALETTE[i],csMode);
      card.style.background=hex;
      card.querySelector('[data-hex]').textContent=hex;
    });
  }

  function csLayout(){
    const N=CS_PALETTE.length;
    csCards.forEach((card,i)=>{
      let off=(i-csIdx+N)%N;
      if(off>N/2)off-=N;
      if(Math.abs(off)>2){
        card.style.opacity='0';card.style.pointerEvents='none';
        card.style.transform='translateX(0) scale(.5)';card.style.zIndex='0';
        return;
      }
      const tx=off*165,scale=off===0?1.12:1-Math.abs(off)*0.16,
            op=off===0?1:(Math.abs(off)===1?.65:.32);
      card.style.pointerEvents='auto';
      card.style.transform='translateX('+tx+'px) scale('+scale+')';
      card.style.opacity=op;
      card.style.zIndex=String(10-Math.abs(off));
      card.style.filter=off===0?'none':'saturate(.7)';
    });
    const c=CS_PALETTE[csIdx],hex=csHex(c,csMode);
    csBlurBg.style.backgroundColor=hex;
    csPlayerSwatch.style.backgroundColor=hex;
    csPlayerUse.textContent=c.use;
  }
  function csNext(){csIdx=(csIdx+1)%CS_PALETTE.length;csLayout()}
  function csPrev(){csIdx=(csIdx-1+CS_PALETTE.length)%CS_PALETTE.length;csLayout()}
  function csStart(){csStop();if(csOnScreen&&!document.hidden)csTimer=setInterval(csNext,4200)}
  function csStop(){clearInterval(csTimer)}
  function csSetMode(mode){
    csMode=mode;
    csModeBtns.forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));
    csRefreshColors();
    csLayout();
  }

  document.getElementById('cs-next').addEventListener('click',()=>{csNext();csStop();if(csPlaying)csStart()});
  document.getElementById('cs-prev').addEventListener('click',()=>{csPrev();csStop();if(csPlaying)csStart()});
  document.getElementById('cs-play').addEventListener('click',()=>{
    csPlaying=!csPlaying;
    csPlayIcon.innerHTML=csPlaying?ICON_PAUSE:ICON_PLAY;
    if(csPlaying)csStart();else csStop();
  });

  const csModeBtns=Array.from(document.querySelectorAll('.cs-mode-btn'));
  csModeBtns.forEach(b=>b.addEventListener('click',()=>csSetMode(b.dataset.mode)));

  csRefreshColors();
  csLayout();
  function csSync(){if(csPlaying)csStart();else csStop()}
  watchOnScreen(csCarousel,onScreen=>{csOnScreen=onScreen;csSync()});
  }
}
