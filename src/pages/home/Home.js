import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import { MainWrap } from '../../components/default/styled';

const HomePage = () => {
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
        </MainWrap>
      </Row>
    </Container>
  );
};

export default HomePage;
