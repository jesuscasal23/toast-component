import styled from 'styled-components'

const toastVariations = {
  success: {
    backgroundColor: '#6fcf97',
    borderColor: '#6fcf97',
    color: '#0f552c',
  },
  warning: {
    backgroundColor: '#F2C94C',
    borderColor: '#F2C94C',
    color: '#6E5404',
  },
  danger: {
    backgroundColor: '#EB5757',
    borderColor: '#EB575797',
    color: '#FFFFFF',
  },
}

export const FixedPositionWrapper = styled.div`
  position: fixed;
  top: ${props => (props.top ? '1%' : '100%')};
  right: ${props => (props.right ? '1%' : '100%')};
  z-index: 10000;
`

export const NotificationContainer = styled.div`
  width: 550px;
  background-color: ${props =>
    toastVariations[props.type]?.backgroundColor || '#6fcf97'};
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    toastVariations[props.type]?.borderColor || '#6fcf97'};
  border-radius: 6px;
  box-shadow: 0px 2px 26px rgba(215, 0, 0, 0.1);
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-style: normal;
  padding: 12px 6px;
  display: flex;
  margin-bottom: 20px;
`

export const ToastIcons = styled.img`
  width: 39px;
  height: 39px;
  margin-right: 8px;
`

export const TitleContainer = styled.div`
  display: flex;
`

export const CloseIcon = styled.img``

export const ToastNotificationTitle = styled.h6`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${props => toastVariations[props.type]?.color || '#0f552c'};
  margin: 0;
`

export const ToastNotificationMessage = styled.p`
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  margin: 4px 0 0 0;
  font-weight: 400;
  color: ${props => toastVariations[props.type]?.color || '#0f552c'};
`
