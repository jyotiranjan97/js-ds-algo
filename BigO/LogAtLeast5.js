const { performance } = require("perf_hooks");

const logAtLeast5 = (n) => {
  const loopUpto = Math.max(5, n);
  for (let i = 0; i <= loopUpto; i++) {
    console.log(i);
  }
};

const t0 = performance.now();
logAtLeast5(3);
const t1 = performance.now();
console.log(`Time lapsed: ${(t1 - t0) / 1000} seconds.`);
// Time lapsed: 0.006872800007462501 seconds.

const t2 = performance.now();
logAtLeast5(30);
const t3 = performance.now();
console.log(`Time lapsed: ${(t3 - t2) / 1000} seconds.`);
// Time lapsed: 0.0013311000019311904 seconds.

const t4 = performance.now();
logAtLeast5(300);
const t5 = performance.now();
console.log(`Time lapsed: ${(t3 - t2) / 1000} seconds.`);
// Time lapsed: 0.0012414999902248382 seconds.

// As time is increasing as 'n' grows, so Time Complexity: O(n)
// Space Complexity - O(1) as one variable is used for storing data.
