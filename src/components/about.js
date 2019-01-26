import React, { Component } from 'react'
import Navbar from './navbar';
import '../App.css';
import Icon from './icon';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'skills': [
                {'title':'JavaScript', 'url':'js'}, {'title': 'CSS', 'url': 'css'}, {'title': 'html5', 'url': 'html'}, {'title': 'C++', 'url': 'cpp'}, {'title': 'Java', 'url': 'java'},
                {'title': 'Python', 'url': 'py'}, {'title': 'Php', 'url': 'php'}, {'title': 'SQL', 'url': 'sql'}, {'title': 'NodeJS', 'url': 'node'}
            ],
            'hobbies': [
                {'title': 'Guitar', 'url': 'guitar'}, {'title': 'Cooking', 'url': 'food'},
                {'title': 'Reading', 'url': 'books'},
                {'title': 'Anime', 'url': 'anime'}
            ]
        }
    }

    componentDidMount() {
        this.props.getRef(this.block, this.props.i);
    }
    render() {
        const {
            skills,
            hobbies
        } = this.state
        return (
            <section ref={n => this.block = n} className='page row' id='about'>
                <div className='page-panel left primary-bg'>
                    <div className='page-content'>
                        <h1>About</h1>
                    </div>
                    <Navbar />
                </div>
                <div className='page-panel right'>
                    <h3>Who am I?</h3>
                    <p> I am a <strong>full-stack developer</strong> who has worked extensively in designing and building Websites and web applications. Completed <strong>B.Tech in CSE</strong> from NIT Kurukshetra in 2018.  Participated in a few hackathons and CTF competitions and won two intra-college hackathons. Organised a few workshops on web development in college. Currently my interest and focus lies in the domains of <strong>Blockchain</strong> and <strong>Augmented Reality</strong> technology
                    </p>
                    <h3><strong>Skills</strong></h3>
                    <div className='icon-table'>
                        {skills.map(skill => <Icon title={skill.title} url={skill.url}/>)}
                    </div>
                    <h3><strong>Hobbies</strong></h3>
                    <p>On an ideal day you would find me jamming on my guitar and singing <strong>(out of tune)</strong>, or watching anime or just strolling through the streets of bangalore</p>
                    <div className='icon-table'>
                        {hobbies.map(hobby => <Icon title={hobby.title} url={hobby.url} />)}
                    </div>
                </div>
            </section>
        )
    }
}

export default About;