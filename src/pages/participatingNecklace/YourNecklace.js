import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';

const HomePage = () => {
  const [userName, setUserName] = useState('');
  const [job, setJob] = useState('');
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
        <CardWrap>
          <div className='NecklaceCase'>
            <div className='bullet' />
            <div className='square' />
            <div className='bullet' />
          </div>
        </CardWrap>
      </Row>
    </Container>
  );
};

const CardWrap = styled(Col)`
  & .bullet {
    width: 1rem;
    height: 1rem;
  }
  width: 320px;
  height: 430px;

  background: rgba(74, 74, 74, 0.5);
  filter: blur(2px);
  border-radius: 8px;
`;

export default HomePage;
