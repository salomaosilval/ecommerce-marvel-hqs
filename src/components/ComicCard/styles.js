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
    background-color: #000;
    border-radius: 0 0 1rem 1rem;
    cursor: pointer;
    transition: 0.2s ease-in;
    padding-bottom: 1rem;

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
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  button {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 20rem;
    height: 5rem;
    margin: 0 auto;
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

  footer {
    display: flex;
    align-items: center;
  }
`;
