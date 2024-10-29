'use client'

import { AppDialog, AppDialogContent, AppDialogTitle, AppLoading, VisuallyHidden } from '@/shared/ui'
import { useGeolocation } from '../lib/geo-location.hook'

type TZipCodeDialogProps = { onZipCodeSaved?: () => unknown } & DialogDefaultProps

type TZipCodeDialogSchema = { zipCode: string }

const ZipCodeDialog = ({ onZipCodeSaved, closeDialog, ...props }: TZipCodeDialogProps) => {
  const zipcodePattern = /^\d{5}(-\d{4})?$/

  const [loading, setLoading] = useState(false)

  const { getCoordinatesFromZipCode, zipCodeCookie } = useGeolocation()

  const saveZipCode = async (data: TZipCodeDialogSchema) => {
    try {
      setLoading(true)

      await getCoordinatesFromZipCode(data.zipCode)
      onZipCodeSaved?.()
      closeDialog?.()
    } finally {
      setLoading(false)
    }
  }

  return (
    <AppDialog {...props}>
      <AppDialogContent aria-describedby={undefined} className="w-[430px]">
        <VisuallyHidden>
          <AppDialogTitle />
        </VisuallyHidden>

        <div className="relative">
          {loading && <AppLoading />}

          <div className="text-center mt-15 mb-20">
            <p className="text-gradient text-4xl mb-20">Enter your zip code</p>
            <p>We require your location / ZIP in order to search cars near you.</p>
          </div>

          <AntForm
            autoComplete="off"
            onFinish={saveZipCode}
            initialValues={{
              ['zipCode']: zipCodeCookie ?? '',
            }}
          >
            <AntForm.Item<TZipCodeDialogSchema>
              name="zipCode"
              rules={[
                {
                  pattern: zipcodePattern,
                  required: true,
                  message: 'Please enter a valid zipcode.',
                },
              ]}
            >
              <AntInput placeholder="Provide your zip code here..." size="middle" />
            </AntForm.Item>

            <AntButton htmlType="submit" type="primary" block>
              Submit
            </AntButton>
          </AntForm>
        </div>
      </AppDialogContent>
    </AppDialog>
  )
}

export { ZipCodeDialog, type TZipCodeDialogProps }
