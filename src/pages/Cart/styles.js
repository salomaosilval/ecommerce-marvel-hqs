import styled from "styled-components";

export const HQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80vw;
  margin: 0 auto;

  div {
    display: flex;
    border: 1px solid #000;
    padding: 2rem;
  }

  img {
    width: 10rem;
    margin-right: 2rem;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ComicTitle = styled.h1`
  font-size: 2rem;
`;

export const ComicPrice = styled.p`
  font-size: 1.6rem;
`;

export const CartWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const EmptyCart = styled.div`
  display: flex;
  width: 80vw;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
