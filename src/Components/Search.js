import React from "react";

const Search = (props) => {
  return <form className="search">
            <h4>
              <u>Search By Name</u>
            </h4>
            <input onChange={e => props.handleSearch(e)} value={props.filterBeer}/>
         </form>;
};

export default Search;
