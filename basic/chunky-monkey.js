// Write a function that splits an array (first argument) into groups the length
//  of size (second argument) and returns them as a two-dimensional array.

function splitArray( arr, size){
  var res=[];
  var stop = Math.min(size, arr.length);
  for( i = 0; i < stop; i++){
    res.push(arr.shift());
  }
  return res;
}


function chunkArrayInGroups(arr, size) {
  var res = [];
  while( arr.length > size){
    res.push(splitArray(arr, size));
    console.log("inside while:",res, arr);
  }
  res.push(arr);
  return res;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// Tests:
// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
