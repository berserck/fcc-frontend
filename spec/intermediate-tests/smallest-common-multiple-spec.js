// File generated by fcc-tests-generator

describe( "Tests for ../../intermediate/smallest-common-multiple.js", function(){
	var smallestCommons = require ('../../intermediate/smallest-common-multiple').smallestCommons;
	it ('typeof smallestCommons([1, 5]) should return \'number\'.', function() {
		expect(typeof smallestCommons([1, 5])).toBe('number');
	});
	it ('smallestCommons([1, 5]) should return 60.', function() {
		expect(smallestCommons([1, 5])).toBe(60);
	});
	it ('smallestCommons([5, 1]) should return 60.', function() {
		expect(smallestCommons([5, 1])).toBe(60);
	});
	it ('smallestCommons([1, 13]) should return 360360.', function() {
		expect(smallestCommons([1, 13])).toBe(360360);
	});
	it ('smallestCommons([23, 18]) should return 6056820.', function() {
		expect(smallestCommons([23, 18])).toBe(6056820);
	});
});
