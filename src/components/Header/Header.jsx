import { Link } from "react-router-dom";

import { CartIcon, HeaderContainer } from "./styles";

import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <img src={Logo} alt="Marvel Studio Logo" />
        </Link>
        <div>
          <span>0</span>
          <CartIcon />
        </div>
      </HeaderContainer>
    </>
  );
};
