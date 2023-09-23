/* There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
Sample Input

STDIN                       Function
-----                       --------
9                           n = 9
10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

Sample Output
3 */

function sockMerchant(n, ar) {
  const count = {};
  let pairsNum = 0;
    
  for (let sock of ar) {
    if (count[sock] === undefined) {
      count[sock] = 1;
    } else {
      count[sock] += 1;
    }
    
  };
    
   for (let num in count) {
    pairsNum += Math.floor(count[num] / 2);
   }
    
    return pairsNum;
  
  }
