import React from "react";

const BeerDetail = (props) => {

  const beer = {...props.beer}

  return (
    <div className="beer-card">
      <h3>{beer.name}</h3>
      <img alt={beer.name} src={beer.image_url} />
      <p>{beer.description}</p>
    </div>
  );
};

export default BeerDetail;
