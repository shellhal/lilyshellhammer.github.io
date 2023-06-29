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
      history: [],
      tempShapes: [],
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
      drawnOrder: 0,
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
  isValid(grid, width, height, x, y, prevC, newC) {
    if (x < 0 || x >= width || y < 0 || y >= height || grid[x][y] !== prevC
       || grid[x][y] === newC)
        return false;
    return true;
  }
 
 
  //-------------------------------------------------------------------------
  // FloodFill function
  floodFill(grid, width, height, x, y, prevC, newC){
    const queue = [];
 
    // Append the position of starting
    // pixel of the component    
    queue.push([x,y]);
 
    // Color the pixel with the new color
    grid[x][y] = newC;
 
    // While the queue is not empty i.e. the
    // whole component having prevC color
    // is not colored with newC color
    while (queue.length > 0){
        // Dequeue the front node
        const coord = queue.pop();
 
        const posX = coord[0];
        const posY = coord[1];
        
        let first = null;
        let second = null
        // Check if the adjacent
        // pixels are valid
        if (this.isValid(grid,width, height, posX + 1, posY, prevC, newC)) {
            // Color with newC
            // if valid and enqueue
            grid[posX + 1][posY] = newC;
            first = posX + 1;
            second = posY;
            queue.push([first, second]);
        }
 
        if(this.isValid(grid,width, height, posX-1, posY, prevC, newC))
        {
            grid[posX-1][posY]= newC;
            first = posX-1;
            second = posY;
            queue.push([first, second]);
        }
 
        if(this.isValid(grid,width, height, posX, posY + 1, prevC, newC))
        {
            grid[posX][posY + 1]= newC;
            first = posX;
            second = posY + 1;
            queue.push([first, second]);
        }
 
        if(this.isValid(grid,width, height, posX, posY-1, prevC, newC))
        {
            grid[posX][posY-1]= newC;
            first = posX;
            second = posY-1;
            queue.push([first, second]);
        }
    }
  }

  //-------------------------------------------------------------------------
  handleAddFill(grid, newC, width, height, shapes) {
    const newShapes = this.state.shapes;
    const newHistory = this.state.history;
    const shapeAdd = [];
    for (let i = 0; i < width; i += 1) {
      for (let k = 0; k < height; k += 1) {
        if (grid[i][k] === newC) {
          shapeAdd.push({'shape': 'rect', 'x': i, 'y': k, color: this.state.chosenColor, 'drawnOrder': this.state.drawnOrder});
        }
      }
    }
    newHistory.push(['Fill', this.getNow(), this.state.drawnOrder]);
    newShapes.push({'shape': shapeAdd, 'drawnOrder': this.state.drawnOrder})
    this.setState({ shapes: newShapes, drawnOrder: this.state.drawnOrder + 1, tempShapes: [], history: newHistory, redoQueue: []});
  }

  //-------------------------------------------------------------------------
  handleFill(shape) {
    const x = shape['x'];
    const y = shape['y'];
    const width = this.state.numWidthPixels + 1;
    const height = this.state.numHeightPixels + 1;
    if (x && y && (x < width && y < height)) {
      const grid = [];
      for (let i = 0; i < width; i += 1) {
        let arr = [];
        for (let k = 0; k < height; k += 1) {
          arr.push(0);
        }
        grid.push(arr);
        arr = [];
      }
      for (let i = 0; i < this.state.shapes.length; i += 1) {
        const shapeInner = this.state.shapes[i]['shape'];
        for (let k = 0; k < shapeInner.length; k += 1) {
          const x = shapeInner[k]['x'];
          const y = shapeInner[k]['y'];
          if (x <= this.state.numWidthPixels && y <= this.state.numHeightPixels) {
            grid[x][y] = shapeInner[k]['color'];
          } 
        }
      }
      const prevC = grid[x][y];
      const newC = this.state.chosenColor;
      this.floodFill(grid, width, height, x, y, prevC, newC);
      this.handleAddFill(grid, newC, width, height);
    }
  }


  //-------------------------------------------------------------------------
  handleUpdateDrawnOrder(shape=null) {
   let shapeIn = null;
    if (shape) {
      shapeIn = shape;
    } else if (this.state.tempShapes.length) {
      shapeIn = this.state.tempShapes.pop();
    } else {
      return;
    }
    
    const typeHistory = (this.state.selectedPen === 'bg') ? 'Background Fill' : ((this.state.selectedPen === 'fill') ? 'Fill' : 'Stamp');
    const now = this.getNow();

    const newHistory = this.state.history;
    const val = {'typeHistory': typeHistory, 'time': now, 'drawnOrder': this.state.drawnOrder};
    if (!newHistory.includes(val)) {
      newHistory.push(val);
    }
    if (this.state.selectedPen === 'pen') {
      this.addManyShapes(this.state.tempShapes);
      this.setState({ drawnOrder: this.state.drawnOrder + 1, tempShapes: [], history: newHistory});
    } else if (this.state.selectedPen === 'bg') {
      this.addManyShapes([{'shape': shapeIn, 'drawnOrder': this.state.drawnOrder}]);
      this.setState({ drawnOrder: this.state.drawnOrder + 1, tempShapes: [], history: newHistory});
    } else {
      this.handleFill(shapeIn);
    }
  }

  //-------------------------------------------------------------------------
  addManyShapes(shapesIn) {
    for (let i = 0; i < shapesIn.length; i += 1) {
      this.addShape(shapesIn[i], false);
    }
  }

  //-------------------------------------------------------------------------
  addShapeTemp(shapes) {
    const newShapes = this.state.tempShapes;
    for (let i = 0; i < shapes.length; i += 1) {
      newShapes.push(shapes[i]);
    }
    this.setState({ tempshapes: newShapes});
  }


  //-------------------------------------------------------------------------
  addNewOrAppend(shapes, newShape, drawnOrder) {
    const newShapes = shapes;
    if (shapes.length === 0 || newShape['shape']['shape'] === 'bg') {
      newShapes.push({'shape': [newShape], 'drawnOrder': drawnOrder});
    } else {
      const lastShapeItem = newShapes.pop();
      if (lastShapeItem['drawnOrder'] === drawnOrder) {
        const arr = lastShapeItem['shape'];
        arr.push(newShape);
        newShapes.push({'shape': arr, 'drawnOrder': drawnOrder});
      } else {
        newShapes.push(lastShapeItem);
        newShapes.push({'shape': [newShape], 'drawnOrder': drawnOrder});
      }
    }
    return newShapes;
  }

  //-------------------------------------------------------------------------
  addShape(shape, printFlag=true) {
    const newHistory = this.state.history;
    
    let lastHistoryVal = null;
    if (this.state.drawnOrder > 1) {
      lastHistoryVal = newHistory.pop();
      newHistory.push(lastHistoryVal);
    }

    const newShapes = this.addNewOrAppend(this.state.shapes, shape, this.state.drawnOrder);
    // const now = this.getNow();

    // const condition = (this.state.drawnOrder > 1); ? this.checkRepeatClick(now, lastHistoryVal, this.state.drawnOrder) : false;
    if ((this.state.selectedPen === 'pen') || (this.state.selectedPen === 'bg')) {

      // console.log('ADD SHAPE: shapes length', newShapes.length);
      // console.log('ADD SHAPE: setting shapes', [...newShapes]);
      // console.log('ADD SHAPE: setting history', newHistory);
      // console.log('');
      this.setState({shapes: newShapes, redoQueue: [], history: newHistory});
    }
  }

  //-------------------------------------------------------------------------
  undo() {
    const redoQueue = this.state.redoQueue;
    const newShapes = this.state.shapes;
    const newHistory = this.state.history;

    if (newHistory.length) {
      const historyPop = newHistory.pop();
      const shapePop = newShapes.pop();
      redoQueue.push({'shape': shapePop, 'history': historyPop});
    }

    // console.log('UNDO: setting shapes', newShapes);
    // console.log('UNDO: setting redoQueue', redoQueue);
    // console.log('');
    this.setState({shapes: newShapes, drawnOrder: (this.state.drawnOrder - 1), redoQueue, history: newHistory });
  }

//-------------------------------------------------------------------------
  redo() {
    const newRedoQueue = this.state.redoQueue;
    const newShapes = this.state.shapes;
    const newHistory = this.state.history;

    const redoPop = newRedoQueue.pop();
    newShapes.push(redoPop['shape']);
    newHistory.push(redoPop['history']);


    // console.log('REDO: setting shapes', newShapes);
    // console.log('REDO: setting redoQueue', newRedoQueue);
    // console.log('');
    this.setState({shapes: newShapes, drawnOrder: (this.state.drawnOrder+1), redoQueue: newRedoQueue, history: newHistory  })
  }

//-------------------------------------------------------------------------
  checkRepeatClick(nowTime, historyItem, currDrawOrder) {
    let retFlag = true;
    //check if lasthistory drawnorder is 1 less than current
    // AND
    // lasthistory shape is Shape and currShape is Stamp
    // AND 
    if ((historyItem['drawnOrder'] + 1) !== currDrawOrder) {
      retFlag = false;
    }
    const currTime = parseFloat(nowTime.split(':')[1]);
    const prevTime = parseFloat(historyItem['time'].split(':')[1]);
    if ((currTime - prevTime) > 0.3) {
      retFlag = false;
    }
    if (historyItem['typeHistory'] !== 'Shape') {
      retFlag = false;
    }
    return retFlag;
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
    this.setState({selectedPen: value, tempShapes: []});
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
                addShapeTemp={this.addShapeTemp.bind(this)}
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
                drawnOrder={this.state.drawnOrder}
                history={this.state.history}
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
