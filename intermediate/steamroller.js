// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    var result = arr.reduce(function(a,b){
        if ( Array.isArray(b)){
           b = steamrollArray(b);
        }
        return a.concat(b);
    },[]);
    return result;
}

//console.log(steamrollArray([1, [2], [3, [[4]]]]));

exports.steamrollArray = steamrollArray;

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].