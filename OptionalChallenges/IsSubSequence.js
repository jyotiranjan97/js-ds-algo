// Write a function called isSubsequence which takes in
// two strings and checks whether the characters in the
// first string form subsequence of the characters in the second string.

const isSubsequence = (word, sequence) => {
  // start 2 pointers i and j
  let i = 0;
  let j = 0;
  // iterate until i < word.length
  while (i < word.length) {
    // if word[i] = sequence[j], increment i
    if (word[i] === sequence[j]) {
      i++;
    }
    // if j = sequence.length - 1, exit from loop
    if (j === sequence.length - 1) {
      break;
    }
    // increment j
    j++;
  }
  if (i === word.length) {
    return true;
  } else {
    return false;
  }
};

console.log(isSubsequence("hello", "hello world!")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
