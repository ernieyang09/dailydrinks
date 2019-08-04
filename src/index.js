import React from 'react';
import { render } from 'react-dom';

import App from './App';
import StoreProvider from './store';



render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.querySelector('#root'),
);

