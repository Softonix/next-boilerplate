const AppPingIndicator = ({ className }: TClassProps) => {
  return (
    <div className={cn(className)}>
      <span className="relative flex h-6 w-6">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-6 w-6 bg-primary-active" />
      </span>
    </div>
  )
}

export { AppPingIndicator }
