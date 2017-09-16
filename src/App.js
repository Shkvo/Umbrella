import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';


class App extends Component {

  constructor(props){
	super(props);

	this.state = {
	  data: {},
	  currentPos: {},
	}

	this.apiKey = '149891947be9deecbb1ced41871cdb4e';
	this.handleClick = this.handleClick.bind(this);
	
  }

  handleClick(){
	  axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.currentPos.lat}&lon=${this.state.currentPos.lon}&APPID=${this.apiKey}`)
		  // .get(`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=149891947be9deecbb1ced41871cdb4e`)
		  .then((response) => {
			  //   let res = JSON.parse(response);
			  this.setState({
				  data: response.data
			  })
		  })
  }

  componentDidMount() {
		let setPos = (position) => {
			var pos = {
				lat: position.coords.latitude,
				lon: position.coords.longitude
			};
			
			axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&APPID=${this.apiKey}`)
				.then((response)=>{
					this.setState({
						currentPos: pos,
						data : response.data
					})
				})	
		}
		navigator.geolocation.getCurrentPosition(setPos);
  }
  
  render() {
	return (
	  <div className="App">
		<h1>{this.state.currentPos.lat},{this.state.currentPos.lon}</h1>
		<button onClick={this.handleClick}>Click</button>
	  </div>
	);
  }
}

export default App;
