/* 
A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1  is always on the right side.
When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

Given  n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.
 */

function pageCount(n, p) {
  // Calculate the minimum number of page turns starting from the front
  const fromFront = Math.floor(p / 2);
  
  let fromBack = 0;
  
  if (n % 2 === 0) {
   fromBack = Math.ceil((n / 2) - (p / 2));
  } else {
    fromBack = Math.floor((n / 2) - (p / 2));
  }

  return Math.min(fromFront, fromBack);
}

// Dividing p by 2 accounts for the fact that each page turn flips two pages (one on the left and one on the right). 
//This calculation tells you how many page turns are needed to reach the middle of the book (assuming the book has an even number of pages).

// (n / 2) calculates the total number of pages divided by 2. Since each page turn flips two pages (one on the left and one on the right), dividing by 2 gives you the number of page turns required to reach the middle of the book.


// (p / 2) calculates half the number of pages needed to reach the target page p when starting from the back. This represents the number of page turns required to reach page p from the middle of the book if you were to start from the back.

// Subtracting (p / 2) from (n / 2) gives you the remaining number of page turns needed to get from the middle of the book to page p. This represents the additional page turns needed to reach page p from the back.
