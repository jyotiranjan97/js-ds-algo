const collectOddValues = (arr) => {
  const newArr = [];
  if (arr.length === 0) return newArr;

  if (arr[0] % 2 === 1) {
    newArr.push(arr[0]);
  }
  return newArr.concat(collectOddValues(arr.slice(1)));
};

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
