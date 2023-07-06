import React, { Component } from 'react';
import ReactSlider from "react-slider";

class MyReactSlider extends Component {
    constructor(props) {
        super(props);
        this.state ={
            value: 26,
        }
    }

    //-------------------------------------------------------------------------
    setCurrentValue(value) {
        let valueIn = parseInt(value, 10);
        if ((value % 2) === 1) {
            valueIn = value + 1;
        }
        this.setState({value: valueIn});
        this.props.changeGridSize(valueIn);
    }
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    render() {
        return (
          <div className="flex-container">
            <div className="flex-basis">{this.props.gridSize}</div>
            <ReactSlider
             className="myslider"
             trackClassName="myslider-track"
             thumbClassName="myslider-thumb"
              min={15}
              max={34}

              value={this.state.value}
              defaultValue={this.props.gridSize}
              onChange={(value) => this.setCurrentValue(value)}
            />
          </div>
        );
    }
}

export default MyReactSlider;
