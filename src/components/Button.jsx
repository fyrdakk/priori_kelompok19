export function Button({
  children,
  variant = 'primary',
  type = 'button',
<<<<<<< HEAD
  ...props
}) {
  return (
    <button className={`button button--${variant}`} type={type} {...props}>
=======
  className = '',
  ...props
}) {
  const classes = ['button', `button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} type={type} {...props}>
>>>>>>> update
      {children}
    </button>
  )
}
