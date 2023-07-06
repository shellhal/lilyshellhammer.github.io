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
    if (this.state.width > 600) {
      this.props.changeContent('pixel');
    }
  }
  redirectMockups() {
    if (this.state.width > 600) {
      this.props.changeContent('mockups');
    }
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <div className="project-wrapper">
      <Container>
        <div className="portfolio-wrapper">
      	<h2>Projects</h2>
      	<div className="project-flex-wrapper">
	      	<div className="project-square" onClick={this.redirectPixel.bind(this)}>
	      		<h4 className="project-title pixel-title">Pixel Project</h4>
            <div className="project-subtitle">Not available on mobile or small windows</div>
            <div className="project-subtitle">React, HTML, CSS</div>
	      		<div className="project-img"><img src={pixelprev} alt={'Screenshot of Pixel Art App'} className="pixel-preview"/></div>
	     	</div>
        <a className="hidden-link no-hover-underline" href="https://longturngame.netlify.app/" target="_blank" rel="noopener noreferrer"><div className="project-square">
            <h4 className="project-title longturn-title">Longturn 8 Bit Game</h4>
            <div className="project-subtitle">Not available on mobile or small windows</div>
            <div className="project-subtitle">Javascript, HTML, CSS</div>
            <div className="project-img"><img src={longturn} alt={'Screenshot of Playing Longturn 8-Bit Game'} className="longturn-preview"/></div>
        </div></a>
        <div className="project-square" onClick={this.redirectMockups.bind(this)}>
            <h4 className="project-title">Barter App UI Mockups</h4>
            <div className="project-subtitle">Javascript, HTML, CSS</div>
            <div className="project-img"><img src={barter} alt={'Image of an adobe XD mockup of a bartering app from my project.'} className="barter-preview"/></div>
        </div>
	     	
     	</div>
     	</div>
     </Container>
      </div>
    );
  }
}

export default Projects;
