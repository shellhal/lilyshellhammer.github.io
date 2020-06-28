import React from 'react';
import { Row } from 'reactstrap';

class Box extends React.Component {
  redirect() {
    if (this.props.changeContent) {
      this.props.changeContent(this.props.value);
    }
  }

  render() {
    let accent = '';
    if (this.props.accent) {
      accent = 'accent';
    }
    let classNameInner = 'main-inner main-inner-' + this.props.number + " " ;
    classNameInner += this.props.highlighted + " " + accent;

    return (
      <Row>
        <div className="main-inner-wrapper" onClick={this.redirect.bind(this)}>
          <div className={classNameInner}>
            { this.props.content }
          </div>
        </div>
      </Row>
    );
  }
}

export default Box;
