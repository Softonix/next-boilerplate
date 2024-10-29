import { ImageProps } from 'antd'

type AppImageProps = ImageProps

const AppImage = ({ fallback, wrapperClassName, className, ...rest }: AppImageProps) => {
  return (
    <AntImage
      {...rest}
      preview={false}
      fallback={fallback ?? '/images/car-placeholder.png'}
      placeholder={<AntImage src="/images/car-placeholder.png" preview={false} />}
      className={cn('overflow-hidden', className)}
      wrapperClassName={cn('overflow-hidden', wrapperClassName)}
    />
  )
}

export { AppImage }
