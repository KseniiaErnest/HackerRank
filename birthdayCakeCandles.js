/* You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example


The maximum height candles are  units high. There are  of them, so return .

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights
Returns

int: the number of candles that are tallest
Input Format

The first line contains a single integer, , the size of .
The second line contains  space-separated integers, where each integer  describes the height of .

Constraints

Sample Input 0

4
3 2 1 3
Sample Output 0

2
Explanation 0

Candle heights are [3, 2, 1, 3] . The tallest candles are 3 units, and there are 2 of them.  */

function birthdayCakeCandles(candles) {
  const candlesNum = {};
  
  for (let i = 0; i < candles.length; i++) {
    if (candlesNum[candles[i]] === undefined) {
      candlesNum[candles[i]] = 1;
    } else {
      candlesNum[candles[i]] += 1;
    }
  };
    
  
  let arrayNum = Object.values(candlesNum);
  
  let number = 0;
  for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > number) {
      number = arrayNum[i]
    }
  };
    
     return number;
  
  };

// Create an object to count the occurrences of each candle height (hash map);
// After populating the candlesNum object, convert its values into an array using Object.values(candlesNum).
// Then initialize a variable number to 0 to keep track of the maximum count.
// Iterate through the arrayNum (which contains the counts of each height) and update the number variable if you find a count greater than the current number.

// Refactored code
function birthdayCakeCandles(candles) {
  const candlesNum = {};

  for (const height of candles) {
    candlesNum[height] = (candlesNum[height] || 0) + 1;
    // increments the count for the current height, initializing it to 0 if it doesn't exist in the object.
  }

  const counts = Object.values(candlesNum);
  const maxCount = Math.max(...counts);

  return maxCount;
}