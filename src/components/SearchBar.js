import React from "react";

const SearchBar = ({ handleSubmit, searchTerm, setSearchTerm }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
