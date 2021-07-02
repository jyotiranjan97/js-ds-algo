// Function to return Sum of Numbers
// ============================================
// 1. Restate the Problem in own words.
"Simple Addition";

// 2. Inputs that go into the problem
"Is it float, Int, String or Large Value(Infinity)";

// 3. Outputs that should come from solution of the problem
"Is it float, Int, String or Large Value(Infinity)";

// 4. Can the Outputs be Determined by from Provided Inputs ?
"Applicable sometimes, but not often";

// 5. Label Important Pieces of Data that are part of the Problem
"Understanding we need Sum no matter what";

// Given inputs are Numbers and less that Number.MAX_VALUE
const sum = (...args) => {
  const inputs = args;
  return inputs.reduce((acc, num) => acc + num, 0);
};

console.log(sum(1, 2, 4));
