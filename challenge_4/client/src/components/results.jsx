import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';

function Results(props) {
	console.log(props);

	if (props.result === 'Player 1') {
		return (
			<div>
				<h2>{props.result} Wins!</h2>
			</div>
			)
	} else if (props.result === 'Player 2') {
		return (
			<div>
				<h2>{props.result} Wins!</h2>
			</div>
			)
	} else if (props.result === 'tie') {
		return (
			<div>
				<h2>Draw!</h2>
			</div>
			)
	} else {
		return (
			<div>
				<h2>{props.player}'s turn</h2>
			</div>
			)
	}
}

export default Results;