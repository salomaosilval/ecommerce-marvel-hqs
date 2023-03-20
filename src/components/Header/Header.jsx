import { Link } from "react-router-dom";

import { CartIcon, HeaderContainer } from "./styles";

import Logo from "../../assets/logo.png";

import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export const Header = () => {
  const { comicsCart } = useContext(CartContext);

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <img src={Logo} alt="Marvel Studio Logo" />
        </Link>
        <div>
          <span>{comicsCart.length}</span>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </div>
      </HeaderContainer>
    </>
  );
};
