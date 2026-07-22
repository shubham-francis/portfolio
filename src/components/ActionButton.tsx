type ActionButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export function ActionButton({ href, children, variant = 'primary' }: ActionButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1'
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20',
    secondary: 'border border-white/15 bg-white/10 text-slate-100',
  }

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </a>
  )
}
