// 1 - Call the pivot helper on the array
// 2 - When the helper returns to you the updated pivot index,
//     recursively call the pivot helper on the subarray to the left of that index,
//     and the subarray to the right of that index
// 3 - Your base case occurs when you consider a subarray with less than 2 elements

const { pivotHelper } = require("./Pivot");

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

console.log(quickSort([4, 6, 2, 8, 1, 0, 3, 5]));
