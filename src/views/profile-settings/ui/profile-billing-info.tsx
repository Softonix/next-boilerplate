import { paymentPlans } from '@/shared/lib/constants'
import { AppButton } from '@/shared/ui'

type ProfileBillingInfoProps = {
  onUpdateSubscriptionPlan?: () => void
}

const ProfileBillingInfo = ({}: ProfileBillingInfoProps) => {
  return (
    <>
      <div className="flex gap-x-12 mb-16">
        <AppIconRocket className="w-24 h-24 text-black" />

        <div className="mb-16 lg:mb-24">
          <h5 className="text-black font-medium mb-4">Upgrade your plan</h5>
          <p className="text-xs">Update your plan to get all access</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-24">
        {Object.entries(paymentPlans).map(([key, { name, price, options }]) => (
          <div
            key={key}
            className={cn([
              'flex flex-col justify-between rounded-2xl p-16 bg-white lg:basis-1/2 max-w-[530px]',
              key === 'Free' ? 'border border-regular-light' : 'plus-plan-gradient-border',
            ])}
          >
            <div className="flex justify-between mb-16">
              <h5 className="font-medium text-lg text-black">{name}</h5>

              {key === 'Free' && (
                <div className="min-w-[111px] px-8 py-3 flex items-center justify-between gap-x-4 rounded bg-primary-light">
                  <AppIconCheckmark className="text-primary w-16 h-16" />
                  <span className="text-primary font-medium text-xs">Current plan</span>
                </div>
              )}
            </div>

            <ul className="space-y-8 mb-12 md:mb-20">
              {options.map((option) => (
                <li key={option} className="flex items-center gap-x-7">
                  <AppIconCheckmark className="text-primary w-14 h-14" />
                  <span className="text-xs md:text-sm">{option}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <p className="w-full text-end text-black text-lg">{formatCurrency(price)}/month</p>

              <AppButton
                theme={key === 'Free' ? 'secondary' : 'primary'}
                size="small"
                className="w-full md:w-[144px]"
                disabled={key === 'Free'}
              >
                {key === 'Free' ? 'Downgrade' : 'Upgrade'}
              </AppButton>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export { ProfileBillingInfo }
