// File generated by fcc-tests-generator

describe( "Tests for ../../intermediate/steamroller.js", function(){
	var steamrollArray = require ('../../intermediate/steamroller').steamrollArray;
	it ('steamrollArray([[[\'a\']], [[\'b\']]]) should return [\'a\', \'b\'].', function() {
		expect(steamrollArray([[['a']], [['b']]])).toEqual(['a', 'b']);
	});
	it ('steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].', function() {
		expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
	});
	it ('steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].', function() {
		expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
	});
	it ('steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].', function() {
		expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
	});
});
