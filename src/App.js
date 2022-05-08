import { useState } from 'react'
import useToast from './ToastComponent/useToast'
import { Form, Row, Input, Button, InputNumber } from 'antd'

function App() {
  const [formInstance] = Form.useForm()
  const toast = useToast()

  const handleSubmit = async () => {
    const formValues = await formInstance.getFieldsValue(true)

    toast(
      formValues.message || 'This is a success notification',
      formValues.duration || '3'
    )
  }
  return (
    <div className='App'>
      <Form form={formInstance}>
        <Form.Item name='message' label='message'>
          <Input />
        </Form.Item>

        <Form.Item name='duration' label='duration'>
          <Input />
        </Form.Item>
      </Form>

      <Button onClick={handleSubmit}>show toast notification</Button>
    </div>
  )
}

export default App
