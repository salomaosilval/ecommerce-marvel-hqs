import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import { FormatCurrency } from "../../utils/formatCurrency";

import { CartSummaryContainer } from "./styles";

export const CartSummary = () => {
  const { comicsCart, cleanCart } = useContext(CartContext);

  const totalPrice = comicsCart.reduce((acc, comic) => acc + comic.prices[0].price, 0);

  return (
    <CartSummaryContainer>
      <div>
        <h2>Resumo do Carrinho</h2>
        <p>Total: {FormatCurrency(totalPrice)}</p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault;
          cleanCart();
        }}
      >
        Finalizar Compra
      </button>
    </CartSummaryContainer>
  );
};
