function funnyString(s) {

  const sArr = Array.from(s).map((el) => el.charCodeAt());
  const sReverseArr =  Array.from(s).reverse().map((el) => el.charCodeAt());
    
  const defferenceS = sArr.reduce((acc, val, index) => {
    if (index < sArr.length - 1) {
      const absDiff = Math.abs(val - sArr[index + 1]);
      acc.push(absDiff);
    }
    return acc;
  }, []);
    
  const defferenceSreverse = sReverseArr.reduce((acc, val, index) => {
    if (index < sReverseArr.length - 1) {
      const absDiff = Math.abs(val - sReverseArr[index + 1]);
      acc.push(absDiff);
    }
    return acc;
  }, []);
    
  
   if (JSON.stringify(defferenceS) === JSON.stringify(defferenceSreverse)) {
     return 'Funny'
   } else {
     return 'Not Funny'
   }
  
  }

  // Refactor
  function funnyString(s) {
    function calculateDifferences(arr) {
      const differences = [];
  
      for (let i = 0; i < arr.length - 1; i++) {
        differences.push(Math.abs(arr[i] - arr[i + 1]));
      }
  
      return differences;
    }
  
    const sArr = Array.from(s).map((el) => el.charCodeAt());
    const sReverseArr = Array.from(s).reverse().map((el) => el.charCodeAt());
  
    const differenceS = calculateDifferences(sArr);
    const differenceSreverse = calculateDifferences(sReverseArr);
  
    return JSON.stringify(differenceS) === JSON.stringify(differenceSreverse) ? 'Funny' : 'Not Funny';
  }