// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of subarray with the length of the number passed to the function.
// Note that the subarray must consist of consecutive elements from original array

const maxSubarraySum = (arr, pairNo) => {
  // If pairNo > arr.length, return null
  if (pairNo > arr.length) return null;
  // initialize sum and tempSum.
  let sum = 0;
  // add first 'pairNo' of elements in array and assign to sum of
  for (let i = 0; i < pairNo; i++) {
    sum += arr[i];
  }
  let tempSum = sum;
  // loop through arr starting index pairNo
  for (let i = pairNo; i < arr.length; i++) {
    // on each iteration add current index value, and substract the left most value of the window
    tempSum = tempSum + arr[i] - arr[i - pairNo];
    // if tempSum > sum, assign to sum
    if (tempSum > sum) sum = tempSum;
  }
  // return sum
  return sum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
