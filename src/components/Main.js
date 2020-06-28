import React from 'react';
import { Container, Row } from 'reactstrap';
import LinkBox from './LinkBox';
import MainColumn from './MainColumn';
import Box from './Box';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
    };
  }

  componentWillMount() {
    this.resizeHandler();
  }

  resizeHandler() {
    const aboutContent = <LinkBox name='About' />;
    const resumeContent = <LinkBox name='Resume' />;
    const portfolioContent = <LinkBox name='Portfolio' />;
    const contactContent = <LinkBox name='Contact' />;
    let body = '';
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 520) {
      body = (
        <Row>
          <MainColumn
            changeContent={this.props.changeContent}
            box1={40}
            box2={60}
            box3={20}
            highlightedNumber={1}
            title={'about'}
            content={aboutContent}
          />
          <MainColumn
            changeContent={this.props.changeContent}
            box1={60}
            box2={20}
            box3={40}
            highlightedNumber={2}
            title={'resume'}
            content={resumeContent}
          />
          <MainColumn
            changeContent={this.props.changeContent}
            box1={40}
            box2={20}
            box3={60}
            highlightedNumber={3}
            title={'portfolio'}
            content={portfolioContent}
          />
          <MainColumn
            changeContent={this.props.changeContent}
            box1={60}
            box2={40}
            box3={20}
            highlightedNumber={4}
            title={'contact'}
            content={contactContent}
          />
        </Row>
      )
    } else {
      body = (
        <Row>
          <Box identifier={'small-box-view'} type={''}
            highlighted={'highlight1'}
            changeContent={this.props.changeContent}
            value={'about'}
            content={aboutContent}/>
          <Box identifier={'small-box-view'} type={''}
            highlighted={'highlight2'}
            changeContent={this.props.changeContent}
            value={'resume'}
            content={resumeContent}/>
          <Box identifier={'small-box-view'} type={''}
            highlighted={'highlight3'}
            changeContent={this.props.changeContent}
            value={'portfolio'}
            content={portfolioContent}/>
          <Box identifier={'small-box-view'} type={''}
            highlighted={'highlight4'}
            changeContent={this.props.changeContent}
            value={'contact'}
            content={contactContent}/>
        </Row>
      );
    }
    this.setState({ body });
  }

  render() {
    // window.addEventListener('resize', this.resizeHandler);
    return (
      <Container>
        { this.state.body }
      </Container>
    );
  }
}

export default Main;
