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

  // Row,
  // Col,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText,
import '../../node_modules/font-awesome/css/font-awesome.min.css';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import linkedIn from '../img/linkedin-icon.png'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: '',
      isOpen: false,
      setIsOpen: false,
    };

  }
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
  redirectLinkedin() {
    window.location = 'https://www.linkedin.com/in/lily-shellhammer/';
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  // componentDidMount() {
  //   this.resizeHandler();
  // }
  // resizeHandler() {
  //   let header = '';
  //   let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  //   if (viewportWidth > 1052) {
  //   	header = (
  //       <div>
  //         <NavItem>
  //           <NavLink onClick={ this.redirectAbout }>About</NavLink>
  //         </NavItem>
  //         <NavItem>
  //           <NavLink onClick={ this.redirectResume }>Resume</NavLink>
  //         </NavItem>
  //         <NavItem>
  //           <NavLink onClick={ this.redirectProjects }>Portfolio</NavLink>
  //         </NavItem>
  //         <NavItem>
  //           <NavLink onClick={ this.redirectContact }>Contact</NavLink>
  //         </NavItem>
  //         <NavItem>
  //           <NavLink onClick={ this.redirectMain }>Main</NavLink>
  //         </NavItem>
  //       </div>
  //     );
  //   } else {
  //   	header = (
  //       <div>
  //         <UncontrolledDropdown nav inNavbar>
  //             <DropdownToggle nav caret>
  //               Navigate
  //             </DropdownToggle>
  //             <DropdownMenu right>
  //               <DropdownItem onClick={ this.redirectAbout }>
  //                 About
  //               </DropdownItem>
  //               <DropdownItem onClick={ this.redirectResume }>
  //                 Resume
  //               </DropdownItem>
  //               <DropdownItem onClick={ this.redirectProjects }>
  //                 Portfolio
  //               </DropdownItem>
  //               <DropdownItem onClick={ this.redirectContact }>
  //                 Contact
  //               </DropdownItem>
  //               <DropdownItem divider />
  //               <DropdownItem onClick={ this.redirectMain }>
  //                 Home
  //               </DropdownItem>
  //             </DropdownMenu>
  //           </UncontrolledDropdown>
  //       </div>
  //     );
  //   }
  //   this.setState({ header });
  // }


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
            <NavLink onClick={ this.redirectAbout.bind(this) }>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={ this.redirectResume.bind(this) }>Resume</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={ this.redirectContact.bind(this) }>Contact</NavLink>
          </NavItem>
           <NavItem>
            <NavLink href="https://www.linkedin.com/in/lily-shellhammer/" target="_blank" ><img src={linkedIn} alt={''} className="linkedin"/></NavLink>
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
