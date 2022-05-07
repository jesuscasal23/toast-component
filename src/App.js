import './App.css'
import { useState } from 'react'
import useToast from './ToastComponent/useToast'

function App() {
  const [notificationMessage, setNotificationMessage] = useState('')

  const toast = useToast()
  return (
    <div className='App'>
      <header className='App-header'>
        <input
          style={{ marginBottom: '10px' }}
          value={notificationMessage}
          onChange={e => setNotificationMessage(e.target.value)}></input>
        <button onClick={() => toast(notificationMessage)}>
          show toast notification
        </button>
      </header>
    </div>
  )
}

export default App
