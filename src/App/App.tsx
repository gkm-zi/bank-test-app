import React from 'react';
import { Provider } from 'react-redux';

import Currency from '@/pages/Currency';

import { setupStore } from '../store';

const store = setupStore();

const App: React.FC = () => {
  console.log(process.env.REACT_APP_BASE_API);

  return (
    <Provider store={store}>
      <Currency />
    </Provider>
  );
};
export default App;
