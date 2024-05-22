function jumpingOnClouds(c) {
  // Declare and initialize count 
  let count = 0;
   // index of the cloud
  let i = 0;
   
   while (i < c.length - 1) {
    // Check if it is safe jump on the cloud
     if (c[i] === 0) {
      // cloud 2 steps ahead
       let nextNextCloud = c[i + 2];
       // if it is safe cloud, then check if the 2 steps ahead cloud is safe
       if (nextNextCloud === 0) {
        // If the 2 steps ahead cloud is safe, then we jump there by adding to i + 2 
         i += 2;
       } else {
        // if notm then just + 1
         i += 1;
       }

       // And we add count
       count++; 
     } else {
       // skipp the cloud
       continue;
     }
   }
 
   return count;
 }