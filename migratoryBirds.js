/* 
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
Function Description

Complete the migratoryBirds function in the editor below.

migratoryBirds has the following parameter(s):

int arr[n]: the types of birds sighted
Returns

int: the lowest type id of the most frequently sighted birds
*/

function migratoryBirds(arr) {
  const count = {};
    
   for (let num of arr) {
     if (count[num] === undefined) {
       count[num] = 1;
     } else {
       count[num] +=1;
     }
   };
  
    
   let maxCount = 0;
   let mostFr = [];
   
  for (let num in count) {
    if (count[num] > maxCount) {
      maxCount = count[num];
      mostFr = [parseInt(num)];
    } else if (count[num] === maxCount) {
      mostFr.push(parseInt(num));
    }
  }
    
    return Math.min(...mostFr);
  
  }

  // First, we need to count how many times each of id's types are there by using hash map.
  // Then we declare max count variable and most frequent types array.
  // We iterate over object count properties.
  // Inside the loop, num represents the current bird type id being examined. === the key
  // First if statement: if the value of the current key is greater than max count, then we assign max count to the value of the current key, and
  // we set mostFr array to an array that contains current key (num). We use parseInt to turn num from string to number.
  // The second if statement: if the value of the current key is equal to the value of maxCount, then we push the key (num) to the mostFr array.
  // After we are done with iteration over the object, we need to find min value in an mostFr using metthod Math.min()