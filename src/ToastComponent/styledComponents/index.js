import styled from 'styled-components'

export const FixedPositionWrapper = styled.div`
  position: fixed;
  top: ${props => (props.top ? '0' : '100%')};
  right: ${props => (props.right ? '0' : '100%')};
`

export const NotificationContainer = styled.div`
  width: 500px;
  height: 100px;
  background-color: white;
`
