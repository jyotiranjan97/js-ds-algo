const fruits = ["apple", "banana", "coconut", "dragon fruit"];
const numbers = [3, 9, 4, 2, 6, 1, 7, 5, 8, 0];

// 1 - Push and Pop
fruits.pop();
console.log("Pop ->", fruits);
fruits.push("straberry");
console.log("Push ->", fruits);
// Time Complexity - O(1)

// 2 - Shift and Unshift
fruits.shift();
console.log("Shift ->", fruits);
fruits.unshift("orange");
console.log("Unshift ->", fruits);
// Time Complexity - O(n)
// Inserting and Removing something from beginning of array
// causes the indexing to rearrange itself, so dependent on Array size

// 3 - Concat
let vegetables = ["brinjal", "lady finger"];
console.log("Concat ->", vegetables.concat(fruits));
// Say fruits - O(n) and vegetables - O(m)
// For concat - O(n + m)
// In General Time Complexity - O(n)

// 4 - Slice
const slicedFruit = fruits.slice(2, 4);
console.log(slicedFruit);
// Time Complexity - O(n)

// 5 - Splice
fruits.splice(1, 0, "berry");
console.log("Splice ->", fruits);
// Time Complexity - O(n), because index rearranging happens

// 6 - Sort
const increasingOrder = numbers.sort((a, b) => a - b);
console.log(increasingOrder);
// Time Complexity - O(nlog(n))
// QuickSort and InsertionSort in the algorithm of this method

// 7 - Map, Filter, ForEach, Reduce
console.log("Map ->");
fruits.map((elem) => console.log(elem));

const greaterTo5 = numbers.filter((num) => num > 5);
console.log("Filter ->", greaterTo5);

const squareNums = [];
numbers.forEach((num) => squareNums.push(num * num));
console.log("ForEach ->", squareNums);

const sumOfNums = numbers.reduce((sum, num) => sum + num, 0);
console.log("Reduce ->", sumOfNums);

// Time Complexity of above methods - O(n)
// As we are executing opration on each elements, so time increases with Array size

// Please go through the Official Specification to know more about these methods
// link - https://tc39.es/ecma262/
