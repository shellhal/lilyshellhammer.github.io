import React from 'react';

// import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Resume from './components/Resume';
import Header from './components/Header';
import ContactModal from './components/ContactModal';
import Projects from './components/Projects';
import AboutPage from './components/AboutPage';
import PixelArt from './components/Projects/PixelArt/PixelArt';
import MockupPage from './components/Projects/MockupPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'main',
      width: 0,
      height: 0,
      modalOpen: false,
    };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  //-------------------------------------------------------------------------
  changeContent(value) {
    this.setState({ content: value });
  }
  //-------------------------------------------------------------------------
  toggle() {
    this.setState({'modalOpen': !this.state.openModal });
  }
  //-------------------------------------------------------------------------
  closeModal() {
    this.setState({'modalOpen': false });
  }
  //-------------------------------------------------------------------------
  getBody() {
    // return <Main changeContent={this.changeContent.bind(this)}/>
    if (this.state.content === 'resume') {
      return <Resume />
    } else if (this.state.content === 'pixel') {
      return <PixelArt />
    } else if (this.state.content === 'mockups') {
      return <MockupPage />
    } else if (this.state.content === 'projects') {
      return <Projects changeContent={this.changeContent.bind(this)}/>
    } else {
      return <AboutPage changeContent={this.changeContent.bind(this)}/>
    }
  }

  //-------------------------------------------------------------------------
  //-------------------------------------------------------------------------
  render() {
    const mainCN = (this.state.content === 'pixel') ? "colored-bg-pixel" : "";
    return (
      <main className={mainCN}>
        <header className="app-header">
          <Header
            closeModal={this.closeModal.bind(this)}
            toggle={this.toggle.bind(this)}
            changeContent={ this.changeContent.bind(this) }/>
        </header>
        <div>
          { this.getBody() }
        </div>
        <div className="footer">
          <div className="footer-text">Designed and Coded in React, L.S. 2023</div>
        </div>
        <ContactModal 
          modalOpen={this.state.modalOpen}
          closeModal={this.closeModal.bind(this)}
          toggle={this.toggle.bind(this)} 
        />
      </main>
    );
  }
}

export default App;
