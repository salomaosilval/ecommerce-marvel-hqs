import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  margin: 0px auto;
  margin-left: 7.5rem;
  padding: 0 20px;
  align-items: center;

  @media screen and (max-width: 425px) {
    margin-left: 4rem;
  }
`;

export const SearchBar = styled.div`
  background-color: #fff;
  margin-right: 20px;

  input {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #000;

    &:hover,
    &:focus {
      outline: none;
    }
  }
`;

export const SearchButton = styled.button`
  background-color: #8b0000;
  border: none;
  border-radius: 10px;
  height: 4rem;
  color: #fff;
  padding: 10px 12px;
  transition: background-color 0.7s ease;
  cursor: pointer;

  &:hover {
    background-color: #550000;
  }
`;
