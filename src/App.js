import React, { Component } from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import './css/App.css';
import {requestWeather, requestWeatherByCity} from './actionCreators';
import Spinner from './Spinner';

class App extends Component {

  constructor(props){
		super(props);
		
		this.apiKey = '2878f89b44a53eb7753809a1b6f3d7b8';
	}
	
	componentDidMount() {
		this.props.getWeather();
	}

  render() {
		console.dir(this.props.data)
		if(!this.props.data[this.props.city]){
			return 
				<div>
					<Header data={this.props.data} getWeatherByCity={this.props.getWeatherByCity} />
					<Spinner />;
				</div>
		}else{
			return (
				<div className="App">

					<Header data ={this.props.data} getWeatherByCity={this.props.getWeatherByCity} />

					<div className="content">

						<h1>{this.props.data[this.props.city].name}</h1>
						<h1>{Math.floor(this.props.data[this.props.city].main.temp - 273)}C°</h1>
						<h3>{this.props.data[this.props.city].weather[0].description}</h3>

					</div>

				</div>
			);
		}
	}
}
	

const mapStateToProps = (state) => (
	{
		data: state.weatherData,
		fetching: state.fetching,
		city: state.weatherData.currentCity
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
