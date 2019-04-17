import React from "react";

const Search = (props) => {
  return (
  <form className="search">
    <input  onChange={props.handleChange}  value={props.searchTerm} name="search" type="text" placeholder="Search..."/>
  </form>
)
};

export default Search;
