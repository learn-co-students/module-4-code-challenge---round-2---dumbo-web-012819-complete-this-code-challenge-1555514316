import React, { Component } from "react";
import BeerItem from "../Components/BeerItem";
import BeerCard from "../Components/BeerCard";
import Search from "../Components/Search";
class BeerContainer extends Component {
  state = {
    beerList: [],
    beers: [],
    clickedBeer: {},
    searchTerm: ""
  };

  componentDidMount() {
    fetch("  http://localhost:3000/beers")
      .then(resp => resp.json())
      .then(beerList => this.setState({ beerList: beerList, beers: beerList }));
  }

  changeHandler = e => {
    let newArr = [...this.state.beerList].filter(beer =>
      beer.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      searchTerm: e.target.value,
      beers: newArr
    });
  };

  clickHandler = clickedBeer => {
    this.setState({ clickedBeer: clickedBeer });
  };

  render() {
    let beers = this.state.beers.map(beer => (
      <BeerItem key={beer.id} beer={beer} clickHandler={this.clickHandler} />
    ));
    return (
      <div>
        <Search
          searchTerm={this.state.searchTerm}
          changeHandler={this.changeHandler}
        />
        <br />
        <ul className="container">{beers}</ul>
        <BeerCard beer={this.state.clickedBeer} />
      </div>
    );
  }
}

export default BeerContainer;
