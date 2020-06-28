import React from 'react';
import { Container, Col, Row } from 'reactstrap';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {
  redirectResume() {
    this.props.changeContent('resume');
  }
  redirectProjects() {
    this.props.changeContent('portfolio');
  }
  redirectContact() {
    this.props.changeContent('contact');
  }
  redirectMain() {
    this.props.changeContent('main');
  }
  redirectAbout() {
    this.props.changeContent('about');
  }
  render() {
    return (
      <Container className="header">
        <Row>
          <Col className="" onClick={ this.redirectMain.bind(this) }>
            Lily Shellhammer
          </Col>
          <Col >
            <Row>
              <Col
                className="header-links"
                onClick={ this.redirectAbout.bind(this) }>
                About
              </Col>
              <Col
                className="header-links"
                onClick={ this.redirectResume.bind(this) }>
                Resume
              </Col>
              <Col
                className="header-links"
                onClick={ this.redirectProjects.bind(this) }>
                Portfolio
              </Col>
              <Col
                className="header-links"
                onClick={ this.redirectContact.bind(this) }>
                Contact
              </Col>
              <Col
                className="header-links"
                onClick={ this.redirectMain.bind(this) }>
                Home
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
