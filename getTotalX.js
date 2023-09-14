/* There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
Sample Input

2 3
2 4
16 32 96
Sample Output

3
Explanation

2 and 4 divide evenly into 4, 8, 12 and 16.
4, 8 and 16 divide evenly into 16, 32, 96.

4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.

*/

function getTotalX(a, b) {
  let count = 0
  
  for (let element = 1; element <= 100; element++) {
    
    // Check Condition 1: Element is divisible by all elements in array 'a'
    let isDivisibleByA = true;
    
    for (let i = 0; i < a.length; i++) {
      if (element % a[i] !== 0) {
        isDivisibleByA = false;
        break; // If not divisible by any 'a' element, move to the next 
      }
    };
    
    // Check Condition 2: Element is a factor of all elements in array 'b'
    let isFactorOfB = true;
    
    for (let j = 0; j < b.length; j++) {
      if (b[j] % element !== 0) {
        isFactorOfB = false;
        break; // If not a factor of any 'b' element, move to the next
      }
    };
    
     // If both conditions are met, increment the count
    if (isDivisibleByA && isFactorOfB) {
      count++;
    }
  }
    
    return count;
  
  }
