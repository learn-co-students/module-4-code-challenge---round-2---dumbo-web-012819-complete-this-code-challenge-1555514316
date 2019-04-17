import React, { Component } from "react";
import Search from "../Components/Search"
import BeerDetail from "../Components/BeerDetail"
import BeerItem from "../Components/BeerItem"

class BeerContainer extends Component {

    state = {
        beers: [],
        beerInfo: [],
        searchTerm: ""
    }

    componentDidMount(){
        fetch(`http://localhost:3001/beers`)
        .then(res => res.json())
        .then(beers => {
            this.setState({
                beers: beers
            })
        })
    }

    handleBeerInfoClick = (beerObject) => {
        this.setState({
            beerInfo: beerObject
        })
    }

    handleSearch = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    filteredBeers = () => {
        const filtered = this.state.beers.filter(beer => beer.name.includes(this.state.searchTerm))
        return filtered.map(beer => {
            return <BeerItem handleClick={this.handleBeerInfoClick} beer={beer}/>
        })
    }

  render() {
    return (
      <div>
        <Search searchValue={this.state.searchTerm} handleSearch={this.handleSearch}/>
        <br />
        <ul className="container">{this.filteredBeers()}</ul>
        <BeerDetail beerInfoObject={this.state.beerInfo}/>
      </div>
    );
  }
}

export default BeerContainer;
