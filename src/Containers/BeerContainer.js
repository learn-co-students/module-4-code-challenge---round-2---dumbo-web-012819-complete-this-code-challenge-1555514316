import React, { Component } from "react";
import Search from '../Components/Search';
import BeerDetail from '../Components/BeerDetail';
import BeerItem from '../Components/BeerItem'


class BeerContainer extends Component {
    // initialize state
    state = {
        beers: [],
        beerSearch:[],
        searchTerm: '',
        selectedBeer: null ,

    };

    // pull list of beers from fake backend
    componentDidMount() {
        fetch('http://localhost:3001/beers')
            .then(resp => resp.json())
            .then(respJSON => {
                this.setState({
                    beers: respJSON
                })
            })
    }

    // function that fires whenever a beer is clicked needs to change the state to the beer object to let the Beer Detail
    // know what information to show
    handleClick = (beer) => {
        this.setState({
            selectedBeer : beer
        }, console.log("This is the changed state", this.state.selectedBeer))
    };


    // function that will fire when the user make a change in the search bar
    // will get the search term and update the state as the user types
    // will change what beer list is rendered as the user is typing
    // force it to lowercase to include all options of the search
    handleChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const beerSearch = [...this.state.beers].filter(beer => beer.name.toLowerCase().includes(searchTerm));
        this.setState({
            searchTerm,
            beerSearch
        });
    };


    render() {
        // array that will list ALL of the beers also have the card listen out for a user click
        const beerArray= this.state.beers.map(beer =>
            (<BeerItem key={beer.id}  beer={beer} handleClick={this.handleClick}/>));

        // array that will list all of the beers in the search bar also will listen for a user to click
        const searchArray= this.state.beerSearch.map(beer =>
            (<BeerItem key={beer.id} handleClick={this.handleClick} beer={beer}/>));


        return (

            <div>
                <Search onChange={this.handleChange} value={this.searchTerm}/>
                <ul className="container">
                    {this.state.beerSearch.length > 0 ? searchArray : beerArray}
                </ul>
                {this.state.selectedBeer ? <BeerDetail selectedBeer={this.state.selectedBeer}/> : null }
            </div>
        );
    }
}
// if someone has entered something in the search bar (making the length greater than 0) then show the search array else
// if no one has searched for anything list out ALL of the beers

// if no one has selected a beer then dont show the detail card... if someone HAS selected a beer pass that beer down as a prop
// to the BeerDetail component

export default BeerContainer;
