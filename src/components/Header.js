import React from 'react';
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import '../../node_modules/font-awesome/css/font-awesome.min.css';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: '',
      isOpen: false,
      setIsOpen: false,
    };
    this.redirectResume = this.redirectResume.bind(this);
    this.redirectProjects = this.redirectProjects.bind(this);
    this.redirectContact = this.redirectContact.bind(this);
    this.redirectMain = this.redirectMain.bind(this);
    this.redirectAbout = this.redirectAbout.bind(this);
    // this.resizeHandler = this.resizeHandler.bind(this);

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
            <NavLink onClick={ this.redirectAbout }>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={ this.redirectResume }>Resume</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={ this.redirectProjects }>Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={ this.redirectContact }>Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={ this.redirectMain }>Main</NavLink>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Header;
