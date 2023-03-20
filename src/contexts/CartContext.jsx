import { createContext, useState } from "react";

export const CartContext = createContext({
  comicsCart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  cleanCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [comicsCart, setComicsCart] = useState([]);

  const addToCart = (comic) => {
    if (!comicsCart.find((c) => c.id === comic.id)) {
      setComicsCart((prevState) => [...prevState, comic]);
    }
  };

  const removeFromCart = (comicId) => {
    setComicsCart((prevState) => prevState.filter((c) => c.id !== comicId));
  };

  const cleanCart = () => {
    setComicsCart([]);
  };

  return (
    <CartContext.Provider value={{ comicsCart, addToCart, removeFromCart, cleanCart }}>{children}</CartContext.Provider>
  );
};
