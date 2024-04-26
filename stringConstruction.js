function stringConstruction(s) {
  const charSet = new Set();
  
  for (let char of s) {
    charSet.add(char);
  }
 
  return charSet.size;

}