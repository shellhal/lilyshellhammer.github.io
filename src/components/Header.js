import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
} from 'reactstrap';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import linkedIn from '../img/linkedin-icon.png'
import github from '../img/github-icon.png'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: '',
      isOpen: false,
      setIsOpen: false,
    };

  }


  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  toggleModal() {
    this.props.toggle();
  }

  render() {
    // window.addEventListener('resize', this.resizeHandler);
    return (
      <div style={{'width': '100%'}}>
      <Navbar color="light" light expand="md">
        <NavbarBrand >Lily Shellhammer</NavbarBrand>
        <NavbarToggler onClick={this.toggle.bind(this)} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink onClick={() => this.props.changeContent('about')}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => this.props.changeContent('resume')}>Resume</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => this.props.changeContent('projects')}>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={this.toggleModal.bind(this) }>Contact</NavLink>
          </NavItem>
           <NavItem>
            <NavLink href="https://www.linkedin.com/in/lily-shellhammer/" target="_blank" ><img src={linkedIn} alt={'LinkedIn Icon'} className="header-icon linkedin"/></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/shellhal" target="_blank" ><img src={github} alt={'Github Icon'} className="header-icon github"/></NavLink>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

// <NavItem>
//     <NavLink onClick={ this.redirectProjects }>Portfolio</NavLink>
//   </NavItem>
export default Header;
