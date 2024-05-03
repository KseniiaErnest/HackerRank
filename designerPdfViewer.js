// My soltion; time complexity: O(n)
function designerPdfViewer(h, word) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let heightsArr = [];

for (let i = 0; i < word.length; i++) {
 let index = alphabet.indexOf(word[i]);
 heightsArr.push(h[index]);
};

const tallest = Math.max(...heightsArr);

return tallest * word.length;

}

// Solution #2
function designerPdfViewer(h, word) {
  // Initialize variable to store maximum height
  let maxHeight = 0;

  // Iterate through each character in the word
  for (let i = 0; i < word.length; i++) {
      // Get Unicode value of the current character
      let charCode = word.charCodeAt(i);
    console.log(charCode);
      
      // Calculate the index relative to 'a' (Unicode 97)
      let index = charCode - 97;
    console.log(index);

      // Update maxHeight if current character's height is greater
      if (h[index] > maxHeight) {
          maxHeight = h[index];
      }
  }

  // Calculate area (height * length of word)
  let area = maxHeight * word.length;

  // Return the calculated area
  return area;
}