import React from 'react';
import { Container } from 'reactstrap';
// import Title from './Title';
import Canvas from './Canvas';
import ToolBarLeft from './ToolBarLeft';
import ToolBarRight from './ToolBarRight';
import { Row, Col, Modal, ModalBody, ModalFooter } from 'reactstrap';

class PixelArt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gridSize: 26,
      canvasSize: 540, //width and height
      numWidthPixels: parseInt(540/26, 10),
      numHeightPixels: parseInt(540/26, 10),
      canvasSizeNum: '540px',
      brushSize: 'sm',
      chosenColor: 'pink',
      selectedPen: 'pen',
      bgFlag: false,
      drawnOrder: 2,
      shapes: [],
      clearModalOpen: false,
      colors: [
          '#ffb600', '#ff9e00', '#ff8500', '#ff7900', '#ff6000', '#ff4800', '#bc3908', '#941b0c', 
          '#ad2831', '#f25c54', '#ce2d2d', '#ea4646', '#ea4674', '#ea46a0', '#ea46c9',
           '#b5179e', '#7209b7', '#480ca8', '#3a0ca3', '#3f37c9', '#4361ee', '#4895ef', '#4cc9f0', '#2f97b7',
           '#1a759f', '#168aad', '#34a0a4', '#52b69a', '#76c893', '#99d98c', '#b5e48c', '#d9ed92',
        ],
      pastels: [
        '#fbf8cc', '#fde4cf', '#ffcfd2', '#f1c0e8', '#cfbaf0', '#a3c4f3', '#90dbf4', '#8eecf5', '#98f5e1', '#b9fbc0',
      ]
    }
  }

  componentDidMount() {
  }

  changeGridSize(value) {
    //check that value is approved
    const startNum = 540;
    const grids = parseInt(540/value, 10);
    const size = grids * value;
    const canvasSizeNum = size + "px";
    this.setState({
      gridSize: value,
      canvasSizeNum,
      canvasSize: size,
      numWidthPixels: grids,
      numHeightPixels: grids
    });
  }

  addShape(shape) {
    let bgFlag = false;
    let newShapes = this.state.shapes;
    if (this.state.selectedPen === 'pen') {
      newShapes.push(shape);
      this.setState({shapes: newShapes});
    } else if (this.state.selectedPen === 'bg'){
      bgFlag = true;
      newShapes = [shape]
      for (let i = 0; i < this.state.shapes.length; i += 1) {
        newShapes.push(this.state.shapes[i]);
      }
    }
    this.setState({shapes: newShapes, drawnOrder: this.state.drawnOrder + 1, bgFlag});
  }

  undo() {
    let bgFlag = false;
    const oldShapes = this.state.shapes;
    const newShapes = [];
    if (this.state.drawnOrder === 1) {
      return;
    }
    for (let i = 0; i < oldShapes.length; i += 1) {
      if (oldShapes[i]['drawnOrder'] < (this.state.drawnOrder-1)) {
        newShapes.push(oldShapes[i]);
        if (oldShapes[i]['shape'] === 'bg') {
          bgFlag = true;
        }
      } 
    }
    this.setState({shapes: newShapes, drawnOrder: (this.state.drawnOrder-1)});
  }

  toggleClearModal() {
    this.setState({ clearModalOpen: !this.state.clearModalOpen });
  }

  clear() {
    if (this.state.shapes != []) {
      this.setState({clearModalOpen: true});
    }
  }

  actualClear() {
    this.setState({shapes: [], drawnOrder: 1, clearModalOpen: false});
  }

  setColor(e) {
    this.setState({ chosenColor: e.target.style.backgroundColor });
  }

  setPen(value) {
    this.setState({selectedPen: value});
  }

  setSize(size) {
    this.setState({brushSize: size});
  }

  render() {
    const gs = this.state.gridSize;
    const colors = this.state.colors.map((color) => {
      return <div className={"color-box"} 
        key={color+ '-color'}
        onClick={this.setColor.bind(this)} 
        style={{'backgroundColor': color, 'minHeight': gs, 'minWidth': gs, 'height': gs, 'width': gs}}></div>
    });
    const pastels = this.state.pastels.map((color) => {
      return <div className={"color-box"} 
        onClick={this.setColor.bind(this)}
        key={color+ '-color'}
        style={{'backgroundColor': color, 'minHeight': gs, 'minWidth': gs, 'height': gs, 'width': gs}}></div>
    });
    return (
      <Container className="pixel-art-page">
        <div className="wrapper full-page">
          <h2 className="pixel-art-title">Pixel Drawing App</h2>
          <div className="tools-pixel-canvas-wrapper flex-container flex-container-center">
            <div>
              <ToolBarLeft
                clear={this.clear.bind(this)}
                setSize={this.setSize.bind(this)}
                brushSize={this.state.brushSize} 
                selectedPen={this.state.selectedPen}
                setPen={this.setPen.bind(this)}
                undo={this.undo.bind(this)}
                chosenColor={this.state.chosenColor} />
            </div>
            <div className="canvas-wrapper">
              <Canvas 
                canvasType="main canvas"
                refName="canvas"
                brushSize={this.state.brushSize}
                bgFlag={this.state.bgFlag}
                numHeightPixels={this.state.numHeightPixels}
                numWidthPixels={this.state.numWidthPixels}
                selectedPen={this.state.selectedPen}
                addShape={this.addShape.bind(this)}
                chosenColor={this.state.chosenColor}
                shapes={this.state.shapes} 
                height={this.state.canvasSizeNum} heightNum={this.state.canvasSize} 
                width={this.state.canvasSizeNum} widthNum={this.state.canvasSize}
                gridSize={this.state.gridSize }/>
            </div>
            <div>
              <ToolBarRight
                clear={this.clear.bind(this)}
                setSize={this.setSize.bind(this)}
                brushSize={this.state.brushSize} 
                selectedPen={this.state.selectedPen}
                setPen={this.setPen.bind(this)}
                undo={this.undo.bind(this)}
                chosenColor={this.state.chosenColor} />
            </div>
          </div>
          <div className=" pixel-color-picker-wrapper flex-container-center">
            <div className="flex-container color-palette">
              {colors}
            </div>
            <div className="flex-container">
              {pastels}
            </div>
          </div>
        </div>

        <Modal isOpen={this.state.clearModalOpen} toggle={this.toggleClearModal.bind(this)} className="clear-modal">
          <ModalBody >
            <h3>Are you sure?</h3>
          </ModalBody>
          <ModalFooter >
            <button className="pixel-button btn-primary" onClick={this.actualClear.bind(this)}>Clear</button>
            <button className="pixel-button btn-secondary" onClick={this.toggleClearModal.bind(this)}>Close</button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default PixelArt;
