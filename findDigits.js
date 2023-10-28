// Ver 1

function findDigits(n) {
  const newNum = n.toString().split('').map((num) => Number(num));
  
  let count = 0;
    
  for (let i = 0; i < newNum.length; i++) {
    if (n % newNum[i] === 0) {
      count++;
    }
  }
    
  return count;
  
  }

  // Ver 2
  function findDigits(n) {
    const digitArray = Array.from(String(n), Number);
  
    return digitArray.reduce((count, digit) => (n % digit === 0 ? count + 1 : count), 0);
  }

  /* String(n): This converts the number n to its string representation. For example, if n is 123, String(n) would result in the string "123".

Array.from(...): This creates a new array from an iterable or array-like object. In this case, the iterable is the string obtained from String(n).

Number: It is a function that can be used as a mapper function. When passed to Array.from, it converts each element of the array to a number.

So, combining all these parts:

String(n) converts the number to a string.
Array.from(...) converts the string to an array of characters.
Number is then applied to each character, converting it to a number. */