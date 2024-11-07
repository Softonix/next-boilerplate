'use client'

import { ToastContainer, toast } from 'react-toastify'

export const toasterService = toast

export const RegisterToaster = () => {
  return (
    <ToastContainer
      theme="colored"
      hideProgressBar
      autoClose={1500}
      closeButton={false}
      pauseOnHover={false}
      style={{ zIndex: 51 }}
    />
  )
}
