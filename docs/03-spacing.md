# 03 — Espaciado

## Sistema de espaciado

Base: **4px**. Todos los valores son múltiplos de 4.

| Token | Valor rem | Valor px | Tailwind | Uso típico |
|-------|-----------|----------|----------|------------|
| `--cts-space-0`  | `0`      | 0px  | `p-0`  | Reset |
| `--cts-space-1`  | `0.25rem`| 4px  | `p-1`  | Separación mínima, gap entre íconos |
| `--cts-space-2`  | `0.5rem` | 8px  | `p-2`  | Gap interno de chips, badges |
| `--cts-space-3`  | `0.75rem`| 12px | `p-3`  | Padding de botones small |
| `--cts-space-4`  | `1rem`   | 16px | `p-4`  | Padding de inputs, separación de secciones pequeñas |
| `--cts-space-5`  | `1.25rem`| 20px | `p-5`  | Gap entre elementos de formulario |
| `--cts-space-6`  | `1.5rem` | 24px | `p-6`  | Padding de tarjetas, contenedores |
| `--cts-space-8`  | `2rem`   | 32px | `p-8`  | Separación entre secciones |
| `--cts-space-10` | `2.5rem` | 40px | `p-10` | Márgenes de contenido principal |
| `--cts-space-12` | `3rem`   | 48px | `p-12` | Separación entre bloques grandes |
| `--cts-space-16` | `4rem`   | 64px | `p-16` | Secciones de página |
| `--cts-space-20` | `5rem`   | 80px | `p-20` | Secciones hero |
| `--cts-space-24` | `6rem`   | 96px | `p-24` | Separación máxima entre secciones |

---

## Guía por contexto

### Componentes de UI

| Elemento | Padding interno | Gap entre elementos |
|----------|-----------------|---------------------|
| Botón SM | `px-3 py-1.5` (12/6px) | — |
| Botón MD | `px-5 py-2.5` (20/10px) | — |
| Botón LG | `px-7 py-3.5` (28/14px) | — |
| Input SM | `px-3 py-1.5` | — |
| Input MD | `px-4 py-2.5` | — |
| Card | `px-6 py-4` (24/16px) | — |
| Badge SM | `px-2 py-0.5` (8/2px) | `gap-1` (4px) |
| Badge MD | `px-2.5 py-1` (10/4px) | `gap-1.5` (6px) |

### Layout de página

| Zona | Espaciado recomendado |
|------|-----------------------|
| Padding de contenedor | `px-4` (móvil) → `px-6` (tablet) → `px-8` (desktop) |
| Gap entre secciones | `space-y-12` a `space-y-16` |
| Margen vertical de hero | `py-16` a `py-24` |
| Gap de grid de tarjetas | `gap-4` a `gap-6` |
| Stack de formulario | `space-y-4` a `space-y-5` |

---

## Ejemplo de uso

```tsx
/* Stack de formulario */
<div className="flex flex-col space-y-4">
  <Input label="Nombre" />
  <Input label="Correo" />
  <Button>Enviar</Button>
</div>

/* Grid de tarjetas */
<div className="grid grid-cols-3 gap-6">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>

/* Sección de página */
<section className="py-16 px-6">
  <Typography variant="h2">Sección</Typography>
  <div className="mt-8">...</div>
</section>
```

---

## Border Radius

| Token | Valor | px | Uso |
|-------|-------|----|-----|
| `--cts-radius-none` | `0` | 0px | Tablas, elementos estructurales |
| `--cts-radius-sm` | `0.25rem` | 4px | Chips pequeños, badges |
| `--cts-radius-md` | `0.5rem` | 8px | Botones, inputs, tooltips |
| `--cts-radius-lg` | `0.75rem` | 12px | Tarjetas, modales |
| `--cts-radius-xl` | `1rem` | 16px | Tarjetas grandes, paneles |
| `--cts-radius-2xl` | `1.5rem` | 24px | Modales grandes, drawers |
| `--cts-radius-full` | `9999px` | ∞ | Badges pill, avatares, toggles |

---

## Sombras

Las sombras usan tono azul CTS (`rgba(0, 77, 158, ...)`) para coherencia de marca.

| Token | Uso |
|-------|-----|
| `--cts-shadow-sm` | Cards en reposo, inputs |
| `--cts-shadow-md` | Cards con hover leve, dropdowns |
| `--cts-shadow-lg` | Cards con hover fuerte, modales |
| `--cts-shadow-xl` | Modales en primer plano, toasts |

```tsx
/* Tailwind */
<div className="shadow-cts-sm hover:shadow-cts-lg transition-shadow">
  Tarjeta
</div>
```
