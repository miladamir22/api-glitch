import React from 'react';
import { BasketContextProvider } from './context/BasketContext'; 
import Basket from './pages/Basket'

function App() {
  return (
    <BasketContextProvider> 
      <Basket/>
    </BasketContextProvider>
  );
}

export default App;
