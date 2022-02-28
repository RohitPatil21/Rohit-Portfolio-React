import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills.js';
import Navbar from './Navbar';
import './Main.css';



class Main extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tab: "home",
		}
	}

	changeTab = (newTab) => {
		this.setState({
			tab : newTab
		})
	}

	renderTab = () => {
		switch(this.state.tab) {
			case 'home':
				return <Home /> 
			case 'about':
				return <About />
			case 'skills':
				return <Skills />
			default:
				return <Home />
		}
	}



	render() {
		return (
			<div>
				<Navbar />
				<Home />
				<About />
				<Skills />
			</div>
		)
	}
}

export default Main