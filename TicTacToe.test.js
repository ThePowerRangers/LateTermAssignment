//TicTacToe.test.js

const initializeBoard = require('./TicTacToe');

it("Should return the number 2 if board is initalized correct", () => {
	expect(initializeBoard()).toBe(2);
});

