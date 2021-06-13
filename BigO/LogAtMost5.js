const { performance } = require("perf_hooks");

const logAtLeast5 = (n) => {
  const loopUpto = Math.min(5, n);
  for (let i = 0; i <= loopUpto; i++) {
    console.log(i);
  }
};

const t0 = performance.now();
logAtLeast5(3);
const t1 = performance.now();
console.log(`Time lapsed: ${(t1 - t0) / 1000} seconds.`);
// Time lapsed: 0.005625699996948242 seconds.

const t2 = performance.now();
logAtLeast5(30);
const t3 = performance.now();
console.log(`Time lapsed: ${(t3 - t2) / 1000} seconds.`);
// Time lapsed: 0.00034769999980926514 seconds.

const t4 = performance.now();
logAtLeast5(300);
const t5 = performance.now();
console.log(`Time lapsed: ${(t3 - t2) / 1000} seconds.`);
// Time lapsed: 0.00034769999980926514 seconds.

// As time is constant as 'n' grows, so Time Complexity - O(1)
// Space Complexity - O(1) as one variable is used for storing data.
