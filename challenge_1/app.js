var currentPiece = 'X';
var ended = false;
var placed = 0;
var score = {
	X: 0,
	O: 0
}
var names = {
	X: 'X',
	O: 'O'
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

	// clicked (boxNum) {
	// 	if (!this.ended) {
	// 		let piece = document.getElementById(boxNum);
	// 		if (!piece.innerText) {
	// 			// add piece to box
	// 			piece.innerText = currentPiece;
	// 			this.updateBoard(boxNum);
	// 			this.changePiece(currentPiece);
	// 		}
	// 	}
	// }


}

// var resetBoard = (str = 'X') => {
// 	var oldBoard = gameBoard;
// 	gameBoard = new Board(str);
// 	// let boxes = document.getElementsByClassName('box');
// 	// for (var i = 0; i < boxes.length; i++) {
// 	// 	boxes[i].innerText = '';
// 	// };

// 	// this.ended = false;
// 	// // currentPiece = 'X';
// 	// this.changePiece(this.currentPiece);
// 	// this.board = [
// 	// 	[undefined, undefined, undefined],
// 	// 	[undefined, undefined, undefined],
// 	// 	[undefined, undefined, undefined]
// 	// ];
// 	// this.placed = 0;
// 	document.getElementById('result').innerText = 'Player ' + gameBoard.currentPiece + '\'s turn!';
// 	return obj;
// }


/*

var currentPiece = 'X';
var ended = false;
var placed = 0;
var score = {
	X: 0,
	O: 0
}

	var board = [
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
		[undefined, undefined, undefined]
	]

	var placePiece = (rowNum, boxNum) => {
		placed++;
		if (boxNum % 3 === 1) {
			board[rowNum][0] = currentPiece;
			checkBoard(rowNum, 0, currentPiece);
		} else if (boxNum % 3 === 2) {
			board[rowNum][1] = currentPiece;
			checkBoard(rowNum, 1, currentPiece);
		} else {
			board[rowNum][2] = currentPiece;
			checkBoard(rowNum, 2, currentPiece);
		}

	}

	var updateBoard = (boxNum) => {
		// update our matrix to show current state of board
		if (boxNum < 4) {
			placePiece(0, boxNum);
		} else if (boxNum < 7) {
			placePiece(1, boxNum);
		} else {
			placePiece(2, boxNum);
		}
	}

	var checkBoard = (row, col, piece) => {
		var solved = false
		// check out board for any correct solution.
		if (board[row].every(ele => ele === piece)) {
			solved = true;
		} else if (board[0][col] === piece && board[1][col] === piece && board[2][col] === piece) {
			solved = true;
		}

		if ((row === 0 && col === 0) || (row === 2 && col === 2)) {
			if (board[0][0] === piece && board[1][1] === piece && board[2][2] === piece) {
				solved = true;
			}
		} else if ((row === 2 && col === 0) || (row === 0 && col === 2)) {
			if (board[2][0] === piece && board[1][1] === piece && board[0][2] === piece) {
				solved = true;
			}
		}
		// if solution :
		//// add to correct score count
		//// update result div
		//// set game end to true
		//// 
		if (solved) {
			document.getElementById('result').innerText = `Player ${piece} Wins!`;
			ended = true;
			score[piece]++
			document.getElementById('X').innerText = score['X'];
			document.getElementById('O').innerText = score['O'];
		} else if (!solved && placed === 9) {
			document.getElementById('result').innerText = 'It\'s a Draw!';
		} else {
			let current = currentPiece;
			if (current === 'X') {
				document.getElementById('result').innerText = 'Player O\'s Turn!';
			} else {
				console.log('here')
				document.getElementById('result').innerText = 'Player X\'s Turn!';
			}
		}
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
				updateBoard(boxNum);
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
		board = [
			[undefined, undefined, undefined],
			[undefined, undefined, undefined],
			[undefined, undefined, undefined]
		];
		placed = 0;
		document.getElementById('result').innerText = `Player ${currentPiece}'s turn!`;
	}

	*/
