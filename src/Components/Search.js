import React from "react";

const Search = (props) => {
  // form controlled because it gets its VALUE of state from what was passed down to it. everytime we change state we change
    // the value of what was being sent in
  return <form className="search">
      <input type="text" placeholder="filter entries" value={props.searchTerm} onChange={props.onChange}/>
  </form>;
};

export default Search;
