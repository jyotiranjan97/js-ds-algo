// Write a recursive function called flatten
// which accepts an array and returns a new array
// with all values flattened.

const flatten = (arr) => {
  let flattenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArr = flattenArr.concat(flatten(arr[i]));
    } else {
      flattenArr.push(arr[i]);
    }
  }
  return flattenArr;
};

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
