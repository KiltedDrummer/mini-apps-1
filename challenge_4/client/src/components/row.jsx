import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';
import Spot from './singleSpot.jsx';



function BoardRow(props) {
	// take in a row and a row Number
	const filledRow = props.row.map((piece, index) => 
		<Spot 
		piece={piece}
		colNum={index}
		placePiece={props.placePiece}
		/>
	);


	return (
		// the html to render
		// render 7 spots next to eachother
		<div id={ props.rowNum } style={{backgroundColor: 'gray', width: '714px'}}>
			{ filledRow }
		</div>
	)

}

export default BoardRow;
