'use client'

import { TUser } from '@/shared/types'
import { isEqual } from 'lodash-es'
import { useAuthContext } from '@/shared/lib/contexts'
import { AppSeparator } from '@/shared/ui'

type ProfilePersonalDetailsProps = {
  onFinish: (values: PersonalDetailsSchema) => unknown
  onValuesChange: (isNewValues: boolean) => unknown
}

type PersonalDetailsSchema = Pick<TUser, 'name' | 'phone_number'>

type ProfilePersonalDetailsFormRefValue = { reset: () => void }

const ProfilePersonalDetailsForm = forwardRef<ProfilePersonalDetailsFormRefValue, ProfilePersonalDetailsProps>(
  ({ onFinish, onValuesChange }, ref) => {
    const { user } = useAuthContext()
    const initialFormValues = useMemo(
      () => ({
        name: user?.name,
        phone_number: user?.phone_number,
      }),
      [user]
    )
    const [form] = AntForm.useForm<PersonalDetailsSchema>()

    useImperativeHandle(ref, () => ({
      reset: () => form.resetFields(),
    }))

    return (
      <AntForm<PersonalDetailsSchema>
        form={form}
        onFinish={onFinish}
        initialValues={initialFormValues}
        id="personal-details-form"
        onValuesChange={(...[, allFields]) => onValuesChange(isEqual(initialFormValues, allFields))}
      >
        <div className="lg:flex lg:gap-x-[90px]">
          <div className="min-w-[220px]">
            <h5 className="text-black text-sm font-medium mb-4">Name</h5>
            <p className="text-xs mb-16 lg:mb-0">This will be displayed on your profile.</p>
          </div>

          <AntForm.Item<PersonalDetailsSchema> name="name" noStyle>
            <AntInput className="max-w-[480px] max-h-40" placeholder="Jane Doe" />
          </AntForm.Item>
        </div>

        <AppSeparator className="my-16 lg:my-24" />

        <div className="lg:flex lg:gap-x-[90px]">
          <div className="min-w-[220px]">
            <h5 className="text-black text-sm font-medium mb-4">Phone Number</h5>
            <p className="text-xs mb-16 lg:mb-0">This will be displayed on your profile.</p>
          </div>

          <AntForm.Item<PersonalDetailsSchema> name="phone_number" noStyle>
            <AntInput className="mb-16 lg:mb-0 max-w-[480px] max-h-40" placeholder="+44 20 8029 1024" />
          </AntForm.Item>
        </div>
      </AntForm>
    )
  }
)

export { ProfilePersonalDetailsForm, type PersonalDetailsSchema, type ProfilePersonalDetailsFormRefValue }
