function pangrams(s) {
  const alpabet = 'abcdefghijklmnopqrstuvwxyz';
  const sArr = s.toLowerCase().split('');
   
  for (let i = 0; i < alpabet.length; i++) {
    let char = alpabet[i];
    
    if (!sArr.includes(char)) {
      return 'not pangram';
    }
  }
 return 'pangram'
 }