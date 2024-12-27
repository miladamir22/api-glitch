import React, { createContext, useState, useEffect } from "react";

export const BasketContext = createContext();

export const BasketContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const savedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(savedBasket);
  }, []);

  const addToBasket = (product) => {
    setBasket((prevBasket) => {
      const updatedBasket = [...prevBasket, { ...product, quantity: 1 }];
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
  };

  const removeFromBasket = (id) => {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.filter((product) => product.id !== id);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
  };

  const clearBasket = () => {
    setBasket([]);
    localStorage.removeItem("basket");
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
