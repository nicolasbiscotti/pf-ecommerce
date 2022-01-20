import React from "react";
import { SearchStyled } from "./SearchStyled";
import searchIcon from "../../../../utilsStyles/utilsImages/search-iconwhite.png";

function Search() {
  return (
    <SearchStyled>
      <input placeholder="Search our catalog" />
      <button>
        <img src={searchIcon} alt="search icon" />
      </button>
    </SearchStyled>
  );
}

export default Search;
