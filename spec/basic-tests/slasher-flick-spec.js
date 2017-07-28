describe("Tests for basic/slasher-flick.js", function () {
    var slasher = require("../../basic/slasher-flick").slasher;

    it( 'slasher([1, 2, 3], 2) should return [3].', function () {
        expect(slasher([1, 2, 3], 2)).toEqual([3]);
    });

    it( 'slasher([1, 2, 3], 0) should return [1, 2, 3].', function () {
        expect(slasher([1, 2, 3], 0)).toEqual([1, 2, 3]);
    });

    it( 'slasher([1, 2, 3], 9) should return [].', function () {
        expect(slasher([1, 2, 3], 9)).toEqual([]);
    });

    it( 'slasher([1, 2, 3], 4) should return [].', function () {
        expect(slasher([1, 2, 3], 4)).toEqual([]);
    });

    it( 'slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].', function () {
        expect(slasher(["burgers", "fries", "shake"], 1)).toEqual(["fries", "shake"]);
    });

    it( 'slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].', function () {
        expect(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)).toEqual(["cheese", 4]);
    });

});