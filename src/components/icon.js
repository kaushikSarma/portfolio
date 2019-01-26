import React, { Component } from 'react';
import '../styles/icon.css';

class Icon extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='icon'>
                <img src={require('../assets/icons/' + this.props.url + '.svg')}></img>
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}

export default Icon; 
