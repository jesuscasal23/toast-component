import React from 'react'
import { ToastComponentContext } from './ToastContext'
import nextId from 'react-id-generator'

const useToast = () => {
  const { setToastState } = React.useContext(ToastComponentContext)

  const toast = (message, duration) => {
    setToastState(prevState => [
      ...prevState,
      { message, duration: duration || 2000, id: nextId() },
    ])
  }

  return toast
}

export default useToast
