describe( "Tests for basic/repeat-a-string-repeat-a-string.js", function(){

    var repeatStringNumTimes = require ('../../basic/repeat-a-string-repeat-a-string').repeatStringNumTimes;

    it('repeatStringNumTimes("*", 3) should return "***".', function() {
        expect(repeatStringNumTimes("*", 3)).toBe("***");
    });

    it('repeatStringNumTimes("abc", 3) should return "abcabcabc".', function() {
        expect(repeatStringNumTimes("abc", 3)).toBe("abcabcabc");
    });

    it('repeatStringNumTimes("abc", 4) should return "abcabcabcabc".', function() {
        expect(repeatStringNumTimes("abc", 4)).toBe("abcabcabcabc");
    });

    it('repeatStringNumTimes("abc", 1) should return "abc".', function() {
        expect(repeatStringNumTimes("abc", 1)).toBe("abc");
    });

    it('repeatStringNumTimes("*", 8) should return "********".', function() {
        expect(repeatStringNumTimes("*", 8)).toBe("********");
    });

    it('repeatStringNumTimes("*", 3) should return "***".', function() {
        expect(repeatStringNumTimes("abc", -2)).toBe("");
    });


});