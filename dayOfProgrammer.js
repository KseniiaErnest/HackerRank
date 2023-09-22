/* Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:

Divisible by 400.
Divisible by 4 and not divisible by 100.
Given a year, , find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y. 
Function Description

Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.

dayOfProgrammer has the following parameter(s):

year: an integer
Sample Input 0

2017
Sample Output 0

13.09.2017
Explanation 0

In the year  = 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days, June has 30 days, July has 31 days, and August has 31 days. When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243. Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that it falls on day 13 of the 9th month (September). We then print the full date in the specified format, which is 13.09.2017.
*/

function dayOfProgrammer(year) {
  let februaryDays = 0;
  
  if (year === 1918) {
    februaryDays = 15;
  }  else if ((year < 1918 && year % 4 === 0) || (year > 1918 && ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0))) ) {
    februaryDays = 29;
  } else {
    februaryDays = 28;
  }
    
  let sum = 31 + 31 + 30 + 31 +30 + 31 + 31 + februaryDays;
    
  return `${256 - sum}.09.${year}`
  
  }

  // Refactoring
  function dayOfProgrammer(year) {
    const isLeapYear =
      (year < 1918 && year % 4 === 0) || // Julian calendar
      (year > 1918 && ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0))); // Gregorian calendar
  
    const februaryDays = (year === 1918) ? 15 : (isLeapYear ? 29 : 28);
  
    const sum = [31, 31, 30, 31, 30, 31, 31, februaryDays].reduce((acc, days) => acc + days, 0);
  
    return `${256 - sum}.09.${year}`;
  }