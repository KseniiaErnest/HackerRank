function gameOfThrones(s) {
  const charCount = {};

for (let i = 0; i < s.length; i++) {
  let char = s[i];
  if (charCount[char] === undefined) {
    charCount[char] = 1;
  } else {
    charCount[char] += 1;
  }
}

let oddFrequency = 0;

for (let key in charCount) {
if (charCount[key] % 2 !== 0) {
  oddFrequency++;
}
};

if (s.length % 2 === 0) {
if (oddFrequency === 0) {
    return 'YES';
    } else {
  return 'NO';
}
}  else {
if (oddFrequency <= 1) {
  return 'YES';
} else {
  return 'NO';
}
}

}