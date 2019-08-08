import React from 'react'

// 3 ways to build a functional component

// arrow function expression assigned const
const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      <h3>{restaurant.name}</h3>
      <p>{restaurant.location}</p>
      <p>{restaurant.hours}</p>
      <p>{restaurant.category}</p>
    </div>
  )
}

export default RestaurantCard

// regular function expression assigned to const
// const RestaurantCard = function() {
//
// }


// function declaration
// function RestaurantCard() {
//
// }
