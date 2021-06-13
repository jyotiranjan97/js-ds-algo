// for loop addition

const { performance } = require("perf_hooks");

const addUpto = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

const t1 = performance.now();
addUpto(1000000000); // giving a large input
const t2 = performance.now();

console.log(`Time lapsed: ${(t2 - t1) / 1000} seconds.`);
// we can ignore time required for this time calculation

// Output:
// Time lapsed: 1.4016816000044345 seconds.

// Note - the aboove result varries on every run and different machine for same input

// Time Complexity - O(n) as output is calculated n times, so ouput depends on 'n'
// Space Complexity - O(1) as we are re-using 'total' variable everytime
