// Write a function called maxSubarraySum which accepts
// an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// Naive Solution
const maxSubarraySumNaive = (arr, num) => {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};
// Time Complexity - O(N^2)

// Sliding Window Solution
const maxSubarraySum = (arr, num) => {
  // if arr.length < num then 'undefined'
  if (arr.length < num) {
    return undefined;
  }
  let max = 0;
  let temp = 0;
  // add first 'num's of arr elements and add to a 'temp' value
  for (let i = 0; i < num; i++) {
    temp += arr[i];
  }
  // let that 'temp' 'maxSum'
  max = temp;
  // loop through the array from starting index = num through array.length - 1
  for (let i = num; i < arr.length; i++) {
    // decrease 'temp' by prev 1 value and add current index value and save to 'temp'
    temp = temp - arr[i - num] + arr[i];
    // store the 'max' = maximum in between both of these values
    max = Math.max(max, temp);
  }
  return max;
};
// Time Complexity - O(N)

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
