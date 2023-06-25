import React from 'react';
import { Canvas } from './Canvas';

class ToolBarLeft extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	selectedPen: 'pen',
    }
  }

  selectPen() {
  	this.props.setPen('pen');
  }
  selectBg() {
  	this.props.setPen('bg');
  }
  selectCircle() {
  	this.props.setPen('circle');
  }
  selectSquare() {
  	this.props.setPen('square');
  }

  setBrushSize(event) {
  	let size = 'lg';
  	if (event.target.firstChild.nodeValue === 'Small') {
  		size = 'sm';
  	} else if (event.target.firstChild.nodeValue === 'Medium') {
  		size = 'md';
  	}
  	this.props.setSize(size);
  }

  undo() {
	this.props.undo();
  }

  clear() {
	this.props.clear();
  }

  render() {
  	const penCn = (this.props.selectedPen === 'pen') ? 'pen selected': 'pen';
  	const bgCn = (this.props.selectedPen === 'bg') ? 'bg selected': 'bg';
  	let pixels = (this.props.brushSize === 'sm') ? "26px" : ((this.props.brushSize === 'md') ? "52px" : "78px");
  	
  	let margin = (this.props.brushSize === 'sm') ? "85px" : ((this.props.brushSize === 'md') ? "75px" : "60px");
  	
  	if (this.props.selectedPen === 'bg') {
  		pixels = "190px";
  		margin= "3px"; 
  	}
  	// const circleCn = (this.props.selectedPen === 'circle') ? 'circle selected': 'circle';
  	// const squareCn = (this.props.selectedPen === 'square') ? 'square selected': 'square';

  	const smallCn = (this.props.brushSize === 'sm') ? 'selected': '';
  	const mediumCn = (this.props.brushSize === 'md') ? 'selected': '';
  	const largeCn = (this.props.brushSize === 'lg') ? 'selected': '';

    return (
    	<div className="tools-pixel ">
    		<div className="chosen-brush-wrapper">
	    		<div className="chosen-brush-title">Your Brush</div>
	    		<div className="chosen-brush-tool">
	    			<div className={"chosen-brush " + this.props.brushSize}
	    			style={{'backgroundColor': this.props.chosenColor,
	    			'height': pixels,
	    			'width': pixels,
	    			"margin": margin + " auto",
	    			}}></div>
	    		</div>
    		</div>
    		<div className="pixel-button-set">
    			<button onClick={this.selectPen.bind(this)} className={" pixel-button " + penCn}>Pen</button>
    			<button onClick={this.selectBg.bind(this)} className={" pixel-button " + bgCn}>Background</button>
    		</div>
    		<div className="my-hr"></div>
    		<div className="pixel-button-set">
    			<button onClick={this.setBrushSize.bind(this)} className={" pixel-button " + smallCn}>Small</button>
    			<button onClick={this.setBrushSize.bind(this)} className={" pixel-button " + mediumCn}>Medium</button>
    			<button onClick={this.setBrushSize.bind(this)} className={" pixel-button " + largeCn}>Large</button>
    		</div>
    		<div className="my-hr"></div>
    		<div className="pixel-button-set">
    			<button onClick={this.undo.bind(this)} className=" pixel-button">Undo</button>
    			<button onClick={this.clear.bind(this)} className=" pixel-button">Clear</button>
    		</div>
    	</div>
    );
  }
}

// <button onClick={this.selectCircle.bind(this)} className={" pixel-button " + circleCn}>Circle</button>
// <button onClick={this.selectSquare.bind(this)} className={" pixel-button " + squareCn}>Square</button>

export default ToolBarLeft;
