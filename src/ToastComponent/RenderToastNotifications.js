import React from 'react'
import { FixedPositionWrapper } from './styledComponents'
import { ToastComponentContext } from './ToastContext'
import ToastNotification from './ToastNotification'

const RenderToastNotifications = () => {
  const { toastState } = React.useContext(ToastComponentContext)

  if (toastState.length === 0) {
    return null
  }

  return (
    <FixedPositionWrapper top right>
      {toastState.map(toastNotificationProps => {
        return (
          <ToastNotification
            toastNotificationProps={toastNotificationProps}
            key={toastNotificationProps.id}
          />
        )
      })}
    </FixedPositionWrapper>
  )
}

export default RenderToastNotifications
