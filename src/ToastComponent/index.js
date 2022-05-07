import React from 'react'
import ToastContextProvider from './ToastContext'
import RenderToastNotifications from './RenderToastNotifications'

const ToastComponent = props => {
  return (
    <ToastContextProvider>
      {/* notifications */}
      <RenderToastNotifications />

      {/* react app */}
      {props.children}
    </ToastContextProvider>
  )
}

export default ToastComponent
