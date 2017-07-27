describe("Tests for palindrome", function(){
    var checker = require ('../../basic/check-for-palindromes');



    it('palindrome("eye") should return a boolean.', function() {
        expect(typeof checker.palindrome('eye')).toBe("boolean");
    });


    it('palindrome("eye") should return true.', function() {
        expect(checker.palindrome("eye")).toBe(true);
    });


    it('palindrome("_eye") should return true.', function() {
        expect(checker.palindrome("_eye")).toBe(true);
    });


    it('palindrome("race car") should return true.', function() {
        expect(checker.palindrome("race car")).toBe(true);
    });


    it('palindrome("not a palindrome") should return false.', function() {
        expect(checker.palindrome("not a palindrome")).toBe(false);
    });


    it('palindrome("A man, a plan, a canal. Panama") should return true.', function() {
        expect(checker.palindrome("A man, a plan, a canal. Panama")).toBe(true);
    });


    it('palindrome("never odd or even") should return true.', function() {
        expect(checker.palindrome("never odd or even")).toBe(true);
    });


    it('palindrome("nope") should return false.', function() {
        expect(checker.palindrome("nope")).toBe(false);
    });


    it('palindrome("almostomla") should return false.', function() {
        expect(checker.palindrome("almostomla")).toBe(false);
    });


    it('palindrome("My age is 0, 0 si ega ym.") should return true.', function() {
        expect(checker.palindrome("My age is 0, 0 si ega ym.")).toBe(true);
    });


    it('palindrome("1 eye for of 1 eye.") should return false.', function() {
        expect(checker.palindrome("1 eye for of 1 eye.")).toBe(false);
    });


    it('palindrome("0_0 (: /-\ :) 0-0") should return true.', function() {
        expect(checker.palindrome("0_0 (: /-\ :) 0-0")).toBe(true);
    });


    it('palindrome("five|\_/|four") should return false.', function() {
        expect(checker.palindrome("five|\_/|four")).toBe(false);
    });

});