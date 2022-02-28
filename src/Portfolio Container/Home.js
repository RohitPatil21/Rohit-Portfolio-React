import React, { Component } from 'react'
import Navbar from './Navbar'
import './Main.css';
import Typical from 'react-typical';
import About from './About';



class Home extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className='home' id='home'>
				{/* <Navbar /> */}

				<div className='header'>
					<div className='left-header'>
						<span className='primary-text'>Hello, I'M <span className='highlighted-text'>Rohit</span> </span>
						<div className='profile-details-role'>
							<span className='primary-text'>
								<h1 className='typical-h1'>
									<Typical
										loop = {Infinity}
										steps = {[
											"Web Developer",
											1200,
											"React Developer",
											1200,
											"JavaScript Developer",
											1200,
											"Enthusiastic Developer",
											1200,
										]}
									/>
								</h1>
							 </span>
						</div>

						<span className='tagline'> Knack of building application with front end operations. </span>

						<div className='btn-wrapper-header'>
							<button className='btn btn-hire-me'>Hire Me</button>
							<button className='btn btn-getcv'>Get Resume</button>
						</div>
					</div>

					<div className='right-header'>
						<div className='image'>
							<img type="image/jpg" src={"/Images/rohit.jpg"} />
						</div>
					</div>
				</div>

				<svg className='svg-bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 145"><path fill="#ffffff" fill-opacity="1" d="M0,32L60,32C120,32,240,32,360,48C480,64,600,96,720,117.3C840,139,960,149,1080,128C1200,107,1320,53,1380,26.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
				
			</div>
			
		)
	}
}

export default Home