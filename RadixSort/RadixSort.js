// 1 - Define a function that accepts list of numbers
// 2 - Figure out how many digits the largest number has
// 3 - Loop from k = 0 up to this largest number of digits
// 4 - For each iteration of the loop:
//     a. Create buckets for each digit (0 to 9)
//     b. place each number in the corresponding bucket based on its kth digit
// 5 - Replace our existing array with values in our buckets, starting with 0 and going up to 9
// 6 - return list at the end!

const helper = require("./Helper");

const radixSort = (arr) => {
  let maxDigits = helper.mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = helper.getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

console.log(radixSort([10, 34, 45, 5, 2, 333, 23, 100]));
