# 02 — Tipografía

## Familias tipográficas

### Conthrax — Fuente Display (Principal)

> Uso: Títulos principales, portadas, separadores de sección, identidad visual fuerte.

| Peso | Nombre | Variable CSS | Uso |
|------|--------|--------------|-----|
| 400 | Regular | `font-weight: var(--cts-font-regular)` | Subtítulos |
| 600 | SemiBold | `font-weight: var(--cts-font-semibold)` | Títulos de sección |
| 700 | Bold | `font-weight: var(--cts-font-bold)` | Títulos principales, portadas |

**Licencia:** Fuente comercial de Typodermic Fonts. Requiere licencia para uso corporativo.
**Token CSS:** `font-family: var(--cts-font-display)`
**Tailwind:** `font-display`

---

### Titillium Web — Fuente Body (Secundaria)

> Uso: Textos de contenido, manuales de usuario, fichas técnicas, UI (labels, botones, inputs).

| Peso | Nombre | Variable CSS | Uso |
|------|--------|--------------|-----|
| 400 | Regular | `font-weight: var(--cts-font-regular)` | Cuerpo de texto, párrafos |
| 600 | SemiBold | `font-weight: var(--cts-font-semibold)` | Énfasis en cuerpo |
| 700 | Bold | `font-weight: var(--cts-font-bold)` | Títulos de párrafo, labels, botones |

**Licencia:** Gratis — Google Fonts / SIL Open Font License.
**Token CSS:** `font-family: var(--cts-font-body)`
**Tailwind:** `font-body`

---

## Escala tipográfica

| Variante | Fuente | Peso | Tamaño | Interlineado | Uso |
|----------|--------|------|--------|--------------|-----|
| `h1` | Conthrax | Bold 700 | 48px / 3rem | 1.25 | Hero, portadas principales |
| `h2` | Conthrax | Bold 700 | 36px / 2.25rem | 1.25 | Títulos de página |
| `h3` | Conthrax | SemiBold 600 | 30px / 1.875rem | 1.375 | Títulos de sección |
| `h4` | Conthrax | SemiBold 600 | 24px / 1.5rem | 1.375 | Subtítulos de sección |
| `subtitle` | Conthrax | Regular 400 | 20px / 1.25rem | 1.375 | Subtítulos de portada |
| `body-lg` | Titillium Web | Regular 400 | 18px / 1.125rem | 1.625 | Texto introductorio |
| `body` | Titillium Web | Regular 400 | 16px / 1rem | 1.625 | Cuerpo de texto estándar |
| `body-sm` | Titillium Web | Regular 400 | 14px / 0.875rem | 1.5 | Texto de soporte, notas |
| `label` | Titillium Web | Bold 700 | 14px / 0.875rem | 1.5 | Labels de formulario, etiquetas |
| `caption` | Titillium Web | Regular 400 | 12px / 0.75rem | 1.5 | Pies de foto, metadata, ayuda |

---

## Jerarquía visual recomendada

```
┌─────────────────────────────────────────┐
│  h1 — TÍTULO PRINCIPAL (Conthrax Bold)  │
│  h2 — Título de Página                  │
│         h3 — Título de Sección          │
│              h4 — Subtítulo             │
│              subtitle — Descripción     │
│                                         │
│  body-lg — Párrafo introductorio        │
│  body — Párrafo de contenido estándar   │
│  body-sm — Nota o texto de apoyo        │
│                                         │
│  LABEL — ETIQUETA DE CAMPO              │
│  caption — pie de elemento              │
└─────────────────────────────────────────┘
```

---

## Uso en código

### Componente Typography

```tsx
import { Typography } from '@/components/cts'

// Título de portada
<Typography variant="h1" color="primary">Industrias CTS</Typography>

// Título de sección
<Typography variant="h3">Catálogo de Productos</Typography>

// Cuerpo de texto
<Typography variant="body" color="muted">
  Descripción del producto con todas sus especificaciones técnicas.
</Typography>

// Label de formulario
<Typography variant="label">Código de producto</Typography>

// Nota pequeña
<Typography variant="caption" color="muted">* Campo requerido</Typography>
```

### CSS directo

```css
.titulo-portada {
  font-family: var(--cts-font-display);
  font-weight: var(--cts-font-bold);
  font-size: var(--cts-text-5xl);
  line-height: var(--cts-leading-tight);
}

.texto-contenido {
  font-family: var(--cts-font-body);
  font-weight: var(--cts-font-regular);
  font-size: var(--cts-text-base);
  line-height: var(--cts-leading-relaxed);
}
```

### Tailwind

```tsx
<h1 className="font-display font-bold text-5xl leading-tight text-cts-blue">
  Título principal
</h1>

<p className="font-body font-normal text-base leading-relaxed text-[#1A1A1A]">
  Cuerpo de texto.
</p>
```

---

## Reglas de uso

### Conthrax (Display)

- Usar **solo** en títulos (h1–h4), portadas y separadores visuales
- **Nunca** en párrafos largos o texto corrido — dificulta la lectura
- Máximo 2 líneas para h1, 3 para h2–h3

### Titillium Web (Body)

- Usar en **todo** el texto de contenido, UI, documentos
- Bold (`font-bold`) para labels y títulos de párrafo
- Regular (`font-normal`) para cuerpo de texto

### Lo que NO se debe hacer

- **No usar** Conthrax en cuerpos de texto largos
- **No usar** tamaños menores a 12px (legibilidad mínima)
- **No usar** fuentes externas al sistema — mantiene identidad uniforme
- **No mezclar** pesos de forma arbitraria sin jerarquía clara
