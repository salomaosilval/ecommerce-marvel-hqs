import styled from "styled-components";

import { IoIosArrowBack } from "react-icons/io";

export const HQContainer = styled.div`
  display: flex;
  width: 80vw;
  margin: 0 auto;

  img {
    width: 20rem;
    margin-right: 2rem;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
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
    margin-top: 5rem;
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

  @media screen and (max-width: 425px) {
    flex-direction: column;

    img {
      width: 100%;
      margin-bottom: 2rem;
    }

    button {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

export const BackToHomeButton = styled(IoIosArrowBack)`
  display: inline-block;
  font-size: 3rem;
  margin-left: 13.5rem;
  margin-bottom: 2rem;
  background-color: #ed1d24;
  width: 10rem;
  border-radius: 1rem;
  color: #fff;
  transition: 0.5s ease;

  &:hover {
    background-color: #7b0f12;
  }

  @media screen and (max-width: 425px) {
    margin-left: 4rem;
  }
`;
