import { RECEIVE_WEATHER, RECEIVE_WEATHER_CITY } from './actions';

export const weatherData = (state = {},action)=>{
    switch(action.type){

        case RECEIVE_WEATHER:
            return Object.assign({},state,{
                [action.payload.name.toLowerCase()]: action.payload,
                currentCity: action.payload.name.toLowerCase()
            });

        case RECEIVE_WEATHER_CITY:
            return Object.assign({}, state, {currentCity: action.payload.toLowerCase()});
            
        default:
            return state;
    }
}
