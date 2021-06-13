// using math formula

const { performance } = require("perf_hooks");

const addUpto = (n) => {
  return (n * (n + 1)) / 2;
};

const t1 = performance.now();
addUpto(1000000000); // giving a large input
const t2 = performance.now();

console.log(`Time lapsed: ${(t2 - t1) / 1000} seconds.`);
// we can ignore time required for this time calculation

// Output:
// Time lapsed: 0.000030299991369247435 seconds.

// Note - the aboove result not varries a lot on every run for same input

// Time Complexity - O(1) as there is only 1 operation to provide the output
// Space Complexity - O(1) as no new variable is used.
