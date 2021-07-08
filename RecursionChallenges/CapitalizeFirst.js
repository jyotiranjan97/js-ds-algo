// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

const capitalizeFirst = (arr) => {
  const newArr = [];
  if (arr.length === 0) return newArr;
  const firstLetter = arr[0].charAt(0).toUpperCase();
  newArr.push(firstLetter + arr[0].slice(1));
  return newArr.concat(capitalizeFirst(arr.slice(1)));
};

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car', 'Taco', 'Banana']
