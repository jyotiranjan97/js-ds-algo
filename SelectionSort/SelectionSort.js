// 1 - Store the first element as the smallest value you've seen so far.
// 2 - Compare this item to the next item in the array until you find a smaller number.
// 3 - If a smaller number is found, designate that smaller number to be the new "minimum" and
//     continue until the end of the array.
// 4 - If the "minimum" is not the value (index) you initially began with, swap the two values.
// 5 - Repeat this with the next element until the array is sorted.Store the first element
//     as the smallest value you've seen so far.
// 6 - Compare this item to the next item in the array until you find a smaller number.
// 7 - If a smaller number is found, designate that smaller number to be the new "minimum"
//     and continue until the end of the array.
// 8 - If the "minimum" is not the value (index) you initially began with, swap the two values.
// 9 - Repeat this with the next element until the array is sorted.

const selectionSort = (arr) => {
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) swap(arr, i, min);
  }
  return arr;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(selectionSort([5, 4, 3, 1, 2]));
