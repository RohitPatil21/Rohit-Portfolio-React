import React, {Component} from 'react';
import './Skills.css';
import Heading from './Heading';

class SkillCard extends Component {
    render() {
        return(
            <div className='card'>
                <img src={this.props.imgurl}></img>
                <span> {this.props.skillName} </span>
            </div>
        )
    }
}

class Skills extends Component {
    render() {
        return(
            <div className='skills-container' id='skills'>
                <Heading heading="Skills" tagline="Skills which are required for you" />

                <div className='skills-card-wrapper'>
                    <SkillCard imgurl="/Images/html.png" skillName="HTML" />
                    <SkillCard imgurl="/Images/css.png" skillName="CSS" />
                    <SkillCard imgurl="/Images/js.png" skillName="JavaScript" />
                    <SkillCard imgurl="/Images/react.png" skillName="React Js" />
                    <SkillCard imgurl="/Images/github.png" skillName="Github" />
                    <SkillCard imgurl="/Images/bootstrap.png" skillName="Bootstrap" />
                    <SkillCard imgurl="/Images/node.png" skillName="Node JS" />
                    <SkillCard imgurl="/Images/mongo.png" skillName="Mongo DB" />
                </div>     
            </div>
        )
    }
}

export default Skills;