export function Select({ id, label, error, children, ...props }) {
  const errorId = error ? `${id}-error` : undefined
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        {...props}
      >
        {children}
      </select>
      {error ? (
        <p className="field__error" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  )
}
