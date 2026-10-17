import { Button } from './Button.jsx'
import { Link } from 'react-router-dom'

export function EmptyState({
  title = 'Belum ada data',
  description = 'Belum ada informasi untuk ditampilkan.',
  actionLabel,
  onAction,
  actionTo,
}) {
  return (
    <section className="empty-state" aria-labelledby="empty-state-title">
      <div className="empty-state__icon" aria-hidden="true">
        □
      </div>
      <h2 id="empty-state-title">{title}</h2>
      <p>{description}</p>
      {actionLabel && onAction ? (
        <Button variant="secondary" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
      {actionLabel && actionTo ? (
        <Link className="button button--secondary" to={actionTo}>
          {actionLabel}
        </Link>
      ) : null}
    </section>
  )
}
