import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import ContentBox from './ContentBox';
import Title from './Title';

class Portfolio extends React.Component {
  render() {
    return (
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'Portfolio (this page is under construction)'} hoverContent={'A selection of work I have done in my free time to showcase my full stack web development abilties.'}/>
          <Row>
            <Col>
              <ContentBox
                disabled={''}
                changeContent={this.props.changeContent}
                number={'square'}
                redirectVal={'mockupspage'}
                content={'App Design Mockups'}
                name={'mockupspage'}/>
            </Col>
            <Col>
              <ContentBox
                disabled={''}
                changeContent={this.props.changeContent}
                number={'square'}
                redirectVal={'databasepage'}
                content={'Database Design'}
                name={'databasepage'}/>
            </Col>
            <Col>
              <ContentBox
                disabled={''}
                changeContent={this.props.changeContent}
                number={'square'}
                redirectVal={'artpage'}
                content={'Graphics Design and Art'}
                name={'artpage'}/>
            </Col>
          </Row>
          <Row>
            <Col>
            <ContentBox changeContent={this.props.changeContent}
              disabled={' '}
              number={'square'}
              redirectVal={'chartpage'}
              content={'Charting Libraries'}
              name={'chartpage'}/>
            </Col>
            <Col>
              <ContentBox
                disabled={' disabled-box'}
                number={'square'}
                redirectVal={'portfolio'}
                content={''}/>
            </Col>
            <Col>
              <ContentBox
                disabled={' disabled-box'}
                number={'square'}
                redirectVal={'portfolio'}
                content={''}/>
            </Col>
          </Row>
      </div>
    </Container>
    );
  }
}

export default Portfolio;
