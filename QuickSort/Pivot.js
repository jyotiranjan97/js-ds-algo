// 1 - It will help to accept three arguments: an array, a start index,
//     and an end index (these can default to 0 and the array length minus 1, respectively)
// 2 - Grab the pivot from the start of the array
// 3 - Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// 4 - Loop through the array from the start until the end
// 5 - If the pivot is greater than the current element, increment the pivot index variable
//     and then swap the current element with the element at the pivot index
// 6 - Swap the starting element (i.e. the pivot) with the pivot index
// 7 - Return the pivot index

const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// console.log(pivotHelper([5, 4, 3, 6, 8]));

module.exports = { pivotHelper };
