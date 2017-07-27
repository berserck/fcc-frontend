// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function isFalsey(v){
  return v  ;
}

function bouncer(arr) {
  var res = arr.filter(isFalsey);
  return res;
}

//console.log(bouncer([7, "ate", "", false, 9]));

exports.bouncer = bouncer;

// Tests:
// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
