const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

console.log(sumRange(5));

// 1. sumRange(3)
// 2.      return 3 + sumRange(2)
// 3.                  return 2 + sumRange(1)
// 4.                              return 1;

// In the above scenario is displayed how recurssion works
// the equation gets simplified from last step(return 1) to one by one step up
// until it returns final return at step 2
