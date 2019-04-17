import React from "react";

const BeerDetail = (props) => {
  return (
    <div className="beer-card">
      <img alt="" src={props.displayBeer.image_url} />
      <p>{props.displayBeer.description}</p>
    </div>
  );
};

export default BeerDetail;
