import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import ContactModal from './ContactModal';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'main',
      modalOpen: false,
    };
  }
  toggle() {
    this.setState({'modalOpen': !this.state.openModal });
  }
  //-------------------------------------------------------------------------
  closeModal() {
    this.setState({'modalOpen': false });
  }
  render() {
    return (
      <div>
        <Header />
        <Outlet />
        <ContactModal 
          modalOpen={this.state.modalOpen}
          closeModal={this.closeModal.bind(this)}
          toggle={this.toggle.bind(this)} 
          />
      </div>
    );
  }
};
