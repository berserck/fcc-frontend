// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.

function findLongestWord(str) {
  var words = str.split(' ');
  var maxLenght = 0;
  var longestWord = '';
  for( var i in words){
    if( words[i].length > maxLenght){
      maxLenght = words[i].length;
      longestWord = words[i];
    }
  }
  return maxLenght;
}

//console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


exports.findLongestWord = findLongestWord;
// Tests:
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
