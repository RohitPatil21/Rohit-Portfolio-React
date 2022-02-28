import React, { Component } from 'react';
import './About.css'
import Heading from './Heading';


class About extends Component {
	render() {
		return (
			<section className='about-wrapper' id='about'>
				<Heading heading={"About Me"} tagline={"Why Choose Me"} />

				<div className='aboutme-card'>
					<div className='left-div'>
						<img src="./Images/man.jpg"></img>
					</div>
					<div className='right-div'>
						<span className='description-aboutme'>Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.</span>


						<div className='btn-wrapper'>
							<button className='btn-about btn-hire-me'>Hire Me</button>
							<button className='btn-about btn-getcv'>Get Resume</button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default About;