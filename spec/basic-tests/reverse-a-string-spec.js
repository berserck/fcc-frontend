describe("Tests for basic/reverse-a-string.js", function(){
    var reverseString = require("../../basic/reverse-a-string").reverseString;
    it('reverseString("hello") should return a string.', function(){
        expect(typeof reverseString("hello")).toBe("string");
    });

    it('reverseString("hello") should become "olleh".', function () {
       expect(reverseString("hello")).toBe("olleh") ;
    });

    it('reverseString("Howdy") should become "ydwoH".', function () {
        expect(reverseString("Howdy")).toBe("ydwoH") ;
    });


    it('reverseString("Greetings from Earth") should return "htraE morf sgniteerG".', function () {
        expect(reverseString("Greetings from Earth")).toBe("htraE morf sgniteerG") ;
    });

});