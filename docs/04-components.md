# 04 — Componentes

Todos los componentes están en `components/` y exportados desde `components/index.ts`.

---

## Button

Botón de acción principal. 4 variantes × 3 tamaños.

### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Estilo visual |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño |
| `loading` | `boolean` | `false` | Muestra spinner, bloquea acción |
| `fullWidth` | `boolean` | `false` | Ocupa 100% del ancho |
| `leadingIcon` | `ReactNode` | — | Ícono antes del texto |
| `trailingIcon` | `ReactNode` | — | Ícono después del texto |
| `disabled` | `boolean` | — | Estado deshabilitado |

### Variantes

| Variante | Uso |
|----------|-----|
| `primary` | Acción principal de la página — máximo 1 por sección |
| `secondary` | Acción secundaria, alternativa al primario |
| `outline` | Acción complementaria, menor jerarquía |
| `ghost` | Acción de menor peso, dentro de tarjetas o toolbars |

### Ejemplo

```tsx
import { Button } from '@/components/cts'

/* Acción principal */
<Button variant="primary" size="md">Guardar cambios</Button>

/* Con loading */
<Button variant="primary" loading>Guardando...</Button>

/* Con ícono */
<Button variant="outline" leadingIcon={<PlusIcon />}>Nuevo registro</Button>

/* Ancho completo */
<Button variant="primary" fullWidth>Iniciar sesión</Button>
```

---

## Typography

Sistema de texto — headings, body, labels, captions.

### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `TypographyVariant` | `'body'` | Estilo tipográfico |
| `color` | `'default' \| 'primary' \| 'muted' \| 'disabled' \| 'white' \| 'inherit'` | `'default'` | Color del texto |
| `as` | `keyof JSX.IntrinsicElements` | (según variant) | Override del tag HTML |
| `align` | `'left' \| 'center' \| 'right'` | — | Alineación del texto |
| `truncate` | `boolean` | `false` | Trunca texto con ellipsis |

### Variantes disponibles

`h1`, `h2`, `h3`, `h4`, `subtitle`, `body-lg`, `body`, `body-sm`, `label`, `caption`

### Ejemplo

```tsx
import { Typography } from '@/components/cts'

<Typography variant="h1" color="primary">Industrias CTS</Typography>
<Typography variant="h3">Catálogo 2026</Typography>
<Typography variant="body" color="muted">Descripción del producto.</Typography>
<Typography variant="label">Código interno</Typography>
<Typography variant="caption" color="muted">Última actualización: 12/05/2026</Typography>

/* Cambiar tag sin cambiar estilo */
<Typography variant="h2" as="div">Título sin semántica h2</Typography>
```

---

## Input

Campo de texto con soporte para label, hint, estados y íconos.

### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `label` | `string` | — | Etiqueta visible del campo |
| `hint` | `string` | — | Texto de ayuda bajo el label |
| `state` | `'default' \| 'error' \| 'success'` | `'default'` | Estado visual |
| `message` | `string` | — | Mensaje bajo el input (error/éxito/info) |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño |
| `leadingIcon` | `ReactNode` | — | Ícono al inicio del input |
| `trailingIcon` | `ReactNode` | — | Ícono al final del input |

### Ejemplo

```tsx
import { Input } from '@/components/cts'

/* Básico */
<Input label="Nombre completo" placeholder="Ej. Juan García" />

/* Con validación */
<Input
  label="Correo electrónico"
  type="email"
  required
  state="error"
  message="El correo no es válido."
/>

/* Con éxito */
<Input
  label="Código de producto"
  state="success"
  message="Código encontrado en el sistema."
/>

/* Con íconos */
<Input
  label="Buscar"
  leadingIcon={<SearchIcon />}
  placeholder="Buscar productos..."
/>
```

---

## Card

Contenedor de contenido. Compuesto por Card + CardHeader + CardBody + CardFooter.

### Props de Card

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'default' \| 'elevated' \| 'outlined' \| 'filled'` | `'default'` | Estilo visual |
| `onClick` | `() => void` | — | Convierte en tarjeta interactiva |

### Variantes

| Variante | Uso |
|----------|-----|
| `default` | Tarjeta estándar con borde y sombra suave |
| `elevated` | Sin borde, sombra pronunciada — contenido destacado |
| `outlined` | Borde azul CTS — énfasis de selección o activo |
| `filled` | Fondo azul CTS — paneles de hero, CTAs prominentes |

### Ejemplo

```tsx
import { Card, CardHeader, CardBody, CardFooter, Button, Typography } from '@/components/cts'

<Card variant="default">
  <CardHeader
    title="Ficha Técnica"
    subtitle="Producto CTS-2204"
    action={<Button variant="outline" size="sm">Editar</Button>}
  />
  <CardBody>
    <Typography variant="body">
      Descripción completa del producto con sus especificaciones.
    </Typography>
  </CardBody>
  <CardFooter>
    <Button variant="primary">Descargar PDF</Button>
  </CardFooter>
</Card>

/* Tarjeta interactiva */
<Card variant="elevated" onClick={() => router.push('/producto/123')}>
  <CardBody>
    <Typography variant="h4">Producto destacado</Typography>
  </CardBody>
</Card>
```

---

## Badge

Etiqueta de estado o categoría.

### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'neutral'` | `'primary'` | Estilo visual |
| `size` | `'sm' \| 'md'` | `'md'` | Tamaño |
| `dot` | `boolean` | `false` | Muestra punto de estado antes del texto |

### Ejemplo

```tsx
import { Badge } from '@/components/cts'

<Badge variant="primary">Activo</Badge>
<Badge variant="success" dot>Disponible</Badge>
<Badge variant="warning">En revisión</Badge>
<Badge variant="error" size="sm">Inactivo</Badge>
<Badge variant="neutral">Borrador</Badge>
```

---

## Patrones de composición

### Formulario estándar

```tsx
<Card>
  <CardHeader title="Nuevo producto" />
  <CardBody>
    <div className="flex flex-col space-y-4">
      <Input label="Nombre del producto" required />
      <Input label="Código interno" hint="Formato: CTS-XXXX" />
      <Input
        label="Precio unitario"
        type="number"
        leadingIcon={<span>$</span>}
      />
    </div>
  </CardBody>
  <CardFooter>
    <div className="flex gap-3 justify-end">
      <Button variant="ghost">Cancelar</Button>
      <Button variant="primary">Guardar</Button>
    </div>
  </CardFooter>
</Card>
```

### Header de página

```tsx
<div className="flex items-center justify-between">
  <div>
    <Typography variant="h2">Catálogo de Productos</Typography>
    <Typography variant="body-sm" color="muted">
      128 productos registrados
    </Typography>
  </div>
  <div className="flex gap-3">
    <Badge variant="success" dot>Sistema activo</Badge>
    <Button variant="primary" leadingIcon={<PlusIcon />}>
      Nuevo producto
    </Button>
  </div>
</div>
```
