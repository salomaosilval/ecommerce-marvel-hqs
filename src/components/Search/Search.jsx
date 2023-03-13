import { SearchContainer, SearchBar, SearchButton } from "./styles";

export const Search = () => {
  return (
    <SearchContainer>
      <SearchBar>
        <input type="text" placeholder="Buscar HQ" />
      </SearchBar>
      <SearchButton>Buscar</SearchButton>
    </SearchContainer>
  );
};
