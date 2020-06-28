import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from './Title';
import my_face from '../img/my_face.png';
class AboutPage extends React.Component {
  render() {
    return (
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'About Me'} hoverContent={''}/>
          <Col>
            <Row>
              <Col xs="3">
                <img src={my_face} alt={''} className="my-face"/>

              </Col>
              <Col xs="auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Col>
            </Row>
          </Col>
        </div>
      </Container>
    );
  }
}

export default AboutPage;
