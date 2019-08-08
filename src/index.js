import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Redux setup
import { Provider } from 'react-redux'
import { createStore, compose, combineReducers } from 'redux'
import restaurantsReducer from './reducers/restaurants.js'
import categoriesReducer from './reducers/restaurants.js'

const reducer = combineReducers({
  restaurants: restaurantsReducer,
  categories: categoriesReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(),
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
