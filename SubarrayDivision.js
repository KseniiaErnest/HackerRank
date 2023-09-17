/* Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.
Function Description

Complete the birthday function in the editor below.

birthday has the following parameter(s):

int s[n]: the numbers on each of the squares of chocolate
int d: Ron's birth day
int m: Ron's birth month
Returns

int: the number of ways the bar can be divided
*/

function birthday(s, d, m) {
  // Initialize a variable to store the count of valid segments.
  let result = 0;
 
  // Iterate through the chocolate bar array.
   for (let i = 0; i <= s.length - m; i++) {
    // Initialize a variable to store the sum of the current segment.
     let segmentSum = 0;
     
     // Nested loop to calculate the sum of the current segment of length 'm'.
     for (let j = i; j < i + m; j++) {
       segmentSum += s[j];
       // Add the current element to the segmentSum.
     }
 
     // Check if the sum of the current segment is equal to the desired 'd'.
     if (segmentSum === d) {
       result++;
     }
   }
 
   return result;
 
 }

 /*
 -  s.length - m: 
  It ensures that we don't go out of bounds when trying to form segments of length m.
  To avoid going out of bounds, we need to make sure that when we start forming a segment at index i,
  we have enough remaining elements in the chocolate bar to form a segment of length m without exceeding the array bounds.
  For example, if s.length is 10 and m is 3, we don't want to start forming a segment at i = 8 because then we would only have 2 elements to form a segment of length 3,
  which is not possible.

- inner loop:
The inner loop (for (let j = i; j < i + m; j++)) is responsible for iterating over the elements within the current segment.
The starting index of this loop is i, which represents the current starting position of the segment, and it goes up to i + m.
In each iteration of the inner loop, you add the current element s[j] to segmentSum. 
For example, When i = 0, the inner loop iterates from j = 0 to j = 2.
So, it calculates segmentSum = s[0] + s[1] + s[2] = 1 + 2 + 3 = 6. Since segmentSum is not equal to d (7), this segment is not a valid one.
 */