/* For a given array of transactions, group all of the transactions by item name.
Return an array of string where each string contains the item name followed by a space and the number of associated transactions.
Note: Sort the array descending by transactions count, then ascending alphabetically by item name for items with matching transaction counts.
Example: ['notebook', 'notebook', 'mouse', 'keyboard', 'mouse'] 
Output: ["mouse 2","notebook 2","keyboard 1"] 
*/


function groupTransactions(transactions) {
  const count = {};
   
   for (let word of transactions) {
     if (count[word] === undefined) {
       count[word] = 1;
     } else {
       count[word] += 1;
     }
   }
   
   const arr = Object.entries(count).sort((a, b) => {
     if (b[1] - a[1] !== 0) {
       return b[1] - a[1];
     }
     
     return a[0].localeCompare(b[0]);
   });
   
   return arr.map(([item, count]) => `${item} ${count}`);
   
  
 }

 // The first step: to create an object with an item and its count : hashmap. So the count will look like:
 /* 
 {
  "notebook": 2,
  "mouse": 2,
  "keyboard": 1
}
 */

// The second step: to convert count into an array by using JS method Object.entries(). As a result we get an array of arrays with [key, value];
/* 
[
["notebook",2], [object Array], ["mouse",2], ["keyboard",1]
]
*/

// The third step can be conbined with second step: while we transforming count into an array, we can execute some manupilations with that array.
// And that manupilation is to use sort() method to sort by descending by transactions count.
/*More details:
console.log(b, a):
["notebook",2] 
["mouse",2]

so by doing b[1] and a[1] we have access to its number;
Before a[0].localeCompare(b[0]); we have:
[
["notebook",2], ["mouse",2], ["keyboard",1]
]

The comparison of counts (b[1] - a[1] !== 0) is used to ensure that if two entries have the same count, then the sorting should be based on the alphabetical order of their keys (words in this case).
If the counts are not equal (b[1] - a[1] !== 0 is true), then the sorting is done based on the counts in descending order. However, if the counts are equal (b[1] - a[1] === 0), then the localeCompare is used to sort the entries alphabetically.
The key point is that the localeCompare part only comes into play when the counts are equal (b[1] - a[1] === 0). It ensures that, in the final sorted array, entries with equal counts are arranged in lexicographical (alphabetical) order.
*/
// The 4th step: to sort ascending alphabetically by item name for items with matching transaction counts. And we use method localeCompare();
// The 5th step: to use map method to iterate over the arr. Each entry of arr consist of two items: word and coont. So we deconstruct it into item and count. It then returns a string in the format ${item} ${count}.
// Longer way
/* 
arr.map((entry) => {
  const item = entry[0];
  const count = entry[1];
  return `${item} ${count}`;
})
 */