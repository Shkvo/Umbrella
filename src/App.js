import React, { Component } from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import './css/App.css';
import {requestWeather} from './actionCreators';

class App extends Component {

  constructor(props){
		super(props);
		this.apiKey = '2878f89b44a53eb7753809a1b6f3d7b8';
	}
	
	componentWillMount() {
		this.props.getWeather();
	}
	
  render() {
			return (
				<div className="App">
					<Header />
					<div className="content">
						<h1>{this.props.data.name}</h1>
						{/* <button onClick={this.handleClick}>Click me</button>
						<h1>{this.state.data['lviv'].name}</h1>
						<h2>{Math.ceil(this.state.data['lviv'].main.temp - 273)} C°</h2>
						<h2>{this.state.data['lviv'].weather[0].description}</h2> */}
					</div>
				</div>
			);
		}
  }
const mapStateToProps = (state) => (
	{
		data: state.weatherData
	}
)

const mapDispatchToProps = (dispatch) => (
	{
		getWeather(){
			dispatch(requestWeather());
		}
	}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
