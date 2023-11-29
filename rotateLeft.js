/*
A left rotation operation on an array of size N shifts each of the array's elements 1 unit to the left.
Given an integer,d , rotate the array that many steps left and return the result.

Function Description

Complete the rotateLeft function in the editor below.

rotateLeft has the following parameters:

int d: the amount to rotate by
int arr[n]: the array to rotate
Returns

int[n]: the rotated array
*/

function rotateLeft(d, arr) {
  return arr.slice(d).concat(arr.slice(0, d))
  
  }