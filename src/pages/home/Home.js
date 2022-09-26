import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import { MainWrap } from '../../components/default/styled';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const goMakeNecklace = () => {
    navigate('/necklace');
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
          <div className='title'>안녕하세요</div>

          <div className='subTitle'>
            Break the Rules
            <br />
            UMC에 오신 걸 환영합니다
          </div>
          <div
            className='boxDefault'
            style={{ color: '#31FF6F' }}
            onClick={goMakeNecklace}
          >
            목걸이 만들러가기
          </div>
        </MainWrap>
      </Row>
    </Container>
  );
};

export default HomePage;
