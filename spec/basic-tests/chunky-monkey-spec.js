describe( "Tests for chunky-monkey", function(){

    var chunk = require ('../../basic/chunky-monkey');

    it('chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].', function() {
        var expected = [["a", "b"], ["c", "d"]];
        expect(chunk.chunkArrayInGroups(["a", "b", "c", "d"], 2)).toEqual(expected);
    });

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].', function() {
        var expected = [[0, 1, 2], [3, 4, 5]];
        expect(chunk.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toEqual(expected);
    });

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]]', function() {
        var expected = [[0, 1], [2, 3], [4, 5]];
        expect(chunk.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).toEqual(expected);
    });

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].', function() {
        var expected = [[0, 1, 2, 3], [4, 5]];
        expect(chunk.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toEqual(expected);
    });

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].', function() {
        var expected = [[0, 1, 2], [3, 4, 5], [6]];
        expect(chunk.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).toEqual(expected);
    });

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].', function() {
        var expected = [[0, 1, 2, 3], [4, 5, 6, 7], [8]];
        expect(chunk.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual(expected);
    });


    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]', function() {
        var expected = [[0, 1], [2, 3], [4, 5], [6, 7], [8]];
        expect(chunk.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toEqual(expected);
    });



});