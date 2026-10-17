export function Button({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) {
  const classes = ['button', `button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  )
}
