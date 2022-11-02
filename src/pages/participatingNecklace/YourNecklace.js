import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import BackImg from '../../assets/cardBackground.png';
import { name, nickname, part, univ } from '../../atom/atom';
import { useRecoilValue } from 'recoil';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { MainWrap } from '../../components/default/styled';

const YourNecklace = () => {
  const yourName = useRecoilValue(name);
  const yourNickname = useRecoilValue(nickname);
  const yourPart = useRecoilValue(part);

  // const goCapture = () => {
  //   domtoimage
  //     .toBlob(document.querySelector('.capture'))
  //     .then((blob) => {
  //       saveAs(blob, 'card.png');
  //     });
  // };

  return (
    <MainWrap>
      <div className='title'>
        Break the Rules
        <br />
      </div>
      <div className='subTitle'>UMC Hackathon에 오신 걸 환영합니다</div>

      <br />
      <br />
      <br />
      <CardWrap className='capture'>
        <div className='nicknameText'>{yourNickname}</div>
        <div className='nameText'>{yourName}</div>

        <div className='partText'>{yourPart}</div>
        {yourPart !== 'Planner' || yourPart !== 'Designer' ? (
          <div className='partDevText'>Developer</div>
        ) : null}
      </CardWrap>
      {/* <SaveButton>
        <span onClick={goCapture}>이미지로 저장</span>
      </SaveButton> */}
    </MainWrap>
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
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  & .nicknameText {
    position: absolute;
    top: 15.5rem;
    font-weight: 900;
    font-size: 6rem;
  }
  & .nameText {
    position: absolute;
    top: 23.5rem;
    font-weight: 900;
    font-size: 6rem;
  }
  & .partText {
    right: 2rem;
    position: absolute;
    top: 2rem;
    font-weight: 800;
    font-size: 2.5rem;
  }
  & .partDevText {
    right: 2rem;
    position: absolute;
    top: 4.5rem;
    font-weight: 800;
    font-size: 2.5rem;
  }
  position: relative;
  width: 32rem;
  /* height: 43rem; */
  background-image: url(${BackImg});
  background-size: contain;
  background-repeat: no-repeat;
`;

export default YourNecklace;
