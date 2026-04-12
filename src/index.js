import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from '@/store';
import App from '@/App';
import 'normalize.css';
import '@/assets/css/index.less';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <HashRouter>
            <ThemeProvider theme={theme}>    
                <App />
            </ThemeProvider>
          </HashRouter>
        </Suspense>
      </Provider>
  // </React.StrictMode>
);

