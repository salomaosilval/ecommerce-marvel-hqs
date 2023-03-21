import { useContext } from "react";

import { Header } from "../../components/Header/Header";
import { CartSummary } from "../../components/CartSummary/CartSummary";

import { CartContext } from "../../contexts/CartContext";

import { FormatCurrency } from "../../utils/formatCurrency";

import { HQList, ComicTitle, ComicPrice, CartWrapper, EmptyCart } from "./styles";

export const Cart = () => {
  const { comicsCart } = useContext(CartContext);

  return (
    <>
      {comicsCart.length === 0 ? (
        <div>
          <Header />
          <EmptyCart>
            <h1>O carrinho está vazio!</h1>
          </EmptyCart>
        </div>
      ) : (
        <div>
          <Header />
          <CartWrapper>
            <HQList>
              {comicsCart.map((comic) => (
                <div key={comic.id}>
                  <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                  <footer>
                    <ComicTitle>{comic.title}</ComicTitle>
                    <ComicPrice>
                      {comic.prices[0].price === 0 ? "Grátis" : FormatCurrency(comic.prices[0].price)}
                    </ComicPrice>
                  </footer>
                </div>
              ))}
            </HQList>
          </CartWrapper>
          <CartSummary />
        </div>
      )}
    </>
  );
};
