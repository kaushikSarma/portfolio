import React, { Component } from 'react';
import '../styles/icon.css';

class Icon extends Component {
    constructor(props) {
        super(props)
        if (this.props.ext === undefined) {
            this.ext = 'svg';
        } else {
            this.ext = this.props.ext;
        }
        
    }
    render() {
        return (
            <div className='icon'>
                <img src={require('../assets/icons/' + this.props.url + '.' + this.ext)} alt='unavailable'></img>
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}

export default Icon;
