// Write a function called averagePair. Given a sorted array of integers and a target average
// determine if there is a pair of values in the array
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.
// Time Complexity - O(n); Space Complexity - O(1)

const averagePair = (arr, avg) => {
  // create two pointers 'start' and 'end'
  let start = 0;
  let end = arr.length - 1;
  // iterate until start < end
  while (start < end) {
    // get average of arr[start] ad arr[end]
    const average = (arr[start] + arr[end]) / 2;
    // if average = avg , return true
    if (average === avg) {
      return true;
    }
    // if average < avg, start ++
    else if (average < avg) {
      start++;
    }
    // if average > avg, end --
    else {
      end--;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 1.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
