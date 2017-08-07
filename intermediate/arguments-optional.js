// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//
//     For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
//     var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.

function addTogether() {
    if (!Number.isFinite(arguments[0])){
        return undefined;
    }
    if ( arguments.length == 2){
        if(Number.isFinite(arguments[1])) {
            return arguments[0] + arguments[1];
        } else {
            return undefined;
        }
    }

    var defaultval = arguments[0];
    function sum(val){
        if (!Number.isFinite(val)){
            return undefined;
        }
        return val + defaultval;
    }
    return sum;
}

addTogether(2,3);

exports.addTogether = addTogether;


// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.