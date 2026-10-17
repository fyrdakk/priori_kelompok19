import { useRef } from 'react'
import { Button } from './Button.jsx'
import { useFocusTrap } from './FocusTrap.jsx'

export function Modal({
  isOpen,
  title,
  children,
  onClose,
  closeLabel = 'Tutup',
}) {
  const modalRef = useRef(null)
  useFocusTrap(isOpen, modalRef, onClose)
  if (!isOpen) return null
  return (
    <div
      className="overlay"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section
        className="modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal__header">
          <h2 id="modal-title">{title}</h2>
          <Button variant="icon" aria-label={closeLabel} onClick={onClose}>
            ×
          </Button>
        </div>
        <div className="modal__body">{children}</div>
      </section>
    </div>
  )
}
