// Write a function called reverse which accepts a string and returns new string in reverse.

const reverse = (string) => {
  if (string.length <= 1) return string.charAt(0);
  return reverse(string.slice(1)) + string.charAt(0);
};

console.log(reverse("awesome"));
console.log(reverse("rithmschool"));
