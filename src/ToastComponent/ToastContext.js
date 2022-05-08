import { createContext, useEffect, useState } from 'react'

export const ToastComponentContext = createContext({ show: true })

const ToastContextProvider = ({ children }) => {
  const [toastState, setToastState] = useState([])

  return (
    <ToastComponentContext.Provider value={{ toastState, setToastState }}>
      {children}
    </ToastComponentContext.Provider>
  )
}

export default ToastContextProvider
