export function Card({ children, as: Element = 'article', className = '' }) {
  return <Element className={`card ${className}`}>{children}</Element>
}
