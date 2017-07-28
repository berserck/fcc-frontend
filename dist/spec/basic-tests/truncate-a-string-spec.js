'use strict';

describe("Tests for basic/truncate-a-string.js", function () {

    var truncateString = require('../../basic/truncate-a-string').truncateString;

    it('truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".', function () {
        expect(truncateString("A-tisket a-tasket A green and yellow basket", 11)).toBe("A-tisket...");
    });
    it('truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".', function () {
        expect(truncateString("Peter Piper picked a peck of pickled peppers", 14)).toBe("Peter Piper...");
    });
    it('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".', function () {
        expect(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)).toBe("A-tisket a-tasket A green and yellow basket");
    });
    it('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".', function () {
        expect(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)).toBe("A-tisket a-tasket A green and yellow basket");
    });
    it('truncateString("A-", 1) should return "A...".', function () {
        expect(truncateString("A-", 1)).toBe("A...");
    });
    it('truncateString("Absolutely Longer", 2) should return "Ab...".', function () {
        expect(truncateString("Absolutely Longer", 2)).toBe("Ab...");
    });
});
//# sourceMappingURL=truncate-a-string-spec.js.map