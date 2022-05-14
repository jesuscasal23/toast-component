import { useEffect, useContext, useCallback } from 'react'
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
import dangerCloseIcon from '../icons/dangerClose.svg'
import successCloseIcon from '../icons/successClose.svg'
import { ThemeProvider } from 'styled-components'

const toastVariations = {
  success: {
    title: 'Success',
    backgroundColor: '#6fcf97',
    borderColor: '#6fcf97',
    color: '#0f552c',
    icon: checkCircle,
    closeIcon: successCloseIcon,
  },
  warning: {
    title: 'Warning',
    backgroundColor: '#F2C94C',
    borderColor: '#F2C94C',
    color: '#6E5404',
    icon: infoCircle,
    closeIcon: warningCloseIcon,
  },
  danger: {
    title: 'Danger',
    backgroundColor: '#EB5757',
    borderColor: '#EB575797',
    color: '#FFFFFF',
    icon: banIcon,
    closeIcon: dangerCloseIcon,
  },
}

const ToastNotification = ({ toastNotificationProps }) => {
  const { setToastState } = useContext(ToastComponentContext)

  const removeToastNotification = useCallback(() => {
    setToastState(prevState =>
      prevState.filter(entry => entry.id !== toastNotificationProps.id)
    )
  }, [toastNotificationProps.id, setToastState])

  useEffect(() => {
    setTimeout(() => {
      removeToastNotification()
    }, toastNotificationProps.duration)
  }, [toastNotificationProps.duration, removeToastNotification])

  return (
    <ThemeProvider theme={toastVariations[toastNotificationProps.type]}>
      <NotificationContainer>
        <ToastIcons
          src={toastVariations[toastNotificationProps.type].icon}
          alt='check circle icon'
        />
        <div style={{ width: '100%' }}>
          <TitleContainer>
            <ToastNotificationTitle>
              {toastVariations[toastNotificationProps.type].title}
            </ToastNotificationTitle>
            <CloseIcon
              onClick={() => removeToastNotification()}
              src={toastVariations[toastNotificationProps.type].closeIcon}
              alt='close icon'
            />
          </TitleContainer>
          <ToastNotificationMessage>
            {toastNotificationProps.message}
          </ToastNotificationMessage>
        </div>
      </NotificationContainer>
    </ThemeProvider>
  )
}

export default ToastNotification
