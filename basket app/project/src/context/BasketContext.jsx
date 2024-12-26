import React, { createContext, useState, useEffect } from 'react';

// Context yaradılır
export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  // localStorage-ə məlumatı yazırıq və oxuyuruq
  useEffect(() => {
    const savedBasket = JSON.parse(localStorage.getItem('basket'));
    if (savedBasket) {
      setBasket(savedBasket);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  // Məhsul əlavə etmə funksiyası
  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  // Məhsul silmə funksiyası
  const removeFromBasket = (productId) => {
    setBasket(basket.filter(item => item.id !== productId));
  };

  // Bütün məhsulları silmək
  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
