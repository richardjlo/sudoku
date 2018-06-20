'use strict';

const Chai = require('chai');
const expect = Chai.expect;
const checkValue = require('./check-value.js');

describe('checkValue', function() {
    it('should exist', function() {
        expect(checkValue).to.not.be.undefined;
    });
});
