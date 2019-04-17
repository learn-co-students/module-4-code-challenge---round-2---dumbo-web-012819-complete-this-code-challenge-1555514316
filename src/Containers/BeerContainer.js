import React, { Component } from "react";
import BeerDetail from '../Components/BeerDetail'
import Search from '../Components/Search'
import BeerItem from '../Components/BeerItem.js'


class BeerContainer extends Component {

    state = {
        beers: [],
        beerDetail: {},
        searchTerm: ''
    }

    componentDidMount() {
        fetch('http://localhost:3001/beers')
        .then(res => res.json())
        .then(data => {
            this.setState({
                beers: data
            }, () => console.log(this.state.beers))
        })
    }

    handleClick = (beer) => {
        this.setState({
            beerDetail: beer
        }, () => console.log(this.state.beerDetail))
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        }, () => console.log("this is serachterm state", this.state.searchTerm))
    }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm} />
        <br />
        <ul className="container">
        <BeerItem
        beers={this.state.beers}
        handleClick={this.handleClick}
        searchTerm={this.state.searchTerm}
        />
        </ul>
        <BeerDetail beer={this.state.beerDetail} searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default BeerContainer;
