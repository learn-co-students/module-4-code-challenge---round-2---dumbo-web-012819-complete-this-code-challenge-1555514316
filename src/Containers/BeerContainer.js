import React, { Component } from "react";
import Search from "../Components/Search.js";
import BeerDetail from "../Components/BeerDetail.js";
import BeerItem from "../Components/BeerItem"

class BeerContainer extends Component {
  state={
    beers:[],
    displayThisBeer:[],
    filterBeer:""
  }

  componentDidMount(){
    fetch("http://localhost:3001/beers")
    .then(res => res.json())
    .then(beerArry => {
      this.setState({
        beers:beerArry
      },()=>{console.log(this.state.beers)})
    })
  }

  displayThisBeer = (beerObj) => {
    this.setState({
      displayThisBeer:beerObj
    },()=>{console.log(this.state.displayThisBeer)})
  }

  handleSearch = (e) => {
    this.setState({
      filterBeer:e.target.value
    })
  }

  render() {

      const filterBeerList = this.state.beers.filter(beer => beer.name.toUpperCase().includes(this.state.filterBeer.toUpperCase()))
        console.log(filterBeerList);
      const beerItems = () => {
      return  filterBeerList.map(beer => {
        return  <BeerItem key={beer.id} beer={beer} displayThisBeer={this.displayThisBeer}/>
        })
      }

    return (
      <div>
        <Search handleSearch={this.handleSearch} filterBeer={this.state.filterBeer}/>
        <br />
        <ul className="container">{beerItems()}</ul>
        <BeerDetail displayBeer={this.state.displayThisBeer}/>
      </div>
    );
  }
}

export default BeerContainer;
