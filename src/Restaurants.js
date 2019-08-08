import React from 'react'
import RestaurantCard from './RestaurantCard'
import { connect } from 'react-redux'
// how do I create a component?
// how do I know whether I want a class or functional component?

class Restaurants extends React.Component {
  render() {
    const restaurants = this.props.restaurantsFromRedux.map(restaurant => <RestaurantCard key={restaurant.name} restaurant={restaurant}/>)
    return <div>
            {restaurants}
          </div>
  }
}

const mapStateToProps = state => {
  return {
    restaurantsFromRedux: state.restaurants,
    fishiness: state.categories
  }
}

export default connect(mapStateToProps)(Restaurants)
