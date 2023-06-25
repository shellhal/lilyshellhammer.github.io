import React, { Component } from 'react'

function rect(props) {
    const {ctx, brushSize, x, y, width, height, color, gridSize} = props;
    ctx.fillStyle = color;
    ctx.lineWidth = "1";
    ctx.globalAlpha = 1
    let gs = gridSize;
    let xIn = (x-1)* gridSize;
    let yIn = (y-1)* gridSize;
    let widthIn = width;
    let heightIn = height;
    if (brushSize == 'md') {
      xIn = (x-2) * gridSize;
      yIn = (y-2) * gridSize;
      heightIn = height * 3;
      widthIn = width * 3;
    } else if (brushSize == 'lg') {
      xIn = (x-3) * gridSize;
      yIn = (y-3) * gridSize;
      widthIn = width * 5;
      heightIn = height * 5;
    }

    ctx.fillRect(xIn, yIn, widthIn, heightIn);
}

function grid(props) {
  const {ctx, width, height, gridSize, bgFlag} = props;
  ctx.lineWidth = "1";
  ctx.strokeStyle = "black";
  ctx.globalAlpha = 0.1;
  
  for (let i = 1; i < height/gridSize; i+= 1) {
    ctx.beginPath();
    ctx.moveTo(0, ((i) * gridSize)-1);
    ctx.lineTo(width, ((i) * gridSize)-1);
    ctx.stroke();
  }
  for (let i = 1; i < width/gridSize; i+= 1) {
    ctx.beginPath();
    ctx.moveTo(((i) * gridSize)-1, 0);
    ctx.lineTo(((i) * gridSize)-1, height);
    ctx.stroke();
  }
}

// --------------------------------------------
export default class Canvas extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef();
  }

  componentDidMount() {
    console.log('mounting!')
    this.drawAllCanvas();
  }


  getCursorPosition(canvas, event) {
      const rect = canvas.getBoundingClientRect();
      const x = parseInt((event.clientX - rect.left)/this.props.gridSize) + 1;
      const y = parseInt((event.clientY - rect.top)/this.props.gridSize) + 1;
      return {x, y};
  }

  drawShape(e) {
    let shape =  {'shape' : 'bg',color: this.props.chosenColor, 'drawnOrder': this.props.drawnOrder};
    const {x, y} = this.getCursorPosition(this.ref.current, e)
    if (this.props.selectedPen === 'pen') {
      shape = {'shape' : 'rect', size: this.props.brushSize, x, y, color: this.props.chosenColor, 'drawnOrder': this.props.drawnOrder};
    }
    this.props.addShape(shape);
  }

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
          grid({ctx, width: this.props.widthNum, height: this.props.heightNum, gridSize: this.props.gridSize, bgFlag: this.props.bgFlag});
        }
      }
    }
  }
  
  render() {
    console.log('shapres!', this.props.shapes);
    this.drawAllCanvas();
    return (
        <canvas onClick={this.drawShape.bind(this)} ref={this.ref} className="my-canvas" width={this.props.width} height={this.props.height}/>
    );
  }
}
