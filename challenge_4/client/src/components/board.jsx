import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';
import BoardRow from './row.jsx';


// board should be 7 across 6 high

function Board(props) {
	const allRows = props.matrix.map((row, index) => 
		<BoardRow
		row={row}
		rowNum={index}
		placePiece={props.placePiece}
		/> 
	);

	return (

		<div id="board"> 
			{ allRows }
		</div>
	)

}

export default Board;