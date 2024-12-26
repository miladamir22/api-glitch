import React from 'react';
import BasketProvider from './context/BasketContext';
import Basket from './pages/Basket';

const App = () => {
  return (
    <BasketProvider>
      <Basket /> 
    </BasketProvider>
  );
};

export default App;
