import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ToastComponent from './ToastComponent'
import '@fontsource/montserrat'
import 'antd/dist/antd.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    {/* wrapper */}
    <ToastComponent>
      {/* your app */}
      <App />
    </ToastComponent>
  </React.StrictMode>
)
