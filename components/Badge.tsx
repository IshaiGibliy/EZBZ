export function Badge({ children, color = 'blue' }: { children: React.ReactNode; color?: 'blue' | 'green' | 'orange' | 'red' }) {
  return <span className={`badge badge-${color}`}>{children}</span>;
}
