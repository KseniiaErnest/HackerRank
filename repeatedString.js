// Ver 1
function repeatedString(s, n) {
  const full = s.repeat(Math.floor(n / s.length)) + s.substring(0, n % s.length);
  
  let count = 0;
  
  for (let i = 0; i < full.length; i++) {
    if (full[i] === 'a') {
      count++;
    }
  }
  
  console.log(count);
  
  }

  // Ver 2
  function repeatedString(s, n) {
    const full = s.repeat(Math.floor(n / s.length)) + s.substring(0, n % s.length);
  
    let count = 0;
  
    for (const char of full) {
      if (char === 'a') {
        count++;
      }
    }
  
    console.log(count);
  }
  