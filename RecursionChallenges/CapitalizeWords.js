// Write a function capitalizeWords.
// Given an array of words, return a new arraycontaining each world capital

const capitalizeWords = (arr) => {
  const newArr = [];
  if (arr.length === 0) return newArr;
  newArr.push(arr[0].toUpperCase());
  return newArr.concat(capitalizeWords(arr.slice(1)));
};

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
