// Write a function called power which accepts a base and an exponent.
// The function should returnthe power of the base to exponent.
// Should mimic like Math.pow() - do not worry about negative numbers

const power = (base, exp) => {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
};

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
