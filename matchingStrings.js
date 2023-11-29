/* 
There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of input strings. 
Return an array of the results.

Function Description
Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in stringList.
matchingStrings has the following parameters:
string stringList[n] - an array of strings to search
string queries[q] - an array of query strings


*/

function matchingStrings(stringList, queries) {
  let count = 0;
  let result = [];
    
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < stringList.length; j++) {
      if (queries[i] === stringList[j]) {
        count++;
      }
    
    }
    result.push(count);
    count = 0;
  }
  return result;
  }
  
  console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));