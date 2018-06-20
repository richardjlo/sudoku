'use strict';

const expect = require('chai').expect;

describe('check-value', function() {
    it('should exist', function() {
        const checkValue = require('./check-value.js');
        expect(checkValue).to.not.be.undefined;
    });
});
