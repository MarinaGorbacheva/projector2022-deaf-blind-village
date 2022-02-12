import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html{
  min-height: 100vh;
  /* scroll-behavior: smooth; */
}
body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.25;
    color: ${(props) => props.theme.text};
    position: relative;
    font-weight: 400;
    background:${({ theme }) => theme.main.bodyBackground};
    background-repeat: no-repeat;
    height: 100%;
    scrollbar-width: none;
    &::-webkit-scrollbar {
  display: none;
}
}
img{
    max-width: 100%;
}
a{
  text-decoration: none;


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}

e-enter {
  opacity: 0.01;
}



@keyframes flickerAnimation {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.6;
    }
    100% {
        opacity: 1;
    }
}
#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-md{
  width: 36px !important;
    height: 36px !important;
}

#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-button {
    width: 36px !important;
    height: 36px !important;
}

#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right {
    right: 65px !important;
    @media (max-width: 768px){
      right: 25px !important;
    }
}

#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-sm{
  width: 36px !important;
}

#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm{
  height: 36px !important;
}

#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-button {
    width: 36px !important;
    height: 36px !important;
}

button {
  outline: none;
  border: 0;
}
`;

export const Container = styled.div<{
  pNone?: boolean;
  bigMargin?: boolean;
  ppNone?: boolean;
  dpNone?: boolean;
}>`
  -webkit-background-clip: content-box;
  background-clip: content-box;
  z-index: 1;
  width: 100%;
  max-width: 1080px;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${(props) => (props.dpNone ? '0' : '10px')};
  padding-left: ${(props) => (props.dpNone ? '0' : '10px')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 992px) {
    padding-right: ${(props) => (props.pNone ? '0' : '20px')};
    padding-left: ${(props) => (props.pNone ? '0' : '20px')};
  }

  @media only screen and (max-device-width: 480px) {
    ${({ ppNone }) => {
      if (ppNone) {
        return `
          padding-left: 0;
          padding-right: 0;
        `;
      }
    }}
  }
`;

export const ContainerRow = styled(Container)`
  padding-right: 0px;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div<{ alfa?: boolean; smallBorder?: boolean }>`
  background: ${(props) =>
    props.alfa ? props.theme.card.backgroundAlfa : props.theme.card.background};
  width: 100%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => (props.smallBorder ? '10px' : '20px')};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border: ${(props) => props.theme.card.border};
`;

export default GlobalStyle;
