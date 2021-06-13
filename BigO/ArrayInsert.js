const storeEvenData = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log(storeEvenData([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Time Complexity - O(n)
// Space Complexity - O(n), as the 'newArr' grows if "input" grows.
