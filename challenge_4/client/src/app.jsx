import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board.jsx';
import Header from './components/header.jsx';



class App extends React.Component {
	constructor(props) {
		super (props);
		this.state = {
			matrix: [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0]
			],
			columnHeight: [0, 0, 0, 0, 0, 0, 0],
			currentPlayer: 'Player 1',
			gameStatus: 'in Progress',
			currentPiece: 'black'
		},
		this.placePiece = this.placePiece.bind(this);
		this.changePlayer = this.changePlayer.bind(this);
	}

	placePiece(colNum) {
		if (this.state.columnHeight[colNum] < 6) {
			let toRow = 5 - this.state.columnHeight[colNum];
			let newMatrix = [];
			this.state.matrix.forEach(row => {
				newMatrix.push(row.slice());
			});

			// change location correct location for next piece
			newMatrix[toRow][colNum] = this.state.currentPiece;

			// determine which color is next
			let nextPiece;
			if (this.state.currentPiece === 'black') {
				nextPiece = 'red';
			} else {
				nextPiece = 'black';
			}

			let newHeights = this.state.columnHeight.slice();
			newHeights[colNum]++;

			// set state with new matrix, colHeights, and with new piece
			this.setState({
				matrix: newMatrix,
				currentPiece: nextPiece,
				columnHeight: newHeights
			});

			this.changePlayer();
		}
	}

	changePlayer() {
		let next;
		if (this.state.currentPlayer === 'Player 1') {
			next = 'Player 2'
		} else {
			next = 'Player 1'
		}

		this.setState({
			currentPlayer: next
		});

	}

	render() {
		return (
			<div>

				<Header
				player={this.state.currentPlayer}
				gameStatus={this.state.gameStatus}
				/>


				<Board 
				matrix={this.state.matrix}
				placePiece={this.placePiece}
				/>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))