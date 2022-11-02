import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import { MainWrap } from '../../components/default/styled';
import { useRecoilState } from 'recoil';
import { part } from '../../atom/atom';
import { useNavigate } from 'react-router-dom';

const InputPart = () => {
  const [userPart, setUserPart] = useRecoilState(part);
  const navigate = useNavigate();
  const goNext = () => {
    if (userPart !== '') {
      navigate('/necklace/yournecklace');
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
          <h2 className='title'>
            어떤 파트에서
            <br />
            활동중이신가요?
          </h2>
          <select
            className='selectBox boxDefault'
            onChange={(e) => {
              setUserPart(e.target.value);
            }}
          >
            <option>Node.JS</option>
            <option>Spring</option>
            <option>Android</option>
            <option>iOS</option>
            <option>Designer</option>
            <option>Planner</option>
          </select>
          <div className='nextButton'>
            <span onClick={goNext}>참가 목걸이 만들기</span>
          </div>
        </MainWrap>
      </Row>
    </Container>
  );
};

export default InputPart;
