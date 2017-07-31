// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var code = str.charCodeAt(0);
  for(i=1; i < str.length; i++){
    if( ++code !==  str.charCodeAt(i)){
      return String.fromCharCode(code);
    }
  }
  return undefined;
}

//console.log(fearNotLetter("abce"));

exports.fearNotLetter = fearNotLetter;
// Tests:
// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("bcd") should return undefined.
// fearNotLetter("yz") should return undefined.
