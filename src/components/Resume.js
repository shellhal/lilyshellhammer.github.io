import React from 'react';

import { Container, Col, Row } from 'reactstrap';
import Title from './Title';
class Resume extends React.Component {

  render() {
    return (
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'Resume'} hoverContent={''}/>
          <Col>
            <Row>
              Work
              <ul>
                <li>Work stuff</li>
                <li>Work also</li>
                <li>Also work</li>
              </ul>
            </Row>
            <Row>
              School
              <ul>
                <li>Class 1</li>
                <li>Class 2</li>
                <li>Class 3</li>
              </ul>
            </Row>
            <Row>
            Research
              <ul>
                <li>Papers</li>
                <li>Papier</li>
                <li>Papeles</li>
              </ul>
            </Row>
          </Col>
      </div>
    </Container>
    );
  }
}

export default Resume;
