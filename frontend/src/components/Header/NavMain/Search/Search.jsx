import React, { useState, useRef } from "react";
import { SearchStyled } from "./SearchStyled";
import searchIcon from "../../../../utilsStyles/utilsImages/search-iconwhite.png";

function Search({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [inputWord, setInputWord] = useState("");
  const searchInput = useRef();

  const handleCleanInput = (f = [], i = "") => {
    setFilteredData(f);
    setInputWord(i);
  };
  const handleFilter = (event) => {
    if (event.target.value === "") {
      handleCleanInput();
    } else {
      const searchWord = event.target.value;
      let count = 0; //hardcodeo para cortar a 15 elementos filtrados
      const newFilter = data.filter((value) => {
        if (count < 16) {
          const isInclude = value.name
            .toLowerCase()
            .includes(searchWord.toLowerCase());
          if (isInclude) count++;
          return isInclude;
        } else return false;
      });
      handleCleanInput(newFilter, searchWord);
    }
  };
  const handleSugestionClick = (event) => {
    handleCleanInput([], event.target.innerHTML);
    searchInput.current.focus();
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("submit"); /// HANDLE SUBMIT
    handleCleanInput();
  };

  return (
    <SearchStyled>
      <input
        type="text"
        placeholder="Search our catalog"
        onChange={handleFilter}
        value={inputWord}
        ref={searchInput}
        onKeyDown={(event) =>
          event.key === "Enter" ? handleOnSubmit(event) : console.log()
        }
      />
      <button onClick={handleOnSubmit}>
        <img src={searchIcon} alt="search icon" />
      </button>

      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 4).map((value, key) => {
            return (
              <p key={key} onClick={(event) => handleSugestionClick(event)}>
                {value.name}
              </p>
            );
          })}
        </div>
      )}
    </SearchStyled>
  );
}

export default Search;
