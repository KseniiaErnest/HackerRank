/* Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.
Function Description

Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

bonAppetit has the following parameter(s):

bill: an array of integers representing the cost of each item ordered
k: an integer representing the zero-based index of the item Anna doesn't eat
b: the amount of money that Anna contributed to the bill
Sample Input 0

4 1
3 10 2 9
12
Sample Output 0

5 */

function bonAppetit(bill, k, b) {
  const bCharged = bill.reduce((acc, price) => acc + price, 0) / 2;
  // const bActual = bill.filter(num => num !== bill[k]).reduce((acc, price) => acc + price, 0) / 2;
const bActual = (bill.reduce((acc, price) => acc + price, 0) - bill[k]) / 2;

  
  if (bActual === b) {
    console.log('Bon Appetit')
  } else {
    console.log(bCharged - bActual);
  }
  
   
 }

 // or

 function bonAppetit(bill, k, b) {
  const bCharged = bill.reduce((acc, price) => acc + price, 0) / 2;
  // const bActual = bill.filter(num => num !== bill[k]).reduce((acc, price) => acc + price, 0) / 2;
  const bActual = (bill.reduce((acc, price) => acc + price, 0) - bill[k]) / 2;
  
 const result = (bActual === b) ? console.log('Bon Appetit') : console.log(bCharged - bActual);
  
   
 }