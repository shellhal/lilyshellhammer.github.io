import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from './Title';

class ArtPage extends React.Component {
  render() {
    return (
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'Art + Graphic Design'} hoverContent={''}/>
          <Col>
            <Row>
            </Row>
          </Col>
          </div>
      </Container>
    );
  }
}

export default ArtPage;
