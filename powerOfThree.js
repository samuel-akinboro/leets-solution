/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.
*/

var isPowerOfThree = function(n) {
  const shouldContinue = n % 3;
  const dividedByThree = n / 3
  
  if (n !== 0) {
    if (n === 1){
      return true
    }
    if (shouldContinue === 0) {
      if (dividedByThree < 1) return false
      if (dividedByThree === 1) {
        return true
      }
      if(dividedByThree > 1){
        return isPowerOfThree(dividedByThree)
      }
    }
  }
  
  return false
};

console.log('final->', isPowerOfThree(45));