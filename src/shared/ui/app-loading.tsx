'use client'

import { appColors } from '@/core/styles/tailwind/app.colors'
import PuffLoader from 'react-spinners/PuffLoader'

const AppLoading = () => {
  return (
    <div className="absolute inset-0 flex flex-col animate-in items-center justify-center space-y-10 bg-white/90 z-50">
      <PuffLoader loading color={appColors.primary} size={70} aria-label="Loading Spinner" />
    </div>
  )
}

export { AppLoading }
