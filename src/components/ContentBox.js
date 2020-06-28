import React from 'react';

class ContentBox extends React.Component {
  redirect() {
    this.props.changeContent(this.props.redirectVal);
  }
  render() {
    let classNameInner = 'main-inner main-inner-square';
    return (
      <div className={"main-inner-wrapper " + this.props.name } onClick={this.redirect.bind(this)}>
        <div className={classNameInner}>
          { this.props.content }
        </div>
      </div>
    );
  }
}

export default ContentBox;
