import { useContext } from 'react'
import { ToastComponentContext } from '../context/ToastContextProvider'
import nextId from 'react-id-generator'

const defaultToastProps = {
  message: 'This is a toast notification',
  duration: 6000,
  type: 'success',
}

const removeEmptyObjectProperties = object => {
  const objectCopy = { ...object }
  Object.keys(objectCopy).forEach(key => {
    if (!objectCopy[key]) {
      delete objectCopy[key]
    }
  })

  return objectCopy
}

const useToast = () => {
  const { setToastState } = useContext(ToastComponentContext)

  const toast = toastConfig => {
    setToastState(prevState => [
      ...prevState,
      {
        id: nextId(),
        ...defaultToastProps,
        ...removeEmptyObjectProperties(toastConfig),
      },
    ])
  }

  return toast
}

export default useToast
