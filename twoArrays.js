// Need to permute them into some A' and B' such that A'[i] + B'[i] >= k;
function twoArrays(k, A, B) {
  const arr = [];
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    const result = A.every((a, i) => a + B[i] >= k);
  
  return result ? 'YES' : 'NO';
}
