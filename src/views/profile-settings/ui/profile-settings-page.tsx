'use client'

import { useAuthContext, usePageLoadingContext } from '@/shared/lib/contexts'
import { AppTabContent, AppTabs, PageWrapper } from '@/shared/ui'
import { ProfileBanner } from './profile-banner'
import { ProfileAvatar } from './profile-avatar'
import { ProfileBillingInfo } from './profile-billing-info'
import {
  PersonalDetailsSchema,
  ProfilePersonalDetailsForm,
  ProfilePersonalDetailsFormRefValue,
} from './profile-personal-details-form'

const ProfileSettingsPage = () => {
  const { updateUser, user } = useAuthContext()
  const { setIsLoading } = usePageLoadingContext()
  const formRef = useRef<Nullable<ProfilePersonalDetailsFormRefValue>>(null)

  const router = useRouter()
  const [activeTab, setActiveTab] = useState('personalDetails')
  const [isSaveChangesDisabled, setIsSaveChangesDisabled] = useState(true)

  const tabs = [
    { tabId: 'personalDetails', name: 'Personal details' },
    { tabId: 'billingInfo', name: 'Billing info' },
  ]

  const updateUserAttrs = (values: PersonalDetailsSchema) => {
    setIsLoading(true)
    return updateUser({ userAttributes: values })
      .then(() => {
        formRef.current?.reset()
        setIsSaveChangesDisabled(true)
      })
      .finally(() => setIsLoading(false))
  }

  if (!user) {
    return router.push('/')
  }

  return (
    <PageWrapper
      classNames={{ children: 'z-10' }}
      header={<ProfileBanner />}
      children={
        <div className="pb-[100px]">
          <ProfileAvatar
            saveButtonDisabled={isSaveChangesDisabled}
            saveButtonVisible={activeTab === 'personalDetails'}
          />

          <h4 className="text-black font-medium mb-6 lg:text-lg">Profile settings</h4>
          <p className="text-xs mb-16 lg:mb-24">Update your photo and personal details</p>

          <AppTabs tabs={tabs} onChange={setActiveTab}>
            <AppTabContent tabId="personalDetails">
              <ProfilePersonalDetailsForm
                ref={formRef}
                onFinish={updateUserAttrs}
                onValuesChange={setIsSaveChangesDisabled}
              />
            </AppTabContent>

            <AppTabContent tabId="billingInfo">
              <ProfileBillingInfo />
            </AppTabContent>
          </AppTabs>
        </div>
      }
    />
  )
}

export { ProfileSettingsPage }
