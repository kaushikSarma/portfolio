import React, { Component } from 'react'
import About from './components/about'
import Contact from './components/contact'
import Experience from './components/experience'
import Home from './components/home'
import Projects from './components/projects'

import './App.css'


let lastScrollY = 0;

class App extends Component {
  constructor(props) {
    super()
    this.sections = []
    this.scrollPositions = {}
    this.aboutFlag = false
    this.workFlag = false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    let h = 0
    this.sections.forEach((section, i) => {
      h += section.getBoundingClientRect().height
      this.scrollPositions[i] = h;
    });
  }

  getRef = (ref, i) => {
    this.sections[i] = ref;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  nav = React.createRef();

  handleScroll = () => {
    lastScrollY = window.scrollY;
    if (lastScrollY < this.scrollPositions[0]) {
      if (this.aboutFlag) {
        this.sections[1].children[0].classList.remove('fixed');
        this.sections[1].children[0]['style']['bottom'] = ''
        this.aboutFlag = false
      }
    } else if (lastScrollY >= this.scrollPositions[0] && lastScrollY < this.scrollPositions[1] - this.scrollPositions[0]) {
      if (!this.aboutFlag) {
        this.sections[1].children[0].classList.add('fixed');
        this.aboutFlag = true
      }
    } else if (lastScrollY >= this.scrollPositions[1] - this.scrollPositions[0] && lastScrollY < this.scrollPositions[1]) {
      if (this.aboutFlag) {
        this.sections[1].children[0].classList.remove('fixed');
        this.sections[1].children[0]['style']['bottom'] = 0
        this.aboutFlag = false
      }
      if (this.workFlag) {
        this.sections[2].children[0].classList.remove('fixed');
        this.sections[2].children[0]['style']['bottom'] = ''
        this.workFlag = false
      }
    } else if (lastScrollY >= this.scrollPositions[1] && lastScrollY < this.scrollPositions[2] - this.scrollPositions[0]) {
      if (!this.workFlag) {
        this.sections[2].children[0].classList.add('fixed');
        this.workFlag = true
      }
    } else if (lastScrollY >= this.scrollPositions[2] - this.scrollPositions[0]){
      if (this.workFlag) {
        this.sections[2].children[0].classList.remove('fixed');
        this.sections[2].children[0]['style']['bottom'] = 0
        this.workFlag = false
      }
    }
  };

  render() {
    return (
      <div className='page-wrapper'>
        <Home key={0} i={0} getRef={this.getRef} />
        <About key={1} i={1} getRef={this.getRef} />
        <Experience key={2} i={2} getRef={this.getRef} />
        <Projects key={3} i={3} getRef={this.getRef} />
        <Contact key={4} i={4} getRef={this.getRef} />
      </div>
    );
  }
}

export default App;
