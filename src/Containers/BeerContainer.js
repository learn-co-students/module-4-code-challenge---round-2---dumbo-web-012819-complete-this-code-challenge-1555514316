import React, { Component } from "react";

class BeerContainer extends Component {
  render() {
    return (
      <div>
        <Search />
        <br />
        <ul className="container">{/*render Beer Items Here*/}</ul>
        <BeerDetail />
      </div>
    );
  }
}

export default BeerContainer;
