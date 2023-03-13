import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const HeaderContainer = styled.nav`
  height: 8rem;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid #ed1d24;
  margin-bottom: 3rem;

  a img {
    width: 15rem;
  }
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  transition: color 0.6s ease;

  &:hover {
    color: #ed1d24;
  }
`;
