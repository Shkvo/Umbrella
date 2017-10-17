import { RECEIVE_WEATHER, RECEIVE_WEATHER_CITY } from './actions';
import axios from 'axios';
const apiKey = '149891947be9deecbb1ced41871cdb4e';

const receiveWeather = (response) => ({
    type: RECEIVE_WEATHER,
    payload: response.data
})

const receiveWeatherByCity = (response) => ({
    type: RECEIVE_WEATHER_CITY,
    payload: response
})

export const requestWeather = () => {
    return (dispatch) => {
        var setPos = (position) => {
            var pos = {
                lat : position.coords.latitude,
                lon : position.coords.longitude
            };
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&APPID=${apiKey}`)
                .then(response => {
                    dispatch(receiveWeather(response));
                });
        }
        navigator.geolocation.getCurrentPosition(setPos);
    }
 }

export const requestWeatherByCity = (city) => {
    return (dispatch,getState) => {
        var state = getState();
        if(state.weatherData[city] === city){
            dispatch(receiveWeatherByCity(city));
        }else{
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
                .then(response => {
                    dispatch(receiveWeather(response));
                });
        }
            
    }
}
