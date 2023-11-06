/* ou have two strings of lowercase English letters. You can perform two types of operations on the first string:

Append a lowercase English letter to the end of the string.
Delete the last character of the string. Performing this operation on an empty string results in an empty string.
Given an integer, k, and two strings,  s and t , determine whether or not you can convert s to t  by performing exactly k of the above operations on . If it's possible, print Yes. Otherwise, print No. */

// Solution 1 (all test cases passed)
function appendAndDelete(s, t, k) {

  if (Math.abs(s.length - t.length) > k) {
    return 'No';
  }

  let commonPartLength = 0;
  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] === t[i]) {
      commonPartLength++;
    } else {
      break;
    }
  }

  let requiredOperations = s.length - commonPartLength + t.length - commonPartLength;

  if ((requiredOperations <= k && (k - requiredOperations) % 2 === 0) || k >= s.length + t.length) {
    return 'Yes';
  } else {
    return 'No';
  }
}

/*
1. Checking for special cases: calculate the abs difference in length between s and t, and if the difference in greater than k, then it is imposible to covert s to t.
 if (Math.abs(s.length - t.length) > k) {
    return 'No';
  }

  2. Find common part length: loop throught the characters of both strings up to the lenth of the shorter one. It finds the common prefix of the two strings by comparing characters at each position.
  If the characters are equal, it increments commonPrefixLength. If a mismatch is found, the loop breaks.
  let commonPartLength = 0;
  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] === t[i]) {
      commonPartLength++;
    } else {
      break;
    }
  }

  3. Calculate the required operations: calculate the total number of operations required to convert string s to string t.
   let requiredOperations = s.length - commonPartLength + t.length - commonPartLength;

4. Check if conversion is possible: 
- If requiredOperations is less than or equal to k and the remaining operations (k - requiredOperations) is even, it's possible. The even check is to ensure that the remaining operations can be balanced between append and delete operations.
- If k is greater than or equal to the total length of both strings, it's also possible because you can delete characters from a longer string or append characters to an empty string.
*/

// My initial solution that does not pass all test cases
function appendAndDelete(s, t, k) {
  let strS = '';
  let strT = '';
    
  for (let i = 0; i < s.length; i++) {
  if (s[i] !== t[i]) {
    strS = s.slice(i);
    strT = t.slice(i);
    break;
   }
  }  
    
    
    const requiredOperations = strS.length + strT.length;
  
    if ((requiredOperations <= k && (k - requiredOperations) % 2 === 0) || k >= s.length + t.length) {
      return 'Yes';
    } else {
      return 'No';
    }
  
  }