import React, { Component } from 'react'
import Navbar from './navbar';
import '../App.css';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    "title": "Naveta",
                    "sub": "built at 12 hour Hackathon, JECRC University, March 2016",
                    "description": "Developed the backend for a web application for tracking city busses. It is a two way application built for both bus commuters and bus employees. Built in Php and MySql."
                },
                {
                    "title": "Socius",
                    "sub": "built at 12 hour Hackathon, NIT Kurukshetra, February 2016, Awarded 1st prize",
                    "description": "Socius is a voice operated web based personal assistant. I integrated the google calendar API in this project, allowing users to set and view event reminders, birthdays of contacts."
                },
                {
                    "title": "File Organiser",
                    "sub": "built at Techspardha, NIT Kurukshetra, February 2016, Awarded 2nd prize",
                    "description": "This is a windows application built in C# that allows users to manage and organize their files. I built modules (dlls) that extract meta data from files and groups them accordingly."
                },
                {
                    "title": "Syndi",
                    "sub": "developed for Excalibur, Altius NIT Kurukshetra, October 2016, Awarded 1st prize",
                    "description": "This is a windows application that allows users to share files across a subnet. I designed and developed the entire front end in XAML and C# and also integrated all the units in the project."
                },
                {
                    "title": "Qb",
                    "sub": "developed for Flockathon, January 2017, Achieved 4th rank in public voting",
                    "description": "I desinged the front end, gameplay and integrated the project. Qb is the first of its kind multi player word puzzle game. Technologies: JQuery, NodeJS"
                }
            ]
        }
    }
    componentDidMount() {
        this.props.getRef(this.block, this.props.i);
    }
    render() {
        const {
            projects
        } = this.state
        return (
            <section ref={n => this.block = n} className='page dark-bg' id='projects'>
                <h2>Projects</h2>
                <div className='page-content'>
                    <div className='project-container'>
                        {projects.map(project => <div className="project"><h4>{project.title}</h4><h5>{project.sub}</h5><p>{project.description}</p></div>)}
                    </div>
                </div>
                <Navbar />
            </section>
        )
    }
}

export default Projects;
