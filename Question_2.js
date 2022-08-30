/* QUESTION 2:- Write a function that takes a single positive integer, and returns a collection / sequence (e.g.array) of integers. The return value should contain those integers that are positive divisors of the input integer. */

function factors(num) {
  var str = "0";
  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      str = str + "," + i;
    }
  }
  console.log(`{${str}}`);
}

factors(60);
