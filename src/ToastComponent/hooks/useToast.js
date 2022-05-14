import React from 'react'
import { ToastComponentContext } from '../context/ToastContextProvider'
import nextId from 'react-id-generator'

const useToast = () => {
  const { setToastState } = React.useContext(ToastComponentContext)

  const toast = (title, message, duration, type) => {
    setToastState(prevState => [
      ...prevState,
      { title, message, type, duration: duration || 2000, id: nextId() },
    ])
  }

  return toast
}

export default useToast
