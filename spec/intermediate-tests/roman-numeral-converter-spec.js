// File generated by fcc-tests-generator

describe( "Tests for ../../intermediate/roman-numeral-converter.js", function(){
	var convertToRoman = require ('../../intermediate/roman-numeral-converter').convertToRoman;
	it ('convertToRoman(2) should return \'II\'.', function() {
		expect(convertToRoman(2)).toBe('II');
	});
	it ('convertToRoman(3) should return \'III\'.', function() {
		expect(convertToRoman(3)).toBe('III');
	});
	it ('convertToRoman(4) should return \'IV\'.', function() {
		expect(convertToRoman(4)).toBe('IV');
	});
	it ('convertToRoman(5) should return \'V\'.', function() {
		expect(convertToRoman(5)).toBe('V');
	});
	it ('convertToRoman(9) should return \'IX\'.', function() {
		expect(convertToRoman(9)).toBe('IX');
	});
	it ('convertToRoman(12) should return \'XII\'.', function() {
		expect(convertToRoman(12)).toBe('XII');
	});
	it ('convertToRoman(16) should return \'XVI\'.', function() {
		expect(convertToRoman(16)).toBe('XVI');
	});
	it ('convertToRoman(29) should return \'XXIX\'.', function() {
		expect(convertToRoman(29)).toBe('XXIX');
	});
	it ('convertToRoman(44) should return \'XLIV\'.', function() {
		expect(convertToRoman(44)).toBe('XLIV');
	});
	it ('convertToRoman(45) should return \'XLV\'.', function() {
		expect(convertToRoman(45)).toBe('XLV');
	});
	it ('convertToRoman(68) should return \'LXVIII\'.', function() {
		expect(convertToRoman(68)).toBe('LXVIII');
	});
	it ('convertToRoman(83) should return \'LXXXIII\'.', function() {
		expect(convertToRoman(83)).toBe('LXXXIII');
	});
	it ('convertToRoman(97) should return \'XCVII\'.', function() {
		expect(convertToRoman(97)).toBe('XCVII');
	});
	it ('convertToRoman(99) should return \'XCIX\'.', function() {
		expect(convertToRoman(99)).toBe('XCIX');
	});
	it ('convertToRoman(500) should return \'D\'.', function() {
		expect(convertToRoman(500)).toBe('D');
	});
	it ('convertToRoman(501) should return \'DI\'.', function() {
		expect(convertToRoman(501)).toBe('DI');
	});
	it ('convertToRoman(649) should return \'DCXLIX\'.', function() {
		expect(convertToRoman(649)).toBe('DCXLIX');
	});
	it ('convertToRoman(798) should return \'DCCXCVIII\'.', function() {
		expect(convertToRoman(798)).toBe('DCCXCVIII');
	});
	it ('convertToRoman(891) should return \'DCCCXCI\'.', function() {
		expect(convertToRoman(891)).toBe('DCCCXCI');
	});
	it ('convertToRoman(1000) should return \'M\'.', function() {
		expect(convertToRoman(1000)).toBe('M');
	});
	it ('convertToRoman(1004) should return \'MIV\'.', function() {
		expect(convertToRoman(1004)).toBe('MIV');
	});
	it ('convertToRoman(1006) should return \'MVI\'.', function() {
		expect(convertToRoman(1006)).toBe('MVI');
	});
	it ('convertToRoman(1023) should return \'MXXIII\'.', function() {
		expect(convertToRoman(1023)).toBe('MXXIII');
	});
	it ('convertToRoman(2014) should return \'MMXIV\'.', function() {
		expect(convertToRoman(2014)).toBe('MMXIV');
	});
	it ('convertToRoman(3999) should return \'MMMCMXCIX\'.', function() {
		expect(convertToRoman(3999)).toBe('MMMCMXCIX');
	});
});
