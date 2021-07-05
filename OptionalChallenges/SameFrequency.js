// Write a function called sameFrequency.
// Given two positive integers, find out if two integers have same number of digits.
// Time complexity should be O(n)

const sameFrequency = (num1, num2) => {
  // If no of digits of 2 integers not same, false
  if (num1.toString().length !== num2.toString().length) {
    return false;
  }
  // create frequency counter for num1, lookup, key - digit; value - frequency
  const lookup = {};
  while (num1 !== 0) {
    const digit = num1 % 10;
    num1 = Math.floor(num1 / 10);
    lookup[digit] = (lookup[digit] || 0) + 1;
  }
  // loop through each digits of num2
  while (num2 !== 0) {
    const digit = num2 % 10;
    num2 = Math.floor(num2 / 10);
    // if num exists in lookup's key, then decrease value from lookup
    if (digit in lookup) {
      lookup[digit] = lookup[digit] - 1;
      // is frequency mathching
      if (lookup[digit] < 0) {
        return false;
      }
    } else {
      // if num not exists in lookup, false
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
