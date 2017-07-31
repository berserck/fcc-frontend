// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function lower(s){
  return s.toLowerCase();
}

function lowerToupperHiffen(s, match,a){
  return s[0]+'-'+match.toLowerCase();
}

function spinalCase(str) {
  var result = str.replace(/ /g, "-" ).replace(/_/g, "-" ).replace(/[a-z]([A-Z])/g,lowerToupperHiffen).replace(/([A-Z])/g,lower);
  return result;
}

//console.log(spinalCase('thisIsSpinalTap'));
exports.spinalCase = spinalCase;
// Tests:
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".
