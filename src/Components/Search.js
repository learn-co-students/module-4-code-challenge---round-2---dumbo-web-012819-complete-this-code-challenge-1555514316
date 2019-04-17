import React from "react";

const Search = (props) => {
  return <form className="search">
      <input placeholder="search beers" name="name" onChange={props.handleChange}></input>
    </form>;
};

export default Search;
