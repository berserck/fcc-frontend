//Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  var res = [];
  var f = function(max, val){
    return Math.max(max,val);
  };

  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i].reduce(f,0);
  }
  return arr;
}

//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

exports.largestOfFour = largestOfFour;
// Tests:
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
