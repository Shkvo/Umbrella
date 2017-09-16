import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './css/index.css';
import App from './App';
import { weatherData } from './reducers';
import thunk from 'redux-thunk';

let store = createStore(
    combineReducers({
        weatherData
    }),
    compose(applyMiddleware(thunk), 
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f)
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

