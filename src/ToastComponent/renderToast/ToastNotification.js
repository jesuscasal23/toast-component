import { useEffect, useContext } from 'react'
import {
  NotificationContainer,
  ToastNotificationTitle,
  ToastIcons,
  ToastNotificationMessage,
  TitleContainer,
  CloseIcon,
} from './styledComponents'
import { ToastComponentContext } from '../context/ToastContextProvider'
import checkCircle from '../icons/checkCircle.svg'
import infoCircle from '../icons/infoCircle.svg'
import banIcon from '../icons/banIcon.svg'
import warningCloseIcon from '../icons/warningClose.svg'

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
      <div style={{ width: '100%' }}>
        <TitleContainer>
          <ToastNotificationTitle type={toastNotificationProps.type}>
            Success
          </ToastNotificationTitle>
          <CloseIcon
            src={warningCloseIcon}
            alt='close icon'
            type={toastNotificationProps.type}
          />
        </TitleContainer>
        <ToastNotificationMessage type={toastNotificationProps.type}>
          {toastNotificationProps.message}
        </ToastNotificationMessage>
      </div>
    </NotificationContainer>
  )
}

export default ToastNotification
