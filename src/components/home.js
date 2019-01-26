import React, { Component } from 'react';
import Navbar from './navbar';
import '../App.css';
import '../styles/home.css';

class Home extends Component {
    componentDidMount() {
        this.props.getRef(this.block, this.props.i);
    }
    render() {
        return (
            <section ref={n => this.block = n} className='page dark-bg' id='home'>
                <h3>Developer <highlight>&amp;</highlight> Designer</h3>
                <div className='page-content'>
                    <h1>Kaushik<br/>Sarma</h1>
                </div>
                <Navbar />
            </section>
        )
    }
}

export default Home;