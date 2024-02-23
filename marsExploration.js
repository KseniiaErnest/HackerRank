function marsExploration(s) {
  const lengthS = s.length / 3;
 const expectedS = 'SOS'.repeat(lengthS);
 
 let count = 0;
 
 for (let i = 0; i < s.length; i++) {
   if (s[i] !== expectedS[i]) {
     count++;
   }
 }

 return count;

}