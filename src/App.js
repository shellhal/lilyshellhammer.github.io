import React from 'react';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import ArtPage from './components/ArtPage';
import PublicationsPage from './components/PublicationsPage';
import MockupPage from './components/MockupPage';
import ChartPage from './components/ChartPage';
import AboutPage from './components/AboutPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'main',
      width: 0,
      height: 0,
    };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  // componentDidMount() {
  //   this.updateWindowDimensions();
  //   window.addEventListener('resize', this.updateWindowDimensions);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateWindowDimensions);
  // }
  //
  // updateWindowDimensions() {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  // }

  changeContent(value) {
    this.setState({ content: value });
  }

  getBody() {
    // return <Main changeContent={this.changeContent.bind(this)}/>
    if (this.state.content === 'about' || this.state.content === 'main') {
      return <AboutPage />
    } else if (this.state.content === 'resume') {
      return <Resume />
    } else if (this.state.content === 'portfolio') {
      return <Portfolio changeContent={this.changeContent.bind(this)}/>
    } else if (this.state.content === 'artpage') {
      return <ArtPage />
    } else if (this.state.content === 'publicationsPage') {
      return <PublicationsPage />
    } else if (this.state.content === 'mockupspage') {
      return <MockupPage />
    } else if (this.state.content === 'chartpage') {
      return <ChartPage />
    } else {
      return <Contact />
    }
  }
  render() {
    return (
      <main>
        <header className="App-header">
          <Header
          changeContent={ this.changeContent.bind(this) }/>
        </header>
        <div>
          { this.getBody() }
        </div>
      </main>
    );
  }
}

export default App;
