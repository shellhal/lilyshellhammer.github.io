import React from 'react';
import {Container} from 'reactstrap';
import pixelprev from '../img/pixel-preview.png';
import longturn from '../img/longturn.png';
import barter from '../img/barter-mockups-preview.png';

class Projects extends React.Component {
  redirect() {
    this.props.changeContent(this.props.redirectVal);
  }
  redirectPixel() {
  	this.props.changeContent('pixel');
  }
  redirectMockups() {
    this.props.changeContent('mockups');
  }
  render() {
    return (
      <div className="project-wrapper">
      <Container>
        <div className="portfolio-wrapper">
      	<h2>Projects</h2>
      	<div className="flex-container">
	      	<div className="project-square" onClick={this.redirectPixel.bind(this)}>
	      		<h4>Pixel Project</h4>
            <div className="project-subtitle">React, HTML, CSS</div>
	      		<div className="project-img"><img src={pixelprev} alt={''} className="pixel-preview"/></div>
	     	</div>
        <a className="hidden-link no-hover-underline" href="https://longturngame.netlify.app/" target="_blank" rel="noopener noreferrer"><div className="project-square">
            <h4>Longturn 8 Bit Game</h4>
            <div className="project-subtitle">Javascript, HTML, CSS</div>
            <div className="project-img"><img src={longturn} alt={''} className="longturn-preview"/></div>
        </div></a>
        <div className="project-square" onClick={this.redirectMockups.bind(this)}>
            <h4>Barter App UI Mockups</h4>
            <div className="project-subtitle">Javascript, HTML, CSS</div>
            <div className="project-img"><img src={barter} alt={''} className="barter-preview"/></div>
        </div>
	     	
     	</div>
     	</div>
     </Container>
      </div>
    );
  }
}

export default Projects;
