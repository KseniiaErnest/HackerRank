function howManyGames(p, d, m, s) { 
  if (s < p) return 0;
  if (p <= m) return Math.floor(s / p);
  const arr = [];
  let current = p;
  
while (current >= m) {
  arr.push(current);
  current = current - d;
}
  
  console.log(arr);
 
  const sum = arr.reduce((a, b) => a + b);
 if (sum > s) return 1;
  if (sum === s) return arr.length;
  
 const diff = Math.floor((s - sum) / m); 
  
 for (let i = 0; i < diff; i++) {
   arr.push(m);
 }
  
  return arr.length
  
  
}
