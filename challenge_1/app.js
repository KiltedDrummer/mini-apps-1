/*
************************************************
		Global scope Variables and functions 
************************************************
*/

var currentPiece = 'X';
var ended = false;
var placed = 0;
var score = {
	X: 0,
	O: 0
}
var names = {
	X: 'Player -',
	O: 'Player -'
}

var changePiece = (str) => {
		if (str === 'X') {
			currentPiece = 'O';
		} else {
			currentPiece = 'X';
		}
	}

var clicked = (boxNum) => {
	if (!ended) {
		var piece = document.getElementById(boxNum);
		if (!piece.innerText) {
			// add piece to box
			piece.innerText = currentPiece;
			gameboard.updateBoard(boxNum);
			changePiece(currentPiece);
		}
	}
}

var resetBoard = () => {
	var boxes = document.getElementsByClassName('box');
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].innerText = '';
	};

	ended = false;
	// currentPiece = 'X';
	changePiece(currentPiece);
	placed = 0;
	gameboard = new Board();
	document.getElementById('result').innerText = 'Player ' + currentPiece + '\'s turn!';
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
		placed++;
		if (boxNum % 3 === 1) {
			this.board[rowNum][0] = currentPiece;
			this.checkBoard(rowNum, 0, currentPiece);
		} else if (boxNum % 3 === 2) {
			this.board[rowNum][1] = currentPiece;
			this.checkBoard(rowNum, 1, currentPiece);
		} else {
			this.board[rowNum][2] = currentPiece;
			this.checkBoard(rowNum, 2, currentPiece);
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
			document.getElementById('result').innerText = `Player ${piece} Wins!`;
			ended = true;
			score[piece]++
			document.getElementById('X').innerText = score['X'];
			document.getElementById('O').innerText = score['O'];
		} else if (!solved && placed === 9) {
			document.getElementById('result').innerText = 'It\'s a Draw!';
		} else {
			if (currentPiece === 'X') {
				document.getElementById('result').innerText = 'Player O\'s Turn!';
			} else {
				document.getElementById('result').innerText = 'Player X\'s Turn!';
			}
		}
	}

}

/*
************************************************
		Setting Player Names 
************************************************
*/


var setName = () => {
	document.getElementById('xName').innerText = names.X;
	document.getElementById('oName').innerText = names.O;

}

var nameClicked = (str) => {
	names[str] = window.prompt('Player ' + str + '\'s Name');
	names[str] += ' -'
	setName();
}








