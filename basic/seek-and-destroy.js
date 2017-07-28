// You will be provided with an initial array (the first argument in the
// destroyer function), followed by one or more arguments. Remove all elements
// from the initial array that are of the same value as these arguments.

function isEqualtoNumber(num){
  return function (el){
    return el !== num;
  };
}

function removeItems(arr, item){
  return arr.filter(isEqualtoNumber(item));
}

function destroyer() {
  var arr = [].slice.call(arguments);
  var array = arr[0];
  for(i = 1; i < arr.length; i++ ){
    array = removeItems(array, arr[i]);
  }
  return array;
}

//console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

exports.destroyer = destroyer;

// Tests:
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
