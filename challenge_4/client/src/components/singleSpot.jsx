import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';



function Spot(props) {
	// accept the value through props that wil be either 0, 'red', or 'black',
	//  a column number
	// and a function that activates a piece placement (trigger a setState on App.js)

	let color = 'lightgrey'

	if (props.piece === 'red') {
		color = 'red'
	} else if (props.piece === 'black') {
		color = 'black';
	}

	const cssStyle = {
		display: 'inline-block',
		height: '100px',
		width: '100px',
		borderWidth: '1px',
		borderStyle: 'solid',
		boderColor: 'black',
		backgroundColor: color,
		margin: '1px'
	}
	return (
		// the html to render
		// should be a single location that can be filled red or black

		<button onClick={ props.placePiece.bind(this, props.colNum) } style={cssStyle}></button>
	)

}

export default Spot;
