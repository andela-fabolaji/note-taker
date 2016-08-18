var sum = require('../sum');
var expect = require('chai').expect;

describe('The sum function', function(){
    it('Should not accept strings', function(){
        expect(sum('one', 'two')).to.equal('Strings are not valid input');
    });

    it('Should return the sum of a and b', function(){
        expect(sum(1, 2)).to.equal(3);
    });
});