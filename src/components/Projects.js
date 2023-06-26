import React from 'react';
import {Container} from 'reactstrap';
import pixelprev from '../img/pixel-preview.png';

class Projects extends React.Component {
  redirect() {
    this.props.changeContent(this.props.redirectVal);
  }
  redirectPixel() {
  	this.props.changeContent('pixel');
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
	      		<div className="project-img"><img src={pixelprev} alt={''} className="pixel-preview"/></div>
	     	</div>
	     	<div className="project-square" onClick={this.redirectPixel.bind(this)}>
	      		<h4>Pixel Project</h4>
	      		<div className="project-img"><img src={pixelprev} alt={''} className="pixel-preview"/></div>
	     	</div>
     	</div>
     	</div>
     </Container>
      </div>
    );
  }
}

export default Projects;
