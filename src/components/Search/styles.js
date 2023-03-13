import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  margin: 0px auto;
  margin-left: 14rem;
  padding: 0 20px;
  align-items: center;
`;

export const SearchBar = styled.div`
  background-color: #fff;
  margin-right: 20px;

  input {
    padding: 10px;
    border-radius: 3px;
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
