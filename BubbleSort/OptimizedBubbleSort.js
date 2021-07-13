// For almost sorted Array it's a trade off to go until the loop breaks.
// So we should break out of loop if no swaps happens in inner iteration.

const bubbleSort = (arr) => {
  const sortedArray = [...arr];
  let noSwap = false;
  for (let i = sortedArray.length - 1; i >= 0; i--) {
    noSwap = true; // let swap is not happening
    for (let j = 0; j <= i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        swap(sortedArray, j, j + 1);
        noSwap = false; // if swap happens then make it false
      }
    }
    if (noSwap) break;
  }
  return sortedArray;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
