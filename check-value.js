module.exports.checkValue = function(board, row, col, value) {
  if (this.checkRow(board, row, value) &&
    this.checkCol(board, col, value) &&
    this.checkSquare(board, row, col, value)) {
    return true;
  } else {
    return false;
  }
};

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

module.exports.checkSquare = function(board, row, col, value) {
  const squareSize = 3;
  // Get origin of 3x3 square that holds a spot on the board.
  let squareOrigin = [];
  if (row >= 0 && row <= 2) {
    squareOrigin[0] = 0;
  } else if (row >= 3 && row <= 5) {
    squareOrigin[0] = 3;
  } else if (row >= 6 && row <= 8) {
    squareOrigin[0] = 6;
  }
  if (col >= 0 && col <= 2) {
    squareOrigin[1] = 0;
  } else if (col >= 3 && col <= 5) {
    squareOrigin[1] = 3;
  } else if (col >= 6 && col <= 8) {
    squareOrigin[1] = 6;
  }

  // Check values in 3x3 square to see if input value exists.
  for (let i = squareOrigin[0]; i < squareOrigin[0] + squareSize; i++) {
    for (let j = squareOrigin[1]; j < squareOrigin[1] + squareSize; j++) {
      if (board[i][j] == value) {
        return false;
      }
    }
  }

  return true;
};
