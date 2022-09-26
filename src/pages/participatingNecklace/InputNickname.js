import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { nickname } from '../../atom/atom';
import { MainWrap } from '../../components/default/styled';
import { useNavigate } from 'react-router-dom';

const InputNickname = () => {
  const navigate = useNavigate();
  const [yourNickname, setNickname] = useRecoilState(nickname);
  const goNext = () => {
    if (yourNickname !== '') {
      navigate('/necklace/inputpart');
    }
  };
  return (
    <Container>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          height: '100vh',
        }}
      >
        <MainWrap>
          <h2 className='title'>닉네임이 무엇인가요?</h2>
          <input
            value={yourNickname}
            onChange={(e) => setNickname(e.target.value)}
            className='inputBox boxDefault'
          />
          <div className='nextButton'>
            <span onClick={goNext}>다음으로</span>
          </div>
        </MainWrap>
      </Row>
    </Container>
  );
};

export default InputNickname;
