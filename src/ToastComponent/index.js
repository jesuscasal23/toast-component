import React from 'react'
import ToastContextProvider from './context/ToastContextProvider'
import RenderToast from './renderToast'

const ToastComponent = props => {
  return (
    <ToastContextProvider>
      {/* notifications */}
      <RenderToast />

      {/* react app */}
      {props.children}
    </ToastContextProvider>
  )
}

export default ToastComponent
