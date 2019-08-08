const initialState = []
export default (state=initialState, action) => {
  switch (action.type) {
    case "GET_RESTAURANTS":
      return action.restaurants
    default:
      return state
  }
}
