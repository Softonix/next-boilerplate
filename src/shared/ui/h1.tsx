const H1 = ({ children, className }: ChildrenProps & ClassProps) => {
  return (
    <h1 className={cn('text-center w-full text-gradient text-5xl mb-24 md:mb-32 font-semibold', className)}>
      {children}
    </h1>
  )
}

export { H1 }
