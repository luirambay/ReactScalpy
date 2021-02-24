import React, { useRef, useEffect } from "react";
import propTypes from "prop-types";

const SearchForm = ({ title, valueQuery, handleValueSearch }) => {
  const inputRef = useRef();
  const inputRefGlobal = useRef();

  useEffect(() => {
    inputRef.current.addEventListener("focus", activeFocusSearch);
    inputRef.current.addEventListener("blur", desactiveFocusSearch);

    return () => {
      inputRef.current.removeEventListener("focus", activeFocusSearch);
      inputRef.current.removeEventListener("blur", desactiveFocusSearch);
    };
  }, []);

  function activeFocusSearch() {
    inputRefGlobal.current.style.boxShadow = "0 0 2px 2px #0c4581";
    inputRef.current.style.fontSize = "16px";
    inputRef.current.style.fontWeight = "bold";
  }

  function desactiveFocusSearch() {
    inputRefGlobal.current.style.boxShadow = "none";
    inputRef.current.style.fontSize = "inherit";
    inputRef.current.style.fontWeight = "inherit";
  }

  return (
    <div className="SearchForm">
      <label className="SearchForm__txt">{title}</label>
      <div className="SearchFormInput" ref={inputRefGlobal}>
        <i className="SearchFormInput__icon fa fa-search"></i>
        <input
          className="SearchFormInput__input"
          ref={inputRef}
          type="text"
          defaultValue={valueQuery}
          maxLength="20"
          name="searchTable"
          onChange={handleValueSearch}
        />
      </div>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  title: propTypes.string,
  valueQuery: propTypes.string,
  handleValueSearch: propTypes.func,
};
