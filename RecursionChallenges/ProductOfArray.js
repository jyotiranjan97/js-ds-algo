// Write a function called productOfArray which takes an array of numbers
// and returns the product of them all

const productOfArray = (arr) => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
