function birthday(s, d, m) {
  let count = 0;
 
 for (let i = 0; i < s.length; i++) {
   let subarr = s.slice(i, i + m);
   let sum = subarr.reduce((a, b) => a + b, 0);
   if (sum === d) {
     count++;
   }
 }
 return count;

}