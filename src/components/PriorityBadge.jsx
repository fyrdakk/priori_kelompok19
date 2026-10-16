const priorityClass = {
  Tinggi: 'priority-badge--high',
  Sedang: 'priority-badge--medium',
  Rendah: 'priority-badge--low',
}

export function PriorityBadge({ priority = 'Sedang' }) {
  return (
    <span
      className={`priority-badge ${priorityClass[priority] || 'priority-badge--medium'}`}
    >
      Prioritas: {priority}
    </span>
  )
}
