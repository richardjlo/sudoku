module.exports.checkRow = function(board, row, value) {
  for (let i = 0; i < board[row].length; i++) {
    if (board[row][i] == value) {
      return false;
    }
  }
  return true;
};
