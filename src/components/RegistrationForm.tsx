import { useSession } from 'next-auth/react'

interface RegistrationFormProps {
  onSubmit: (nickname: string, phone: string, city: string) => void
}

type RegistrationFormType = {
  nickname: string
  phone: string
  city: string
};

export const registrationFromSchema = z.object({
  nickname: z.string().min(1).max(20),
  phone: z.string().min(10).max(20),
  city: z.string().min(1).max(20)
})

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const { data: sessionData } = useSession()

  const onFormSubmit = (data: RegistrationFormType) => {
    onSubmit(data.nickname, data.phone, data.city)
  }

  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className='w-[500px] bg-white p-4 shadow'>
      <div className='mb-4 flex justify-center'>
        {sessionData?.user?.image && (
          <NextImage
            src={sessionData.user.image}
            alt='User profile'
            className='mr-4 rounded-full'
            width={100}
            height={100}
          />
        )}
      </div>
      <AntForm
        name='basic'
        labelCol={{ span: 2 }}
        initialValues={{ remember: true }}
        onFinish={onFormSubmit}
        onFinishFailed={onFinishFailed}
      >
        <AntForm.Item
          label='Nickname'
          name='nickname'
          rules={[{ required: true, message: 'Please input your nickname!' }]}
          labelCol={{ span: 5, offset: 0 }}
          wrapperCol={{ offset: 0, span: 18 }}
        >
          <AntInput />
        </AntForm.Item>
        <AntForm.Item
          label='Phone'
          name='phone'
          rules={[{ required: true, message: 'Please input your phone!' }]}
          labelCol={{ span: 5, offset: 0 }}
          wrapperCol={{ span: 18 }}
        >
          <AntInput />
        </AntForm.Item>
        <AntForm.Item
          label='City'
          name='city'
          rules={[{ required: true, message: 'Please input your city!' }]}
          labelCol={{ span: 5, offset: 0 }}
          wrapperCol={{ span: 18 }}
        >
          <AntInput />
        </AntForm.Item>
        <AntForm.Item wrapperCol={{ offset: 1, span: 22 }}>
          <div className='flex justify-end gap-3'>
            <AntButton type='primary' htmlType='submit'>
              Submit
            </AntButton>
          </div>
        </AntForm.Item>
      </AntForm>
    </div>
  )
}

export default RegistrationForm
