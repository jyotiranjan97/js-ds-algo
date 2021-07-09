// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

const naiveSearch = (string, word) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (word[j] !== string[i + j]) break;
      // if j is reached word.length - 1, means the word is matched
      // so count will be incremented
      if ((j = word.length - 1)) count++;
    }
  }
  return count;
};

console.log(naiveSearch("We are cool", "cool"));
