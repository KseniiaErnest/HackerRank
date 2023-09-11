function kangaroo(x1, v1, x2, v2) {
  if (v1 === v2) {
    if (x1 === x2) {
      return 'YES';
    } else {
      return 'NO';
    }
  } else {
    const n = (x2 - x1) / (v1 - v2);
    if (n >= 0 && Number.isInteger(n)) {
      return 'YES';
    } else {
      return 'NO';
    }
  }

}


// Check if the kangaroos have the same jump distance. If yes, check if they start at the same position.
// If kangaroo have different jump distance, calculate the number of jumps it would take for one kangaroo to catch up to the other one.
// Use the formula n = (x2 - x1) / (v1 - v2); If n non-negative integer, then it means that kangaroos will meat at some point, return YES, otherwise NO.
