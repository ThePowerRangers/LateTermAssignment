//TicTacToe.js
function initializeBoard(){

	var board = [];

	for(i = 0; i < 9; i++){
		board[i] = parseInt(i);
	}
	return board[2];
}

module.exports = initializeBoard;