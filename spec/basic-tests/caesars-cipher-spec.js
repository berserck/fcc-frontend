describe( "Tests for caesers-cipher", function(){

    var cipher = require ('../../basic/caesars-cipher');

    it('rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"', function() {
        var secret = "SERR PBQR PNZC";
        var clearText = "FREE CODE CAMP";
        expect(cipher.rot13(secret)).toBe(clearText);
    });


    it('rot13("SERR CVMMN!") should decode to "FREE PIZZA!"', function() {
        var secret = "SERR CVMMN!";
        var clearText = "FREE PIZZA!";
        expect(cipher.rot13(secret)).toBe(clearText);
    });



    it('rot13("SERR YBIR?") should decode to "FREE LOVE?"', function() {
        var secret = "SERR YBIR?";
        var clearText = "FREE LOVE?";
        expect(cipher.rot13(secret)).toBe(clearText);
    });


    it('rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."', function() {
        var secret = "GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.";
        var clearText = "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.";
        expect(cipher.rot13(secret)).toBe(clearText);
    });

});