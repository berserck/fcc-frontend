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

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
