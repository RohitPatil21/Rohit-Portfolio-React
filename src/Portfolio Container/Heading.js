import React, {Component} from 'react';
import './About.css';
import Typical from 'react-typical'

class Heading extends Component {
    render() {
        return(
            <div className='heading-aboutme'>
					<h2>
						{this.props.heading}
					</h2>
					
					<p className='aboutme-tagline'> {this.props.tagline} </p>
					<div className='main-line'>
						<div className='orange-dot'></div>
					</div>
			</div>
        )
    }
}

export default Heading;