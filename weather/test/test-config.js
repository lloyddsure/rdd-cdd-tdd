var assert = require('assert'),
    config = require('./../lib/config');
var expect = require("chai").expect;


var obj = {
    args :"",
    units :"",
    ip :""
  };

 var myConfig = config('toto', 'tata');
  
  
describe('Config', function () {
    it('has 3 props',function(){
		expect(myConfig.args).to.exist;
		expect(myConfig.units).to.exist;
		expect(myConfig.ip).to.exist;
	});


    it('after construction, 2 props are populated',function()
	{
		var number_of_null = 0;
		if(myConfig.args == null)
			number_of_null++;
		if(myConfig.units == null)
			number_of_null++;
		if(myConfig.ip == null)
			number_of_null++;
		expect(number_of_null > 1).to.be.false;
	});

    it('has correct key types', function(){
		expect(myConfig.units).to.equal('toto');
		expect(myConfig.ip).to.equal('tata');
	})
});
