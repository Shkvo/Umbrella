import sun from './svg/sun.svg';
import clouds from './svg/clouds.svg';
import cloudSun from './svg/cloud-sun.svg';
import fog from './svg/fog.svg';
import rain from './svg/rain.svg';

const getIcon = (weather) =>{
    switch (weather) {
        case "Rain":
            return rain;
        case "Clouds":
            return clouds;
        case "Clear":
            return sun;
        case "Fog":
            return fog;
        case "Mist":
            return fog; 
        default:
            return cloudSun;
    }
}

export default getIcon;
    
