import React, { Component } from 'react';
import './Main.css';
import { FaCode } from 'react-icons/fa';
import { Link } from 'react-scroll';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div id='logo-div'>
          <h1> <FaCode id='facode' /> PORTFOLIO </h1>
        </div>

        <div id='menu-div'>
          <Link className="Link" activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
            Home
          </Link>

          <Link className="Link" activeClass="active" to="about" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
            About
          </Link>

          <Link className="Link" activeClass="active" to="skills" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
            Skills
          </Link>

          <Link className="Link" activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
            Work
          </Link>

          <Link className="Link" activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
            Contact
          </Link>

        </div>

      </nav>
    )
  }
}

export default Navbar