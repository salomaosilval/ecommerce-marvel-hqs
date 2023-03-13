import styled from "styled-components";

export const HQSContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 3rem;
`;

export const HQSList = styled.ul`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style: none;

  img {
    width: 100%;
  }

  div {
    background-color: #ed1d24;
    border-radius: 0 0 1rem 1rem;
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
      transform: scale(1.05);
    }
  }

  span {
    display: flex;
    height: 6rem;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 1rem;
    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
  }
`;
