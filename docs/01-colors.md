# 01 — Colores

## Paleta de marca

### Azules CTS

| Nombre | Token CSS | Tailwind | HEX | Uso |
|--------|-----------|----------|-----|-----|
| Azul CTS | `--cts-blue` | `cts-blue` | `#0065BB` | Color primario, botones, links, íconos activos |
| Azul Claro | `--cts-blue-light` | `cts-blue-light` | `#89AEDC` | Fondos de estado, botones secundarios, hover suaves |
| Azul Oscuro | `--cts-blue-dark` | `cts-blue-dark` | `#004D9E` | Hover de primario, encabezados oscuros, énfasis |

### Grises CTS

| Nombre | Token CSS | Tailwind | HEX | Uso |
|--------|-----------|----------|-----|-----|
| Gris Medio | `--cts-gray` | `cts-gray` | `#8F8F8F` | Texto deshabilitado, íconos secundarios, placeholders |
| Gris Claro | `--cts-gray-light` | `cts-gray-light` | `#C8C8C8` | Bordes, separadores, fondos de inputs |
| Gris Oscuro | `--cts-gray-dark` | `cts-gray-dark` | `#646464` | Texto secundario, subtítulos, metadata |

### Base

| Nombre | Token CSS | HEX | Uso |
|--------|-----------|-----|-----|
| Blanco | `--cts-white` | `#FFFFFF` | Fondos de tarjetas, fondos principales |
| Negro CTS | `--cts-black` | `#1A1A1A` | Texto principal |
| Fondo Sutil | `--cts-bg-subtle` | `#F4F7FB` | Fondos de páginas, fondos de tablas alternas |

---

## Colores de estado

| Estado | Token | HEX | Uso |
|--------|-------|-----|-----|
| Éxito | `--cts-success` | `#16A34A` | Confirmaciones, validación correcta |
| Advertencia | `--cts-warning` | `#D97706` | Alertas no críticas, precaución |
| Error | `--cts-error` | `#DC2626` | Errores, validación fallida |
| Info | `--cts-info` | `#89AEDC` | Mensajes informativos |

---

## Colores de prioridad

Usados en badges de prioridad (Alta / Media / Baja). No cambian entre modo claro y oscuro.

| Prioridad | Token | HEX | Fondo (token bg) |
|-----------|-------|-----|-------------------|
| Alta | `--cts-priority-high` | `#EF4444` | `--cts-priority-high-bg` — `rgba(239,68,68,.15)` |
| Media | `--cts-priority-medium` | `#F59E0B` | `--cts-priority-medium-bg` — `rgba(245,158,11,.15)` |
| Baja | `--cts-priority-low` | `#22C55E` | `--cts-priority-low-bg` — `rgba(34,197,94,.15)` |

---

## Tokens semánticos

Los tokens semánticos conectan el significado con el valor visual. **Siempre usar semánticos en componentes**, no los valores crudos.

| Token | Valor | Uso |
|-------|-------|-----|
| `--cts-color-primary` | `#0065BB` | Color de acción principal |
| `--cts-color-primary-hover` | `#004D9E` | Hover del primario |
| `--cts-color-primary-light` | `#89AEDC` | Acento suave del primario |
| `--cts-color-text` | `#1A1A1A` | Texto principal |
| `--cts-color-text-muted` | `#646464` | Texto secundario |
| `--cts-color-text-disabled` | `#8F8F8F` | Texto deshabilitado |
| `--cts-color-bg` | `#FFFFFF` | Fondo de superficie |
| `--cts-color-bg-subtle` | `#F4F7FB` | Fondo de página |
| `--cts-color-border` | `#C8C8C8` | Borde estándar |
| `--cts-color-border-focus` | `#0065BB` | Borde al enfocar |

### Modo oscuro

Se activa con `[data-theme="dark"]` en `<html>` y sobrescribe estos tokens (los de marca — azules, grises, prioridad — no cambian):

| Token | Claro | Oscuro |
|-------|-------|--------|
| `--cts-color-text` | `#1A1A1A` | `#FFFFFF` |
| `--cts-color-text-muted` | `#646464` | `#B4C4DC` |
| `--cts-color-text-disabled` | `#8F8F8F` | `#9FB6CC` |
| `--cts-color-bg` | `#FFFFFF` | `#2E4A78` |
| `--cts-color-bg-subtle` | `#F4F7FB` | `#1F3252` |
| `--cts-color-border` | `#C8C8C8` | `#2D3F5C` |
| `--cts-color-border-focus` | `#0065BB` | `#008AFF` |
| `--cts-error` | `#DC2626` | `#F87171` |

---

## Reglas de uso

### Contraste (WCAG AA)

| Combinación | Ratio | Aprobado |
|-------------|-------|----------|
| Blanco sobre Azul CTS `#0065BB` | 5.2:1 | ✅ AA |
| Blanco sobre Azul Oscuro `#004D9E` | 7.1:1 | ✅ AAA |
| Negro CTS sobre Azul Claro `#89AEDC` | 4.6:1 | ✅ AA |
| Blanco sobre Gris Oscuro `#646464` | 4.5:1 | ✅ AA |

### Lo que NO se debe hacer

- **No usar** azul claro `#89AEDC` como texto sobre blanco — contraste insuficiente (2.8:1)
- **No usar** gris medio `#8F8F8F` como texto principal — solo para texto deshabilitado
- **No inventar** colores fuera de la paleta CTS en interfaces corporativas
- **No mezclar** más de 2 azules en el mismo componente

---

## Ejemplo de uso en CSS

```css
.mi-componente {
  /* Usar tokens semánticos, no valores crudos */
  color:            var(--cts-color-text);
  background-color: var(--cts-color-bg);
  border:           1px solid var(--cts-color-border);
}

.mi-componente:focus {
  border-color: var(--cts-color-border-focus);
}
```

## Ejemplo en Tailwind

```tsx
<div className="bg-white text-[#1A1A1A] border border-cts-gray-light">
  <button className="bg-cts-blue text-white hover:bg-cts-blue-dark">
    Acción
  </button>
</div>
```
