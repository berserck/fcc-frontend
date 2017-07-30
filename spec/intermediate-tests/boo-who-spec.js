describe( "Tests for ../../intermediate/boo-who.js", function(){
	var booWho = require ('../../intermediate/boo-who').booWho;
	it ('booWho(true) should return true.', function() {
		expect(booWho(true)).toBe(true);
	});
	it ('booWho(false) should return true.', function() {
		expect(booWho(false)).toBe(true);
	});
	it ('booWho([1, 2, 3]) should return false.', function() {
		expect(booWho([1, 2, 3])).toBe(false);
	});
	it ('booWho([].slice) should return false.', function() {
		expect(booWho([].slice)).toBe(false);
	});
	it ('booWho({ \'a\': 1 }) should return false.', function() {
		expect(booWho({ 'a': 1 })).toBe(false);
	});
	it ('booWho(1) should return false.', function() {
		expect(booWho(1)).toBe(false);
	});
	it ('booWho(NaN) should return false.', function() {
		expect(booWho(NaN)).toBe(false);
	});
	it ('booWho(\'a\') should return false.', function() {
		expect(booWho('a')).toBe(false);
	});
	it ('booWho(\'true\') should return false.', function() {
		expect(booWho('true')).toBe(false);
	});
	it ('booWho(\'false\') should return false.', function() {
		expect(booWho('false')).toBe(false);
	});
});
