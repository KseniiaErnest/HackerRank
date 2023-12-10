/* Little Bobby loves chocolate. He frequently goes to his favorite 5 & 10 store, Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate.
Function Description

Complete the chocolateFeast function in the editor below.

chocolateFeast has the following parameter(s):

int n: Bobby's initial amount of money
int c: the cost of a chocolate bar
int m: the number of wrappers he can turn in for a free bar
Returns

int: the number of chocolates Bobby can eat after taking full advantage of the promotion
Note: Little Bobby will always turn in his wrappers if he has enough to get a free chocolate. */

function chocolateFeast(n, c, m) {
  let totalChoco = 0;
  let wrappers = 0;
    
  // Initial buy
  const initialChoco = Math.floor(n / c);
  totalChoco += initialChoco;
  wrappers += initialChoco;
    
  // Loop to simulate the process
  while (wrappers >= m) {
    const additionalChoco = Math.floor(wrappers / m);
    
    //Update total choco and wrappers
    totalChoco += additionalChoco;
    wrappers = additionalChoco + (wrappers % m);
  }
  return totalChoco
  }

  // Refacor
  function chocolateFeast(n, c, m) {
    let totalChoco = Math.floor(n / c);
    let wrappers = totalChoco;
  
    while (wrappers >= m) {
      const additionalChoco = Math.floor(wrappers / m);
      
      totalChoco += additionalChoco;
      wrappers = additionalChoco + (wrappers % m);
    }
  
    return totalChoco;
  }