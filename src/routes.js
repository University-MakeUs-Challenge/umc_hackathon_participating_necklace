import React from 'react';

const Home = React.lazy(() => import('./pages/home/Home'));
const Necklace = React.lazy(() => import('./pages/participatingNecklace'));

const routes = [
  { path: '/', name: 'Home', element: Home },
  { path: '/necklace/*', name: 'Necklace', element: Necklace },
];

export default routes;
