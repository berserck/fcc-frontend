'use strict';

describe("Tests for basic/where-do-i-belong.js", function () {
    var getIndexToIns = require('../../basic/where-do-i-belong').getIndexToIns;

    it('getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.', function () {
        expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3);
    });
    it('getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.', function () {
        expect(getIndexToIns([10, 20, 30, 40, 50], 30)).toBe(2);
    });
    it('getIndexToIns([40, 60], 50) should return 1.', function () {
        expect(getIndexToIns([40, 60], 50)).toBe(1);
    });
    it('getIndexToIns([3, 10, 5], 3) should return 0.', function () {
        expect(getIndexToIns([3, 10, 5], 3)).toBe(0);
    });
    it('getIndexToIns([5, 3, 20, 3], 5) should return 2.', function () {
        expect(getIndexToIns([5, 3, 20, 3], 5)).toBe(2);
    });
    it('getIndexToIns([2, 20, 10], 19) should return 2.', function () {
        expect(getIndexToIns([2, 20, 10], 19)).toBe(2);
    });
    it('getIndexToIns([2, 5, 10], 15) should return 3.', function () {
        expect(getIndexToIns([2, 5, 10], 15)).toBe(3);
    });
});
//# sourceMappingURL=where-do-i-belong-spec.js.map