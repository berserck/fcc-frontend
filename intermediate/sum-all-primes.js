// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two
// divisors, one and itself. For example, 2 is a prime number because it's only
// divisible by one and two.

// The provided number may not be a prime.

function newFilledArray(len, val) {
    var rv = new Array(len);
    while (--len >= 0) {
        rv[len] = val;
    }
    return rv;
}

function sumPrimes(num){
  var arr = newFilledArray(num+1, true);

  for ( i=2; i<= Math.sqrt(num); i++){
    if(arr[i]===true){
      for(j=i*i; j <= num; j += i){
        arr[j] = false;
      }
    }
  }
  var res = 0;
  for( i=2; i < arr.length; i++){
    if(arr[i]===true){
      res += i;
    }
  }
  return res;
}

//console.log(sumPrimes(10));

exports.sumPrimes = sumPrimes;
// Tests:
// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.
