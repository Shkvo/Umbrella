import { RECEIVE_WEATHER } from './actions';
import axios from 'axios';

var apiKey = '149891947be9deecbb1ced41871cdb4e';

const receiveWeather = (response) => ({
    type: RECEIVE_WEATHER,
    payload: response.data
})

export const requestWeather = () => {
    return (dispatch) => {
        var setPos = (position) => {
            var pos = {
                lat : position.coords.latitude,
                lon : position.coords.longitude
            };
            axios
                .get(`http://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&APPID=${apiKey}`)
                .then(response => {
                    dispatch(receiveWeather(response));
                });
        }
        navigator.geolocation.getCurrentPosition(setPos);
        }
    }



    // .get(`http://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&APPID=${apiKey}`)