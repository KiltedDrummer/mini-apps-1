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
			currentPiece: 'black',
			pieces: 0
		},
		this.placePiece = this.placePiece.bind(this);
		this.changePlayer = this.changePlayer.bind(this);
	}

	placePiece(colNum) {
		console.log(this.state.gameStatus)
		if (this.state.columnHeight[colNum] < 6 && this.state.gameStatus === 'in Progress') {
			let toRow = 5 - this.state.columnHeight[colNum];
			let newMatrix = [];
			this.state.matrix.forEach(row => 
				newMatrix.push(row.slice())
			);

			// change location correct location for next piece
			newMatrix[toRow][colNum] = this.state.currentPiece;

			// this.checkResults(newMatrix);


			// determine which color is next
			let nextPiece;
			if (this.state.currentPiece === 'black') {
				nextPiece = 'red';
			} else {
				nextPiece = 'black';
			}

			let newHeights = this.state.columnHeight.slice();
			newHeights[colNum]++;

			let count = this.state.pieces;
			count++;

			// set state with new matrix, colHeights, and with new piece
			this.setState({
				matrix: newMatrix,
				currentPiece: nextPiece,
				columnHeight: newHeights,
				pieces: count
			}, this.checkResults);


			this.changePlayer();
		}
			// this.checkResults();
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

	checkResults() {
		let result;
		// check rows for 4 in a row
		this.state.matrix.forEach(row => {
			if (!result) {
				result = this.rowChecker(row);
			}
		});

		// check columns 
		//// build each column into a row?
		if (!result) {
			result = this.colChecker(this.state.matrix);
		}

		// check major and minor diagonals

		if (!result) {
			result = this.checkDiagonals(this.state.matrix);
		}

		if (!result && this.state.pieces === 42) {
			result = 'tie'
		}

		if (result === 'tie') {
			this.setState({
				gameStatus: 'tie'
			});
		} else if (result) {
			console.log(this.state.currentPlayer)
			let previous;
			if (this.state.currentPlayer === 'Player 1') {
				previous = 'Player 2'
			} else {
				previous = 'Player 1'
			}
			this.setState({
				gameStatus: previous
			}, this.forceUpdate);
		}
	}

	rowChecker(row) {
		const pieces = row.join('');
		if (pieces.includes('blackblackblackblack') || pieces.includes('redredredred')) {
			return true;
		}
	}

	colChecker(matrix) {
		let result;
		for (var i = 0; i < matrix.length; i++) {
			let column = [];
			matrix.forEach(row => column.push(row[i]));
			if(this.rowChecker(column)) {
				return true;
			}
		}
	}

	checkDiagonals(matrix) {
		let majorDiags = [[], [], [], [], [], []];

		let minorDiags = [[], [], [], [], [], []];

		const buildMajor = {
			'-2': (val) => majorDiags[0].push(val),
			'-1': (val) => majorDiags[1].push(val),
			'0': (val) => majorDiags[2].push(val),
			'1': (val) => majorDiags[3].push(val),
			'2': (val) => majorDiags[4].push(val),
			'3': (val) => majorDiags[5].push(val)
		};

		const buildMinor = {
			'3': (val) => minorDiags[0].push(val),
			'4': (val) => minorDiags[1].push(val),
			'5': (val) => minorDiags[2].push(val),
			'6': (val) => minorDiags[3].push(val),
			'7': (val) => minorDiags[4].push(val),
			'8': (val) => minorDiags[5].push(val)
		};

		for (var r = 0; r < matrix.length; r++) {
			for (var c = 0; c < matrix[r].length; c++) {
				if (buildMajor[r-c]) {
					buildMajor[r-c](matrix[r][c]);
				} 

				if (buildMinor[r + c]) {
					buildMinor[r + c](matrix[r][c]);
				}
			}
		}

		let result;
		for (var i = 0; i < majorDiags.length; i++) {
			if (!result) {
				result = this.rowChecker(majorDiags[i])
			}
		}

		for (var i = 0; i < minorDiags.length; i++) {
			if (!result) {
				result = this.rowChecker(minorDiags[i]);
			}
		}

		return result;
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