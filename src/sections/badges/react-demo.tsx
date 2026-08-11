// Monta el átomo real de components/atoms/Badge en dos de los tres grupos
// de la sección Badges. El grupo "Prioridades" (Alta/Media/Baja) queda
// como estaba: usa --p-alta/--p-media/--p-baja, un eje semántico distinto
// al de las variantes de Badge (success/warning/error/...), no un 1:1.
import { createRoot } from 'react-dom/client';
import { Badge } from '../../../components';
import '../../styles/tailwind.css';

function mount(id, el) {
  const node = document.getElementById(id);
  if (!node) return;
  createRoot(node).render(el);
}

export function mountBadgeDemos() {
  mount('badge-demo-variants', (
    <>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Disponible</Badge>
      <Badge variant="warning">En revisión</Badge>
      <Badge variant="error">Cancelado</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="neutral">Borrador</Badge>
    </>
  ));

  mount('badge-demo-dots', (
    <>
      <Badge variant="primary" dot>Activo</Badge>
      <Badge variant="success" dot>Completado</Badge>
      <Badge variant="warning" dot>En proceso</Badge>
      <Badge variant="error" dot>Cancelado</Badge>
      <Badge variant="neutral" dot>Pendiente</Badge>
    </>
  ));
}
