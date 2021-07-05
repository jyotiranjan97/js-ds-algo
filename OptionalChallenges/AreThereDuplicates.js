// Implement a function called areThereDuplicates
// which accepts a variable number of arguments
// and checks whether there are any duplicates
// among the arguments passed in.
// Time Complexity - O(n)/O(nlogn); Space Complexity - O(n)/O(1)

const areThereDuplicates = (...args) => {
  // create a frequency counter for args, frequencyCounter
  // key = 'input', value = 'no of occurrence'
  const frequencyCounter = {};
  for (let i of args) {
    // if for any key, we will get frequency more than 1, return true
    if (frequencyCounter[i]) {
      return true;
    } else {
      frequencyCounter[i] = 1;
    }
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
