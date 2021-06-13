// for loop addition

const addUpto = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

console.log(addUpto(6));

// will take more time when 'n' increases.
