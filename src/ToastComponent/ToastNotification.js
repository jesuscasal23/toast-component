import { useEffect, useContext } from 'react'
import { NotificationContainer } from './styledComponents'
import { ToastComponentContext } from './ToastContext'

const ToastNotification = ({ toastNotificationProps }) => {
  const { setToastState } = useContext(ToastComponentContext)

  useEffect(() => {
    setTimeout(() => {
      console.log('calling timeout')

      setToastState(prevState =>
        prevState.filter(entry => entry.id !== toastNotificationProps.id)
      )
    }, 2000)
  }, [
    toastNotificationProps.duration,
    setToastState,
    toastNotificationProps.id,
  ])

  return (
    <NotificationContainer>
      <p>{toastNotificationProps.message}</p>
    </NotificationContainer>
  )
}

export default ToastNotification
