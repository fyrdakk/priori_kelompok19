const statusClass = {
  'Belum Dikerjakan': 'status-badge--pending',
  'Sedang Dikerjakan': 'status-badge--progress',
  'Selesai Dikerjakan': 'status-badge--done',
}

export function StatusBadge({ status = 'Belum Dikerjakan' }) {
  return (
    <span
      className={`status-badge ${statusClass[status] || 'status-badge--pending'}`}
    >
      {status}
    </span>
  )
}
