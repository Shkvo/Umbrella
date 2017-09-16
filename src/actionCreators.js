import { RECEIVE_WEATHER } from './actions';
import axios from 'axios';


const receiveWeather = (response) => ({
    type: RECEIVE_WEATHER,
    payload: response.data
})

export const requestWeather = () => {
    return (dispatch) => {
        var setPos = (position,dispatch) => {
            var pos = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };
            console.dir(pos)
            var apiKey = '2878f89b44a53eb7753809a1b6f3d7b8';
            axios
                .get(`http://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&APPID=${apiKey}`)
                .then(response => {
                    console.dir(response)
                    dispatch(receiveWeather(response));
                });
        }
        navigator.geolocation.getCurrentPosition(setPos);
    }
}
