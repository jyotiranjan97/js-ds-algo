// Write a function called findLongestSubstring, which accepts a string
// and returns the length of the longest substring with all distinct characters.
// Time Complexity - O(n)

const findLongestSubstring = (string) => {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
};

console.log(findLongestSubstring("")); //0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawsome")); // 6
console.log(findLongestSubstring("thecatintheheat")); // 7
console.log(findLongestSubstring("bbbbbb")); //1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
