# CTS Design System

Sistema de diseño oficial de **Industrias CTS** — guía de identidad visual para todas las aplicaciones y páginas corporativas.

---

## Principios

| Principio | Descripción |
|-----------|-------------|
| **Consistencia** | Mismos tokens, componentes y patrones en todas las apps |
| **Legibilidad** | Jerarquía tipográfica clara: Display para impacto, Body para lectura |
| **Accesibilidad** | Contraste WCAG AA mínimo en todos los componentes |
| **Escalabilidad** | Tokens como única fuente de verdad — un cambio propaga todo |

---

## Stack

- React / Next.js + TypeScript
- Tailwind CSS
- CSS Custom Properties (tokens)

---

## Estructura del proyecto

```
cts-design-system/
├── tokens/
│   └── index.css          # Todos los CSS custom properties
├── components/
│   ├── Button.tsx
│   ├── Typography.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   └── index.ts           # Barrel export
├── docs/
│   ├── README.md          # Este archivo
│   ├── 01-colors.md
│   ├── 02-typography.md
│   ├── 03-spacing.md
│   └── 04-components.md
└── tailwind.config.js
```

---

## Integración en un proyecto Next.js

### 1. Copiar tokens y componentes

```bash
cp -r cts-design-system/tokens  ./src/styles/cts/
cp -r cts-design-system/components ./src/components/cts/
```

### 2. Importar tokens globales

En `app/globals.css` o `styles/globals.css`:

```css
@import './cts/tokens/index.css';
```

### 3. Configurar Tailwind

Reemplazar o fusionar con `tailwind.config.js` del repo.

### 4. Fuentes

Ambas fuentes se sirven **localmente** desde `assets/fonts/` — sin dependencias externas.

Copiar a `public/fonts/` en el proyecto Next.js y declarar `@font-face` en el CSS global apuntando a esas rutas. Ver ejemplo completo en el [README principal](../README.md#3-declarar-fuentes-locales).

> **Conthrax** es fuente comercial. Requiere licencia de [Typodermic Fonts](https://www.typodermic.com) para uso en producción.

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

- [01 — Colores](./01-colors.md)
- [02 — Tipografía](./02-typography.md)
- [03 — Espaciado](./03-spacing.md)
- [04 — Componentes](./04-components.md)

---

## Versionado

| Versión | Cambio |
|---------|--------|
| 1.0.0   | Lanzamiento inicial — tokens, 5 componentes base |
