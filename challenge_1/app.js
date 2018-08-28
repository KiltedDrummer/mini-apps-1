
/*
************************************************
		User Inputs 
************************************************
*/

class Inputs{
	constructor () {
		this.rotation = false;
	}

	setName () {
		document.getElementById('xName').innerText = this.names.X;
		document.getElementById('oName').innerText = this.names.O;
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
			if (piece.childNodes.length === 0) {
				// add piece to box
				var node = document.createElement('p');
				node.className = 'boxNum';
				node.setAttribute('style', "animation-name: fallIn; animation-duration: 2s; iteration-count: 1;");
				node.innerText = rules.currentPiece;
				piece.appendChild(node);
				rules.gameboard.updateBoard(boxNum);
				if (this.rotation) {
					this.rotateBoard();
				} else if (this.currentGravity) {
					this.gravityBoard();
				}
				rules.changePiece(rules.currentPiece);
				if (!rules.ended) {
					document.getElementById('result').innerText = rules.resultName(rules.names[rules.currentPiece]) + '\'s Turn!';
				}
			}
		}
	}

	resetBoard () {
		var boxes = document.getElementsByClassName('box');
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].innerText = '';
		};

		rules.currentGravity = rules.nextGravity;
		rules.ended = false;
		rules.changePiece(rules.currentPiece);
		rules.placed = 0;
		rules.gameboard = new Board();
		if (rules.currentGravity) {
			document.getElementsByClassName('gravity-button')[0].innerText = "Enabled";
		} else {
			document.getElementsByClassName('gravity-button')[0].innerText = "Disabled";
		}
		document.getElementById('result').innerText = rules.resultName(rules.names[rules.currentPiece]) + '\'s Turn!';
	}

	rotateMatrix(matrix) {
		let size = matrix.length;
		// create new empty matrix
		let newBoard = [];
		matrix.forEach(ele => newBoard.push(Array(size)));

		for (var r = 0; r < size; r++) {
			for (var c = 0; c < size; c++) {
				newBoard[r][c] = matrix[2 - c][r];
			}
		}

		return newBoard;
	}

	rotateBoard () {
		// clear render
		let boxes = document.getElementsByClassName('box');
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].innerText = '';
		};

		// build matrix

		let matrix = this.rotateMatrix(rules.gameboard.board)
		let size = matrix.length;
		// render matrix
		for (var r = 0; r < size; r++) {
			for (var c = 0; c < size; c++) {
				if (matrix[r][c]) {
					var piece = document.getElementById(r * 3 + c + 1)
					var node = document.createElement('p');
					node.className = 'boxNum';
					node.setAttribute('style', "animation-name: fallIn; animation-duration: 2s; iteration-count: 1;");
					node.innerText = matrix[r][c];
					boxes[r * 3 + c].appendChild(node);
				}
			}
		}

		rules.gameboard.board = matrix;
	}

	gravityBoard () {
		let matrix = rules.gameboard.board;
		let size = matrix.length;
		// create new empty matrix
		let newBoard = this.rotateMatrix(matrix);

		// clear render
		let boxes = document.getElementsByClassName('box');
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].innerText = '';
		};

		// build new matrix
		for (var r = 1; r >= 0; r--) {
			for (var c = 0; c < size; c++) {
				if (newBoard[r][c] && !newBoard[r + 1][c]) {
					newBoard[r + 1][c] = newBoard[r][c];
					newBoard[r][c] = undefined;
					if (r === 0) {
						r = 1;
						c = -1;
					}
				}
			}
		}

		// render matrix;
		for (var r = 0; r < size; r++) {
			for (var c = 0; c < size; c++) {
				if (newBoard[r][c]) {
					var piece = document.getElementById(r * 3 + c + 1)
					if (piece.childNodes.length > 0) { piece.firstChild.remove(); }
					var node = document.createElement('p');
					node.className = 'boxNum';
					node.setAttribute('style', "animation-name: fallIn; animation-duration: 2s; iteration-count: 1;");
					node.innerText = newBoard[r][c];
					boxes[r * 3 + c].appendChild(node);
				}
			}
		}

		rules.gameboard.board = newBoard;
	}

	addRotate () {
		if (!this.currentGravity) {
			this.rotation = !this.rotation;
			if (this.rotation) {
				document.getElementsByClassName('rotate')[0].innerText = 'Enabled';
			}else {
				document.getElementsByClassName('rotate')[0].innerText = 'Disabled';
			}
		} else {
			this.rotation = false;
		}
	}

	addGravityRotate () {
		rules.nextGravity = !rules.nextGravity;
		if (rules.nextGravity) {
			document.getElementById('grav').innerText = 'Enabled';
		} else {
			document.getElementById('grav').innerText = 'Disabled';
		}
	}

}

/*
************************************************
		Global scope Variables and functions 
************************************************
*/

class Rules extends Inputs {

	constructor () {
		super();
		this.currentPiece = 'X';
		this.ended = false;
		this.placed = 0;
		this.currentGravity = false;
		this.nextGravity = false;

		this.score = {
			X: 0,
			O: 0
		};

		this.names = {
			X: 'Player ',
			O: 'Player '
		};
		
		this.gameboard = new Board;
}

	changePiece (str) {
			if (str === 'X') {
				this.currentPiece = 'O';
			} else {
				this.currentPiece = 'X';
			}
		}

	resultName (str) {

		if (str.includes('-')) {
			return str.slice(0, str.length - 2)
		} else {
			return `${str} ${this.currentPiece}`
		}
	}
	
}

/*
************************************************
		gameBoard object and game state handling 
************************************************
*/

class Board extends Inputs{
	constructor() {
		super();
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
		}
	}

}








