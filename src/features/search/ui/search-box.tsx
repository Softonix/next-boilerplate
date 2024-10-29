import { useDialogContext } from '@/shared/lib/contexts'
import { ReactNode } from 'react'
import { useCarSearch } from '../lib/car-search.hook'

type TSearchBoxProps = {
  suffix?: ReactNode
  autoFocus?: boolean
  placeholder?: string
  onSearch?: (message: string) => unknown
} & ClassProps

type SearchBoxSchema = {
  message: string
}

const SearchBox = ({
  onSearch,
  placeholder = 'Ask anything...',
  className,
  suffix,
  autoFocus = true,
}: TSearchBoxProps) => {
  const { openDialog } = useDialogContext()
  const [form] = AntForm.useForm<SearchBoxSchema>()
  const search = useCarSearch()

  const openZipCodeDialog = () => {
    openDialog('zip-code-dialog')
  }

  const onFinish = (values: SearchBoxSchema) => {
    const formattedMessage = values.message.trim()

    if (!hasGeoCookiesSet()) {
      return openZipCodeDialog()
    }
    form.resetFields()

    if (!formattedMessage.length) {
      return
    }

    onSearch?.(formattedMessage)

    search(formattedMessage)
  }

  return (
    <AntForm<SearchBoxSchema>
      form={form}
      autoComplete="off"
      onFinish={onFinish}
      className={cn('w-full', className)}
      initialValues={{
        ['message']: '',
      }}
    >
      <AntForm.Item<SearchBoxSchema>
        name="message"
        style={{ marginBottom: 0 }}
      >
        <AntInput
          autoFocus={autoFocus}
          type="search"
          className="h-[64px]"
          size="large"
          placeholder={placeholder}
          suffix={
            suffix ?? (
              <div className="flex">
                <AntButton
                  type="link"
                  icon={<AppIconPinOnAMap className="text-black w-16 h-16 md:w-24 md:h-24 cursor-pointer" />}
                  aria-label="Open modal to enter zip-code"
                  onClick={openZipCodeDialog}
                />
                <AntButton
                  type="link"
                  icon={<AppIconSearch className="text-black w-16 h-16 md:w-24 md:h-24 cursor-pointer" />}
                  aria-label="Click to search"
                  htmlType="submit"
                />
              </div>
            )
          }
        />
      </AntForm.Item>
    </AntForm>
  )
}

export { SearchBox, type TSearchBoxProps as SearchBoxProps, type SearchBoxSchema }
