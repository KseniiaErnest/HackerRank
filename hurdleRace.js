/* A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. 
There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. How many doses of the potion must the character take to be able to jump all of the hurdles.
If the character can already clear all of the hurdles, return 0.
Function Description

Complete the hurdleRace function in the editor below.

hurdleRace has the following parameter(s):

int k: the height the character can jump naturally
int height[n]: the heights of each hurdle
Returns

int: the minimum number of doses required, always 0 or more
 */

function hurdleRace(k, height) {
  let maxNum = height[0];
    
  for (let i = 1; i < height.length; i++) {
    if (height[i] > maxNum) {
      maxNum = height[i];
    }
  };
    
  if (k > maxNum) {
    return 0;
  } else {
    return maxNum - k;
  }
  
  };

  function hurdleRace(k, height) {

    const sortedAr = height.sort((a, b) => b - a);
      
    let maxNum = sortedAr[0];
    
    if (k > maxNum) {
      return 0;
    } else {
      return maxNum - k;
    }
    
    };

    function hurdleRace(k, height) {

      const maxNum = Math.max(...height);
        
      return k > maxNum ? 0 : maxNum - k;
      
      };