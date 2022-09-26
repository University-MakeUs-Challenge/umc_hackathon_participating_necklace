import styled, { createGlobalStyle } from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
export const supportDeviceSize = 768;

export const GlobalStyle = createGlobalStyle`
html {
font-size: 62.5%; // 1rem = 10px 로 변경 한 것, 바꾼 이유는 사파리에서 폰트가 너무 작은것은 허용하지 않기 때문.
// 참고링크 = https://stackoverflow.com/questions/68790660/setting-root-font-size-not-affecting-rem-units-in-safari-for-margin-padding-et
// 128px => 12.8rem , 4px => 0.4rem 가능!
}
body {
  user-select: none;
  background: black;
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', -apple-system, sans-serif, Roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden; // 100vw의 경우 스크롤바까지 vw에 포함되어 추가
  color: white;
}
`;
export const TextMiddle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const MainWrap = styled(Col)`
  & .boxDefault {
    margin-top: 2.8rem;
    margin-bottom: 4rem;
    color: white;
  }
  & .nextButton {
    /* width: 11.4rem; */
    padding: 0 2rem 0 2rem;
    height: 5.8rem;
    background: #4a4a4a;
    border-radius: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & > span {
      font-weight: 900;
      font-size: 2rem;
    }
  }
  & .inputBox {
    font-size: 2.4rem;
    background: #4a4a4a;
    border-radius: 8px;
  }
  & .subTitle {
    font-size: 2rem;
    text-align: center;
  }
  & .selectBox {
    width: 200px;
    height: 52px;
    background: #4a4a4a;
    border-radius: 8px;
    font-weight: 900;
    font-size: 2rem;
  }
  & .title {
    font-size: 2.4rem;
    font-weight: 900;
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
