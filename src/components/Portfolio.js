import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import ContentBox from './ContentBox';
import Title from './Title';

class Portfolio extends React.Component {
  render() {
    return (
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'Portfolio'} hoverContent={'A selection of work I have done in my free time to showcase my full stack web development abilties.'}/>
          <Row>
            <Col>
              <ContentBox changeContent={this.props.changeContent}
                number={'square'}
                redirectVal={'mockupspage'}
                content={'App Design Mockups'}
                name={'mockupspage'}/>
            </Col>
            <Col>
              <ContentBox changeContent={this.props.changeContent}
                number={'square'}
                redirectVal={'databasepage'}
                content={'Database Design'}
                name={'databasepage'}/>
            </Col>
            <Col>
              <ContentBox changeContent={this.props.changeContent}
                number={'square'}
                redirectVal={'artpage'}
                content={'Graphics Design and Art'}
                name={'artpage'}/>
            </Col>
          </Row>
          <Row>
            <Col>
            <ContentBox changeContent={this.props.changeContent}
              number={'square'}
              redirectVal={'chartpage'}
              content={'Charting Libraries'}
              name={'chartpage'}/>
            </Col>
            <Col>
              <ContentBox number={'square'} content={'content'}/>
            </Col>
            <Col>
              <ContentBox number={'square'} content={'content'}/>
            </Col>
          </Row>
      </div>
    </Container>
    );
  }
}

export default Portfolio;
