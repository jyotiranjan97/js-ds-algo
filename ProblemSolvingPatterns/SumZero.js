// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// Naive Solution
const sumZeroNaive = (arr) => {
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // create another loop except index till first loop's starting index
    for (let j = i + 1; j < arr.length; j++) {
      // check if sum is zero and log the pair
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

console.log(sumZeroNaive([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZeroNaive([-2, 0, 1, 3])); // undefined
console.log(sumZeroNaive([1, 2, 3])); // undefined
// Here Time Complexity - O(N^2); Space Complexity - O(1)

// MultiPointer Solution
const sumZero = (arr) => {
  // initialize two variable 'left' and 'right' to calculate from both ends
  let left = 0;
  let right = arr.length - 1;
  // loop through until left > right
  while (left < right) {
    //calculate sum by adding left and right index of array
    const sum = arr[left] + arr[right];
    // check if sum is zero and log the pair
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    // if sum > 0 decrease right
    else if (sum > 0) {
      right--;
    }
    // else increase left
    else {
      left++;
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
// Here Time Complexity - O(N); Space Complexity - O(1)
