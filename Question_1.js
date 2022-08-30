/* QUESTION 1:-  Using the most appropriate means, implement an "isNullOrEmpty" check on the standard
 String type. It should be functionally equivalent without calling any "isNullOrEmpty" built in function. */

 const isNullOrEmpty = (val) => {
  return val === undefined || val == null || val.length <= 0 ? true : false;
};

console.log(isNullOrEmpty(null)); // true
console.log(isNullOrEmpty("a")); // false
console.log(isNullOrEmpty("")); // true
console.log(isNullOrEmpty("null")); // false

