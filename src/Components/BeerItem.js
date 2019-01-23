import React from "react";
import BeerCard from "./BeerCard";

const BeerItem = props => {
  return (
    <li className="beer-item" onClick={() => props.clickHandler(props.beer)}>
      {props.beer.name}
    </li>
  );
};

export default BeerItem;
