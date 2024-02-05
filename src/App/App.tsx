import React from 'react';
import { Provider } from 'react-redux';

import Currency from '@/pages/Currency';

import { setupStore } from '../store';

const store = setupStore();

const App: React.FC = () => (
  <Provider store={store}>
    <Currency />
  </Provider>
);

export default App;
