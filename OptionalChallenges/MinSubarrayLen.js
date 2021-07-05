// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.
// This function should return the minimal length of contiguous
// subarray of which the sum is greater than or equal to the integer passed
// If there isn't one return 0
// Time Complexity - O(n), Space Complexity - O(1)

const minSubArrayLen = (arr, sum) => {
  // Initialize tempSum, start and end of window, and minLegth of window
  let tempSum = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;
  // loop through until start < arr.length
  while (start < arr.length) {
    // if tempSum < sum then increase window size
    if (tempSum < sum && end < arr.length) {
      tempSum += arr[end];
      end++;
    }
    // else if tempSum >= sum then decrease window size and set minLength to window size
    // decrease window size
    else if (tempSum >= sum) {
      minLength = Math.min(minLength, end - start);
      tempSum -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> as [4,3] is smallest subArray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> as [5,4] is smallest subArray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> as [62] is smallest subArray
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
