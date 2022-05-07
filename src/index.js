import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ToastComponent from './ToastComponent'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ToastComponent>
      <App />
    </ToastComponent>
  </React.StrictMode>
)
