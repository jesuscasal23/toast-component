import useToast from './ToastComponent/hooks/useToast'
import { Form, Input, Button, Card, Radio } from 'antd'
import styled from 'styled-components'

const CenteredCard = styled(Card)`
  margin: 0 auto;
  width: 400px;
  margin-top: 10%;
`

function App() {
  const [formInstance] = Form.useForm()
  const toast = useToast()

  const handleSubmit = async () => {
    const formValues = await formInstance.getFieldsValue(true)

    toast(
      formValues.title,
      formValues.message || 'This is a success notification',
      formValues.duration || '8000',
      formValues.type
    )
  }

  const formLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  }

  return (
    <div className='App'>
      <CenteredCard>
        <Form
          form={formInstance}
          {...formLayout}
          initialValues={{
            type: 'success',
          }}>
          <Form.Item name='title' label='title'>
            <Input />
          </Form.Item>
          <Form.Item name='message' label='message'>
            <Input />
          </Form.Item>

          <Form.Item name='duration' label='duration'>
            <Input />
          </Form.Item>

          <Form.Item label='type' name='type'>
            <Radio.Group>
              <Radio.Button value='success'>Success</Radio.Button>
              <Radio.Button value='warning'>Warning</Radio.Button>
              <Radio.Button value='danger'>Danger</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>

        <Button onClick={handleSubmit}>show toast notification</Button>
      </CenteredCard>
    </div>
  )
}

export default App
