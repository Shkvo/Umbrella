import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { weatherData } from './reducers';
import thunk from 'redux-thunk';

let store = createStore(
    combineReducers({
        weatherData
    }),
    compose(applyMiddleware(thunk),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f)
);

export default store;