import React from "react";

const BeerCard = props => {
  console.log(props);
  return (
    <div className="beer-card">
      <img alt="" src={props.beer.image_url} />
      <p>{props.beer.description}</p>
    </div>
  );
};

export default BeerCard;
