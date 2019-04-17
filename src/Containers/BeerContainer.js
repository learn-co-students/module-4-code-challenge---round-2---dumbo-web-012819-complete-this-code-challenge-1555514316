import React, { Component } from "react";
import Search from '../Components/Search';
import BeerDetail from '../Components/BeerDetail';
import BeerItem from '../Components/BeerItem';

class BeerContainer extends Component {
  state = {
    beers: [],
    displayBeer: null,
    searchText: ''
  };

  componentDidMount(){
    fetch('http://localhost:3001/beers')
    .then(resp => resp.json())
    .then(beers => {
      this.setState({
        beers
      })
    })
  };

  handleClick = (beerObj) => {
    this.setState({
      displayBeer: beerObj
    });
  };

  handleSearchText = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  foundBeers = () => {
    const beerArray = this.state.beers
    return beerArray.filter(beer => beer.name.includes(this.state.searchText))
  };


  render() {

    const beerItems = this.foundBeers().map(beer => {
      return <BeerItem key={beer.id} beer={beer} handleClick={this.handleClick}/>
    })

    return (
      <div>
        <Search handleChange={this.handleSearchText}/>
        <br />
        <ul className="container">{beerItems}</ul>
        <BeerDetail beer={this.state.displayBeer ? this.state.displayBeer : null} />
      </div>
    );
  }
}

export default BeerContainer;
