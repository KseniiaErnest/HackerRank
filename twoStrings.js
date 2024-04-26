// My first solution
function twoStrings(s1, s2) {
    
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        return 'YES'
      } 
    }
  }
  return "NO";

}
/* 
The time complexity is determined by the nested loops that iterate over each character of both strings s1 and s2.
The outer loop (for (let i = 0; i < s1.length; i++)) runs m times, where m is the length of s1.
The inner loop (for (let j = 0; j < s2.length; j++)) runs n times, where n is the length of s2.
Therefore, the total number of iterations (comparisons) performed by the nested loops is m * n.
Time Complexity: O(m * n)
*/

// Set version
function twoStrings(s1, s2) {
  // 1) Create a set to store characters from s1;
    const charSet = new Set();
  // 2) Add each character from s1 to the set;
  for (let char of s1) {
    charSet.add(char);
  }
    
  // 3) Iterate through s2 to check for common characters;
    for (let char of s2) {
      if (charSet.has(char)) {
        return 'YES';
      }
    }
    
    return 'NO';
  }

  /*
  Populating the Set with Unique Characters from s1:
Iterating through s1 to add each character to a Set. This operation has a time complexity of O(m), where m is the length of s1.
Checking Common Characters with s2:
Iterating through s2 and using Set.has(char) to check for common characters. Each lookup operation (Set.has()) is on average O(1) time complexity due to the efficient hash-based lookup of Set.
Populating the Set: O(m)
Checking common characters with s2: O(n)
Time Complexity: O(m + n)
  */