import React, {Component} from 'react';
import './css/Header.css'


class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            city: ''
        }
    }

    render(){
        return (
            <header>
                <h1>Umbrella</h1>
                <input type="text" />
            </header>
        )
    }
}



export default Header;