/* Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

Note: |x| is the absolute value of x  */

//////////////////////////////////////////////////////////////////////
/* For visualization:
const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]; 
2D array representing a square matrix
 */

function diagonalDifference(arr) {
  const n = arr.length; // Determine the size of the square matrix
  let diagPr = 0; // Initialize a variable that represents sum of elements Primary diagonal
  let diagSn = 0; // Initialize a variable that represents sum of elements Secondary diagonal
  

  // I use nested loops to iterate over the rows (i) and columns (i);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        diagPr += arr[i][j];
      }
      
      if (i === n - j - 1) {
        diagSn += arr[i][j];
      }
    }
  }
 
   return Math.abs(diagPr - diagSn);
 }

 // Inside the loops there are conditional statements:
 // if (i === j): This checks if the current element belongs to the primary diagonal (where the row index is equal to the column index). If it does, the element is added to diagPr.
 //  if (i === n - j - 1). This checks if the current element belongs to the secondary diagonal (where the row index plus the column index equals n - 1). If it does, the element is added to diagSn.
 // To calculte absolute diffeence i use the Math.abs() static method;


 /* The concept:
  ndexing for diagonals in a matrix, and it's based on the properties of square matrices. A square matrix is a matrix that has the same number of rows and columns. In such matrices, there are two main diagonals:
  Primary Diagonal (Main Diagonal): This diagonal runs from the top-left corner to the bottom-right corner of the matrix. The elements on this diagonal have the same row and column indices. For example, in a 3x3 matrix, the primary diagonal consists of elements at indices (0, 0), (1, 1), and (2, 2).

Secondary Diagonal: This diagonal runs from the top-right corner to the bottom-left corner of the matrix. The elements on this diagonal have row indices that increase as column indices decrease. For example, in a 3x3 matrix, the secondary diagonal consists of elements at indices (0, 2), (1, 1), and (2, 0).
 For the primary diagonal, the row and column indices are equal, and for the secondary diagonal, the sum of the row and column indices equals n - 1, where n is the number of rows (or columns) in the square matrix.
  */

