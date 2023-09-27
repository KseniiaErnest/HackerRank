/* An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. 
Function Description

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path
Returns

int: the number of valleys traversed
Sample Input

8
UDDDUDUU
Sample Output

1
Explanation

If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

_/\      _
   \    /
    \/\/
The hiker enters and leaves one valley.
*/

function countingValleys(steps, path) {
  let currentAl = 0;
  let countV = 0;
   
   for (let i = 0; i < path.length; i++) {
     if (path[i] === 'U') {
       currentAl++;
     } else if (path[i] === 'D') {
      currentAl--;
   }
    
  if (currentAl === 0 && path[i] === 'U') {
    countV++;
  }
  }
    return countV;
  }

  //currentAltitude: This variable keeps track of the hiker's current altitude. It starts at sea level, so it's initialized to 0.
  //valleysCount: This variable keeps track of the number of valleys traversed. It starts at 0.
  // Loop through the path string: check whether it's an 'U' (uphill) or 'D' (downhill) step.
  //If it's an 'U' step, increase the currentAltitude by 1, indicating that the hiker is going uphill.
  //If it's a 'D' step, decrease the currentAltitude by 1, indicating that the hiker is going downhill.
  // After each step, check whether the currentAltitude has returned to sea level (altitude = 0) and whether the current step is an 'U' step. This condition signifies that the hiker has just stepped up to sea level, which means they have exited a valley.
/* The key idea here is that a valley starts with a step down ('D') from sea level and ends with a step up ('U') to sea level. By tracking the current altitude and looking for sea level crossings after descending (going downhill), we can accurately count the number of valleys. */