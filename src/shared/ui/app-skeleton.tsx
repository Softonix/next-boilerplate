function AppSkeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-md bg-gray-700/10', className)} {...props} />
}

export { AppSkeleton }
