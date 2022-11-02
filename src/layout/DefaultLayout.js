import React, { useEffect } from 'react';
import AppContent from '../components/default/AppContent';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DefaultLayout = () => {
  return (
    <>
      <IndexStyle>
        <AppContent />
      </IndexStyle>
    </>
  );
};

export default DefaultLayout;

const IndexStyle = styled.div`
  /* width: 100vw; */
  height: 80vh;
  background-color: black;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
