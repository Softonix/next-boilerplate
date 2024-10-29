type CarInfoItemWrapperProps = ChildrenProps & ClassProps

const CarInfoItemsWrapper = ({ children, className }: CarInfoItemWrapperProps) => {
  return <div className={cn('grid grid-cols-1 sm:grid-cols-2 gap-16', className)}>{children}</div>
}

export { CarInfoItemsWrapper }
