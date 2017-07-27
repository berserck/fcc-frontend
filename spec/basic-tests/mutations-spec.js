describe( "Tests for mutations", function(){

    var mutation = require ('../../basic/mutations').mutation;

    it('mutation(["hello", "hey"]) should return false.', function() {
        expect(mutation(["hello", "hey"])).toBe(false);
    });

    it(' mutation(["hello", "Hello"]) should return true.', function() {
        expect(mutation(["hello", "Hello"])).toBe(true);
    });


    it('mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.', function() {
        expect(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).toBe(true);
    });

    it('mutation(["Mary", "Army"]) should return true.', function() {
        expect(mutation(["Mary", "Army"])).toBe(true);
    });

    it('mutation(["Mary", "Aarmy"]) should return true.', function() {
        expect(mutation(["Mary", "Aarmy"])).toBe(true);
    });

    it('mutation(["Alien", "line"]) should return true.', function() {
        expect(mutation(["Alien", "line"])).toBe(true);
    });

    it('mutation(["floor", "for"]) should return true.', function() {
        expect(mutation(["floor", "for"])).toBe(true);
    });

    it('mutation(["hello", "neo"]) should return false.', function() {
        expect(mutation(["hello", "neo"])).toBe(false);
    });

    it('mutation(["voodoo", "no"]) should return false.', function() {
        expect(mutation(["voodoo", "no"])).toBe(false);
    });




});