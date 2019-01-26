import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import '../styles/navbar.css';

class SideNav extends Component {
    render() {
        return (
            <div className='page-navbar-side primary-bg'>
                <AnchorLink href="#about"><h1>About</h1></AnchorLink>
                <AnchorLink href="#work"><h1>Work</h1></AnchorLink>
                <AnchorLink href="#projects"><h1>Projects</h1></AnchorLink>
                <AnchorLink href="#contact"><h1>Contact</h1></AnchorLink>
            </div>
        )
    }
}

export default SideNav

