import { CartIcon, HeaderContainer } from "./styles";

import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <a href="/">
          <img src={Logo} alt="Marvel Studio Logo" />
        </a>
        <CartIcon />
      </HeaderContainer>
    </>
  );
};
