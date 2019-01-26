import React, { Component } from 'react'
import Navbar from './navbar';
import '../App.css';

class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            experiences: [
                {
                    'title': 'Front End Developer at GAWDS (January 2015 – July 2018)',
                    'description': 'Developed websites gawds.in & techspardha.org (2016 and 2017). Developed the side navigation menu and menu SVG animations for techspardha.org (2016, 2017) Organized numerous workshops on web development. Developed the front end for a feedback system that provided participants with our slide show along with a chat window where they could give their instant feedback and interact with us as well as other participants.'
                },
                {
                    'title': 'Full Stack Developer, CALinfo (June 2016 -August 2016)',
                    'description': 'Worked at CALinfo, an IT service provider, as a full stack developer. I worked on two websites • Codeavail.com - Designed and built an admin panel to manage the employee records and work records of the company. • Snehalya.org - Developed the main website as well as the admin panel for managing media content on the site and managing records of their volunteers.'
                },
                {
                    'title': 'Full Stack Developer, CALinfo (June 2018 - August 2018)',
                    'description': 'Designed and developed the frontend and backend of an online assessment portal. Users could select subjects and appear for a timed test.  An admin panel allows the examiner to upload questions and keep track of all users and previous tests.'
                }
            ]
        }
    }
    componentDidMount() {
        this.props.getRef(this.block, this.props.i);
    }
    render() {
        const {
            experiences
        } = this.state
        return (
            <section ref={n => this.block = n} className='page' id='work'>
                <div className='page-panel left'>
                    <div className='page-content'>
                        <h1>Work</h1>
                    </div>
                    <Navbar />
                </div>
                <div className='page-panel right primary-bg'>
                    <div className='page-content'>
                        {experiences.map(experience => <div className='workexp'><h3>{experience.title}</h3><p>{experience.description}</p></div>)}
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
