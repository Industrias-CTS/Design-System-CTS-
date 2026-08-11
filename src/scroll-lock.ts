// src/scroll-lock.js
//
// Extracted verbatim from the second inline <script> block (index.html
// 2771-2806), "SCROLL POR SECCIÓN — 1 movimiento de rueda = 1 sección".

export function initScrollLock() {
  /* ══ SCROLL POR SECCIÓN — 1 movimiento de rueda = 1 sección ══ */
  let locked = false;
  let unlockTimer = null;
  function targets(){
    return Array.from(document.querySelectorAll('#view-design .hero, #view-design section'));
  }
  function currentIndex(list){
    let idx = 0, best = Infinity;
    list.forEach((el, i) => {
      const d = Math.abs(el.getBoundingClientRect().top);
      if (d < best) { best = d; idx = i; }
    });
    return idx;
  }
  function unlock(){
    locked = false;
    if (unlockTimer) { clearTimeout(unlockTimer); unlockTimer = null; }
  }
  window.addEventListener('scrollend', unlock);
  window.addEventListener('wheel', e => {
    if (document.body.dataset.view !== 'design' || locked) return;
    const list = targets();
    if (!list.length) return;
    const idx = currentIndex(list);
    const next = idx + (e.deltaY > 0 ? 1 : -1);
    if (next < 0 || next > list.length - 1) return;
    e.preventDefault();
    e.stopPropagation();
    locked = true;
    list[next].scrollIntoView({ behavior: 'smooth', block: 'start' });
    unlockTimer = setTimeout(unlock, 1200);
  }, { passive: false, capture: true });
}
