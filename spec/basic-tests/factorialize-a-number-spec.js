describe( "Tests for factorialize-a-number", function(){

    var factorialize = require ('../../basic/factorialize-a-number').factorialize;

    it('factorialize(5) should return a number.', function() {
        expect(typeof factorialize(5)).toBe("number");
    });

    it(' factorialize(5) should return 120.', function() {
        expect(factorialize(5)).toBe(120);
    });

    it('factorialize(10) should return 3628800.', function() {
        expect(factorialize(10)).toBe(3628800);
    });

    it('factorialize(20) should return 2432902008176640000.', function() {
        expect(factorialize(20)).toBe(2432902008176640000);
    });

    it('factorialize(0) should return 1.', function() {
        expect(factorialize(0)).toBe(1);
    });



});