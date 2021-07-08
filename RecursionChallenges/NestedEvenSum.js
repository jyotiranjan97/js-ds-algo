// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested object.

const nestedEvenSum = (object) => {
  let sum = 0;
  for (let elem in object) {
    if (typeof object[elem] === "object") {
      sum = sum + nestedEvenSum(object[elem]);
    } else if (typeof object[elem] === "number" && object[elem] % 2 === 0) {
      sum += object[elem];
    }
  }
  return sum;
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
