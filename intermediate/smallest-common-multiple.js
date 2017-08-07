//
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//
//     The range will be an array of two numbers that will not necessarily be in numerical order.
//
//     e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function gdc(a,b){
    if ( b === 0 ){
        return a;
    }
    return gdc(b, a%b);
}

function lcm(a,b){
    return a*b/gdc(a,b);
}

function smallestCommons(arr) {
    arr.sort();
    var result = arr[0];
    for (var i = arr[0]+1; i <= arr[1]; i++){
        result = lcm(result,i);
    }
    return result;
}


smallestCommons([1,5]);

exports.smallestCommons = smallestCommons;

// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.