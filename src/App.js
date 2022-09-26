import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

const loading = <div>화면을 불러오는 중 입니다.</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route exact path='/*' name='Home' element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
