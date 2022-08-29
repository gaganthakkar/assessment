/*
QUESTION 4:- Write a function that takes an array of integers, and returns an array of integers. The return value should contain those integers which are most common in the input array.
*/

let arr = [1, 2, 3, 4, 5, 6, 4, 3];

let hasDuplicate = arr.filter((val, i) => {
  if (arr.indexOf(val) !== i) {
    return val;
  }
});
console.log(hasDuplicate);
