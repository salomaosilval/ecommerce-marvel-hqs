import { CartIcon, HeaderContainer } from "./styles";

import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <a href="/">
          <img src={Logo} alt="Marvel Studio Logo" />
        </a>
        <div>
          <span>0</span>
          <CartIcon />
        </div>
      </HeaderContainer>
    </>
  );
};
