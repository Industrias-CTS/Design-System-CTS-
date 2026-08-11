// Monta los átomos reales de components/atoms/Button en las tarjetas de
// demo de la sección Botones, en vez del HTML/CSS de muestra reimplementado
// (`.btn.bmd.bp` etc. — esas clases siguen existiendo en styles.css para
// quien las use en su propia página, esto solo cambia lo que se RENDERIZA
// aquí en el showcase).
import { createRoot } from 'react-dom/client';
import { Button } from '../../../components';
import '../../styles/tailwind.css';

const ChevronLeft = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
);
const Plus12 = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const GridIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
);
const MenuIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
);
const Plus14 = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const ChevronDown = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="18 15 12 9 6 15" /></svg>
);
// Spinner del demo "Cargando..." — se pasa como leadingIcon en vez de usar
// la prop `loading` de Button, porque `loading` atenúa el botón (opacity-70)
// y el look original no tenía esa atenuación, solo el spinner girando.
const SpinIcon = (
  <svg className="spin" width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity=".25" /><path fill="currentColor" opacity=".75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
);

function mount(id, el) {
  const node = document.getElementById(id);
  if (!node) return;
  createRoot(node).render(el);
}

// Button.tsx trae su propia escala de tamaños (px-5/py-2.5/text-base en md,
// border-2 en outline) pensada para un botón de producto normal — más
// grande que la escala densa que este showcase siempre usó (.bsm/.bmd/.blg
// en buttons/styles.css: 4-10-22px de padding, .82-1rem de fuente, borde de
// 1px). Se sobreescribe con `!` por instancia para que el demo se vea
// exactamente como antes, sin tocar los tamaños del átomo real.
const SZ_SM = '!px-[10px] !py-1 !text-[0.82rem] !rounded-[var(--r-md)] !gap-[6px]';
const SZ_MD = '!px-4 !py-[7px] !text-[0.9rem] !rounded-[var(--r-md)] !gap-[6px]';
const SZ_LG = '!px-[22px] !py-[10px] !text-base !rounded-[var(--r-lg)] !gap-[6px]';
const OUTLINE = `${SZ_MD} !border`; // el original usa border de 1px, no los 2px del átomo
const SZ_GHOST_ICON = '!p-[13px] !rounded-[var(--r-lg)] !gap-0'; // ghost de solo ícono, más grande que el resto

export function mountButtonDemos() {
  mount('btn-demo-primary', (
    <>
      <Button variant="primary" className={SZ_MD}>Guardar</Button>
      <Button variant="primary" className={SZ_MD} leadingIcon={SpinIcon}>Cargando...</Button>
      <Button variant="primary" className={SZ_MD} disabled>Disabled</Button>
    </>
  ));

  mount('btn-demo-secondary', (
    // La tarjeta se llama "Secondary" pero su look original (clase .bs) era
    // texto/ghost, no el pill relleno de Button variant="secondary" — se usa
    // "ghost" aquí para mantener el aspecto de antes.
    <>
      <Button variant="ghost" className={SZ_MD} leadingIcon={ChevronLeft}>Proyectos</Button>
      <Button variant="ghost" className={SZ_MD}>Cancelar</Button>
      <Button variant="ghost" className={SZ_MD}>Ver todos</Button>
    </>
  ));

  mount('btn-demo-outline', (
    <>
      <Button variant="outline" className={OUTLINE}>Completado</Button>
      <Button variant="outline" className={OUTLINE} style={{ color: 'var(--p-media)', borderColor: 'var(--p-media)' }}>Alta</Button>
      <Button variant="outline" className={OUTLINE} leadingIcon={Plus12}>Nuevo</Button>
    </>
  ));

  mount('btn-demo-ghost', (
    <>
      <Button variant="ghost" className={SZ_GHOST_ICON} aria-label="Vista de cuadrícula">{GridIcon}</Button>
      <Button variant="ghost" className={SZ_GHOST_ICON} aria-label="Vista de lista">{MenuIcon}</Button>
      <Button variant="ghost" className={SZ_GHOST_ICON} aria-label="Agregar">{Plus14}</Button>
      <Button variant="ghost" className={SZ_GHOST_ICON} aria-label="Expandir">{ChevronDown}</Button>
    </>
  ));

  mount('btn-demo-sizes', (
    <>
      <Button variant="primary" size="sm" className={SZ_SM}>Small</Button>
      <Button variant="primary" size="md" className={SZ_MD}>Medium</Button>
      <Button variant="primary" size="lg" className={SZ_LG}>Large</Button>
    </>
  ));
}
