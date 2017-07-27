describe("Testes for basic/return-largest-numbers-in-arrays.js", function(){
    var largestOfFour = require('../../basic/return-largest-numbers-in-arrays.js').largestOfFour;

    it("largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.", function(){
        var input = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
        expect(Array.isArray(largestOfFour(input))).toBe(true);
        });

    it("largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].", function(){
        var input = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
        expect(largestOfFour(input)).toEqual([27,5,39,1001]);
    })

    it("largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].", function(){
        var input = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]];
        expect(largestOfFour(input)).toEqual([9, 35, 97, 1000000]);
    })

});