import React from 'react';
import MyReactSlider from './MyReactSlider';

class ToolBarLeft extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	selectedPen: 'pen',
    }
  }

  //-------------------------------------------------------------------------
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

  //-------------------------------------------------------------------------
  setBrushSize(event) {
  	let size = 'lg';
  	if (event.target.firstChild.nodeValue === 'Small') {
  		size = 'sm';
  	} else if (event.target.firstChild.nodeValue === 'Medium') {
  		size = 'md';
  	}
  	this.props.setSize(size);
  }

  //-------------------------------------------------------------------------
  undo() {
	this.props.undo();
  }
  redo() {
	this.props.redo();
  }
  clear() {
	this.props.clear();
  }

  //-------------------------------------------------------------------------
  changeGridSize(value) {
  	this.props.changeGridSize(value);
  }

  //-------------------------------------------------------------------------
  //-------------------------------------------------------------------------
  render() {
  	const penCn = (this.props.selectedPen === 'pen') ? 'pen selected': 'pen';
  	const bgCn = (this.props.selectedPen === 'bg') ? 'bg selected': 'bg';
  	const gs = this.props.gridSize;
  	const gs2 = this.props.gridSize*3;
  	const gs3 =  this.props.gridSize*5;
  	let pixels = (this.props.brushSize === 'sm') ? (gs + "px") : ((this.props.brushSize === 'md') ? (gs2+ "px") : (gs3 + "px"));
  	

  	let smallCn = (this.props.brushSize === 'sm') ? 'selected': '';
  	let mediumCn = (this.props.brushSize === 'md') ? 'selected': '';
  	let largeCn = (this.props.brushSize === 'lg') ? 'selected': '';

  	let margin = (this.props.brushSize === 'sm') ? ((75 - parseInt(gs/2)) + "px") : ((this.props.brushSize === 'md') ? ((75 - parseInt(gs2/2)) + "px") : ((75 - parseInt(gs3/2)) + "px"));
  	
  	if (this.props.selectedPen === 'bg') {
  		pixels = "140px";
  		smallCn = ' disabled';
  		mediumCn = ' disabled';
  		largeCn = ' disabled';
  		margin= "3px"; 
  	}
  	// const circleCn = (this.props.selectedPen === 'circle') ? 'circle selected': 'circle';
  	// const squareCn = (this.props.selectedPen === 'square') ? 'square selected': 'square';

  	const undoButton = (this.props.drawnOrder === 1) ? <button onClick={this.undo.bind(this)} disabled className={"pixel-button disabled"}>Undo</button>: <button onClick={this.undo.bind(this)} className={"pixel-button "}>Undo</button>;
  	const redoButton = (this.props.redoQueue.length === 0) ? <button onClick={this.redo.bind(this)} disabled className={"pixel-button disabled"}>Redo</button>: <button onClick={this.redo.bind(this)} className={"pixel-button "}>Redo</button>;
  	
  	const history  = [];
  	// for (let i = this.props.drawnOrder - 1; i >= 1; i -= 1) {
  	// 	history.push(<div>{this.props.history[i][0]} <span className="history-time">{this.props.history[i][1]}</span></div>);
  	// }
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
    		<div>
    			<MyReactSlider
    			 gridSize={this.props.gridSize}
				 changeGridSize={this.changeGridSize.bind(this)}
		         className="customSlider"
		         trackClassName="customSlider-track"
		        />
    		</div>
    		<div className="my-hr"></div>
    		<div className="pixel-button-set">
    			{undoButton}
    			{redoButton}
    			<button onClick={this.clear.bind(this)} className="pixel-button ">Clear</button>
    		</div>
    		<div className="my-hr"></div>
    		<div className="pixel-button-set history-section">
    			{history}
    		</div>
    	</div>
    );
  }
}

// <button onClick={this.selectCircle.bind(this)} className={" pixel-button " + circleCn}>Circle</button>
// <button onClick={this.selectSquare.bind(this)} className={" pixel-button " + squareCn}>Square</button>

export default ToolBarLeft;
