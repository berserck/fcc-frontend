describe( "Tests for confirm-the-ending.js", function(){

    var confirmEnding = require ('../../basic/confirm-the-ending').confirmEnding;

    it('confirmEnding("Bastian", "n") should return true.', function() {
        expect(confirmEnding("Bastian", "n")).toBe(true);
    });

    it('confirmEnding("Connor", "n") should return false.', function() {
        expect(confirmEnding("Connor", "n")).toBe(false);
    });

    it('confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.', function() {
        expect(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")).toBe(false);
    });

    it('confirmEnding("He has to give me a new name", "name") should return true.', function() {
        expect(confirmEnding("He has to give me a new name", "name")).toBe(true);
    });

    it('confirmEnding("Open sesame", "same") should return true.', function() {
        expect(confirmEnding("Open sesame", "same")).toBe(true);
    });

    it('confirmEnding("Open sesame", "pen") should return false.', function() {
        expect(confirmEnding("Open sesame", "pen")).toBe(false);
    });

    it('confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.', function() {
        expect(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")).toBe(false);
    });

});