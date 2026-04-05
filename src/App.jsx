import React, { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import routes from '@/router';

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className='app'>
      <ScrollToTop />
      <AppHeader/>
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <AppFooter/>
    </div>
  );
}

export default App;
