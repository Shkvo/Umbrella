import { REQUEST_WEATHER, RECEIVE_WEATHER } from './actions';

export const weatherData = (state = {},action)=>{
    switch(action.type){
        case REQUEST_WEATHER:
            return Object.assign({},state,{fetching: true});
        case RECEIVE_WEATHER:
            return Object.assign({},state,{
                [action.payload.name.toLowerCase()]: action.payload, 
                fetching: false});
        default:
            return state;
    }
}