import React, { Component } from 'react'
import Navbar from './navbar';
import '../App.css';

class Contact extends Component {
    componentDidMount() {
        this.props.getRef(this.block, this.props.i);
    }
    render() {
        return (
            <section ref={n => this.block = n} className='page' id='contact'>
                <h2>Contact</h2>
                <div className='page-content contact-page'>
                    <h3>Kaushik Sarma</h3>
                    <p><strong>Reach out to me at</strong></p>
                    <p><span>+91 8761010382</span></p>
                    <p><a href="mailto:kausyap10@gmail.com"><span>kausyap10@gmail.com</span></a></p>
                    <p><a target="_blank_" href="https://www.linkedin.com/in/kaushik-sarma-67a054116/"><span>Visit me on LinkedIn</span></a></p>
                    <p><a target="_blank_" href="https://www.github.com/kaushiksarma/"><span>Check my github profile</span></a></p>
                </div>
                <Navbar />
            </section>
        )
    }
}

export default Contact;