import React from "react";
import "./App.css";
import BeerContainer from "./Containers/BeerContainer";

const App = (props) => {
  return <BeerContainer beers={props.beers} beerSearch={props.beerSearch}/>;
};
// get the beers from Beer Container and get the beer search props
export default App;
