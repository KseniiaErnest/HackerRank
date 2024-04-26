// My soltion - not good in terms of time complexity
function gemstones(arr) {
  const count = {};
  let gemstones = 0;
  const newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    let string = arr[i];
    let newString = '';
    for (let j = 0; j < string.length; j++) {
      if (!newString.includes(string[j])) {
       newString = newString.concat(string[j]);
      } 
    }
    newArr.push(newString);
  }
  

  for (let i = 0; i < newArr.length; i++) {
    let string = newArr[i];
    for (let j = 0; j < string.length; j++) {
     if (count[string[j]] === undefined) {
       count[string[j]] = 1;
     }  else {
       count[string[j]]++;
     }
    }
  }
  
  for (let mineral in count) {
    if (count[mineral] === arr.length) {
      gemstones++;
    }
  }
    
return gemstones;
}

