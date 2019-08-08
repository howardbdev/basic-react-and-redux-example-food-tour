// here I will define action creators
// Redux:
// to make changes to the global store, we dispatch() actions
// actions are plain JS objects with at least a type property
// they also often have a payload representing the data need to make the state change

// we use the action creator pattern, meaning we create functions that return actions

// let's bulid an action creator:

export const getRestaurants = (restaurants) => {
  return {
    type: "GET_RESTAURANTS",
    restaurants
  }
}
