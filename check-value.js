module.exports.checkRow = function(board, row, value) {
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] == value) {
      return false;
    }
  }
  return true;
};

module.exports.checkCol = function(board, col, value) {
  for (let i = 0; i < board[0].length; i++) {
    if (board[i][col] == value) {
      return false;
    }
  }
  return true;
};
