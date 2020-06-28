import React from 'react';
// import { Row, Col } from 'reactstrap';

class Title extends React.Component {
  render() {
    // let classNameInner = 'main-inner main-inner-square';
    return (
      <div className='title-row'>
        <h2
          className='title-of-section'>
          {this.props.title}
        </h2>
        <div className='title-subheader'>
        { this.props.hoverContent }
        </div>
      </div>
    );
  }
}

export default Title;
