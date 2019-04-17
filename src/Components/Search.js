import React from "react";

const Search = (props) => {

  return <form className="search">
            <input onChange={(event)=>{props.handleSearch(event)}} value={props.searchValue} type="text" name="searchTerm"/>
        </form>;
};

export default Search;
