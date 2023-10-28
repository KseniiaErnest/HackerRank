// Ver 1
function extraLongFactorials(n) {
  let result = 1;
    
  for (let i = n; i > 1; i--) {
    result *= i;
    
  }
  return result;
  }

// Ver 2
function extraLongFactorials(n) {
  let result = BigInt(1);
  
    for (let i = BigInt(n); i > BigInt(1); i--) {
      result *= i;
    }
  
    console.log(result.toString());
  
  }

  // Use of 'BigInt' to handle large factorial results.
  // Instead of returning the result, use console.log to output the result to the console.