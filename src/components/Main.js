import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Box from './Box';
import LinkBox from './LinkBox';

class Main extends React.Component {
  render() {

    // <div className="about-me">
    //   <span className='main-section-title'>About Me</span>
    //   <div>
    //   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
    //   </div>
    // </div>
    // <div className="projects">
    //   <span className='main-section-title'>Projects</span>
    //   <div>
    //   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
    //   </div>
    // </div>
    const aboutContent = <LinkBox name='About' />
    const resumeContent = <LinkBox name='Resume' />
    const portfolioContent = <LinkBox name='Portfolio' />
    const contactContent = <LinkBox name='Contact' />
    return (
      <Container>
        <Row>
          <Col>
            <div className="main-outer" >
              <Box number={40} type={''} highlighted={''} content={''}/>
              <Box number={60} type={''}
                highlighted={'highlighted1'}
                changeContent={this.props.changeContent}
                value={'about'}
                content={aboutContent}/>
              <Box number={20} type={''} highlighted={''} accent={true} content={''}/>
            </div>
          </Col>
          <Col>
            <div className="main-outer" >
            <Box number={60} type={''} highlighted={''} accent={true} content={''}/>
            <Box number={20} type={''}
              highlighted={'highlighted2'}
              changeContent={this.props.changeContent}
              value={'resume'}
              content={resumeContent}/>
            <Box number={40} type={''} highlighted={''} content={''}/>
            </div>
          </Col>
          <Col>
            <div className="main-outer" >
            <Box number={40} type={''} highlighted={''} content={''}/>
            <Box number={20} type={''}
              highlighted={'highlighted3'}
              changeContent={this.props.changeContent}
              value={'portfolio'}
              content={portfolioContent}/>
            <Box number={60} type={''} highlighted={''} accent={true} content={''}/>
            </div>
          </Col>
          <Col>
            <div className="main-outer" >
            <Box number={60} type={''} highlighted={''} accent={true} content={''}/>
            <Box number={40} type={''}
              highlighted={'highlighted4'}
              changeContent={this.props.changeContent}
              value={'contact'}
              content={contactContent}/>
            <Box number={20} type={''} highlighted={''} content={''}/>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
