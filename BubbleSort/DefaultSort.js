const result = ["Steele", "Colt", "Data Structures", "Algorithms"].sort();
console.log(result);
// [ "Algorithms", "Colt", "Data Structures", "Steele" ]
// This works.. yay!

const sorted = [6, 4, 15, 10].sort();
console.log(sorted);
// [ 10, 15, 4, 6 ]
// But this doesn't.. why?
//
// The built-in sort method accepts an optional comparator function
// You can use this comparator function to tell JavaScript how you want it to sort
// The comparator looks at pairs of elements (a and b),
// determines their sort order based on the return value
//  1. If it returns a negative number, a should come before b
//  2. If it returns a positive number, a should come after b,
//  3. If it returns 0, a and b are the same as far as the sort is concerned

const comparedSorted = [6, 4, 15, 10].sort((a, b) => (a - b > 0 ? 1 : -1));
console.log(comparedSorted);
// This works now.. awsome
