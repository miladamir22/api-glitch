// src/pages/Basket.jsx
import React, { useContext } from 'react'; // Import useContext
import { BasketContext } from '../context/BasketContext'; // Correct import path for context
import BasketTable from '../components/BasketTable';

const Basket = () => {
    const { clearBasket } = useContext(BasketContext); // Use useContext to access clearBasket

  return (
    <div>
      <h2>Your Basket</h2>
      <BasketTable />
      <button onClick={clearBasket}>Clear Basket</button>
    </div>
  );
};

export default Basket;