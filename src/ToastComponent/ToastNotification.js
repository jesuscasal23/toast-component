import { useEffect, useContext } from 'react'
import {
  NotificationContainer,
  ToastNotificationTitle,
  ToastIcons,
  ToastNotificationMessage,
  TitleContainer,
} from './styledComponents'
import { ToastComponentContext } from './ToastContext'
import checkCircle from './icons/checkCircle.svg'
import infoCircle from './icons/checkCircle.svg'

const ToastNotification = ({ toastNotificationProps }) => {
  const { setToastState } = useContext(ToastComponentContext)

  useEffect(() => {
    setTimeout(() => {
      setToastState(prevState =>
        prevState.filter(entry => entry.id !== toastNotificationProps.id)
      )
    }, 20000)
  }, [
    toastNotificationProps.duration,
    setToastState,
    toastNotificationProps.id,
  ])

  const determineCorrectIcon = () => {}

  return (
    <NotificationContainer type={'danger'}>
      <ToastIcons src={checkCircle} alt='check circle icon' />
      <div>
        <TitleContainer>
          <ToastNotificationTitle type={'danger'}>
            Success
          </ToastNotificationTitle>
        </TitleContainer>
        <ToastNotificationMessage type={'danger'}>
          {toastNotificationProps.message}
        </ToastNotificationMessage>
      </div>
    </NotificationContainer>
  )
}

export default ToastNotification
