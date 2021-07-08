// Write a recursive function called isPallindrome
// which returns true if the string passed to it is a pallindrome
// otherwise it returns false

const isPalindrome = (string) => {
  // If condition reaches here, will return true
  if (string.length <= 0) return true;

  // if this condition happens, will return false
  if (string.charAt(0) !== string.charAt(string.length - 1)) return false;

  return isPalindrome(string.slice(1, string.length - 1));
};

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
