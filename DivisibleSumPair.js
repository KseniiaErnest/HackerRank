/* 
Given an array of integers and a positive integer k , determine the number of (i, j)  pairs where i < j and ar[i]  + ar[j] is divisible by k.
unction Description

Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):

int n: the length of array ar
int ar[n]: an array of integers
int k: the integer divisor
Returns
- int: the number of pairs 
*/


function divisibleSumPairs(n, k, ar) {
  let result = 0;
    
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        result++;
      }
    }
  }
   return result;
  
  }