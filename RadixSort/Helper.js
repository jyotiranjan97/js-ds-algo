const getDigit = (num, place) => {
  // return num.toString().split("").reverse()[place];
  return Math.floor(num / Math.pow(10, place)) % 10;
};

// console.log(getDigit(347637, 2));

const digitCount = (num) => {
  // return num.toString().length;
  if (num === 0) return 0;
  return Math.floor(Math.log10(num)) + 1;
};

// console.log(digitCount(324));

const mostDigits = (arr) => {
  let maxDigits = 0;
  for (let num of arr) {
    if (digitCount(num) > maxDigits) maxDigits = digitCount(num);
  }
  return maxDigits;
};

// console.log(mostDigits([34, 1, 456, 23455]));

module.exports = { getDigit, digitCount, mostDigits };
