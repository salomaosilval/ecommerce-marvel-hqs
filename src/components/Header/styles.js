import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const HeaderContainer = styled.nav`
  position: fixed;
  width: 100vw;
  height: 8rem;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid #ed1d24;

  a img {
    width: 15rem;
  }
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
`;
