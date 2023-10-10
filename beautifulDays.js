/* Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.Function Description

Complete the beautifulDays function in the editor below.

beautifulDays has the following parameter(s):

int i: the starting day number
int j: the ending day number
int k: the divisor
Returns
int: the number of beautiful days in the range
 */

function beautifulDays(i, j, k) {
  // Array that will hold original numbers
  const arrayNumbers = [];
 // Array that will hold reversed numbers
  const arrayNumReverse = [];
// The number of beautiful days in the range;
 let sum = 0;
 
 // For loop to get original numbers;
 for (let m = i; m <= j; m++) {
   arrayNumbers.push(m);
 };  
 
   // For loop to get reversed numbers;
 for (let n = 0; n < arrayNumbers.length; n++) {
  let reversedNum = parseFloat(arrayNumbers[n].toString().split('').reverse().join('')) * Math.sign(arrayNumbers[n]);
  arrayNumReverse.push(reversedNum);
 };
   
 // For loop to get beautiful days;
 for (let y = 0; y < arrayNumbers.length; y++) {
     let diff = Math.abs(arrayNumbers[y] - arrayNumReverse[y]);
     if (diff % k === 0) {
       sum++;
     }
   }
   
 return sum;
 
 }

 // or
 function beautifulDays(i, j, k) {
  let sum = 0;

  for (let day = i; day <= j; day++) {
    let reversedNum = parseInt(day.toString().split('').reverse().join(''));
    if (Math.abs(day - reversedNum) % k === 0) {
      sum++;
    }
  }

  return sum;
}