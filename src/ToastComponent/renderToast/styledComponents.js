import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  0% {
    transform: translate(100%);
    opacity: 0;
  }

  10% {
    opacity: 0;
  }

  40% {
    transform: translate(-5%);
    opacity: 50% 
  }

  100% {
    transform: translate(0%);
    opacity: 1;
  }
`

export const FixedPositionWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: fixed;
  z-index: 10;
  bottom: 5%;
  right: 50%;
  transform: translate(50%, -50%);
  /* why ? */
  height: 1px;
  /*  */
  @media (max-width: 600px) {
    top: 55%;
  }
`

export const NotificationContainer = styled.div`
  width: 85vw;
  max-width: 550px;
  background-color: ${props => props.theme.backgroundColor || '#6fcf97'};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.borderColor || '#6fcf97'};
  border-radius: 6px;
  box-shadow: 0px 2px 26px rgba(215, 0, 0, 0.1);
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-style: normal;
  padding: 12px 6px;
  display: flex;
  margin-bottom: 20px;
  animation: ${slideIn} 0.5s ease-in 1;
`

export const ToastIcons = styled.img`
  width: 39px;
  height: 39px;
  margin-right: 8px;
`

export const TitleAndTextContainer = styled.div`
  width: '100%';
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
`

export const CloseIcon = styled.img``

export const ToastNotificationTitle = styled.h6`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.theme.color || '#0f552c'};
  margin: 0;
`

export const ToastNotificationMessage = styled.p`
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  margin: 4px 0 0 0;
  font-weight: 400;
  color: ${props => props.theme.color || '#0f552c'};
`
