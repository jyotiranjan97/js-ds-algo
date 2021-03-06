// 1 - Start by picking the second element in the array
// 2 - Now compare the second element with the one before it and swap if necessary.
// 3 - Continue to the next element and if it is in the incorrect order,
//     iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
// 4 - Repeat until the array is sorted.

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > currentVal) swap(arr, j, j + 1);
      else break;
    }
  }
  return arr;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(insertionSort([2, 1, 9, 76, 4]));
