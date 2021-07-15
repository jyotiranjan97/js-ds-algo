const merge = (arr1, arr2) => {
  // create an empty array
  const mergedArr = [];
  // create two pointers on arr1 and arr2, i and j
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    // if arr[i] < arr[j] we push arr[i] to empty array and increase i
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i += 1;
    }
    // if arr[i] > arr[j] we push arr[j] to empty array and increase j
    else {
      mergedArr.push(arr2[j]);
      j += 1;
    }
  }
  // if either i or j reached end of their respective array,
  // then push remaining elements of the remaining array
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  return mergedArr;
};

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// exporting this function to use this in another file
module.exports = { merge };
