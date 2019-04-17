import React from "react";

const BeerItem = (props) => {

    const beerData =  props.beers.filter(b => b.name.toLowerCase().includes(props.searchTerm)).map(beer =>  <li onClick={() => props.handleClick(beer)}>{beer.name}</li>)

  return (
    <li className="beer-item" onClick={null}>
      {beerData}
    </li>
  );
};

export default BeerItem;
