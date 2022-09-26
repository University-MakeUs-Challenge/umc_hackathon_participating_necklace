import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import routes from './BiddingRoutes';
import styled from 'styled-components';

const NecklaceInputName = React.lazy(() => import('./InputName'));
const NecklaceInputNickname = React.lazy(() => import('./InputNickname'));
const NecklaceInputPart = React.lazy(() => import('./InputPart'));
const NecklaceInputUniv = React.lazy(() => import('./InputUniv'));
const NecklaceYours = React.lazy(() => import('./YourNecklace'));

const routes = [
  { path: '/inputname', name: 'NecklaceInputName', element: NecklaceInputName },
  {
    path: '/inputnickname',
    name: 'NecklaceInputNickname',
    element: NecklaceInputNickname,
  },
  {
    path: '/inputpart',
    name: 'NecklaceInputPart',
    element: NecklaceInputPart,
  },
  {
    path: '/inputuniv',
    name: 'NecklaceInputUniv',
    element: NecklaceInputUniv,
  },
  {
    path: '/yournecklace',
    name: 'NecklaceYours',
    element: NecklaceYours,
  },
];

const loading = <div>화면을 불러오는 중 입니다.</div>;

const index = () => {
  return (
    <Suspense fallback={loading}>
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                name={route.name}
                element={<route.element />}
              />
            )
          );
        })}
        <Route
          path='/'
          element={<Navigate to='/necklace/inputname' replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default index;
