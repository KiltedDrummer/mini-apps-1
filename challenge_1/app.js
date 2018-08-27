/*
************************************************
		Global scope Variables and functions 
************************************************
*/

class Rules {

	constructor () {
		this.currentPiece = 'X';
		this.ended = false;
		this.placed = 0;

		this.score = {
			X: 0,
			O: 0
		}

		this.names = {
			X: 'Player ',
			O: 'Player '
		};
		
}

	changePiece (str) {
			if (str === 'X') {
				this.currentPiece = 'O';
			} else {
				this.currentPiece = 'X';
			}
		}

	resultName (str) {
		let piece;
			if (rules.currentPiece === 'X') {
				piece = 'O'
			} else {
				piece = 'X'
			}
		if (str.includes('-')) {
			return str.slice(0, str.length - 2)
		} else {
			return `${str} ${piece}`
		}
	}
	
}

/*
************************************************
		User Inputs 
************************************************
*/

class Inputs {
	constructor () {
		this.rotation = false;

	}

	setName () {
		document.getElementById('xName').innerText = rules.names.X;
		document.getElementById('oName').innerText = rules.names.O;
	}

	nameClicked (str) {
		rules.names[str] = window.prompt('Player ' + str + '\'s Name');
		if (!rules.names[str]) {
			rules.names[str] = 'Player';
		} else {
			rules.names[str] += ' -';
		}
		this.setName();
	}

	clicked (boxNum) {
		if (!rules.ended) {
			var piece = document.getElementById(boxNum);
			if (!piece.innerText) {
				// add piece to box
				piece.innerText = rules.currentPiece;
				gameboard.updateBoard(boxNum);
				rules.changePiece(rules.currentPiece);
			}
			if (this.rotation) {
				this.rotateBoard();
			}
		}
	}

	resetBoard () {
		var boxes = document.getElementsByClassName('box');
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].innerText = '';
		};

		rules.ended = false;
		rules.changePiece(rules.currentPiece);
		rules.placed = 0;
		gameboard = new Board();
		document.getElementById('result').innerText = rules.resultName(rules.names[rules.currentPiece]) + '\'s Turn!';
	}

	rotateBoard () {
		let matrix = gameboard.board;
		let size = matrix.length;
		// create new empty matrix
		let newBoard = [];
		matrix.forEach(ele => newBoard.push(Array(size)));

		// clear render
		let boxes = document.getElementsByClassName('box');
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].innerText = '';
		};

		// fill new matrix render as filled
		for (var r = 0; r < size; r++) {
			for (var c = 0; c < size; c++) {
				newBoard[r][c] = matrix[2 - c][r];
				if (matrix[2 - c][r]) {
					boxes[r * 3 + c].innerText = matrix[2 - c][r];
				}
			}
		}

		gameboard.board = newBoard;
	}

	addRotate () {
		this.rotation = !this.rotation;
		if (this.rotation) {
			document.getElementsByClassName('rotate')[0].innerText = 'Enabled';
		}else {
			document.getElementsByClassName('rotate')[0].innerText = 'Disabled';
		}
	}

}

/*
************************************************
		gameBoard object and game state handling 
************************************************
*/

class Board {
	constructor() {
		this.board = [
			[undefined, undefined, undefined],
			[undefined, undefined, undefined],
			[undefined, undefined, undefined]
		];
	}

	placePiece(rowNum, boxNum) {
		rules.placed++;
		if (boxNum % 3 === 1) {
			this.board[rowNum][0] = rules.currentPiece;
			this.checkBoard(rowNum, 0, rules.currentPiece);
		} else if (boxNum % 3 === 2) {
			this.board[rowNum][1] = rules.currentPiece;
			this.checkBoard(rowNum, 1, rules.currentPiece);
		} else {
			this.board[rowNum][2] = rules.currentPiece;
			this.checkBoard(rowNum, 2, rules.currentPiece);
		}
	}

	updateBoard (boxNum) {
		// update our matrix to show current state of board
		if (boxNum < 4) {
			this.placePiece(0, boxNum);
		} else if (boxNum < 7) {
			this.placePiece(1, boxNum);
		} else {
			this.placePiece(2, boxNum);
		}
	}

	checkBoard (row, col, piece) {
		let solved = false
		if (this.board[row].every(ele => ele === piece)) {
			solved = true;
		} else if (this.board[0][col] === piece && this.board[1][col] === piece && this.board[2][col] === piece) {
			solved = true;
		}

		if ((row === 0 && col === 0) || (row === 2 && col === 2)) {
			if (this.board[0][0] === piece && this.board[1][1] === piece && this.board[2][2] === piece) {
				solved = true;
			}
		} else if ((row === 2 && col === 0) || (row === 0 && col === 2)) {
			if (this.board[2][0] === piece && this.board[1][1] === piece && this.board[0][2] === piece) {
				solved = true;
			}
		}

		if (solved) {
			document.getElementById('result').innerText = `${rules.resultName(rules.names[rules.currentPiece])} Wins!`;
			rules.ended = true;
			rules.score[piece]++
			document.getElementById('X').innerText = rules.score['X'];
			document.getElementById('O').innerText = rules.score['O'];
		} else if (!solved && rules.placed === 9) {
			document.getElementById('result').innerText = 'It\'s a Draw!';
		} else {
			let piece;
			if (rules.currentPiece === 'X') {
				piece = 'O'
			} else {
				piece = 'X'
			}
			document.getElementById('result').innerText = rules.resultName(rules.names[piece]) + '\'s Turn!';
			
		}
	}

}








