import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {connect} from 'react-redux';
import './css/App.css';
import './css/media.css';

import {requestWeather, requestWeatherByCity} from './actionCreators';
import Spinner from './Spinner';

import sun from './svg/sun.svg';
import clouds from './svg/clouds.svg';
import cloudSun from './svg/cloud-sun.svg';
import fog from './svg/fog.svg';
import rain from './svg/rain.svg';


class App extends Component {

 	 constructor(props){
		super(props);
		this.icon = null;
	}
	
	componentDidMount() {
		this.props.getWeather();
	}


  render() {

		//Bad solution ////////////////////////////////////////////////////////////////
		if (this.props.data[this.props.city]) {
			switch (this.props.data[this.props.city].weather[0].main) {
				  case "Rain":
					  this.icon = rain; break;
				  case "Clouds":
					  this.icon = clouds; break;
				  case "Clear":
					  this.icon = sun; break;
				  case "Fog":
					  this.icon = fog; break;
				  case "Mist":
					  this.icon = fog; break;
				  case "Scattered":
					  this.icon = clouds; break;
				  default:
					  this.icon = cloudSun;
			  }
		  }
		//Bad solution ////////////////////////////////////////////////////////////////
		
		if(!this.props.data[this.props.city]){
			return <div>
				<Header getWeatherByCity={this.props.getWeatherByCity} />
				<Spinner />;
				</div>
		}else{
			return (
				<div className="App">
					<Header getWeatherByCity={this.props.getWeatherByCity} />
					<div className="content">
						<div className="main-info">
							<h1>{this.props.data[this.props.city].name}</h1>
							<h1>{Math.floor(this.props.data[this.props.city].main.temp - 273)}C°</h1>
						</div>
						<div className="secondary-info">
							<h2>{this.props.data[this.props.city].weather[0].description}</h2>
							<object data={this.icon} type="image/svg+xml" aria-label="icon"></object>
						</div>
						<div className="another-info">
							<div className="another">
								<h3>Pressure:</h3>
								<h2>{this.props.data[this.props.city].main.pressure} mbar</h2>
							</div>
							<div className="another">
								<h3>Humidity:</h3>
								<h2>{this.props.data[this.props.city].main.humidity}%</h2>
							</div>
							<div className="another">
								<h3>Wind:</h3>
								<h2>
									{this.props.data[this.props.city].wind.speed} m/s
									{this.props.data[this.props.city].wind.deg ? ', direction: ' 
									+ Math.round(this.props.data[this.props.city].wind.deg) +'°':""}
								</h2>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			);
		}
	}
}
	

const mapStateToProps = (state) => (
	{
		data: state.weatherData,
		city: state.weatherData.currentCity,
		weather: state.weatherData.currentWeather
	}
)

const mapDispatchToProps = (dispatch) => (
	{
		getWeather(){
			dispatch(requestWeather());
		},
		getWeatherByCity(city){
			dispatch(requestWeatherByCity(city));
		}
	}
)


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
