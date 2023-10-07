/* A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts.
Function Description

Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

angryProfessor has the following parameter(s):

int k: the threshold number of students
int a[n]: the arrival times of the  students
Returns

string: either YES or NO */
function angryProfessor(k, a) {
  let countS = 0;
   
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      countS++;
    }
  }
 
   if (countS >= k) {
     return 'NO'
   } else {
     return 'YES'
   }
 };


 // or
 function angryProfessor(k, a) {
  const onTimeStudents = a.filter((onTime) => onTime <= 0);
  const countS = onTimeStudents.length;

  return countS >= k ? 'NO' : 'YES';
 };


