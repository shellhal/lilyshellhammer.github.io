import React, { Component } from 'react'

//-------------------------------------------------------------------------
function rect(props) {
    const {ctx, brushSize, x, y, width, height, color, gridSize} = props;
    ctx.fillStyle = color;
    ctx.lineWidth = "1";
    ctx.globalAlpha = 1
    let gs = gridSize;
    let xIn = (x-1)* gs;
    let yIn = (y-1)* gs;
    let widthIn = width;
    let heightIn = height;
    if (brushSize === 'md') {
      xIn = (x-2) * gs;
      yIn = (y-2) * gs;
      heightIn = height * 3;
      widthIn = width * 3;
    } else if (brushSize === 'lg') {
      xIn = (x-3) * gs;
      yIn = (y-3) * gs;
      widthIn = width * 5;
      heightIn = height * 5;
    }

    ctx.fillRect(xIn, yIn, widthIn, heightIn);
}
//-------------------------------------------------------------------------
function grid(props) {
  const {ctx, width, height, gridSize} = props;
  ctx.lineWidth = "1";
  ctx.strokeStyle = "black";
  ctx.globalAlpha = 0.1;
  
  for (let i = 1; i < parseInt(height/gridSize, 10) +1; i+= 1) {
    ctx.beginPath();
    ctx.moveTo(0, ((i) * gridSize)-1);
    ctx.lineTo(width, ((i) * gridSize)-1);
    ctx.stroke();
  }
  for (let i = 1; i < parseInt(width/gridSize, 10) + 1; i+= 1) {
    ctx.beginPath();
    ctx.moveTo(((i) * gridSize)-1, 0);
    ctx.lineTo(((i) * gridSize)-1, height);
    ctx.stroke();
  }
}

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
export default class Canvas extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef();
    this.state = {
      seconds: 0,
      clicked: false,
    }
  }
  //-------------------------------------------------------------------------
  componentDidMount() {
    console.log('mounting!')
    this.interval = setInterval(() => this.tick(), 1000);
    this.drawAllCanvas();
  }
  //-------------------------------------------------------------------------
  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }
  //-------------------------------------------------------------------------
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  //-------------------------------------------------------------------------
  getCursorPosition(canvas, event) {
      const rect = canvas.getBoundingClientRect();
      const x = parseInt((event.clientX - rect.left)/this.props.gridSize) + 1;
      const y = parseInt((event.clientY - rect.top)/this.props.gridSize) + 1;
      return {x, y};
  }

  //-------------------------------------------------------------------------
  handleDrag(e) {
    const coords = [];
    if (this.state.clicked && this.props.selectedPen === 'pen') {
      coords.push([e.clientX, e.clientY]);
      this.handleAddRects(coords);
    }
  }

  //-------------------------------------------------------------------------
  handleFill() {
    // At first scan edges for zero values and flood empty regions with mark value 3. 
    // Then walk through inner place. If you find zero cell, 
    // flood-fill from this cell with value 2.
  }

  //-------------------------------------------------------------------------
  handleAddRects(coords) {
    const shapes = [];
    const rect = this.ref.current.getBoundingClientRect();
    for (let i =0; i < coords.length; i += 1) {
      const x = parseInt((coords[i][0] - rect.left)/this.props.gridSize) + 1;
      const y = parseInt((coords[i][1] - rect.top)/this.props.gridSize) + 1;
      const shape = {'shape' : 'rect', size: this.props.brushSize, x, y, color: this.props.chosenColor, 'drawnOrder': this.props.drawnOrder};
      if (!shapes.includes(shape)) {
        shapes.push(shape);
      }
    }
    this.props.addManyShapes(shapes);
  }

  //-------------------------------------------------------------------------
  drawShape(e) {
    let shape =  {'shape' : 'bg',color: this.props.chosenColor, 'drawnOrder': this.props.drawnOrder};
    const {x, y} = this.getCursorPosition(this.ref.current, e)
    if (this.props.selectedPen === 'pen') {
      shape = {'shape' : 'rect', size: this.props.brushSize, x, y, color: this.props.chosenColor, 'drawnOrder': this.props.drawnOrder};
    }
    this.props.addShape(shape);
  }

  //-------------------------------------------------------------------------
  handleDragUnClick(e) {
    e.preventDefault();
    this.setState({clicked: false});
    this.props.handleUpdateDrawnOrder();
  }
  handleDragClick() {
    this.setState({clicked: true});
  }

  //-------------------------------------------------------------------------
  drawAllCanvas() {
    if (!this.ref.current) {
      return;
    }
    const ctx = this.ref.current.getContext('2d');
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, this.props.widthNum, this.props.heightNum);
    grid({ctx, width: this.props.widthNum, height: this.props.heightNum, gridSize: this.props.gridSize});
    if (ctx) {
      for (let i = 0; i < this.props.shapes.length; i += 1) {
        const shape = this.props.shapes[i];
        if (shape['shape'] === 'rect') {
          rect({ctx, 'brushSize': shape['size'], x: shape['x'], y: shape['y'], width: this.props.gridSize, height: this.props.gridSize, color: shape['color'], gridSize: this.props.gridSize});
        } else if (shape['shape'] === 'bg') {
          rect({ctx, 'brushSize': shape['size'], x: 1, y: 1, width: this.props.widthNum, height: this.props.heightNum, color: shape['color'], gridSize: this.props.gridSize});
        }
      }
    }
  }
  
  //-------------------------------------------------------------------------
  //-------------------------------------------------------------------------
  render() {
    this.drawAllCanvas();
    return (
        <canvas 
          onClick={this.drawShape.bind(this)} 
          onMouseDown={this.handleDragClick.bind(this)}
          onMouseUp={this.handleDragUnClick.bind(this)}
          onMouseMove={this.handleDrag.bind(this)} 
          ref={this.ref} className="my-canvas" 
          width={this.props.width} height={this.props.height}/>
    );
  }
}
