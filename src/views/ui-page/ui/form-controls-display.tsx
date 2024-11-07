import { AppSection } from '@/shared/ui'

const FormControlsDisplay = () => {
  return (
    <AppSection title="FormControls">
      <div className="space-y-20">
        <AntInput size="large" placeholder="Your name.." />
        <AntInput size="middle" placeholder="Your name.." />
        <AntInput size="small" placeholder="Your name.." />
      </div>
    </AppSection>
  )
}

export { FormControlsDisplay }
