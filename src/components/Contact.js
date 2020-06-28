import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from './Title';

class Contact extends React.Component {
  render() {
    const hoverGithub = 'github-contact-container';
    const hoverEmail = 'email-contact-container';
    const hoverLinkedIn = 'linkedin-contact-container';
    return (
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'Contact Me'} hoverContent={''}/>
          <Col>
            <Row>
              <ul>
                <li>Email</li>
                <div className={ hoverGithub }>
                  lily dot shellhammer @ gmail dot com
                </div>
                <li>Github</li>
                <li>LinkedIn</li>
              </ul>
            </Row>
          </Col>
      </div>

      </Container>
    );
  }
}

export default Contact;
