var assert = require('assert'),
    format = require('./../lib/format');
var expect = require("chai").expect;


describe('format', function () {
    it('is a constructor of the Format object',function(){
		expect(format.Format).to.exist;
	})
});
