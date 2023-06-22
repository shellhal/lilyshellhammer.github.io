import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from './Title';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      emailClassName: 'content-buttons',
      githubClassName: 'content-buttons',
      linkedinClassName: 'content-buttons'
    };
  }
  //content-buttons
  emailEnter() {
    this.setState({ email: 'lily dot shellhammer @ gmail dot com' })
  }
  emailLeave() {
    this.setState({ email: 'Email' })
  }
  githubEnter() {
    this.setState({ github: 'https://github.com/shellhal' })
  }
  githubLeave() {
    this.setState({ github: 'GitHub' })
  }
  linkedinEnter() {
    this.setState({ linkedin: 'https://www.linkedin.com/in/lily-shellhammer/' })
  }
  linkedinLeave() {
    this.setState({ linkedin: 'LinkedIn' })
  }
  render() {
    return (
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'Contact Me'} hoverContent={''}/>
          <Col>
            <Row>
              <a href="mailto: lily.shellhammer@gmail.com">
                <div
                  onMouseLeave={this.emailLeave.bind(this)}
                  className={this.state.emailClassName}
                  onMouseEnter={this.emailEnter.bind(this)}>
                  <div className='inner-content-buttons'>
                    { this.state.email }
                  </div>
                </div>
              </a>
            </Row>
            <Row>
              <a href="https://github.com/shellhal">
                <div
                  onMouseLeave={this.githubLeave.bind(this)}
                  className={this.state.githubClassName}
                  onMouseEnter={this.githubEnter.bind(this)}>
                  <div className='inner-content-buttons'>
                    { this.state.github }
                  </div>
                </div>
              </a>
            </Row>
            <Row>
              <a href="https://www.linkedin.com/in/lily-s-899b43105/">
                <div
                  onMouseLeave={this.linkedinLeave.bind(this)}
                  className={this.state.linkedinClassName}
                  onMouseEnter={this.linkedinEnter.bind(this)}>
                  <div className='inner-content-buttons'>
                    { this.state.linkedin }
                  </div>
                </div>
              </a>
            </Row>
          </Col>
      </div>

      </Container>
    );
  }
}

export default Contact;
