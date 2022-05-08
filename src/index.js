import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ToastComponent from './ToastComponent'
import '@fontsource/montserrat'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ToastComponent>
      <App />
    </ToastComponent>
  </React.StrictMode>
)
