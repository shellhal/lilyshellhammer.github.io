import React, { Component } from 'react';

class ToolBarRight extends Component {
  render() {
    const history  = [];
    // if (this.props.history) {
    //   for (let i = this.props.history.length - 1; i >= 0; i -= 1) {
    //     history.push(<div>{this.props.history[i]['typeHistory']} <span className="history-time">{this.props.history[i]['time']}</span></div>);
    //   }
    // }
    return (
      <div className="tools-pixel ">
        <div>
          <a href={this.props.url} download>
            <button className="pixel-button download-pixel-button">Download Image</button>
          </a>
        </div>
        <div className="my-hr"></div>
        <div className="pixel-button-set history-section">
          {history}
        </div>
        <div className="my-hr"></div>
        <div className="share-buttons">
        </div>
      </div>
    );
  }
}

export default ToolBarRight;
