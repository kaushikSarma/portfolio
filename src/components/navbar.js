import React, { Component } from 'react';
import '../styles/navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navbar extends Component {
  render() {
    return (
      <div className='page-navbar-bottom'>
        <AnchorLink href="#about">About</AnchorLink>
        &#47;
        <AnchorLink href="#work">Work</AnchorLink>
        &#47;
        <AnchorLink href="#projects">Projects</AnchorLink>
        &#47;
        <AnchorLink href="#contact">Contact</AnchorLink>
      </div>
    )
  }
}

export default Navbar;