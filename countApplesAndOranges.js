function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesPosition = [];
  const orangesPosition = [];
  let resultA = 0;
  let resultB = 0;
    
  for (let i = 0; i < apples.length; i++) {
    applesPosition.push(a + apples[i]);
  }
    
  for (let i = 0; i < oranges.length; i++) {
    orangesPosition.push(b + oranges[i]);
  }
    
  for (let i = 0; i < applesPosition.length; i++) {
    if (applesPosition[i] >= s && applesPosition[i] <= t) {
      resultA++;
    }
  }
    
  for (let i = 0; i < orangesPosition.length; i++) {
    if (orangesPosition[i] >= s && orangesPosition[i] <= t) {
      resultB++;
    }
  }
    
  console.log(resultA);
  console.log(resultB);
  
  }