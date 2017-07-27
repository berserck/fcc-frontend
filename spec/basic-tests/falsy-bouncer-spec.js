describe( "Tests for caesers-cipher", function(){

    var bouncer = require ('../../basic/falsy-bouncer').bouncer;

    it('bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].', function() {
        var expected = [7, "ate", 9];
        expect(bouncer([7, "ate", "", false, 9])).toEqual(expected);
    });

    it('bouncer(["a", "b", "c"]) should return ["a", "b", "c"].', function() {
        var expected = ["a", "b", "c"];
        expect(bouncer(["a", "b", "c"])).toEqual(expected);
    });

    it('bouncer([false, null, 0, NaN, undefined, ""]) should return [].', function() {
        var expected = [];
        expect(bouncer([false, null, 0, NaN, undefined, ""])).toEqual(expected);
    });

    it('bouncer([1, null, NaN, 2, undefined]) should return [1, 2].', function() {
        var expected = [1, 2];
        expect(bouncer([1, null, NaN, 2, undefined])).toEqual(expected);
    });



});