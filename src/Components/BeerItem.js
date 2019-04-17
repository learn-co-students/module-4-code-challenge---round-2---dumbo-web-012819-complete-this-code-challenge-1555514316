import React from "react";

const BeerItem = (props) => {
  // single beer item is passed in a props
    // will fire click function to tell which detail of beer to display
    console.log('This is my prop', props);
  return (
    <li className="beer-item" onClick={()=>props.handleClick(props.beer)}>
      {props.beer.name}
    </li>
  )
};
export default BeerItem;


// cant get the beer detail to show AFTER its been filtered via search
// nevermind I was passing in the incorrect function from beer container