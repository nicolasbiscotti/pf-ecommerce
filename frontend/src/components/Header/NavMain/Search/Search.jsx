import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchStyled } from "./SearchStyled";
import searchIcon from "../../../../utilsStyles/utilsImages/search-iconwhite.png";
import { selectNameSearch } from "../../../../redux/reducers/filters/actions";

function Search({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [inputWord, setInputWord] = useState("");
  const searchInput = useRef();
  const dispatch = useDispatch();
  const [showSuggestions, setShowSuggestions] = useState(true);
  let navigate = useNavigate();

  const handleCleanInput = (f = [], i = "") => {
    setFilteredData(f);
    setInputWord(i);
  };

  useEffect(() => {
    document.addEventListener("click", handleOuterClick);
    return () => {
      document.removeEventListener("click", handleOuterClick);
    };
  }, []);

  const handleOuterClick = (e) => {
    if (searchInput.current && !searchInput.current.contains(e.target)) {
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
    }
  };

  const handleFilter = (event) => {
    if (event.target.value === "") {
      handleCleanInput();
    } else {
      const searchWord = event.target.value;
      let newFilter = [];
      if (data) {
        newFilter = data.filter((product) =>
          product.name.toLowerCase().includes(searchWord.toLowerCase())
        );
      }
      handleCleanInput(newFilter, searchWord);
    }
  };

  const handleSugestionClick = (event) => {
    handleCleanInput([], event.target.innerHTML);
    searchInput.current.focus();
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    inputWord.length > 0 && (await dispatch(selectNameSearch(inputWord)));
    navigate("/shop");
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
        onKeyDown={(event) => event.key === "Enter" && handleOnSubmit(event)}
      />
      <button onClick={handleOnSubmit}>
        <img src={searchIcon} alt="search icon" />
      </button>

      {filteredData.length !== 0 && showSuggestions && (
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
