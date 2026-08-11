// src/main.js
//
// Entry point that replaces index.html's 5 inline <script> blocks and its
// inline <style> block. Vite loads this as `<script type="module" src="/src/main.js">`,
// which — like the original inline scripts sitting at the end of <body> —
// only executes once the DOM has been parsed, so calling every init()
// directly (no DOMContentLoaded wrapper) preserves the original execution
// timing.
//
// Import order below mirrors the original document order (styles first,
// then router/scroll-lock/theme, then each section in the order it appears
// on the page). This matters for CSS cascade fidelity in a couple of spots
// — see sections/badges/styles.css and sections/metrics/styles.css header
// comments for the one place (`.stat-icon`) where load order affects the
// rendered result. Do not reorder the section init() calls below without
// re-checking those notes.

import './styles/base.css';
import './styles/layout.css';

import { initThemeToggle } from './theme-toggle.ts';
import { initRouter } from './router.ts';
import { initScrollLock } from './scroll-lock.ts';
import { initHero } from './hero.ts';
import { initScrollReveal } from './scroll-reveal.ts';
import { mountSectionBanners } from './molecules/section-banner/index.ts';
import './styles/molecules/section-banner.css';

import { initColors } from './sections/colors/script.ts';
import { initTypography } from './sections/typography/script.ts';
import { initButtons } from './sections/buttons/script.ts';
import { initInputs } from './sections/inputs/script.ts';
import { initSidebarComp } from './sections/sidebar-comp/script.ts';
import { initNavComp } from './sections/nav-comp/script.ts';
import { initBadges } from './sections/badges/script.ts';
import { initMetrics } from './sections/metrics/script.ts';
import { initTips } from './sections/tips/script.ts';

import { initLogin } from './sections/views/login/script.ts';
import { initRecursos } from './sections/views/recursos/script.ts';

// initRecursos() must run before initRouter(): index.html's #view-recursos
// markup (tabs/panels) now lives in this module and is injected on call,
// but initRouter()'s very first route() call runs synchronously and, on a
// direct load with location.hash === '#recursos-tipografias', queries
// .res-tab/.res-panel/#panel-tipografias immediately — those must already
// exist in the DOM by then. initRecursos() has no dependency on the page
// shell below, so moving it earlier is safe.
initRecursos();

// Page shell (order matches index.html: router+scroll-lock scripts came
// first, then the big script with theme-toggle as its first statement).
initRouter();
initScrollLock();
initThemeToggle();
initHero();
mountSectionBanners();

// #view-design sections, in page order.
initColors();
initTypography();
initButtons();
initInputs();
initSidebarComp();
initNavComp();
initBadges();
initMetrics();
initTips();

// Other views.
initLogin();
// initRecursos() already ran near the top of this file — see the comment
// there for why it had to move ahead of initRouter().

// Was the very last statement in the original big <script> block — runs
// last here too, after every section's markup/DOM wiring is in place.
initScrollReveal();
