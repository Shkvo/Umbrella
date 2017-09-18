import { createStore, combineReducers, applyMiddleware } from 'redux';
import { weatherData } from './reducers';
import thunk from 'redux-thunk';

let store = createStore(
    combineReducers({
        weatherData
    }),
    applyMiddleware(thunk)
);

export default store;