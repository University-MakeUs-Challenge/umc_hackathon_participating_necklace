import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import { MainWrap } from '../../components/default/styled';
import { useRecoilState } from 'recoil';
import { univ } from '../../atom/atom';
import { useNavigate } from 'react-router-dom';

const InputUniv = () => {
  const [userUniv, setUserUniv] = useRecoilState(univ);
  const navigate = useNavigate();
  const goNext = () => {
    if (userUniv !== '') {
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
            어느 학교에서
            <br />
            활동하시나요?
          </h2>

          <select
            className='selectBox boxDefault'
            onChange={(e) => {
              setUserUniv(e.target.value);
            }}
          >
            <option>가천대</option>
            <option>서울여대</option>
            <option>한양대 ERICA</option>
            <option>숭실대</option>
            <option>인하대</option>
            <option>아주대</option>
          </select>
          <div className='nextButton'>
            <span onClick={goNext}>다음으로</span>
          </div>
        </MainWrap>
      </Row>
    </Container>
  );
};

export default InputUniv;
