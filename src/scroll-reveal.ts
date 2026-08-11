// src/scroll-reveal.js
//
// Extracted verbatim from the tail end of the big inline <script> block
// (index.html ~3528-3537), "Scroll reveal — fade+slide sutil al entrar en
// pantalla, una sola vez por elemento". Applies to every `.reveal` element
// across all 9 sections (styles/base.css owns the `.reveal`/`.is-visible`
// CSS), so — like theme-toggle/router/scroll-lock/hero — this is page-shell
// behavior rather than a single section's concern. Flagged in the final
// report as a structural addition not spelled out in the target src/ tree.

export function initScrollReveal() {
  // Scroll reveal — fade+slide sutil al entrar en pantalla, una sola vez por elemento
  const revealObserver=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },{threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
}
