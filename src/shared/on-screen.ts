// src/shared/on-screen.js
//
// Extracted verbatim from the big inline <script> block (index.html
// ~2818-2826, right after the theme-toggle IIFE). NOT specific to any one
// section — the original comment above it says as much:
//
//   "Loops/animaciones deben correr solo con el elemento en viewport y la
//   pestaña visible."
//
// It's used by: the hero GSAP loop (page shell, not a section), the color
// carousel (sections/colors), the typography marquee (sections/typography),
// the modal tour (sections/inputs) and the sidebar tour (sections/sidebar-comp).
// That's 4+ independent consumers, so it was pulled out into this shared
// module rather than copy-pasted into each section's script.js (the target
// src/ tree didn't have an explicit slot for this — flagged in the final
// report as a structural addition).

/**
 * Returns a getter for whether `el` is currently on-screen (intersecting the
 * viewport) AND the tab is visible. If `onChange` is passed, it also fires
 * on every change (IntersectionObserver hit or visibilitychange).
 * @param {Element} el
 * @param {(onScreen:boolean)=>void} [onChange]
 * @returns {() => boolean}
 */
// Loops/animaciones deben correr solo con el elemento en viewport y la pestaña visible.
// Devuelve un getter del estado on-screen; si se pasa onChange, también se dispara en cada cambio (intersección o visibilitychange).
export function watchOnScreen(el,onChange){
  let onScreen=false;
  const notify=()=>{if(onChange)onChange(onScreen)};
  new IntersectionObserver(([e])=>{onScreen=e.isIntersecting;notify()}).observe(el);
  if(onChange)document.addEventListener('visibilitychange',notify);
  return ()=>onScreen;
}
