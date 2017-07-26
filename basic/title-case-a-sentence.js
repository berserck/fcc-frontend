// Return the provided string with the first letter of each word capitalized.
//Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


function titleCase(str) {
  var words = str.split(' ');
  var res = words.map(function(w){ return w[0].toUpperCase() + w.substr(1,w.length).toLowerCase();});

  return res.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
