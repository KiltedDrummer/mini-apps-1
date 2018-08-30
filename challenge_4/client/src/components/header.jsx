import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';
import Results from './results.jsx';

function Header(props) {


	return (
			<div>
				<h1>Connect Four</h1>
				<Results 
				result={props.gameStatus}
				player={props.currentPlayer}
				/>
			</div>
		)
}

export default Header;