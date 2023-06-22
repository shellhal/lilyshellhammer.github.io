import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from './Title';

class PublicationsPage extends React.Component {
  render() {
    return (
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'Publications'} hoverContent={''}/>
          <Col>
            <Row>
            </Row>
          </Col>
      </div>
      </Container>
    );
  }
}

export default PublicationsPage;
