// Start looping from with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array
const bubbleSort = (arr) => {
  const sortedArray = [...arr];
  for (let i = sortedArray.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        sortedArray[j] = sortedArray[j] + sortedArray[j + 1];
        sortedArray[j + 1] = sortedArray[j] - sortedArray[j + 1];
        sortedArray[j] = sortedArray[j] - sortedArray[j + 1];
      }
    }
  }
  return sortedArray;
};

console.log(bubbleSort([5, 3, 4, 1, 2]));

// Using swap

const bubbleSortWithSwap = (arr) => {
  const sortedArray = [...arr];

  for (let i = sortedArray.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        swap(sortedArray, j, j + 1);
      }
    }
  }
  return sortedArray;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(bubbleSortWithSwap([37, 45, 29, 8, 12, 88, -3]));
