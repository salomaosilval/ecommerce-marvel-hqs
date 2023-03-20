import { useRef } from "react";
import { SearchContainer, SearchBar, SearchButton } from "./styles";

export const Search = (props) => {
  const { setSearch } = props;

  const inputRef = useRef(null);

  return (
    <SearchContainer>
      <SearchBar>
        <input
          type="text"
          placeholder="Buscar HQ"
          ref={inputRef}
          onChange={(e) => {
            if (!e.target.value) {
              setSearch("");
            }
          }}
        />
      </SearchBar>
      <SearchButton
        onClick={() => {
          if (inputRef.current) {
            setSearch(inputRef.current.value);
          }
        }}
      >
        Buscar
      </SearchButton>
    </SearchContainer>
  );
};
