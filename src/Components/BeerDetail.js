import React from "react";

const BeerDetail = (props) => {

  return (
    <div className="beer-card">
      <img alt="" src={props.beerInfoObject.image_url} />
      <p>{props.beerInfoObject.description}</p>
    </div>
  );
};

export default BeerDetail;
