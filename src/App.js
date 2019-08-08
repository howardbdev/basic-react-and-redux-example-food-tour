import React from 'react';
import './App.css';
import Restaurants from './Restaurants'
import { restaurants } from './restaurant_list.js'
import { connect } from 'react-redux'
import { getRestaurants } from './actions/restaurants'

class App extends React.Component {
  constructor() {
    super()

  }

  // what lifecycle method would I use for an initial API request?
  componentDidMount() {
    // console.log(`#1 in CDM there are ${this.state.restaurants.length} restaurants before setState`)
    // this.setState({
    //   restaurants: restaurants
    // }, () => console.log(`#2 in CDM there are ${this.state.restaurants.length} restaurants before setState`))
    // console.log("#3")

    this.props.getRestaurants(restaurants)
  }

  render(){
    return (
      <div className="App">
        <Restaurants />
      </div>
    )
  }

}

export default connect(null, {getRestaurants})(App);
