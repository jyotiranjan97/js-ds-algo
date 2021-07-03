// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The frequency of values must be the same.
// e.g
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// Naive Solution
const sameNaive = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

console.log(sameNaive([1, 2, 3, 4, 6, 8], [4, 1, 9, 36, 64, 16]));
// In the above solution Big O = O(n^2)

// Frequency Counter
const same = (arr1, arr2) => {
  // if lengths are different then just return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // convert the arrays into objects where
  // 'key' is the values in array and
  // 'value' is no. of occurences of those values
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    // check if the square keys of frequencyCounter1 is present in frequencyCounter2
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // if above condition satisfies then check if no of occurence is also same i.e. values
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 3, 4, 6, 8], [4, 1, 9, 36, 64, 16])); // true
// Here Big O = O(n)

// The idea behind the Frequency Counter is that
// we can use Object to represent values and occurences in key value pair
// Searching in an Object by key is Verry Efficient
