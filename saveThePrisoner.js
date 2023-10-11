/* A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.

The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.
Function Description

Complete the saveThePrisoner function in the editor below. It should return an integer representing the chair number of the prisoner to warn.

saveThePrisoner has the following parameter(s):

int n: the number of prisoners
int m: the number of sweets
int s: the chair number to begin passing out sweets from
Returns

int: the chair number of the prisoner to warn */

// If numbers are not too big
function saveThePrisoner(n, m, s) {
  let currentChair = s;

  // Distribute sweets
  for (let i = 1; i <= m; i++) {
    // Wrap around to the beginning if current chair exceeds the total number of prisoners
    if (currentChair > n) {
      currentChair = 1;
    }

    // Move to the next chair
    currentChair++;
  }

  // The last prisoner to receive a sweet is the one to warn
  return currentChair - 1 === 0 ? n : currentChair - 1;

};

// or with big numbers
function saveThePrisoner(n, m, s) {
  // Adjust for 0-based indexing
  let currentChair = (s - 1 + m - 1) % n;

  // Adjust back to 1-based indexing
  return currentChair + 1 === 0 ? n : currentChair + 1;
}
