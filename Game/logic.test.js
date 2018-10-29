const logic = require('./logic');

test("getScore should return 0 for both score X and O", () => {
  expect(playerXWins).toBe(0);
  expect(playerOWins).toBe(0);
});
