'use strict';

const Chai = require('chai');
const expect = Chai.expect;
const solver = require('./solver.js');

let board = [
  [0, 9, 0, 0, 0, 0, 0, 0, 6],
  [0, 0, 0, 9, 6, 0, 4, 8, 5],
  [0, 0, 0, 5, 8, 1, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 0, 0, 0],
  [5, 1, 7, 2, 0, 0, 9, 0, 0],
  [6, 0, 2, 0, 0, 0, 3, 7, 0],
  [1, 0, 0, 8, 0, 4, 0, 2, 0],
  [7, 0, 6, 0, 0, 0, 8, 1, 0],
  [3, 0, 0, 0, 9, 0, 0, 0, 0],
];

describe('#checkValue', function() {
  it('should exist', function() {
      expect(solver).to.not.be.undefined;
  });

  it('should check if value is valid', function() {
    let checkValue;

    // No match. Return true.
    checkValue = solver.checkValue(board, 2, 3, 7);
    expect(checkValue).to.be.true;

    // Match found. Return false.
    checkValue = solver.checkValue(board, 4, 3, 2);
    expect(checkValue).to.be.false;

    // Match found. Return false.
    checkValue = solver.checkValue(board, 6, 4, 9);
    expect(checkValue).to.be.false;

    // No match. Return true.
    checkValue = solver.checkValue(board, 3, 5, 7);
    expect(checkValue).to.be.true;
  });
});

describe('#checkRow', function() {
  it('should check that each value in the row ' +
    'does not equal the input value', function() {
    let checkRow;
    // No match. Return true.
    checkRow = solver.checkRow(board, 0, 2);
    expect(checkRow).to.be.true;
    // Match found. Return false.
    checkRow = solver.checkRow(board, 2, 8);
    expect(checkRow).to.be.false;
  });
});

describe('#checkCol', function() {
  it('should check that each value in the column ' +
    'does not equal the input value', function() {
      let checkCol;
      // No match. Return true.
      checkCol = solver.checkCol(board, 0, 8);
      expect(checkCol).to.be.true;
      // Match found. Return false.
      checkCol = solver.checkCol(board, 2, 4);
      expect(checkCol).to.be.false;
    });
});

describe('#checkSquare', function() {
  it('should check that each value in 3x3 square ' +
    'does not equal the input value', function() {
      let checkSquare;
      // No match. Return true.
      checkSquare = solver.checkSquare(board, 0, 0, 5);
      expect(checkSquare).to.be.true;

      // Match found. Return false.
      checkSquare = solver.checkSquare(board, 8, 3, 4);
      expect(checkSquare).to.be.false;

      // Match found. Return false.
      checkSquare = solver.checkSquare(board, 3, 4, 2);
      expect(checkSquare).to.be.false;
    });
});

  describe('#saveEmptyPositions', function() {
    it('should save the empty board positions into an array', function() {
      let emptyPositions;

      let expectedPositions = [
      [0, 0], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [1, 0], [1, 1],
      [1, 2], [1, 5], [2, 0], [2, 1], [2, 2], [2, 6], [2, 7], [2, 8], [3, 0],
      [3, 1], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [4, 4], [4, 5],
      [4, 7], [4, 8], [5, 1], [5, 3], [5, 4], [5, 5], [5, 8], [6, 1], [6, 2],
      [6, 4], [6, 6], [6, 8], [7, 1], [7, 3], [7, 4], [7, 5], [7, 8], [8, 1],
      [8, 2], [8, 3], [8, 5], [8, 6], [8, 7], [8, 8],
    ];

      // Cell is empty. Return true.
      emptyPositions = solver.saveEmptyPositions(board);
      expect(emptyPositions).to.have.lengthOf(51);
      expect(emptyPositions).to.eql(expectedPositions);
    });
  });
