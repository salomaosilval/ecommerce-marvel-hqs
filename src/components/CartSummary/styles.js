import styled from "styled-components";

export const CartSummaryContainer = styled.div`
  display: flex;
  width: 80vw;
  margin: 0 auto;
  border: 1px solid #000;
  padding: 2rem;
  justify-content: space-between;
  margin-bottom: 5rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 20rem;
    height: 5rem;
    background-color: #ed1d24;
    color: #fff;
    border: none;
    font-weight: bold;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 1rem;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: #7b0f12;
    }
  }
`;
