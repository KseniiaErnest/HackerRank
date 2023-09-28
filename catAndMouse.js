/* Two cats and a mouse are at various positions on a line. You will be given their starting positions. 
Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.
You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C. Complete the function CatAndMouse to return the appropriate answer to each query, which will be printed on a new line. */


function catAndMouse(x, y, z) {
  const differenceA = Math.abs(z - x);
  const differenceB = Math.abs(z - y);
    
  if (differenceA < differenceB) {
    return 'Cat A';
  } else if (differenceB < differenceA) {
    return 'Cat B';
  } else {
    return 'Mouse C'
  }
  
  }

  function catAndMouse(x, y, z) {
    const differenceA = Math.abs(z - x);
    const differenceB = Math.abs(z - y);
  
    return differenceA < differenceB
      ? 'Cat A'
      : differenceB < differenceA
      ? 'Cat B'
      : 'Mouse C';
  }