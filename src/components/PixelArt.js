import React from 'react';
import { Container } from 'reactstrap';
// import Title from './Title';
import Canvas from './Canvas';
import ToolBarLeft from './ToolBarLeft';
import ToolBarRight from './ToolBarRight';
import {Modal, ModalBody, ModalFooter } from 'reactstrap';

class PixelArt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: 26,
      redoQueue: [],
      downloadURL: '',
      history: {},
      originalGridSize: 26,
      maxDrawnOrder: 1,
      canvasSize: 540, //width and height
      numWidthPixels: parseInt(540/26, 10),
      numHeightPixels: parseInt(540/26, 10),
      canvasSizeNum: '540px',
      brushSize: 'sm',
      chosenColor: 'pink',
      selectedPen: 'pen',
      bgFlag: false,
      drawnOrder: 1,
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

  //-------------------------------------------------------------------------
  changeGridSize(value) {
    //check that value is approved
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

  //-------------------------------------------------------------------------
  getNow() {
    const currentdate = new Date(); 
    return currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds() + "."
        + currentdate.getMilliseconds();
  }

  //-------------------------------------------------------------------------
  handleUpdateDrawnOrder() {
    this.setState({ drawnOrder: this.state.drawnOrder + 1});
  }
  //-------------------------------------------------------------------------
  addManyShapes(shapesIn) {
    const newShapes = this.state.shapes;
    for (let i = 0; i < shapesIn.length; i += 1) {
      newShapes.push(shapesIn[i]);
    }
    const newHistory = this.state.history;
    if (!newHistory[this.state.drawnOrder]) {
      newHistory[this.state.drawnOrder] = ['Shape', this.getNow()];
    }
    this.setState({shapes: [...new Set(newShapes)], history: newHistory});
  }

  //-------------------------------------------------------------------------
  addShape(shape) {
    let bgFlag = false;
    let typeHistory = 'Stamp'
    let newShapes = this.state.shapes;
    if (this.state.selectedPen === 'pen') {
      newShapes.push(shape);
      this.setState({shapes: newShapes});
    } else if (this.state.selectedPen === 'bg'){
      bgFlag = true;
      typeHistory = 'Background Fill'
      newShapes.push(shape);
    }
    console.log('newShapes', newShapes);
    const newHistory = this.state.history;
    const now = this.getNow();
    const val = [typeHistory, now];
    if (!newHistory[this.state.drawnOrder]) {
      newHistory[this.state.drawnOrder] = val;
    }
    this.setState({shapes: newShapes, drawnOrder: this.state.drawnOrder + 1, bgFlag, redoQueue: [], history: newHistory});
  }

  //-------------------------------------------------------------------------
  undo() {
    const oldShapes = this.state.shapes;
    const redoQueue = this.state.redoQueue;
    const newShapes = [];
    const newHistory = this.state.history;
    delete newHistory[this.state.drawnOrder];
    if (this.state.drawnOrder === 1) {
      return;
    }
    for (let i = 0; i < oldShapes.length; i += 1) {
      const val = oldShapes[i];
      if (val['drawnOrder'] < (this.state.drawnOrder-1)) {
        if (!newShapes.includes(val)) {
          newShapes.push(val);
        }
      } else {
        if (!redoQueue.includes(val)) {
          redoQueue.push({'val': val, history: newHistory});
        }
      }
    }
    this.setState({shapes: newShapes, drawnOrder: (this.state.drawnOrder-1), redoQueue, history: newHistory });
  }

  //-------------------------------------------------------------------------
  redo() {
    const oldShapes = this.state.shapes;
    const newRedoQueue = [];
    const newShapes = [];
    const newHistory = this.state.history;
    for (let i = 0; i < oldShapes.length; i += 1) {
      const val = oldShapes[i];
      if (val['drawnOrder'] <= (this.state.drawnOrder)) {
        if (!newShapes.includes(val)) {
          newShapes.push(val);
        }
      }
    }
    for (let i = 0; i < this.state.redoQueue.length; i += 1) {
      const val = this.state.redoQueue[i];
      if ( val['val']['drawnOrder'] === (this.state.drawnOrder)) {
        if (!newShapes.includes(val['val'])) {
          newShapes.push(val['val']);
          if (val['history'].indexOf("Redo") >= 0) {
            newHistory[this.state.drawnOrder] = ([val['history'][0], this.getNow()]);
          } else {
            newHistory[this.state.drawnOrder] = (['Redo ' + val['history'][0], this.getNow()]);
          }
        }
      } else {
        if (!newRedoQueue.includes(val)) {
          newRedoQueue.push(val);
        }
      }
    }
    this.setState({shapes: newShapes, drawnOrder: (this.state.drawnOrder+1), redoQueue: newRedoQueue, history: newHistory  })
  }

  //-------------------------------------------------------------------------
  toggleClearModal() {
    this.setState({ clearModalOpen: !this.state.clearModalOpen });
  }

  //-------------------------------------------------------------------------
  clear() {
    if (this.state.shapes !== []) {
      this.setState({clearModalOpen: true});
    }
  }

  //-------------------------------------------------------------------------
  actualClear() {
    this.setState({shapes: [], drawnOrder: 1, clearModalOpen: false});
  }

  //-------------------------------------------------------------------------
  setColor(e) {
    this.setState({ chosenColor: e.target.style.backgroundColor });
  }

  setPen(value) {
    this.setState({selectedPen: value});
  }

  setSize(size) {
    this.setState({brushSize: size});
  }

  //-------------------------------------------------------------------------
  //-------------------------------------------------------------------------
  render() {
    const gs = this.state.originalGridSize;
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
          <h2 className="pixel-art-title">Pixel Art App</h2>
          <div className="tools-pixel-canvas-wrapper flex-container flex-container-center">
            <div>
              <ToolBarLeft
                history = {this.state.history}
                gridSize={this.state.gridSize}
                drawnOrder={this.state.drawnOrder}
                redoQueue={this.state.redoQueue}
                changeGridSize={this.changeGridSize.bind(this)}
                clear={this.clear.bind(this)}
                setSize={this.setSize.bind(this)}
                brushSize={this.state.brushSize} 
                selectedPen={this.state.selectedPen}
                setPen={this.setPen.bind(this)}
                undo={this.undo.bind(this)}
                redo={this.redo.bind(this)}
                chosenColor={this.state.chosenColor} />
            </div>
            <div className="canvas-wrapper">
              <Canvas 
                handleUpdateDrawnOrder={this.handleUpdateDrawnOrder.bind(this)}
                canvasType="main canvas"
                refName="canvas"
                drawnOrder={this.state.drawnOrder}
                brushSize={this.state.brushSize}
                bgFlag={this.state.bgFlag}
                numHeightPixels={this.state.numHeightPixels}
                numWidthPixels={this.state.numWidthPixels}
                selectedPen={this.state.selectedPen}
                addShape={this.addShape.bind(this)}
                addManyShapes={this.addManyShapes.bind(this)}
                chosenColor={this.state.chosenColor}
                shapes={this.state.shapes} 
                height={this.state.canvasSizeNum} heightNum={this.state.canvasSize} 
                width={this.state.canvasSizeNum} widthNum={this.state.canvasSize}
                gridSize={this.state.gridSize }/>
            </div>
            <div>
              <ToolBarRight
                url={this.state.downloadURL}
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
