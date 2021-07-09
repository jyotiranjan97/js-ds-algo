// Write a function called linearSearch which accepts an array and a value.
// Loop through the array and check if the current array element is equal to the value.
// If it is, return the index at which the element is found
// If the value is never found, return -1

const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([1, 2, 3, 4, 5], 6));

// Arrays.find(), Arrays.indexOf(), Arrays.findIndex() all are implementations of LinearSearch
// Big O - O(N)
