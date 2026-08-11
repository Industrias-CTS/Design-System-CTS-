# CTS Design System

Sistema de diseño oficial de **Industrias CTS** — identidad visual unificada para todas las aplicaciones y páginas corporativas de [industriascts.com.co](https://industriascts.com.co).

---

## Vistas rápidas

Un único punto de entrada: [`index.html`](index.html). Las tres vistas viven en la misma página y se navegan por hash, sin recargar:

| Hash | Descripción |
|------|-------------|
| `index.html` (o `#colors`, `#typo`, `#spacing`, …) | Guía de componentes UI — código, demos en vivo, buenas prácticas |
| `index.html#recursos` | Descarga de logos, íconos de producto y tipografías |
| `index.html#login` | Página de inicio de sesión — referencia visual standalone |

---

## Principios

| Principio | Descripción |
|-----------|-------------|
| **Consistencia** | Mismos tokens, componentes y patrones en todas las apps |
| **Legibilidad** | Jerarquía tipográfica clara: Display para impacto, Body para lectura |
| **Accesibilidad** | Contraste WCAG AA mínimo en todos los componentes |
| **Escalabilidad** | Tokens como única fuente de verdad — un cambio propaga a todo |

---

## Stack

- React / Next.js + TypeScript
- Tailwind CSS
- CSS Custom Properties (design tokens)

---

## Estructura del proyecto

```
Design_System/
├── assets/
│   ├── fonts/
│   │   ├── conthrax/          # Conthrax Light, Regular, SemiBold, Bold (.otf)
│   │   └── titillium/         # Titillium Web Light, Regular, SemiBold, Bold (.ttf)
│   ├── icons/
│   │   ├── png/               # 20 productos × 4 variantes (principal, azul, blanco, gris)
│   │   └── svg/               # SVGs por producto y variante
│   ├── logos/
│   │   └── ...                # Logo CTS en 4 variantes × 4 formatos
│   ├── img/                    # Imágenes de UI (header de modales, etc.)
│   └── styles.css              # Estilos compartidos (tiles de logos/íconos, tokens legacy)
├── components/
│   ├── Button.tsx
│   ├── Typography.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   └── index.ts               # Barrel export
├── docs/
│   ├── 01-colors.md
│   ├── 02-typography.md
│   ├── 03-spacing.md
│   └── 04-components.md
├── tokens/
│   └── index.css              # CSS custom properties de marca
├── tailwind.config.js         # Extensión Tailwind con tokens CTS
└── index.html                 # Punto de entrada único — Design System + Login + Recursos (vistas por hash)
```

---

## Colores de marca

| Nombre | HEX | Uso |
|--------|-----|-----|
| Azul CTS | `#0065BB` | Color primario, botones, links |
| Azul Claro | `#89AEDC` | Fondos de estado, hover suaves |
| Azul Oscuro | `#004D9E` | Hover primario, encabezados |
| Gris Oscuro | `#646464` | Texto secundario, subtítulos |
| Gris Medio | `#8F8F8F` | Texto deshabilitado, placeholders |
| Gris Claro | `#C8C8C8` | Bordes, separadores |

Estos colores de marca son fijos — no cambian entre modo claro y oscuro. También existen colores de estado (éxito/advertencia/error/info) y de prioridad (alta/media/baja), y los tokens de texto/fondo/borde sí tienen variantes por tema. Detalle completo en [docs/01-colors.md](docs/01-colors.md).

---

## Tipografía

| Fuente | Tipo | Uso | Archivo |
|--------|------|-----|---------|
| **Conthrax** | Display | Títulos, portadas, separadores | `assets/fonts/conthrax/` |
| **Titillium Web** | Body | Contenido, UI, documentos | `assets/fonts/titillium/` |

Ambas fuentes se sirven localmente desde `assets/fonts/` — sin dependencias externas.

---

## Integración en Next.js

### 1. Copiar tokens y componentes

```bash
cp -r tokens/   ./src/styles/cts/
cp -r components/ ./src/components/cts/
```

### 2. Importar tokens globales

En `app/globals.css`:

```css
@import './cts/tokens/index.css';
```

### 3. Declarar fuentes locales

En `app/globals.css` (o en el CSS global):

```css
@font-face {
  font-family: 'Conthrax';
  src: url('/fonts/conthrax/conthrax-bold.otf') format('opentype');
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: 'Titillium Web';
  src: url('/fonts/titillium/TitilliumWeb-Regular.ttf') format('truetype');
  font-weight: 400;
  font-display: swap;
}
/* Repetir para cada peso necesario */
```

### 4. Configurar Tailwind

Fusionar con `tailwind.config.js` del repo:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: { cts: { blue: '#0065BB', ... } },
    fontFamily: {
      display: ['Conthrax', 'Arial Narrow', 'Arial', 'sans-serif'],
      body:    ['Titillium Web', 'Arial', 'sans-serif'],
    },
  }
}
```

### 5. Usar componentes

```tsx
import { Button, Typography, Card, CardBody, Input, Badge } from '@/components/cts'

export default function Page() {
  return (
    <Card>
      <CardBody>
        <Typography variant="h2" color="primary">Título</Typography>
        <Typography variant="body">Contenido de la página.</Typography>
        <Button variant="primary">Acción principal</Button>
      </CardBody>
    </Card>
  )
}
```

---

## Documentación

- [01 — Colores](docs/01-colors.md)
- [02 — Tipografía](docs/02-typography.md)
- [03 — Espaciado](docs/03-spacing.md)
- [04 — Componentes](docs/04-components.md)

---

## Modo claro / oscuro

Toda la página soporta modo claro y oscuro mediante `data-theme` en `<html>` y `localStorage`. El botón de toggle está en la barra de navegación única, compartida por las tres vistas. La vista de Login mantiene su propia estética oscura independiente del toggle global.

Los tokens que cambian según tema están definidos en bloques `[data-theme="light"]` y `[data-theme="dark"]` dentro de `index.html`.

---

## Versionado

| Versión | Cambio |
|---------|--------|
| 1.0.0 | Lanzamiento inicial — tokens, componentes base, logos, íconos, guía de componentes, página de recursos |
| 1.1.0 | Login standalone (`login.html`), soporte modo oscuro en todas las vistas, fuentes locales sin dependencias externas |
| 1.2.0 | Unificación en `index.html` — punto de entrada único, vistas Design System / Login / Recursos por hash, sin recarga de página |
| 1.3.0 | Limpieza técnica de `index.html`: fix de bug de especificidad CSS (panel de Tipografías siempre visible), accesibilidad (tabs con `role`/`aria-selected`, labels, alt text), logos/íconos de Recursos pasados a datos + render JS (antes ~260 líneas de HTML repetido a mano), overrides CSS por ID consolidados en clases compartidas, scripts envueltos en IIFE, helper `watchOnScreen()` para deduplicar el patrón de pausar animaciones fuera de viewport |
