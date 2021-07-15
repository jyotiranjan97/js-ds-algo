// 1 - Break up the array into halves until you have arrays that are empty or have one element
// 2 - Once you have smaller sorted arrays, merge those arrays with other sorted arrays
//     until you are back at the full length of the array
// 3 - Once the array has been merged back together, return the merged (and sorted!) array

const mergeArrays = require("./MergeArrays");

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  let leftArr = arr.slice(0, arr.length / 2);
  let rightArr = arr.slice(arr.length / 2);
  return mergeArrays.merge(mergeSort(leftArr), mergeSort(rightArr));
};

console.log(mergeSort([2, 5, 1, 45, 4, 22, 10]));
