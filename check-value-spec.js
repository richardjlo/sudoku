'use strict';

const Chai = require('chai');
const expect = Chai.expect;
const checkValue = require('./check-value.js');

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

describe('checkValue', function() {
    it('should exist', function() {
        expect(checkValue).to.not.be.undefined;
    });

    it('should check that each value in the row ' +
      'does not equal the input value', function() {
      // No match. Return true.
      let checkRow = checkValue.checkRow(board, 0, 2);
      expect(checkRow).to.be.true;
      // Match found. Return false.
      checkRow = checkValue.checkRow(board, 2, 8);
      expect(checkRow).to.be.false;
    });
});
