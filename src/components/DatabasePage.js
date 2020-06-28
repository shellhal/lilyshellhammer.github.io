import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from './Title';

class DatabasePage extends React.Component {
  render() {
    return (
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'Database Examples'} hoverContent={''}/>
          <Col>
            <Row>
            </Row>
          </Col>
      </div>
      </Container>
    );
  }
}

export default DatabasePage;
