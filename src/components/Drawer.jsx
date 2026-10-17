import { useRef } from 'react'
import { Button } from './Button.jsx'
import { useFocusTrap } from './FocusTrap.jsx'

export function Drawer({ isOpen, title = 'Navigasi', children, onClose }) {
  const drawerRef = useRef(null)
  useFocusTrap(isOpen, drawerRef, onClose)
  if (!isOpen) return null
  return (
    <div
      className="overlay overlay--drawer"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <aside
        className="drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <div className="drawer__header">
          <h2 id="drawer-title">{title}</h2>
          <Button variant="icon" aria-label="Tutup navigasi" onClick={onClose}>
            ×
          </Button>
        </div>
        {children}
      </aside>
    </div>
  )
}
