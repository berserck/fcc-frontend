describe( "Tests for ../../intermediate/diff-two-arrays.js", function(){
	var diffArray = require ('../../intermediate/diff-two-arrays').diffArray;
	it ('Array.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) should return true.', function() {
		expect(Array.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))).toEqual(true);
	});
	it ('diffArray([\'diorite\', \'andesite\', \'grass\', \'dirt\', \'pink wool\', \'dead shrub\'], [\'diorite\', \'andesite\', \'grass\', \'dirt\', \'dead shrub\']) should return [\'pink wool\'].', function() {
		expect(diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'])).toEqual(['pink wool']);
	});
	it ('diffArray([\'andesite\', \'grass\', \'dirt\', \'pink wool\', \'dead shrub\'], [\'diorite\', \'andesite\', \'grass\', \'dirt\', \'dead shrub\']).sort() should return [\'diorite\', \'pink wool\'].sort().', function() {
		expect(diffArray(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']).sort()).toEqual(['diorite', 'pink wool'].sort());
	});
	it ('diffArray([\'andesite\', \'grass\', \'dirt\', \'dead shrub\'], [\'andesite\', \'grass\', \'dirt\', \'dead shrub\']) should return [].', function() {
		expect(diffArray(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub'])).toEqual([]);
	});
	it ('diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4].', function() {
		expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);
	});
	it ('diffArray([1, \'calf\', 3, \'piglet\'], [1, \'calf\', 3, 4]) should return [\'piglet\', 4].', function() {
		expect(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4])).toEqual(['piglet', 4]);
	});
	it ('diffArray([], [\'snuffleupagus\', \'cookie monster\', \'elmo\']) should return [\'snuffleupagus\', \'cookie monster\', \'elmo\'].', function() {
		expect(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo'])).toEqual(['snuffleupagus', 'cookie monster', 'elmo']);
	});
	it ('diffArray([1, \'calf\', 3, \'piglet\'], [7, \'filly\']) should return [1, \'calf\', 3, \'piglet\', 7, \'filly\'].', function() {
		expect(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly'])).toEqual([1, 'calf', 3, 'piglet', 7, 'filly']);
	});
});
