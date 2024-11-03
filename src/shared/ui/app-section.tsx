export function AppSection({
  title,
  children,
  className,
  gradientTitle,
}: { title: string; gradientTitle?: boolean } & TClassProps & TChildrenProps) {
  return (
    <section className={cn('p-20', className)}>
      <h3 className={cn('text-3xl mb-20', { 'text-gradient': gradientTitle })}>{title}</h3>
      <div className="pl-20">{children}</div>
    </section>
  )
}
