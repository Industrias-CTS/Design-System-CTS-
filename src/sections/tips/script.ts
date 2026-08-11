// src/sections/tips/script.ts
//
// Wires the molecules/tip-card data into the #tips section DOM. The 9 cards
// used to be hand-written HTML inside `#tips .mc-grid`; this replaces that
// static markup with a render call so the copy lives in one place
// (molecules/tip-card) instead of duplicated in index.html.
//
// Styles for `.tip-card`/`.tip-icon` (and the #tips-scoped banner theming)
// live in molecules/tip-card/styles.css, not here — imported below since
// this section has no styles.css of its own (per target src/ tree).
import '../../styles/molecules/tip-card.css';
import { renderTipCards } from '../../molecules/tip-card/index.ts';

export function initTips() {
  const grid = document.querySelector('#tips .mc-grid');
  if (!grid) return;
  grid.innerHTML = renderTipCards();
}
