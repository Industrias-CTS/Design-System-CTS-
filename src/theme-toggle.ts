// src/theme-toggle.js
//
// Extracted verbatim from the big inline <script> block's opening IIFE
// (index.html ~2809-2816, immediately after the opening `(function(){`).
// This is page-shell behavior (not owned by any one section), so it lives
// at the top of src/ alongside router.js and scroll-lock.js — the target
// src/ tree didn't have an explicit slot for these three; flagged in the
// final report as a structural addition.

export function initThemeToggle() {
  const root=document.documentElement,btn=document.getElementById('toggle'),chips=document.querySelectorAll('.mode-chip');
  const I={light:'🌙',dark:'☀️'},L={light:'☀ Modo claro',dark:'☾ Modo oscuro'};
  function set(t){root.setAttribute('data-theme',t);btn.textContent=I[t];chips.forEach(c=>c.textContent=L[t]);localStorage.setItem('cts-theme',t)}
  const s=localStorage.getItem('cts-theme'),d=window.matchMedia('(prefers-color-scheme: dark)').matches;
  set(s||(d?'dark':'light'));
  btn.addEventListener('click',()=>set(root.getAttribute('data-theme')==='dark'?'light':'dark'));
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',e=>{if(!localStorage.getItem('cts-theme'))set(e.matches?'dark':'light')});
}
