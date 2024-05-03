// My solution O(n);
function equalizeArray(arr) {
  const objCount = {};
   
   for (let i = 0; i < arr.length; i++) {
     let key = arr[i];
     if (objCount[key] === undefined) {
       objCount[key] = 1;
     } else {
       objCount[key] += 1;
     }
   };
   
   let maxValue = 0;
   
   for (let key in objCount) {
     let value = objCount[key];
     if (value > maxValue) {
       maxValue = value;
     }
   }
   
   return arr.length - maxValue;
 }