// File generated by fcc-tests-generator

describe( "Tests for ../../intermediate/finders-keepers.js", function(){
	var findElement = require ('../../intermediate/finders-keepers').findElement;
	it ('findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.', function() {
		expect(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })).toBe(8);
	});
	it ('findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.', function() {
		expect(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })).toBe(undefined);
	});
});