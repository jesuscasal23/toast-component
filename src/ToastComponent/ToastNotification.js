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
import infoCircle from './icons/infoCircle.svg'
import banIcon from './icons/banIcon.svg'

const ToastNotification = ({ toastNotificationProps }) => {
  const { setToastState } = useContext(ToastComponentContext)

  useEffect(() => {
    setTimeout(() => {
      setToastState(prevState =>
        prevState.filter(entry => entry.id !== toastNotificationProps.id)
      )
    }, toastNotificationProps.duration)
  }, [
    toastNotificationProps.duration,
    setToastState,
    toastNotificationProps.id,
  ])

  const determineCorrectIcon = type => {
    if (type === 'danger') {
      return banIcon
    }

    if (type === 'warning') {
      return infoCircle
    }

    return checkCircle
  }

  return (
    <NotificationContainer type={toastNotificationProps.type}>
      <ToastIcons
        src={determineCorrectIcon(toastNotificationProps.type)}
        alt='check circle icon'
      />
      <div>
        <TitleContainer>
          <ToastNotificationTitle type={toastNotificationProps.type}>
            Success
          </ToastNotificationTitle>
        </TitleContainer>
        <ToastNotificationMessage type={toastNotificationProps.type}>
          {toastNotificationProps.message}
        </ToastNotificationMessage>
      </div>
    </NotificationContainer>
  )
}

export default ToastNotification
