import React from "react";

const Search = props => {
  return (
    <form className="search">
      <input
        type="text"
        onChange={props.changeHandler}
        value={props.searchTerm}
        placeholder="Search Beers"
      />
    </form>
  );
};

export default Search;
