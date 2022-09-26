import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainWrap } from '../../components/default/styled';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { name } from '../../atom/atom';
const InputName = () => {
  const [userName, setUserName] = useRecoilState(name);
  const navigate = useNavigate();
  const goNext = () => {
    if (userName !== '') {
      navigate('/necklace/inputnickname');
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
          <h2 className='title'>이름이 무엇인가요?</h2>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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

export default InputName;
