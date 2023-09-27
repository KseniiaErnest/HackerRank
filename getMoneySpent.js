/* A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1 .
Function Description

Complete the getMoneySpent function in the editor below.

getMoneySpent has the following parameter(s):

int keyboards[n]: the keyboard prices
int drives[m]: the drive prices
int b: the budget
Returns

int: the maximum that can be spent, or  if it is not possible to buy both items.

Sample Input 0

10 2 3
3 1
5 2 8
Sample Output 0

9
*/

function getMoneySpent(keyboards, drives, b) {
  let sums = [];

for (let i = 0; i < keyboards.length; i++) {
 for (let j = 0; j < drives.length; j++) {
   if (keyboards[i] + drives[j] <= b) {
     sums.push(keyboards[i] + drives[j]);
   }
 }
}

if (sums.length === 0) {
  return -1;
} else { 
return Math.max(...sums)
}

}

// or refactor

function getMoneySpent(keyboards, drives, b) {
  const affordableSums = keyboards.flatMap(keyboard => drives.map(drive => keyboard + drive)).filter(sum => sum <= b);
  
  if (affordableSums.length === 0) {
    return -1;
  }
  
  return Math.max(...affordableSums);
}