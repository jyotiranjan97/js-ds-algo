// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

const countUniqueValues = (arr) => {
  // start two pointers 'count' and 'check' with 1st and 2nd indices
  let count = 0;
  let check = 1;
  if (arr.length === 0) {
    return 0;
  }
  // Loop till 'check < arr.length'
  while (check < arr.length) {
    if (arr[check] !== arr[count]) {
      // if some value is greater than arr[count] reassign count and arr[count]
      count++;
      arr[count] = arr[check];
    }
    // increase check to compare arr[count] with rest of array values
    check++;
  }
  return count + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
