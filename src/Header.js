import React, {Component} from 'react';
import './css/Header.css'
import logo from './svg/Umbrella.svg';


class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            city: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e){
        this.setState({
            city: e.target.value
        })
    }

    handleKeyPress(e){
        if (e.keyCode === 13){
            this.props.getWeatherByCity(this.state.city);
        }
    }

    render(){
        return (
            <header>
                <div className="logo-wrapp">
                    <object data={logo} type="image/svg+xml" aria-label="logo"> </object>
                    <h1>Umbrella</h1>
                </div>
                
                <input 
                    onKeyDown={this.handleKeyPress} 
                    onChange={this.handleChange} 
                    type="text" 
                    placeholder="Enter your city..." 
                    value={this.state.city}/>
            </header>
        )
    }
}



export default Header;