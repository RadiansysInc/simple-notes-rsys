import React from "react";
const Search = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search notes"
      onChange={(e) => onSearch(e.target.value)}
      className="search-input"
    />
  );
};
export default Search;