import React, { Component } from 'react';

class ToolBarRight extends Component {
  render() {
    return (
      <div className="tools-pixel ">
        <div>
          <a href={this.props.url} download><button 
          className="pixel-button">Download Image</button></a>
        </div>
        <div className="share-buttons">
        </div>
      </div>
    );
  }
}

export default ToolBarRight;
