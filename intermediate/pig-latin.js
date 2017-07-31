// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster) of an English word,
// moves it to the end of the word and suffixes an "ay".
//
// If a word begins with a vowel you just add "way" to the end.
//
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  if(/^[aeiou]/i.test(str)){
    return str+'way';
  }
  return str.replace(/([^aeiou]+)([aeiou])([a-zA-Z]+)/,'$2$3$1ay');
}

translatePigLatin("consonant");

exports.translatePigLatin = translatePigLatin;
// Tests:
// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
