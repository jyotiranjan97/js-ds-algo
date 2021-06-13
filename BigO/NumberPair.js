const { performance } = require("perf_hooks");

const displayPairsUpto = (n) => {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(j, i);
    }
  }
};

const t0 = performance.now();
displayPairsUpto(5);
const t1 = performance.now();
console.log(`Time lapsed: ${(t1 - t0) / 1000} seconds.`);
// Time lapsed: 0.007433499991893768 seconds.

const t2 = performance.now();
displayPairsUpto(10);
const t3 = performance.now();
console.log(`Time lapsed: ${(t3 - t2) / 1000} seconds.`);
// Time lapsed: 0.008745600000023841 seconds.

const t4 = performance.now();
displayPairsUpto(50);
const t5 = performance.now();
console.log(`Time lapsed: ${(t5 - t4) / 1000} seconds.`);
// Time lapsed: 0.039535900011658666 seconds.

// Here Time complexity is increasing quadratically(n^2) so O(n^2)
// Space Complexity - O(1), as we are using i and j variables only irrespective of input.
