import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from './Title';
import my_face from '../img/my_face.png';
class AboutPage extends React.Component {
  render() {
    // <p>I am looking for a job in web development or software development where I can use my coding skills, desing knowledge, and ability to work independenlty and collaborate with teammembers to make beautiful, usable software. </p>
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    return (
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'About Me'} hoverContent={'    '}/>
          <Col>
              <Row>
                <Col xs="3" s="3">
                  <img src={my_face} alt={''} className="my-face"/>
                </Col>
                <Col xs="9" s="9">
                  <p>Hello, I'm Lily!</p>
                  <p>I am a software engineer at <a href="google.com">Marinus Analytics</a> in Pittsburgh, Pennsylvania. Marinus is a small business committed to using AI and Machine Learning to help police find victims of Sex Trafficking. I work on web development for the web app, as well as developing the updated SimSearch ("Similarity Search") image comparison software.</p>
                  <p>In June 2019, I graduated from <a href="google.com">Oregon State University</a> with a B.S. in Computer Science and a focus in Computer Graphics and Visualization. </p>
                  <p>I have experience in both academia and industry. I attended Carnegie Mellon's <a href="google.com">Research Experience for Undergrads</a> where I worked in the Penrose lab researching and implementing optimal mathematics diagram layouts in a 2D space. For my senior project at OSU, I worked with Ninkasi Brewing to develop a web app that monitors tank stats.</p>
                  <p>As I continue to work in web development, I am finding a passion in user experience and design. I believe the world's most advanced software is worthless without it being usable and understandable to its user base. I believe in taking the time get things right and putting in more effort now to save a lot of effort down the road.</p>
                </Col>
            </Row>
          </Col>
        </div>
      </Container>
    );
  }
}

export default AboutPage;
