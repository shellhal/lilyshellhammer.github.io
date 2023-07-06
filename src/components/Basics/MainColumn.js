import React from 'react';
import { Col } from 'reactstrap';
import Box from './Box';

class MainColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: '',
    };
  }

  enter() {
    this.setState({ hover: '-hover' });
  }

  leave() {
    this.setState({ hover: '' });
  }
  render() {
    const highlight = 'highlighted' + this.props.highlightedNumber;
    const box1 = 'main-outer-' + this.props.box1 + this.state.hover;
    const box2 = 'main-inner-' + this.props.box2 + this.state.hover;
    const box3 = 'main-outer-' + this.props.box3 + this.state.hover;
    const title = this.props.title;
    const content = this.props.content;

    return (
      <Col onMouseEnter={this.enter.bind(this)} onMouseLeave={this.leave.bind(this)}>
        <div className={"main-outer"} >
          <Box identifier={box1} type={''} highlighted={''} content={''}/>
          <Box identifier={box2} type={''}
            highlighted={highlight}
            changeContent={this.props.changeContent}
            value={title}
            content={content}/>
          <Box identifier={box3} type={''} highlighted={''} content={''}/>
        </div>
      </Col>
    );
  }
}
export default MainColumn;
