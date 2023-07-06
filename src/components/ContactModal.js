import React from 'react';
import { Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import Title from './Title';
import linkedIn from '../img/linkedin-icon.png'
import github from '../img/github-icon.png'
import email from '../img/email-icon.png'

class ContactModal extends React.Component {
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
    this.setState({ email: 'lily.shellhammer@gmail.com' })
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
  toggle() {
    this.props.toggle();
  }
  closeModal() {
    this.props.closeModal();
  }
  render() {
    return (
      <Modal isOpen={this.props.modalOpen} toggle={this.toggle.bind(this)} className="contact-modal">
        <ModalHeader  toggle={this.closeModal.bind(this)}>
          <h3>Contact</h3>
        </ModalHeader>
        <ModalBody className="contact-wrapper portfolio-wrapper">
          <Col>
            <Row>
              <a href="mailto: lily.shellhammer@gmail.com">
                <div
                  onMouseLeave={this.emailLeave.bind(this)}
                  className={this.state.emailClassName}
                  onMouseEnter={this.emailEnter.bind(this)}>
                  <div className='inner-content-buttons'>
                  <div><img src={email} alt={'Email Icon'} className="header-icon contact-modal-icon linkedin black"/></div>
                   <div>{ this.state.email }</div>
                  </div>
                </div>
              </a>
            </Row>
            <Row>
              <a href="https://www.linkedin.com/in/lily-s-899b43105/" target="_blank" rel="noopener noreferrer">
                <div
                  onMouseLeave={this.linkedinLeave.bind(this)}
                  className={this.state.linkedinClassName}
                  onMouseEnter={this.linkedinEnter.bind(this)}>
                  <div className='inner-content-buttons'>
                    <div><img src={linkedIn} alt={'LinkedIn Icon'} className="header-icon contact-modal-icon linkedin black"/></div>
                    <div>{ this.state.linkedin }</div>
                  </div>
                </div>
              </a>
            </Row>
            <Row>
              <a href="https://github.com/shellhal" target="_blank" rel="noopener noreferrer">
                <div
                  onMouseLeave={this.githubLeave.bind(this)}
                  className={this.state.githubClassName}
                  onMouseEnter={this.githubEnter.bind(this)}>
                  <div className='inner-content-buttons'>
                    <div><img src={github} alt={'Github Icon'} className="header-icon contact-modal-icon linkedin black"/></div>
                    <div>{ this.state.github }</div>
                  </div>
                </div>
              </a>
            </Row>
          </Col>
        </ModalBody>
      </Modal>
    );
  }
}

export default ContactModal;
