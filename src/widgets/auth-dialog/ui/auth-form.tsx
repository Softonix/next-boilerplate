'use client'

import { authService } from '@/shared/auth'
import { TAuthType } from '@/shared/types'
import { AppButton, AppLoading } from '@/shared/ui'

type TAuthFormProps = {
  type: TAuthType
  onSubmit: (values: TAuthSchema) => void
}

type TAuthSchema = {
  email: string
  name?: string
}

const AuthForm = ({ type, onSubmit }: TAuthFormProps) => {
  const [form] = AntForm.useForm<TAuthSchema>()
  const [loading, setLoading] = useState(false)

  const fields = useMemo(
    () => [
      { label: 'Email', name: 'email', placeholder: 'Email address' } as const,
      ...(type === 'sign-up' ? [{ label: 'Name', name: 'name', placeholder: 'Name' } as const] : []),
    ],
    [type]
  )

  const submit = (values: TAuthSchema) => {
    setLoading(true)

    return authService
      .sendMagicLink(values.email, values.name)
      .then(() => {
        onSubmit(values)
      })
      .finally(() => setLoading(false))
  }

  return (
    <>
      {loading && <AppLoading />}

      <AntForm<TAuthSchema>
        form={form}
        onFinish={submit}
      >
        {fields.map((field) => (
          <AntForm.Item<TAuthSchema>
            name={field.name}
            key={field.name}
            rules={[{ required: true }]}
          >
            <AntInput placeholder={field.placeholder} />
          </AntForm.Item>
        ))}

        <AppButton
          className="w-full"
          disabled={loading}
          type="submit"
        >
          {type === 'sign-in' ? 'Login' : 'Signup'}
        </AppButton>
      </AntForm>
    </>
  )
}

export { AuthForm }
