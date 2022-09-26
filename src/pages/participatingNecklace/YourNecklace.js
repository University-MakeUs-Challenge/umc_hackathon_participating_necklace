import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import BackImg from '../../assets/cardBackground.png';
import { name, nickname, part, univ } from '../../atom/atom';
import { useRecoilValue } from 'recoil';
import html2canvas from 'html2canvas';

const YourNecklace = () => {
  const yourName = useRecoilValue(name);
  const yourNickname = useRecoilValue(nickname);
  const yourPart = useRecoilValue(part);
  const yourUniv = useRecoilValue(univ);

  const goCapture = () => {
    //클릭 이벤트
    const capture = document.querySelector('#capture'); //이미지 저장 영역
    html2canvas(capture).then((canvas) => {
      saveAs(canvas.toDataURL('image/jpg'), '이미지.jpg');
    });
  };

  const saveAs = (uri, filename) => {
    let link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        minHeight: '90vh',
        position: 'relative',
      }}
    >
      <CardWrap id='capture'>
        <div className='nameText'>
          {yourNickname} | {yourName}
        </div>
        <div className='partText'>{yourPart}</div>
      </CardWrap>
      <SaveButton>
        <span onClick={goCapture}>이미지로 저장</span>
      </SaveButton>
    </div>
  );
};
const SaveButton = styled.div`
  margin-top: 3rem;
  margin: 0 auto;
  padding: 0 2rem 0 2rem;
  width: 20rem;
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
`;

const CardWrap = styled(Col)`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  & .nameText {
    position: absolute;

    top: 25.5rem;
    font-weight: 700;
    font-size: 22px;
  }
  & .partText {
    position: absolute;
    top: 29rem;
    font-weight: 300;
    font-size: 16px;
  }
  position: relative;
  width: 32rem;
  /* height: 43rem; */
  background-image: url(${BackImg});
  background-size: contain;
  background-repeat: no-repeat;
`;

export default YourNecklace;
