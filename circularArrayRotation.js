/* John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the values of the elements at the given indices.
Function Description

Complete the circularArrayRotation function in the editor below.

circularArrayRotation has the following parameter(s):

int a[n]: the array to rotate
int k: the rotation count
int queries[1]: the indices to report
Returns

int[q]: the values in the rotated a as requested in m  */

function circularArrayRotation(a, k, queries) {
  let result = [];

  for (let i = 1; i <= k; i++) {
   let lastEl = a.pop();
   a.unshift(lastEl);
  };
  
  for (let j = 0; j < queries.length; j++) {
    result.push(a[queries[j]]);
  }  
    return result;
  };

  // or

  function circularArrayRotation(a, k, queries) {
    const result = [];
    const n = a.length;
  
    // Optimize the number of rotations
    k = k % n;
  
    // Perform circular rotation using array slicing
    const rotatedArray = a.slice(n - k).concat(a.slice(0, n - k));
  
    // Retrieve elements for queries
    for (let j = 0; j < queries.length; j++) {
      result.push(rotatedArray[queries[j]]);
    }
  
    return result;
  }